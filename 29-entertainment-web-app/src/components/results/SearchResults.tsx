import { type Media } from '../../services/api/mediaTypes';
import Card from './Card';

type SearchResultsProps = { results: Media[] };

function SearchResults({ results }: SearchResultsProps) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-x-[1.875rem] md:gap-y-6 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
      {results.map(result => (
        <Card
          key={result.imdbID}
          title={result.Title}
          type={result.Type}
          year={result.Year}
          poster={result.Poster}
          isBookmarked={false}
        />
      ))}
    </ul>
  );
}

export default SearchResults;
