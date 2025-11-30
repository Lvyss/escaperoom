import { useNavigate, useSearchParams } from "react-router-dom";
import { missions } from "../data/mission";
import { useContext, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { motion } from "framer-motion";

const ResultPage = () => {
  const { elapsed, stopTimer } = useContext(TimerContext);
  const [params] = useSearchParams();
  const missionId = parseInt(params.get("mission") || "1");

  const mission = missions.find((m) => m.id === missionId);
  const name = localStorage.getItem("playerName");
  const kelas = localStorage.getItem("playerClass");
  const score = parseInt(localStorage.getItem(`score_m${missionId}`) || "0");

  const navigate = useNavigate();

  useEffect(() => {
    stopTimer();
  }, [stopTimer]);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (!mission) {
    return (
      <div className="h-[100svh] flex items-center justify-center bg-red-100 text-red-800 font-semibold text-center">
        <div className="p-6 bg-white rounded shadow">Misi tidak ditemukan!</div>
      </div>
    );
  }

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden flex items-center justify-center px-4 font-[Cinzel]">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_result.jpg"
          alt="background"
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d33] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.png')] bg-cover opacity-10 z-0" />

      {/* ✨ Aura Effect */}
      <motion.div
        className="absolute z-0 rounded-full border border-[rgba(245,226,198,0.3)]"

      />

      {/* 📜 Compact Result Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm p-6 border border-[rgba(245,226,198,0.5)] rounded-xl bg-black/40 backdrop-blur-md text-center"
        style={{
          boxShadow: "0 0 30px rgba(247,165,77,0.3), 0 0 60px rgba(251,191,36,0.15)",
        }}
      >
        {/* Header */}
        <motion.h2
          className="mb-4 text-xl font-bold text-yellow-200"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          🏆 Hasil Misi {missionId}
        </motion.h2>

        {/* Results Grid - Compact */}
        <div className="mb-6 space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between p-2 border rounded-lg border-amber-500/30 bg-black/20"
          >
            <span className="text-xs text-amber-300">Agen:</span>
            <span className="ml-2 text-sm font-bold text-white truncate">{name}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between p-2 border rounded-lg border-amber-500/30 bg-black/20"
          >
            <span className="text-xs text-amber-300">Kelas:</span>
            <span className="text-sm text-white">{kelas}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between p-2 border rounded-lg border-amber-500/30 bg-black/20"
          >
            <span className="text-xs text-amber-300">Skor:</span>
            <span className="text-sm font-bold text-amber-300">
              {score}/{mission.questions.length}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-between p-2 border rounded-lg border-amber-500/30 bg-black/20"
          >
            <span className="text-xs text-amber-300">Waktu:</span>
            <span className="text-sm font-bold text-white">{formatTime(elapsed)}</span>
          </motion.div>
        </div>

        {/* Score Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="relative flex items-center justify-center w-20 h-20 mx-auto mb-16 border-2 rounded-full border-amber-400"
          style={{
            boxShadow: "0 0 20px rgba(247,165,77,0.5)",
            background: "linear-gradient(135deg, rgba(247,165,77,0.1), rgba(251,191,36,0.05))"
          }}
        >
          <span className="text-2xl font-bold text-amber-300">{score}</span>
          <div className="absolute text-xs text-amber-200 -bottom-6">
            dari {mission.questions.length}
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(247,165,77,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          className="w-full py-2.5 text-sm font-bold text-black bg-amber-500 rounded-lg border border-amber-300 hover:bg-amber-400 transition-all"
          style={{
            boxShadow: "0 0 15px rgba(247,165,77,0.3)",
          }}
        >
          🗺️ Kembali ke Dashboard
        </motion.button>

        {/* Mini Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2 mt-4 text-xs text-amber-300"
        >
          <span>Misi {missionId} Selesai</span>
          <div className="w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(247,165,77,0.6)]"></div>
          <span>{Math.round((score / mission.questions.length) * 100)}%</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultPage;