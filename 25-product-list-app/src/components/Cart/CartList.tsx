import CartItem from './CartItem';

import { useCart } from '../../context/CartContext';

function CartList() {
  const { cart } = useCart();

  return (
    <ul>
      {cart.map(item => (
        <CartItem key={item.name} item={item} />
      ))}
    </ul>
  );
}

export default CartList;
