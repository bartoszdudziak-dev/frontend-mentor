import ResultsSummary from '../components/features/results/ResultsSummary';
import SearchResults from '../components/features/results/SearchResults';
import Error from '../components/ui/Error';
import Heading from '../components/ui/Heading';
import Spinner from '../components/ui/Spinner';
import { useSearch } from '../context/search/useSearch';
import { useBookmarks } from '../services/useBookmarks';
import { useMedia } from '../services/useMedia';
import { clearString } from '../utils/helpers';

function Bookmarks() {
  const { debouncedSearchQuery } = useSearch();
  const { data: media, error, isPending } = useMedia({});
  const { isBookmarked } = useBookmarks();

  if (isPending) return <Spinner absoluteCentered={true} />;

  if (!media || error) return <Error />;

  const bookmarks = media.filter(el => isBookmarked(el.title));

  if (bookmarks.length === 0)
    return (
      <p className="text-xl font-light md:text-3xl">
        You don't have any bookmarks
      </p>
    );

  const bookmarksSearched = bookmarks.filter(el =>
    clearString(el.title).includes(clearString(debouncedSearchQuery)),
  );

  if (bookmarksSearched.length === 0)
    return <ResultsSummary count={0} query={debouncedSearchQuery} />;

  const bookmarkedMovies = bookmarks.filter(
    bookmark => bookmark.category === 'Movie',
  );

  const bookmarkedSeries = bookmarks.filter(
    bookmark => bookmark.category === 'TV Series',
  );

  console.log(bookmarkedSeries);

  return debouncedSearchQuery ? (
    <>
      <ResultsSummary
        count={bookmarksSearched.length}
        query={debouncedSearchQuery}
      />
      <SearchResults results={bookmarksSearched} />
    </>
  ) : (
    <>
      {bookmarkedMovies.length ? (
        <>
          <Heading>Bookmarked Movies</Heading>
          <SearchResults results={bookmarkedMovies} />
        </>
      ) : null}

      {bookmarkedSeries.length ? (
        <>
          <Heading>Bookmarked TV Series</Heading>
          <SearchResults results={bookmarkedSeries} />
        </>
      ) : null}
    </>
  );
}
export default Bookmarks;
