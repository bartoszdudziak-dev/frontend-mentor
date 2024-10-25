import TotalPrice from '../ui/TotalPrice';
import OrderList from './OrderList';

function OrderDetails() {
  return (
    <div className="w-full space-y-6 rounded-lg bg-rose-50 p-6">
      <OrderList />
      <TotalPrice />
    </div>
  );
}

export default OrderDetails;
