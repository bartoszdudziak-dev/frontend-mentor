import { API_URL } from '../../utils/constants';
import { FetchResult, FetchType } from './mediaTypes';

export async function fetchMedia(
  pageParam: number,
  type: FetchType,
  query?: string,
): Promise<FetchResult> {
  let fetchUrl = `${API_URL}&page=${pageParam}`;

  if (type !== 'all') fetchUrl += `&type=${type}`;

  if (query) fetchUrl += `&s=${query}`;
  else fetchUrl += `&s=war`;

  const response = await fetch(fetchUrl);

  if (!response.ok) return { Response: 'False', Error: 'Fetch failed' };

  const data = await response.json();

  return data;
}
