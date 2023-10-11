import React from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import ProductFilters from "../components/ProductFilters";
import ProductCards from "../components/ProductCards";

const Product = () => {
  return (
    <MainLayout>
      <main>
        <HeroStore />
        <ProductFilters />
        <ProductCards />
      </main>
    </MainLayout>
  );
};

export default Product;
