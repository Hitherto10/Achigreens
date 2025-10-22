// Centralized static content and configuration for the Achigreens static site.
// Keeping this JSON-like and side-effect free allows reuse across components and easier future i18n.


import {Images} from "../images.jsx";
import ginger_product_picture from "../assets/Images/ginger_product_picture.jpg";

export const navItems = [
  { key: 'home',  label: 'Home', hasDropdown: false },
  { key: 'about',  label: 'About Us', hasDropdown: false },
  { key: 'products',  label: 'Products', hasDropdown: false },
  { key: 'service', label: 'Service', hasDropdown: false },
];

export const categories = [
    'All',
  'Fresh',
  'Organic',
  'Vegetables'];

export const products = [
  {
    id: 1,
    name: 'Tomato',
    description: 'Agriculture farming are the essential',
    price: '300/kg',
    image: Images.tomato,
    category: 'Fresh',
  },
  {
    id: 2,
    name: 'Radish',
    description: 'Agriculture farming are the essential',
    price: '500/kg',
    image: Images.radish,
    category: 'Fresh',
  },
  {
    id: 3,
    name: 'Bell Peppers',
    description: 'Agriculture farming are the essential',
    price: '1600/kg',
    image: Images.bell_peppers,
    category: 'Vegetables',
    featured: true,
  },
  {
    id: 4,
    name: 'Bitter Gourd',
    description: 'Agriculture farming are the essential',
    price: '2500/kg',
    image: Images.bitter_gourd,
    category: 'Organic',
  },
  {
    id: 5,
    name: 'Corn',
    description: 'Agriculture farming are the essential',
    price: '1833/500g',
    image: Images.corn,
    category: 'Vegetables',
  },
  {
    id: 6,
    name: 'Ginger',
    description: 'Agriculture farming are the essential',
    price: '600/kg',
    image: Images.ginger_product_picture,
    category: 'Vegetables',
  },
];

export const testimonials = [
  {
    name: 'Dr. Tunde Kareem',
    role: 'Community Health Coordinator, Lagos',
    rating: 4,
    text: `We partnered with them for our healthy living campaign, and their insights on vegetables for nutrition and detox were eye-opening. The team was professional and their produce was top-notch quality.`,
    image: Images.Tunde,
  },
  {
    name: 'Mrs. Chidinma Okeke',
    role: 'Head Teacher, Greenfield Academy, Enugu',
    rating: 5,
    text: `Our students loved the Holiday Farming School programme! It was practical, fun, and very educational. It’s inspiring to see children learn the importance of agriculture and healthy eating at such a young age.`,
    image: Images.Chidinma,
  },
  {
    name: 'Mr. Oladimeji Adebayo',
    role: 'Commercial Farmer, Oyo State',
    rating: 5,
    text: `Their consultancy team transformed my vegetable farm completely. From soil testing to pest control, every recommendation made a visible difference. My yield has doubled in just one season. They truly know their craft.`,
    image: Images.Oladimeji, // you can add a photo later if available
  },

  {
    name: 'Grace Agbaje',
    role: 'Urban Gardener, Abuja',
    rating: 5,
    text: `I learned modern farming techniques through their training sessions — pruning, mulching, and composting are now part of my routine. Their team is approachable and genuinely passionate about helping farmers succeed.`,
    image: Images.Grace,
  },
  {
    name: 'Ekene Udo',
    role: 'Agro-Entrepreneur, Rivers State',
    rating: 5,
    text: `Their UV drier construction service was a game changer for my vegetable business. The quality of my dried produce improved, and I now have more consistent sales throughout the year. Highly recommended!`,
    image: Images.Ekene,
  },
];

export const services = [
  {
    key: 1,
    title: 'Agricultural Consultancy',
    description: `We provide end-to-end agricultural consultancy services tailored to the needs of governments, NGOs, communities, and individuals. From strategic planning to hands-on implementation, our consultancy bridges the gap between traditional practices and modern agricultural innovations.`,
    details: [
      'Nursery management and plant propagation for commercial or personal use.',
      'Training on essential farming techniques such as pruning, mulching, and blanching.',
      'Contract farming arrangements to help clients meet specific production goals.',
      'Soil testing and analysis to optimize crop yield and fertility.',
      'Integrated pest control strategies for sustainable and eco-friendly farming.',
      'Greenhouse and net house design, setup, and maintenance.',
      'Construction of UV vegetable driers that retain nutritional value and natural color.',
      'Expert guidance on composting and sustainable waste management practices.',
    ],
    tagline: 'Professional guidance for modern, sustainable farming.'
  },
  {
    key: 2,
    title: 'Health & Nutrition',
    description: `We believe that healthy living starts with what we eat. Through our fresh farm produce, we promote wellness, detoxification, and disease prevention. Our range of vegetables and exotic fruits are cultivated to support dietary needs, therapeutic uses, and holistic health.`,
    details: [
      'Farm-fresh vegetables and fruits rich in vitamins and minerals.',
      'Custom produce recommendations for detox and curative diets.',
      'Nutrition consultations for individuals and wellness programs.',
      'Vegetable-based beauty and skincare therapy for glowing, youthful skin.',
      'Educational content on healthy eating and natural living.',
    ],
    tagline: 'Wholesome produce for a healthier body and mind.'
  },
  {
    key: 3,
    title: 'Training & Outreach',
    description: `We are committed to cultivating knowledge and passion for agriculture through hands-on education and community engagement. Our outreach programs create awareness about food sustainability, healthy eating, and the importance of agriculture in daily life.`,
    details: [
      'Holiday Farming School, teaching children the basics of farming in a fun, interactive way.',
      'Annual Farm Open Day with cooking demos, health talks, and exhibitions.',
      'Collaborations with organizations and institutions for lectures and workshops.',
      'Skill development programs for aspiring farmers and agri-entrepreneurs.',
      'Community-driven projects promoting food security and environmental awareness.',
    ],
    tagline: 'Educating today’s generation for a sustainable tomorrow.'
  },
  {
    key: 4,
    title: 'Farm Infrastructure',
    description: `We help farmers and agribusinesses enhance productivity through modern, efficient farm structures and systems. From small-scale setups to commercial projects, our infrastructure services combine innovation, quality, and sustainability.`,
    details: [
      'Design and construction of durable greenhouses and net houses.',
      'UV vegetable driers for efficient post-harvest preservation.',
      'Technical support and maintenance for greenhouse operations.',
      'Consultations on irrigation systems and crop protection facilities.',
      'Tailored solutions for year-round cultivation and yield optimization.',
    ],
    tagline: 'Building the backbone of sustainable agriculture.'
  },
  {
    key: 5,
    title: 'Waste & Environmental Management',
    description: `We champion a greener planet through sustainable waste and compost management solutions. Our focus is on converting agricultural and organic waste into valuable resources that enhance soil health while protecting the environment.`,
    details: [
      'Collection, transportation, and treatment of organic waste.',
      'Compost production and distribution for improved soil fertility.',
      'Advisory services on waste reduction and recycling strategies.',
      'Community sensitization on environmental protection and sustainability.',
      'Eco-friendly initiatives to minimize the carbon footprint of farming.',
    ],
    tagline: 'Turning waste into wellness for people and the planet.'
  },
];

