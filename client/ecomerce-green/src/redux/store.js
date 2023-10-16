import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './store/product/productSlice'


export const store = configureStore({
  reducer: {
    products: ProductReducer,

  },
});
