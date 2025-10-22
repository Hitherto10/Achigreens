import React from 'react';
import { Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

// The entire Privacy Policy text is included here for a self-contained component.
const policyContent = {
    lastUpdated: "October 16, 2025",
    sections: [
        {
            title: "1. INTRODUCTION",
            content: (
                <>
                    <p>AchiGreens LLC ("Company", "we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website <a href="https://achigreens.com/" className="text-teal-700 hover:underline">https://achigreens.com/</a> ("Website", "Service") and when you purchase products from us.</p>
                    <p>This Privacy Policy applies to all users of our Website and customers who purchase our products. By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy, you must not access or use our Website.</p>
                    <div className="bg-gray-100 p-4 rounded-lg mt-4 text-sm font-medium">
                        <h4 className="font-bold text-gray-800 mb-2">Company Information:</h4>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>Legal Name: AchiGreens LLC</li>
                            <li>Business Address: Plot 1&3 Majemi Close by Benode Avenue, Mahuta, Nigeria</li>
                            <li>Email: info@achigreens.com</li>
                            <li>Country of Establishment: Nigeria</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "2. INFORMATION WE COLLECT",
            content: (
                <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information We Collect</h3>
                    <p>When you visit our Website or make a purchase, we may collect the following types of personal information from you:</p>
                    <div className="mt-4 space-y-6">
                        <div>
                            <h4 className="font-bold text-teal-700 mb-1">Contact Information:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>First name</li>
                                <li>Last name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Shipping address</li>
                                <li>Billing address (if different from shipping address)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-teal-700 mb-1">Transaction Information:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>Payment information (processed securely by third-party payment processors)</li>
                                <li>Purchase history</li>
                                <li>Order details</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-teal-700 mb-1">Technical Information:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
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

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 How We Collect Information</h3>
                    <p>We collect information in the following ways:</p>
                    <div className="mt-4 space-y-6">
                        <div>
                            <h4 className="font-bold text-teal-700 mb-1">Information You Provide Directly:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>When you make a purchase or place an order</li>
                                <li>When you contact us via email or phone</li>
                                <li>When you sign up to receive emails from us</li>
                                <li>When you provide feedback or communicate with us</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-teal-700 mb-1">Information Collected Automatically:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>When you visit our Website, certain information is automatically collected through cookies and similar technologies</li>
                                <li>Server logs automatically record information about your visit</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Information We Do NOT Collect</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                        <li>We do NOT use Google Analytics or other third-party analytics tools</li>
                        <li>We do NOT collect information from children under the age of 13</li>
                        <li>We do NOT collect sensitive personal information such as racial or ethnic origin, political opinions, religious beliefs, health information, or biometric data unless required for order fulfillment</li>
                        <li>We do NOT use tracking technologies for advertising purposes</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. HOW WE USE YOUR INFORMATION",
            content: (
                <>
                    <ul className="list-disc list-inside ml-4 space-y-3 text-gray-600">
                        <li>**Order Processing and Fulfillment:** To process and fulfill your orders, communicate with you about your orders, and handle returns and refunds.</li>
                        <li>**Customer Service:** To respond to your inquiries, provide support, and resolve disputes.</li>
                        <li>**Email Communications:** To send transactional, marketing, and promotional emails (marketing only if opted in).</li>
                        <li>**Business Operations:** To improve our Website, detect fraud, and address technical issues.</li>
                        <li>**Legal Compliance:** To comply with legal obligations and protect our rights, privacy, and property.</li>
                    </ul>
                </>
            )
        },
        {
            title: "4. LEGAL BASIS FOR PROCESSING (NIGERIAN LAW)",
            content: (
                <>
                    <p>Under the Nigeria Data Protection Regulation (NDPR) and other applicable Nigerian laws, we process your personal information based on the following legal grounds:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600 mt-3">
                        <li>**Consent:** You have given us explicit consent for specific purposes (e.g., marketing emails).</li>
                        <li>**Contract Performance:** Processing is necessary to fulfill our contractual obligations to you (e.g., completing your order).</li>
                        <li>**Legal Obligation:** Processing is necessary to comply with applicable laws and regulations.</li>
                        <li>**Legitimate Interests:** Processing is necessary for our legitimate business interests, provided these interests do not override your fundamental rights.</li>
                    </ul>
                </>
            )
        },
        {
            title: "5. COOKIES AND TRACKING TECHNOLOGIES",
            content: (
                <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 What Are Cookies?</h3>
                    <p>Cookies are small text files that are placed on your device when you visit our Website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Website.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Types of Cookies We Use</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600 mt-3">
                        <li>**Essential Cookies:** Necessary for the Website to function properly (e.g., security, network management).</li>
                        <li>**Functional Cookies:** Remember your preferences and enhance personalization.</li>
                        <li>**Session Cookies:** Temporary cookies deleted when you close your browser, used for your shopping cart and navigation.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 What We Do NOT Use</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                        <li>We do NOT use Google Analytics or similar analytics services</li>
                        <li>We do NOT use advertising cookies or tracking pixels</li>
                        <li>We do NOT use remarketing or retargeting cookies</li>
                        <li>We do NOT share cookie data with third-party advertisers</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.4 Managing Cookies</h3>
                    <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our Website.</p>
                </>
            )
        },
        {
            title: "6. HOW WE SHARE YOUR INFORMATION",
            content: (
                <>
                    <p>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600 mt-3">
                        <li>**Service Providers:** Payment processors, shipping companies, email service providers, and cloud storage providers, who are contractually obligated to protect your information.</li>
                        <li>**Legal Requirements:** In response to court orders, subpoenas, or requests from government authorities.</li>
                        <li>**Business Transfers:** In the event of a merger, acquisition, or sale of assets.</li>
                        <li>**With Your Consent:** When you have given us explicit consent to do so.</li>
                    </ul>
                </>
            )
        },
        {
            title: "7. INTERNATIONAL DATA TRANSFERS",
            content: (
                <p>Your information may be transferred to and maintained on servers located outside of Nigeria. By using our Website, you consent to the transfer of your information to countries that may have different data protection laws than Nigeria. We will take appropriate measures to ensure your information receives an adequate level of protection.</p>
            )
        },
        {
            title: "8. DATA SECURITY",
            content: (
                <p>We implement appropriate technical and organizational security measures to protect your personal information, including **Secure Socket Layer (SSL) encryption** and **secure servers**. However, no method of transmission is 100% secure, and we cannot guarantee its absolute security.</p>
            )
        },
        {
            title: "9. DATA RETENTION",
            content: (
                <>
                    <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
                    <div className="bg-gray-100 p-4 rounded-lg mt-4 text-sm font-medium">
                        <h4 className="font-bold text-gray-800 mb-2">Retention Periods:</h4>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>Transaction and order information: Retained for at least 7 years for tax and accounting purposes</li>
                            <li>Email marketing lists: Retained until you unsubscribe</li>
                            <li>Customer service records: Retained for 3 years after the last interaction</li>
                            <li>Website logs and technical data: Retained for 12 months</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "10. YOUR RIGHTS AND CHOICES",
            content: (
                <>
                    <p>Under Nigerian law (NDPR) and applicable international laws, you have the following rights regarding your personal information:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-4">
                        {[
                            { name: 'Right to Access', desc: 'Request access to the personal information we hold about you.' },
                            { name: 'Right to Rectification', desc: 'Request that we correct any inaccurate or incomplete personal information.' },
                            { name: 'Right to Erasure (Right to be Forgotten)', desc: 'Request that we delete your personal information, subject to legal exceptions.' },
                            { name: 'Right to Restrict Processing', desc: 'Request that we restrict the processing of your personal information under certain circumstances.' },
                            { name: 'Right to Data Portability', desc: 'Request that we transfer your personal information to another organization in a machine-readable format.' },
                            { name: 'Right to Object', desc: 'Object to our processing of your personal information for direct marketing or legitimate interests.' },
                            { name: 'Right to Withdraw Consent', desc: 'Withdraw consent at any time if processing is based on your consent.' },
                            { name: 'Right to Lodge a Complaint', desc: 'Lodge a complaint with the Nigeria Data Protection Commission (NDPC).' },
                        ].map((right, index) => (
                            <div key={index} className="flex items-start">
                                <ChevronRight size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-teal-900">{right.name}</h4>
                                    <p className="text-sm text-gray-600">{right.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h4 className="font-bold text-gray-800 mt-6 mb-2">How to Exercise Your Rights</h4>
                    <p>To exercise any of these rights, please contact us at <a href="mailto:info@achigreens.com" className="text-teal-700 hover:underline">info@achigreens.com</a>. We will respond to your request within 30 days.</p>
                </>
            )
        },
        {
            title: "11. EMAIL COMMUNICATIONS AND OPT-OUT",
            content: (
                <>
                    <p>You cannot opt out of **Transactional Emails** (order confirmations, shipping notifications) as they are necessary to complete your orders. You can opt out of **Marketing Emails** (promotional offers, newsletters) at any time by clicking the "unsubscribe" link or contacting us.</p>
                </>
            )
        },
        {
            title: "12. CHILDREN'S PRIVACY",
            content: (
                <>
                    <p>Our Website is not directed to children under the age of 13. If you believe your child under 13 has provided us with personal information, please contact us immediately. If you are under 18, you must obtain permission from your parent or legal guardian before using our Website.</p>
                </>
            )
        },
        {
            title: "13. LINKS TO THIRD-PARTY WEBSITES",
            content: (
                <p>Our Website may contain links to third-party websites. This Privacy Policy does not apply to those third-party websites. We encourage you to review their privacy policies.</p>
            )
        },
        {
            title: "14. CHANGES TO THIS PRIVACY POLICY",
            content: (
                <p>We reserve the right to update this policy. We will update the **"Last Updated"** date, post the revised policy, and notify you of material changes via email or a prominent notice on our Website. Your continued use constitutes acceptance of the changes.</p>
            )
        },
        {
            title: "15. DATA PROTECTION OFFICER",
            content: (
                <p>We have designated a data protection officer responsible for overseeing our data protection practices. Contact our officer at <a href="mailto:info@achigreens.com" className="text-teal-700 hover:underline">info@achigreens.com</a> for questions about this policy.</p>
            )
        },
        {
            title: "16. CONTACT INFORMATION",
            content: (
                <>
                    <p>If you have any questions, concerns, or complaints about this Privacy Policy, please contact us:</p>
                    <div className="bg-green-50 p-6 rounded-lg shadow-inner mt-4 space-y-3">
                        <div className="flex items-start text-teal-900">
                            <MapPin size={20} className="mt-1 mr-3 flex-shrink-0 text-green-600" />
                            <div>
                                <h5 className="font-bold">AchiGreens LLC</h5>
                                <p className="text-sm">Plot 1&3 Majemi Close by Benode Avenue, Mahuta, Nigeria</p>
                            </div>
                        </div>
                        <div className="flex items-center text-teal-900">
                            <Mail size={20} className="mr-3 flex-shrink-0 text-green-600" />
                            <a href="mailto:info@achigreens.com" className="text-sm font-semibold hover:underline">info@achigreens.com</a>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">We will respond to your inquiry within 30 days or as required by applicable law.</p>
                    </div>
                </>
            )
        },
        {
            title: "17. NIGERIAN DATA PROTECTION COMPLIANCE",
            content: (
                <>
                    <p>We are committed to complying with the Nigeria Data Protection Regulation (NDPR) and all applicable Nigerian data protection laws. We:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 mt-3">
                        <li>Process personal data lawfully, fairly, and in a transparent manner</li>
                        <li>Collect personal data only for specified, explicit, and legitimate purposes</li>
                        <li>Ensure personal data is adequate, relevant, and limited to what is necessary</li>
                        <li>Maintain accurate and up-to-date personal data</li>
                        <li>Retain personal data only for as long as necessary</li>
                        <li>Implement appropriate security measures to protect personal data</li>
                        <li>Respect the rights of data subjects under Nigerian law</li>
                    </ul>
                </>
            )
        },
        {
            title: "18. CONSENT",
            content: (
                <>
                    <p className="text-lg font-semibold text-teal-900">
                        By using our Website and providing your personal information, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
                    </p>
                    <p className="text-gray-600 mt-2">You may withdraw your consent at any time by contacting us at <a href="mailto:info@achigreens.com" className="text-teal-700 hover:underline">info@achigreens.com</a>, subject to legal and contractual restrictions and reasonable notice.</p>
                </>
            )
        },
    ]
};

// Main component that renders the page
export default function PrivacyPolicyPage() {
    return (
        <div className="font-sans bg-white">
            {/* Hero/Title Section */}
            <div className="bg-teal-900 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-xl text-green-300">
                        Last Updated: {policyContent.lastUpdated}
                    </p>
                </div>
            </div>

            {/* Policy Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="space-y-12">
                    {policyContent.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-2xl font-bold text-teal-900 border-b-2 border-green-500 pb-2">
                                {section.title}
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-3">
                                {section.content}
                            </div>
                        </div>
                    ))}

                    {/* Final Acknowledgment */}
                    <div className="border-t-2 border-gray-200 pt-8 mt-12">
                        <p className="text-center text-lg font-medium text-gray-800 italic">
                            **Acknowledgment:** By using the AchiGreens Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
