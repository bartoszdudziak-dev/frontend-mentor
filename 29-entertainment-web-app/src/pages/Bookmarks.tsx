import SearchResults from '../components/features/results/SearchResults';
import ResultsSummary from '../components/features/results/ResultsSummary';
import Heading from '../components/ui/Heading';
import { useSearch } from '../context/search/useSearch';
import { Media } from '../services/api/fetchTypes';
import { useBookmarks } from '../services/useBookmarks';

function Bookmarks() {
  const { bookmarks, searchBookmarks } = useBookmarks();
  const { debouncedSearchQuery } = useSearch();

  const searchedBookmarks = searchBookmarks(debouncedSearchQuery);

  if (searchedBookmarks)
    return (
      <>
        <ResultsSummary
          count={searchedBookmarks.length}
          query={debouncedSearchQuery}
        />
        <SearchResults results={searchedBookmarks} />
      </>
    );

  const bookmarkedMovies = bookmarks.filter(
    (bookmark: Media) => bookmark.Type === 'movie',
  );

  const bookmarkedSeries = bookmarks.filter(
    (bookmark: Media) => bookmark.Type === 'series',
  );

  const bookmarkedOtherTypes = bookmarks.filter(
    (bookmark: Media) =>
      bookmark.Type !== 'series' && bookmark.Type !== 'movie',
  );

  if (!bookmarks?.length)
    return (
      <span className="text-xl font-light md:text-3xl">
        You have not any bookmarks
      </span>
    );

  return (
    <>
      {bookmarkedMovies.length ? (
        <div className="space-y-6">
          <Heading>Bookmarked Movies</Heading>
          <SearchResults results={bookmarkedMovies} />
        </div>
      ) : null}

      {bookmarkedSeries.length ? (
        <div className="space-y-6">
          <Heading>Bookmarked TV Series</Heading>
          <SearchResults results={bookmarkedSeries} />
        </div>
      ) : null}

      {bookmarkedOtherTypes.length ? (
        <div className="space-y-6">
          <Heading>Other Bookmarks</Heading>
          <SearchResults results={bookmarkedOtherTypes} />
        </div>
      ) : null}
    </>
  );
}

export default Bookmarks;
