'use client'
import React, { useState } from 'react';
import { ShoppingCart, Search, LogIn, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderComponent2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full relative">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">
          <a href="/">
            <Image
              src="https://cdn-ilabman.nitrocdn.com/xtUQWXOfcWGNRAIcJPfqVKOwFVhKDbyl/assets/images/optimized/rev-9a54eba/www.h2kinfosys.com/wp-content/uploads/2024/03/h2k-infosys-Logo.jpg"
              alt="H2K Infosys Logo"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
              className="object-contain"
            />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 font-semibold">
        {['Home', 'Courses', 'Bootcamp', 'Find A Tutor'].map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item === 'Find A Tutor' ? 'tutors' : item.toLowerCase().replace(' ', '-')}`}
              className="relative text-gray-600 hover:text-purple-600 group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </nav>

        {/* Search and Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <div className="hidden md:flex items-center border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-purple-600 transition-all duration-300">
            <Search className="text-gray-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-40 lg:w-60 text-sm outline-none"
            />
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <button className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>

          {/* Login Button */}
          <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
            <LogIn className="w-5 h-5 mr-2" />
            Login
          </button>
        </div>

        {/* Mobile Menu Button - Now visible on mobile */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            className="text-gray-600 hover:text-purple-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Cart Icon */}
          <div className="relative">
            <button className="text-gray-600 hover:text-purple-600">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Fixed position */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-screen bg-white z-50">
          <nav className="flex flex-col py-4 px-4">
            {['Home', 'Courses', 'Bootcamp', 'Find A Tutor'].map((item) => (
              <Link
                key={item}
                href={`/${item === 'Home' ? '' : item === 'Find A Tutor' ? 'tutor' : item.toLowerCase().replace(' ', '-')}`}
                className="relative text-gray-600 hover:text-purple-600 group py-4 border-b border-gray-100"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-purple-50 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="mt-4 flex items-center border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-purple-600">
              <Search className="text-gray-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full text-sm outline-none"
              />
            </div>
            {/* Mobile Login Button */}
            <button className="mt-4 flex items-center justify-center w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent2;