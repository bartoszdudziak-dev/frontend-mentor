import ResultsSummary from '../components/results/ResultsSummary';
import SearchResults from '../components/results/SearchResults';
import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import { useSearch } from '../context/search/useSearch';
import { useSeries } from '../services/useSeries';
import { MIN_QUERY_LENGTH } from '../utils/constants';

function Series() {
  const { debouncedSearchQuery } = useSearch();
  const { data: series, error, isFetching } = useSeries(debouncedSearchQuery);

  if (debouncedSearchQuery.length < MIN_QUERY_LENGTH)
    return <div>Recommended</div>;

  if (isFetching) return <Spinner />;

  if (error) return <Error />;

  if (!series) return <ResultsSummary query={debouncedSearchQuery} count={0} />;

  return (
    <div className="space-y-4 md:space-y-6">
      <ResultsSummary query={debouncedSearchQuery} count={series.length} />
      <SearchResults results={series} />
    </div>
  );
}

export default Series;
