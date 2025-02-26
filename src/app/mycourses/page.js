
import Link from "next/link";
import Footer from "../components/Footer";
import HeaderComponent2 from "../components/Header2";
import coursesData from "../Data/CourseData";
import {
    Book,
    GraduationCap,
    Calendar,
    Users,
    User,
    Heart,
    MessageCircle,
    ShoppingCart,
    LogOut,
} from "lucide-react";

export default function UserDashboard() {
    return (
        <>
            <HeaderComponent2 />
            <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col md:flex-row justify-center py-8">
                <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row gap-8">
                    {/* Course Section */}
                    <main className="flex-1 p-6 bg-white rounded-lg shadow-lg order-1 md:order-2">
                        <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Courses</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coursesData.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl hover:scale-[1.02] transition-transform"
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-sm font-medium text-gray-600">{course.instructor}</h3>
                                    <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                                    <p className="text-sm text-gray-500 mb-4">Progress: {course.progress}%</p>
                                    <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                                        <div
                                            className="bg-blue-500 h-2 rounded-full"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>
                                    <Link href='/Login'>
                                    <button
                                        className={`w-full py-2 rounded-lg font-semibold ${course.progress === 0
                                                ? "bg-blue-500 text-white hover:bg-blue-600"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            } transition`}
                                    >
                                        {course.progress === 0 ? "Start Now" : "Continue"}
                                    </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* Sidebar */}
                    <div className="lg:w-72 flex-shrink-0  xs:mx-3 order-2 md:order-1">
                        <div className="bg-gradient-to-r from-[#2f57ef] via-[#c664ff] to-[#c664ff] rounded-[20px] p-[2px]">
                            <aside className="bg-white p-6 shadow-lg rounded-[20px] h-full">
                                <div className="text-center mb-6">
                                    <img
                                        src="https://demo.creativeitem.com/academy-laravel/public/uploads/users/student/josel-vosus-1716716132.jpg"
                                        alt="Profile"
                                        className="w-24 h-24 mx-auto rounded-full border-4 border-purple-200 mb-4"
                                    />
                                    <h2 className="text-lg font-semibold text-gray-800">Josel Vosus</h2>
                                    <p className="text-sm text-gray-500">student@example.com</p>
                                </div>

                                <nav className="space-y-4 mt-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-blue-500 font-semibold hover:bg-blue-100 hover:rounded-lg p-2 transition"
                                    >
                                        <Book className="mr-3 w-5 h-5" /> My Courses
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <GraduationCap className="mr-3 w-5 h-5" /> My Bootcamps
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <Calendar className="mr-3 w-5 h-5" /> My Bookings
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <Users className="mr-3 w-5 h-5" /> My Teams
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <User className="mr-3 w-5 h-5" /> My Profile
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <Heart className="mr-3 w-5 h-5" /> Wishlist
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <MessageCircle className="mr-3 w-5 h-5" /> Message
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <ShoppingCart className="mr-3 w-5 h-5" /> Purchase History
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="flex items-center text-gray-600 hover:bg-gray-100 hover:rounded-lg p-2 transition"
                                    >
                                        <LogOut className="mr-3 w-5 h-5" /> Logout
                                    </a>
                                </nav>
                                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:shadow-md transition">
                                    Become an Instructor
                                </button>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}