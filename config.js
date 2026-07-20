// ============================================================
// EDIT HERE FOR NEW CLIENT
// This file contains ALL client-specific content.
// Change values here to rebrand the entire site for a new coffee shop.
// ============================================================

const SHOP = {
  // Basic Info
  name: "Oddity Coffee Roasters",
  tagline: "Exceptionally unusual. Unusually exceptional.",
  logoText: "OC", // Used if no logo image is provided
  
  // Colors - These will be applied site-wide via CSS custom properties
  colors: {
    primary: "#1A1A2E",      // Deep midnight blue - main brand color
    accent: "#E94560",       // Electric pink - for highlights and CTAs
    background: "#F8F4E3",   // Warm cream
    text: "#16213E"          // Dark navy for text
  },
  
  // Typography - Google Fonts will be loaded automatically
  fonts: {
    heading: "Space Grotesk", // Modern, quirky sans-serif for headings
    body: "Inter"              // Clean sans-serif for body text
  },
  
  // Hero Section
  hero: {
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80",
    headline: "Coffee that dares to be different",
    subheadline: "Experimental roasts. Bold flavors. Unconventional excellence.",
    ctaText: "Explore Our Oddities",
    ctaLink: "#menu"
  },
  
  // About Section
  about: {
    title: "The Oddity Origin",
    text: "We're not your average coffee shop, and we're proud of it. Founded by coffee rebels who believe the best beans come from taking risks, Oddity Coffee Roasters specializes in experimental roasting techniques and rare single origins. We hunt down the most interesting beans from around the world, then push boundaries with our roasting profiles. The result? Cups that surprise, delight, and challenge everything you thought you knew about coffee.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
  },
  
  // Menu - Organized by category
  menu: [
    {
      category: "Signature Oddities",
      items: [
        { name: "The Midnight Anomaly", price: "6.00", desc: "Espresso with activated charcoal, vanilla, oat milk" },
        { name: "Lavender Lightning", price: "5.50", desc: "Double shot, house lavender syrup, sparkling water" },
        { name: "Citrus Paradox", price: "5.75", desc: "Cold brew, orange zest, cardamom, tonic" },
        { name: "Maple Smoke", price: "6.50", desc: "Smoked maple latte with sea salt foam" }
      ]
    },
    {
      category: "Classic Reimagined",
      items: [
        { name: "The Rebel Cappuccino", price: "5.00", desc: "Traditional cap with house-roasted experimental blend" },
        { name: "Flat White 2.0", price: "5.25", desc: "Oat milk microfoam, house espresso blend" },
        { name: "Cortado Obscura", price: "4.50", desc: "Dark roast espresso, steamed milk, perfect balance" },
        { name: "Oddity Latte", price: "5.50", desc: "Your choice of milk with our signature blend" }
      ]
    },
    {
      category: "Cold Concoctions",
      items: [
        { name: "Nitro Noir", price: "6.00", desc: "Nitrogen-infused cold brew, cascading perfection" },
        { name: "Iced Unicorn", price: "6.50", desc: "Butterfly pea flower, espresso, coconut milk" },
        { name: "Flash Brew", price: "5.50", desc: "Japanese iced coffee, bright and complex" },
        { name: "Cold Snap", price: "5.00", desc: "Classic cold brew, 18-hour steep" }
      ]
    },
    {
      category: "Strange Snacks",
      items: [
        { name: "Black Sesame Croissant", price: "5.00", desc: "Buttery layers with black sesame paste" },
        { name: "Matcha Cardamom Muffin", price: "4.50", desc: "Unexpected flavor combo, surprisingly perfect" },
        { name: "Tahini Chocolate Chip Cookie", price: "4.00", desc: "Chewy, nutty, ridiculously good" },
        { name: "Mystery Pastry", price: "4.50", desc: "Chef's choice, always interesting" }
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
    monday: "6:30 AM - 7:00 PM",
    tuesday: "6:30 AM - 7:00 PM",
    wednesday: "6:30 AM - 7:00 PM",
    thursday: "6:30 AM - 7:00 PM",
    friday: "6:30 AM - 9:00 PM",
    saturday: "7:00 AM - 9:00 PM",
    sunday: "7:00 AM - 6:00 PM"
  },
  
  // Location & Contact
  address: "456 Bohemian Avenue, Portland, OR 97214",
  phone: "(555) ODD-CAFE",
  email: "hello@odditycoffee.com",
  
  // Social Media
  social: {
    instagram: "https://instagram.com/odditycoffeeroasters",
    facebook: "https://facebook.com/odditycoffeeroasters"
  },
  
  // Google Maps Embed URL
  // Get this from: google.com/maps → Search location → Share → Embed a map
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9604740583894!2d-89.65037708459394!3d39.78172997944751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjIiTiA4OcKwMzgnNTQuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  
  // Testimonials
  testimonials: [
    {
      quote: "I thought I knew coffee until I tried the Midnight Anomaly. This place doesn't just serve drinks—they create experiences. Absolutely mind-blowing.",
      author: "Alex K.",
      role: "Coffee Explorer"
    },
    {
      quote: "Finally, a coffee shop that isn't afraid to be weird! The experimental roasts are incredible and the vibe is perfectly imperfect. My new favorite spot.",
      author: "Jordan P.",
      role: "Creative Regular"
    },
    {
      quote: "The Mystery Pastry is always a gamble and always amazing. These folks understand that the best things in life are a little odd.",
      author: "Sam L.",
      role: "Risk Taker"
    }
  ],
  
  // CTA Banner
  ctaBanner: {
    headline: "Embrace the oddity",
    subheadline: "Come taste what makes us different",
    buttonText: "Find Us",
    buttonLink: "#location"
  }
};
