import "./featuredProduct.css";
import ImgFeaturedProduct from "./imgFeaturedProduct/ImgFeaturedProduct";
import TextFeaturedProduct from "./textFeaturedProduct/TextFeaturedProduct";

const FeaturedProduct = () => {
  return (
    <section className="featuredProduct">
      <div className="featuredProduct__container">
        <h2 className="featuredProduct__title">
          ¡Bienvenido al Futuro Verde de la Tecnología!
        </h2>
        <div className="featuredProduct__content">
          <TextFeaturedProduct />
          <div className="featuredProduct__content-diviser"></div>
          <ImgFeaturedProduct />
        </div>
      </div>
    </section>
  );
};
export default FeaturedProduct;
