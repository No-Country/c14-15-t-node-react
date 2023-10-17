import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './store/product/productSlice'
import CartReducer from './store/cart/cartSlice'


export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer

  },
});
