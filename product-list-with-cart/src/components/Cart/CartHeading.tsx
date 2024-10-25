import { useCart } from '../../context/CartContext';

function CartHeading() {
  const { getTotalQuantity } = useCart();

  const totalQuantity = getTotalQuantity();

  return (
    <h2 className="text-2xl font-bold text-red-400">
      Your Cart <span>({totalQuantity})</span>
    </h2>
  );
}

export default CartHeading;
