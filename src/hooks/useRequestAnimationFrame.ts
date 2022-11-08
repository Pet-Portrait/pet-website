import { useRef } from 'react';

const useRequestAnimationFrame = () => {
  const rafTimeout = useRef<number | null>(null);

  return (callback: () => void) => {
    if (rafTimeout.current) {
      window.cancelAnimationFrame(rafTimeout.current);
    }
    rafTimeout.current = window.requestAnimationFrame(callback);
  };
};

export default useRequestAnimationFrame;
