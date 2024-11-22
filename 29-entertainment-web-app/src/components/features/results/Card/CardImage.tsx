import { ThumbnailType } from '../../../../services/api/fetchTypes';
import { BREAKPOINTS } from '../../../../utils/constants';

type CardImageProps = { thumbnail: ThumbnailType; title: string };

function CardImage({ title, thumbnail }: CardImageProps) {
  return (
    <picture>
      <source
        media={`(max-width:${BREAKPOINTS.SMALL - 1}px)`}
        srcSet={thumbnail.regular.small}
      />
      <source
        media={`(min-width:${BREAKPOINTS.SMALL}px) and (max-width:${BREAKPOINTS.MEDIUM - 1}px)`}
        srcSet={thumbnail.regular.medium}
      />
      <source
        media={`(min-width:${BREAKPOINTS.MEDIUM}px)`}
        srcSet={thumbnail.regular.large}
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
