import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/ProductDetail';
import Products from './pages/Products';
import DynamicTitlePage from './pages/DynamicTitlePage';
import UserRegister from './pages/UserRegister';
// import { LoginPrueba } from './pages/LoginPrueba';
import { Contacto } from "./pages/Contacto";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PurchaseSumary from './pages/PurchaseSumary';
import { useLocation } from "react-router-dom";
import ProductPanel from './pages/ProductPanel';




const App = () => {
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<UserRegister />} />
        <Route exact path="/dashboard/product" element={<ProductPanel />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/dinamic" element={<DynamicTitlePage />} />
        <Route exact path="/contacto" element={<Contacto />}/>
        <Route exact path="/sumary" element={<PurchaseSumary />} />
        <Route path='' element={<PrivateRoute />}>
        </Route>
      </Routes>
    </Router>

  )
}

export default App


