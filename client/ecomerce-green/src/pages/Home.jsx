import React from 'react'
import  Header  from '../components/Header'
import Hero from '../components/Hero'
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
        <Marks images={images} speed={5000}/>
    </>
  )
}

export default Home

