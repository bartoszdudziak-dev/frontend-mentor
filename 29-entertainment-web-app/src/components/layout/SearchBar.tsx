import IconSearch from '../icons/IconSearch';
import { useSearch } from '../../context/search/useSearch';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();
  const location = useLocation();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, [location.pathname]);

  return (
    <div className="mb-6 flex items-center gap-4 bg-primary-dark-blue md:mb-9 md:gap-6">
      <label htmlFor="search" aria-hidden="true">
        <IconSearch className="w-6 text-white md:w-8" />
      </label>
      <input
        ref={searchRef}
        className="w-full cursor-pointer border-b border-transparent bg-inherit py-3 font-light text-white caret-accent-red outline-none transition-all duration-300 focus:border-accent-gray md:text-2xl"
        placeholder="Search for movies or TV series"
        aria-label="Search for movies or TV series"
        type="text"
        id="search"
        role="searchbox"
        autoComplete="off"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
