import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import SearchResults from '../components/results/SearchResults';
import ResultsSummary from '../components/results/ResultsSummary';
import { useSearch } from '../context/search/useSearch';
import { useMedia } from '../services/useMedia';
import { useScrollPagination } from '../hooks/useScrollPagination';

function Series() {
  const { debouncedSearchQuery } = useSearch();

  const {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    hasNoResults,
  } = useMedia({ type: 'series', query: debouncedSearchQuery });

  const { ref } = useScrollPagination(hasNextPage, fetchNextPage);

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  if (hasNoResults)
    return <ResultsSummary count={0} query={debouncedSearchQuery} />;

  return (
    <>
      <SearchResults results={data} />
      <span ref={ref}>{isFetchingNextPage && <Spinner />}</span>
    </>
  );
}

export default Series;
