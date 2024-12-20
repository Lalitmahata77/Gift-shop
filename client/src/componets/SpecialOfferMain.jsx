import React, { useState } from 'react'
import {useAllProductsQuery} from "../redux/api/productApiSlice"
import Loader from './Loader'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'

const SpecialOfferMain = () => {
     const [qty, setQty] = useState(1);
    const {data:prodcuts,isLoading} = useAllProductsQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(data);
    
    if (isLoading) {
        return <Loader/>
    }
     const addToCartHandler = () => {
        dispatch(addToCart({ ...prodcuts, qty }));
        navigate("/cart");
      };
  return (
    <>
    <h1 className=' text-3xl font-bold text-center mt-14 mb-3'>Special Offers</h1>
    <hr className=' w-20 h-1 m-auto mb-20 bg-orange-700' />
    <div className=' grid lg:grid-cols-3'>
       
        {
            prodcuts?.map((product)=>(
                <div key={product._id} className=' '>
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md  ">
<Link to={`/product/${product?._id}`}>
    <img className="h-60 rounded-t-lg object-cover" src={product?.image} alt="product image" />
  </Link>
  <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
  <div className="mt-4 px-5 pb-5">
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product?.name}</h5>
    </a>
    <div className="mt-2.5 mb-5 flex items-center gap-3">
        <span>Rating</span>
      <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold"> {product?.rating}</span>
      
    </div>
    <div className="flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">${product?.price}</span>
        <span className="text-sm text-slate-900 line-through">$299</span>
      </p>
      <button onClick={addToCartHandler} className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart
        </button >
    </div>
  </div>
</div>
</div>
            ))
        }
 
</div>
</>
  )
}

export default SpecialOfferMain