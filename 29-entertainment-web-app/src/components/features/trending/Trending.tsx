import { Media } from '../../../services/api/fetchTypes';
import { useBookmarks } from '../../../services/useBookmarks';
import { categories } from '../../../utils/constants';
import IconBookmarkEmpty from '../../icons/IconBookmarkEmpty';
import IconBookmarkFull from '../../icons/IconBookmarkFull';
import IconCategoryMovie from '../../icons/IconCategoryMovie';
import IconCategorySeries from '../../icons/IconCategorySeries';
import IconPlay from '../../icons/IconPlay';
import Heading from '../../ui/Heading';

const trendingMedia = [
  {
    Title: 'Arcane',
    Year: '2021–2024',
    imdbID: 'tt11126994',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_SX300.jpg',
  },

  {
    Title: 'Yellowstone',
    Year: '2018–2024',
    imdbID: 'tt4236770',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzE2ODQ0NmQtYmMxMS00MGRlLTgwOGEtYjRkN2FkYmZlN2JlXkEyXkFqcGc@._V1_SX300.jpg',
  },

  {
    Title: 'Deadpool & Wolverine',
    Year: '2024',
    imdbID: 'tt6263850',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_SX300.jpg',
  },

  {
    Title: 'Gladiator II',
    Year: '2024',
    imdbID: 'tt9218128',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_SX300.jpg',
  },

  {
    Title: 'From',
    Year: '2022–',
    imdbID: 'tt9813792',
    Type: 'series',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_SX300.jpg',
  },
] as Media[];

function Trending() {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  return (
    <>
      <Heading>Trending</Heading>
      <div className="scrollable-container grid auto-cols-[55%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-4 md:auto-cols-[33%] md:gap-10 md:pb-8 lg:auto-cols-[23%]">
        {trendingMedia.map(media => (
          <article
            key={media.imdbID}
            className="group relative cursor-pointer items-center overflow-hidden rounded-lg shadow"
          >
            <img
              src={media.Poster}
              alt={`Poster of ${media}`}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover object-top transition-all duration-300 group-hover:opacity-50"
            />
            <div className="absolute left-1/2 top-1/2 hidden w-full max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white bg-opacity-25 p-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex xl:gap-5 xl:text-lg">
              <IconPlay className="w-6 xl:w-[1.9375rem]" />
              <span className="font-medium">Play</span>
            </div>

            <div className="absolute bottom-[5%] left-[5%] min-w-[50%] rounded-lg bg-black bg-opacity-60 p-2">
              <div className="flex items-center gap-1.5 text-[0.6875rem] opacity-75 md:gap-2 md:text-[0.8125rem]">
                <span>{media.Year}</span>
                <span>&middot;</span>
                <span className="-translate-y-[1px] scale-90 md:scale-105">
                  {media.Type === 'movie' ? (
                    <IconCategoryMovie />
                  ) : (
                    <IconCategorySeries />
                  )}
                </span>
                <span>{categories[media.Type]}</span>
              </div>
              <h3 className="line-clamp-2 text-sm font-medium md:text-lg">
                {media.Title}
              </h3>
            </div>

            <button
              onClick={() =>
                !isBookmarked(media.imdbID)
                  ? addBookmark(media)
                  : removeBookmark(media.imdbID)
              }
              className="absolute right-[5%] top-[5%] z-20 flex size-8 items-center justify-center rounded-full bg-primary-dark-blue bg-opacity-50 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary-dark-blue"
            >
              {isBookmarked(media.imdbID) ? (
                <IconBookmarkFull />
              ) : (
                <IconBookmarkEmpty />
              )}
            </button>
          </article>
        ))}
      </div>
    </>
  );
}

export default Trending;
