import React from "react";

const DrAmitJainPortfolio = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">
          Dr. Amit Jain's Homeopathy
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          A modern, user-friendly, and SEO-optimized website tailored for a
          leading homeopathy consultant.
        </p>
      </div>

      {/* Showcase Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/dr-amit-jain.png" // Replace with actual image path
            alt="Dr. Amit Jain Website Screenshot"
            className="rounded-lg shadow-lg w-3/4 border-4 border-blue-300 hover:scale-105 transform transition-all duration-300"
          />
        </div>

        {/* Features Section */}
        <div className="flex-1 space-y-6">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <div className="text-blue-600 text-4xl">💻</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Modern Design
              </h3>
              <p className="text-gray-600">
                Crafted with a clean and modern interface to captivate users.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <div className="text-blue-600 text-4xl">📈</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                SEO Optimized
              </h3>
              <p className="text-gray-600">
                Boosts online visibility with search-engine-friendly design.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <div className="text-blue-600 text-4xl">📞</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Online Consultancy
              </h3>
              <p className="text-gray-600">
                Integrated video consultation feature for client convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="https://jainhomeopathy.in" // Replace with the actual website link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default DrAmitJainPortfolio;