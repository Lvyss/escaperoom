import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { missions } from "../data/mission";
import { motion, AnimatePresence } from "framer-motion";
import { TimerContext } from "../contexts/TimerContext";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { resetTimer } = useContext(TimerContext);
  const [popupData, setPopupData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  
  // Ref untuk popup container
  const popupRef = useRef(null);

  // Initialize audio saat masuk dashboard
  useEffect(() => {
    console.log('🎵 Dashboard mounted, checking audio...');
    
    // Check atau buat global audio
    if (!window.globalAudio) {
      console.log('🎵 Initializing global audio in dashboard...');
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

  // Toggle mute function
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
          console.log('🎵 Manual play successful in dashboard');
          localStorage.setItem('audioPlaying', 'true');
        })
        .catch(error => {
          console.log('Manual play failed:', error);
        });
    }
  };

  // Ganti jadi popup info setelah klik misi
  const handleClickMission = (mission) => {
    setPopupData({
      id: mission.id,
      title: mission.title,
      info: mission.info,
      image: `/img/m${mission.id}.jpg`
    });
  };

  // Konfirmasi mulai misi dari popup
  const handleStartMission = () => {
    if (!popupData) return;
    
    localStorage.setItem(`score_m${popupData.id}`, 0);
    resetTimer();
    navigate(`/puzzle/${popupData.id}`, { state: { fromDashboard: true } });
  };

  // Tutup popup
  const handleClosePopup = () => {
    setPopupData(null);
  };

  // Detect click luar popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupData && popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupData]);

  // Ref & ukuran container
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateSize = () => {
      const w = containerRef.current?.offsetWidth || 0;
      const h = containerRef.current?.offsetHeight || 0;
      setSize({ width: w, height: h });
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const relativeRadius = isMobile ? 0.4 : 0.42;
  const buttonRatio = isMobile ? 0.18 : 0.2;

  // Check audio playing state
  const isPlaying = window.globalAudio && !window.globalAudio.paused;

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden flex items-center justify-center font-[Cinzel]">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_map.jpg"
          alt="map background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/bg_map.jpg')] bg-cover opacity-10 z-0" />

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

      {/* ✨ Lingkaran Portal Aura */}
      <motion.div
        className="absolute z-0 rounded-full border border-[rgba(245,226,198,1)]"
        style={{
          width: size.width * 0.8,
          height: size.height * 0.8,
          boxShadow:
            "0 0 10px rgba(247,165,77,0.5), 0 0 1000px rgba(247,165,77,0.3)",
        }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      {/* 🧲 Tombol Misi Keliling */}
      <div
        ref={containerRef}
        className="relative z-10 w-[360px] h-[360px] md:w-[480px] md:h-[480px]"
      >
        {missions.map((mission, i) => {
          const angle = (2 * Math.PI * i) / missions.length;
          const base = Math.min(size.width, size.height) * relativeRadius;
          const x = base * Math.cos(angle);
          const y = base * Math.sin(angle);
          const btnSize = Math.min(size.width, size.height) * buttonRatio;

          return (
            <div
              key={mission.id}
              className="absolute flex flex-col items-center"
              style={{
                left: `calc(50% + ${x}px - ${btnSize / 2}px)`,
                top: `calc(50% + ${y}px - ${btnSize / 2}px)`,
                width: btnSize,
              }}
            >
              {/* Tombol Misi */}
              <motion.button
                onClick={() => handleClickMission(mission)}
                className="aspect-square rounded-full border border-[rgba(245,226,198,1)] shadow-lg overflow-hidden bg-black/30 backdrop-blur-md relative"
                style={{
                  width: btnSize,
                  height: btnSize,
                  boxShadow:
                    "0 0 10px rgba(247,165,77, 0.6), 0 0 35px rgba(251, 191, 36, 0.4)",
                }}
                initial={{ rotate: -3 }}
                animate={{
                  rotate: [-3, 3, -3],
                }}
                whileHover={{
                  scale: 0.9,
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
              >
                <img
                  src={`/img/m${mission.id}.jpg`}
                  alt={`Misi ${mission.id}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-start justify-center pt-2">
                  <span className="text-xs font-bold text-yellow-200 drop-shadow-sm bg-black/40 px-2 py-0.5 rounded-full">
                    Misi {mission.id}
                  </span>
                </div>
              </motion.button>
            </div>
          );
        })}

        {/* 🌀 Pusat Portal */}
        <motion.div
          className="absolute left-[35%] top-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(247,165,77, 0.6)] bg-black/40 text-amber-300 font-bold text-center animate-pulse shadow-[0_0_25px_rgba(251,191,36,0.4)] backdrop-blur-sm flex items-center justify-center"
          style={{
            width: size.width * 0.3,
            height: size.height * 0.3,
            fontSize: size.width < 400 ? "0.75rem" : "1rem",
            fontFamily: "Cinzel, serif",
            textShadow:
              "0 0 20px rgba(247,165,77,0.6), 0 0 40px rgba(251,191,36,0.4)",
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          PILIH MISI
        </motion.div>
      </div>

      {/* 🪟 POPUP INFO */}
      <AnimatePresence>
        {popupData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
              ref={popupRef}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-[90%] max-w-md bg-gradient-to-br from-[#1a1b2e] to-[#0d0f1a] border border-yellow-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={popupData.image}
                  alt={popupData.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-yellow-200">
                    {popupData.title}
                  </h2>
                  <div className="inline-block px-3 py-1 mt-2 text-sm font-semibold text-yellow-100 rounded-full bg-black/50">
                    Misi {popupData.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-bold text-amber-400">Deskripsi Misi</h3>
                  <p className="px-2 italic leading-relaxed text-justify text-yellow-100">
                    {popupData.info}
                  </p>
                </div>

                {/* Stats (optional) */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-black/30">
                    <div className="text-xs text-amber-300">Level Kesulitan</div>
                    <div className="text-lg font-bold text-yellow-200">Medium</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30">
                    <div className="text-xs text-amber-300">Estimasi Waktu</div>
                    <div className="text-lg font-bold text-yellow-200">15 menit</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleClosePopup}
                    className="flex-1 px-4 py-3 text-sm font-medium text-yellow-200 transition-colors border border-yellow-700 rounded-lg hover:bg-yellow-900/30"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleStartMission}
                    className="flex-1 px-4 py-3 text-sm font-bold text-black transition-all rounded-lg shadow-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 shadow-amber-500/30"
                  >
                     Mulai Misi
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClosePopup}
                className="absolute p-2 text-yellow-200 transition-colors rounded-full top-3 right-3 hover:text-white hover:bg-black/30"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardPage;