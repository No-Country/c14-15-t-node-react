import Hero from "../components/Hero";
import FeaturedProduct from "../components/featuredProduct/FeaturedProduct";
import Marks from "../components/Marks";
import MainLayout from "../components/MainLayout";

const Home = () => {

 
  const images = [
    "/img/jks.png",
    "/img/longi.png",
    "/img/trina.jpg",
    "/img/jks.png",
    "/img/longi.png",
    "/img/trina.jpg",
    "/img/jks.png",
    "/img/longi.png",
    "/img/trina.jpg",
    // Agrega más URLs de imágenes según sea necesario
  ].map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

  return (
    <>
      <MainLayout>
        <main>
          <Hero />
          <Marks images={images} speed={5000} />
          <FeaturedProduct />
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
