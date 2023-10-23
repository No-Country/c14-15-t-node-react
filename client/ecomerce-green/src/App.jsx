
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import { Login } from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/ProductDetail';
import Products from './pages/Products';
import DynamicTitlePage from './pages/DynamicTitlePage';
import UserRegister from './pages/UserRegister';
import PrivateRoute from './PrivateRoute/PrivateRoute';



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
        <Route path='' element={<PrivateRoute />}>

        </Route>
      </Routes>
    </Router>

  )
}

export default App


