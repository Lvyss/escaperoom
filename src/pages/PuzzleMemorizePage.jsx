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
  const [isMuted, setIsMuted] = useState(false); // ✅ Tambah state untuk mute

  // ✅ Initialize audio saat masuk halaman
  useEffect(() => {
    console.log('🎵 PuzzleMemorizePage mounted, checking audio...');
    
    // Check atau buat global audio
    if (!window.globalAudio) {
      console.log('🎵 Initializing global audio in puzzle page...');
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
          console.log('🎵 Manual play successful in puzzle page');
          localStorage.setItem('audioPlaying', 'true');
        })
        .catch(error => {
          console.log('Manual play failed:', error);
        });
    }
  };

  // Load codes data
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

  // Timer
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

  // ✅ Check audio playing state
  const isPlaying = window.globalAudio && !window.globalAudio.paused;

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

      {/* 🔊 Global Audio Controls - KANAN ATAS */}
      <motion.button
        onClick={toggleMute}
        className="absolute z-50 p-3 transition-all border rounded-full top-4 right-4 bg-black/40 backdrop-blur-md border-amber-500/50 hover:bg-amber-500/20 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: "0 0 15px rgba(247,165,77,0.4)"
        }}
        title={isMuted ? "Unmute musik" : "Mute musik"}
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
        className="absolute z-20 top-4 right-20" // ✅ Posisi diubah biar nggak nabrak tombol audio
      >
        <div className="px-4 py-2 text-sm font-semibold border rounded-full border-amber-500/50 bg-black/60 backdrop-blur-md text-amber-300">
          ⏱️ {timeLeft}s
        </div>
      </motion.div>
    </div>
  );
};

export default PuzzleMemorizePage;