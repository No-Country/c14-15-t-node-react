import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "../assets/logo.svg";
import { VscAccount } from "react-icons/vsc";
import useHeaderShadow from "../hooks/useHeaderShadow";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Cart from "../pages/Cart";

import { logout } from "../redux/store/authv/authActions";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart.length);
  const { isAuthenticated } = useSelector((state) => state.authv);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [nav, setNav] = useState(false);
  const headerShadow = useHeaderShadow();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <header
        className={`w-[100vw] fixed z-[3] ${headerShadow} rounded-b-lg border-b-2 border-white `}
      >
        <div className="flex sm:z-[3] justify-between items-center h-24 max-w-[1240px]  px-7 mx-auto">
          <NavLink to="/">
            <div className=" flex gap-2 ">
              <img src={logo}></img>
              <h1>GreenIX</h1>
            </div>
          </NavLink>

          {/* Navbar destock */}
          <nav className=" hidden md:flex gap-3 p-6 ">
            <ul className=" flex  gap-2 p-6 ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Tienda</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </ul>
            <div className="flex g-2 items-center border rounded-xl h-10 px-3 mt-4 bg-slate-50">
              <input
                className="border-none text-black bg-slate-50 focus:border-none active:border-none w-full"
                placeholder="Buscador"
                type="text"
              />
              <AiOutlineSearch className="text-gray-800" />
            </div>
          </nav>
          <div className="hidden md:flex">
            <ul className="flex g-1">
              {isAuthenticated ? (
                <li
                  className="pr-4 flex justify-center items-center"
                  onClick={() => dispatch(logout())}
                >
                  {" "}
                  Log out
                </li>
              ) : (
                <li className="pr-4 flex justify-center items-center">
                  {" "}
                  <Link to="/login">Log in</Link>
                </li>
              )}
              <li className="pr-4 flex justify-center items-center">
                <VscAccount size={20} />
              </li>
              <li className="flex justify-center items-center mt-[-0.7rem]">
                <div className="relative ">
                  <div className="t-0 absolute left-3">
                    <p
                      className={`${
                        cart.length > 0 ? "flex" : "hidden"
                      } h-2 w-2  items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white`}
                    >
                      {cart?.length}
                    </p>
                  </div>
                  <button onClick = {() => setOpen(true)}>{" "}
                  <AiOutlineShoppingCart
                    size={20}
                    className="file: mt-4 h-6 w-6"
                  />
                  </button>
                  <Cart open={open}
                setOpen={setOpen}
                />
                </div>

                
              </li>
            </ul>
          </div>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </header>
      {/* Navbar mobile */}

      <nav
        className={
          nav
            ? "bg-green-950/95 fixed z-[2] text-white left-0 top-[10%] w-[100%] h-1/ border-r-gray-900 uppercase ease-in-out duration-500"
            : "fixed top-[-100%]"
        }
      >
        <div className="p-4 mt-5">
          {" "}
          <Link to="/login">Ingresar</Link>
        </div>
        <ul>
          <NavLink to="/">
            <li className="p-4"> Home</li>
          </NavLink>
          <NavLink to="/products">
            <li className="p-4"> Tienda</li>
          </NavLink>
          <NavLink to="/contacto">
            <li className="p-4"> Contacto</li>
          </NavLink>
          <li className="p-4">
            <div className="flex g-2 items-center border rounded-xl h-10 px-3 mt-1 bg-slate-50">
              <input
                className="border-none text-black bg-slate-50 focus:border-none active:border-none w-full"
                placeholder="Buscador"
                type="text"
              />
              <AiOutlineSearch className="text-gray-800" />
            </div>
          </li>
        </ul>
        <ul className="flex justify-between mx-2">
          <Link to="/login">
          <li className=" flex pr-4 items-center">
            <div className="ml-2">
              <VscAccount size={20} />{" "}
            </div>
            <a className="ml-2 ">Log in</a>
          </li>
          </Link>
          {/* <li>
            <Cart />
          </li> */}
         <button onClick = {() => setOpen(true)}>
          <li className="p-4 border-b border-r-gray-600">
            {" "}
            <AiOutlineShoppingCart size={25} />
          </li>
          </button> 
        </ul>
      </nav>
    </>
  );
};

export default Header;
