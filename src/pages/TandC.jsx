
import React from "react";

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-green-50 py-16 px-6 sm:px-10 lg:px-20 font-[Outfit] text-gray-800">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-green-800 mb-6 text-center">
                    Terms and Conditions
                </h1>

                <p className="text-center text-sm text-gray-500 mb-10">
                    Last Updated: October 16, 2025
                </p>

                {/* INTRODUCTION */}
                <section className="space-y-4 mb-10">
                    <h2 className="text-2xl font-serif font-semibold text-green-700">
                        1. Introduction
                    </h2>
                    <p>
                        These Terms and Conditions ("Terms", "Agreement") constitute a legally
                        binding agreement between you ("User", "you", "your") and AchiGreens
                        LLC ("Company", "we", "us", "our"), a business entity established under
                        the laws of Nigeria, governing your access to and use of the
                        https://achigreens.com/ website ("Website", "Service").
                    </p>
                    <p>
                        By accessing or using our Website, you acknowledge that you have read,
                        understood, and agree to be bound by these Terms. If you do not agree
                        to these Terms, you must not access or use our Website.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        <p className="font-medium">Company Information:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Legal Name: AchiGreens LLC</li>
                            <li>
                                Business Address: Plot 1&3 Majemi Close by Benode Avenue, Mahuta,
                                Nigeria
                            </li>
                            <li>Email: info@achigreens.com</li>
                        </ul>
                    </div>
                </section>

                {/* CONTENT SECTIONS */}
                <div className="space-y-8">
                    {[
                        {
                            title: "2. Acceptance of Terms",
                            content: [
                                "By accessing, browsing, or purchasing products from https://achigreens.com/, you confirm that:\n" +
                                "- You are at least 18 years of age or have reached the age of majority in your jurisdiction\n" +
                                "- You have the legal capacity to enter into this binding agreement\n" +
                                "- You will comply with all applicable local, state, national, and international laws and regulations\n" +
                                "- All information you provide is accurate, current, and complete"
                            ]
                        },
                        {
                            title: "3. Modifications to Terms",
                            content: [
                                "We reserve the right to modify, amend, or update these Terms at any time at our sole discretion. Changes will be effective immediately upon posting to the Website with an updated \"Last Updated\" date. Your continued use of the Website after any modifications constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically. If you do not agree to the modified Terms, you must immediately cease using the Website."
                            ]
                        },
                        {
                            title: "4. Use of the Website",
                            content: [
                                ]
                        },
                        {
                            title: "4.1 License to Use",
                            content: [
                                "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Website for personal, non-commercial purposes."
                            ]
                        },
                         {
                            title: "4.2 Prohibited Activities",
                            content: [
                                "You agree not to:\n" +
                                "- Use the Website for any unlawful purpose or in violation of these Terms\n" +
                                "- Attempt to gain unauthorized access to any portion of the Website, other users' accounts, or any systems or networks connected to the Website\n" +
                                "- Interfere with or disrupt the integrity or performance of the Website or its data\n" +
                                "- Use any robot, spider, scraper, or other automated means to access the Website\n" +
                                "- Transmit any viruses, malware, or other malicious code\n" +
                                "- Reverse engineer, decompile, or disassemble any aspect of the Website\n" +
                                "- Remove, alter, or obscure any proprietary notices on the Website\n" +
                                "- Use the Website to transmit spam, chain letters, or other unsolicited communications\n" +
                                "- Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity\n" +
                                "- Collect or harvest any personally identifiable information from the Website\n" +
                                "- Engage in any activity that could damage, disable, overburden, or impair the Website"
                            ]
                        },
                        {
                            title: "4.3 Account Creation",
                            content: [
                                "Our Website does not require or permit user account creation. All transactions and interactions are conducted without user registration."
                            ]
                        },

                        {
                            title: "5. Products and Services",
                            content: []
                        },
                        {
                            title: " 5.1 Product Information",
                            content: [
                                "We strive to provide accurate product descriptions, images, and pricing on our Website. However, we do not warrant that product descriptions, images, pricing, or other content on the Website is accurate, complete, reliable, current, or error-free. Product images are for illustrative purposes and may not exactly represent the actual product."
                            ]
                        },
                         {
                            title: "5.2 Pricing and Availability",
                            content: [
                                "- All prices are displayed in the currency specified on the Website and are subject to change without notice\n" +
                                "- We reserve the right to modify product prices at any time\n" +
                                "- We make reasonable efforts to ensure product availability, but we do not guarantee that products will be in stock\n" +
                                "- We reserve the right to limit quantities purchased per person, household, or order\n" +
                                "- We reserve the right to refuse or cancel any order at our sole discretion\n"
                            ]
                        },
                        {
                            title: "5.3 Product Accuracy",
                            content: [
                                "In the event of a pricing or product description error, we reserve the right to refuse or cancel any orders placed for products listed at the incorrect price or with incorrect information, regardless of whether the order has been confirmed."
                            ]
                        },

                        {
                            title: "6. Purchases and Payments",
                            content: []
                        },
                        {
                            title: "6.1 Purchase Process",
                            content: [
                                "When you place an order through our Website, you are making an offer to purchase the products subject to these Terms. We reserve the right to accept or reject your offer at our sole discretion. A binding contract is formed only when we confirm acceptance of your order."
                            ]
                        },
                        {
                            title: "6.2 Payment Terms",
                            content: [
                                "- Payment is required at the time of purchase\n" +
                                "- We accept payment methods as indicated on the Website\n" +
                                "- All payments are one-time transactions; we do not offer subscription plans\n" +
                                "- You represent and warrant that you have the legal right to use any payment method you provide\n" +
                                "- You agree to provide current, complete, and accurate payment information\n" +
                                "- You agree to pay all charges incurred by you or on your behalf through the Website, including applicable taxes and shipping fees"
                            ]
                        },
                        {
                            title: "6.3 Payment Processing",
                            content: [
                                "Payment processing may be handled by third-party payment processors. Your use of such services is governed by their respective terms and conditions and privacy policies. We are not responsible for errors or issues related to third-party payment processors."
                            ]
                        },
                         {
                            title: "6.4 Taxes",
                            content: [
                                "You are responsible for any and all applicable taxes associated with your purchase, including but not limited to sales tax, value-added tax (VAT), goods and services tax (GST), or other similar taxes.\n"
                            ]
                        },

                        {
                            title: "7. Shipping and Delivery",
                            content: []
                        },
                        {
                            title: "7.1 Shipping",
                            content: [
                                "- We ship to addresses as specified during the checkout process\n" +
                                "- Shipping times are estimates and are not guaranteed\n" +
                                "- Risk of loss and title for products pass to you upon delivery to the carrier\n" +
                                "- We are not responsible for delays caused by customs, shipping carriers, or events beyond our reasonable control"
                            ]
                        },
                         {
                            title: "7.2 Delivery Issues",
                            content: [
                                "If products are lost, damaged, or delayed during shipping, please contact us at info@achigreens.com. We will work with you and the shipping carrier to resolve the issue, but we are not liable for shipping carrier errors or delays."
                            ]
                        },

                        {
                            title: "8. Returns, Refunds, and Cancellations",
                            content: []
                        },
                        {
                            title: "8.1 Return Policy",
                            content: [
                                "Our return and refund policy, if applicable, is governed by Nigerian consumer protection laws and will be detailed separately on our Website or provided upon request. Please contact us at info@achigreens.com for information regarding returns and refunds."
                            ]
                        },
                        {
                            title: "8.2 Order Cancellation",
                            content: [
                                "We reserve the right to refuse or cancel any order for any reason, including but not limited to:\n" +
                                "- Product unavailability\n" +
                                "- Errors in product or pricing information\n" +
                                "- Suspected fraudulent or unauthorized transactions\n" +
                                "- Orders that violate these Terms",
                                "If your order is cancelled after payment has been processed, we will issue a refund to your original payment method."
                            ]
                        },


                        {
                            title: "9. Intellectual Property Rights",
                            content: []
                        },
                        {
                            title: "9.1 Limited License",
                            content: [
                                "Your use of the Website does not grant you ownership of any content, code, data, or materials you may access on the Website. You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any material from our Website without our prior written consent, except as follows:\n" +
                                "- Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials\n" +
                                "- You may store files that are automatically cached by your web browser for display enhancement purposes\n" +
                                "- You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use"
                            ]
                        },

                        {
                            title: "10. User Content",
                            content: []
                        },
                        {
                            title: "10.1 No User-Generated Content",
                            content: [
                                "Our Website does not permit users to create, upload, post, or submit any content, including but not limited to text, images, videos, or other materials. Any attempt to upload or submit content to the Website is a violation of these Terms.\n"
                            ]
                        },

                        {
                            title: "11. Disclaimer of Warranties",
                            content: [
                                "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE AND ALL PRODUCTS AND SERVICES PROVIDED THROUGH THE WEBSITE ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:\n" +
                                "\n" +
                                "- IMPLIED WARRANTIES OF MERCHANTABILITY\n" +
                                "- IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE\n" +
                                "- IMPLIED WARRANTIES OF NON-INFRINGEMENT\n" +
                                "- WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE\n" +
                                "\n" +
                                "WE DO NOT WARRANT THAT:\n" +
                                "- The Website will function uninterrupted, secure, or error-free\n" +
                                "- Defects will be corrected\n" +
                                "- The Website or the servers that make it available are free of viruses or other harmful components\n" +
                                "- The Website will meet your requirements\n" +
                                "- The results obtained from the use of the Website will be accurate or reliable\n" +
                                "\n" +
                                "Your use of the Website is at your sole risk. Any material downloaded or otherwise obtained through the use of the Website is done at your own discretion and risk, and you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material."
                            ]
                        },
                        {
                            title: "12. Limitation of Liability",
                            content: [
                                "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ACHIGREENS LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR:\n" +
                                "\n" +
                                "- ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES\n" +
                                "- ANY LOSS OF PROFITS, REVENUE, DATA, OR USE\n" +
                                "- ANY LOSS OF GOODWILL OR BUSINESS OPPORTUNITY\n" +
                                "- ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE WEBSITE\n" +
                                "- ANY DAMAGES ARISING FROM ANY PRODUCTS PURCHASED THROUGH THE WEBSITE\n" +
                                "- ANY DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA\n" +
                                "\n" +
                                "WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n" +
                                "\n" +
                                "THE TOTAL LIABILITY OF ACHIGREENS LLC TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT, INCLUDING NEGLIGENCE, OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT YOU PAID TO US FOR PRODUCTS PURCHASED THROUGH THE WEBSITE IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED THOUSAND NIGERIAN NAIRA (NGN 100,000), WHICHEVER IS LESS.\n" +
                                "\n" +
                                "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW."
                            ]
                        },
                        {
                            title: "13. Indemnification",
                            content: [
                                "You agree to defend, indemnify, and hold harmless AchiGreens LLC, its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorney's fees) arising from:\n" +
                                "\n" +
                                "- Your use of and access to the Website\n" +
                                "- Your violation of any term of these Terms\n" +
                                "- Your violation of any third-party right, including any intellectual property right, privacy right, or proprietary right\n" +
                                "- Your violation of any applicable law or regulation\n" +
                                "- Any products you purchase through the Website\n" +
                                "- Any claim that your use of the Website caused damage to a third party\n" +
                                "\n" +
                                "This defense and indemnification obligation will survive these Terms and your use of the Website."
                            ]
                        },
                        {
                            title: "14. Third-Party Links and Services",
                            content: [
                                "The Website may contain links to third-party websites, applications, or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.\n" +
                                "\n" +
                                "We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit."
                            ]
                        },
                        {
                            title: "15. Privacy and Data Protection",
                            content: [
                                "Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Website, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.\n" +
                                "\n" +
                                "We are committed to protecting your privacy and handling your personal data in accordance with applicable Nigerian data protection laws, including the Nigeria Data Protection Regulation (NDPR)."
                            ]
                        },
                        {
                            title: "16. Governing Law and Jurisdiction",
                            content: [
                                "These Terms are governed by the laws of the Federal Republic of Nigeria. Any legal disputes shall be resolved in the courts located in Mahuta, Nigeria."
                            ]
                        },
                        {
                            title: "17. Force Majeure",
                            content: [
                                "We shall not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.\n"
                            ]
                        },
                        {
                            title: "18. Severability",
                            content: [
                                "If any provision of these Terms is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that most closely matches the intent of the original provision."
                            ]
                        },
                        {
                            title: "19. Waiver",
                            content: [
                                "No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision."
                            ]
                        },
                        {
                            title: "20. Entire Agreement",
                            content: [
                                "These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Website, constitute the entire agreement between you and AchiGreens LLC concerning your use of the Website and supersede all prior or contemporaneous communications, agreements, and understandings, whether oral or written, between you and us regarding the subject matter hereof."
                            ]
                        },
                        {
                            title: "21. Assignment",
                            content: [
                                "You may not assign, transfer, or delegate any of your rights or obligations under these Terms without our prior written consent. We may freely assign, transfer, or delegate our rights and obligations under these Terms without restriction. Any attempted assignment in violation of this section shall be null and void."
                            ]
                        },
                        {
                            title: "22. Survival",
                            content: [
                                "All provisions of these Terms which by their nature should survive termination shall survive termination, including but not limited to ownership provisions, warranty disclaimers, indemnification obligations, and limitations of liability."
                            ]
                        },
                        {
                            title: "23. Electronic Communications",
                            content: [
                                "By using the Website, you consent to receive electronic communications from us. These electronic communications may include notices about your purchases, transactional information, and other information concerning or related to the Website. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing."
                            ]
                        },
                        {
                            title: "24. Contact Information",
                            content: [
                                "If you have any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at:\n" +
                                "\n" +
                                "**AchiGreens LLC**  \n" +
                                "Plot 1&3 Majemi Close by Benode Avenue  \n" +
                                "Mahuta, Nigeria  \n" +
                                "Email: info@achigreens.com"
                            ]
                        },
                        {
                            title: "25. Acknowledgment",
                            content: [
                                "BY USING THE WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THE WEBSITE."
                            ]
                        }
                    ].map((section, index) => (
                        <section key={index}>
                            <h2 className="text-2xl font-serif font-semibold text-green-700 mb-3">
                                {section.title}
                            </h2>
                            {section.content.map((para, i) => (
                                <p key={i} className="mb-3 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </section>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 text-center border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-500 italic">
                        End of Terms and Conditions
                    </p>
                </div>
            </div>
        </div>
    );
}