import ProductItem from './ProductItem';

function Products({ products }) {
  return (
    <ul className="mx-auto grid min-h-[80vh] max-w-6xl justify-center gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default Products;
