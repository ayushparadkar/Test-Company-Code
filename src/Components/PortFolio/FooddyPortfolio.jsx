import React from "react";

const FooddyPortfolio = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">FooddyPortfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Fooddy Portfolio</h2>
        <p className="text-gray-600 max-w-md mb-6">
          A sleek and modern food ordering clone built with React and Tailwind CSS, showcasing a beautiful user interface and responsive design.
        </p>
       
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md w-full py-4 text-center">
        <p className="text-sm text-gray-600">&copy; 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FooddyPortfolio;
