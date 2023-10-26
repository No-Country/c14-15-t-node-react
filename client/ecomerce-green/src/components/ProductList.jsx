import Pagination from "./Pagination";
import ProductCards from "./ProductCards";


const ProductList = ({ productsData, page, totalPages, onPageChange }) => {
  
  return (
    <section className="card-container py-10 flex flex-col justify-center items-center w-screen min-w-min gap-10 flex-wrap md:flex-row">
      {productsData?.map((product) => {
        return <ProductCards key={product?._id} product={product} />;
      })}
      <Pagination
        onPageChange={onPageChange}
        totalPages={totalPages}
        page={page}
      />
    </section>
  );
};

export default ProductList;
