import React from "react";

import { AiOutlineDown } from "react-icons/ai";

const ProductFilters = () => {
  return (
    <section className="dropdown-container">
        <div className="container-drop">
      <div class="dropdown">
        <button class="dropbtn">Ordenar <AiOutlineDown className="icon-dropdown"/></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Precio <AiOutlineDown className="icon-dropdown"/></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Categoría <AiOutlineDown className="icon-dropdown"/></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Marca <AiOutlineDown className="icon-dropdown"/></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Etiqueta energetica <AiOutlineDown className="icon-dropdown"/></button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">6 <AiOutlineDown className="icon-dropdown"/></button>
        <div class="dropdown-content">
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
