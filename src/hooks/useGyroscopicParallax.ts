import { RefObject, useEffect } from 'react';

const useGyroscopicParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  useEffect(() => {
    const SPEED_FACTOR = 0.1;

    const animateImage = (event: DeviceOrientationEvent) => {
      const { alpha, gamma } = event;

      if (alpha === null || gamma === null || !ref.current) return;
      const moveX = alpha * SPEED_FACTOR;
      const moveY = gamma * SPEED_FACTOR;

      ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    window.addEventListener('deviceorientation', animateImage);

    return () => {
      window.removeEventListener('deviceorientation', animateImage);
    };
  }, []);
};

export default useGyroscopicParallax;
