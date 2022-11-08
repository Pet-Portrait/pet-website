import { RefObject, useEffect, useRef } from 'react';

const SPEED_FACTOR_X = 0.2;
const SPEED_FACTOR_Y = 0.3;

const MOVE_Y_LIMIT = 2;

const useGyroscopicParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  const initialPosition = useRef<{ beta: number; gamma: number } | null>(null);
  const rafTimeout = useRef<number | null>(null);

  useEffect(() => {
    const animateImage = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;

      if (rafTimeout.current) {
        window.cancelAnimationFrame(rafTimeout.current);
      }

      rafTimeout.current = window.requestAnimationFrame(() => {
        if (beta === null || gamma === null || !ref.current) return;
        if (!initialPosition.current) {
          initialPosition.current = { beta, gamma };
        }

        const dBeta = beta - initialPosition.current.beta;
        const dGamma = gamma - initialPosition.current.gamma;

        const moveX = dGamma * SPEED_FACTOR_X;
        const moveY = Math.min(Math.max(dBeta * SPEED_FACTOR_Y, MOVE_Y_LIMIT * -1), MOVE_Y_LIMIT);

        ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    window.addEventListener('deviceorientation', animateImage);

    return () => {
      window.removeEventListener('deviceorientation', animateImage);
    };
  }, []);
};

export default useGyroscopicParallax;
