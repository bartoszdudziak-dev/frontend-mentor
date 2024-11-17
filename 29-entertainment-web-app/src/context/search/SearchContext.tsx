import { createContext, Dispatch, SetStateAction } from 'react';

type SearchContextType = {
  searchQuery: string;
  debouncedSearchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined,
);
