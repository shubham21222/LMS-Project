import React from "react";
import { Search, Home, ChevronRight } from "lucide-react";
import HeaderComponent2 from "../components/Header2";
import Footer from "../components/Footer";
import tutors from "../Data/tutors";

const TutorBookingPage = () => {
  const categories = [
    "Accounting",
    "Bookkeeping",
    "Photoshop",
    "Adobe Illustrator",
    "Global Economics",
    "Drawing",
    "Communication Skills",
    "Leadership",
    "Adobe Premiere Pro",
  ];

  return (
    <>
      <HeaderComponent2 />

      <div className="pb-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm">
            <a
              href="/"
              className="flex items-center text-black hover:text-blue-600 transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-black/70" />
            <span className="text-black">Live Classes</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Live Classes
            </h1>
            <p className="text-gray-600 mt-2">
              Showing {tutors.length} of {tutors.length} results
            </p>
          </div>

          {/* Main Layout */}
          <div className="lg:flex lg:gap-6">
            {/* Sidebar */}
            <div className="lg:w-72 flex-shrink-0 mb-6 lg:mb-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                {/* Search */}
                <div className="relative mb-6 group">
                  <input
                    type="text"
                    placeholder="Search instructor by name..."
                    className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 group-hover:shadow-md"
                  />
                  <Search className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
                </div>

                {/* Categories */}
                <div>
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
                          {category}
                        </span>
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm group-hover:bg-blue-200 transition-colors">
                          0
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-1">
              {tutors.map((tutor, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    {/* Video Thumbnail */}
                    <div className="w-full sm:w-36 h-24 bg-black rounded-md flex justify-center items-center text-white">
                      <span className="text-lg font-bold">Video</span>
                    </div>

                    {/* Tutor Info */}
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {tutor.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {tutor.live} Live schedule • {tutor.booked} Booked schedule •{" "}
                        {tutor.reviews} Reviews
                      </p>
                      <div className="mt-2 flex flex-col sm:flex-row gap-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm">
                          Enroll Now
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-sm">
                          Send Message
                        </button>
                      </div>
                    </div>

                    {/* Session Fee */}
                    <div className="text-right sm:text-left mt-4 sm:mt-0">
                      <p className="text-sm text-gray-600">Session Fee</p>
                      <p className="text-lg font-bold text-gray-800">${tutor.fee}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TutorBookingPage;
