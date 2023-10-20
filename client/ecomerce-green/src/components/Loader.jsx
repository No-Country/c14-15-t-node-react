import React from "react";
import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <img className="text-green-950" src={loader} alt="loading" />
      Cargando...
    </div>
  );
};

export default Loader;