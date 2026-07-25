// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Neon Café",
  tagline: "Ambiente. Comunidad. Café.",
  logoText: "NC", // Used if no logo image is provided
  
  // Colors - These will be applied site-wide via CSS custom properties
  colors: {
    primary: "#FF1493",      // Hot pink - neon brand color
    accent: "#00CED1",       // Teal/cyan - for highlights and CTAs
    background: "#1a0a1e",   // Dark purple/black
    text: "#FFFFFF"          // White text for dark background
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Montserrat", // Modern, bold sans-serif for headings
    body: "Poppins"        // Clean, contemporary sans-serif for body text
  },
  
  // Hero Section
  hero: {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80",
    headline: "Ambiente. Comunidad. Café.",
    subheadline: "Tu café de especialidad en el corazón de Tegucigalpa",
    ctaText: "Ver Menú",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Nuestra Historia",
    text: "Neon Café es más que un lugar para tomar café - es un espacio donde el ambiente vibrante, la comunidad cercana y el café de especialidad se encuentran. Ubicados en Plaza Los Arcos sobre Bulevar Morazán, ofrecemos una experiencia única en Tegucigalpa. Nuestro concepto combina bebidas artesanales, postres irresistibles y un ambiente visualmente impactante perfecto para trabajar, reunirse con amigos o simplemente disfrutar del momento. Cada bebida es preparada con dedicación y cada visita es una nueva experiencia.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
  },
  
  // Menu - Organized by category
  menu: [
    {
      category: "Hot Hits ☕",
      items: [
        { name: "Espresso", price: "69.00 - 79.00", desc: "Sencillo o doble" },
        { name: "Macchiato", price: "79.00", desc: "Espresso con espuma de leche" },
        { name: "Cortadito", price: "99.00", desc: "Espresso cortado con leche" },
        { name: "Americano", price: "79.00 - 89.00", desc: "8oz o 12oz" },
        { name: "Cappuccino", price: "99.00 - 109.00", desc: "Espresso, leche vaporizada y espuma" },
        { name: "Latte", price: "99.00 - 109.00", desc: "Espresso suave con leche vaporizada" },
        { name: "Hot Chocolate", price: "119.00 - 129.00", desc: "Chocolate caliente cremoso" },
        { name: "Mocha", price: "139.00 - 149.00", desc: "Espresso con chocolate" },
        { name: "Chai Latte", price: "129.00 - 139.00", desc: "Té chai especiado con leche" },
        { name: "Matcha", price: "159.00 - 169.00", desc: "Té verde matcha premium" }
      ]
    },
    {
      category: "Cold Creations 🧊",
      items: [
        { name: "Iced Coffee", price: "139.00", desc: "Café helado refrescante" },
        { name: "Iced Latte", price: "129.00", desc: "Latte frío" },
        { name: "Iced Chocolate", price: "149.00", desc: "Chocolate frío" },
        { name: "Iced Caramel Latte", price: "159.00", desc: "Latte helado con caramelo" },
        { name: "Iced Chai Latte", price: "159.00", desc: "Chai frío especiado" },
        { name: "Iced Matcha", price: "169.00", desc: "Matcha helado" },
        { name: "Iced Strawberry Matcha", price: "209.00", desc: "Matcha con fresa" },
        { name: "Frappé", price: "149.00 - 169.00", desc: "Classic, Mocha, o Cookies & Cream" },
        { name: "Smoothies", price: "129.00 - 179.00", desc: "Fresa, Arándano, o Mixed Berries" },
        { name: "Limonada", price: "129.00 - 149.00", desc: "Clásica o con frutas" },
        { name: "Piña Colada (Virgen)", price: "149.00", desc: "Refrescante sin alcohol" }
      ]
    },
    {
      category: "Neon Sodas 🌈",
      items: [
        { name: "Pink", price: "139.00", desc: "Bebida refrescante de Pitaya" },
        { name: "Blue", price: "139.00", desc: "Refrescante de Arándano" },
        { name: "Green", price: "139.00", desc: "Manzana verde vibrante" },
        { name: "Orange", price: "139.00", desc: "Naranja brillante" },
        { name: "Red", price: "139.00", desc: "Sandía refrescante" }
      ]
    },
    {
      category: "With a Kick 🍹",
      items: [
        { name: "Carajillo", price: "239.00", desc: "Espresso con Licor 43" },
        { name: "Good Margarita", price: "169.00", desc: "Margarita tradicional" },
        { name: "Strawberry Margarita", price: "189.00", desc: "Margarita con puré de fresa" },
        { name: "Sangría", price: "169.00 - 799.00", desc: "Copa o jarra" },
        { name: "Piña Colada", price: "189.00", desc: "Clásica con ron" }
      ]
    },
    {
      category: "Sandwiches 🥪",
      items: [
        { name: "Croissant Melt", price: "159.00", desc: "Croissant, jamón y queso derretido" },
        { name: "Loaded Panini", price: "349.00", desc: "Pollo, jamón, bacon y mozarella" },
        { name: "Pepper Melt", price: "159.00", desc: "Pan brioche, pepperjack y jamón" },
        { name: "Sweet Ham Melt", price: "159.00", desc: "Pan brioche con mermelada de fresa" },
        { name: "Little Italy Melt", price: "169.00", desc: "Pepperoni y mozarella" },
        { name: "Capri Melt (Vegetariano)", price: "169.00", desc: "Mozarella y tomates secos" }
      ]
    },
    {
      category: "Waffles 🧇",
      items: [
        { name: "Waffle (1 topping)", price: "149.00", desc: "Con whipped cream y tu topping favorito" },
        { name: "Waffle (2 toppings)", price: "169.00", desc: "Doble delicia con whipped cream" }
      ]
    },
    {
      category: "Cookies 🍪",
      items: [
        { name: "Butter Cookie", price: "79.00", desc: "Galleta de mantequilla casera" },
        { name: "Oatmeal Cookie Sandwich", price: "99.00", desc: "Dos galletas con relleno de vainilla" },
        { name: "Chocolate Chip Cookies", price: "39.00 - 179.00", desc: "Porción o bolsa de 6" },
        { name: "Chocolate Chips (Sugar Free)", price: "49.00 - 239.00", desc: "Sin azúcar, harina de almendra" }
      ]
    },
    {
      category: "Desserts 🍰",
      items: [
        { name: "Signature Brownie", price: "169.00", desc: "Brownie insignia de la casa" },
        { name: "Brownie Sundae", price: "189.00", desc: "Brownie con helado" },
        { name: "Cheesecake", price: "159.00", desc: "Fresa, Arándano, Brownie o Temporada" },
        { name: "Cheesecake de Fresa (Sugar Free)", price: "239.00", desc: "Sin azúcar" },
        { name: "Flan de Coco", price: "149.00", desc: "Flan cremoso de coco" },
        { name: "Affogato", price: "169.00", desc: "Helado con espresso" },
        { name: "Tiramisu", price: "189.00", desc: "Postre italiano clásico" },
        { name: "Lemon Pie", price: "149.00", desc: "Tarta de limón" },
        { name: "Tart", price: "149.00", desc: "Pregunta por la del día" }
      ]
    },
    {
      category: "AM & PM Favorites 🌅",
      items: [
        { name: "Crustless Quiche (Keto)", price: "129.00", desc: "Huevo, quesos y bacon" },
        { name: "Baleada", price: "89.00 - 109.00", desc: "Sencilla o con todo" },
        { name: "Pan con Frijoles", price: "89.00 - 109.00", desc: "Sencillo o con todo" }
      ]
    }
  ],
  
  // Gallery - Image URLs (Using high-quality placeholders - replace with your hosted images)
  gallery: [
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
  ],
  
  // Hours
  hours: {
    monday: "7:00 AM - 10:00 PM",
    tuesday: "7:00 AM - 10:00 PM",
    wednesday: "7:00 AM - 10:00 PM",
    thursday: "7:00 AM - 10:00 PM",
    friday: "7:00 AM - 10:00 PM",
    saturday: "7:00 AM - 10:00 PM",
    sunday: "7:00 AM - 10:00 PM"
  },
  
  // Location & Contact
  address: "Comercial los Arcos, Bulevar Morazán primer nivel, Tegucigalpa, Honduras, 11101",
  phone: "+504 9754-7102",
  email: "inversionesneonhn@yahoo.com",
  
  // Social Media
  social: {
    instagram: "https://www.instagram.com/neoncafehnd",
    facebook: "https://www.facebook.com/profile.php?id=61573482257835"
  },
  
  // Google Maps Embed URL
  // Coordinates for Plaza Los Arcos, Bulevar Morazán, Tegucigalpa
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.5!2d-87.182043!3d14.0999031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA1JzU5LjciTiA4N8KwMTAnNTUuNCJX!5e0!3m2!1sen!2shn!4v1721905200000!5m2!1sen!2shn",
  
  // Testimonials
  testimonials: [
    {
      quote: "Love the neon theme as well as the ambient music. The drinks and desserts are so delicious especially the brownies and cold drinks.",
      author: "Daniel Guillén",
      role: "Cliente Frecuente"
    },
    {
      quote: "Super buena experiencia! La comida, el servicio y el ambiente son perfectos. Tienen opciones sin lactosa y keto. El nivel de ruido es moderado y no hay espera.",
      author: "Ana Camila Chavez",
      role: "5/5 en Todo"
    },
    {
      quote: "Super unique, nothing else like it around. They have multiple food options and drinks as well. Very recommended!",
      author: "Elisa Girón",
      role: "Cliente Satisfecho"
    },
    {
      quote: "Beautiful, super clean (including the bathroom), cozy, great coffee and desserts. Spectacular service. I will definitely return, avoiding peak hours by going to this place.",
      author: "Luis Andino",
      role: "Amante del Café"
    }
  ],
  
  // CTA Banner
  ctaBanner: {
    headline: "Visítanos hoy",
    subheadline: "Experimenta el ambiente perfecto",
    buttonText: "Cómo Llegar",
    buttonLink: "#location"
  },
  
  // ============================================================
  // ANIMATION SYSTEM - Control motion intensity site-wide
  // ============================================================
  animations: {
    // Intensity: 'minimal' | 'standard' | 'theatrical'
    // - minimal: Reduced motion, faster timings, less distance
    // - standard: Balanced (current implementation)
    // - theatrical: Maximum impact, longer timings, more travel
    intensity: 'theatrical',
    
    // Speed: 'fast' | 'normal' | 'slow'
    // Multiplier for all animation durations
    // - fast: 0.7x (snappy, modern)
    // - normal: 1.0x (balanced)
    // - slow: 1.3x (luxurious, elegant)
    speed: 'fast',
    
    // Parallax: true | false
    // Enable/disable scroll-linked parallax effects
    parallax: true,
    
    // 3D: true | false
    // Enable/disable 3D transforms and WebGL effects
    enable3D: true
  },
  
  // ============================================================
  // DESIGN SYSTEM - Control visual design language
  // ============================================================
  designSystem: {
    // Border radius: 'sharp' | 'rounded' | 'pill'
    // - sharp: 4px for everything
    // - rounded: 8-16px (current)
    // - pill: 50px+ for buttons/cards
    borderRadius: 'rounded',
    
    // Shadows: 'flat' | 'medium' | 'dramatic'
    // - flat: Minimal shadows, borders for depth
    // - medium: Balanced (current)
    // - dramatic: Heavy shadows, more depth
    shadows: 'dramatic',
    
    // Style: 'minimal' | 'modern' | 'luxe'
    // - minimal: Clean, lots of whitespace, subtle colors
    // - modern: Bold, geometric, strong contrast (CURRENT TARGET)
    // - luxe: Rich, ornate, premium feel
    style: 'modern'
  }
};
