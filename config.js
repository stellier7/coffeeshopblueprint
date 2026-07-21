// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Oh! Café",
  tagline: "Ven a probar nuestras deliciosas tapas acompañada de un buen cafecito!",
  logoText: "OH", // Used if no logo image is provided
  logoImage: "https://i.imgur.com/Fy5eE5L.png", // Logo image URL (update with direct link)
  
  // Colors - Colonial aesthetic for Comayagua
  colors: {
    primary: "#8B4513",      // Terracotta/adobe brown - colonial
    accent: "#D4A574",       // Warm amber/gold
    background: "#F5EBE0",   // Cream/beige - colonial walls
    text: "#3E2723"          // Dark warm brown
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Merriweather",     // Classic serif for colonial feel
    body: "Open Sans"            // Clean, readable sans-serif
  },
  
  // Hero Section
  hero: {
    image: "https://i.imgur.com/wyEvzH1.jpg", // Update with direct Imgur link
    headline: "Café de Especialidad en Comayagua",
    subheadline: "Donde nuestros baristas se comprometen a enamorarte",
    ctaText: "Ver Menú",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Nuestra Historia",
    text: "Somos una Tienda de Café de Especialidad en el corazón colonial de Comayagua, donde nuestros baristas se comprometen a enamorarte. Ubicados en el hermoso Paseo Alameda, ofrecemos una experiencia única combinando café artesanal de alta calidad con deliciosas tapas y postres. Endulzamos nuestras bebidas con rapadura de dulce y chocolate, un toque tradicional que hace cada taza especial. ¡Ven y descubre por qué somos el lugar favorito de la comunidad!",
    image: "https://i.imgur.com/Wq6jnKo.jpg" // Tapas picture - update with direct link
  },
  
  // Menu - Organized by category (Spanish)
  menu: [
    {
      category: "Cafés Calientes",
      items: [
        { name: "Café Americano", price: "L 35", desc: "Café de especialidad preparado con amor" },
        { name: "Cappuccino", price: "L 45", desc: "Espresso con leche vaporizada y espuma" },
        { name: "Latte", price: "L 45", desc: "Suave espresso con leche cremosa" },
        { name: "Mocha", price: "L 50", desc: "Espresso con chocolate y crema batida" },
        { name: "Café Negro", price: "L 30", desc: "Café filtrado, aromático y delicioso" }
      ]
    },
    {
      category: "Cafés Fríos",
      items: [
        { name: "Café Helado", price: "L 40", desc: "Café frío refrescante" },
        { name: "Frappé de Caramelo", price: "L 55", desc: "Cremoso y dulce, perfecto para cualquier día" },
        { name: "Frappé de Oreo", price: "L 55", desc: "Con galletas Oreo trituradas" },
        { name: "Oh! Colada", price: "L 60", desc: "Nuestra especialidad refrescante" }
      ]
    },
    {
      category: "Bebidas Especiales",
      items: [
        { name: "Matcha Latte", price: "L 50", desc: "Té verde matcha cremoso" },
        { name: "Chocolate Caliente", price: "L 40", desc: "Chocolate belga con leche vaporizada" },
        { name: "Té Chai", price: "L 45", desc: "Especiado y aromático" }
      ]
    },
    {
      category: "Comida",
      items: [
        { name: "Tapas", price: "L 60", desc: "Deliciosas tapas frescas y variadas" },
        { name: "Crepe Dulce", price: "L 65", desc: "Crepe con relleno a elegir" },
        { name: "Crepe Salado", price: "L 70", desc: "Perfecto para cualquier momento del día" },
        { name: "Repostería", price: "L 45", desc: "Selección de pasteles y postres frescos" }
      ]
    }
  ],
  
  // Gallery - Image URLs (Update these with direct Imgur links)
  gallery: [
    "https://i.imgur.com/Wq6jnKo.jpg",  // Tapas
    "https://i.imgur.com/iEopj64.jpg",  // Coffee cup
    "https://i.imgur.com/tWjjC7p.jpg",  // Coffee drink
    "https://i.imgur.com/wpQWkVo.jpg",  // Crepe
    "https://i.imgur.com/SwvvSBl.jpg",  // Oreo Frappe
    "https://i.imgur.com/wyEvzH1.jpg"   // Outside terrace/view
  ],
  
  // Hours
  hours: {
    monday: "8:00 AM - 8:00 PM",
    tuesday: "8:00 AM - 8:00 PM",
    wednesday: "8:00 AM - 8:00 PM",
    thursday: "8:00 AM - 8:00 PM",
    friday: "8:00 AM - 8:00 PM",
    saturday: "8:00 AM - 8:00 PM",
    sunday: "8:00 AM - 8:00 PM"
  },
  
  // Location & Contact
  address: "Paseo Alameda frente del Hotel Caxa Real, esquina opuesta de la Plaza de Juventud, Comayagua, Honduras",
  phone: "+504 9919-7298",
  email: "ohcafehn@gmail.com",
  
  // Social Media
  social: {
    instagram: "https://instagram.com/ohcafehn",
    facebook: "https://facebook.com/ohcafehn"
  },
  
  // Google Maps Embed URL
  // Get this from: google.com/maps → Search location → Share → Embed a map
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8823442876537!2d-87.64534908509707!3d14.454978489887654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa31d3d3d3d3d%3A0x0!2zMTTCsDI3JzE3LjkiTiA4N8KwMzgnMzYuMSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  
  // Testimonials
  testimonials: [
    {
      quote: "El mejor café de Comayagua! El ambiente es acogedor y las tapas son deliciosas. Siempre vuelvo por más.",
      author: "María González",
      role: "Cliente Frecuente"
    },
    {
      quote: "Me encanta la atención personalizada y la calidad del café. Los baristas realmente saben lo que hacen. El frappé de caramelo es mi favorito!",
      author: "Carlos Mejía",
      role: "Amante del Café"
    },
    {
      quote: "Un lugar perfecto para relajarse y disfrutar de un buen café. La ubicación en el Paseo Alameda es hermosa y el servicio excelente.",
      author: "Ana Rodríguez",
      role: "Visitante Regular"
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
