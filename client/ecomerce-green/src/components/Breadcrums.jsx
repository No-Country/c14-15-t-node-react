import React from "react";
import Category from "../pages/Category";
import { Link } from 'react-router-dom';

const Breadcrums = ({ category }) => {
  return (
    <nav className="">
      <ul className=" max-w-5xl mx-auto list-reset flex text-lg text-black font-semibold cursor-pointer">
        
          <li className="ml-3 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
          <Link to="/products">
   
      Producto &gt;
  
  </Link>
        </li>
        <li className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-60">
          <span className="mx-2 text-neutral-500 dark:text-neutral-400"></span>
        </li>
        <li>
          <Link to={`/category/${category}`}>
            Categoria &gt;
          </Link>
          
         
        </li>
        <li>
          <span className="mx-2 text-green-900 dark:text-neutral-400"></span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">{category}</li>
      </ul>
    </nav>
  );
};

export default Breadcrums;
