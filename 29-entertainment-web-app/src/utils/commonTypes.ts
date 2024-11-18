import { ReactNode } from 'react';

export type WithChildren = { children: ReactNode };
export type WithClassName = { className?: string };

export type MediaType = 'movie' | 'series' | 'episode';
export type CardType = {
  title: string;
  poster: string;
  year: string;
  type: MediaType;
  isBookmarked: boolean;
};
