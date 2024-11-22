import { type Media } from '../../../services/api/fetchTypes';
import { useBookmarks } from '../../../services/useBookmarks';
import TrendingCard from './TrendingCard';

type TrendingProps = {
  results: Media[];
};

function Trending({ results }: TrendingProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  return (
    <div className="no-scrollbar grid auto-cols-[65%] grid-flow-col gap-4 overflow-x-auto md:auto-cols-[55%] md:gap-10 md:pb-8 lg:auto-cols-[35%]">
      {results.map(result => (
        <TrendingCard
          key={result.title}
          title={result.title}
          thumbnail={result.thumbnail.trending}
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

export default Trending;

// (
//   <>
//     <Heading>Trending</Heading>
//     <div className="scrollable-container grid auto-cols-[55%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-4 md:auto-cols-[33%] md:gap-10 md:pb-8 lg:auto-cols-[23%]">
//       {trendingMedia.map(media => (
//         <article
//           key={media.imdbID}
//           className="group relative cursor-pointer items-center overflow-hidden rounded-lg shadow"
//         >
//           <img
//             src={media.Poster}
//             alt={`Poster of ${media}`}
//             loading="lazy"
//             className="aspect-[5/6] w-full object-cover object-top transition-all duration-300 group-hover:opacity-50"
//           />
//           <div className="absolute left-1/2 top-1/2 hidden w-full max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white bg-opacity-25 p-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex xl:gap-5 xl:text-lg">
//             <IconPlay className="w-6 xl:w-[1.9375rem]" />
//             <span className="font-medium">Play</span>
//           </div>

//           <div className="absolute bottom-[5%] left-[5%] min-w-[50%] rounded-lg bg-black bg-opacity-60 p-2">
//             <div className="flex items-center gap-1.5 text-[0.6875rem] opacity-75 md:gap-2 md:text-[0.8125rem]">
//               <span>{media.Year}</span>
//               <span>&middot;</span>
//               <span className="-translate-y-[1px] scale-90 md:scale-105">
//                 {media.Type === 'movie' ? (
//                   <IconCategoryMovie />
//                 ) : (
//                   <IconCategorySeries />
//                 )}
//               </span>
//               <span>{categories[media.Type]}</span>
//             </div>
//             <h3 className="line-clamp-2 text-sm font-medium md:text-lg">
//               {media.Title}
//             </h3>
//           </div>

//           <button
//             onClick={() =>
//               !isBookmarked(media.imdbID)
//                 ? addBookmark(media)
//                 : removeBookmark(media.imdbID)
//             }
//             className="absolute right-[5%] top-[5%] z-20 flex size-8 items-center justify-center rounded-full bg-primary-dark-blue bg-opacity-50 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary-dark-blue"
//           >
//             {isBookmarked(media.imdbID) ? (
//               <IconBookmarkFull />
//             ) : (
//               <IconBookmarkEmpty />
//             )}
//           </button>
//         </article>
//       ))}
//     </div>
//   </>
// );
