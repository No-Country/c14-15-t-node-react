import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';

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
    </div>
  )
}

export default App

