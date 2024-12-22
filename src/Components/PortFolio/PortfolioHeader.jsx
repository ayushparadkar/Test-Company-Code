import React from 'react';
import PortfolioMain from '../../assests/PortfolioMain.webp'
const PortfolioPage = () => {
 

  return (
    <div id="portfolio" className="relative bg-black text-white">
      {/* Header Section */}
      <header className="relative h-[90vh] w-full">
        <img
          src={PortfolioMain} // Replace with your header image
          alt="Portfolio Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300">
            A showcase of our expertise and projects.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 text-lg rounded-lg shadow-md transition">
            Explore More
          </button>
        </div>
      </header>

      {/* Portfolio Section */}
      

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="text-center">
          <h3 className="text-lg md:text-2xl font-semibold text-red-500">
            Hidden Leaf Technologies
          </h3>
          <p className="text-gray-400 mt-2">Empowering your digital presence.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
