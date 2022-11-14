import { RefObject, useEffect } from 'react';

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  callback: (entires: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit,
): void => {
  const { threshold, root, rootMargin } = options || {};

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observer = new IntersectionObserver(callback, { root, rootMargin, threshold });

    observer.observe(node);

    return () => observer.disconnect();
  }, [root, rootMargin, elementRef, threshold, callback]);
};

export default useIntersectionObserver;
