import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import SearchResults from '../components/features/results/SearchResults';
import ResultsSummary from '../components/features/results/ResultsSummary';
import Heading from '../components/ui/Heading';
import { useMedia } from '../services/useMedia';
import { useSearch } from '../context/search/useSearch';

function Movies() {
  const { debouncedSearchQuery } = useSearch();

  const {
    data: movies,
    error,
    isPending,
  } = useMedia({
    category: 'Movie',
    query: debouncedSearchQuery,
  });

  if (isPending) return <Spinner absoluteCentered={true} />;

  if (!movies || error) return <Error />;

  if (movies.length === 0)
    return <ResultsSummary count={0} query={debouncedSearchQuery} />;

  return debouncedSearchQuery ? (
    <SearchResults results={movies} />
  ) : (
    <>
      <Heading>Movies</Heading>
      <SearchResults results={movies} />
    </>
  );
}
export default Movies;
