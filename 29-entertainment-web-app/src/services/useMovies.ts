import { type DataType } from '../utils/commonTypes';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from './api/movies';
import { GARBAGE_COLLECT_TIME, MIN_QUERY_LENGTH } from '../utils/constants';

export function useMovies(query: string) {
  const cleanQuery = query.toLowerCase().trim();

  const { data, error, isFetching } = useQuery({
    queryFn: () => fetchMovies(cleanQuery),
    queryKey: ['movies', `${cleanQuery}`],
    enabled: query.length >= MIN_QUERY_LENGTH,
    staleTime: Infinity,
    gcTime: query.length >= MIN_QUERY_LENGTH ? GARBAGE_COLLECT_TIME : 0,
  });

  return {
    data: data?.Search as DataType,
    error,
    isFetching,
  };
}
