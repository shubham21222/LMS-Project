import React from "react";

const categories = [
  {
    name: "Web Development",
    courses: 9,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/web-development-logo-1718273508.png",
  },
  {
    name: "Graphic Design",
    courses: 6,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/graphic-design-logo-1718524053.png",
  },
  {
    name: "User Experience",
    courses: 6,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/user-experience-logo-1718524065.png",
  },
  {
    name: "Interior Design",
    courses: 5,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/interior-design-logo-1718524080.png",
  },
  {
    name: "3D and Animation",
    courses: 8,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/3d-and-animation-logo-1718524102.png",
  },
  {
    name: "Fashion",
    courses: 4,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/Fashion-logo-1729576973.webp",
  },
  {
    name: "Yoga",
    courses: 3,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/yoga-logo-1718524586.png",
  },
  {
    name: "Music",
    courses: 2,
    image: "https://demo.creativeitem.com/academy-laravel/public/uploads/category-logo/music-logo-1718524117.png",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Explore Top Courses Categories</h2>
        <p className="text-sm text-gray-500">Categories</p>
      </div>
      <div className="max-w-[1180px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md overflow-hidden hover:text-white hover:bg-black transition-transform duration-300 hover:scale-105"
          >
            {/* Left Image Section */}
            <div className="w-1/3 h-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full rounded-[10px] object-cover"
              />
            </div>
            {/* Right Content Section */}
            <div className="w-2/3 flex flex-col justify-center  h-full p-4">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-700">{category.courses} Courses</p>
            </div>
          </div>
        ))}
      </div>
      {/* Center-align last row */}
    
    </section>
  );
};

export default CategoriesSection;
