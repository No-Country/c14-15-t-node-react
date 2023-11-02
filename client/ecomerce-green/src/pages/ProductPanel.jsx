
import MainLayout from "../components/MainLayout";
import ProductTable from "../components/ProductTable";

const ProductPanel = () => {
  return (
    <MainLayout>
      <main className="bg-[#051C12]  pt-[5.5rem] pb-[1rem]">
        {" "}
        {/* <div className="text-center">
          
          <h1 className="font-bold text-3xl mb-4"> Panel de productos</h1>
        
        </div> */}
       
        <ProductTable />
        {/* <!-- End block --> */}

      </main>
    </MainLayout>
  );
};

export default ProductPanel;
