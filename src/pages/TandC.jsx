import React from 'react';
import { FileText, Mail, MapPin, Scale } from 'lucide-react';

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <FileText size={48} />
                        <h1 className="text-5xl font-bold">Terms & Conditions</h1>
                    </div>
                    <p className="text-teal-100 text-lg">Last Updated: October 16, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            These Terms and Conditions ("Terms", "Agreement") constitute a legally binding agreement between you ("User", "you", "your") and AchiGreens LLC ("Company", "we", "us", "our"), a business entity established under the laws of Nigeria, governing your access to and use of the https://achigreens.com/ website ("Website", "Service").
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Website.
                        </p>
                        <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded">
                            <p className="font-semibold text-gray-800 mb-2">Company Information:</p>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Legal Name: AchiGreens LLC</li>
                                <li>• Business Address: Plot 1&3 Majemi Close by Benode Avenue, Mahuta, Nigeria</li>
                                <li>• Email: info@achigreens.com</li>
                            </ul>
                        </div>
                    </section>

                    {/* Acceptance of Terms */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By accessing, browsing, or purchasing products from https://achigreens.com/, you confirm that:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>You are at least 18 years of age or have reached the age of majority in your jurisdiction</li>
                            <li>You have the legal capacity to enter into this binding agreement</li>
                            <li>You will comply with all applicable local, state, national, and international laws and regulations</li>
                            <li>All information you provide is accurate, current, and complete</li>
                        </ul>
                    </section>

                    {/* Use of Website */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Use of the Website</h2>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">4.2 Prohibited Activities</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Use the Website for any unlawful purpose or in violation of these Terms</li>
                            <li>Attempt to gain unauthorized access to any portion of the Website</li>
                            <li>Interfere with or disrupt the integrity or performance of the Website</li>
                            <li>Use any robot, spider, scraper, or other automated means to access the Website</li>
                            <li>Transmit any viruses, malware, or other malicious code</li>
                            <li>Impersonate any person or entity</li>
                            <li>Engage in any activity that could damage, disable, overburden, or impair the Website</li>
                        </ul>
                    </section>

                    {/* Products and Services */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Products and Services</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Product Information</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We strive to provide accurate product descriptions, images, and pricing on our Website. However, we do not warrant that product descriptions, images, pricing, or other content on the Website is accurate, complete, reliable, current, or error-free.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Pricing and Availability</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>All prices are subject to change without notice</li>
                                    <li>We do not guarantee that products will be in stock</li>
                                    <li>We reserve the right to limit quantities purchased</li>
                                    <li>We reserve the right to refuse or cancel any order</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Purchases and Payments */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Purchases and Payments</h2>

                        <div className="bg-gray-50 p-6 rounded-lg mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Payment is required at the time of purchase</li>
                                <li>All payments are one-time transactions</li>
                                <li>You must have the legal right to use any payment method provided</li>
                                <li>You agree to pay all charges including applicable taxes and shipping fees</li>
                            </ul>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section className="mb-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Scale size={24} />
                            11. Disclaimer of Warranties
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3 font-semibold">
                            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE AND ALL PRODUCTS AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We do not warrant that the Website will function uninterrupted, secure, or error-free, or that defects will be corrected. Your use of the Website is at your sole risk.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">16. Governing Law and Jurisdiction</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. You agree that any legal action or proceeding shall be instituted exclusively in the courts of Nigeria having jurisdiction over Mahuta, Nigeria.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-teal-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">24. Contact Information</h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at:
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">AchiGreens LLC</p>
                                    <p className="text-gray-600">Plot 1&3 Majemi Close by Benode Avenue</p>
                                    <p className="text-gray-600">Mahuta, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-teal-600 flex-shrink-0" size={20} />
                                <a href="mailto:info@achigreens.com" className="text-gray-600 hover:text-teal-600">
                                    info@achigreens.com
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Acknowledgment */}
                    <section className="mt-12 p-6 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl border-2 border-teal-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">25. Acknowledgment</h2>
                        <p className="text-gray-700 font-medium">
                            BY USING THE WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THE WEBSITE.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}