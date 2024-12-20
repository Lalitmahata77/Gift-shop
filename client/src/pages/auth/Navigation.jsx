import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
// import { IoIosSearch } from "react-icons/io";
import {logout} from "../../redux/features/userSlice"
import { toast } from 'react-toastify'
import {useLogoutMutation} from "../../redux/api/userApiSlice"
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiOutlineShoppingCart,
  } from "react-icons/ai";
const Navigation = () => {
    const {userInfo} = useSelector(state=>state.auth)
    const {cartItems} = useSelector((state)=>state.cart)

    const [userLogout] = useLogoutMutation()
    const dispatch = useDispatch()
    const logoutHandler = async()=>{
        try {
         await userLogout()
            dispatch(logout())
        } catch (error) {
            console.log(error);
            toast.error(error.data.message)
            
        }
    }
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to="/">Home</Link></li>
          
          <li>
            <Link>Shop by category</Link>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><Link to="/special">Special offer</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost text-xl">GIFT SHOP</Link>
    </div>
    <div className="navbar-center hidden lg:flex font-bold">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li><Link to="/special">Special offer</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      {
        userInfo ? (
            <div className=' '>
<div className="indicator mr-7">
     <Link to="/cart">      
               
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">
          {cartItems.length > 0 && (
        <span>
          <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
            {cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
        </span>
      )}
          </span>
          </Link>
        </div>

        {
           userInfo.isAdmin ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/admin/dashboard">Dashboard</Link></li>
              <li><Link to="/admin/categorylist">create Category</Link></li>
              <li><Link to="/admin/createproduct">Create product</Link></li>
              <li><Link to="/admin/userlist">UserList</Link></li>
              <li><button onClick={logoutHandler}>Logout</button></li>

            </ul>
            </div>
            ) : ( <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link to="/settings">Settings</Link></li>
                <li><button onClick={logoutHandler}>Logout</button></li>
              </ul>
              
            </div>)
         }

        
       
       </div>
        ) : (
<ul className=' flex items-center justify-center gap-4'>
    <li><Link to="/login"><AiOutlineLogin size={26}/></Link></li>
<li><Link to="/signup"><AiOutlineUserAdd size={26}/></Link></li>
</ul>
        )
      }
    </div>
  </div>
  )
}

export default Navigation