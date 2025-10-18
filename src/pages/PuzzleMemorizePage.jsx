import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
      // 🧩 Generate kode baru setiap masuk dari dashboard
      const letters = ["A", "B", "C", "D", "E"];
      const generated = {};
      letters.forEach((l) => {
        generated[l] = Math.floor(Math.random() * 900 + 100);
      });
      setCodes(generated);
      localStorage.setItem("memory_codes", JSON.stringify(generated));
    } else {
      // 🔁 Gunakan kode lama kalau bukan dari dashboard
      setCodes(JSON.parse(existingCodes));
    }
  }, [location.state]);

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
    <div className="h-[100svh] bg-[#0d0f1a] text-yellow-200 flex flex-col items-center justify-center font-[Cinzel]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-2xl"
      >
        🧠 Hafalkan Kode Berikut!
      </motion.h1>

      <div className="grid grid-cols-5 gap-4 mb-4">
        {Object.entries(codes).map(([letter, num]) => (
          <motion.div
            key={letter}
            whileHover={{ scale: 1.1 }}
            className="p-4 border border-yellow-500 rounded-lg shadow-lg bg-black/40 backdrop-blur-md"
          >
            <p className="text-lg font-bold">{letter}</p>
            <p className="text-2xl text-amber-400">{num}</p>
          </motion.div>
        ))}
      </div>

      <p className="mb-4 text-sm text-yellow-400">
        Waktu mengingat: {timeLeft} detik
      </p>

      <button
        onClick={handleNext}
        className="px-4 py-2 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-400"
      >
        Lanjut ke Pertanyaan
      </button>
    </div>
  );
};

export default PuzzleMemorizePage;
