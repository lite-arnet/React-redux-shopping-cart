import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, isProductAdded } from '../cart/cartSlice';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const addedProduct = useSelector(isProductAdded(product.id));
  console.log(addedProduct);
  const isAdded = product.id === addedProduct?.id;

  function addItem() {
    const productItem = {
      id: product.id,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    dispatch(addToCart(productItem));
    toast.success('Product successfully added in the cart');
  }

  function deleteItem() {
    dispatch(deleteFromCart(product.id));
    toast('Item removed from cart.', {
      style: {
        fontSize: '16px',
        maxWidth: '500px',
        padding: '16px 24px',
        background: 'orange',
        color: '#fff',
      },
      icon: '❌',
    });
  }
  return (
    <div className="ml-5 mt-10 flex h-[360px] w-[225px] flex-col items-center gap-3 overflow-hidden rounded-xl border-2 border-indigo-400 shadow-inner duration-700 hover:scale-105 hover:shadow-lg ">
      <div className="mb-5 mt-5 h-[150px] duration-500 hover:scale-125">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full  object-cover p-2 "
        />
      </div>
      <div className="flex w-full items-center justify-center px-5  ">
        <p className="truncate font-mono text-base font-bold">
          {product.title}
        </p>
      </div>
      <div className="flex  w-full items-center justify-center px-5 py-5 duration-500 hover:scale-105">
        {isAdded ? (
          <Button type="primary" onClick={deleteItem}>
            Remove from cart
          </Button>
        ) : (
          <Button type="primary" onClick={addItem}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
