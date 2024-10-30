import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';

function Search() {
  const [query, setQuery] = useState('');
  const { debouncedValue } = useDebounce(query);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (debouncedValue) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('name', debouncedValue);
      setSearchParams(params);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('name');
      setSearchParams(params);
    }
  }, [debouncedValue, searchParams, setSearchParams]);

  return (
    <div className="relative max-w-[30rem] flex-1">
      <IoSearchSharp className="absolute left-8 top-1/2 size-4 -translate-y-1/2 text-neutral-gray-400 dark:text-neutral-white md:size-[1.125rem]" />
      <input
        autoComplete="off"
        onChange={e => setQuery(e.target.value)}
        value={query}
        type="text"
        className="w-full cursor-pointer rounded-md bg-neutral-white px-20 py-4 text-xs font-semibold shadow-md dark:bg-neutral-dark-blue-400 md:py-[1.125rem] md:text-sm"
        placeholder="Search for a country…"
        name="search"
      />
      <button onClick={() => setQuery('')}>
        <MdOutlineClear
          className={`absolute right-8 top-1/2 size-4 -translate-y-1/2 text-neutral-gray-400 transition-all duration-300 dark:text-neutral-white md:size-5 ${query ? 'hover:scale-110 hover:text-neutral-dark-blue-900 dark:hover:opacity-50' : 'cursor-not-allowed'}`}
        />
      </button>
    </div>
  );
}

export default Search;
