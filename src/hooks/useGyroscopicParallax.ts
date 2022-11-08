import { RefObject, useEffect } from 'react';

const SPEED_FACTOR_X = 0.2;
const SPEED_FACTOR_Y = 0.3;

let initialPosition: { beta: number; gamma: number } | null = null;
let prevPosition: { beta: number; gamma: number } | null = null;

let rafTimeout: number | null = null;

const useGyroscopicParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  useEffect(() => {
    const animateImage = (event: DeviceOrientationEvent) => {
      const { beta: _beta, gamma: _gamma } = event;
      const beta = _beta;
      const gamma = _gamma;

      if (rafTimeout) {
        window.cancelAnimationFrame(rafTimeout);
      }

      rafTimeout = window.requestAnimationFrame(() => {
        if (beta === null || gamma === null || !ref.current) return;
        if (!initialPosition) {
          initialPosition = { beta, gamma };
          prevPosition = { beta, gamma };
        }
        // if (prevPosition) {
        //   if (Math.abs(beta - prevPosition.beta) > 3) {
        //     beta = prevPosition.beta + 1 * Math.sign(beta - prevPosition.beta);
        //   }
        //   if (Math.abs(gamma - prevPosition.gamma) > 3) {
        //     gamma = prevPosition.gamma + 1 * Math.sign(gamma - prevPosition.gamma);
        //   }
        // }
        // prevPosition = { beta, gamma };

        const dBeta = beta - initialPosition.beta;
        const dGamma = gamma - initialPosition.gamma;

        const moveX = dGamma * SPEED_FACTOR_X;
        const moveY = Math.min(Math.max(dBeta * SPEED_FACTOR_Y, -5), 5);
        // eslint-disable-next-line no-console
        console.log({
          prevPosition,
          moveX,
          moveY,
          beta,
          gamma,
          initialPosition: initialPosition,
        });

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
