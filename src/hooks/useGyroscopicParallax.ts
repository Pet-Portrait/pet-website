import { RefObject, useEffect } from 'react';

const SPEED_FACTOR_X = 0.2;
const SPEED_FACTOR_Y = 0.5;

const useGyroscopicParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  useEffect(() => {
    const animateImage = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null || !ref.current) return;
      const dBeta = Math.abs(beta) - 90;
      const moveX = gamma * SPEED_FACTOR_X;
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
