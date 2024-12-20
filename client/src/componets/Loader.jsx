import React from 'react'

const Loader = () => {
  return (
    <div className="flex w-52 flex-col gap-4 items-center justify-center">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
  )
}

export default Loader