import React from "react";
import { assets } from "../../assests/assests";

const ECommercePortfolio = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-14 mb-5">
      <div className="bg-gradient-to-r from-rose-600 via-rose-400 to-rose-600 p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <p className="wow animate_animated animatefadeInRight  font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 p-2">
            E-commerce Website
          </p>
          <hr className="border-t-2 border-gray-200 rounded-full w-24 mx-auto" />
        </div>

        <div className="wow animate_animated animatefadeInUp  grid -ml-6 sm:ml-0 grid-cols-4 gap-8 mt-8 lg:mt-12">
          {[
            assets.Ecommerce,
            assets.Ecommerce2,
            assets.Ecommerce3,
            assets.Ecommerce4,
          ].map((image, index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-full sm:h-52 bg-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(${image})`,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              }}
            ></div>
          ))}
        </div>

        <div className="wow animate_animated animatefadeInUp animate_delay-0.8s grid -ml-3 sm:ml-0 grid-cols-3 gap-8 mt-8 lg:mt-12">
          {[assets.Ecommerce5, assets.Ecommerce6, assets.Ecommerce7].map(
            (image, index) => (
              <div
                key={index}
                className="w-24 h-20 sm:w-full sm:h-52 bg-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                style={{
                  backgroundImage: `url(${image})`,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                }}
              ></div>
            )
          )}
        </div>

        {/* Centering the Target <div> */}
        <div className="flex justify-center mt-12">
          <div className="w-full lg:w-96 bg-white bg-opacity-10 rounded-xl p-6 text-center shadow-lg">
            <p className="wow animate_animated animatefadeInLeft animate_delay-1s text-lg font-bold sm:text-2xl text-white">
              Nature Nest
            </p>
            <p className=" wow animate_animated animatefadeInRight animate_delay-0.8s text-xs sm:text-base text-white mt-4">
              Unlock endless possibilities with our eCommerce site, where
              shopping is effortless and always just right. Discover top brands
              and exclusive deals galore, all from the comfort of your home, and
              so much more!
            </p>
          </div>
        </div>

        <div className="mt-8">
          <hr className="border-t-2 border-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ECommercePortfolio;