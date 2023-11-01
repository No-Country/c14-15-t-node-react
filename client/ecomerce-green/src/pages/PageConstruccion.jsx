import React from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";
import { Link } from "react-router-dom";
import "../styles/Construccion.css";

const PageConstruccion = () => {
  return (
    <MainLayout>
      <main>
        <HeroStore />
        <div className="construccion flex flex-col justify-items-center items-center text-white w-full">
          <h1 className="text-5xl text-center font-semibold m-2 lg:w-1/2">Esta pagina todavía no se encuentra disponible</h1>
          <div className="w-72 m-3">
            <img src="/logo-construccion.png" alt="logo" />
          </div>
          <div className="m-3 flex flex-col md:flex-row">
            <Link to="/"><button className="bg-[#317D5B] construccion-btn">Home</button></Link>
            <Link to=""><button className="bg-[#F8924F] construccion-btn">Pagina previa</button></Link>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default PageConstruccion;
