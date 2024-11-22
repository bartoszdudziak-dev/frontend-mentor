import { type RegularThumbnail } from '../../../../services/api/fetchTypes';
import { BREAKPOINTS } from '../../../../utils/constants';

type CardImageProps = {
  thumbnail: RegularThumbnail;
  title: string;
};

function CardImage({ title, thumbnail }: CardImageProps) {
  return (
    <picture>
      <source
        media={`(max-width:${BREAKPOINTS.SMALL - 1}px)`}
        srcSet={thumbnail.small}
      />
      <source
        media={`(min-width:${BREAKPOINTS.SMALL}px) and (max-width:${BREAKPOINTS.MEDIUM - 1}px)`}
        srcSet={thumbnail.medium}
      />
      <source
        media={`(min-width:${BREAKPOINTS.MEDIUM}px)`}
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

export default CardImage;
