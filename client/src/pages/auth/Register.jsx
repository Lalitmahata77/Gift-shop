import React, { useEffect, useState } from 'react'
import {setCredintial} from "../../redux/features/userSlice"
import {useRegisetrMutation} from "../../redux/api/userApiSlice"
import { Link, useLocation, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from '../../componets/Loader'
const Register = () => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [register,{isLoading}] = useRegisetrMutation()
const {userInfo} = useSelector(state=>state.auth)
const {search} = useLocation()
const sp = new URLSearchParams(search)
const redirect = sp.get("redirect") || "/"
const navigate = useNavigate()
const dispatch = useDispatch()
useEffect(()=>{
    if (userInfo) {
        navigate(redirect)
    }
},[userInfo,redirect,navigate])

const submitHandler = async(e)=>{
    e.preventDefault()
    try {
        const res = await register({username,email,password}).unwrap()
        dispatch(setCredintial({...res}))
        navigate(redirect)
        toast.success("User register successfully")
    } catch (error) {
        console.log(error);
        toast.error(error.data.message)
    }
}
  return (
    <div className=' flex items-center justify-center mt-32'>
    <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
  <h2 className="text-2xl font-bold pb-5">SignUp</h2>
  <form onSubmit={submitHandler}>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
      <input
        type="text"
        id="name"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="Andrew Jackson"
        required
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
     / >
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
      <input
        type="email"
        id="email"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="andrew@mail.com"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
     / >
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
      <input
        type="password"
        id="password"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="*********"
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div>
      <p className="text-red-500 pb-5"></p>
    </div>
    <div className="flex items-center justify-between mb-4">
      <button
        type="submit"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
      >
        {isLoading ? "Registering......" : "Register"}
      </button>
      {isLoading && <Loader/>}
      <div className="flex items-center text-sm">
        <p>Already have an account?</p>
        <p className="underline cursor-pointer ml-1"><Link to="/login">Sign in</Link></p>
      </div>
    </div>
  </form>
</div>
</div>
  )
}

export default Register