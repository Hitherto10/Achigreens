import React, { useCallback, useMemo, useState } from 'react';
import { Phone, Users, Award, CheckCircle2, ThumbsUp, ChevronLeft, ChevronRight} from 'lucide-react';
import { Images } from '../images';
import { categories, products as productsData, testimonials as testimonialsData, services as servicesData } from '../data/siteContent';
import ProductCard from '../components/ProductCard';
import ServicesSection from '../components/ServicesSection';


export default function Home() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentSlide, setCurrentSlide] = useState(0);
    const products = productsData;
    const testimonials = testimonialsData;
    const services = servicesData;

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') return products;
        return products.filter((p) => p.category === activeCategory);
    }, [activeCategory, products]);

    const handleAddToCart = useCallback((product) => {
        // Placeholder: static site showcase; replace with real cart integration later
        console.info('Add to cart clicked', product);
        // No alert for security/UX reasons; log only in dev tools
    }, []);

    const workSteps = [
        { number: "01", title: "Prepare the soil" },
        { number: "02", title: "Farm the seeds" },
        { number: "03", title: "Water the plants" },
        { number: "04", title: "Fertilize the Farm" }
    ];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const stats = [
        {
            number: '200',
            label: 'Team member',
            icon: <Users size={32} className="text-green-500" />
        },
        {
            number: '300k',
            label: 'Winning award',
            icon: <Award size={32} className="text-green-500" />
        },
        {
            number: '100',
            label: 'Complete project',
            icon: <CheckCircle2 size={32} className="text-green-500" />
        },
        {
            number: '900',
            label: 'Client review',
            icon: <ThumbsUp size={32} className="text-green-500" />
        }
    ];

    const partners = [
        { name: 'Aroma', text: 'aroma' },
        { name: 'Leaves', text: 'Leaves' },
        { name: 'Natureleave', text: 'Natureleave' },
        { name: 'Nature', text: 'nature' },
        { name: 'Natural', text: 'natural' }
    ];

    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#eff3ed]">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">{/* CHANGED FOR MOBILE: reduced padding */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">{/* CHANGED FOR MOBILE: single column */}
                        {/* Left Content */}
                        <div className="space-y-4 sm:space-y-6">{/* CHANGED FOR MOBILE: tighter spacing */}
                            <p className="text-green-500 font-medium font-[Mali] text-base sm:text-lg tracking-wide">{/* CHANGED FOR MOBILE: smaller text */}Farming for tomorrow</p>
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-[600] text-teal-900 leading-tight">{/* CHANGED FOR MOBILE: responsive heading */}
                                Seed to harvest,<br />
                                <span className="text-teal-700">all the way</span> to<br />
                                <span className="text-gray-500 font-light">consumption</span>
                            </h1>
                            <p className="text-gray-600 max-w-md font-[Montserrat] text-sm sm:text-base">{/* CHANGED FOR MOBILE: font size */}
                                A dynamic and versatile farming business, that has proved itself in several aspects of farming
                                over time.
                            </p>
                            <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-4">{/* CHANGED FOR MOBILE: tighter spacing */}
                                <button className="border-2 font-[Outfit] border-green-500 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-colors">{/* CHANGED FOR MOBILE: smaller padding */}
                                    Contact Us →
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">{/* CHANGED FOR MOBILE: smaller icon container */}
                                        <Phone className="text-white" size={18} />{/* CHANGED FOR MOBILE: icon size */}
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm font-[Outfit] text-gray-600">Need help?</p>
                                        <a href="tel:+2348177111731" className="font-semibold text-gray-800 hover:underline">+234 817 711 1731</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image with Geometric Shapes */}
                        <div className="relative h-72 sm:h-96 lg:h-[600px]">{/* CHANGED FOR MOBILE: responsive height */}
                             {/*Geometric Decorations - Behind*/}
                            <div className="absolute top-0 left-0 w-full h-full hidden lg:block">{/* CHANGED FOR MOBILE: hide heavy shapes */}
                                <div className="absolute -top-20 -right-32 w-96 h-[700px] bg-green-500 transform rotate-45 opacity-90"></div>
                                <div className="absolute top-32 -right-20 w-80 h-[600px] bg-yellow-400 transform rotate-45 opacity-80"></div>
                                <div className="absolute -bottom-10 right-40 w-72 h-[500px] bg-green-600 transform rotate-45 opacity-70"></div>
                            </div>

                            {/* Image - Blended with shapes */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 max-w-sm h-64 sm:h-80 lg:w-[450px] lg:h-[550px]">{/* CHANGED FOR MOBILE: fluid sizing */}
                                <div className="relative w-full h-full">
                                    {/* Main Image */}
                                    <img
                                        src={`${Images.hero_section_image}`}
                                        alt="Smiling farmer with harvest box"
                                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                                    />

                                    {/* Overlapping geometric accent */}
                                    <div className=" hidden absolute sm:block -bottom-6 -left-6 w-28 h-28 sm:w-40 sm:h-40 bg-yellow-400 rounded-lg z-10"></div>{/* CHANGED FOR MOBILE: scaled accent */}
                                    <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-500 rounded-full z-10 opacity-80"></div>{/* CHANGED FOR MOBILE: hide small circle on mobile */}
                                </div>
                            </div>

                             {/*Foreground geometric shapes*/}
                            <div className="hidden md:block absolute bottom-20 left-0 w-24 h-24 bg-yellow-300 rounded-lg transform rotate-12 opacity-90"></div>{/* CHANGED FOR MOBILE: hide */}
                        </div>
                    </div>
                </div>
            </section>

            {/*Why Choose Us section*/}
            <section className="py-6 max-w-7xl m-auto lg:py-20 px-4 bg-gray-50">{/* CHANGED FOR MOBILE: reduced padding */}
                <div className="max-w-7xl mx-auto">
                    <div className=" p-3 flex flex-wrap lg:flex-nowrap  gap-8 md:gap-16 items-center sm:flex-row-reverse">

                        {/* Right Side - Content */}
                        <div className="space-y-4 lg:flex-1 sm:space-y-6">{/* CHANGED FOR MOBILE: tighter spacing */}
                            <p className="text-green-500 font-medium font-[Mali] text-base sm:text-lg">{/* CHANGED FOR MOBILE: smaller text */}Why Choose Us</p>

                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-teal-900 leading-tight">{/* CHANGED FOR MOBILE: responsive heading */}
                                A Dynamic Partner in Farming, Wellness, and Sustainability
                            </h2>

                            <p className="text-gray-600 leading-relaxed font-[Montserrat] text-sm sm:text-base">{/* CHANGED FOR MOBILE: font size */}
                                We are a flexible farming business with proven experience across multiple aspects of agriculture. From specialized consultancy services for individuals and NGOs to our dedication to healthy living and sustainability, we offer solutions that extend far beyond the farm gate.
                            </p>

                            {/* Checklist Items */}
                            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">{/* CHANGED FOR MOBILE: tighter spacing */}
                                <div className="flex items-center gap-2 sm:gap-3 font-[Montserrat]">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />{/* CHANGED FOR MOBILE: icon size */}
                                    <p className="text-gray-700 text-sm sm:text-base">Comprehensive Consultancy (from soil testing to waste management).</p>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3 font-[Montserrat]">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                    <p className="text-gray-700 text-sm sm:text-base">Specialists in Exotic Fruits and Vegetables, including on-demand growing.</p>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3 font-[Montserrat]">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                    <p className="text-gray-700 text-sm sm:text-base">Extending service to Dietary Wellness and Beauty Therapy using fresh produce.</p>
                                </div>
                            </div>
                        </div>


                        {/* Left Side - Image with Shapes */}

                        <div className="relative mx-auto lg:flex-1 m-auto w-[580px] h-[400px]">
                            {/* Farmer Image */}
                            <div className="absolute hidden md:block top-0 left-0 w-[280px] h-[400px] rounded-tl-[100px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] overflow-hidden shadow-xl">
                                <img
                                    src={`${Images.content_image_1}`}
                                    alt="Happy farmer with vegetables"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Chicken Image */}
                            <div className="md:absolute m-auto md:top-30 md:right-20 w-[340px] h-[320px] rounded-tl-[80px] rounded-tr-[100px] rounded-br-[80px] rounded-bl-[100px] overflow-hidden shadow-xl">
                                <img
                                    src={`${Images.content_image_2}`}
                                    alt="Chicken on farm"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Services Section*/}
            <section className="py-6 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <p className="text-green-500 font-medium font-[Mali] text-lg tracking-wider uppercase mb-3">OUR SERVICES</p>
                        <h2 className="text-5xl font-serif text-gray-800">
                            Nourishing the world<br />
                            from seed to table
                        </h2>
                    </div>

                    {/* Service Cards */}
                    <ServicesSection services={services} />
                </div>
            </section>

            {/*/!* Gallery & Stats Section *!/*/}
            <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-100">{/* CHANGED FOR MOBILE: reduced padding */}
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">{/* CHANGED FOR MOBILE: reduced margin */}
                        <p className="text-green-500 font-medium font-[Mali] text-sm sm:text-base tracking-wider uppercase mb-2 sm:mb-3">{/* CHANGED FOR MOBILE: font size */}OUR
                            GALLARY</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">{/* CHANGED FOR MOBILE: responsive heading */}
                            Bringing natures bounty<br/>
                            to you.
                        </h2>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">{/* CHANGED FOR MOBILE: single column base */}
                        <div className="grid gap-4 ">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_horizontal_1}`}
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src={`${Images.gallery_vertical_1}`}
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_horizontal_2}`}
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_vertical_2}`}
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_horizontal_3}`}
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src={`${Images.gallery_horizontal_4}`}
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_horizontal_5}`}
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center "
                                    src={`${Images.gallery_horizontal_6}`}
                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_vertical_3}`}

                                    alt="gallery-photo"
                                />
                            </div>
                        </div>


                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_vertical_4}`}

                                    alt="gallery-photo"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover object-center"
                                    src={`${Images.gallery_vertical_5}`}
                                    alt="gallery-photo"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Stats Section */}
                    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12 mt-10 sm:mt-12 lg:mt-16">{/* CHANGED FOR MOBILE: tighter spacing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">{/* CHANGED FOR MOBILE: responsive grid */}
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-3 sm:mb-4">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 sm:mb-2">{/* CHANGED FOR MOBILE: responsive number */}
                                        {stat.number}<span className="text-green-500">+</span>
                                    </div>
                                    <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/*/!* Testimonials & Collage Section *!/*/}
            <section className="pt-12 sm:pt-16 lg:pt-20 px-4">{/* CHANGED FOR MOBILE: reduced top padding */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Left Side - Testimonial Card */}
                        <div className={`col-span-2 lg:col-span-1`}>
                            <p className="text-green-500 font-medium font-[Mali] text-sm sm:text-base mb-3 sm:mb-4">{/* CHANGED FOR MOBILE: smaller text */}Testimonial</p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight mb-6 sm:mb-10 lg:mb-12">{/* CHANGED FOR MOBILE: responsive heading */}
                                Growing strong feeding<br/>
                                farming futures
                            </h2>

                            {/* Testimonial Card */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative">{/* CHANGED FOR MOBILE: tighter padding */}
                                {/* Quote Icon */}
                                <div
                                    className="absolute top-6 sm:top-8 left-6 sm:left-10 text-yellow-400 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none opacity-20">{/* CHANGED FOR MOBILE: responsive quote size/position */}
                                    "
                                </div>

                                {/* Testimonial Content */}
                                <div className="relative z-10">
                                    {/* Profile Section */}
                                    <div className="flex items-center gap-4 mb-6">
                                        {/* CHANGED FOR MOBILE: responsive avatar */}
                                        <img
                                            src={testimonials[currentSlide].image}
                                            alt={testimonials[currentSlide].name}
                                            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl object-cover"
                                        />
                                        <div>
                                            {/* CHANGED FOR MOBILE: responsive */}
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                                {testimonials[currentSlide].name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {testimonials[currentSlide].role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-600 font-[Montserrat] text-sm leading-relaxed">
                                        {testimonials[currentSlide].text}
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex m-auto content-center justify-center items-center gap-4 mt-8">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors">{/* CHANGED FOR MOBILE: smaller buttons */}
                                    <ChevronLeft size={24}/>
                                </button>

                                {/* Progress Dots */}
                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1 rounded-full transition-all ${
                                                index === currentSlide ? "w-12 bg-green-500" : "w-8 bg-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors">{/* CHANGED FOR MOBILE: smaller buttons */}
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Images Collage */}
                        <div className="hidden lg:block relative h-[600px]">
                            {/* Main Farmer Image */}
                            <div className="absolute top-0 right-0 w-[500px] h-[450px] rounded-tl-[200px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[200px] overflow-hidden shadow-2xl z-10">
                                <img
                                    src={`${Images.content_image_6}`}
                                    alt="Farmer in field"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Corn Image */}
                            <div className="absolute bottom-12 left-0 w-[240px] h-[280px] rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[40px] rounded-br-[80px] overflow-hidden shadow-xl z-20">
                                <img
                                    src={`${Images.content_image_7}`}
                                    alt="Fresh corn"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute bottom-16 right-12 bg-yellow-400 rounded-2xl p-6 shadow-xl z-30 min-w-[200px]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <Award className="text-yellow-500" size={28} />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-gray-800">4k+</div>
                                        <div className="text-sm text-gray-700 font-medium">Happy Customer</div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Decorative Shape */}
                            <div className="absolute top-20 left-20 w-80 h-80 bg-green-100 rounded-full -z-10 opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/*AchiGreens Partners*/}
                <section className="relative py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gray-100 p-6 md:p-8 rounded-3xl">
                            {/* Desktop/Tablet - Static Row */}
                            <div className="hidden md:flex items-center justify-between gap-6 lg:gap-12">
                                {partners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex items-center justify-center group cursor-pointer min-w-0"
                                    >
                                        <div className="text-center">
                                            <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg
                                                    className="w-6 h-6 lg:w-8 lg:h-8 text-gray-600 flex-shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.24C8.1 17.77 9.5 14 17 14V8zm-5 12c0-2.76 2.24-5 5-5v-3c-4.42 0-8 3.58-8 8h3z" />
                                                </svg>
                                                <span className="text-lg lg:text-2xl font-light text-gray-700 tracking-wide truncate">
                                                    {partner.text}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">Loremipsum</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile - Horizontal Scrollable Carousel */}
                            <div className="md:hidden">
                                <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                                    {partners.map((partner, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 w-48 snap-center"
                                        >
                                            <div className="text-center p-4">
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    <svg
                                                        className="w-8 h-8 text-gray-600"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.24C8.1 17.77 9.5 14 17 14V8zm-5 12c0-2.76 2.24-5 5-5v-3c-4.42 0-8 3.58-8 8h3z" />
                                                    </svg>
                                                    <span className="text-xl font-light text-gray-700 tracking-wide">
                                                        {partner.text}
                                                    </span>
                                                    <p className="text-xs text-gray-400">Loremipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Scroll Hint */}
                                <div className="text-center mt-2">
                                    <p className="text-xs text-gray-400">← Swipe to see more →</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                Trusted by <span className="font-semibold text-green-600">{partners.length}+</span> industry leaders
                            </p>
                        </div>
                    </div>

                    <style jsx>{`
                            .scrollbar-hide::-webkit-scrollbar {
                              display: none;
                            }
                            .scrollbar-hide {
                              -ms-overflow-style: none;
                              scrollbar-width: none;
                            }
                        `}
                    </style>
                </section>
            </section>

            {/*/!*About Us Section*!/*/}
            <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap sm:flex-row-reverse gap-8 items-start">
                        {/* Right Side - Content */}
                        <div className={`lg:flex-1`}>
                            {/*About us Introduction*/}
                            <div className={`flex flex-col space-y-4`}>
                                <span className="text-green-500 font-medium font-[Mali] text-3xl ">About Us</span>
                                {/*<h2 className="text-3xl sm:text-3xl lg:text-4xl font-[Outfit] text-gray-800 leading-tight mb-2">/!* CHANGED FOR MOBILE: responsive heading *!/*/}
                                {/*    About Us*/}
                                {/*</h2>*/}

                                <p className="text-gray-600 font-[Outfit] leading-relaxed mb-3">
                                    Achigreens is a dynamic and versatile farming enterprise dedicated to advancing modern agriculture across Africa. Over the years, we have established ourselves as a trusted name in sustainable farming, agricultural consultancy, and the supply of fresh, high-quality produce.
                                    Our mission is to connect people to healthier living by cultivating nutritious food, supporting eco-friendly farming practices, and empowering communities through agricultural education and innovation.
                                </p>
                            </div>


                            {/* Mission & Vision Buttons */}
                            <div className="space-y-4 font-[Outfit] text-center ">

                                <div className="w-full flex flex-col items-center p-4 bg-yellow-400 hover:bg-yellow-500 rounded-2xl transition-colors group shadow-lg ">
                                    <span className="text-lg font-semibold text-gray-800">Mission Statement</span>
                                    <p className="text-gray-600 leading-relaxed">
                                        To cultivate growth through innovation, education, and integrity, transforming agriculture into a tool for better living, stronger communities, and a greener planet.
                                    </p>
                                </div>

                                <div className="w-full flex flex-col items-center p-4 bg-green-600 hover:bg-green-700 rounded-2xl transition-colors group shadow-lg">
                                    <span className="text-lg font-semibold text-white">Our Mission & Vision</span>
                                    <p className="text-gray-200 leading-relaxed">
                                        To be a leading force in sustainable agriculture, one that inspires healthier communities, nurtures the environment, and sets new standards in agricultural excellence.
                                    </p>
                                </div>

                                <div className="w-full flex flex-col items-center p-4 bg-lime-400 hover:bg-lime-500 rounded-2xl transition-colors group shadow-lg">
                                    <span className="text-lg font-semibold text-white">Our Impact</span>
                                    <p className="text-gray-600 leading-relaxed">
                                        Achigreens has: Supported communities with reliable agricultural guidance and training, partnered with local and international organizations to promote sustainable farming. Empowered individuals and families to embrace healthier lifestyles through diet and natural therapies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*Left Side*/}
                        <div className="hidden lg:block place-items-center lg:flex-1  m-auto mx-auto  relative">
                            {/* Main Image */}
                            <div className="relative w-3/4 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={`${Images.about_us_temp}`}
                                    alt="Farmer with milk bottle"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">{/* CHANGED FOR MOBILE: reduced padding */}
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-6 mb-8 sm:mb-10 lg:mb-12">{/* CHANGED FOR MOBILE: stack header */}
                        <div>
                            <p className="text-green-500 font-medium font-[Mali] text-lg mb-3">Our Future</p>
                            <h2 className="text-5xl font-serif text-gray-800 leading-tight">
                                Nourishing the world<br />
                                from seed to table
                            </h2>
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                                        activeCategory === category
                                            ? 'bg-green-500 text-white shadow-lg'
                                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-500'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center">
                        {/* Left Side Main Image */}
                        <div className="hidden lg:block relative w-3/4 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={`${Images.content_image_3}`}
                                alt="Farmer with milk bottle"
                                className="object-cover"
                            />
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className={`border col-span-2 lg:col-span-1 border-gray-200 shadow-lg h-full items-center rounded-3xl p-12`}>
                            <p className="text-green-500 font-medium font-[Mali] text-xl mb-4">Contact</p>
                            <h2 className="text-5xl font-serif text-gray-800 mb-10">
                                Get Touch Here
                            </h2>

                            <div className="space-y-5">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                {/* Subject */}
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                                />

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-6 py-4 rounded-3xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors resize-none"
                                />

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="bg-green-500 hover:bg-green-600 text-white font-medium px-10 py-4 rounded-full transition-colors shadow-lg"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}