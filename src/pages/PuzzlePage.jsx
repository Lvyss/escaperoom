import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { missions } from "../data/mission";

const PuzzlePage = () => {
  const { missionId } = useParams();
  const navigate = useNavigate();

  const [phase, setPhase] = useState("memorize"); // memorize → question
  const [codes, setCodes] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  // Generate kode acak A–E
  useEffect(() => {
    const letters = ["A", "B", "C", "D", "E"];
    const generated = {};
    letters.forEach((l) => {
      generated[l] = Math.floor(Math.random() * 90 + 10); // angka 10–99
    });
    setCodes(generated);
    localStorage.setItem("memory_codes", JSON.stringify(generated));
  }, []);

  // Timer 30 detik
  useEffect(() => {
    if (phase !== "memorize") return;
    if (timeLeft <= 0) {
      setPhase("question");
      generateQuestion();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, phase]);

  // Buat pertanyaan acak
  const generateQuestion = () => {
    const mode = Math.random() > 0.5 ? "letterToNumber" : "numberToLetter";
    const letters = Object.keys(codes);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = codes[randomLetter];

    if (mode === "letterToNumber") {
      setQuestion(`Berapa angka untuk huruf ${randomLetter}?`);
      setFeedback(randomNumber.toString());
    } else {
      setQuestion(`Huruf mana yang memiliki angka ${randomNumber}?`);
      setFeedback(randomLetter);
    }
  };

  // Cek jawaban
  const handleSubmit = () => {
    const correct = answer.trim().toUpperCase() === feedback.toString().toUpperCase();
    if (correct) {
      alert("✅ Benar! Kamu bisa lanjut ke misi utama.");
      navigate(`/mission/${missionId}`);
    } else {
      alert("❌ Salah. Coba ulang puzzle ini.");
      window.location.reload();
    }
  };

  return (
    <div className="h-[100svh] bg-[#0d0f1a] flex flex-col items-center justify-center text-yellow-200 font-[Cinzel]">
      {phase === "memorize" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="mb-4 text-2xl">🧠 Hafalkan Kode Berikut!</h1>
          <div className="grid grid-cols-5 gap-4 mb-6">
            {Object.entries(codes).map(([letter, num]) => (
              <motion.div
                key={letter}
                whileHover={{ scale: 1.1 }}
                className="p-4 border border-yellow-500 rounded-lg shadow-lg bg-black/40 backdrop-blur-md"
              >
                <p className="text-lg font-bold">{letter}</p>
                <p className="text-xl text-amber-400">{num}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-yellow-400">
            Waktu mengingat: {timeLeft} detik
          </p>
        </motion.div>
      )}

      {phase === "question" && (
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
              className="px-4 py-2 font-bold text-black transition-all bg-yellow-500 rounded hover:bg-yellow-400"
            >
              Kirim Jawaban
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PuzzlePage;
