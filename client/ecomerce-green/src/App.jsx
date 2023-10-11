import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import DynamicTitlePage from './pages/DynamicTitlePage';

const App = () => {
  return (
  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/dinamic" element={<DynamicTitlePage />} />
      </Routes>
    </Router>

  )
}

export default App


