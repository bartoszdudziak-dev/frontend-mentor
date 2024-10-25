import CartList from './CartList';
import Button from '../ui/Button';
import EmptyCart from './EmptyCart';

import { useCart } from '../../context/CartContext';
import Modal from '../ui/Modal';
import OrderConfirmation from '../Confirmation/OrderConfirmation';
import CartHeading from './CartHeading';
import CarbonInfo from './CarbonInfo';
import TotalPrice from '../ui/TotalPrice';
import { scrollToTop } from '../../utils/helpers';

function Cart() {
  const { getTotalQuantity } = useCart();

  const totalQuantity = getTotalQuantity();

  return (
    <div className="flex h-fit flex-col gap-y-300 rounded-lg bg-white-400 p-300 shadow-sm">
      <CartHeading />

      {totalQuantity === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartList />

          <TotalPrice />

          <CarbonInfo />

          <Modal>
            <Modal.Window>
              <OrderConfirmation />
            </Modal.Window>
            <Modal.Open onOpen={scrollToTop}>
              <Button>Confirm Order</Button>
            </Modal.Open>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Cart;
