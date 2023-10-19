import React from "react";
import Cards from "./Cards";
import  '../styles/Hero.css';
import { Link } from "react-router-dom";
const Hero = () => {

  const hero = `w-[100vw] relative min-h-screen bg-hero-pattern min-h-[120vh] bg-no-repeat bg-cover flex  items-center before:absolute before:content-[''] text-white`
  return (
    <section className={`& Hero`}>
    {/* <section className={`&${hero} Hero flex-col items-end pt-[7rem]`}> */}
      <div className="section-hero  ">
        <h1 className="titulo-hero pt-[7rem]">¡Bienvenido <br/> al Futuro Verde de la Tecnología!</h1>
        <p className="p-hero">
          Únete a la revolución verde de la tecnología. ¡Visita nuestra tienda y
          descubre un mundo de posibilidades sostenibles!
        </p>
        <button className="btn-hero mb-8"><Link to="/products">Productos</Link></button>
      </div>
      <Cards />
    </section>
  );
};

export default Hero;
