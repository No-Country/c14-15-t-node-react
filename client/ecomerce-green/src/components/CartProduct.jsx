import React from 'react'
// import { useDispatch } from 'react-redux';
// import {  incrementProduct, decrementProduct } from '../redux/store/cart/cartSlice';
import {AiOutlineDelete} from "react-icons/ai";
import "../styles/cart.css";


const CartProduct = () => {
  // const dispatch = useDispatch();
  // const {name, price, technical_specifications, images} = product
  return (
    <div className="cart-product">
      <img src="/ProductImg.png" alt="" className="object-cover w-24"/>
      <div className="cart-details flex-col flex-wrap">
      <div className="flex place-content-between">
        <p className="capitalize">Trina Solar</p>
        <p>$101.864</p>
        <li className="cursor-pointer"><AiOutlineDelete size={15}/></li>
      </div>
      <p>Vertex N 610W</p>
      <div>
        <button >-</button>
        <span>1</span>
        <button>+</button>
        </div>
      </div>


      {/* <img src={images.cover} alt="" className="object-cover"/>
      <ul>
        <li>{name}</li>
        <li>{price}</li>
        <li className="cursor-pointer"><AiOutlineDelete size={15}/></li>
      </ul>
      <p>{technical_specifications}</p>
      <div>
        <button onClick={dispatch(decrementProduct(product))}>-</button>
        <span></span>
        <button onClick={dispatch(incrementProduct(product))}>+</button>
      </div> */}
    </div>
  )
}

export default CartProduct