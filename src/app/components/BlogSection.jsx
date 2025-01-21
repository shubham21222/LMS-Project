'use client';
import React from "react";
import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      category: "Lifestyle",
      title: "Balance your priorities in life and enjoy a beautiful life",
      description:
        "Living a productive and meaningful life is a balancing act. With the pressures of...",
      image: "https://demo.creativeitem.com/academy-laravel/public/uploads/blog/thumbnail/balance-your-priorities-in-life-and-enjoy-a-beautiful-life-1727847800.jpg", // Replace with actual URL
      date: "20 Jan, 2025",
    },
    {
      id: 2,
      category: "Lifestyle",
      title: "4 Ways to Boost Student Participation in Online Learning",
      description:
        "Why Participation Is Important in Online Learning Participation in all education...",
      image: "https://demo.creativeitem.com/academy-laravel/public/uploads/blog/thumbnail/4-ways-to-maximize-student-participation-in-online-learning-1716710433.jpg", // Replace with actual URL
      date: "20 Jan, 2025",
    },
    {
      id: 3,
      category: "AI Learning",
      title: "AI-Based learning is the future of Corporate Training",
      description:
        "The corporate world is slowly stepping into the dimension of Artificial...",
      image: "https://demo.creativeitem.com/academy-laravel/public/uploads/blog/thumbnail/ai-based-learning-is-the-future-of-corporate-training-1716709161.jpg", // Replace with actual URL
      date: "20 Jan, 2025",
    },
  ];

  return (
    <section className="bg-white py-16 ">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-blue-500 font-semibold uppercase">Our Blog</p>
            <h2 className="text-4xl font-bold leading-tight">
              Have a look on our news
            </h2>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90">
            View All Blogs
          </button>
        </div>
                                        
        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <a href="#" className="text-blue-600 font-medium">
                    Read More →
                  </a>
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
