import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/mission";
import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { motion } from "framer-motion";

const MissionPage = () => {
  const { startTimer, stopTimer } = useContext(TimerContext);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  const { missionId } = useParams();
  const mission = missions.find((m) => m.id === parseInt(missionId));
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = mission.questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (!selected) return;
    const correct = selected.startsWith(currentQuestion.answer);
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      const key = `score_m${mission.id}`;
      const current = parseInt(localStorage.getItem(key) || "0");
      localStorage.setItem(key, current + 1);
    }

    setTimeout(() => {
      setIsAnswered(false);
      setSelected("");
      if (currentQuestionIndex + 1 < mission.questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        navigate(`/result?mission=${mission.id}`);
      }
    }, 1800);
  };

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden flex items-center justify-center font-[Cinzel] px-3">
      {/* 🌌 Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_mission.jpg"
          alt="background"
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/bg_mission.jpg')] bg-cover opacity-10 z-0" />

      {/* ✨ Aura Effect */}
      <motion.div
        className="absolute z-0 rounded-full border border-[rgba(245,226,198,0.3)]"
        style={{
          width: "80%",
          height: "80%",
          boxShadow: "0 0 60px rgba(247,165,77,0.15)",
        }}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🎯 Main Content - Super Compact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Mini Header */}
        <motion.div
          className="text-center mb-3 p-3 border border-[rgba(245,226,198,0.4)] rounded-lg bg-black/40 backdrop-blur-md"
          style={{
            boxShadow: "0 0 15px rgba(247,165,77,0.25)",
          }}
        >
          <h1 className="text-lg font-bold text-yellow-200 truncate">
            {mission.title}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1 text-xs text-amber-300">
            <span>Soal {currentQuestionIndex + 1}/{mission.questions.length}</span>
          </div>
        </motion.div>

        {/* Super Compact Question Card */}
        <motion.div
          className="p-4 border border-[rgba(245,226,198,0.4)] rounded-lg bg-black/30 backdrop-blur-md"
          style={{
            boxShadow: "0 0 15px rgba(247,165,77,0.2)",
          }}
        >
          {/* Question Title - Mini */}
          <div className="mb-3 text-center">
            <h2 className="mb-1 text-sm font-bold truncate text-amber-400">
              {currentQuestion.title}
            </h2>
            <div className="w-12 h-0.5 bg-amber-500/40 rounded-full mx-auto"></div>
          </div>

          {/* Question Text - Super Compact */}
          <motion.p
            className="text-xs text-yellow-100 text-center mb-4 p-2 border border-amber-500/15 rounded bg-black/20 leading-tight line-clamp-3 max-h-[100px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentQuestion.question}
          </motion.p>

          {/* Ultra Compact Options */}
          <div className="grid grid-cols-1 gap-1.5 mb-3">
            {currentQuestion.options.map((opt, index) => (
              <motion.label
                key={opt}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`block p-2 rounded-md cursor-pointer border text-center text-xs font-medium transition-all ${
                  selected === opt
                    ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/30"
                    : "bg-black/40 border-amber-500/25 text-yellow-200 hover:bg-amber-500/10"
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="hidden"
                />
                {opt}
              </motion.label>
            ))}
          </div>

          {/* Mini Feedback */}
          {isAnswered && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-center p-2 rounded-md border text-xs font-bold ${
                isCorrect 
                  ? "bg-green-500/15 border-green-400 text-green-400" 
                  : "bg-red-500/15 border-red-400 text-red-400"
              }`}
            >
              {isCorrect ? "✅ Benar!" : "❌ Salah!"}
            </motion.div>
          )}

          {/* Mini Submit Button */}
          {!isAnswered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: selected ? 1.02 : 1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!selected}
              className={`w-full py-2 text-xs font-bold rounded-md border transition-all ${
                selected 
                  ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/30 hover:bg-amber-400" 
                  : "bg-gray-600 text-gray-400 border-gray-500 cursor-not-allowed"
              }`}
            >
              {selected ? "🔐 Kunci Jawaban" : "Pilih jawaban"}
            </motion.button>
          )}
        </motion.div>

        {/* Micro Progress Indicator */}
        <div className="flex justify-center items-center gap-1.5 mt-3 text-[10px] text-amber-300">
          <span>Progress:</span>
          <div className="flex gap-0.5">
            {mission.questions.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index <= currentQuestionIndex 
                    ? "bg-amber-500 shadow-[0_0_6px_rgba(247,165,77,0.6)]" 
                    : "bg-amber-500/20"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionPage;