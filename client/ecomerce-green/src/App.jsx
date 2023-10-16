import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import DynamicTitlePage from './pages/DynamicTitlePage';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>

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
    </Provider>
  )
}

export default App


