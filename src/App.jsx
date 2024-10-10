import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Products from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import NotFound from './components/NotFound'
import Dashboard from './components/Admin/Dashboard'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'
import Customers from './components/Admin/Customers'
import Admin from './components/Admin'
import Home from './components/Home'
import Category from './components/Category'
import Product from './components/Product'
import Login from './components/Login'
import Signup from './components/Signup'
import 'animate.css';
import Contact from './components/Contact'
import Swal from 'sweetalert2'
import PreGuard from './components/Guard/PreGuard'
import Cart from './components/Cart'
import Profile from './components/Profile'
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<PreGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/admin" >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment" element={<Payments />} />
          <Route path="setting" element={<Setting />} />
          <Route path="auth" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App