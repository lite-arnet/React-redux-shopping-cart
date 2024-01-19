import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function CartItem(item) {
  const dispatch = useDispatch();

  return (
    <div className="mb-10 flex h-20 w-full items-center justify-between gap-4 rounded-md px-5 py-5  sm:h-[150px] sm:w-[250px]">
      <img
        className="h-[70px] w-[50px] object-cover p-2 sm:h-[130px] sm:w-[120px]"
        src={item.item.image}
        alt=""
      />
      <div className="flex flex-col items-center justify-between sm:gap-3">
        <Button
          type="round"
          onClick={() => dispatch(increaseQuantity(item.item.id))}
        >
          +
        </Button>
        {item.item.quantity}
        <Button
          type="round"
          onClick={() => dispatch(decreaseQuantity(item.item.id))}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
