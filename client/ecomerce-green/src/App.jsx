import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';
import Cards from './components/Cards';
import ProductCards from './components/ProductCards/ProductCards';

const App = () => {
  return (
    <div >
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>

    <ProductCards/>
    </div>
  )
}

export default App

