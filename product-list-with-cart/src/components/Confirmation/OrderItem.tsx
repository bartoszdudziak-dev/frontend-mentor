import { type Item } from '../../lib/types';
import { formatPrice } from '../../utils/helpers';
import SpinnerMini from '../ui/SpinnerMini';
import { useDesserts } from '../../hooks/useDesserts';

function OrderItem({ item }: { item: Item }) {
  const { getDessertDetails } = useDesserts();

  const path = getDessertDetails(item.name)?.image.thumbnail.split('/').pop();

  return (
    <li className="flex w-full items-center gap-4 border-b pb-4 text-sm [&:not(:first-child)]:py-4">
      {path ? (
        <img className="size-12 rounded-lg" src={path} alt={item.name} />
      ) : (
        <SpinnerMini />
      )}

      <div className="flex w-full flex-col gap-2">
        <h3 className="max-w-[90%] truncate font-semibold text-rose-900">
          {item.name}
        </h3>
        <div className="flex gap-2">
          <span className="font-semibold text-red-400">{item.quantity}</span>
          <span className="text-rose-500">@ {formatPrice(item.price)}</span>
        </div>
      </div>

      <span className="ml-auto font-semibold text-rose-900">
        {formatPrice(item.price * item.quantity)}
      </span>
    </li>
  );
}

export default OrderItem;
