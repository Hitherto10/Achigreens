import React, {useState} from 'react';
import {ChevronDown, Phone} from "lucide-react";
import {navItems} from "../data/siteContent.js";
import { Images } from '../images';


export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <>
            <div className="bg-yellow-400 py-2 px-4 font-[Outfit]">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-gray-800">
                        <span>📍</span>
                        <span>Plot 1&3 Majemi Close Mahuta, Kaduna, 800283</span>
                    </div>
                    <div className="flex items-center gap-6 text-gray-800">
                        <div className="flex items-center gap-2">
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
            <nav className="bg-white top-0 shadow-sm font-[Outfit]">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                                <img
                                    src={`${Images.logo_2}`}
                                    alt="Logo"
                                    className={`w-12`}
                                />
                            <span className="text-2xl font-serif text-teal-900">AchiGreens</span>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button className="flex items-center gap-1 text-gray-700 hover:text-teal-700 transition-colors">
                                        {item.label}
                                        {item.hasDropdown && <ChevronDown size={16} />}
                                    </button>
                                </div>
                            ))}

                            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-2 transition-colors">
                                Contact Us →
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}