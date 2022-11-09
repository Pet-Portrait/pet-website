import { RefObject, useEffect, useRef } from 'react';

import useRequestAnimationFrame from './useRequestAnimationFrame';

const SPEED_FACTOR_X = 0.1;
const SPEED_FACTOR_Y = 0.1;

const MOVE_Y_LIMIT = 2;
const MOVE_X_LIMIT = 5;

const useGyroscopicParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  const initialPosition = useRef<{ beta: number; gamma: number } | null>(null);
  const handleRequestAnimationFrame = useRequestAnimationFrame();

  useEffect(() => {
    const animateImage = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;

      handleRequestAnimationFrame(() => {
        if (beta === null || gamma === null || !ref.current) return;
        if (!initialPosition.current) {
          initialPosition.current = { beta, gamma };
        }

        const dBeta = beta - initialPosition.current.beta;
        const dGamma = gamma - initialPosition.current.gamma;

        const getNumberInRange = (number: number, min: number, max: number) =>
          Math.min(Math.max(number, min), max);
        const moveX = getNumberInRange(dGamma * SPEED_FACTOR_X, MOVE_X_LIMIT * -1, MOVE_X_LIMIT);
        const moveY = getNumberInRange(dBeta * SPEED_FACTOR_Y, MOVE_Y_LIMIT * -1, MOVE_Y_LIMIT);

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
