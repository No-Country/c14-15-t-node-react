import Pagination from "./Pagination";
import ProductCards from "./ProductCards";

const ProductList = ({ productsData, page, totalPages, onPageChange }) => {
  return (
    <>
    <section className="card-container w-fit mx-auto  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {productsData?.map((product) => {
        return <ProductCards key={product?.productId
        } product={product} />;
      })}
  
    </section>
    <Pagination
    onPageChange={onPageChange}
    totalPages={totalPages}
    page={page}
  />
    </>
  );
};

export default ProductList;
