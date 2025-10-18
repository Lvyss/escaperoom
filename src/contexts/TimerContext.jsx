import { createContext, useState, useEffect, useCallback } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = useCallback(() => setIsRunning(true), []);
  const stopTimer = useCallback(() => setIsRunning(false), []);
  const resetTimer = useCallback(() => {
    setElapsed(0);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <TimerContext.Provider value={{ elapsed, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
