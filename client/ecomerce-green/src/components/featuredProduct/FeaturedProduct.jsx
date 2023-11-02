import "../../styles/featuredProduct.css";
import ImgFeaturedProduct from "./ImgFeaturedProduct";
import TextFeaturedProduct from "./TextFeaturedProduct";

const FeaturedProduct = () => {
  return (
    <section className="text-[#B0FC90] py-6 px-3 bg-[#051C12] w-full my-0 mx-auto md:py-10 md:px-16 lg:py-12 lg:px-32">
      <div className="flex flex-col justify-center items-center">
        <h2 className="featuredProduct__title text-center text-[32px] font-extrabold lg:text-[44px]">
          ¡Bienvenido al Futuro Verde de la Tecnología!
        </h2>
        <div className="mt-8 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:mt-8 lg:mt-[60px] lg:min-w-[944px] lg:justify-between lg:items-center">
          <TextFeaturedProduct />
          <div className="h-auto border-2 border-solid bg-[#ffffffa1] w-full md:w-auto md:h-[324px] lg:h-[360px] "></div>
          <ImgFeaturedProduct />
        </div>
      </div>
    </section>
  );
};
export default FeaturedProduct;
