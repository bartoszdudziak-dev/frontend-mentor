import { type Media } from '../../../services/api/fetchTypes';
import { useBookmarks } from '../../../services/useBookmarks';
import Card from './Card/Card';

type SearchResultsProps = { results: Media[] };

function SearchResults({ results }: SearchResultsProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-x-[1.875rem] md:gap-y-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
      {results.map(result => (
        <Card
          key={result.title}
          title={result.title}
          thumbnail={result.thumbnail.regular}
          year={result.year}
          category={result.category}
          rating={result.rating}
          isBookmarked={isBookmarked(result.title)}
          toggleBookmark={() => toggleBookmark(result.title)}
        />
      ))}
    </div>
  );
}

export default SearchResults;
