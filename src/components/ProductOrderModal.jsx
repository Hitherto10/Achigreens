import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Mail, User, Phone } from 'lucide-react';

export default function ProductOrderModal({ product, isOpen, onClose }) {
    const [orderData, setOrderData] = useState({
        fullName: '',
        email: '',
        phone: '',
        orderDetails: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form when product changes
    useEffect(() => {
        if (product) {
            setOrderData({
                fullName: '',
                email: '',
                phone: '',
                orderDetails: ''
            });
        }
    }, [product]);

    const handleChange = (e) => {
        setOrderData({
            ...orderData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            // Create formatted message
            const formattedMessage = `
NEW PRODUCT ORDER REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCT INFORMATION
Product Name: ${product.name}
Price: ₦${product.price}

CUSTOMER DETAILS
Name: ${orderData.fullName}
Email: ${orderData.email}
Phone: ${orderData.phone}

ORDER DETAILS
${orderData.orderDetails}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Please contact the customer to finalize payment and delivery arrangements.
            `.trim();

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "13e03773-4e21-4d6a-8f4e-8a5e66c59ccd",
                    subject: `🛒 New Order: ${product.name} - ${orderData.fullName}`,
                    from_name: orderData.fullName,
                    email: orderData.email,
                    message: formattedMessage,
                    // Additional data fields for reference
                    // "Product": product.name,
                    // "Price": `₦${product.price}`,
                    // "Customer Name": orderData.fullName,
                    // "Customer Phone": orderData.phone,
                    // "Order Requirements": orderData.orderDetails
                }),
            });

            const result = await response.json();

            if (result.success) {
                alert("✅ Order request sent successfully! We will contact you shortly via email or phone.");
                setOrderData({
                    fullName: '',
                    email: '',
                    phone: '',
                    orderDetails: ''
                });
                onClose();
            } else {
                alert("❌ Failed to send order request. Please try again or contact us directly.");
            }
        } catch (error) {
            console.error("Order submission error:", error);
            alert("⚠️ An error occurred. Please try again or email us at info@achigreens.com");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 font-[Outfit] flex items-center justify-center p-4 animate-fadeIn">
            <div className="h-full w-full bg-black absolute -z-10 opacity-75" onClick={onClose}></div>
            <div className="bg-white rounded-xl shadow-2xl no-scrollbar max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-t-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <ShoppingBag size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Place an Order</h2>
                            <p className="text-green-100 text-sm">Complete the form to request your order</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Product Summary */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                            <p className="text-2xl font-bold text-green-600 mt-2">₦{product.price}</p>
                        </div>
                    </div>
                </div>

                {/* Order Form */}
                <div className="p-6">
                    <p className="text-gray-600 mb-6 text-sm">
                        Please provide your contact information and order requirements.
                        We'll reach out to you shortly to finalize the details and arrange payment.
                    </p>

                    <div className="space-y-4">
                        {/* Full Name */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <User size={20} />
                            </div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name *"
                                value={orderData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Mail size={20} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={orderData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Phone size={20} />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number *"
                                value={orderData.phone}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                            />
                        </div>

                        {/* Order Details */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Order Details *
                            </label>
                            <textarea
                                name="orderDetails"
                                placeholder="Please describe your order requirements (quantity, delivery location, any special requests, etc.)"
                                value={orderData.orderDetails}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-green-500 focus:bg-white focus:outline-none transition-all resize-none"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Include quantity needed, delivery address, preferred delivery date, and any other requirements.
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 space-y-4">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <ShoppingBag size={20} />
                                    Submit Order Request
                                </>
                            )}
                        </button>

                        <button
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-500 text-center mt-6">
                        By submitting this order, you agree to our{' '}
                        <a href="/privacy-policy" className="text-green-600 hover:text-green-700 underline">
                            Privacy Policy
                        </a>
                        {' '}and{' '}
                        <a href="/terms" className="text-green-600 hover:text-green-700 underline">
                            Terms & Conditions
                        </a>
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .no-scrollbar {
                    scrollbar-width: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}