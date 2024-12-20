import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './Home.jsx'
import SettingPage from './componets/SettingPage.jsx'
import PrivateRoute from './componets/PrivateRoute.jsx'
import Profile from './pages/user/Profile.jsx'
import ProfileDetails from './pages/user/ProfileDetails.jsx'
import AdminRoute from './pages/admin/AdminRoute.jsx'
import UserList from './pages/admin/userList.jsx'
import CategoryList from './pages/admin/CategoryList.jsx'
import Contact from './componets/Contact.jsx'
import About from './componets/About.jsx'
import ProductList from './pages/admin/ProductList.jsx'
import AllProducts from './pages/admin/AllProducts.jsx'
import AdminProductUpdate from './pages/admin/ProductUpdate.jsx'
import ProductDetails from './pages/product/ProductDetails.jsx'
import Cart from './Cart.jsx'
import Shop from './Shop.jsx'
import SpecialOfferMain from './componets/SpecialOfferMain.jsx'
import Birthday from './pages/product/Birthday.jsx'
import Holiday from './pages/product/Holiday.jsx'
import Aniversary from './pages/product/Aniversary.jsx'
import Graduation from './pages/product/Graduations.jsx'
import OrderList from './pages/admin/OrderList.jsx'
import Order from './pages/order/Order.jsx'
import PlaceOrder from './pages/order/PlaceOrder.jsx'
import Shipping from './pages/order/Shipping.JSX'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' index={true} element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
<Route path="/shop" element={<Shop />} />
<Route path='/special' element={<SpecialOfferMain/>}/>
<Route path='/birthday' element={<Birthday/>}/>
<Route path="/holiday" element={<Holiday/>}/>
<Route path='/aniversary' element={<Aniversary/>}/>
<Route path="/graduation" element={<Graduation/>}/>

      <Route path='' element={<PrivateRoute/>}>
      
      <Route path='/settings' element={<SettingPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profileDetails' element={<ProfileDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      <Route path="/order/:id" element={<Order />} />
      
      </Route>



      <Route path='/admin' element={<AdminRoute/>}>
      
      <Route path='categorylist' element={<CategoryList/>}/>
      <Route path='userlist' element={<UserList/>}/>
      <Route path='createproduct' element={<ProductList/>}/>
      <Route path='allproductslist' element={<AllProducts/>}/>
      <Route path="product/update/:_id" element={<AdminProductUpdate />} />
      <Route path="orderlist" element={<OrderList />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>,
)
