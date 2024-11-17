import { API_URL } from '../../utils/constants';

export async function fetchMovies(title: string) {
  const response = await fetch(`${API_URL}type=movie&s=${title}`);
  if (!response.ok) throw new Error('Fetching failed');
  return await response.json();
}

export async function fetchSeries(title: string) {
  const response = await fetch(`${API_URL}type=series&s=${title}`);
  if (!response.ok) throw new Error('Fetching failed');
  return await response.json();
}
