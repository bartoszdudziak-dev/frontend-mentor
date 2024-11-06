import { useEffect, useState } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(
    () => !window.matchMedia(`(min-width: 768px)`).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: 768px)`);
    const updateMedia = () => setIsMobile(!mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMedia);
    return () => mediaQuery.removeEventListener('change', updateMedia);
  }, []);

  return { isMobile };
}
