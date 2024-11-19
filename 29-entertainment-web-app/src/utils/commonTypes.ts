import { ReactNode } from 'react';

export type WithChildren = { children: ReactNode };
export type WithClassName = { className?: string };

export type MediaType = 'movie' | 'series' | 'episode';
export type CardType = {
  id: string;
  title: string;
  poster: string;
  year: string;
  type: MediaType;
  isBookmarked: boolean;
  addBookmark: (bookmarkId: string) => void;
  removeBookmark: (bookmarkId: string) => void;
};
