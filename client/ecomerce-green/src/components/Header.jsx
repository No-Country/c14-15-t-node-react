import React, { useEffect, useState } from "react";
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

import { logout, verifyJwt } from "../redux/store/authv/authActions";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);

  const { userToken, user } = useSelector((state) => state.authv);

  const dispatch = useDispatch();
console.log(user)
  const [open, setOpen] = useState(false);

  const [nav, setNav] = useState(false);
  const headerShadow = useHeaderShadow();
  const handleNav = () => {
    setNav(!nav);
  };
  // Verificar Token
  useEffect(() => {
    if (!userToken) return;
    dispatch(verifyJwt(userToken));
   
  }, [userToken]);
  return (
    <>
      <header
        className={`w-[100vw] fixed z-[3] ${headerShadow} rounded-b-lg border-b-2 border-white `}
      >
        <div className="flex sm:z-[3] justify-between items-center h-24 max-w-[1240px]  px-7 mx-auto ">
          <NavLink to="/">
            <div className=" flex gap-2  text-xl hover:font-extrabold">
              <img src={logo}></img>
              <h1>GreenIX</h1>
            </div>
          </NavLink>

          {/* Navbar destock */}
          <nav className=" hidden md:flex gap-5 p-3 z-[5]">
            <ul className=" flex  text-lg text-white gap-3 p-6 tracking-wider ">
              <li className="hover:font-extrabold ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:font-extrabold">
                <NavLink to="/products">Tienda</NavLink>
              </li>
              <li className="hover:font-extrabold">
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </ul>
          
          </nav>
          <div className="hidden md:flex">
            <ul className="flex g-1 text-lg">
              {userToken ? (
                <li
                  className="pr-4 flex justify-center cursor-pointer items-center hover:font-extrabold"
                  onClick={() => dispatch(logout())}
                >
                  {" "}
                  Log out
                </li>
              ) : (
                <li className="pr-4 flex justify-center items-center hover:font-extrabold">
                  {" "}
                  <Link to="/login">Log in</Link>
                </li>
              )}
              <li className="pr-4 flex justify-center items-center ">
                <Link to="/login">
                  <VscAccount size={20} />
                </Link>
              </li>
              <li className="flex justify-center items-center mt-[-0.7rem]">
                <div className="relative  hover:font-extrabold ">
                  <div className="t-0 absolute left-3">
                    <p
                      className={`${
                        cart.length > 0 ? "flex" : "hidden"
                      } h-2 w-2  hover:font-extrabold items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white`}
                    >
                      {cart?.length}
                    </p>
                  </div>
                  <button onClick={() => setOpen(true)}>
                    {" "}
                    <AiOutlineShoppingCart
                      size={20}
                      className="file: mt-4 h-6 w-6"
                    />
                  </button>
                  <Cart open={open} setOpen={setOpen} />
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
          {userToken ? (
            <li
              className="pr-4 flex justify-center items-center"
              onClick={() => dispatch(logout())}
            > <div className="ml-2">
            <Link to="/login">
              <VscAccount size={20} />{" "}
            </Link>
          </div>
              {" "}
              <p className="ml-2">  Log out </p> 
            </li>
          ) : (
            <li className=" flex pr-4 items-center">
              <div className="ml-2">
                <Link to="/login">
                  <VscAccount size={20} />{" "}
                </Link>
              </div>
              <Link to="/login">
                <p className="ml-2">Log in</p>
              </Link>
            </li>
          )}

          <button onClick={() => setOpen(true)}>
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