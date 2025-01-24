'use client';

import React from 'react';
import { Clock, Users, Star, BookOpen, ChevronRight } from 'lucide-react';
import HeaderComponent2 from '../../components/Header2';
import Footer from '../../components/Footer';
import coursesData from '../../Data/CourseData';
import ScheduleSection from '@/app/components/ScheduleSection';

export default function CourseDetailPage({ params }) {
    const courseId = Number(params.slug);
    const course = coursesData.find(c => c.id === courseId);

    if (!course) {
        return <div className="text-center py-20 text-2xl">Course Not Found</div>;
    }

    return (
        <>
            <HeaderComponent2 />
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Breadcrumb */}
                    <nav className="flex flex-wrap items-center space-x-2 text-sm mb-6">
                        <a href="/" className="flex items-center text-gray-600 hover:text-blue-600">
                            Home
                        </a>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <a href="/courses" className="text-gray-600 hover:text-blue-600">
                            Courses
                        </a>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">{course.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                {course.title}
                            </h1>
                            <p className="text-gray-700 text-base sm:text-lg mb-6">
                                You'll learn advanced Photoshop techniques like retouching & Graphic Design tutorials.
                            </p>
                            <div className="flex flex-wrap items-center space-x-4 mb-6">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="https://demo.creativeitem.com/academy-laravel/public/uploads/users/admin/-1716717339.jpg"
                                        alt={course.author}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                                    />
                                    <p className="font-medium text-sm sm:text-base">{course.author}</p>
                                </div>
                                <span className="hidden sm:block text-gray-500">•</span>
                                <p className="text-gray-500 text-sm sm:text-base">Certificate Course</p>
                            </div>
                            <div className="flex flex-wrap items-center text-sm sm:text-base space-x-6 mb-8">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5 text-gray-500" />
                                    <span>{course.students} Students</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5 text-gray-500" />
                                    <span>{course.duration} Duration </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <BookOpen className="w-5 h-5 text-gray-500" />
                                    <span>Language: {course.language}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Star className="w-5 h-5 text-gray-500" />
                                    <span>Level: {course.level}</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-[20px] shadow-2xl p-4 sm:p-6 ">
                                <nav className="flex flex-wrap space-x-4 border-b mb-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">
                                        Overview
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 pb-2">
                                        Curriculum
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 pb-2">
                                        Details
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 pb-2">
                                        Instructor
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 pb-2">
                                        Reviews
                                    </a>
                                </nav>
                                <h2 className="text-lg sm:text-xl font-semibold mb-4">Course Overview</h2>
                                <p className="text-gray-700 mb-4">
                                    Are you already good at Photoshop? This course will take you to the top level.
                                </p>
                                <a href="#" className="text-blue-600 font-medium">
                                    See more
                                </a>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 sticky top-16 shadow-2xl self-start rounded-[20px]  overflow-hidden">
                            {/* Gradient Border */}
                            <div className=" inset-0 bg-gradient-to-r from-[#2f57ef] via-[#c664ff] to-[#c664ff] rounded-[20px] p-[2px]">
                                {/* Inner Content */}
                                <div className="bg-white rounded-[20px] shadow-lg p-4 sm:p-6">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="rounded-lg mb-4 max-w-full h-auto"
                                    />
                                    <div className="text-center">
                                        <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            $45.00 <span className="line-through text-gray-500 text-xl">$59.00</span>
                                        </p>
                                        <button className="btn w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                            Buy Now
                                        </button>
                                    </div>
                                    <ul className="text-sm sm:text-base text-gray-600 space-y-4 mt-6">
                                        <li className="flex items-center space-x-2">
                                            <Users className="w-5 h-5 text-gray-500" />
                                            <span>{course.students} Students</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <Clock className="w-5 h-5 text-gray-500" />
                                            <span>{course.duration} Duration </span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <BookOpen className="w-5 h-5 text-gray-500" />
                                            <span>Language: {course.language}</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <Star className="w-5 h-5 text-gray-500" />
                                            <span>Level: {course.level}</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                <ScheduleSection />

                </div>
            </div>
          
            <Footer />
        </>
    );
}
