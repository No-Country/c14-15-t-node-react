import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/ProductDetail';
import Products from './pages/Products';
import DynamicTitlePage from './pages/DynamicTitlePage';
import UserRegister from './pages/UserRegister';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/register" element={<UserRegister />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/dinamic" element={<DynamicTitlePage />} />
      </Routes>
    </Router>

  )
}

export default App


