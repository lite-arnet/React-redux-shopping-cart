import CartProduct from '../components/cart/CartProduct';
import { useSelector } from 'react-redux';
import { getCart, isItemsOrdered } from '../components/cart/cartSlice';
import CartTotal from '../components/cart/CartTotal';
import NotFound from '../components/NotFound/NotFound';
import OrderConfirmed from '../components/order/OrderConfirmed';

function Cart() {
  const cart = useSelector(getCart);
  const isOrdered = useSelector(isItemsOrdered);
  console.log('cart', cart);

  return (
    <div className="mx-5  flex h-screen items-center justify-center gap-16">
      {cart.length > 0 && (
        <>
          <CartProduct />
          <CartTotal />
        </>
      )}
      {cart.length <= 0 && isOrdered && <OrderConfirmed />}
      {cart.length <= 0 && !isOrdered && <NotFound />}
    </div>
  );
}

export default Cart;
