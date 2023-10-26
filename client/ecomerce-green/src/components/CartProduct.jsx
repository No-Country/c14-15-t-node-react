import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
} from "../redux/store/cart/cartSlice";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../styles/cart.css";

const CartProduct = () => {
  
  const dispatch = useDispatch();
  
  const { cart } = useSelector((state) => state.cart);

  return (
    cart.map(item => (
      <div className="cart-product">
      <img
        src={item.images.cover}
        alt=""
        className="object-cover w-24 rounded-l"
      />
      <div className="cart-details ">
        <div className="product-details">
          <p className="capitalize font-semibold">{item.category.brand_name}</p>
          <p>${item.price*item.quantity}</p>
          <AiOutlineDelete size={15} className="cursor-pointer" />
        </div>
        <p>Vertex N 610W</p>
        <div className="cart-counter">
          <button onClick={() => {dispatch(decrementProduct(item));} }>
            <AiOutlineMinus size={15} />
          </button>
          <span className="cart-quantity">{item.quantity}</span>
          <button onClick={() => {dispatch(incrementProduct(item));} }>
            <AiOutlinePlus size={15}  />
          </button>
        </div>
      </div>
    </div>
    ))
    
  );
};

export default CartProduct;
