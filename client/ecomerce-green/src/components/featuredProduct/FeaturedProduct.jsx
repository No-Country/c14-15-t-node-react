import "./featuredProduct.css";
import ImgFeaturedProduct from "./imgFeaturedProduct/ImgFeaturedProduct";
import TextFeaturedProduct from "./textFeaturedProduct/TextFeaturedProduct";

const FeaturedProduct = () => {
  const featured = `text-[#B0FC90] py-5 px-3 bg-[#051C12] w-full`
  return (
    // <section className="featuredProduct">
          <section className={`featuredProduct ${featured}`}>
      <div className="featuredProduct__container flex flex-col justify-center items-center">
        <h2 className="featuredProduct__title">
          ¡Bienvenido al Futuro Verde de la Tecnología!
        </h2>
        <div className="featuredProduct__content pb-5">
          <TextFeaturedProduct />
          <div className="featuredProduct__content-diviser h-auto border-2 border-solid bg-gray-300/60 w-full md:w-auto md:h-[20rem] xl:h-[23rem]" ></div>
          <ImgFeaturedProduct />
        </div>
      </div>
    </section>
  );
};
export default FeaturedProduct;
