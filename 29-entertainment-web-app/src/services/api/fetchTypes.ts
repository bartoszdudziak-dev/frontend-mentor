type TrendingThumnail = {
  small: string;
  large: string;
};

type RegularThumnail = {
  small: string;
  medium: string;
  large: string;
};

export type ThumbnailType = {
  trending: TrendingThumnail;
  regular: RegularThumnail;
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
