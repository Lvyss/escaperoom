import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/mission";
import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { motion } from "framer-motion";

const MissionPage = () => {
  const { startTimer, stopTimer } = useContext(TimerContext);

useEffect(() => {
  startTimer(); // Mulai saat misi dimulai
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
    const correct = selected.startsWith(currentQuestion.answer); // cocokkan huruf A/B/C/D
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
    <div className="min-h-screen bg-[#0d0f1a] text-yellow-100 font-[Cinzel] flex flex-col items-center justify-center px-4 py-8">
      {/* Judul Misi */}
      <h1 className="mb-6 text-2xl font-bold text-center md:text-3xl text-amber-300">
        {mission.title}
      </h1>

      {/* Box Soal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl p-6 border border-yellow-800 shadow-lg bg-black/30 rounded-xl"
      >

        {/* Teks Soal */}
        <p className="whitespace-pre-line leading-relaxed text-[15px] mb-6 text-center text-yellow-100">
          {currentQuestion.question}
        </p>

        {/* Pilihan Jawaban */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt) => (
            <motion.label
              key={opt}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`block text-sm md:text-base py-2.5 px-4 rounded-md cursor-pointer border transition-all text-center ${
                selected === opt
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-black/20 border-yellow-700 hover:bg-black/30"
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

        {/* Feedback */}
        {isAnswered && (
          <p
            className={`mt-4 text-center font-semibold ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
          >
            {isCorrect ? "✅ Jawaban Benar!" : "❌ Jawaban Salah!"}
          </p>
        )}

        {/* Tombol Submit */}
        {!isAnswered && (
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            onClick={handleSubmit}
            className="w-full mt-5 py-2.5 text-sm font-semibold text-black bg-yellow-400 rounded-md hover:bg-yellow-300 transition-all"
          >
            Kunci Jawaban
          </motion.button>
        )}

        {/* Nomor Soal */}
        <p className="mt-5 text-xs text-center text-yellow-400">
          Soal {currentQuestionIndex + 1} dari {mission.questions.length}
        </p>
      </motion.div>
    </div>
  );
};

export default MissionPage;
