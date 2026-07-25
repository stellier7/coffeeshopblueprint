// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Roasted Roots Coffee Co.",
  tagline: "Small batch. Big heart.",
  logoText: "RR", // Used if no logo image is provided
  
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
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80",
    headline: "Handcrafted coffee, made with care",
    subheadline: "Your neighborhood coffee shop since 2020",
    ctaText: "View Menu",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "Our Story",
    text: "Born from a passion for exceptional coffee and community connection, Roasted Roots Coffee Co. opened its doors in 2020. We source our beans directly from sustainable farms, roast in small batches, and craft each cup with intention. More than a coffee shop, we're a gathering place where neighbors become friends and every visit feels like coming home.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
  },
  
  // Menu - Organized by category
  menu: [
    {
      category: "Espresso Drinks",
      items: [
        { name: "Espresso", price: "3.00", desc: "Single origin, pulled to perfection" },
        { name: "Cappuccino", price: "4.50", desc: "Rich espresso, steamed milk, velvety foam" },
        { name: "Flat White", price: "4.75", desc: "Microfoam over double espresso" },
        { name: "Latte", price: "5.00", desc: "Smooth espresso with steamed milk" },
        { name: "Mocha", price: "5.50", desc: "Espresso, chocolate, steamed milk, whipped cream" }
      ]
    },
    {
      category: "Brewed Coffee",
      items: [
        { name: "Drip Coffee", price: "3.50", desc: "Rotating single origin, freshly brewed" },
        { name: "Pour Over", price: "5.00", desc: "Made to order, choose your bean" },
        { name: "Cold Brew", price: "4.50", desc: "Smooth, never bitter, steeped 16 hours" },
        { name: "Nitro Cold Brew", price: "5.50", desc: "Cascading cold brew on tap" }
      ]
    },
    {
      category: "Specialty",
      items: [
        { name: "Chai Latte", price: "5.00", desc: "House-made spiced chai with steamed milk" },
        { name: "Matcha Latte", price: "5.50", desc: "Ceremonial grade matcha, creamy and smooth" },
        { name: "Hot Chocolate", price: "4.00", desc: "Rich Belgian chocolate, steamed milk" }
      ]
    },
    {
      category: "Pastries",
      items: [
        { name: "Croissant", price: "4.00", desc: "Buttery, flaky, baked fresh daily" },
        { name: "Almond Croissant", price: "5.00", desc: "Filled with almond cream, toasted almonds" },
        { name: "Blueberry Muffin", price: "4.50", desc: "Packed with fresh blueberries" },
        { name: "Banana Bread", price: "4.00", desc: "Moist, with walnuts and cinnamon" }
      ]
    }
  ],
  
  // Gallery - Image URLs
  gallery: [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80"
  ],
  
  // Hours
  hours: {
    monday: "7:00 AM - 6:00 PM",
    tuesday: "7:00 AM - 6:00 PM",
    wednesday: "7:00 AM - 6:00 PM",
    thursday: "7:00 AM - 6:00 PM",
    friday: "7:00 AM - 8:00 PM",
    saturday: "8:00 AM - 8:00 PM",
    sunday: "8:00 AM - 4:00 PM"
  },
  
  // Location & Contact
  address: "123 Main Street, Springfield, IL 62701",
  phone: "(555) 123-4567",
  email: "hello@roastedroots.coffee",
  
  // Social Media
  social: {
    instagram: "https://instagram.com/roastedrootscoffee",
    facebook: "https://facebook.com/roastedrootscoffee"
  },
  
  // Google Maps Embed URL
  // Get this from: google.com/maps → Search location → Share → Embed a map
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9604740583894!2d-89.65037708459394!3d39.78172997944751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjIiTiA4OcKwMzgnNTQuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  
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
    headline: "Come visit us today",
    subheadline: "Experience the perfect cup",
    buttonText: "Get Directions",
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
    speed: 'normal',
    
    // Parallax: true | false
    // Enable/disable scroll-linked parallax effects
    parallax: true,
    
    // 3D: true | false
    // Enable/disable 3D transforms and WebGL effects
    enable3D: false
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
