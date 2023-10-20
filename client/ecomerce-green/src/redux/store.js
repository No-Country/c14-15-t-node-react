import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './store/product/productSlice'
import CartReducer from './store/cart/cartSlice'
import AuthReducer  from './store/auth/authSlice';


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
    products: ProductReducer,
        
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  })
});





