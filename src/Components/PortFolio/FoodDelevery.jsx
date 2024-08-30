import React from 'react';
import { assets } from '../../assests/assests';
import { useState, useEffect } from 'react';

const FoodDelevery = () => {


  const images = [
    `${assets.food}`,
    `${assets.menu}`,
    `${assets.cart}`,
    `${assets.about}`,
    `${assets.signin}`,
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
        <div className="relative px-14 mb-5">
          <img src={assets.FOODBG} alt="Food Delivery Background" className="w-full h-auto l" />

          <div className="absolute inset-0 p-14">
            <div className='flex justify-evenly'>
              <div className="text-7xl font-bold text-orange-400 mr-10 animate-pulse">
                <p>FOOD DELIVERY</p>
                <p className="italic">Clone</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-2  ">
                <div className='text-white text-2xl'>HOME PAGE</div>
                <img src={assets.header} className="h-44 lg:h-52 xl:h-72" alt="Home Page" />
              </div>
            </div>
            <div className='w-96 ml-32'>
              <div className="relative w-full h-64 overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img src={image} alt={`Slide ${index}`} className="w-full h- xl:h-64 object-cover" />
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
