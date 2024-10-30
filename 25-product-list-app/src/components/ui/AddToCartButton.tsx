import { useCart } from '../../context/CartContext';
import QuantityButton from './QuantityButton';

type ButtonProps = {
  name: string;
};

const style =
  'flex w-full items-center rounded-full p-3 text-sm font-semibold shadow-md';

function AddToCartButton({ name }: ButtonProps) {
  const { incrementQuantity, decrementQuantity, getItem } = useCart();
  const dessert = getItem(name);

  if (!dessert)
    return (
      <button
        onClick={() => incrementQuantity(name)}
        className={`${style} justify-center gap-2 border border-rose-400 bg-white-400 text-rose-900 transition-all duration-300 hover:border-red-400 hover:text-red-400`}
      >
        <img src="icon-add-to-cart.svg" alt="" className="size-5" />
        <span>Add to Cart</span>
      </button>
    );

  return (
    <div
      className={`${style} flex w-full items-center justify-between bg-red-400 text-white-400`}
    >
      <QuantityButton
        type="decrement"
        onClick={() => decrementQuantity(name)}
      />
      <span>{dessert?.quantity}</span>
      <QuantityButton
        type="increment"
        onClick={() => incrementQuantity(name)}
      />
    </div>
  );
}

export default AddToCartButton;
