// pages/login.js
"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import HeaderComponent2 from "../components/Header2";
import Link from "next/link";

export default function LoginPage() {
    const [role, setRole] = useState("");

    const handleRoleSelect = (role) => {
        setRole(role);
        alert(`Login as ${role}`);
    };

    return (
        <>
            <HeaderComponent2 />
            <div className="flex max-w-7xl mx-auto flex-col md:flex-row items-center justify-between min-h-screen rounded-[20px]   bg-gray-50 p-6">
                {/* Illustration Section */}
                <div className="img-shadow md:w-1/2 flex items-center justify-center h-full">
                    <Image
                        src="https://demo.creativeitem.com/academy-laravel/public/assets/frontend/default/image/login.gif"
                        alt="Login Illustration"
                        width={500}
                        height={500}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Login Form Section */}
                <div className="md:w-1/2 w-full max-w-md bg-white p-8 rounded-[20px] shadow-2xl border-gray-500">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
                    <p className="text-gray-600 mb-6">
                        See your growth and get consulting support!
                    </p>

                    <form>
                        <div className="mb-6">
                            <label
                                className="block text-gray-600 font-medium mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                className="block text-gray-600 font-medium mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="text-blue-500 focus:ring-2 focus:ring-blue-500"
                                />
                                <label htmlFor="remember" className="ml-2 text-gray-600">
                                    Remember Me
                                </label>
                            </div>
                            <a href="#" className="text-blue-500 text-sm font-medium">
                                Forget Password?
                            </a>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-md text-lg font-semibold hover:opacity-90"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-6">
                        Not have an account yet?{" "}
                        <a href="#" className="text-blue-500 font-medium">
                            Create Account
                        </a>
                    </p>

                    <div className="mt-6">
                        <p className="text-gray-600 mb-2">Login As -</p>
                        <div className="grid grid-cols-1 gap-3">
                            {["Admin", "Student", "Instructor"].map((role) => (
                                <Link
                                    key={role}
                                    href={
                                        role === "Student"
                                            ? "/StudentDashboard"
                                            : role === "Admin"
                                                ? "/AdminDashboard"
                                                : "#"
                                    }
                                >
                                    <button
                                        onClick={() => handleRoleSelect(role)}
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-md text-lg font-medium hover:opacity-90 w-full"
                                    >
                                        {role}
                                    </button>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
