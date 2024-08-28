import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo, { assets } from "../../assests/assests";

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation(); // Use useLocation to get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
      setDropdownTimer(timer);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 768) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimer) clearTimeout(dropdownTimer);
    };
  }, [isOpen, dropdownTimer]);

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="w-full sticky top-0 z-50 " ref={navRef}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 text-sm py-2 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>Contact: +1-234-567-890 | Email: info@company.com</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo with Home Page Link */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={assets.logo}
                alt="Company Logo"
                className="h-10 w-auto rounded-lg"
              />
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/AboutUs"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button
                className="text-black text-xl hover:text-red-500 transition-all duration-300 flex items-center tracking-wide font-medium"
                onClick={toggleDropdown}
              >
                Services
                <FiChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white bg-opacity-90 border border-red-600 rounded-lg shadow-lg py-2 z-20">
                  <Link to="/FullStackDevelopment"
                    className="block px-4 py-2 text-black hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Full Stack Development
                  </Link>
                  <Link to="/WebDevelopment"
                    className="block px-4 py-2 text-black hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link to="/WebDesign"
                    className="block px-4 py-2 text-black hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Design
                  </Link>
                </div>
              )}
            </div>
            <Link to="/Portfolio"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <a
              href="#"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
            >
              Career
            </a>
            <Link to="/ContactUs"
              className="text-black text-xl hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-red-500 transition-all duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-red-500 animate-slide-in-right">
            <Link to="/AboutUs"
              href="#"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              Services{" "}
              <FiChevronDown
                className={`inline ml-1 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link to="/FullStackDevelopment"
                  className="block px-4 py-2 text-black hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Full Stack Development
                </Link>
                <Link to="/WebDevelopment"
                  className="block px-4 py-2 text-black hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </Link>
                <Link to="/WebDesign"
                  className="block px-4 py-2 text-black hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Web Design
                </Link>
              </div>
            )}
            <Link to="/PortFolioRoute"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link to="#"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
            <Link to="/ContactUs"
              className="block px-4 py-3 text-black hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarNew;