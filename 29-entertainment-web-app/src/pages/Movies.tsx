import ResultsSummary from '../components/results/ResultsSummary';
import SearchResults from '../components/results/SearchResults';
import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import { useSearch } from '../context/search/useSearch';
import { useMovies } from '../services/useMovies';
import { MIN_QUERY_LENGTH } from '../utils/constants';

function Movies() {
  const { debouncedSearchQuery } = useSearch();
  const { data: movies, error, isFetching } = useMovies(debouncedSearchQuery);

  if (debouncedSearchQuery.length < MIN_QUERY_LENGTH)
    return <div>Recommended</div>;

  if (isFetching) return <Spinner />;

  if (error) return <Error />;

  if (!movies) return <ResultsSummary query={debouncedSearchQuery} count={0} />;

  return (
    <div className="space-y-4 md:space-y-6">
      <ResultsSummary query={debouncedSearchQuery} count={movies.length} />
      <SearchResults results={movies} />
    </div>
  );
}

export default Movies;
