import { useDispatch, useSelector } from "react-redux";
import {  incrementProduct } from '../redux/store/cart/cartSlice';
import CartIcon from '../assets/CartIcon.svg'

const ProductCards = ({product}) => {
  const dispatch = useDispatch();

  const {name, price,  images, category,
    energy_efficiency } = product
  return (
       <div className="product-card flex-column w-[288px] mt-20 divide-y divide-gray-950">
        <img src={images.cover} alt="" className="object-cover"/>
        <div className="description flex place-content-between items-center pb-3">
          <div>
        <p className="text-xl font-semibold mt-4">{category.brand_name}</p>
        <p className="text-lg font-light">{name} s</p>
        </div>
        <span className="energy-label a-tag flex items-center justify-center">
          <p className="text-white text-3xl font-extrabold text-center">{energy_efficiency}</p></span>
        </div>
        <div className="flex place-content-between items-center pt-3">
        <p className="text-3xl font-extrabold">${price}</p>
        <img src={CartIcon} alt="" className="w-12 cursor-pointer"   
        onClick={() => {
          dispatch(incrementProduct(product));
        }} />
        </div>
    </div>
  )
}

export default ProductCards