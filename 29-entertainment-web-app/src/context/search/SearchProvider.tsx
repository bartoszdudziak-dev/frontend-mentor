import { type WithChildren } from '../../utils/commonTypes';
import { useDebounce } from '../../hooks/useDebounce';
import { SearchContext } from './SearchContext';
import { useState } from 'react';

export function SearchContextProvider({ children }: WithChildren) {
  const [searchQuery, setSearchQuery] = useState('');
  const { debouncedValue: debouncedSearchQuery } = useDebounce(searchQuery);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        debouncedSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
