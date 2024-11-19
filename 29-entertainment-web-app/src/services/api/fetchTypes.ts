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

export type Rating = {
  Source: string;
  Value: string;
};
export type Bookmark = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
