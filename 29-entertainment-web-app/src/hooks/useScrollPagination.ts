import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { type FetchResult } from '../services/api/fetchTypes';

type fetchNextPageType = (
  options?: FetchNextPageOptions,
) => Promise<
  InfiniteQueryObserverResult<InfiniteData<FetchResult, unknown>, Error>
>;

export function useScrollPagination(
  hasNextPage: boolean,
  fetchNextPage: fetchNextPageType,
) {
  const { ref, inView } = useInView({
    root: document.querySelector('#main'),
    rootMargin: '500px',
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  return { ref };
}
