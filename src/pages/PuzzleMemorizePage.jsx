import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { missions } from "../data/mission";

const PuzzleMemorizePage = () => {
  const { missionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [codes, setCodes] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const fromDashboard = location.state?.fromDashboard === true;
    const existingCodes = localStorage.getItem("memory_codes");

    if (fromDashboard || !existingCodes) {
      const mission = missions.find((m) => m.id === Number(missionId));
      if (mission && mission.codes) {
        setCodes(mission.codes);
        localStorage.setItem("memory_codes", JSON.stringify(mission.codes));
      }
    } else {
      setCodes(JSON.parse(existingCodes));
    }
  }, [location.state, missionId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleNext = () => {
    navigate(`/puzzle-question/${missionId}`);
  };

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden flex items-center justify-center font-[Cinzel]">
      {/* 🌌 Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_puzzle.jpg"
          alt="background"
          className="object-cover w-full h-full opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/bg_puzzle.jpg')] bg-cover opacity-10 z-0" />

      {/* ✨ Aura Effect */}
      <motion.div
        className="absolute z-0 rounded-full border border-[rgba(245,226,198,0.3)]"
        style={{
          width: "80%",
          height: "80%",
          boxShadow: "0 0 100px rgba(247,165,77,0.2)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🎯 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl p-6 mx-4 text-center"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-2xl font-bold text-yellow-200 md:text-3xl"
          style={{
            textShadow: "0 0 20px rgba(247,165,77,0.6)",
          }}
        >
          🧠 Hafalkan Kode Berikut!
        </motion.h1>

        {/* Codes Grid */}
        <div className="grid justify-center grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(codes).map(([label, value]) => (
            <motion.div
              key={label}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="p-4 text-left border border-yellow-500/50 rounded-xl bg-black/40 backdrop-blur-md w-full max-w-[240px] mx-auto"
              style={{
                boxShadow: "0 0 15px rgba(247,165,77,0.3)",
              }}
            >
              <p className="mb-2 text-sm font-semibold text-amber-300">{label}</p>
              <p className="text-xl font-bold text-center text-yellow-100">{value}</p>
            </motion.div>
          ))}
        </div>

        {/* Timer */}
        <motion.p 
          className="mb-6 text-lg font-semibold text-yellow-400"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ⏱️ Waktu mengingat: {timeLeft} detik
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 font-bold text-black transition-colors border rounded-lg bg-amber-500 border-amber-300 hover:bg-amber-400"
          style={{
            boxShadow: "0 0 20px rgba(247,165,77,0.5)",
          }}
        >
          Lanjut ke Pertanyaan
        </motion.button>
      </motion.div>

      {/* Timer Floating */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute z-20 top-4 right-4"
      >
        <div className="px-4 py-2 text-sm font-semibold border rounded-full border-amber-500/50 bg-black/60 backdrop-blur-md text-amber-300">
          ⏱️ {timeLeft}s
        </div>
      </motion.div>
    </div>
  );
};

export default PuzzleMemorizePage;