import React from 'react'
import { Outlet } from 'react-router'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './pages/auth/Navigation'
import { useSelector } from 'react-redux'
import Footer from './componets/Footer';

const App = () => {
  const {themeInfo} = useSelector(state=>state.theme)
  return (
    <>
    <div data-theme={themeInfo}>
    <ToastContainer/>
    
    <Navigation/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App