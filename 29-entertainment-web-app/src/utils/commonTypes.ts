import { ReactNode } from 'react';

export type WithChildren = { children: ReactNode };
export type WithClassName = { className?: string };
export type CardType = {
  data: {
    title: string;
    thumbnail: { regular: { small: string; medium: string; large: string } };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
  };
};
