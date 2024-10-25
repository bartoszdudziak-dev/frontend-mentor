import { formatPrice } from '../../utils/helpers';
import { Dessert } from '../../lib/types';

import AddToCartButton from '../ui/AddToCartButton';

import { useCart } from '../../context/CartContext';
import { useLayout } from '../../context/LayoutContext';

function DessertItem({ dessert }: { dessert: Dessert }) {
  const { getItem } = useCart();
  const { screenSize } = useLayout();
  const path = dessert.image[screenSize].split('/').pop();

  return (
    <li className="space-y-9">
      <div
        className={`relative rounded-lg shadow-md ${getItem(dessert.name) ? 'outline outline-2 outline-red-400' : ''}`}
      >
        <img
          src={path}
          alt={dessert.name}
          className="rounded-lg object-fill object-center"
        />
        <div className="absolute bottom-0 left-[50%] w-40 -translate-x-[50%] translate-y-[50%]">
          <AddToCartButton name={dessert.name} />
        </div>
      </div>
      <div className="grid gap-50">
        <span className="text-sm text-rose-500">{dessert.category}</span>
        <h3 className="font-semibold text-rose-900">{dessert.name}</h3>
        <span className="font-semibold text-red-400">
          {formatPrice(dessert.price)}
        </span>
      </div>
    </li>
  );
}

export default DessertItem;
