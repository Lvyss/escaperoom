import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PuzzleQuestionPage = () => {
  const { missionId } = useParams();
  const navigate = useNavigate();

  const [codes, setCodes] = useState({});
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const storedCodes = localStorage.getItem("memory_codes");
    if (storedCodes) {
      const parsed = JSON.parse(storedCodes);
      setCodes(parsed);
      generateQuestion(parsed);
    }
  }, []);

  const generateQuestion = (data) => {
    const keys = Object.keys(data);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setQuestion(`Berapa kode untuk ${randomKey}?`);
    setCorrectAnswer(data[randomKey].toString());
  };

  const handleSubmit = () => {
    const isCorrect = answer.trim() === correctAnswer;
    if (isCorrect) {
      alert("✅ Benar! Kamu bisa lanjut ke misi utama.");
      navigate(`/mission/${missionId}`);
    } else {
      alert("❌ Salah. Kembali hafalkan dulu ya!");
      navigate(`/puzzle/${missionId}`, { state: { fromDashboard: false } });
    }
  };

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden flex items-center justify-center font-[Cinzel]">
      {/* 🌌 Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_puzzle.jpg"
          alt="background"
          className="object-cover w-full h-full opacity-50"
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
        className="relative z-10 w-full max-w-2xl p-6 mx-4 text-center"
      >
        {/* Question Card */}
        <motion.div
          className="p-8 border border-[rgba(245,226,198,0.5)] rounded-2xl bg-black/30 backdrop-blur-md mb-8"
          style={{
            boxShadow: "0 0 25px rgba(247,165,77,0.3), 0 0 50px rgba(251,191,36,0.2)",
          }}
        >
          <motion.h2
            className="mb-6 text-xl font-bold text-yellow-200 md:text-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ❓ {question}
          </motion.h2>

          {/* Input Field */}
          <motion.input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full max-w-xs px-4 py-3 text-lg text-center text-yellow-200 border border-yellow-500/50 rounded-xl bg-black/40 backdrop-blur-md placeholder-yellow-200/50 focus:outline-none focus:border-yellow-400 focus:shadow-lg focus:shadow-yellow-500/20"
            placeholder="Ketik jawabanmu di sini..."
            style={{
              boxShadow: "0 0 15px rgba(247,165,77,0.2)",
            }}
            whileFocus={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 text-lg font-bold text-black transition-colors border rounded-lg bg-amber-500 border-amber-300 hover:bg-amber-400"
          style={{
            boxShadow: "0 0 20px rgba(247,165,77,0.5), 0 0 40px rgba(251,191,36,0.3)",
          }}
        >
          🚀 Kirim Jawaban
        </motion.button>

      </motion.div>
    </div>
  );
};

export default PuzzleQuestionPage;