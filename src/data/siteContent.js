// Centralized static content and configuration for the Achigreens static site.
// Keeping this JSON-like and side-effect free allows reuse across components and easier future i18n.


import {Images} from "../images.jsx";
import ginger_product_picture from "../assets/Images/ginger_product_picture.jpg";

export const navItems = [
  { key: 'home', label: 'Home', hasDropdown: true },
  { key: 'about', label: 'About Us', hasDropdown: false },
  { key: 'products', label: 'Products', hasDropdown: false },
  { key: 'service', label: 'Service', hasDropdown: true },
  { key: 'contact', label: 'Contact', hasDropdown: false },
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
    name: 'Ask if there is any name to use',
    role: 'Random position',
    rating: 4,
    text:
      'Financial planners help people to knowledge in how to invest and save their moneye the most e way in to eve.planners Financial planners help p my destin knowledge in about design',
    image: '',
  },
  {
    name: 'Ask if there is any name to use',
    role: 'Farm Owner',
    text:
      'Financial planners help people to knowledge in how to invest and save their moneye the most e way in to eve.planners Financial planners help p my destin knowledge in about design',
    image: '',
  },
];

export const services = [
  {
    key: 1,
    title: 'Agricultural Consultancy',
    description: `We provide professional advisory services to governments, NGOs, communities, and individuals. Our areas of expertise include nursery management, farming techniques, contract farming, soil testing, pest control, greenhouse and net house design, UV drier construction, and compost and waste management.`,
  },
  {
    key: 2,
    title: 'Health & Nutrition',
    description: `We promote wellness through farm produce designed for dietary, detox, and curative use. Our produce supports healthy eating habits and is recommended for both nutritional and therapeutic benefits.`,
  },
  {
    key: 3,
    title: 'Training & Outreach',
    description: `We empower communities through agricultural education and engagement programs. Our initiatives include the Holiday Farming School for children, public lectures and partnerships with local and international organizations, and our annual Farm Open Day that promotes healthy living and sustainable farming.`,
  },
  {
    key: 4,
    title: 'Farm Infrastructure',
    description: `We design and construct key agricultural structures including greenhouses, net houses, and UV vegetable driers. These solutions enhance productivity, preserve produce quality, and support year-round cultivation.`,
  },
  {
    key: 5,
    title: 'Waste & Environmental Management',
    description: `We provide composting and waste management solutions aimed at reducing health and environmental risks. Our services cover waste collection, transportation, and treatment, promoting sustainable and eco-friendly practices.`,
  },
];
