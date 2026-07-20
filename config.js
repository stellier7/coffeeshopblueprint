// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Oddity Coffee Roasters",
  tagline: "Oddity siempre es buena idea. ✨",
  logoText: "OC", // Used if no logo image is provided
  logoImage: "https://i.imgur.com/0FoCQhR.png", // Logo image
  
  // Colors - These will be applied site-wide via CSS custom properties
  colors: {
    primary: "#3D2817",      // Rich espresso brown - main brand color
    accent: "#D4A574",       // Warm caramel/gold - for highlights and CTAs
    background: "#FAF7F2",   // Soft cream
    text: "#2C1810"          // Deep coffee brown for text
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Poppins",      // Modern, friendly sans-serif for headings
    body: "Inter",           // Clean, readable sans-serif for body text
    heroScript: "Pacifico"   // Handwritten script for hero headline
  },
  
  // Hero Section
  hero: {
    image: "https://i.imgur.com/H7QpS8i.jpeg",
    headline: "Oddity siempre es<br>una buena idea.&nbsp;✨",
    subheadline: "Abierto todos los días de 8am - 8pm",
    ctaText: "Ver Menú",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Café de Especialidad Desde el Origen",
    text: "Fundado por Leonel Enrique Ortez en el corazón de Comayagua, Oddity Coffee Roasters es más que una cafetería—es una experiencia que conecta las montañas hondureñas con tu taza. Nos especializamos en cafés de especialidad con puntuaciones superiores a 85 puntos de catación, cultivados en nuestra finca y tostados con pasión. Nuestro compromiso va más allá del café excepcional: fortalecemos la cultura cafetalera hondureña desde el origen, con educación, calidad, ética y sostenibilidad. Acompañamos nuestros cafés con auténtica gastronomía hondureña que te hará sentir como en casa.",
    image: "https://i.imgur.com/VS9xcwR.png"
  },
  
  // Menu - Organized by category
  menu: [
    {
      category: "Café de Especialidad",
      items: [
        { name: "Espresso Hondureño", price: "60", desc: "Shot de nuestro café de finca, tostado en casa" },
        { name: "Cappuccino Clásico", price: "75", desc: "Espresso cremoso con leche vaporizada perfecta" },
        { name: "Latte Artesanal", price: "80", desc: "Suave y balanceado, con arte latte" },
        { name: "Americano Puro", price: "65", desc: "Espresso alargado, sabor intenso" },
        { name: "Mocha Oddity", price: "90", desc: "Chocolate hondureño, espresso y crema" },
        { name: "Café Frío", price: "85", desc: "Cold brew de 18 horas, suave y aromático" }
      ]
    },
    {
      category: "Desayuno Típico Hondureño",
      items: [
        { name: "Baleada Tradicional", price: "50", desc: "Tortilla de harina con frijoles, queso, crema y huevo" },
        { name: "Burrita Comayaguense", price: "65", desc: "Especialidad local, rellena de frijoles y queso" },
        { name: "Huevos al Gusto", price: "70", desc: "Preparados como prefieras, con acompañantes" },
        { name: "Desayuno Completo", price: "120", desc: "Baleada, huevos, plátano frito, aguacate y café" }
      ]
    },
    {
      category: "Brunch Internacional",
      items: [
        { name: "Waffles Belgas", price: "95", desc: "Dorados y esponjosos, con miel y fruta fresca" },
        { name: "Croissant Artesanal", price: "55", desc: "Hojaldrado y mantequilloso, recién horneado" },
        { name: "Tostadas Francesas", price: "85", desc: "Pan brioche caramelizado con canela" },
        { name: "Avocado Toast", price: "90", desc: "Pan integral, aguacate fresco, huevo pochado" }
      ]
    },
    {
      category: "Comida & Snacks",
      items: [
        { name: "Hamburguesa Oddity", price: "130", desc: "Carne artesanal, queso, vegetales frescos" },
        { name: "Club Sandwich", price: "110", desc: "Pollo, tocino, aguacate, pan tostado" },
        { name: "Panini Caprese", price: "95", desc: "Mozzarella, tomate, albahaca, balsámico" },
        { name: "Ensalada César", price: "85", desc: "Lechuga romana, crutones, parmesano" }
      ]
    },
    {
      category: "Postres & Dulces",
      items: [
        { name: "Cheesecake del Día", price: "70", desc: "Cremoso y delicioso, pregunta por el sabor" },
        { name: "Brownie con Café", price: "65", desc: "Chocolate intenso con notas de nuestro café" },
        { name: "Pie de Limón", price: "60", desc: "Refrescante y perfecto con café" },
        { name: "Cookie Artesanal", price: "40", desc: "Recién horneada, varios sabores disponibles" }
      ]
    }
  ],
  
  // Gallery - Image URLs
  gallery: [
    "https://i.imgur.com/pZX0I4L.jpeg",
    "https://i.imgur.com/99Tfqym.jpg",
    "https://i.imgur.com/nqNNabR.jpg",
    "https://i.imgur.com/mlkQXWH.jpg",
    "https://i.imgur.com/jftBzhr.jpg",
    "https://i.imgur.com/QtGV0AR.jpg"
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
  address: "Plaza 0301, Bulevar Roberto Romero Larios, Comayagua, Honduras 12101",
  phone: "+504 3249-4530",
  email: "hello@odditycoffee.com",
  
  // Social Media
  social: {
    instagram: "https://www.instagram.com/odditycoffeeroasters/",
    facebook: "https://www.facebook.com/OddityCoffeeRoasters/"
  },
  
  // Google Maps Embed URL
  // Get this from: google.com/maps → Search location → Share → Embed a map
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.6892847665254!2d-87.63286708523442!3d14.449457189881995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6585113810381b%3A0x5cfc9b3f63f4f66c!2sOddity%20Coffee%20Roasters!5e0!3m2!1sen!2sus!4v1721480000000!5m2!1sen!2sus",
  
  // Testimonials
  testimonials: [
    {
      quote: "Wonderful cafe! Coffee was excellent, and it was our first time having Honduran food and we were blown away! I got the burrita Comayaguense and it was delicious. My husband got the baleada and it was fantastic. Would come back again in a heartbeat!",
      author: "Elena Kalahar",
      role: "Google Reviewer"
    },
    {
      quote: "Wow, this place is special. The coffee is exceptional—smooth taste yet still aromatic and full bodied. The quality of the facilities is top rated, the owners have done a great job. Comfortable and inviting. The workers are quick, accurate, and prepare the coffees with skill and care. Don't overlook the food and desserts!",
      author: "Harold Bruce",
      role: "Coffee Enthusiast"
    },
    {
      quote: "Great service, delicious food and flavorful coffee! Look forward to my return trip.",
      author: "Lineus Davis",
      role: "Regular Customer"
    }
  ],
  
  // CTA Banner
  ctaBanner: {
    headline: "Ven a probar la diferencia",
    subheadline: "Café excepcional y auténtica comida hondureña te esperan",
    buttonText: "Cómo Llegar",
    buttonLink: "#location"
  }
};
