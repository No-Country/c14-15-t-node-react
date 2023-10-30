import { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import ProductSelected from "../components/ProductSelected";
import { useParams } from "react-router-dom";
import HeroStore from "../components/HeroStore";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/store/productid/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const {id}=useParams();

  useEffect(() => {
    dispatch(getProduct(id)); 
  }, [dispatch, id]);

  return (
    <MainLayout>
    <HeroStore />
      <main>
        <ProductSelected product={product} id={id}/> 
      </main>
    </MainLayout>
  );
};

export default Product;
