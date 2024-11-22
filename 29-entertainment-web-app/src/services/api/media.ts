import { type Media, type MediaCategory } from './fetchTypes';
import { clearString } from '../../utils/helpers';

export async function fetchMedia(
  category?: MediaCategory,
  query?: string,
): Promise<Media[] | undefined> {
  try {
    const response = await fetch('data/data.json');

    await new Promise(resolve => setTimeout(resolve, 300));

    if (!response.ok) throw new Error('Fetch failed');

    let data = (await response.json()) as Media[];

    if (category) {
      data = data.filter(el => el.category === category);
    }

    if (query)
      data = data.filter(el =>
        clearString(el.title).includes(clearString(query)),
      );

    return data;
  } catch (error) {
    console.error(error);
  }
}
