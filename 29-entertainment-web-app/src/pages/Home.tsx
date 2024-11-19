import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import SearchResults from '../components/results/SearchResults';
import ResultsSummary from '../components/results/ResultsSummary';
import { useSearch } from '../context/search/useSearch';
import { useMedia } from '../services/useMedia';
import { useScrollPagination } from '../hooks/useScrollPagination';
import Heading from '../components/ui/Heading';

function Home() {
  const { debouncedSearchQuery } = useSearch();

  const {
    data,
    error,
    totalResults,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    hasNoResults,
  } = useMedia({ type: 'all', query: debouncedSearchQuery });

  const { ref } = useScrollPagination(hasNextPage, fetchNextPage);

  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  if (hasNoResults)
    return <ResultsSummary count={0} query={debouncedSearchQuery} />;

  return (
    <>
      {!debouncedSearchQuery ? (
        <Heading>Recommended for you</Heading>
      ) : (
        <ResultsSummary count={totalResults} query={debouncedSearchQuery} />
      )}
      <SearchResults results={data} />
      <span ref={ref}>{isFetchingNextPage && <Spinner />}</span>
    </>
  );
}

export default Home;
