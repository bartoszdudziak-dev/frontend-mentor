import { formatPrice } from '../../utils/helpers';
import { Item } from '../../lib/types';

import CartItemRemoveButton from '../ui/RemoveButton';

import { useCart } from '../../context/CartContext';

function CartItem({ item }: { item: Item }) {
  const { removeItem } = useCart();

  return (
    <li className="flex items-center justify-between border-b pb-4 text-sm [&:not(:first-child)]:py-4">
      <div className="space-y-100">
        <h3 className="font-semibold text-rose-900">{item.name}</h3>
        <div className="flex gap-100">
          <span className="font-semibold text-red-400">{item.quantity}</span>
          <span className="text-rose-500">@ {formatPrice(item.price)}</span>
          <span className="font-semibold text-rose-500">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
      <CartItemRemoveButton onClick={() => removeItem(item.name)} />
    </li>
  );
}

export default CartItem;
