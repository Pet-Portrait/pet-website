import { RefObject, useEffect, useRef } from 'react';

const SPEED_FACTOR_X = 0.3;
const SPEED_FACTOR_Y = 0.3;

const useGyroscopicParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  const initialPosition = useRef<{ beta: number; gamma: number } | null>(null);

  useEffect(() => {
    const animateImage = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null || !ref.current) return;
      if (!initialPosition.current) {
        initialPosition.current = { beta, gamma };
      }

      const dBeta = Math.abs(beta) - initialPosition.current.beta;
      const dGamma = gamma - initialPosition.current.gamma;

      const moveX = dGamma * SPEED_FACTOR_X;
      const moveY = dBeta * SPEED_FACTOR_Y;

      ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    window.addEventListener('deviceorientation', animateImage);

    return () => {
      window.removeEventListener('deviceorientation', animateImage);
    };
  }, []);
};

export default useGyroscopicParallax;
