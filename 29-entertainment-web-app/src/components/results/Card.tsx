import { type CardType } from '../../utils/commonTypes';
import { categories } from '../../utils/constants';
import IconBookmarkEmpty from '../icons/IconBookmarkEmpty';
import IconBookmarkFull from '../icons/IconBookmarkFull';
import IconCategoryMovie from '../icons/IconCategoryMovie';
import IconCategorySeries from '../icons/IconCategorySeries';
import IconPlay from '../icons/IconPlay';

function Card({ title, poster, year, type, isBookmarked }: CardType) {
  const categoryIcon =
    type === 'movie' ? <IconCategoryMovie /> : <IconCategorySeries />;

  const hasPoster = poster && poster !== 'N/A';

  return (
    <article className="relative">
      <div className="group relative mb-2 aspect-[11/7] w-full cursor-pointer items-center overflow-hidden rounded-lg shadow">
        <img
          loading="lazy"
          alt={hasPoster ? `Poster of ${title}` : 'Poster not available'}
          src={hasPoster ? poster : '/assets/logo.svg'}
          className={`${hasPoster ? 'object-cover object-top' : ''} h-full w-full object-center transition-all duration-300 group-hover:opacity-50`}
        />
        <div className="absolute left-1/2 top-1/2 hidden w-full max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white bg-opacity-25 p-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex xl:gap-5 xl:text-lg">
          <IconPlay className="w-6 xl:w-[1.9375rem]" />
          <span className="font-medium">Play</span>
        </div>
      </div>
      <div className="flex gap-1.5 text-[0.6875rem] opacity-75 md:gap-2 md:text-[0.8125rem]">
        <span>{year}</span>
        <span>&middot;</span>
        <div className="flex items-center gap-1">
          <span className="-translate-y-[1px] scale-90 md:scale-105">
            {categoryIcon}
          </span>
          <span>{categories[type]}</span>
        </div>
      </div>
      <h3 className="line-clamp-2 text-sm font-medium md:text-lg">{title}</h3>
      <button className="absolute right-[5%] top-[5%] flex size-8 items-center justify-center rounded-full bg-primary-dark-blue bg-opacity-50 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary-dark-blue">
        {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </button>
    </article>
  );
}

export default Card;
