import { type WithChildren } from '../../utils/commonTypes';
import { MIN_QUERY_LENGTH } from '../../utils/constants';
import { SearchContext } from './SearchContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useState } from 'react';

export function SearchContextProvider({ children }: WithChildren) {
  const [searchQuery, setSearchQuery] = useState('');
  const { debouncedValue: debouncedSearchQuery } = useDebounce(
    searchQuery.length >= MIN_QUERY_LENGTH ? searchQuery : '',
  );

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
