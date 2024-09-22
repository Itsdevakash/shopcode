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

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
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