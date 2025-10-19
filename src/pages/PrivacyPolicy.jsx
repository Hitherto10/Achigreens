import React from 'react';
import { Shield, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <Shield size={48} />
                        <h1 className="text-5xl font-bold">Privacy Policy</h1>
                    </div>
                    <p className="text-green-100 text-lg">Last Updated: October 16, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            AchiGreens LLC ("Company", "we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website https://achigreens.com/ ("Website", "Service") and when you purchase products from us.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            This Privacy Policy applies to all users of our Website and customers who purchase our products. By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy, you must not access or use our Website.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                            <p className="font-semibold text-gray-800 mb-2">Company Information:</p>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Legal Name: AchiGreens LLC</li>
                                <li>• Business Address: Plot 1&3 Majemi Close by Benode Avenue, Mahuta, Nigeria</li>
                                <li>• Email: info@achigreens.com</li>
                                <li>• Country of Establishment: Nigeria</li>
                            </ul>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">2.1 Personal Information We Collect</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            When you visit our Website or make a purchase, we may collect the following types of personal information from you:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Contact Information:</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>First name</li>
                                    <li>Last name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Shipping address</li>
                                    <li>Billing address (if different from shipping address)</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Transaction Information:</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>Payment information (processed securely by third-party payment processors)</li>
                                    <li>Purchase history</li>
                                    <li>Order details</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Technical Information:</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Device information</li>
                                    <li>Operating system</li>
                                    <li>Referring website addresses</li>
                                    <li>Pages viewed and time spent on pages</li>
                                    <li>Date and time stamps</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">2.3 Information We Do NOT Collect</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>We do NOT use Google Analytics or other third-party analytics tools</li>
                            <li>We do NOT collect information from children under the age of 13</li>
                            <li>We do NOT collect sensitive personal information such as racial or ethnic origin, political opinions, religious beliefs, health information, or biometric data unless required for order fulfillment</li>
                            <li>We do NOT use tracking technologies for advertising purposes</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Order Processing and Fulfillment</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>To process and fulfill your orders</li>
                                    <li>To communicate with you about your orders</li>
                                    <li>To arrange for shipping and delivery</li>
                                    <li>To handle returns, exchanges, and refunds</li>
                                    <li>To send order confirmations and shipping notifications</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 Customer Service</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>To respond to your inquiries and requests</li>
                                    <li>To provide customer support</li>
                                    <li>To resolve disputes and troubleshoot problems</li>
                                    <li>To communicate with you about our products and services</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">10. Your Rights and Choices</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Under Nigerian law (NDPR) and applicable international laws, you have the following rights regarding your personal information:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">Right to Access</h4>
                                <p className="text-sm text-gray-600">Request access to your personal information</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">Right to Rectification</h4>
                                <p className="text-sm text-gray-600">Correct inaccurate information</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">Right to Erasure</h4>
                                <p className="text-sm text-gray-600">Request deletion of your data</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">Right to Data Portability</h4>
                                <p className="text-sm text-gray-600">Transfer your data to another organization</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="bg-green-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                        <p className="text-gray-600 mb-6">
                            If you have any questions, concerns, or complaints about this Privacy Policy or our privacy practices, please contact us:
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-green-600 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-800">AchiGreens LLC</p>
                                    <p className="text-gray-600">Plot 1&3 Majemi Close by Benode Avenue</p>
                                    <p className="text-gray-600">Mahuta, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-green-600 flex-shrink-0" size={20} />
                                <a href="mailto:info@achigreens.com" className="text-gray-600 hover:text-green-600">
                                    info@achigreens.com
                                </a>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-6">
                            We will respond to your inquiry within 30 days or as required by applicable law.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}