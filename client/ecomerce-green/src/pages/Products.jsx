import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";
import ProductCards from "../components/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/store/product/productAction";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";

const Products = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    dispatch(fetchProducts(currentPage)); 
  }, [dispatch, currentPage]);


  useEffect(() => {
    setProductsData(products.products); // Actualizar el estado cuando cambian los productos
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
   const onPageChange = (newPage) => {
    // Update the current page and trigger a fetch for the new page
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <main>
        <HeroStore />
        <ProductFilters orderProduct={orderProduct} />

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
