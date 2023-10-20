import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './store/product/productSlice'
import CartReducer from './store/cart/cartSlice'
import AuthReducer  from './store/auth/authSlice';
import AuthReducerV  from './store/authv/authSlicev';


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    authv: AuthReducerV,
    cart: CartReducer,
    products: ProductReducer,
        
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  })
});





