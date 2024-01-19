import { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import { Circles, DNA, Watch } from 'react-loader-spinner';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchListOfProducts() {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) throw new Error('Could not fetch products');
        const data = await res.json();
        console.log('products', data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchListOfProducts();
  }, []);
  return (
    <div className="mx-5 mt-5 ">
      {loading ? (
        <div className="flex min-h-screen w-full items-center justify-center">
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#412189 "
            ariaLabel="watch-loading"
          />
        </div>
      ) : (
        <Products products={products} />
      )}
      {/* {products.length > 0 &&
        products.map((product) => (
          <Products key={product.id} product={product} />
        ))} */}
    </div>
  );
}

export default Home;
