import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../src/pages/Home";
import Cart from "../src/pages/Cart";
import { Login } from "../src/pages/Login";
import UserRegister from "../src/pages/UserRegister";
import ProductPanel from "../src/pages/ProductPanel";
import Products from "../src/pages/Products";
import Product from "../src/pages/ProductDetail";
import DynamicTitlePage from "../src/pages/DynamicTitlePage";
import { Contacto } from "../src/pages/Contacto";
import CheckoutPage from "../src/pages/orders/Checkout";
import PageNotFound from "../src/pages/PageNotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SumarryOrder from "./pages/orders/SumarryOrder";
import Category from "../src/pages/Category";
import  PageConstruccion  from "../src/pages/PageConstruccion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/dashboard/product" element={<ProductPanel />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/construccion" element={<PageConstruccion />} />
        <Route path="/dinamic" element={<DynamicTitlePage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/orders" element={<SumarryOrder />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  </React.StrictMode>
);
