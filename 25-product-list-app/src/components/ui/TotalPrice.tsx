import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';

function TotalPrice() {
  const { getTotalPrice } = useCart();

  const totalPrice = getTotalPrice();

  return (
    <div className="flex items-center justify-between text-rose-900">
      <span className="text-sm">Order total</span>
      <span className="text-2xl font-bold">{formatPrice(totalPrice)}</span>
    </div>
  );
}

export default TotalPrice;
