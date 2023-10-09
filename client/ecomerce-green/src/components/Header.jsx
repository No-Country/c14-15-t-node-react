import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from '../assets/logo.svg'
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="header fixed w-[100vw] z-[2] text-white rounded-b-lg border-b-2 border-white ">
      <div className="flex justify-between items-center h-24 max-w-[1240px]  px-7 mx-auto">
      
    <div className=" flex gap-2 ">
    <img src={logo}></img>
    <h1 >GreenIX</h1>
    </div>
       
        {/* Navbar destock */}
        <nav className=" hidden md:flex gap-3 p-6 ">
          <ul className=" flex  gap-2 p-6 ">
            <li>Home</li>
            <li>Tienda</li>
            <li>Contacto</li>
          </ul>
          <div className="flex g-2 items-center border rounded-xl h-10 px-3 mt-4 bg-slate-50">
            <input className="border-none text-black bg-slate-50 focus:border-none active:border-none w-full" placeholder="Buscador"  type="text" />
            <AiOutlineSearch className="text-gray-800" />
          </div>
        </nav>
        <div className="hidden md:flex">
          <ul className="flex g-1">
            <li className="pr-4">Log in</li>
            <li className="pr-4">
              <VscAccount size={20} />
            </li>
            <li>
              {" "}
              <AiOutlineShoppingCart size={20} />
            </li>
          </ul>
        </div>
    
        
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        
        {/* Navbar mobile */}

        <nav
          className={
            nav
              ? "bg-gray-500 fixed z-[4] left-0 top-0 w-[60%] h-full border-r-gray-900 uppercase ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className=" w-full text-3xl uppercase m-4">logo</h1>
          {/* <div className="p-4 border-b border-r-gray-600  pt-[7rem]">
          <div className="flex g-2 border-r-gray-200 border w-[14rem] px-2 py-1">
            <input
              className="border-r-gray-200 border-none  w-[80%]"
              type="text"
            />
            <AiOutlineSearch size={20} />
          </div>
        </div> */}
          <div className="p-4 border-b border-r-gray-600">Ingresar</div>
          <ul className="">
            <li className="p-4 border-b border-r-gray-600">Home</li>
            <li className="p-4 border-b border-r-gray-600">Tienda</li>
            <li className="p-4 border-b border-r-gray-600">Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
