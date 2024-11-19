import { API_URL } from '../../utils/constants';
import { FetchResult, FetchType } from './fetchTypes';

export async function fetchMedia(
  pageParam: number,
  type: FetchType,
  query?: string,
): Promise<FetchResult> {
  let fetchUrl = `${API_URL}&page=${pageParam}`;

  if (type !== 'all') fetchUrl += `&type=${type}`;

  if (query) fetchUrl += `&s=${query}`;
  else {
    if (type === 'all') fetchUrl += `&s=top`;
    if (type === 'movie') fetchUrl += `&s=movie`;
    if (type === 'series') fetchUrl += `&s=series`;
  }

  const response = await fetch(fetchUrl);

  if (!response.ok) return { Response: 'False', Error: 'Fetch failed' };

  const data = await response.json();

  return data;
}
