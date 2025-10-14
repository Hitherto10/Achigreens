import React from 'react';
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";
import {Images} from "../images.jsx";

export default function Footer() {

    return (
        <footer className="bg-teal-900 text-white pt-10 sm:pt-14 lg:pt-16 font-[Outfit] pb-8 px-4">
            {/* CHANGED FOR MOBILE: reduced top padding */}
            <div className="max-w-7xl mx-auto">
                {/* CHANGED FOR MOBILE: responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 lg:mb-12">
                    {/* Company Info */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            {/* CHANGED FOR MOBILE: smaller logo */}
                                <img
                                    src={`${Images.logo_2}`}
                                    alt="Logo"
                                    className={`w-10 sm:w-12`}
                                />
                            {/* CHANGED FOR MOBILE: smaller text */}
                            <span className="text-xl sm:text-2xl font-serif">AchiGreens</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            We have been operating for over a decade, providing top-notch services to our clients and building a strong track record.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        {/* CHANGED FOR MOBILE: font size */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
                        {/* CHANGED FOR MOBILE: tighter spacing */}
                        <ul className="space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Products</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        {/* CHANGED FOR MOBILE: font size */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Services</h3>
                        {/* CHANGED FOR MOBILE: tighter spacing */}
                        <ul className="space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Agricultural Consultancy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Health & Nutrition</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Training & Outreach</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Farm Infrastructure</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Waste & Environmental Management</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        {/* CHANGED FOR MOBILE: font size */}
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Info</h3>
                        {/* CHANGED FOR MOBILE: tighter spacing */}
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-green-400 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300 text-sm">Plot 1&3 Majemi Close Mahuta, Kaduna, 800283</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-green-400 flex-shrink-0" size={20} />
                                <a href="tel:+2348177111731" className="font-semibold text-gray-300 hover:underline">+234 817 711 1731</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-green-400 flex-shrink-0" size={20} />
                                <a href="mailto:info@achigreens.com" className="font-semibold text-gray-300 hover:underline">info@achigreens.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                {/* CHANGED FOR MOBILE: stack */}
                <div className="border-t border-teal-800 pt-6 lg:pt-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                    {/* CHANGED FOR MOBILE: font size */}
                    <p className="text-gray-400 text-xs sm:text-sm">
                        © 2025 Achigreens. All rights reserved.
                    </p>
                    <div className="flex gap-6 sm:gap-8">
                        <a href="#" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-green-400 text-xs sm:text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}