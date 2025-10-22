import React, {useState} from 'react';
import {ChevronDown, Phone} from "lucide-react";
// Assumed imports
// import {navItems} from "../data/siteContent.js";
import { Images } from '../images';
import {NavLink} from "react-router-dom";
import {navItems} from "../data/siteContent.js";


export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        // The outer <header> tag was removed here.
        <>
            {/* Yellow Bar - Will scroll off the screen */}
            <div className="bg-yellow-400 py-2 px-4 font-[Outfit]">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm ">
                    <div className="flex items-center gap-2 text-gray-800">
                        <span>📍</span>
                        <span>Plot 1&3 Majemi Close Mahuta, Kaduna, 800283</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-800">
                        <div className="flex items-center gap-2">
                            {/* Assuming Phone is an imported component/icon */}
                            <Phone size={16} />
                            <a href="tel:+2348177111731" className="font-semibold text-gray-800 hover:underline">+234 817 711 1731</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>✉️</span>
                            <a href="mailto:info@achigreens.com" className="font-semibold text-gray-800 hover:underline">info@achigreens.com</a>
                        </div>
                    </div>
                </div>
            </div>


            <nav className="bg-white sticky top-0 z-50 shadow-sm font-[Outfit]">
                <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        {/* Assuming NavLink is an imported component */}
                        <NavLink to={`/`}>
                            <div className="flex hover:cursor-pointer items-center gap-2">
                                <img
                                    src={`${Images.logo_2}`}
                                    alt="Logo"
                                    className={`w-10 sm:w-12`}
                                />
                                <span className="text-xl sm:text-2xl font-serif text-teal-900">AchiGreens</span>
                            </div>
                        </NavLink>

                        {/* Navigation Items */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {/* Assuming navItems, setOpenDropdown, and ChevronDown are defined/imported */}
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative "
                                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button className="flex hover:cursor-pointer items-center gap-1 text-gray-700 hover:text-teal-700 transition-colors">
                                        {item.label}
                                        {item.hasDropdown && <ChevronDown size={16} />}
                                    </button>
                                </div>
                            ))}

                            {/* CHANGED FOR MOBILE: hide on mobile */}
                            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full hidden md:inline-flex items-center gap-2 transition-colors">
                                Contact Us →
                            </button>
                        </div>

                        {/* TODO: Placeholder for mobile hamburger menu - no JS logic implemented */}
                        <div className="md:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}