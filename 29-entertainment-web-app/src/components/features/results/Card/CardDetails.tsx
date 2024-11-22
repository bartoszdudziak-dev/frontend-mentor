import { MediaCategory } from '../../../../services/api/fetchTypes';
import IconCategoryMovie from '../../../icons/IconCategoryMovie';
import IconCategorySeries from '../../../icons/IconCategorySeries';

type CardDetailsProps = {
  category: MediaCategory;
  rating: string;
  year: number;
  size?: 'regular' | 'large';
};

function CardDetails({
  category,
  rating,
  year,
  size = 'regular',
}: CardDetailsProps) {
  return (
    <div
      className={`${size === 'regular' ? 'md:text-[0.8125rem]' : 'md:text-[0.9375rem]'} flex gap-1.5 text-[0.6875rem] opacity-75 md:gap-2`}
    >
      <span>{year}</span>
      <span>&middot;</span>
      <div className="flex items-center gap-1">
        <span className="-translate-y-[1px] scale-90 md:scale-105">
          {category === 'Movie' ? (
            <IconCategoryMovie />
          ) : (
            <IconCategorySeries />
          )}
        </span>
        <span>{category}</span>
      </div>
      <span>&middot;</span>
      <span>{rating}</span>
    </div>
  );
}

export default CardDetails;
