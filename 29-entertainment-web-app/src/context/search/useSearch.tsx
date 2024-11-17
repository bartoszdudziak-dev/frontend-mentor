import { useContext } from 'react';
import { SearchContext } from './SearchContext';

export function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined)
    throw new Error('SearchContext was used outside of SearchContextProvider');

  return context;
}
