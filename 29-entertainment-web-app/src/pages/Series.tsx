import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import SearchResults from '../components/features/results/SearchResults';
import ResultsSummary from '../components/features/results/ResultsSummary';
import Heading from '../components/ui/Heading';
import { useMedia } from '../services/useMedia';
import { useSearch } from '../context/search/useSearch';

function Series() {
  const { debouncedSearchQuery } = useSearch();

  const {
    data: series,
    error,
    isPending,
  } = useMedia({
    category: 'TV Series',
    query: debouncedSearchQuery,
  });

  if (isPending) return <Spinner absoluteCentered={true} />;

  if (!series || error) return <Error />;

  if (series.length === 0)
    return <ResultsSummary count={0} query={debouncedSearchQuery} />;

  return debouncedSearchQuery ? (
    <SearchResults results={series} />
  ) : (
    <>
      <Heading>Series</Heading>
      <SearchResults results={series} />
    </>
  );
}
export default Series;
