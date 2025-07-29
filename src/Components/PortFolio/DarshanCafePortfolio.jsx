import React from "react";
import Slider from "react-slick";
import { assets } from "../../assests/assests";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DarshanCafePortfolio = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/path-to-background-image.webp')" }}
      ></div>

      {/* Decorative Overlay (Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-900 opacity-80"></div>

      {/* Main Content Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
        {/* Left: Image Slider */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Slider {...settings}>
            <img
              src={assets.darshancafe1}
              alt="Cafe Interior"
              className="w-full h-[450px] object-cover"
            />
            <img
              src={assets.darshancafe2}
              alt="Rooftop Ambiance"
              className="w-full h-[450px] object-cover"
            />
            <img
              src={assets.darshancafe3}
              alt="Delicious Food"
              className="w-full h-[450px] object-cover"
            />
          </Slider>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col space-y-6">
          {/* Cafe Name & Tagline */}
          <h1 className="text-5xl md:text-6xl font-bold text-pink-500">
            K's Darshan Cafe
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Experience the charm of Indore's best rooftop cafe. Enjoy delicious
            gourmet dishes, breathtaking views, and a cozy ambiance that's
            perfect for every occasion.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full mr-4"></div>
              <p className="text-gray-300">Stunning Rooftop Views</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full mr-4"></div>
              <p className="text-gray-300">Premium Quality Cuisine</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full mr-4"></div>
              <p className="text-gray-300">Live Music Evenings</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full mr-4"></div>
              <p className="text-gray-300">Warm & Cozy Ambiance</p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 shadow-lg transition-transform transform hover:scale-105">
              Book Your Table
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 shadow-lg transition-transform transform hover:scale-105">
              View Our Menu
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="relative z-10 w-full mt-12 max-w-7xl space-y-12">
        {/* Testimonials Section */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-pink-500 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-300 italic">
                "The ambiance is simply amazing! Perfect place for a dinner
                date."
              </p>
              <span className="mt-4 text-pink-500">- Priya S.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-300 italic">
                "Loved the rooftop vibe and the food is top-notch!"
              </p>
              <span className="mt-4 text-pink-500">- Rahul M.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-300 italic">
                "Great service and an unforgettable experience. Highly
                recommend!"
              </p>
              <span className="mt-4 text-pink-500">- Sneha K.</span>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-300 mb-6">
            Stay updated with our latest offers and events.
          </p>
          <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 shadow-lg transition-transform transform hover:scale-105">
            Follow @ksdarshancafe
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarshanCafePortfolio;