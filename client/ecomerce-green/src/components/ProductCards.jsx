import { useDispatch } from "react-redux";
// import { incrementProduct, updateTotal, addToCart } from "../redux/store/cart/cartSlice";
import { addToCart } from "../redux/store/cart/cartSlice"
import CartIcon from "../assets/CartIcon.svg";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  const dispatch = useDispatch();
 
  const { name, price, images, category, energy_efficiency } = product;

  // const handleIncrement = (product) => {
  //   dispatch(incrementProduct(product));
  //   dispatch(updateTotal()); // Actualiza el total después de incrementar
  // }

  const addProduct = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="product-card flex-column w-72  divide-y duration-500 hover:scale-105  divide-gray-950">
      <Link to={`/products/${product.productId}`}>
        <img src={images.cover} alt="" className="h-80 w-72 object-cover" />
        <div className="description flex place-content-between items-center pb-3">
          <div>
            <p className="text-xl font-semibold mt-4">{category.brand_name}</p>
            <p className="text-lg font-light">{name} </p>
          </div>
          <span className="energy-label a-tag flex items-center justify-center">
            <p className="text-white text-3xl font-extrabold text-center">
              {energy_efficiency}
            </p>
          </span>
        </div>
      </Link>
      <div className="flex place-content-between items-center pt-3">
        <p className="text-3xl font-extrabold">${price}</p>
        <img
          src={CartIcon}
          alt=""
          className="w-12 cursor-pointer"
          onClick={() => {
            dispatch(addProduct(product));
          }}
        />
      </div>
    </div>
  );
};

export default ProductCards;