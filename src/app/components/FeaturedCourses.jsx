import React from "react";

const courses = [
    {
        title: "Adobe Photoshop CC – Advanced Training Course",
        price: "45.00 $",
        originalPrice: "59.00 $",
        lessons: 13,
        students: 0,
        instructor: "John Doe",
        image: "https://demo.creativeitem.com/academy-laravel/public/uploads/course-thumbnail/-1722251416.jpg", // Replace with the real image URL
    },
    {
        title: "Let's Learn Laravel: A Guided Path For Beginners",
        price: "25.00 $",
        originalPrice: null,
        lessons: 13,
        students: 0,
        instructor: "John Doe",
        image: "https://demo.creativeitem.com/academy-laravel/public/uploads/course-thumbnail/-1722251675.jpg",
    },
    {
        title: "Facebook Clone with Laravel, TDD, Vue & Tailwind",
        price: "35.00 $",
        originalPrice: "55.00 $",
        lessons: 13,
        students: 0,
        instructor: "John Doe",
        image: "https://demo.creativeitem.com/academy-laravel/public/uploads/course-thumbnail/-1722251905.jpg",
    },
    {
        title: "NEW Complete Laravel for Beginners to Mastery",
        price: "45.00 $",
        originalPrice: "59.00 $",
        lessons: 13,
        students: 0,
        instructor: "John Doe",
        image: "https://demo.creativeitem.com/academy-laravel/public/uploads/course-thumbnail/-1722264898.jpg",
    },
];

const FeaturedCourses = () => {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto ">
                {/* Heading */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="text-blue-500">Courses</p>
                        <h2 className="text-4xl text-[#192335] font-bold">Featured Courses</h2>

                    </div>
                    <button className="text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-4 rounded">
                        View All Courses
                    </button>
                </div>

                <div className="grid relative grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-row cursor-pointer rounded-2xl shadow-card overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Course Image */}
                            <div className="relative w-1/3">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover rounded-l-2xl"
                                />
                                {/* Gradient and Price Section */}
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                                    <div className="text-lg font-bold">{course.price}</div>
                                    {course.originalPrice && (
                                        <div className="text-sm line-through text-gray-300">
                                            {course.originalPrice}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Course Details */}
                            <div className="p-4 w-2/3">
                                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                                    {course.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                    <div className="flex items-center space-x-1">
                                        <span>📘</span>
                                        <span>{course.lessons} lessons</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span>👥</span>
                                        <span>{course.students} Students</span>
                                    </div>
                                </div>
                                <div className="text-sm flex gap-2 items-center text-gray-600">
                                    <img src="https://demo.creativeitem.com/academy-laravel/public/uploads/users/admin/-1716717339.jpg" className="w-[30px] h-[30px] object-cover rounded-full" />
                                    by <span className="font-semibold">{course.instructor}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
