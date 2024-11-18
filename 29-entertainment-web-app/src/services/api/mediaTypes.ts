import { type MediaType } from '../../utils/commonTypes';

export type FetchResult = FetchData | FetchError;

export type FetchError = {
  Error: string;
  Response: 'False';
};

export type FetchData = {
  Response: 'True';
  totalResults: string;
  Search: Media[];
};

export type FetchType = MediaType | 'all';

export type Media = {
  Title: string;
  Poster: string;
  Year: string;
  Type: MediaType;
  imdbID: string;
};
