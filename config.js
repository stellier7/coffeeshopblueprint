// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Neon Café",
  tagline: "Ambiente. Comunidad. Cafe",
  logoText: "NC", // Used if no logo image is provided
  
  // Colors - Neon pink, black, and white theme
  colors: {
    primary: "#000000",      // Black - main brand color
    accent: "#FF1493",       // Neon pink - for highlights and CTAs
    background: "#FFFFFF",   // White background
    text: "#1a1a1a"          // Near-black for text
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Orbitron",     // Modern, futuristic font for neon aesthetic
    body: "Poppins"          // Clean, modern sans-serif for body text
  },
  
  // Hero Section
  hero: {
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80",
    headline: "Neon Café",
    subheadline: "Ambiente. Comunidad. Cafe",
    ctaText: "Ver Menú",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Nuestra Historia",
    text: "Neon Café es más que un lugar para tomar café - es un espacio vibrante donde la comunidad se encuentra. Ubicados en el corazón de Tegucigalpa, ofrecemos una experiencia única que combina el arte del café excepcional con un ambiente moderno y acogedor. Desde nuestras bebidas artesanales hasta nuestros postres hechos en casa, cada detalle está diseñado para crear momentos memorables. Ven y descubre por qué Neon Café se ha convertido en el punto de encuentro favorito de la ciudad.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
  },
  
  // Menu - Organized by category (extracted from menu images)
  menu: [
    {
      category: "Hot Hits",
      items: [
        { name: "Espresso", price: "L69.00", desc: "Sencillo / Doble L79.00" },
        { name: "Macchiato", price: "L79.00", desc: "Espresso con espuma" },
        { name: "Cortadito", price: "L99.00", desc: "Espresso cortado con leche" },
        { name: "Americano", price: "L99.00", desc: "8 oz / 12 oz L109.00" },
        { name: "Capuchino", price: "L99.00", desc: "8 oz / 12 oz L109.00" },
        { name: "Latte", price: "L99.00", desc: "8 oz / 12 oz L109.00" },
        { name: "Hot Chocolate", price: "L119.00", desc: "8oz / 12oz L129.00" },
        { name: "Mocha", price: "L139.00", desc: "8 oz / 12 oz L149.00" },
        { name: "Chai Latte", price: "L129.00", desc: "8 oz / 12 oz L139.00" },
        { name: "Tisana", price: "L99.00", desc: "8oz Frutos Rojos o Frutos Tropicales" },
        { name: "Matcha", price: "L159.00", desc: "8 oz / 12 oz L169.00" },
        { name: "Métodos", price: "L119.00", desc: "V60" },
        { name: "Variedad de Tés", price: "L69.00", desc: "Selección de té premium" }
      ]
    },
    {
      category: "Cold Creations",
      items: [
        { name: "Iced Coffee", price: "L119.00", desc: "Café helado refrescante" },
        { name: "Iced Latte", price: "L129.00", desc: "Latte helado" },
        { name: "Iced Chocolate", price: "L149.00", desc: "Chocolate helado cremoso" },
        { name: "Iced Caramel Latte", price: "L159.00", desc: "Latte con caramelo helado" },
        { name: "Iced Chai Latte", price: "L159.00", desc: "Chai latte helado" },
        { name: "Iced Matcha", price: "L169.00", desc: "Matcha helado refrescante" },
        { name: "Iced Strawberry Matcha", price: "L209.00", desc: "Matcha con fresa" },
        { name: "Iced Moccha", price: "L169.00", desc: "Mocha helado" },
        { name: "Frappé Classic", price: "L149.00", desc: "Clásico frappé" },
        { name: "Frappé Moccha", price: "L169.00", desc: "Frappé de mocha" },
        { name: "Frappé Cookies & Cream", price: "L169.00", desc: "Frappé de galleta y crema" },
        { name: "Smoothie de Arándano", price: "L129.00", desc: "Con Agua / Con Leche L149.00" },
        { name: "Smoothie de Mixed Berries", price: "L129.00", desc: "Con Agua / Con Leche L179.00" },
        { name: "Limonada", price: "L129.00", desc: "Todas llevan menta, Clásica o Frozen" },
        { name: "Limonada con Fresa o Arándano", price: "L149.00", desc: "Refrescante y frutal" },
        { name: "Piña Colada (Virgen)", price: "L149.00", desc: "Tropical sin alcohol" },
        { name: "Té frío con limón", price: "L108.00", desc: "Refrescante té helado" }
      ]
    },
    {
      category: "Neon Sodas",
      items: [
        { name: "Pink - Pitaya", price: "L69.00", desc: "Soda rosa vibrante" },
        { name: "Blue - Arándano", price: "L69.00", desc: "Soda azul refrescante" },
        { name: "Green - Manzana verde", price: "L69.00", desc: "Soda verde ácida" },
        { name: "Orange - Naranja", price: "L69.00", desc: "Soda naranja cítrica" },
        { name: "Red - Sandía", price: "L69.00", desc: "Soda roja dulce" },
        { name: "Coca Cola", price: "L69.00", desc: "Normal o zero" },
        { name: "Bote con Agua", price: "L39.00", desc: "Agua embotellada" }
      ]
    },
    {
      category: "With A Kick",
      items: [
        { name: "Carajillo", price: "L239.00", desc: "Espresso con Licor 43" },
        { name: "Good Margarita", price: "L169.00", desc: "Margarita tradicional con tequila" },
        { name: "Strawberry Margarita", price: "L189.00", desc: "Margarita con toque de Fresa" },
        { name: "Sangría", price: "L169.00", desc: "Copa / Jarra L799.00 - Bebida refrescante a base de vino" },
        { name: "Piña Colada", price: "L189.00", desc: "Bebida dulce con toques de piña, coco y ron" }
      ]
    },
    {
      category: "Sandwiches",
      items: [
        { name: "Croissant Melt", price: "L159.00", desc: "Croissant, jamón y queso americano derretido" },
        { name: "Loaded Panini", price: "L349.00", desc: "Panini a todo dar con pollo, jamón, bacon y queso" },
        { name: "Pepper Melt", price: "L159.00", desc: "Pan brioche, pepperjack cheese y jamón" },
        { name: "Sweet Ham Melt", price: "L159.00", desc: "Pan brioche, hot strawberry jam y jamón" },
        { name: "Little Italy Melt", price: "L169.00", desc: "Una pizza, ¿pero en sandwich? Pan brioche, pepperoni y mozarella" },
        { name: "Capri Melt (Vegetariano)", price: "L99.00", desc: "Pan brioche, mozarella y tomates secos" }
      ]
    },
    {
      category: "Waffles",
      items: [
        { name: "Waffle Plain", price: "L149.00", desc: "Waffle simple con whipped cream" },
        { name: "Waffle 1 topping", price: "L169.00", desc: "Con un topping a elegir" },
        { name: "Waffle 2 toppings", price: "L189.00", desc: "Con dos toppings" },
        { name: "Toppings", price: "—", desc: "Leche condensada, Miel, Maple Syrup, Nutella, Fresas, Pecanas, Arándanos, Vainilla ice cream, Chocolate líquido" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Signature Brownie", price: "L139.00", desc: "El brownie insignia de la casa" },
        { name: "Brownie Sundae", price: "L189.00", desc: "Brownie con helado" },
        { name: "Ice Cream Cookie Brownie Stick", price: "L169.00", desc: "Paleta de helado con brownie" },
        { name: "Cheesecake", price: "L159.00", desc: "Fresa / Arándano / Brownie / Temporada" },
        { name: "Affogato", price: "L169.00", desc: "Ice cream + espresso" },
        { name: "Tiramisu", price: "L189.00", desc: "Postre italiano clásico" },
        { name: "Flan de Coco", price: "L149.00", desc: "Flan cremoso de coco" },
        { name: "Tart", price: "L149.00", desc: "Pregunta por la tartaleta del día" },
        { name: "Lemon Pie", price: "L149.00", desc: "Pay de limón" }
      ]
    },
    {
      category: "Cookies",
      items: [
        { name: "Butter Cookie", price: "L79.00", desc: "Nuestra galleta de mantequilla hecha en casa" },
        { name: "Oatmeal Cookie Sandwich", price: "L99.00", desc: "Galletas de avena con relleno de vainilla en medio" },
        { name: "Chocolate Chip Cookies", price: "L179.00", desc: "Porción L39 / Sencilla L79.00 - Nuestra galleta de chispas de chocolate" },
        { name: "Sugar Free Chocolate Chips Cookies", price: "L239.00", desc: "Bolsa (6 Cookies) - Hechas a base de harina de almendra. Contiene pecanas" },
        { name: "Cheesecake de Fresa (Sugar Free)", price: "L239.00", desc: "Sin azúcar" }
      ]
    },
    {
      category: "AM & PM Favorites",
      items: [
        { name: "Crustless Quiche (Keto)", price: "L129.00", desc: "Porción de torta horneada a base de huevo, quesos y bacon" },
        { name: "Baleada", price: "L89.00", desc: "Sencilla - Con huevo, quesos y bacon L109.00" },
        { name: "Pan con Frijoles", price: "L89.00", desc: "Sencilla - Con huevo, quesos y bacon L109.00" }
      ]
    },
    {
      category: "Feeling Extra?",
      items: [
        { name: "Leche Deslactosada / Saborizantes", price: "L39.00", desc: "Opciones especiales" },
        { name: "Leche de Almendra", price: "L49.00", desc: "Coco / Avellana / Lavanda" },
        { name: "Leche de Avena", price: "L79.00", desc: "Alternativa vegetal" },
        { name: "Extra Ron / Extra Tequila / Extra Vodka", price: "L79.00", desc: "Shot adicional" },
        { name: "Puré de Fresa", price: "L49.00", desc: "Para bebidas" },
        { name: "Salsa de Caramelo / Chocolate (Dark o White)", price: "L39.00", desc: "Topping adicional" },
        { name: "Galleta Oreo", price: "L39.00", desc: "Para agregar a bebidas" }
      ]
    }
  ],
  
  // Gallery - Image URLs (neon café themed images from Unsplash)
  gallery: [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
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
    facebook: "https://web.facebook.com/people/Neon-Café-hnd/61573482257835/"
  },
  
  // Google Maps Embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8896!2d-87.2068!3d14.0818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2f!2sComercial+Los+Arcos!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  
  // Testimonials
  testimonials: [
    {
      quote: "El ambiente de Neon Café es único en Tegucigalpa. El café es excelente y los postres son increíbles. ¡Me encanta venir aquí con amigos!",
      author: "María G.",
      role: "Cliente Frecuente"
    },
    {
      quote: "Los frappés están deliciosos y las neon sodas son súper refrescantes. El lugar perfecto para trabajar o relajarse.",
      author: "Carlos R.",
      role: "Entusiasta del Café"
    },
    {
      quote: "La combinación de café de calidad con un ambiente moderno y acogedor hace de Neon Café mi lugar favorito. ¡Los brownies son adictivos!",
      author: "Ana S.",
      role: "Vecina del Barrio"
    }
  ],
  
  // CTA Banner
  ctaBanner: {
    headline: "Visítanos hoy",
    subheadline: "Experimenta el ambiente perfecto",
    buttonText: "Cómo Llegar",
    buttonLink: "#location"
  }
};
