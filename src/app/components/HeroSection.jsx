import Image from "next/image";
import React from "react";
import { Play } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1180px] flex flex-col lg:flex-row items-center justify-between py-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-purple-600 font-semibold mb-2">
            🚀 The Leader in online learning
          </p>
          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            Start learning from the world's pro{" "}
            <span className="hero-section-text">Instructors</span>
          </h1>
          <p className="text-gray-600 mt-4">
            We invite learners to explore courses designed by industry experts,
            offering cutting-edge content for skill development.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <button className="btn bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
              Get Started
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 border rounded-md text-gray-600 hover:border-purple-600">
            <Play className="w-5 h-5 text-purple-600" />
            <span>Learn More</span>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
          <Image
            src="https://demo.creativeitem.com/academy-laravel/public/uploads/banner_image/banner-image-1719293185.png"
            alt="Instructor"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-lg w-full img-shadow"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
