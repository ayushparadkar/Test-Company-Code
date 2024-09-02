import React from 'react'

import { assets } from '../../assests/assests';


const PortfolioHeader = () => {
  return (
    <div className="relative mb-10">
      <img
        src={assets.PortfolioMain}
        alt=""
        className="w-full h-full object-cover"
        loading='lazy'
      />
      <div className="absolute inset-0 flex    font-bold text-center p-4 ">

        <div className="px-4 md:px-16 text-gray-300 lg:p-28 md:p-10 font-serif wow animate__animated animate__slideInLeft">
          <div className="text-5xl md:text-8xl lg:text-9xl text-zinc-500 ">Explore</div>
          <div className="text-3xl md:text-6xl lg:text-7xl lg:pt-7 lg:pl-10">What we've</div>
          <div className="pl-2 md:pl-10 text-3xl md:text-6xl lg:text-7xl">Created</div>
        </div>
      </div>
    </div>


  )
}

export default PortfolioHeader