import React, { useState } from "react";

export default function ScheduleSection() {
    const [selectedOption, setSelectedOption] = useState("Online Classroom");

    return (
        <div className=" py-8 px-4 sm:px-8 mt-8  lg:px-16 ">
            {/* Toggle Button */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex items-center bg-gray-200 rounded-full p-1 shadow">
                    <button
                        className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium ${
                            selectedOption === "Online Classroom"
                                ? "bg-blue-600 text-white"
                                : "text-gray-600"
                        }`}
                        onClick={() => setSelectedOption("Online Classroom")}
                    >
                        Online Classroom
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium ${
                            selectedOption === "Corporate Training"
                                ? "bg-blue-600 text-white"
                                : "text-gray-600"
                        }`}
                        onClick={() => setSelectedOption("Corporate Training")}
                    >
                        Corporate Training
                    </button>
                </div>
            </div>

            {/* Selected Option Content */}
            <div>
                {selectedOption === "Online Classroom" ? (
                    <div>
                        <h2 className="text-center text-xl font-semibold mb-4 text-gray-800">
                            Online Classroom Schedule
                        </h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-center text-xl font-semibold mb-4 text-gray-800">
                            Corporate Training Schedule
                        </h2>
                    </div>
                )}
            </div>

            {/* Schedule Section */}
            <div className="max-w-7xl mx-auto bg-white rounded-lg  grid grid-cols-1 lg:grid-cols-3 shadow-2xl">
                {/* Left: Schedule Options */}
                <div className="col-span-2 border-r border-gray-200">
                    {/* Schedule Option 1 */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            <span className="text-red-600 text-sm font-bold border border-red-600 rounded-md px-2 py-1">
                                SOLD OUT
                            </span>
                            <div>
                                <p className="text-lg font-medium text-gray-900">JAN 11<sup>th</sup></p>
                                <p className="text-sm text-gray-500">Weekend</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">SAT & SUN (6 Weeks)</p>
                            <p className="text-sm text-gray-500">07:00 AM to 10:00 AM (IST)</p>
                            <p className="text-sm text-gray-700 font-medium">CLASS 1</p>
                        </div>
                    </div>
                    {/* Schedule Option 2 */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            <span className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                            </span>
                            <div>
                                <p className="text-lg font-medium text-gray-900">JAN 25<sup>th</sup></p>
                                <p className="text-sm text-gray-500">Weekend</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">SAT & SUN (6.5 Weeks)</p>
                            <p className="text-sm text-gray-500">08:30 PM to 11:30 PM (IST)</p>
                            <p className="text-sm text-gray-700 font-medium">ORIENTATION CLASS</p>
                        </div>
                    </div>
                    {/* Schedule Option 3 */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-red-600 font-bold border border-red-600 rounded-md px-2 py-1">
                                Filling Fast⚡
                            </span>
                            <div>
                                <p className="text-lg font-medium text-gray-900">FEB 22<sup>nd</sup></p>
                                <p className="text-sm text-gray-500">Weekend</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">SAT & SUN (6.5 Weeks)</p>
                            <p className="text-sm text-gray-500">08:30 PM to 11:30 PM (IST)</p>
                            <p className="text-sm text-gray-700 font-medium">ORIENTATION CLASS</p>
                        </div>
                    </div>
                </div>

                {/* Right: Pricing Card */}
                <div className="p-6 flex flex-col items-center">
                    <p className="text-gray-500 text-lg line-through">₹19,995</p>
                    <p className="text-4xl font-bold text-gray-900">₹13,996</p>
                    <p className="text-sm text-green-600 font-medium">30% OFF, Save ₹5,999</p>
                    <div className="flex items-center space-x-2 bg-red-100 text-red-600 text-sm font-medium py-2 px-3 rounded-lg my-4">
                        <span className="w-4 h-4 border-2 border-red-600 rounded-full"></span>
                        <p>Ends in 14h : 02m : 45s</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        Starts at <span className="font-medium">₹4,666 / month</span>
                    </p>
                    <p className="text-blue-600 text-sm underline cursor-pointer mb-4">
                        With No Cost EMI Know more
                    </p>
                    <button className="btn bg-red-600 text-white text-lg font-medium py-3 px-10 rounded-md hover:bg-red-700">
                        ENROLL NOW
                    </button>
                    {/* <p className="text-sm text-gray-500 mt-4 flex items-center">
                        <span className="mr-2">Secure Transaction</span>
                        <img src="/visa-mastercard-icons.png" alt="Visa and Mastercard" className="w-20" />
                    </p> */}
                </div>
            </div>
        </div>
    );
}
