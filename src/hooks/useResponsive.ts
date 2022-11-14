import { useEffect, useState } from 'react';

import isBrowser from 'utils/isBrowser';

const displaySize = {
  TABLET: 768,
  DESKTOP: 1024,
};

const useResponsive = () => {
  const [currentWidth, setCurrentWidth] = useState(isBrowser() ? window.innerWidth : 0);

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = currentWidth < displaySize.TABLET;
  const isTablet = currentWidth >= displaySize.TABLET && currentWidth < displaySize.DESKTOP;
  const isDesktop = currentWidth >= displaySize.DESKTOP;
  const isTabletOrDesktop = isTablet || isDesktop;
  const isMobileOrTablet = isMobile || isTablet;

  return { isMobile, isTablet, isDesktop, isTabletOrDesktop, isMobileOrTablet };
};

export default useResponsive;
