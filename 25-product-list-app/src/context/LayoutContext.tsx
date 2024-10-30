import { createContext, useContext, useEffect, useState } from 'react';
import { TABLET_WIDTH, DESKTOP_WIDTH } from '../utils/const';

type LayoutContextType = {
  screenSize: 'mobile' | 'tablet' | 'desktop';
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [screenSize, setScreenSize] =
    useState<LayoutContextType['screenSize']>('desktop');

  const updateScreenSize = () => {
    const width = window.innerWidth;

    if (width < TABLET_WIDTH) setScreenSize('mobile');
    else if (width >= TABLET_WIDTH && width < DESKTOP_WIDTH)
      setScreenSize('tablet');
    else setScreenSize('desktop');
  };

  // Initial
  useEffect(() => updateScreenSize(), []);

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <LayoutContext.Provider value={{ screenSize }}>
      {children}
    </LayoutContext.Provider>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);

  if (context === undefined)
    throw new Error('LayoutContext was used outside of LayoutContextProvider');

  return context;
}

export { LayoutProvider, useLayout };
