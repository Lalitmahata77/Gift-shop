import React from 'react'

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="../src/assets/hero.png"  className="max-w-4xl rounded-lg shadow-2xl"/>
      <div>
        <h1 className="text-5xl font-bold">The Best Way to <br></br> Make Someone <br /> Happy...</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">CHOOSE YOUR BOX</button>
      </div>
    </div>
  </div>
  )
}

export default Hero