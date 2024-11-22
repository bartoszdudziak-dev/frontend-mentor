import { type CardProps } from '../../../../utils/commonTypes';
import BookmarkButton from './BookmarkButton';
import CardDetails from './CardDetails';
import CardImage from './CardImage';
import CardTtitle from './CardTtitle';
import PlayButton from './PlayButton';

function Card({
  title,
  category,
  year,
  thumbnail,
  rating,
  isBookmarked,
  toggleBookmark,
}: CardProps) {
  return (
    <article className="relative">
      <div className="group relative mb-2 aspect-video w-full cursor-pointer items-center overflow-hidden rounded-lg shadow">
        <CardImage title={title} thumbnail={thumbnail} />
        <PlayButton />
      </div>
      <CardDetails category={category} year={year} rating={rating} />
      <CardTtitle>{title}</CardTtitle>
      <BookmarkButton isBookmarked={isBookmarked} onToggle={toggleBookmark} />
    </article>
  );
}

export default Card;
