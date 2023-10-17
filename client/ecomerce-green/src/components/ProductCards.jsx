import { useDispatch, useSelector } from "react-redux";
import {  incrementProduct } from '../redux/store/product/productSlice';

const ProductCards = ({product}) => {
  const dispatch = useDispatch();


  // console.log(cart)
  const {name, price, technical_specifications, images,
    calification_energy} = product
  return (
       <div className="product-card flex-column w-[288px] mt-20 divide-y divide-gray-950">
        <img src={images.cover} alt="" className="object-cover"/>
        <div className="description flex place-content-between items-center pb-3">
          <div>
        <p className="text-xl font-semibold mt-4">{name}</p>
        <p className="text-lg font-light">{technical_specifications}</p>
        </div>
        <span className="energy-label a-tag flex items-center justify-center">
          <p className="text-white text-3xl font-extrabold text-center">{calification_energy}</p></span>
        </div>
        <div className="flex place-content-between items-center pt-3">
        <p className="text-3xl font-extrabold">${price}</p>
        <img src="/CartIcon.svg" alt="" className="w-12 cursor-pointer"   
        onClick={() => {
            dispatch(incrementProduct(product));
          }} />
        </div>
    </div>

  )
}

export default ProductCards