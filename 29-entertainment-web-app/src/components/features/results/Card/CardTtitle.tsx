import { WithChildren } from '../../../../utils/commonTypes';

function CardTtitle({ children }: WithChildren) {
  return (
    <h3 className="line-clamp-2 text-sm font-medium md:text-lg">{children}</h3>
  );
}

export default CardTtitle;
