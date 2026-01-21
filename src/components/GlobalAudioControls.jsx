// components/GlobalAudioControls.jsx
import { useAudio } from '../contexts/AudioContext';
import { motion } from 'framer-motion';

const GlobalAudioControls = () => {
  const { isPlaying, isMuted, toggleMute, playAudio, pauseAudio } = useAudio();

  return (
    <motion.button
      onClick={toggleMute}
      className="fixed z-50 p-3 transition-all border rounded-full top-4 right-4 bg-black/40 backdrop-blur-md border-amber-500/50 hover:bg-amber-500/20 group"
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
          <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
            UNMUTE
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <span className="text-lg text-amber-300">🔊</span>
          <span className="text-[10px] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
            MUTE
          </span>
        </div>
      )}
    </motion.button>
  );
};

export default GlobalAudioControls;