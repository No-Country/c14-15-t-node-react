import  { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/store/product/productAction";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";

const Products = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState([]);
  const [productsData1, setProductsData1] = useState([]);
  const [productsData2, setProductsData2] = useState([]);
  const [productsData3, setProductsData3] = useState([]);

 


  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    dispatch(fetchProducts(currentPage)); 
  }, [dispatch, currentPage]);
 

  useEffect(() => {
    setProductsData(products.products); // Actualizar el estado cuando cambian los productos
  }, [products.products]);
  useEffect(() => {
    setProductsData1(products.products); // Actualizar el estado cuando cambian los productos
  }, [products.products]);
  useEffect(() => {
    setProductsData2(products.products); // Actualizar el estado cuando cambian los productos
  }, [products.products]);
  useEffect(() => {
    setProductsData3(products.products); // Actualizar el estado cuando cambian los productos
  }, [products.products]);

  


  const orderProduct = (string) => {
    if (string === "lowerPrice") {
      const sortedProducts = [...productsData]; // Clona el arreglo
      sortedProducts.sort((producto1, producto2) => {
        return producto1.price - producto2.price;
      });
      setProductsData(sortedProducts); // Actualiza el estado para reflejar los productos ordenados
    }
    if (string === "higherPrice") {
      const sortedProducts = [...productsData]; // Clona el arreglo
      sortedProducts.sort((producto1, producto2) => {
        return producto2.price - producto1.price; // Ordenar de mayor a menor
      });
      setProductsData(sortedProducts); // Actualiza el estado para reflejar los productos ordenados
    }
    if (string === "name") {
      const sortedProducts = [...productsData];
      sortedProducts.sort((producto1, producto2) => {
        return producto1.name.localeCompare(producto2.name); // Ordenar alfabéticamente por nombre
      });
      setProductsData(sortedProducts);
    }
    // return productsData
  }; 


  const motorolaFilter = (string) => {


    if (string === "Motorola") {
      let Products = [...productsData3]; // Clona el arreglo
    let filtro = Products.filter((product) => {
       if (product.category.brand_name == 'Motorola') {
        console.log(product.category.brand_name)
        return product;
       }
       
      });
      setProductsData(filtro); // Actualiza el estado para reflejar los productos ordenados
    }



    
  }

// .....................................................................................................................................................................................

const nokiaFilter = (string) => {

  if (string === "Nokia") {
    let Products1 = [...productsData1]; // Clona el arreglo
    let filtro = Products1.filter((product) => {
     if (product.category.brand_name == 'Nokia') {
      console.log(product.category.brand_name)
      return product;
     }
     
    });
    setProductsData(filtro); // Actualiza el estado para reflejar los productos ordenados
  }

  // return productsData
}; 

// .....................................................................................................................................................................................

const huaweiFilter = (string) => {

  if (string === "Huawei") {
    let Products2 = [...productsData2]; // Clona el arreglo
    let filtro = Products2.filter((product) => {
     if (product.category.brand_name == 'Huawei') {
      console.log(product.category.brand_name)
      return product;
     }
     
    });
    setProductsData(filtro); // Actualiza el estado para reflejar los productos ordenados
  }
  // return productsData
}; 
// .....................................................................................................................................................................................



   const onPageChange = (newPage) => {
    // Update the current page and trigger a fetch for the new page
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }
// console.log(products.products[0].category)
  return (
    <MainLayout>
      <main>
        <HeroStore />
        <ProductFilters orderProduct={orderProduct}  motorolaFilter={motorolaFilter} nokiaFilter={nokiaFilter} huaweiFilter={huaweiFilter} />

        {isLoading ? <Loader /> : <ProductList 
        totalPages={products.totalPages}
        onPageChange={onPageChange}
        page ={products.page} 
        productsData={productsData}  />}
      </main>
    </MainLayout>
  );
};


export default Products;
