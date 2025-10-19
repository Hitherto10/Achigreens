import React, { useState } from "react";
import {Briefcase, Mail, MessageSquare, Phone, User} from "lucide-react";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        serviceInterest: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "13e03773-4e21-4d6a-8f4e-8a5e66c59ccd",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert("Message sent successfully!");
                setFormData({ fullName: "", email: "", message: "" , phone: "", serviceInterest: ""});
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                    {/* Full Name */}
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                            <User size={20} />
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name *"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail size={20} />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                        />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                            <Phone size={20} />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number *"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                        />
                    </div>

                    {/* Service Interest */}
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                            <Briefcase size={20} />
                        </div>
                        <select
                            name="serviceInterest"
                            value={formData.serviceInterest}
                            onChange={handleChange}
                            required
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="">Service of Interest *</option>
                            <option value="consulting">Farm Consulting</option>
                            <option value="equipment">Equipment & Supplies</option>
                            <option value="training">Training & Education</option>
                            <option value="sustainable">Sustainable Solutions</option>
                            <option value="livestock">Livestock Management</option>
                            <option value="crop">Crop Management</option>
                            <option value="other">Other Services</option>
                        </select>
                    </div>

                    {/*Message*/}
                    <div className="relative">
                        <div className="absolute left-5 top-5 text-gray-400">
                            <MessageSquare size={20} />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Tell us about your farming needs and how we can help... *"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all resize-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] mt-2"
                    style={{
                        cursor: isSubmitting ? "not-allowed" : "pointer"
                    }}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </>
    );
}

export default ContactForm;