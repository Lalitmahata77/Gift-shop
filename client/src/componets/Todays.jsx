import React from 'react'
import { Link } from 'react-router'

const Todays = () => {
  return (
    <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
    <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
      <div className="lg:col-span-5 lg:mt-0">
        <a href="#">
          <img className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="peripherals" />
          <img className="mb-4 hidden dark:block md:h-full" src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="peripherals" />
        </a>
      </div>
      <div className="me-auto place-self-center lg:col-span-7">
        <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Save $500 today on your purchase <br />
          of a new car.
        </h1>
        <p className="mb-6 text-gray-500 dark:text-gray-400">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Pre-order now to secure your discount.</p>
        <Link to="/shop" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 btn"> Pre-order now </Link>
      </div>
    </div>
  </section>
  )
}

export default Todays