'use client';

import React, { useState } from 'react';
import { Grid, List, Search, Star } from 'lucide-react';
import HeaderComponent from '../components/Header';
import Footer from '../components/Footer';
import { ChevronRight, Home } from 'lucide-react';

import coursesData from '../Data/CourseData';
import HeaderComponent2 from '../components/Header2';
import Link from 'next/link';

export default function CoursesSection() {
    const [selectedRating, setSelectedRating] = useState(0);
    const [viewType, setViewType] = useState('grid');

    const handleRatingClick = (rating) => {
        setSelectedRating(rating === selectedRating ? 0 : rating);
    };

    const renderGrid = () => (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map(course => (
                  <Link 
                  key={course.id} 
                  href={`/course/${course.id}`}
                  className="block"
              >
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
                </Link>
            ))}
        </div>
    );

    const renderList = () => (
        <div className="flex-1 flex flex-col gap-4">
            {coursesData.map(course => (
                <Link 
                key={course.id} 
                href={`/course/${course.id}`}
                className="block"
            >
                <div
                    key={course.id}
                    className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                    <div className="flex">
                        <div className="relative w-64 overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                                <div className="text-lg font-bold">{course.price}</div>
                                {course.originalPrice && (
                                    <div className="text-sm line-through text-gray-300">
                                        {course.originalPrice}
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                        </div>

                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {course.title}
                                    </h2>

                                </div>

                                <div className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                                <div className="flex items-center gap-6">
                                    <span className="flex items-center text-sm text-gray-500">
                                        <span className="text-yellow-400 mr-1 group-hover:scale-110 transition-transform duration-300">
                                            {course.rating} ★
                                        </span>
                                        <span className="group-hover:text-blue-500 transition-colors duration-300">
                                            ({course.rating} ratings)
                                        </span>
                                    </span>
                                    <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                                        {course.lessons} lessons
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                <div className="flex items-center text-sm group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                                    <div className="relative">
                                        <img
                                            src="https://demo.creativeitem.com/academy-laravel/public/uploads/users/admin/-1716717339.jpg"
                                            alt={course.author}
                                            className="w-8 h-8 rounded-full mr-3 ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300"
                                        />
                                    </div>
                                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                                        {course.author}
                                    </span>
                                </div>

                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-blue-50 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300"
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
                </div>
                </Link>

            ))}
        </div>
    );

    return (
        <>
            <HeaderComponent2 />
            <div className="gradiant-course pb-32 relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-50">
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
                            Courses
                        </a>
                        <ChevronRight className="w-4 h-4 text-black/70" />
                        <span className="text-black-100">All Courses</span>
                    </nav>
                </div>
                <div className='relative'>
                    <section className=" pt-8">
                        <div className="max-w-7xl mx-auto px-6 ">
                            <div className="flex justify-between items-center mb-6  md:flex">
                                <h1 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">All Courses</h1>
                                <p className="text-black/80 text-sm">Showing 9 of 43 data</p>
                                <div className="sm:flex space-x-2 hidden sm:block">
                                    <button
                                        onClick={() => setViewType('grid')}
                                        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${viewType === 'grid'
                                            ? 'text-blue-600 bg-white hover:bg-blue-50'
                                            : 'text-black bg-white/20 hover:bg-white/30'
                                            }`}
                                    >
                                        <Grid className="w-5 h-5 mr-2" />
                                        Grid
                                    </button>
                                    <button
                                        onClick={() => setViewType('list')}
                                        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${viewType === 'list'
                                            ? 'text-blue-600 bg-white hover:bg-blue-50'
                                            : 'text-black bg-white/20 hover:bg-white/30'
                                            }`}
                                    >
                                        <List className="w-5 h-5 mr-2" />
                                        List
                                    </button>
                                </div>
                            </div>


                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Sidebar */}
                                <aside className="lg:w-72 flex-shrink-0">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-xl border border-white/50 hover:shadow-xl transition-all duration-300 sticky top-4">
                                        {/* Improved Search */}
                                        <div className="relative mb-6 group">
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:shadow-md"
                                            />
                                            <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
                                        </div>

                                        {/* Categories with Scroll */}
                                        <div className="max-h-[calc(100vh-300px)] overflow-y-auto">

                                            <div className="mt-1">
                                                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl mb-4">Price</h3>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    <li><input type="checkbox" className="mr-2" /> Paid</li>
                                                    <li><input type="checkbox" className="mr-2" /> Discount</li>
                                                    <li><input type="checkbox" className="mr-2" /> Free</li>
                                                </ul>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl mb-4">Level</h3>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    <li><input type="checkbox" className="mr-2" /> Beginner</li>
                                                    <li><input type="checkbox" className="mr-2" /> Intermediate</li>
                                                    <li><input type="checkbox" className="mr-2" /> Advanced</li>
                                                </ul>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl mb-4">Language</h3>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    <li><input type="checkbox" className="mr-2" /> English</li>
                                                    <li><input type="checkbox" className="mr-2" /> Spanish</li>
                                                    <li><input type="checkbox" className="mr-2" /> Italian</li>
                                                    <li><input type="checkbox" className="mr-2" /> German</li>
                                                </ul>
                                            </div>


                                            <div className="mt-3">
                                                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl mb-4">Rating</h3>
                                                <div className="space-y-2">
                                                    {[5, 4, 3, 2, 1].map((rating) => (
                                                        <div
                                                            key={rating}
                                                            className="flex items-center cursor-pointer"
                                                            onClick={() => handleRatingClick(rating)}
                                                        >
                                                            {[...Array(5)].map((_, index) => (
                                                                <Star
                                                                    key={index}
                                                                    className={`w-5 h-5 ${index < rating
                                                                        ? 'fill-yellow-400 text-yellow-400'
                                                                        : 'text-gray-300'
                                                                        } ${rating === selectedRating
                                                                            ? 'opacity-100'
                                                                            : 'opacity-60'
                                                                        }`}
                                                                />
                                                            ))}
                                                            <span className="ml-2 text-sm text-gray-600">& up</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                {viewType === 'grid' ? renderGrid() : renderList()}
                            </div>
                        </div>

                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
}