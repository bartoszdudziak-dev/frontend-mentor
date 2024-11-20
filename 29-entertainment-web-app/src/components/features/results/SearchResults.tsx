import { type Media } from '../../../services/api/fetchTypes';
import { useBookmarks } from '../../../services/useBookmarks';
import Card from './Card';

type SearchResultsProps = { results: Media[] };

function SearchResults({ results }: SearchResultsProps) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-x-[1.875rem] md:gap-y-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
      {results.map(result => (
        <Card
          key={result.imdbID}
          id={result.imdbID}
          title={result.Title}
          type={result.Type}
          year={result.Year}
          poster={result.Poster}
          isBookmarked={isBookmarked(result.imdbID)}
          addBookmark={() => addBookmark(result)}
          removeBookmark={() => removeBookmark(result.imdbID)}
        />
      ))}
    </ul>
  );
}

export default SearchResults;
