import React from 'react';
import { assets } from '../../assests/assests';
import { useState, useEffect } from 'react';

const FoodDelevery = () => {


  const images = [
    `${assets.food}`,
    `${assets.menu}`,
    `${assets.cart}`,
    `${assets.about}`,
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 2000; // Change interval duration here

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);


  return (
    <div>
      <div>
        <div className="relative md:px-14 mb-5">
          <img src={assets.FOODBG} alt="Food Delivery Background" className="w-full h-auto l" />

          <div className="absolute inset-0 sm:p-14">
            <div className='flex justify-evenly'>
              <div className="text-lg sm:text-7xl mt-3 font-bold p-2 text-orange-400 sm:mr-10 animate-pulse wow animate__animated animate__jello">
                <p>FOOD DELIVERY</p>
                <p className="italic">Clone</p>
              </div>
              <div className=" rounded-xl p-2 sm:h-72 wow animate__animated animate__fadeInRight">
                <div className='text-white sm:text-2xl'>HOME PAGE</div>
                <img src={assets.header} className=" h-16 sm:h-72" alt="Home Page" />
              </div>
            </div>
            <div className='w-28  ml-8 h-14 sm:w-96 sm:ml-32'>
              <div className="relative w-full h-64 overflow-hidden wow animate__animated animate__fadeInLeft">
                <div
                  className="flex transition-transform duration-700 ease-in-out "
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img src={image} alt={`Slide ${index}`} className=" w-full h- xl:h-64 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

  
      </div>
    </div>
  );
};

export default FoodDelevery;  
