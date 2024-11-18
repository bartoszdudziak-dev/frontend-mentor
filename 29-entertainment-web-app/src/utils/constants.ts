export const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

export const MIN_QUERY_LENGTH = 3;

export const BREAKPOINTS = {
  SMALL: 768,
  MEDIUM: 1024,
  LARGE: 1280,
};

export const categories = {
  movie: 'Movie',
  series: 'TV Series',
  episode: 'Episode',
};
