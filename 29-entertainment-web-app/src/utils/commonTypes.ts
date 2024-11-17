import { ReactNode } from 'react';

export type WithChildren = { children: ReactNode };
export type WithClassName = { className?: string };

export type CategoryType = 'movie' | 'series' | 'episode';

export type CardType = {
  title: string;
  poster: string;
  year: string;
  type: CategoryType;
  isBookmarked: boolean;
};

export type DataType = {
  Title: string;
  Poster: string;
  Year: string;
  Type: CategoryType;
  imdbID: string;
}[];
