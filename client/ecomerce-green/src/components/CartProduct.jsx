import React from "react";
// import { useDispatch } from 'react-redux';
// import {  incrementProduct, decrementProduct } from '../redux/store/cart/cartSlice';
import { AiOutlineDelete } from "react-icons/ai";
import "../styles/cart.css";

const CartProduct = () => {
  // const dispatch = useDispatch();
  // const {name, price, technical_specifications, images} = product
  return (
    <div className="cart-product">
      <img
        src="/ProductImg.png"
        alt=""
        className="object-cover w-24 rounded-l"
      />
      <div className="cart-details ">
        <div className="product-details">
          <p className="capitalize font-semibold">Trina Solar</p>
          <p>$101.864</p>
          <AiOutlineDelete size={15} className="cursor-pointer" />
        </div>
        <p>Vertex N 610W</p>
        <div className="cart-counter">
          <button> —</button>
          <span className="cart-quantity">1</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <rect
                x="0.842041"
                y="5"
                width="12"
                height="2"
                rx="1"
                fill="white"
              />
              <rect
                x="7.84204"
                width="12"
                height="2"
                rx="1"
                transform="rotate(90 7.84204 0)"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

   
    </div>
  );
};

export default CartProduct;
