import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PuzzleQuestionPage = () => {
  const { missionId } = useParams();
  const navigate = useNavigate();

  const [codes, setCodes] = useState({});
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("memory_codes");
    if (!saved) {
      navigate(`/puzzle/${missionId}`);
      return;
    }

    const parsed = JSON.parse(saved);
    setCodes(parsed);

    const letters = Object.keys(parsed);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    setQuestion(`Berapa angka untuk huruf ${randomLetter}?`);
    setCorrectAnswer(parsed[randomLetter].toString());
  }, []);

  const handleSubmit = () => {
    const isCorrect = answer.trim() === correctAnswer;
    if (isCorrect) {
      setFeedback("✅ Benar! Kamu bisa lanjut ke misi utama...");
      setTimeout(() => {
        localStorage.removeItem("memory_codes");
        navigate(`/mission/${missionId}`);
      }, 1000);
    } else {
      setFeedback("❌ Salah! Kembali ke halaman hafalan...");
      setTimeout(() => {
        navigate(`/puzzle/${missionId}`, { state: { fromDashboard: false } });
      }, 1200);
    }
  };

  return (
    <div className="h-[100svh] bg-[#0d0f1a] text-yellow-200 flex flex-col items-center justify-center font-[Cinzel]">
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
          placeholder="Tulis jawabanmu..."
        />
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-400"
          >
            Kirim Jawaban
          </button>
        </div>
        {feedback && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-lg ${
              feedback.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {feedback}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default PuzzleQuestionPage;
