import { useCart } from '../../context/CartContext';
import OrderItem from './OrderItem';

function OrderList() {
  const { cart } = useCart();

  return (
    <ul className="max-h-[235px] overflow-y-auto overflow-x-hidden">
      {cart.map(item => (
        <OrderItem item={item} key={item.name} />
      ))}
    </ul>
  );
}

export default OrderList;
