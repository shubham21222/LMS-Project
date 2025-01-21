'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from "lucide-react"; // Import at the top of your file


export default function TestimonialSection() {
    const testimonials = [
        {
            image: 'https://demo.creativeitem.com/academy-laravel/public/assets/page-builder/block-image/test-image.png',
            name: 'Linchon Philips',
            position: 'CEO @ Yahoo',
            rating: 5,
            testimonial: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            image: 'https://demo.creativeitem.com/academy-laravel/public/assets/page-builder/block-image/test-image.png',
            name: 'Linchon Philips',
            position: 'CEO @ Google',
            rating: 5,
            testimonial: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            image: 'https://demo.creativeitem.com/academy-laravel/public/assets/page-builder/block-image/test-image.png',
            name: 'Linchon Philips',
            position: 'CEO @ Yahoo',
            rating: 5,
            testimonial: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        // Add more testimonials here as needed
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative w-full bg-white py-16 overflow-hidden">
            <div className="absolute left-0 top-0 w-40 h-40 rounded-full bg-purple-100/50" />
            <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-purple-100/50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[100%]">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="text-blue-600 font-semibold">Testimonial</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            What our clients says about us
                        </h2>
                        <p className="text-gray-600">
                            {testimonials[currentSlide].testimonial}
                        </p>

                        {/* Navigation buttons */}
                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center"
                            >
                                <svg
                                    className="w-6 h-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center"
                            >
                                <svg
                                    className="w-6 h-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="relative ">
                        <div className="relative w-[291px] h-[425px]  bg-blue-600 rounded-lg overflow-hidden">
                            <Image
                                src={testimonials[currentSlide].image}
                                alt={testimonials[currentSlide].name}

                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-[160px] shadow-2xl testimonial-des -right-[20px] flex items-center gap-4 bg-white">
                            <div className="p-4">
                                <p className="text-sm text-gray-500 mb-2">Show More +</p>
                                <h3 className="font-bold text-lg">{testimonials[currentSlide].name}</h3>
                                <p className="text-gray-500 text-sm">{testimonials[currentSlide].position}</p>
                                <div className="flex items-center gap-1 mt-2">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            className={`w-4 h-4 ${index < testimonials[currentSlide].rating
                                                    ? "fill-[#FFD700] text-[#FFD700]" // Using golden color
                                                    : "fill-gray-200 text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Yellow background rating section */}
                            <div className=" relative">
                                <div className="flex pr-3 py-1">
                                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-white fill-white"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}