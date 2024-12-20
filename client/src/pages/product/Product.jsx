import React from 'react'
import { Link } from 'react-router'

const Product = ({product}) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
   
    <figure>
      <img
        src={product?.image}
        alt={product?.name} />
    </figure>
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
  )
}

export default Product