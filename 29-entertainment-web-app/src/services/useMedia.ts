import { useQuery } from '@tanstack/react-query';
import { MediaCategory } from './api/fetchTypes';
import { clearString } from '../utils/helpers';
import { fetchMedia } from './api/media';

type optionsType = {
  category?: MediaCategory;
  query?: string;
};

export function useMedia(options: optionsType) {
  const { category, query } = options;

  const { data, error, isPending } = useQuery({
    queryKey: query
      ? ['media', category || 'All', clearString(query)]
      : ['media', category || 'All'],
    queryFn: () => fetchMedia(category, query),
  });

  return { data, error, isPending };
}
