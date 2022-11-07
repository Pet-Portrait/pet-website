import { RefObject, useEffect } from 'react';

const useParallax = <RefType extends RefObject<HTMLElement>>(ref: RefType) => {
  useEffect(() => {
    const SPEED_FACTOR = 25;

    const animateImage = (event: MouseEvent) => {
      const isTouchDevice = 'ontouchstart' in window;

      if (!ref.current || isTouchDevice) return;

      const { left, top, height, width } = ref.current.getBoundingClientRect();

      const centerOfImage = {
        x: left + width / 2,
        y: top + height / 2,
      };
      const dx = event.x - centerOfImage.x;
      const dy = event.y - centerOfImage.y;

      const moveX = (dx / centerOfImage.x) * SPEED_FACTOR;
      const moveY = (dy / centerOfImage.y) * SPEED_FACTOR;

      ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    window.addEventListener('mousemove', animateImage);

    return () => {
      window.removeEventListener('mousemove', animateImage);
    };
  }, []);

  return ref;
};

export default useParallax;
