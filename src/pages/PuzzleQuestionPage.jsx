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
    <div className="h-[100svh] bg-[#0d0f1a] flex flex-col items-center justify-center text-yellow-200 font-[Cinzel]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="mb-4 text-xl">{question}</h2>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="px-3 py-2 text-center text-yellow-200 border border-yellow-500 rounded bg-black/40"
          placeholder="Tulis jawabannya..."
        />
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 font-bold text-black transition-all bg-yellow-500 rounded hover:bg-yellow-400"
          >
            Kirim Jawaban
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PuzzleQuestionPage;
