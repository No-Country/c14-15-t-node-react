// import { useEffect } from "react";
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   useLocation,
// } from "react-router-dom";
// import Home from "../pages/Home";
// import Cart from "../pages/Cart";
// import { Login } from "../pages/Login";
// import UserRegister from "../pages/UserRegister";
// import ProductPanel from "../pages/ProductPanel";
// import Products from "../pages/Products";
// import Product from "../pages/ProductDetail";
// import DynamicTitlePage from "../pages/DynamicTitlePage";
// import { Contacto } from "../pages/Contacto";
// import CheckoutPage from "../pages/Checkout";
// import PageNotFound from "../pages/PageNotFound";
// import PrivateRoute from "./PrivateRoute";
// import PurchaseSumary from "../pages/PurchaseSumary";

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return null;
// };
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
  
//     <Route>
//       <Route path="/" element={<Home />}>
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<UserRegister />} />
//         <Route path="/dashboard/product" element={<ProductPanel />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<Product />} />
//         <Route path="/dinamic" element={<DynamicTitlePage />} />
//         <Route path="/contacto" element={<Contacto />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/404" element={<PageNotFound />} />
//         <Route path="" element={<PrivateRoute />}>
//           <Route path="/sumary" element={<PurchaseSumary />} />
//         </Route>
//       </Route>
//     </Route>
//     </>
//   )
// );

// export default router;
