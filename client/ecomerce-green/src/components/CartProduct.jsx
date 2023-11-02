import { useSelector, useDispatch } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
  removeFromCart,
} from "../redux/store/cart/cartSlice";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "../styles/Cart.css";

const CartProduct = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product));
  }

  return cart.map((item) => (
    <div className="cart-product" key={item.productId}>
      <img
        src={item.images.cover}
        alt=""
        className="object-cover w-24 h-24 rounded-l"
      />
      <div className="cart-details ">
        <div className="product-details">
          <p className="capitalize font-semibold">{item.category.brand_name}</p>
          <p>${item.price * item.quantity}</p>
          <button onClick={() => {removeProductHandler(item)}}>
          <AiOutlineDelete size={15} className="cursor-pointer" />
          </button>
        </div>
        <p>Vertex N 610W</p>
        <div className="cart-counter">
          <button
            onClick={() => {
              dispatch(decrementProduct(item));
            }}
          >
            <AiOutlineMinus size={15} />
          </button>
          <span className="cart-quantity">{item.quantity}</span>
          <button
            onClick={() => {
              dispatch(incrementProduct(item));
            }}
          >
            <AiOutlinePlus size={15} />
          </button>
        </div>
      </div>
    </div>
  ));
};

export default CartProduct;
