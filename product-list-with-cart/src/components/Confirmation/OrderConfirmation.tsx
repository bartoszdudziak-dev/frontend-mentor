import Button from '../ui/Button';
import Modal from '../ui/Modal';
import OrderHeading from './OrderHeading';
import OrderDetails from './OrderDetails';
import { useCart } from '../../context/CartContext';

function OrderConfirmation() {
  const { clearCart } = useCart();

  return (
    <div className="grid gap-8 bg-white-400 px-6 pb-6 pt-10 sm:p-10">
      <OrderHeading />

      <OrderDetails />

      <Modal.Close onClose={clearCart}>
        <Button>Start New Order</Button>
      </Modal.Close>
    </div>
  );
}

export default OrderConfirmation;
