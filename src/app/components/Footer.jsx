'use client';

import React from "react";
import {
    Twitter,
    Facebook,
    Linkedin,
    Mail,
    Phone,
} from "lucide-react";
import logo from "../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-area bg-gradient-to-b from-blue-800 to-blue-900 text-white py-12">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Branding Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
                        {/* <Image
                            src={logo}
                            alt="H2K Infosys Logo"
                            width={150} // Adjust width as needed
                            height={50} // Adjust height as needed
                            className="object-contain"
                        /> */}
                        KT HUB
                    </h2>
                    <p className="text-sm text-gray-300 mb-6">
                        It is a long established fact that a reader will be distracted by the
                        read content of a page layout.
                    </p>
                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"
                        >
                            <Twitter className="text-white w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"
                        >
                            <Facebook className="text-white w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-600"
                        >
                            <Linkedin className="text-white w-5 h-5" />
                        </a>
                    </div>
                    <button className="gradient-border-btn text-white mt-6 px-6 py-2 border-2 bg-white hover:bg-blue-100 rounded-lg font-semibold">
                        Contact with Us →
                    </button>
                </div>

                {/* Top Categories Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Top Categories</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Responsive Design</li>
                        <li>Bootstrap</li>
                        <li>Blender</li>
                        <li>Learning Guitar</li>
                        <li><Link href="/AdminDashboard">Admin Dashboard</Link></li>
                        <li><Link href="/StudentDashboard">Student Dashboard</Link></li>

                    </ul>
                </div>

                {/* Useful Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Useful Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Course</li>
                        <li>Blog</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-8 mb-4 text-white">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>+143-52-9933631</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>academy@example.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to stay tuned for new web design and latest updates. Let's do it!
                    </p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-2 py-2 rounded-l-lg bg-blue-700 text-gray-200 border-none focus:outline-none"
                        />
                        <button className="px-2 py-2  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg font-semibold hover:opacity-90">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-500 mt-8"></div>
            <div className="pt-4 text-sm max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-gray-300 space-y-4 md:space-y-0">
                <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                    <li><a href="#" className="hover:text-white">About us</a></li>
                    <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms And Use</a></li>
                    <li><a href="#" className="hover:text-white">Sales and Refunds</a></li>
                    <li><a href="#" className="hover:text-white">Cookie policy</a></li>
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
                <p>© 2024 All Rights Reserved</p>
            </div>
        </footer>
    );
}
