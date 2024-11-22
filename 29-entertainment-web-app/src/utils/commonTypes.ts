import { ReactNode } from 'react';
import {
  type RegularThumbnail,
  type TrendingThumbnail,
  type Media,
} from '../services/api/fetchTypes';

export type WithChildren = { children: ReactNode };
export type WithClassName = { className?: string };

export type CardProps = Omit<Media, 'isTrending' | 'thumbnail'> & {
  toggleBookmark: () => void;
  isBookmarked: boolean;
  thumbnail: RegularThumbnail;
};

export type TrendingCardProps = Omit<Media, 'isTrending' | 'thumbnail'> & {
  toggleBookmark: () => void;
  isBookmarked: boolean;
  thumbnail: TrendingThumbnail;
};
