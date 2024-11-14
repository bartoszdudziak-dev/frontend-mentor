import { useState } from 'react';
import IconSearch from '../icons/IconSearch';

function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex items-center gap-4 bg-primary-dark-blue md:gap-6">
      <label htmlFor="search" aria-hidden="true">
        <IconSearch className="w-6 text-white md:w-8" />
      </label>
      <input
        className="w-full cursor-pointer border-b border-transparent bg-inherit py-3 font-light text-white caret-accent-red outline-none transition-all duration-300 focus:border-accent-gray md:text-2xl"
        placeholder="Search for movies or TV series"
        aria-label="Search for movies or TV series"
        type="text"
        id="search"
        role="searchbox"
        autoComplete="off"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
