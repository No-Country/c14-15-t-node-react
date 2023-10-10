import React from "react";
import Cards from "./Cards";

const Hero = () => {

  const hero = `w-[100vw] relative min-h-screen bg-hero-pattern bg-cover flex items-center justify-center before:absolute before:content-[''] text-white`
  return (

     // <section className="Hero flex-col">
    // <section className={`&${hero} Hero`}>
    <section className={`&${hero} Hero`}>

      <div className="section-hero">
        <h1 className="titulo-hero">¡Bienvenido al Futuro Verde de la Tecnología!</h1>
        <p className="p-hero">
          Únete a la revolución verde de la tecnología. ¡Visita nuestra tienda y
          descubre un mundo de posibilidades sostenibles!
        </p>
        <button className="btn-hero">Productos</button>
      </div>
      <Cards />
    </section>
    

  );
};

export default Hero;
