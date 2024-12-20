import React from 'react'

const About = () => {
  return (
    <div>
        <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                <div className="mt-8">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>

    <div>
    <div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <div className="bg-primary text-primary-content grid place-content-center font-black">
        <h1 className=' text-4xl font-extrabold text-center justify-center mb-4'>What we stand <br /> for</h1>
      <div className=' flex gap-4 flex-wrap'>
      <div className=' border rounded shadow-lg justify-center text-center'>
        <h1 className=' text-4xl font-extrabold mb-3'>Customer Centricity</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec.</p>
      </div>
      <div className=' border rounded shadow-lg justify-center text-center'>
        <h1 className=' text-4xl font-extrabold mb-3'>Trust & Integrity</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec.</p>
      </div>
      <div className=' border rounded shadow-lg justify-center text-center'>
        <h1 className=' text-4xl font-extrabold mb-3'>Cost Conscious</h1>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.  Ut elit <br /> tellus, luctus nec.</p>
      </div>
  </div>
</div>
      
  </div>
  <div className="diff-item-2">
    <div className="bg-base-200 grid place-content-center  font-black">
      <div className=' flex items-center gap-40'>
        
<div className=' ml-5'>


        <h1 className=' font-extrabold text-6xl underline mb-6 '>What we do</h1>
        <p className=' font-bold'>
        Dolor sit amet, consectetur adipisicing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
         Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className=''>
     <div className=' mb-10'>
      <h1 className=' text-6xl mb-5 font-extrabold underline'>Mission</h1>
      <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>


     <div>
<h1 className=' text-6xl font-extrabold underline mb-5'>Vision</h1>
<p className=' font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>
      </div>
    </div>
    </div>
    
  </div>
  <div className="diff-resizer"></div>
</div>
    </div>
</section>

{/* <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default About