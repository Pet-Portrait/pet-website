import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold, root, rootMargin, freezeOnceVisible }: Args,
): boolean {
  const [isInView, setIsInView] = useState(false);

  const frozen = isInView && freezeOnceVisible;

  useEffect(() => {
    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
      setIsInView(entry.isIntersecting);
    };

    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [root, rootMargin, frozen, elementRef, threshold]);

  return isInView;
}

export default useIntersectionObserver;
