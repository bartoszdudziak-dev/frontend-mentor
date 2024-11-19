import { API_URL } from '../../utils/constants';
import { FetchError, type Media } from './fetchTypes';

export async function fetchBookmark(id: string): Promise<Media | FetchError> {
  const fetchUrl = `${API_URL}&i=${id}`;
  const response = await fetch(fetchUrl);

  if (!response.ok) return { Response: 'False', Error: 'Fetch failed' };

  const data = await response.json();

  return {
    Title: data.Title,
    Poster: data.Poster,
    Year: data.Year,
    Type: data.Type,
    imdbID: data.imdbID,
  };
}

export async function fetchAllBookmarks(ids: string[]): Promise<Media[]> {
  const data = await Promise.all(ids.map(id => fetchBookmark(id)));
  console.log('fetching');
  return data.filter((result): result is Media => {
    // Check if `result` is not a `FetchError` (doesn't have `Response: 'False'`)
    return (
      !(result as FetchError).Response ||
      (result as FetchError).Response !== 'False'
    );
  });
}
