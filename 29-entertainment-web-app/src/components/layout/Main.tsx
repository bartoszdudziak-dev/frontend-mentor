import { type WithChildren } from '../../utils/commonTypes';
import { useEffect, useRef } from 'react';
import { useSearch } from '../../context/search/useSearch';
import { useLocation } from 'react-router-dom';

function Main({ children }: WithChildren) {
  const { debouncedSearchQuery } = useSearch();
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [debouncedSearchQuery, location.pathname]);

  return (
    <main
      ref={mainRef}
      id="main"
      className="relative flex-1 space-y-6 overflow-y-scroll shadow-inner"
    >
      {children}
    </main>
  );
}

export default Main;
