import React from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";


const Product = () => {
  return (
    <MainLayout>
      <main>
        <HeroStore />
        <ProductFilters />
      
      </main>
    </MainLayout>
  );
};

export default Product;
