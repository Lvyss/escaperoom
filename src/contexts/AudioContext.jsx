// contexts/AudioContext.jsx - MODIFIED
import React, { createContext, useState, useRef, useContext, useEffect } from 'react';

const AudioContext = createContext({
  isPlaying: false,
  isMuted: false,
  playAudio: () => {},
  pauseAudio: () => {},
  toggleMute: () => {},
  stopAudio: () => {},
  initAudio: () => {}
});

export const useAudio = () => {
  const context = useContext(AudioContext);
  return context;
};

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  const initAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/home.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.preload = 'auto';
      
      // Coba resume audio dari localStorage
      const wasPlaying = localStorage.getItem('audioWasPlaying') === 'true';
      if (wasPlaying && userHasInteracted) {
        audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      }
    }
  };

  // Set user interaction flag on any click
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!userHasInteracted) {
        setUserHasInteracted(true);
        console.log('User interaction detected');
      }
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [userHasInteracted]);

  const playAudio = () => {
    initAudio();
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          console.log('🎵 Audio playing');
          setIsPlaying(true);
          setIsMuted(false);
          localStorage.setItem('audioWasPlaying', 'true');
        })
        .catch(err => {
          console.log('Audio play failed, need user interaction');
          // Simpan intent untuk play
          localStorage.setItem('audioWasPlaying', 'true');
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem('audioWasPlaying', 'false');
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      localStorage.setItem('audioWasPlaying', 'false');
    }
  };

  // Coba resume audio saat component mount
  useEffect(() => {
    const wasPlaying = localStorage.getItem('audioWasPlaying') === 'true';
    if (wasPlaying && userHasInteracted) {
      setTimeout(() => {
        playAudio();
      }, 500);
    }
  }, [userHasInteracted]);

  return (
    <AudioContext.Provider value={{
      isPlaying,
      isMuted,
      playAudio,
      pauseAudio,
      toggleMute,
      stopAudio,
      initAudio,
      userHasInteracted
    }}>
      {children}
    </AudioContext.Provider>
  );
};