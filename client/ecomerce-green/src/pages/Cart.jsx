import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../components/MainLayout";
import CartProduct from "../components/CartProduct";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownToggle = () => {
    setDropdown(!dropdown);

  };

  const handleClickOutside = (event) => {
    if (
      event.target !== cartRef.current &&
      !cartRef.current.contains(event.target)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cartRef = useRef(null);

  return (
    <>
      <button onClick={dropdownToggle}>
        {" "}
        <AiOutlineShoppingCart size={20} />
        
      </button>
      {dropdown && (
        <section ref={cartRef} className="cart"  >
          <h1 className="cart-title">Carrito de compras</h1>
          <div className="cart-subtitle flex place-content-between">
            <p>Producto</p>
            
            <p>Subtotal</p>
          </div>
          <CartProduct />
          <ul className="cart-total inline-flex place-content-between ">
            <li>Total</li>
            <li>123678</li>
          </ul>
          <Link to="/checkout">
            <button className="shopBtn">Finalizar Compra</button>
          </Link>
        </section>
      )}
    </>
  );
};

export default Cart;
