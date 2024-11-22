export type TrendingThumbnail = {
  small: string;
  large: string;
};

export type RegularThumbnail = {
  small: string;
  medium: string;
  large: string;
};

export type ThumbnailType = {
  trending: TrendingThumbnail;
  regular: RegularThumbnail;
};

export type MediaCategory = 'Movie' | 'TV Series';

export type Media = {
  title: string;
  thumbnail: ThumbnailType;
  year: number;
  category: MediaCategory;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
