import Error from '../components/ui/Error';
import Spinner from '../components/ui/Spinner';
import SearchResults from '../components/features/results/SearchResults';
import ResultsSummary from '../components/features/results/ResultsSummary';
import Heading from '../components/ui/Heading';
import { useMedia } from '../services/useMedia';
import { useSearch } from '../context/search/useSearch';

function Home() {
  const { debouncedSearchQuery } = useSearch();

  const {
    data: media,
    error,
    isPending,
  } = useMedia({
    query: debouncedSearchQuery,
  });

  if (isPending) return <Spinner absoluteCentered={true} />;

  if (!media || error) return <Error />;

  if (media.length === 0)
    return <ResultsSummary count={0} query={debouncedSearchQuery} />;

  const trendingMedia = media?.filter(el => el.isTrending);
  const recommendedMedia = media?.filter(el => !el.isTrending);

  return debouncedSearchQuery ? (
    <SearchResults results={media} />
  ) : (
    <>
      <Heading>Trending</Heading>
      <SearchResults results={trendingMedia} />

      <Heading>Recommended</Heading>
      <SearchResults results={recommendedMedia} />
    </>
  );
}
export default Home;
