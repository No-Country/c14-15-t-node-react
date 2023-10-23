import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";
import ProductCards from "../components/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/store/product/productSlice";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { products, isLoading } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products); // Actualizar el estado cuando cambian los productos
  }, [products]);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <main>
        <HeroStore />
        <ProductFilters orderProduct={orderProduct} />

        {isLoading ? <Loader /> : <ProductList productsData={productsData} />}
      </main>
    </MainLayout>
  );
};

export default Products;
