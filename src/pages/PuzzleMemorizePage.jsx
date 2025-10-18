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
      // ambil kode dari mission.js sesuai id
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
    <div className="h-[100svh] bg-[#0d0f1a] text-yellow-200 flex flex-col items-center justify-center font-[Cinzel]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-2xl"
      >
        🧠 Hafalkan Kode Berikut!
      </motion.h1>

      <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3">
        {Object.entries(codes).map(([label, value]) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            className="p-4 text-left border border-yellow-500 rounded-lg shadow-lg bg-black/40 backdrop-blur-md w-60"
          >
            <p className="text-base font-semibold text-amber-300">{label}</p>
            <p className="mt-1 text-xl text-yellow-100">{value}</p>
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
