import { type TrendingCardProps } from '../../../utils/commonTypes';
import BookmarkButton from '../results/Card/BookmarkButton';
import CardDetails from '../results/Card/CardDetails';
import CardTtitle from '../results/Card/CardTtitle';
import PlayButton from '../results/Card/PlayButton';
import TrendingImage from './TrendingImage';

function TrendingCard({
  title,
  category,
  year,
  thumbnail,
  rating,
  isBookmarked,
  toggleBookmark,
}: TrendingCardProps) {
  return (
    <article className="relative">
      <div className="group relative mb-2 aspect-video w-full cursor-pointer items-center overflow-hidden rounded-lg shadow">
        <TrendingImage title={title} thumbnail={thumbnail} />
        <PlayButton />
        <BookmarkButton isBookmarked={isBookmarked} onToggle={toggleBookmark} />
        <div className="absolute bottom-[10%] left-[5%]">
          <CardDetails
            category={category}
            year={year}
            rating={rating}
            size="large"
          />
          <CardTtitle size="large">{title}</CardTtitle>
        </div>
      </div>
    </article>
  );
}

export default TrendingCard;
