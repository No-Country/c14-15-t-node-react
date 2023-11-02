import { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import ProductSelected from "../components/ProductSelected";
import { useParams } from "react-router-dom";
import HeroStore from "../components/HeroStore";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/store/productid/productAction";
import PageNotFound from "./PageNotFound";
import { useNavigate } from "react-router-dom";
import Error404 from "../components/Error404";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  console.log("este es la data", product);

  // const goTo404 = () => {
  //   navigate("/*");
  // };
  const isEmptyObject = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    // goTo404()
    return true;
  };


  return (
    <MainLayout>
      <HeroStore />
      {isEmptyObject(product) ? (
 <Error404 />
      ) : (
        <main>
          <ProductSelected product={product} id={id} />
        </main>
      )}
    </MainLayout>
  );
};

export default Product;
