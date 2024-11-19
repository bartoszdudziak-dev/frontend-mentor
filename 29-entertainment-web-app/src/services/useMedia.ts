import { GARGBAGE_COLECTION_TIME } from '../utils/constants';
import { type FetchType } from './api/fetchTypes';
import { fetchMedia } from './api/media';
import { useInfiniteQuery } from '@tanstack/react-query';

type optionsType = { type: FetchType; query?: string };

export function useMedia(options: optionsType) {
  const { type, query } = options;

  const formatQuery = (query: string) => query.trim().toLowerCase();

  let totalResults = 0;

  const {
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: query ? ['media', type, formatQuery(query)] : ['media', type],
    queryFn: ({ pageParam }) =>
      fetchMedia(pageParam, type, query && formatQuery(query)),
    initialPageParam: 1,
    staleTime: Infinity,
    gcTime: GARGBAGE_COLECTION_TIME,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.Response === 'False') return null;

      totalResults = +lastPage.totalResults;

      const currentCount = pages.flatMap(page =>
        page.Response === 'True' ? page.Search : [],
      ).length;

      return currentCount < totalResults ? pages.length + 1 : null;
    },
  });

  const flattenedData =
    data?.pages.flatMap(page =>
      page.Response === 'True' ? page.Search : [],
    ) || [];

  return {
    data: flattenedData,
    totalResults,
    hasNoResults: !flattenedData.length,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
  };
}
