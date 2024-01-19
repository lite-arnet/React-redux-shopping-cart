import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCart } from './cartSlice';

function CartProduct() {
  const cart = useSelector(getCart);
  console.log('cart', cart);
  return (
    <ul className="flex h-[500px] w-[150px]  flex-col items-center overflow-y-auto  rounded-lg bg-orange-300 duration-500 sm:w-[300px]">
      {cart?.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CartProduct;
