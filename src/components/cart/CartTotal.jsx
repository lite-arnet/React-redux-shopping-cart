import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice, getTotalQuantity, orderItems } from './cartSlice';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';

function CartTotal() {
  const totalAmount = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);
  const dispatch = useDispatch();
  function handleOrder() {
    dispatch(orderItems());
    toast.success('Item order is succesfull');
  }
  return (
    <div className="flex h-[300px] w-[150px] flex-col items-center justify-center gap-7 rounded-lg bg-slate-200  py-5 sm:h-[350px] sm:w-[350px]">
      <h1 className="text-wrap font-mono text-sm font-bold sm:text-3xl">
        Your Cart Summary
      </h1>

      <p className=" items flex flex-col items-center justify-center gap-1 font-mono text-sm font-bold sm:flex sm:flex-row sm:text-2xl">
        Total Amount:{' '}
        <span className="rounded-lg bg-indigo-500 px-3 py-1 text-sm text-indigo-50 sm:text-2xl">
          💲{Math.floor(totalAmount)}
        </span>
      </p>

      <p className="flex flex-col items-center justify-center gap-1 font-mono text-sm font-bold sm:flex sm:flex-row sm:text-2xl">
        Total Items:{' '}
        <span className="rounded-lg bg-indigo-500 px-1  py-1 pl-3 text-indigo-50 sm:px-3 sm:pl-5 sm:text-2xl">
          {totalQuantity}
        </span>
      </p>
      <Button type="secondary" onClick={handleOrder}>
        Order Now
      </Button>
    </div>
  );
}

export default CartTotal;
