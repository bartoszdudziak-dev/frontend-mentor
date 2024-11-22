import { WithChildren } from '../../../../utils/commonTypes';

type CardTitleProps = {
  size?: 'regular' | 'large';
} & WithChildren;

function CardTtitle({ children, size = 'regular' }: CardTitleProps) {
  return (
    <h3
      className={`${size === 'regular' ? 'md:text-lg' : 'md:text-2xl'} line-clamp-2 text-sm font-medium`}
    >
      {children}
    </h3>
  );
}

export default CardTtitle;
