// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Coffee and Cakes",
  tagline: "Somos una panadería y repostería, alimentando en tu hogar con el pan de la mejor calidad desde 1993.",
  logoText: "C&C", // Used if no logo image is provided
  logoImage: "images/logo.jpg", // Custom logo for Coffee and Cakes
  
  // Colors - These will be applied site-wide via CSS custom properties
  colors: {
    primary: "#1A1A1A",      // Rich black - main brand color
    accent: "#A0826D",       // Light wood brown - for highlights and CTAs
    background: "#F5F1ED",   // Warm cream
    text: "#2D2420"          // Dark brown for text
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Bebas Neue",   // Bold, impactful font for headings (like logo)
    body: "Roboto"           // Clean, modern sans-serif for body text
  },
  
  // Hero Section
  hero: {
    image: "images/hero.jpg",
    headline: "Somos una panadería y repostería",
    subheadline: "Alimentando en tu hogar con el pan de la mejor calidad desde 1993",
    ctaText: "Ver Menú",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Nuestra Historia",
    text: "Desde 1993, Coffee and Cakes ha sido el corazón de la comunidad de Comayagua, Honduras. Somos una panadería y repostería familiar dedicada a crear productos artesanales de la más alta calidad. Nuestro pan de masa madre, bollitos recién horneados, y repostería tradicional hondureña se elaboran cada día con ingredientes frescos y el cuidado que merece tu familia. Más que una panadería, somos parte de tu hogar, trayendo sabor y tradición a cada mesa.",
    image: "images/about.jpg"
  },
  
  // Menu - Organized by category
  menu: [
    {
      category: "Café",
      items: [
        { name: "Americano", price: "L 35", desc: "Café espresso con agua caliente" },
        { name: "Cappuccino", price: "L 45", desc: "Espresso con leche vaporizada y espuma" },
        { name: "Latte", price: "L 50", desc: "Espresso suave con leche vaporizada" },
        { name: "Mochachino", price: "L 55", desc: "Espresso, chocolate y leche vaporizada" },
        { name: "Café de Olla", price: "L 40", desc: "Café tradicional hondureño con especias" }
      ]
    },
    {
      category: "Panadería",
      items: [
        { name: "Pan de Masa Madre", price: "L 60", desc: "Pan artesanal fermentado naturalmente" },
        { name: "Bollitos de Masa Madre", price: "L 15", desc: "Suaves y esponjosos, recién horneados" },
        { name: "Semitas de Masa Madre", price: "L 20", desc: "Tradicionales semitas hondureñas" },
        { name: "Pan Francés", price: "L 8", desc: "Crujiente por fuera, suave por dentro" },
        { name: "Pan Integral", price: "L 50", desc: "Saludable y nutritivo" }
      ]
    },
    {
      category: "Repostería Hondureña",
      items: [
        { name: "Semitas Rellenas", price: "L 25", desc: "Rellenas de dulce de piña o guayaba" },
        { name: "Quesadillas Hondureñas", price: "L 30", desc: "Esponjosas y deliciosas" },
        { name: "Marquesote", price: "L 35", desc: "Pan dulce tradicional" },
        { name: "Torrejas", price: "L 40", desc: "Especiales de temporada" },
        { name: "Rosquillas", price: "L 15", desc: "Crujientes galletas tradicionales" }
      ]
    },
    {
      category: "Pasteles y Cakes",
      items: [
        { name: "Pastel de Chocolate", price: "L 450", desc: "Porción individual L 45" },
        { name: "Pastel de Vainilla", price: "L 400", desc: "Porción individual L 40" },
        { name: "Pastel Tres Leches", price: "L 500", desc: "Porción individual L 50" },
        { name: "Cupcakes", price: "L 25", desc: "Variedad de sabores" },
        { name: "Pasteles Personalizados", price: "Consultar", desc: "Para eventos especiales" }
      ]
    }
  ],
  
  // Gallery - Image URLs
  gallery: [
    "images/gallery_1.jpg",
    "images/gallery_2.jpg",
    "images/gallery_3.jpg",
    "images/gallery_4.jpg",
    "images/gallery_5.jpg",
    "images/gallery_6.jpg"
  ],
  
  // Hours
  hours: {
    monday: "8:00 AM - 5:30 PM",
    tuesday: "8:00 AM - 5:30 PM",
    wednesday: "8:00 AM - 5:30 PM",
    thursday: "8:00 AM - 5:30 PM",
    friday: "8:00 AM - 5:30 PM",
    saturday: "8:00 AM - 5:30 PM",
    sunday: "Cerrado"
  },
  
  // Location & Contact
  address: "Calle Real, 100 metros al norte de Iglesia La Merced, Comayagua, Honduras, 0301",
  phone: "2772-1729",
  email: "coffeeandcakes0301@gmail.com",
  
  // Social Media
  social: {
    instagram: "https://www.instagram.com/coffeeandcakeshn",
    facebook: "https://www.facebook.com/coffeeandcakeshn"
  },
  
  // Google Maps Embed URL
  // Get this from: google.com/maps → Search location → Share → Embed a map
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.4856782891845!2d-87.64486592408743!3d14.454321386030195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2f88888888f%3A0x5fe8b0a0a0a0a0a0!2sCoffee%20and%20Cakes!5e0!3m2!1sen!2shn!4v1721851200000!5m2!1sen!2shn",
  
  // Testimonials
  testimonials: [
    {
      quote: "Local bread shop... stopped for cookies and coffee. Wide assortment of breads, buns, cookies and cakes made fresh. Courteous staff and clean place to stop.",
      author: "L 100-200",
      role: "Cliente Google"
    },
    {
      quote: "A mi siempre me encanta ir! It's perfect to spend time with your friends.",
      author: "Cecilia Calix-Cui",
      role: "Cliente Frecuente"
    },
    {
      quote: "Quick friendly service. Delicious baked goods and coffee.",
      author: "John Anderson",
      role: "Local Guide"
    }
  ],
  
  // CTA Banner
  ctaBanner: {
    headline: "Visítanos hoy",
    subheadline: "Descubre el sabor de la tradición hondureña",
    buttonText: "Cómo Llegar",
    buttonLink: "https://maps.app.goo.gl/r2vgVhF3xiEv4uqS9"
  }
};
