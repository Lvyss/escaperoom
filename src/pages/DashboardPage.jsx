import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { missions } from "../data/mission";
import { motion } from "framer-motion";
import { TimerContext } from "../contexts/TimerContext";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { resetTimer } = useContext(TimerContext);
  const [showInfoId, setShowInfoId] = useState(null);

const handleClickMission = (id) => {
  localStorage.setItem(`score_m${id}`, 0);
  localStorage.removeItem("memory_codes"); // reset kode lama
  resetTimer();
  navigate(`/puzzle/${id}`, { state: { fromDashboard: true } });
};


  // Detect click luar popup
  useEffect(() => {
    const closePopup = () => setShowInfoId(null);
    window.addEventListener("click", closePopup);
    return () => window.removeEventListener("click", closePopup);
  }, []);

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
  const buttonRatio = isMobile ? 0.18 : 0.2; // Ukuran tombol proporsional

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
                onClick={() => handleClickMission(mission.id)}
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
                  scale: 0.9, // Mengecil saat hover
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.2, // Smooth masuk ke scale 0.9
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

              {/* Tombol Info */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInfoId(mission.id === showInfoId ? null : mission.id);
                }}
                className="mt-1 px-2 py-0.5 flex items-center gap-1 text-xs font-medium text-yellow-200 border border-yellow-500/40 rounded-md bg-black/20 backdrop-blur-sm hover:text-yellow-100 hover:border-yellow-400 hover:shadow-md transition-all"
              >
                <span>ℹ️</span>
                <span>Info</span>
              </button>

              {/* Popup Info */}
              {showInfoId === mission.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute z-20 p-3 mt-2 text-xs text-yellow-100 border border-yellow-700 rounded shadow-lg top-full w-44 bg-black/80 backdrop-blur-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="mb-1 font-bold text-amber-400">
                    {mission.title}
                  </p>
                  <p className="leading-snug">{mission.info}</p>
                </motion.div>
              )}
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
              "0 0 20px rgba(247,165,77, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)",
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
    </div>
  );
};

export default DashboardPage;
