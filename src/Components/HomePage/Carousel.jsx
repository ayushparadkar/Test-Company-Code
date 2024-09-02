import React, { useState, useEffect, useMemo } from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaNetworkWired,
  FaCogs,
  FaGlobe,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";
import img1 from "../../assests/futurism-perspective-digital-nomads-lifestyle.webp";
import img2 from "../../assests/cyberpunk-illustration-with-neon-colors-futuristic-technology.webp";
import img3 from "../../assests/cinematic-render-hologram-globe.webp";
import img4 from "../../assests/website-hosting-concept-with-bright-light.webp";
import { Link } from "react-router-dom";

const Carousel = () => {
  // Wrap carouselData in useMemo to prevent unnecessary re-renders
  const carouselData = useMemo(() => [
    {
      image: img1,
      header: "Explore the Digital Future",
      icon: <FaLaptopCode className="text-orange-500" />,
      lines: [
        {
          icon: <FaLightbulb className="text-yellow-500" />,
          text: "Reimagine work with innovative digital solutions.",
        },
        {
          icon: <FaNetworkWired className="text-green-500" />,
          text: "Connect globally with robust networking capabilities.",
        },
        {
          icon: <FaGlobe className="text-blue-500" />,
          text: "Navigate the digital world with confidence and ease.",
        },
      ],
    },
    {
      image: img2,
      header: "Transform Your Business",
      icon: <FaChartLine className="text-blue-500" />,
      lines: [
        {
          icon: <FaCogs className="text-red-500" />,
          text: "Optimize processes with advanced technology solutions.",
        },
        {
          icon: <FaLaptopCode className="text-orange-500" />,
          text: "Enhance productivity with tailored software tools.",
        },
        {
          icon: <FaRocket className="text-purple-500" />,
          text: "Scale your operations to new heights with innovation.",
        },
      ],
    },
    {
      image: img3,
      header: "Technology at Your Fingertips",
      icon: <FaMobileAlt className="text-purple-500" />,
      lines: [
        {
          icon: <FaLaptopCode className="text-orange-500" />,
          text: "Seamlessly integrate across all devices and platforms.",
        },
        {
          icon: <FaShieldAlt className="text-gray-700" />,
          text: "Secure your data with cutting-edge protection.",
        },
        {
          icon: <FaChartLine className="text-blue-500" />,
          text: "Gain insights with advanced data analytics.",
        },
      ],
    },
    {
      image: img4,
      header: "Futuristic Business Strategies",
      icon: <FaRocket className="text-purple-500" />,
      lines: [
        {
          icon: <FaRocket className="text-purple-500" />,
          text: "Launch into the future with innovative strategies.",
        },
        {
          icon: <FaLightbulb className="text-yellow-500" />,
          text: "Create memorable experiences with creative ideas.",
        },
        {
          icon: <FaNetworkWired className="text-green-500" />,
          text: "Build strong networks for global expansion.",
        },
      ],
    },
  ], []); // The empty array ensures this data is only created once

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0); // 0 or 1
  const [backgroundImages, setBackgroundImages] = useState([
    carouselData[0].image,
    null,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      preloadImage(carouselData[nextIndex].image).then(() => {
        // Set the background image of the inactive layer
        setBackgroundImages((prev) => {
          const newBg = [...prev];
          newBg[activeLayer === 0 ? 1 : 0] = carouselData[nextIndex].image;
          return newBg;
        });

        // Trigger the transition
        setActiveLayer((prev) => (prev === 0 ? 1 : 0));

        // Update the current index
        setCurrentIndex(nextIndex);
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, carouselData, activeLayer]);

  // Function to preload images
  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = resolve; // Resolve even if there's an error to prevent blocking
    });
  };

  const currentSlide = carouselData[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-gray-100">
      {/* Welcome Section */}
      <div className="text-center mb-8 px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 animate_heartBeat animate_animated wow">
          Welcome to Our Digital World
        </h2>
        <p className="text-base md:text-xl text-gray-600 mt-4">
          We bring the future of technology to your fingertips. Explore,
          innovate, and grow with our cutting-edge solutions.
        </p>
      </div>

      {/* Blob Carousel */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full ">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-8 animate_fadeInLeft animate_animated wow">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-left text-gray-800">
            <span className="flex items-center gap-2">
              {currentSlide.icon}
              {currentSlide.header}
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-6 ">
            Welcome to our{" "}
            <span className="font-bold">Hidden Leaf Technologies</span>{" "}
            platform. We are here to help you navigate the ever-evolving digital
            landscape with confidence and innovation. Our services are designed
            to propel your business forward, making technology work for you in
            the most efficient way possible.
          </p>
          <div className="flex flex-col gap-4">
            {currentSlide.lines.map((line, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm md:text-lg text-gray-700"
              >
                {line.icon}
                <span>{line.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12">
            <Link to="/ContactUs">
              <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Blob Section */}
        <div className="relative w-full md:w-1/2 hidden md:flex items-center justify-center px-4 md:px-0">
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-orange-500 rounded-[60%] blob-shadow overflow-hidden flex items-center justify-center">
            {/* Background Image Layers */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                activeLayer === 0 ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${backgroundImages[0]})`,
              }}
            ></div>
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                activeLayer === 1 ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${backgroundImages[1]})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
