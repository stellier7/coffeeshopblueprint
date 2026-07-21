# Oh! Café - Website

Website oficial de Oh! Café, una tienda de café de especialidad ubicada en el corazón colonial de Comayagua, Honduras. Construido con HTML, CSS y JavaScript vanilla—sin dependencias ni pasos de compilación.

---

# Coffee Shop Website Template

A complete, production-ready single-page website template for coffee shops. Built with plain HTML, CSS, and vanilla JavaScript—no build step required. Deploy instantly to Vercel, Netlify, or any static hosting platform.

## ✨ Features

- **Fully Re-skinnable**: Change all content from a single `config.js` file
- **Mobile-First Design**: Responsive across all devices
- **Modern & Elegant**: Warm, cozy coffee shop aesthetic with smooth animations
- **Zero Dependencies**: No npm install needed—just open and use
- **Fast Loading**: Lazy-loaded images, optimized performance
- **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation
- **SEO Ready**: Proper meta tags and semantic structure

## 📂 File Structure

```
coffee-shop-template/
├── index.html       # Main HTML structure
├── styles.css       # All styling (mobile-first, responsive)
├── script.js        # Vanilla JavaScript for interactivity
├── config.js        # ⭐ ALL CLIENT-SPECIFIC CONTENT HERE
└── README.md        # This file
```

## 🚀 Quick Start

1. **Clone or download** this template
2. **Open `index.html`** in a browser—it works immediately!
3. **Customize** by editing `config.js` (see below)

## 🎨 Customizing for a New Client

**All customization happens in `config.js`**—you should never need to touch the other files!

### Step 1: Open config.js

Look for the `SHOP` object at the top of the file. This contains everything you need to change.

### Step 2: Update Basic Info

```javascript
name: "Your Coffee Shop Name",
tagline: "Your unique tagline",
logoText: "YC", // 2-3 letters for the logo
```

### Step 3: Change Colors

```javascript
colors: {
  primary: "#4A2C2A",      // Main brand color
  accent: "#C9A227",       // Highlights and buttons
  background: "#FAF6F1",   // Page background
  text: "#2B1B17"          // Main text color
}
```

💡 **Tip**: Use a color picker tool or your client's brand guidelines. These colors will automatically apply site-wide!

### Step 4: Update Typography

```javascript
fonts: {
  heading: "Playfair Display",  // For titles
  body: "Inter"                  // For paragraphs
}
```

Choose from [Google Fonts](https://fonts.google.com). Popular pairings:
- `Playfair Display` + `Inter` (elegant/modern)
- `Merriweather` + `Open Sans` (classic/readable)
- `Lora` + `Roboto` (warm/clean)

### Step 5: Replace Images

Find high-quality, free images on [Unsplash](https://unsplash.com) or use client-provided photos.

```javascript
hero: {
  image: "YOUR_IMAGE_URL_HERE",
  // ...
},
about: {
  // ...
  image: "YOUR_IMAGE_URL_HERE"
},
gallery: [
  "IMAGE_1_URL",
  "IMAGE_2_URL",
  // Add as many as you want
]
```

**Image Tips**:
- Hero image: 1920x1080px or larger, landscape orientation
- About image: 800x600px or similar
- Gallery images: Square or landscape, consistent aspect ratios look best

### Step 6: Update Content

Edit text for all sections:
- `hero.headline` and `hero.subheadline`
- `about.text` (the shop's story)
- `menu` array (add/remove categories and items)
- `testimonials` array
- `hours` object
- Contact info (`address`, `phone`, `email`)
- Social media links

### Step 7: Update Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for the coffee shop's address
3. Click **Share** → **Embed a map**
4. Copy the `src` URL from the iframe
5. Paste it into `mapEmbedUrl` in config.js

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI (optional): `npm i -g vercel`
2. In your project folder, run: `vercel`
3. Follow prompts—done in seconds!

**Or use the Vercel website**:
1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo or drag/drop your folder
4. Deploy!

### Deploy to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Drag and drop your project folder onto Netlify Drop
3. Done!

**Or use Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages

1. Push your code to a GitHub repo
2. Go to Settings → Pages
3. Select your branch (e.g., `main`)
4. Your site will be live at `https://username.github.io/repo-name`

### Other Static Hosts

This template works with any static file host:
- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Surge.sh

Just upload the files—no build step needed!

## 🎯 What's Included

### Sections

1. **Sticky Navigation** - Logo, smooth-scroll links, mobile-friendly hamburger menu
2. **Hero Section** - Full-width background image with headline and CTA
3. **About Section** - Story text + image, responsive grid layout
4. **Menu Section** - Categorized items with prices, clean typography
5. **Gallery** - Responsive grid with lightbox (click to zoom, keyboard navigation)
6. **Testimonials** - Customer quotes in card layout
7. **Hours & Location** - Formatted hours table, contact info, embedded Google Map
8. **CTA Banner** - Eye-catching call-to-action before footer
9. **Footer** - Social icons, copyright, contact links

### Features

- ✅ Smooth scrolling navigation
- ✅ Mobile menu (hamburger)
- ✅ Scroll-triggered fade-in animations (Intersection Observer)
- ✅ Image lightbox with keyboard support (Esc, Arrow keys)
- ✅ Lazy loading for images
- ✅ Fully responsive (mobile-first CSS)
- ✅ SEO-friendly semantic HTML
- ✅ Accessible (ARIA labels, keyboard navigation)

## 🛠 Advanced Customization

If you need to go beyond `config.js`:

### Editing Styles
Open `styles.css` and look for the section you want to modify. All styles use CSS custom properties (variables) from the config, so most visual changes should happen in `config.js`.

### Adding New Menu Categories
Just add another object to the `menu` array in `config.js`:

```javascript
menu: [
  // existing categories...
  {
    category: "Seasonal Specials",
    items: [
      { name: "Pumpkin Spice Latte", price: "6.00", desc: "Fall favorite" }
    ]
  }
]
```

### Changing Section Order
Edit `index.html` and reorder the `<section>` elements. Each section is clearly labeled with comments.

## 🐛 Troubleshooting

**Images not showing?**
- Check that URLs are correct and publicly accessible
- For local images, place them in an `images/` folder and use relative paths like `images/hero.jpg`

**Fonts not loading?**
- Ensure font names match exactly from Google Fonts
- Check your internet connection (fonts load from Google's CDN)

**Map not displaying?**
- Verify the embed URL is complete (starts with `https://www.google.com/maps/embed?pb=...`)
- Check for any API restrictions in Google Cloud Console

**Mobile menu not working?**
- Ensure all three files (HTML, CSS, JS) are in the same folder
- Check browser console for JavaScript errors

## 📝 License

This template is free to use for personal and commercial projects. No attribution required (but appreciated!).

## 💡 Tips for Success

1. **Use high-quality images** - This makes the biggest visual impact
2. **Keep menu descriptions short** - 5-10 words per item
3. **Test on mobile** - Most visitors will be on phones
4. **Update regularly** - Keep hours, menu, and seasonal offerings current
5. **Optimize images** - Use [TinyPNG](https://tinypng.com) or similar to compress before uploading

## 🎓 Need Help?

- Check that `config.js` syntax is correct (commas, quotes, brackets)
- Open browser DevTools (F12) to see any error messages
- Ensure you're viewing over a web server for production features to work (not just `file://`)

---

**Built with ❤️ for coffee lovers everywhere**

Ready to brew? Start editing `config.js` and make this template your own!
