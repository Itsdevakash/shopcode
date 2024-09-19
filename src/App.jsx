import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Products from './components/Admin/Product'
import Orders from './components/Admin/Orders'
import NotFound from './components/NotFound'
import Dashboard from './components/Admin/Dashboard'
import Payments from './components/Admin/Payments'
import Setting from './components/Admin/Setting'

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment" element={<Payments />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App