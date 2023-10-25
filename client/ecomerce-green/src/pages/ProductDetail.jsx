import React from "react";
import MainLayout from "../components/MainLayout";
import ProductSelected from "../components/ProductSelected";
import { useParams } from "react-router-dom";
import HeroStore from "../components/HeroStore";
const Product = () => {
  const {id}=useParams();
  console.log(id);
  return (
    <MainLayout>
    <HeroStore />
      <main>
        <ProductSelected id={id}/> 
      </main>
    </MainLayout>
  );
};

export default Product;
