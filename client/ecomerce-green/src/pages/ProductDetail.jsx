import { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import ProductSelected from "../components/ProductSelected";
import { useParams } from "react-router-dom";
import HeroStore from "../components/HeroStore";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/store/productid/productAction";
import PageNotFound from "./PageNotFound";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  console.log("este es la data", product);
  const isEmptyObject = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };

  const goTo404 = () => {
    history("/*");
  };
  return (
    <MainLayout>
      <HeroStore />
      {isEmptyObject(product) ? (
        goTo404()
      ) : (
        <main>
          <ProductSelected product={product} id={id} />
        </main>
      )}
    </MainLayout>
  );
};

export default Product;
