import React, { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="./src/nike-logo.png"
                className="w-16 h-16 md:w-20 md:h-16"
                alt="Nike Logo"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#menu"
                className="text-gray-800 hover:text-blue-500 font-bold"
              >
                MENU
              </a>
              <a
                href="#location"
                className="text-gray-800 hover:text-blue-500 font-bold"
              >
                LOCATION
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-500 font-bold"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-500 font-bold"
              >
                CONTACT
              </a>
            </div>

            {/* Login Button - Desktop */}
            <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-bold">
              LOGIN
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#menu"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  MENU
                </a>
                <a
                  href="#location"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  LOCATION
                </a>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  ABOUT
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  CONTACT
                </a>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-bold">
                  LOGIN
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <div className="mt-12 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center md:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            YOUR FEET
            <br /> DESERVE <br className="hidden md:block" />
            THE BEST
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-red-500 border-2 border-red-500 rounded-2xl px-6 py-2 sm:px-8 sm:py-3 text-white hover:bg-red-600 transition-colors">
              Shop Now
            </button>
            <button className="bg-white border-2 border-gray-500 rounded-2xl px-6 py-2 sm:px-8 sm:py-3 text-gray-500 hover:bg-gray-100 transition-colors">
              Category
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">Also Available On</p>
          {/* kk */}
          <div className="flex items-center justify-center space-x-8 p-4">
            {/* Amazon Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Visit Amazon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 hover:scale-105 transition-transform"
              >
                <path
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 328c0 57.2-46.8 104-104 104h-80c-57.2 0-104-46.8-104-104V176c0-57.2 46.8-104 104-104h80c57.2 0 104 46.8 104 104v160z"
                  fill="black"
                />
                <path
                  d="M341 227v79h40l12 30h-52v107h-52V336h-52v-30h52v-79h52zm-104-79h52v52h-52v-52z"
                  fill="orange"
                />
              </svg>
            </button>

            {/* Facebook Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              aria-label="Visit Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-12 h-12 hover:scale-105 transition-transform"
              >
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  fill="#FFC107"
                />
              </svg>
            </button>
          </div>
          {/* kk */}
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="./src/nike-shose.jpg"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 object-contain"
            alt="Nike Shoe"
          />
        </div>
      </div>
    </>
  );
}
