import React from "react";
import { ShoppingCart, Search, LogIn } from "lucide-react";

const HeaderComponent = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 max-w-[1180px] flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">Academy</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-purple-600">
            Home
          </a>
          <a href="/courses" className="text-gray-600 hover:text-purple-600">
            Courses
          </a>
          <a href="/bootcamp" className="text-gray-600 hover:text-purple-600">
            Bootcamp
          </a>
          <a href="/tutors" className="text-gray-600 hover:text-purple-600">
            Find A Tutor
          </a>
        </nav>

        {/* Search and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="hidden md:flex items-center border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-purple-600">
            <Search className="text-gray-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-40 lg:w-60 text-sm outline-none"
            />
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <button className="text-gray-600 hover:text-purple-600">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>

          {/* Login Button */}
          <button className="btn flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-900">
            <LogIn className="w-5 h-5 mr-2" />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
