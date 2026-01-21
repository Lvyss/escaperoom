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
  const [isMuted, setIsMuted] = useState(false); // ✅ Tambah state untuk mute

  // ✅ Initialize audio saat masuk halaman
  useEffect(() => {
    console.log('🎵 PuzzleQuestionPage mounted, checking audio...');
    
    // Check atau buat global audio
    if (!window.globalAudio) {
      console.log('🎵 Initializing global audio in question page...');
      window.globalAudio = new Audio('/audio/home.mp3');
      window.globalAudio.loop = true;
      window.globalAudio.volume = 0.3;
      window.globalAudio.preload = 'auto';
    }
    
    // Update mute state
    if (window.globalAudio) {
      setIsMuted(window.globalAudio.muted);
      
      // Try to play jika sebelumnya playing
      const wasPlaying = localStorage.getItem('audioPlaying') === 'true';
      if (wasPlaying && window.globalAudio.paused) {
        console.log('🎵 Resuming audio from localStorage...');
        window.globalAudio.play().catch(e => {
          console.log('Could not resume audio:', e);
        });
      }
    }
  }, []);

  // ✅ Toggle mute function
  const toggleMute = () => {
    if (window.globalAudio) {
      window.globalAudio.muted = !window.globalAudio.muted;
      setIsMuted(window.globalAudio.muted);
      console.log('🔊 Mute toggled:', window.globalAudio.muted);
    }
  };

  // ✅ Play audio manually
  const playAudioManual = () => {
    if (window.globalAudio) {
      window.globalAudio.play()
        .then(() => {
          console.log('🎵 Manual play successful in question page');
          localStorage.setItem('audioPlaying', 'true');
        })
        .catch(error => {
          console.log('Manual play failed:', error);
        });
    }
  };

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

  // ✅ Check audio playing state
  const isPlaying = window.globalAudio && !window.globalAudio.paused;

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

      {/* 🔊 Global Audio Controls - KANAN ATAS */}
      <motion.button
        onClick={toggleMute}
        className="absolute z-50 p-3 transition-all border rounded-full top-4 right-4 bg-black/40 backdrop-blur-md border-amber-500/50 hover:bg-amber-500/20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: "0 0 15px rgba(247,165,77,0.4)"
        }}
      >
        {isMuted ? (
          <div className="flex flex-col items-center">
            <span className="text-lg text-amber-300">🔇</span>

          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-lg text-amber-300">🔊</span>

          </div>
        )}
      </motion.button>



      {/* Manual Play Button (optional) */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 px-3 py-2 text-xs border rounded-lg top-16 right-4 text-amber-300 bg-black/40 backdrop-blur-md border-amber-500/50"
          style={{
            boxShadow: "0 0 15px rgba(247,165,77,0.3)"
          }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={playAudioManual}
              className="px-2 py-1 text-xs font-medium transition-colors rounded bg-amber-500/30 hover:bg-amber-500/50"
            >
              ▶️ Play Music
            </button>
          </div>
        </motion.div>
      )}

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