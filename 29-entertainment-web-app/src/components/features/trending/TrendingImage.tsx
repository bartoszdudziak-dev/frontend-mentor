import { TrendingThumbnail } from '../../../services/api/fetchTypes';
import { BREAKPOINTS } from '../../../utils/constants';

type TrendingImageProps = {
  thumbnail: TrendingThumbnail;
  title: string;
};

function TrendingImage({ title, thumbnail }: TrendingImageProps) {
  return (
    <picture>
      <source
        media={`(max-width:${BREAKPOINTS.SMALL - 1}px)`}
        srcSet={thumbnail.small}
      />
      <source
        media={`(min-width:${BREAKPOINTS.SMALL}px)`}
        srcSet={thumbnail.large}
      />
      <img
        className={
          'h-full w-full object-cover transition-all duration-300 group-hover:opacity-50'
        }
        src="assets/logo.svg"
        alt={`Thumbnail of ${title}`}
      />
    </picture>
  );
}
export default TrendingImage;
