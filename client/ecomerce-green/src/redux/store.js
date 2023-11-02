import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './store/product/productSlice'
import ProductFilterReducer from './store/productFilter/productFilterSlice'
import ProductidReducer from './store/productid/productidSlice'
import CartReducer from './store/cart/cartSlice'
import AuthReducerV  from './store/authv/authSlicev';


export const store = configureStore({
  reducer: {
 
    authv: AuthReducerV,
    cart: CartReducer,
    products: ProductReducer,
    productsfilter: ProductFilterReducer,
    product: ProductidReducer,
        
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  })
});





