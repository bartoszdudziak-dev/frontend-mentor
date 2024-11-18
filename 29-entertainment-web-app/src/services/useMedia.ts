import { type FetchType } from './api/mediaTypes';
import { fetchMedia } from './api/mediaFetch';
import { useInfiniteQuery } from '@tanstack/react-query';

type optionsType = { type: FetchType; query?: string };

export function useMedia(options: optionsType) {
  const { type, query } = options;

  const formatQuery = (query: string) => query.trim().toLowerCase();

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
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.Response === 'False') return null;

      const totalResults = +lastPage.totalResults;

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
    hasNoResults: !flattenedData.length,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
  };
}
