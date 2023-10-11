import React from "react";

import { AiOutlineDown } from "react-icons/ai";

const ProductFilters = () => {
  return (
    <section className="dropdown-container">
        <div className="container-drop">
      <div className="dropdown">
        <button className="dropbtn">Ordenar <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Precio <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Categoría <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Marca <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Etiqueta energetica <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">6 <AiOutlineDown className="icon-dropdown"/></button>
        <div className="dropdown-content">
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProductFilters;
