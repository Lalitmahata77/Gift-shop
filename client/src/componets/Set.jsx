import React from 'react'
import Birthday from '../pages/product/Birthday'
import { Link } from 'react-router'

const Set = () => {
  return (
    <>
    <h1 className=' text-3xl font-bold text-center mb-4 mt-20 '>Shop by Occasion</h1>
    <hr className=' w-16 h-1 m-auto mb-20 bg-orange-700' />
    <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
    <div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://plus.unsplash.com/premium_photo-1663839539570-a9ee01c5168b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Birthday Gifts</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus, itaque ab dolores nesciunt sunt facere ipsa mollitia vitae sed magnam ex accusantium aliquid quae repellat deserunt blanditiis laboriosam quasi!</p>
    <div className="card-actions justify-end">
      <Link to="/birthday" className="btn btn-primary">VIEW ALL</Link>
    </div>
  </div>
</div>


<div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://c8.alamy.com/comp/WK6DY3/happy-anniversary-gift-showing-celebrating-years-of-marriage-WK6DY3.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Anniversary</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis rerum facilis sequi ipsa explicabo autem vel suscipit, culpa incidunt molestias aspernatur labore quasi assumenda impedit ex. Veniam, ullam sit?</p>
    <div className="card-actions justify-end">
      <Link to="/aniversary" className="btn btn-primary">VIEW ALL</Link>
    </div>
  </div>
</div>


<div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://images.unsplash.com/photo-1631090164714-3336f1fa5315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Holidays Gifts</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit totam ea voluptates similique consequatur ipsum ipsa non, explicabo deleniti labore. Cumque doloremque debitis autem nam hic fugit ea velit!</p>
    <div className="card-actions justify-end">
      <Link to="/holiday" className="btn btn-primary">VIEW ALL</Link>
    </div>
  </div>
</div>



<div className="card bg-base-100 image-full w-96 shadow-xl mt-6">
  <figure>
    <img
      src="https://media.istockphoto.com/id/157913882/photo/new-car.jpg?s=2048x2048&w=is&k=20&c=PTCkUVzX_y9IjG6Mue0XJhvex4_cxafcQX8mBD7mC4w="
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Graduations Gifts
    </h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores nulla? </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">VIEW ALL</button>
    </div>
  </div>
</div>


</div>
</>
  )
}

export default Set