// HomePage.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [stage, setStage] = useState("loading");
  const [fadeOut, setFadeOut] = useState(false);
  const [bgDimmed, setBgDimmed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const navigate = useNavigate();
  
  const isFormValid = name.trim() && kelas.trim();

  // Initialize global audio
  useEffect(() => {
    const timer1 = setTimeout(() => setStage("intro"), 3000);
    const timer2 = setTimeout(() => setBgDimmed(true), 2500);

    // Setup global audio
    if (!window.globalAudio) {
      console.log('🎵 Initializing global audio...');
      window.globalAudio = new Audio('/audio/home.mp3');
      window.globalAudio.loop = true;
      window.globalAudio.volume = 0.3; // Volume lebih rendah
      window.globalAudio.preload = 'auto';
      
      // Load audio
      window.globalAudio.load();
      
      setAudioInitialized(true);
    } else {
      setAudioInitialized(true);
    }

    // Check if audio was playing before
    const wasPlaying = localStorage.getItem('audioPlaying') === 'true';
    if (wasPlaying && window.globalAudio) {
      console.log('🎵 Resuming previous audio session...');
      // Delay sedikit untuk biar browser ready
      setTimeout(() => {
        window.globalAudio.play().catch(e => {
          console.log('Autoplay blocked, waiting for user interaction');
        });
      }, 1000);
    }

    // One-time click handler untuk start audio
    const handleFirstInteraction = () => {
      if (window.globalAudio && window.globalAudio.paused) {
        console.log('🎵 First user interaction detected, playing audio...');
        window.globalAudio.play()
          .then(() => {
            console.log('🎵 Audio started successfully');
            localStorage.setItem('audioPlaying', 'true');
          })
          .catch(error => {
            console.log('Audio play failed on first interaction:', error);
          });
      }
    };

    // Add event listeners untuk user interaction
    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (window.globalAudio) {
      window.globalAudio.muted = !window.globalAudio.muted;
      setIsMuted(window.globalAudio.muted);
      console.log('🔊 Mute toggled:', window.globalAudio.muted);
    }
  };

  // Play audio manually
  const playAudioManual = () => {
    if (window.globalAudio) {
      window.globalAudio.play()
        .then(() => {
          console.log('🎵 Manual play successful');
          localStorage.setItem('audioPlaying', 'true');
        })
        .catch(error => {
          console.log('Manual play failed:', error);
          alert('Browser blocked audio autoplay. Klik di layar untuk memulai musik.');
        });
    }
  };

  // Saat user klik untuk mulai game
  const handleStartGame = () => {
    // Pastikan audio playing
    if (window.globalAudio && window.globalAudio.paused) {
      playAudioManual();
    }
    
    setFadeOut(true);
    setTimeout(() => {
      setStage("form");
      setFadeOut(false);
    }, 500);
  };

  const handleSubmit = () => {
    if (!isFormValid) return alert("Isi nama dan kelas dulu ya, agen!");
    localStorage.setItem("playerName", name);
    localStorage.setItem("playerClass", kelas);
    localStorage.setItem("score", 0);
    
    navigate("/dashboard");
  };

  // Check audio state
  const isPlaying = window.globalAudio && !window.globalAudio.paused;

  return (
    <div className="relative h-[100svh] flex flex-col bg-[#0d0f1a] overflow-hidden px-4">
      {/* 🌌 Background utama */}
      <div className={`absolute inset-0 z-0 transition-all ease-[cubic-bezier(0.4,0,0.2,1)]`}>
        <img
          src="/img/bg_home.jpg"
          alt="background"
          className={`object-cover w-full h-full ${
            bgDimmed ? "opacity-30" : "opacity-100"
          } transition-opacity duration-[2500ms] ease-in-out`}
        />
      </div>

      {/* Kabut gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />

      {/* 🔊 Global Audio Controls */}
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



      {/* Fade black */}
      {fadeOut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[99] bg-black"
        />
      )}

      {/* Konten */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col items-center gap-2 text-center select-none">
          {/* Logo glowing pulse */}
          <motion.img
            src="/img/logo_new.png"
            alt="logo"
            className="w-48 h-auto md:w-64 drop-shadow-xl"
            animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.95] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Judul utama */}
          <motion.h1
            className="-mt-2 md:-mt-4 text-[2rem] md:text-5xl font-extrabold tracking-[0.2em] relative text-center"
            style={{
              color: "rgba(245,226,198,1)",
              textShadow: "0 0 20px rgba(247,165,77,0.6), 0 0 20px rgba(247,165,77,0.5), 0 0 40px rgba(247,165,77,0.4)",
              fontFamily: "Cinzel, serif",
            }}
            initial={stage === "loading" ? { opacity: 0 } : false}
            animate={stage === "loading" ? { opacity: 1 } : false}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            AccEscape
          </motion.h1>
        </div>

        {/* Isi stage */}
        <div className="mt-6 flex flex-col items-center gap-6 text-center min-h-[100px]">
          {stage === "loading" && (
            <motion.p
              className="text-lg font-medium text-yellow-100 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Loading... <br />
              <span className="text-sm italic font-light">Please wait...</span>
            </motion.p>
          )}

          {stage === "intro" && (
            <motion.div
              onClick={handleStartGame}
              className="flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mt-4 text-sm font-light tracking-widest text-yellow-100 select-none opacity-20 animate-pulse">
                Ketuk layar untuk memulai
              </span>
            </motion.div>
          )}

          {stage === "form" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center w-full max-w-xs gap-4 mt-4 font-[Inter,sans-serif] max-h-[80vh]"
            >
              {/* Form input */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Agen"
                style={{
                  fontFamily: "Cinzel, serif",
                }}
                className="w-full px-4 py-2 text-sm italic tracking-wide text-center text-white transition-all duration-300 border border-yellow-900 rounded-[5px] bg-black/30 placeholder:text-yellow-300 placeholder:text-[12px] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              />

              <input
                type="text"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Kelas"
                style={{
                  fontFamily: "Cinzel, serif",
                }}
                className="italic w-full px-4 py-2 text-sm tracking-wide text-center text-white transition-all duration-300 border border-yellow-900 rounded-[5px] bg-black/30 placeholder:text-yellow-300 placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              />

              {/* Tombol masuk */}
              <motion.button
                style={{ fontFamily: "Cinzel, serif" }}
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full py-2 px-6 text-[11px] uppercase tracking-wider rounded-md 
                  transition-all duration-500 ease-in-out shadow-md
                  ${
                    isFormValid
                      ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-black hover:scale-105 hover:shadow-yellow-400/50"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                initial={{ scale: 1 }}
                animate={isFormValid ? { scale: [1, 1.02, 1] } : { scale: 1 }}
                transition={{
                  repeat: isFormValid ? Infinity : 0,
                  repeatType: "loop",
                  duration: 1.2,
                }}
              >
                {isFormValid ? "Masuki Gerbang" : "🔒 Terkunci"}
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full max-w-md px-4 pb-4 mx-auto text-xs font-light text-center text-yellow-100 md:text-sm">
        <div className="pt-2 border-t border-yellow-800">
          <span className="font-bold text-amber-400">Quick Tip:</span>
          &nbsp;Temukan jalan keluar dari kastil gelap dengan memecahkan
          teka-teki. Perhatikan setiap petunjuk visual. Jangan percaya apa yang
          pertama kali kamu lihat.
        </div>
      </div>
    </div>
  );
};

export default HomePage;