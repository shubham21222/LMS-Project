import React from 'react';
import { Search, Clock, Users, Home, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import HeaderComponent from '../components/Header';
import bootcamps from '../Data/Bootcamp';
import HeaderComponent2 from '../components/Header2';

export default function BootcampPage() {
    const categories = [
        { name: "Software Engineering", count: 1 },
        { name: "Web Development", count: 1 },
        { name: "Data Science and Analytics", count: 1 },
        { name: "Information Security", count: 1 },
        { name: "UX/UI Design Bootcamp", count: 1 }
    ];

    return (
        <>
            <HeaderComponent2 />
            
            <div className="pb-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-50">
            <div className="max-w-7xl mx-auto px-6 py-4 ">
                    <nav className="flex items-center space-x-2 text-sm">
                        <a
                            href="/"
                            className="flex items-center text-black hover:text-blue-100 transition-colors duration-200"
                        >
                            <Home className="w-4 h-4 mr-1" />
                            Home
                        </a>
                        <ChevronRight className="w-4 h-4 text-black/70" />
                        <a
                            href="/courses"
                            className="text-black hover:text-blue-100 transition-colors duration-200"
                        >
                            Bootcamp
                        </a>
                       
                    </nav>  
                </div>
                <div className="r">
                    <div className="absolute  bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 blur-3xl"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative">
                        <div className="text-left mb-8">
                            {/* <p className="text-sm text-gray-600 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                                Home &gt; All Bootcamps
                            </p> */}
                            <h1 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                All Bootcamps
                            </h1>
                            <p className="text-gray-600 mt-2">Showing {bootcamps.length} of {bootcamps.length} data</p>
                        </div>

                        <div className="lg:flex lg:gap-6">
                            <div className="lg:w-72 flex-shrink-0">
                                <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all duration-300 sticky top-4">
                                    <div className="relative mb-6 group">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:shadow-md"
                                        />
                                        <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
                                    </div>

                                    {/* Categories with Scroll */}
                                    <div className="max-h-[calc(100vh-300px)] overflow-y-auto   " >
                                        <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            Categories
                                        </h3>
                                        <ul className="space-y-3">
                                            {categories.map((category, index) => (
                                                <li
                                                    key={index}
                                                    className="flex justify-between items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer group"
                                                >
                                                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                                                        {category.name}
                                                    </span>
                                                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm group-hover:bg-blue-200 transition-colors">
                                                        {category.count}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="text-blue-600 mt-6 font-medium hover:text-blue-800 transition-colors flex items-center">
                                            Show More
                                            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Cards Grid */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {bootcamps.map(course => (
                                    <div
                                        key={course.id}
                                        className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            {/* Price overlay with gradient - always visible */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-lg font-semibold text-white">
                                                        {course.price}
                                                    </div>
                                                    {course.oldPrice && (
                                                        <div className="text-sm text-gray-300 line-through">
                                                            {course.oldPrice}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 transform transition-all duration-300">
                                            <h2 className="text-md font-medium text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {course.title}
                                            </h2>

                                            <div className="text-sm text-gray-500 mb-4">
                                                <span className="mr-4 inline-flex items-center">
                                                    <span className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                                                        {course.rating} ★
                                                    </span>
                                                </span>
                                                <span className="group-hover:text-blue-500 transition-colors duration-300">
                                                    {course.lessons} lessons
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-sm group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                                                    <div className="relative">
                                                        <img
                                                            src="https://demo.creativeitem.com/academy-laravel/public/uploads/users/admin/-1716717339.jpg"
                                                            alt={course.author}
                                                            className="w-6 h-6 rounded-full mr-2 ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300"
                                                        />
                                                    </div>
                                                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                                                        {course.author}
                                                    </span>
                                                </div>

                                                <a
                                                    href="#"
                                                    className="relative text-blue-500 text-sm font-medium overflow-hidden group-hover:text-blue-600 transition-colors duration-300"
                                                >
                                                    <span className="relative inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                                                        Learn More
                                                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                                                            →
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}