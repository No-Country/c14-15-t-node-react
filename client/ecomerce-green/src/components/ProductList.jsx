import Pagination from "./Pagination";
import ProductCards from "./ProductCards";

const ProductList = ({productsData}) => {
  return (
    <section className="card-container py-10 flex flex-col justify-center items-center w-screen min-w-min gap-10 flex-wrap md:flex-row">
      {productsData?.map((product) => {
        return <ProductCards key={product?.id} product={product} />;
      })}
   <Pagination />
    </section>
  );
};

export default ProductList;
