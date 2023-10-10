import React from 'react'
import Footer from '../components/Footer'
import  Header  from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/featuredProduct/FeaturedProduct'
import HeroStore from '../components/HeroStore'
import ProductFilters from '../components/ProductFilters'
import  Marks  from '../components/Marks'



const Home = () => {

  const images = [
    '/img/jks.png',
    '/img/longi.png',
    '/img/trina.jpg',
    // Agrega más URLs de imágenes según sea necesario
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));

  return (
    <>
        <Header />
        <Hero />
        <FeaturedProduct />
        {/* <HeroStore />
        <ProductFilters /> */}
        <Marks images={images} speed={5000}/>
        <Footer />

    </>
  )
}

export default Home

