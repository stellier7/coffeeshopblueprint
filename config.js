// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "CALA Coffee Roasters",
  tagline: "Somos una nueva experiencia en café, te esperamos.",
  logoText: "CALA", // Used if no logo image is provided
  
  // Colors - These will be applied site-wide via CSS custom properties
  colors: {
    primary: "#4A2C2A",      // Deep brown - main brand color
    accent: "#C9A227",       // Golden - for highlights and CTAs
    background: "#FAF6F1",   // Warm off-white
    text: "#2B1B17"          // Dark brown for text
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Playfair Display", // Elegant serif for headings
    body: "Inter"                 // Clean sans-serif for body text
  },
  
  // Hero Section
  hero: {
    image: "https://i.imgur.com/6ApiIQr.jpg",
    headline: "Café de especialidad en Comayagua",
    subheadline: "Una nueva experiencia en café",
    ctaText: "Ver Menú",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Nuestra Historia",
    text: "CALA Coffee Roasters es una nueva experiencia en café en el corazón de Comayagua. Nos especializamos en café de especialidad, tostado con pasión y servido con dedicación. Somos más que una cafetería, somos un espacio donde la comunidad se encuentra y cada visita es especial.",
    image: "https://i.imgur.com/J1aQOiD.jpg"
  },
  
  // Menu - Organized by category
  menu: [
    {
      category: "Bebidas Calientes",
      items: [
        { name: "Espresso", price: "25", desc: "Espresso puro y concentrado" },
        { name: "Americano", price: "30/35", desc: "Espresso con agua caliente" },
        { name: "Cappuccino", price: "45/55", desc: "Espresso con leche vaporizada y espuma" },
        { name: "Latte", price: "45/55", desc: "Espresso suave con leche vaporizada" },
        { name: "Mocha", price: "50/60", desc: "Espresso, chocolate y leche vaporizada" },
        { name: "Chocolate Caliente", price: "35/45", desc: "Chocolate rico con leche" },
        { name: "Té", price: "25/30", desc: "Variedad de tés calientes" }
      ]
    },
    {
      category: "Bebidas Frías",
      items: [
        { name: "Frappé", price: "TBD", desc: "Bebida fría batida" },
        { name: "Café Helado", price: "TBD", desc: "Café servido con hielo" },
        { name: "Smoothie", price: "TBD", desc: "Batido de frutas frescas" }
      ]
    },
    {
      category: "Wafles",
      items: [
        { name: "Waffle Especial", price: "TBD", desc: "Waffle con toppings" }
      ]
    },
    {
      category: "Postres",
      items: [
        { name: "Pastel de Zanahoria", price: "TBD", desc: "Pastel húmedo de zanahoria" },
        { name: "Brownie", price: "TBD", desc: "Brownie de chocolate" }
      ]
    }
  ],
  
  // Gallery - Image URLs
  gallery: [
    "https://i.imgur.com/J1aQOiD.jpg",
    "https://i.imgur.com/qIt5miW.jpg",
    "https://i.imgur.com/NizDZl1.jpg",
    "https://i.imgur.com/j2cL5NI.jpg",
    "https://i.imgur.com/aDDhqAW.jpg",
    "https://i.imgur.com/zQF0BSy.jpg",
    "https://i.imgur.com/sV9Ovev.jpg",
    "https://i.imgur.com/6ApiIQr.jpg"
  ],
  
  // Hours
  hours: {
    monday: "7:00 AM - 9:00 PM",
    tuesday: "7:00 AM - 9:00 PM",
    wednesday: "7:00 AM - 9:00 PM",
    thursday: "7:00 AM - 9:00 PM",
    friday: "7:00 AM - 9:00 PM",
    saturday: "7:00 AM - 9:00 PM",
    sunday: "7:00 AM - 9:00 PM"
  },
  
  // Location & Contact
  address: "Blvd. Roberto Romero Larios, Comayagua, Honduras, COM12101",
  phone: "+504 95829775",
  email: "info@calacoffeeroasters.com",
  
  // Social Media
  social: {
    instagram: "https://instagram.com/cala_coffee_roasters",
    facebook: "https://www.facebook.com/calacoffeeroasters"
  },
  
  // Google Maps Embed URL
  // Get this from: google.com/maps → Search location → Share → Embed a map
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.5!2d-87.65!3d14.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ0FMQSBDB2ZmZWUgUm9hc3RlcnM!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1ses!2shn",
  
  // Testimonials
  testimonials: [
    {
      quote: "The best coffee in town, hands down. The baristas are friendly and the atmosphere is perfect for getting work done or catching up with friends.",
      author: "Sarah M.",
      role: "Local Regular"
    },
    {
      quote: "I love that they source their beans ethically and roast in-house. You can really taste the difference. The pour over is exceptional!",
      author: "James T.",
      role: "Coffee Enthusiast"
    },
    {
      quote: "This place has become my second home. Great coffee, amazing pastries, and the most welcoming community vibe.",
      author: "Emily R.",
      role: "Neighborhood Neighbor"
    }
  ],
  
  // CTA Banner
  ctaBanner: {
    headline: "Visítanos hoy",
    subheadline: "Experimenta el café perfecto",
    buttonText: "Cómo Llegar",
    buttonLink: "#location"
  }
};
