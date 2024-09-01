// src/Components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assests/assests";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Illustration */}
      <div className="mb-8">
        <img
          src={assets.page}
          alt="404 Illustration"
          className="w-full max-w-sm mx-auto"
        />
      </div>

      {/* Heading and Description */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Sorry, the page you're looking for doesn't exist. You can go back to the
        homepage or contact us for support.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-6 py-3 text-white bg-red-500 rounded-full hover:bg-red-600  transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;