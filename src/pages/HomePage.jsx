// HomePage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const [stage, setStage] = useState("loading");
  const [fadeOut, setFadeOut] = useState(false);
  const [bgDimmed, setBgDimmed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const navigate = useNavigate();
  
  const isFormValid = name.trim() && kelas.trim();

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("intro"), 3000);
    const timer2 = setTimeout(() => setBgDimmed(true), 2500);

    if (!window.globalAudio) {
      console.log('🎵 Initializing global audio...');
      window.globalAudio = new Audio('/audio/home.mp3');
      window.globalAudio.loop = true;
      window.globalAudio.volume = 0.3;
      window.globalAudio.preload = 'auto';
      window.globalAudio.load();
    }

    const wasPlaying = localStorage.getItem('audioPlaying') === 'true';
    if (wasPlaying && window.globalAudio) {
      setTimeout(() => {
        window.globalAudio.play().catch(e => {
          console.log('Autoplay blocked');
        });
      }, 1000);
    }

    const handleFirstInteraction = () => {
      if (window.globalAudio && window.globalAudio.paused) {
        window.globalAudio.play()
          .then(() => {
            localStorage.setItem('audioPlaying', 'true');
          })
          .catch(error => {
            console.log('Audio play failed:', error);
          });
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (window.globalAudio) {
      window.globalAudio.muted = !window.globalAudio.muted;
      setIsMuted(window.globalAudio.muted);
    }
  };

  const playAudioManual = () => {
    if (window.globalAudio) {
      window.globalAudio.play()
        .then(() => {
          localStorage.setItem('audioPlaying', 'true');
        })
        .catch(error => {
          console.log('Manual play failed:', error);
        });
    }
  };

  const handleStartGame = () => {
    if (window.globalAudio && window.globalAudio.paused) {
      playAudioManual();
    }
    setShowGuide(true);
  };

  const handleCloseGuide = () => {
    setShowGuide(false);
  };

  const handleContinueAfterGuide = () => {
    setShowGuide(false);
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

  return (
    <div className="relative h-[100svh] flex flex-col bg-[#0d0f1a] overflow-hidden px-4">
      {/* Background */}
      <div className={`absolute inset-0 z-0 transition-all`}>
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

      {/* Audio Controls */}
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
          <span className="text-lg text-amber-300">🔇</span>
        ) : (
          <span className="text-lg text-amber-300">🔊</span>
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

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col items-center gap-2 text-center select-none">
          <motion.img
            src="/img/logo_new.png"
            alt="logo"
            className="w-48 h-auto md:w-64 drop-shadow-xl"
            animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.95] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

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
              className="flex flex-col items-center justify-center w-full max-w-xs gap-4 mt-4 font-[Inter,sans-serif]"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Agen"
                style={{
                  fontFamily: "Cinzel, serif",
                }}
                className="w-full px-4 py-3 text-sm italic tracking-wide text-center text-white transition-all duration-300 border border-yellow-900 rounded-lg bg-black/40 placeholder:text-yellow-300 placeholder:text-[13px] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              />

              <input
                type="text"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Kelas"
                style={{
                  fontFamily: "Cinzel, serif",
                }}
                className="w-full px-4 py-3 text-sm italic tracking-wide text-center text-white transition-all duration-300 border border-yellow-900 rounded-lg bg-black/40 placeholder:text-yellow-300 placeholder:text-[13px] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              />

              <motion.button
                style={{ fontFamily: "Cinzel, serif" }}
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full py-3 px-6 text-sm uppercase tracking-wider rounded-lg 
                  transition-all duration-500 ease-in-out shadow-md
                  ${
                    isFormValid
                      ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-black hover:scale-105 hover:shadow-yellow-400/50"
                      : "bg-gray-800 text-gray-400 cursor-not-allowed"
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

      {/* 🪟 POPUP PANDUAN - TANPA SCROLLBAR */}
      <AnimatePresence>
        {showGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ 
                duration: 0.25,
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              className="relative w-full max-w-lg bg-gradient-to-br from-[#1a1b2e] via-[#151628] to-[#0d0f1a] border-2 border-amber-700/40 rounded-2xl shadow-2xl shadow-amber-900/40 overflow-hidden"
              style={{ 
                maxHeight: "calc(100svh - 2rem)",
                // Menghilangkan scrollbar di semua browser
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
              }}
            >
              {/* Menghilangkan scrollbar di Webkit browsers */}
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-amber-800/40 bg-gradient-to-r from-amber-900/20 via-yellow-900/10 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-yellow-500 shadow-amber-500/30">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text">
                      Panduan AccEscape
                    </h2>
                    <p className="mt-1 text-sm text-amber-200/80">
                      Bacalah dengan seksama sebelum memulai
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Disesuaikan agar muat tanpa scroll */}
              <div 
                className="p-6 space-y-5 overflow-y-auto"
                style={{ 
                  maxHeight: "calc(100svh - 20rem)",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Salam Pembuka */}
                <div className="p-4 border rounded-xl bg-gradient-to-r from-amber-900/15 to-yellow-900/10 border-amber-800/25">
                  <h3 className="flex items-center gap-2 mb-3 text-lg font-bold text-yellow-200">
                    <span className="text-xl">👋</span> Hai Sobat Akuntansi!
                  </h3>
                  <p className="text-yellow-100 leading-relaxed text-[15px]">
                    Selamat datang di ruang <span className="font-semibold text-amber-300">AccEscape (Accounting Escape Room)</span>. 
                    Di sini, kamu akan belajar akuntansi dengan cara yang berbeda, seru, dan menantang melalui berbagai misi.
                  </p>
                </div>

                {/* Petunjuk Utama */}
                <div className="space-y-4">
                  <h3 className="pl-3 text-lg font-bold border-l-4 text-amber-400 border-amber-500">
                    📋 Petunjuk Penggunaan
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      {
                        number: "1",
                        text: "Isi nama dan kelas pada kolom yang telah disediakan sebelum memulai permainan."
                      },
                      {
                        number: "2",
                        text: "Baca informasi setiap misi dengan cermat sebelum mengerjakan soal. Kerjakan misi secara berurutan!"
                      },
                      {
                        number: "3",
                        text: "Hafalkan kode khusus di setiap misi sebagai kunci untuk membuka tahap pengerjaan soal."
                      },
                      {
                        number: "4",
                        text: "Isi kolom jawaban dengan kode yang diminta sesuai misi."
                      },
                      {
                        number: "5",
                        text: "Baca setiap soal dengan teliti dan pilih jawaban yang tepat."
                      }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-3 transition-all duration-200 rounded-lg bg-black/25 hover:bg-black/35"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 text-sm font-bold text-white rounded-full shadow-md w-7 h-7 bg-gradient-to-r from-amber-600 to-yellow-500">
                          {item.number}
                        </div>
                        <p className="text-yellow-100 leading-relaxed text-[14.5px] pt-0.5">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pesan Penutup */}
                <div className="p-4 text-center border rounded-xl bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20 border-amber-700/30">
                  <p className="text-yellow-200 font-medium italic text-[15px]">
                    <span className="font-bold text-amber-300">Selamat bermain dan belajar!</span> Semoga pengalaman ini membantumu memahami akuntansi dengan lebih menyenangkan! ✨
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="sticky bottom-0 p-6 pt-4 border-t border-amber-800/40 bg-gradient-to-t from-[#0d0f1a] via-[#0d0f1a] to-transparent">
                <div className="flex gap-3">
                  <motion.button
                    onClick={handleContinueAfterGuide}
                    className="flex-1 px-5 py-3 text-sm font-bold text-black transition-all duration-200 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 active:scale-[0.98]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saya Paham, Lanjut!
                  </motion.button>
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={handleCloseGuide}
                className="absolute p-2 text-yellow-300 transition-all duration-200 rounded-full top-4 right-4 hover:text-white hover:bg-black/40"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;