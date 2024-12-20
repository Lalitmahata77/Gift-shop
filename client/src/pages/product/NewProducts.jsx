import React from 'react'
import {useNewProductQuery} from "../../redux/api/productApiSlice"
import Loader from '../../componets/Loader'
import { Link } from 'react-router'
import HeartIcon from './HeartIcon'
const NewProducts = () => {
    const {data, isLoading, isError} = useNewProductQuery()
    if (isLoading) {
        return <Loader/>
    }
    if (isError) {
        return <h1>Error</h1>
    }
  return (
    <>
    <h1 className=' text-3xl font-bold text-center mb-4 mt-20 '>New Arrivals</h1>
    <hr className=' w-16 h-1 m-auto mb-20 bg-orange-700' />
<div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
  {
    data?.map((product)=>(
<div key={product?._id} className=' '>
<div className="card card-compact bg-base-100 w-96 shadow-xl">

  <figure>
    <img
      src={product?.image}
      alt={product?.name} />
  </figure>
      <HeartIcon product={product}/>
  <Link to={`/product/${product._id}`}>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p>{product?.description}</p>
    <div className="card-actions justify-end">
    <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
            ${product.price}
          </span>
    </div>
  </div>
  </Link>
  </div>
</div>
    ))
  }
</div>
</>
  )
}

export default NewProducts