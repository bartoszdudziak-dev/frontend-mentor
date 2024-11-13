import { useEffect, useMemo, useState } from 'react';
import { BREAKPOINTS } from '../utils/constants';

type screenSizeType = 'small' | 'medium' | 'large' | 'extralarge';

const getScreenSize = (width: number): screenSizeType => {
  if (width < BREAKPOINTS.SMALL) return 'small';
  if (width < BREAKPOINTS.MEDIUM) return 'medium';
  if (width < BREAKPOINTS.LARGE) return 'large';
  return 'extralarge';
};

export function useMediaQuery() {
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  const screenSize = useMemo(() => getScreenSize(screenWidth), [screenWidth]);

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  return { screenSize, screenWidth };
}
