// ============================================================
// Initialize on DOM Load
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadConfigData();
  setupNavigation();
  setupLightbox();
  setupScrollAnimations();
  setupHeroAnimations();
});

// ============================================================
// Load Configuration Data
// ============================================================
function loadConfigData() {
  // Apply colors as CSS custom properties
  applyColors();
  
  // Load Google Fonts
  loadFonts();
  
  // Populate page content
  populateNavigation();
  populateHero();
  populateAbout();
  populateMenu();
  populateGallery();
  populateTestimonials();
  populateLocation();
  populateCTABanner();
  populateFooter();
  
  // Update page title and meta
  document.title = `${SHOP.name} | ${SHOP.tagline}`;
}

// ============================================================
// Apply Colors from Config
// ============================================================
function applyColors() {
  const root = document.documentElement;
  root.style.setProperty('--primary', SHOP.colors.primary);
  root.style.setProperty('--accent', SHOP.colors.accent);
  root.style.setProperty('--background', SHOP.colors.background);
  root.style.setProperty('--text', SHOP.colors.text);
}

// ============================================================
// Load Google Fonts
// ============================================================
function loadFonts() {
  const root = document.documentElement;
  root.style.setProperty('--font-heading', `'${SHOP.fonts.heading}', serif`);
  root.style.setProperty('--font-body', `'${SHOP.fonts.body}', sans-serif`);
  
  // Load fonts from Google Fonts
  const headingFont = SHOP.fonts.heading.replace(/ /g, '+');
  const bodyFont = SHOP.fonts.body.replace(/ /g, '+');
  const fontLink = document.getElementById('google-fonts-link');
  fontLink.href = `https://fonts.googleapis.com/css2?family=${headingFont}:wght@400;700&family=${bodyFont}:wght@400;500;600;700&display=swap`;
}

// ============================================================
// Populate Navigation
// ============================================================
function populateNavigation() {
  const logoText = document.getElementById('logo-text');
  
  // If logo image is provided, show image + text; otherwise just text
  if (SHOP.logoImage) {
    logoText.innerHTML = `<img src="${SHOP.logoImage}" alt="${SHOP.name}" class="logo-image"> <span class="logo-name">${SHOP.name}</span>`;
  } else {
    logoText.textContent = SHOP.logoText || SHOP.name;
  }
}

// ============================================================
// Populate Hero Section
// ============================================================
function populateHero() {
  const heroImage = document.getElementById('hero-image');
  const heroHeadline = document.getElementById('hero-headline');
  const heroSubheadline = document.getElementById('hero-subheadline');
  const heroCTA = document.getElementById('hero-cta');
  
  heroImage.style.backgroundImage = `url('${SHOP.hero.image}')`;
  heroHeadline.textContent = SHOP.hero.headline;
  heroSubheadline.textContent = SHOP.hero.subheadline;
  heroCTA.textContent = SHOP.hero.ctaText;
  heroCTA.href = SHOP.hero.ctaLink;
}

// ============================================================
// Populate About Section
// ============================================================
function populateAbout() {
  const aboutTitle = document.getElementById('about-title');
  const aboutText = document.getElementById('about-text');
  const aboutImage = document.getElementById('about-image');
  
  aboutTitle.textContent = SHOP.about.title;
  aboutText.textContent = SHOP.about.text;
  aboutImage.src = SHOP.about.image;
  aboutImage.alt = `${SHOP.name} interior`;
}

// ============================================================
// Populate Menu Section
// ============================================================
function populateMenu() {
  const menuGrid = document.getElementById('menu-grid');
  
  SHOP.menu.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'menu-category fade-in';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'menu-category-title';
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);
    
    category.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';
      
      const itemHeader = document.createElement('div');
      itemHeader.className = 'menu-item-header';
      
      const itemName = document.createElement('span');
      itemName.className = 'menu-item-name';
      itemName.textContent = item.name;
      
      const itemPrice = document.createElement('span');
      itemPrice.className = 'menu-item-price';
      itemPrice.textContent = `$${item.price}`;
      
      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemPrice);
      
      const itemDesc = document.createElement('p');
      itemDesc.className = 'menu-item-desc';
      itemDesc.textContent = item.desc;
      
      itemDiv.appendChild(itemHeader);
      itemDiv.appendChild(itemDesc);
      categoryDiv.appendChild(itemDiv);
    });
    
    menuGrid.appendChild(categoryDiv);
  });
}

// ============================================================
// Populate Gallery Section
// ============================================================
function populateGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  
  SHOP.gallery.forEach((imageUrl, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item fade-in';
    galleryItem.dataset.index = index;
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${SHOP.name} gallery image ${index + 1}`;
    img.loading = 'lazy';
    
    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
    
    // Add click event for lightbox
    galleryItem.addEventListener('click', () => openLightbox(index));
  });
}

// ============================================================
// Populate Testimonials Section
// ============================================================
function populateTestimonials() {
  const testimonialsGrid = document.getElementById('testimonials-grid');
  
  SHOP.testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card fade-in';
    
    const quote = document.createElement('p');
    quote.className = 'testimonial-quote';
    quote.textContent = testimonial.quote;
    
    const author = document.createElement('p');
    author.className = 'testimonial-author';
    author.textContent = testimonial.author;
    
    const role = document.createElement('p');
    role.className = 'testimonial-role';
    role.textContent = testimonial.role;
    
    card.appendChild(quote);
    card.appendChild(author);
    card.appendChild(role);
    testimonialsGrid.appendChild(card);
  });
}

// ============================================================
// Populate Location Section
// ============================================================
function populateLocation() {
  // Hours table
  const hoursTable = document.getElementById('hours-table');
  
  Object.entries(SHOP.hours).forEach(([day, hours]) => {
    const row = document.createElement('tr');
    
    const dayCell = document.createElement('td');
    dayCell.textContent = day.charAt(0).toUpperCase() + day.slice(1);
    
    const hoursCell = document.createElement('td');
    hoursCell.textContent = hours;
    
    row.appendChild(dayCell);
    row.appendChild(hoursCell);
    hoursTable.appendChild(row);
  });
  
  // Contact info
  const addressLink = document.getElementById('address-link');
  addressLink.textContent = SHOP.address;
  addressLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.address)}`;
  
  const phoneLink = document.getElementById('phone-link');
  phoneLink.textContent = SHOP.phone;
  phoneLink.href = `tel:${SHOP.phone.replace(/\D/g, '')}`;
  
  const emailLink = document.getElementById('email-link');
  emailLink.textContent = SHOP.email;
  emailLink.href = `mailto:${SHOP.email}`;
  
  // Map embed
  const mapEmbed = document.getElementById('map-embed');
  mapEmbed.src = SHOP.mapEmbedUrl;
}

// ============================================================
// Populate CTA Banner
// ============================================================
function populateCTABanner() {
  const ctaHeadline = document.getElementById('cta-headline');
  const ctaSubheadline = document.getElementById('cta-subheadline');
  const ctaButton = document.getElementById('cta-button');
  
  ctaHeadline.textContent = SHOP.ctaBanner.headline;
  ctaSubheadline.textContent = SHOP.ctaBanner.subheadline;
  ctaButton.textContent = SHOP.ctaBanner.buttonText;
  ctaButton.href = SHOP.ctaBanner.buttonLink;
}

// ============================================================
// Populate Footer
// ============================================================
function populateFooter() {
  const currentYear = document.getElementById('current-year');
  currentYear.textContent = new Date().getFullYear();
  
  const footerShopName = document.getElementById('footer-shop-name');
  footerShopName.textContent = SHOP.name;
  
  const instagramLink = document.getElementById('instagram-link');
  instagramLink.href = SHOP.social.instagram;
  
  const facebookLink = document.getElementById('facebook-link');
  facebookLink.href = SHOP.social.facebook;
}

// ============================================================
// Navigation - Hide/Show on Scroll, Mobile Menu & Smooth Scroll
// ============================================================
function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  
  // Variables for hide/show behavior
  let lastScrollY = window.scrollY;
  let ticking = false;
  const scrollThreshold = 100;
  
  // Optimized scroll handler with requestAnimationFrame
  function updateNavbarOnScroll() {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class for shadow and background
    if (currentScrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar based on scroll direction
    if (currentScrollY > scrollThreshold) {
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        // Scrolling down - hide navbar
        navbar.classList.add('navbar-hidden');
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        navbar.classList.remove('navbar-hidden');
      }
    } else {
      // At top of page - always show
      navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
  }
  
  // Throttled scroll listener with requestAnimationFrame
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbarOnScroll);
      ticking = true;
    }
  }, { passive: true });
  
  // Initial call
  updateNavbarOnScroll();
  
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });
  
  // Close mobile menu when link is clicked
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    });
  });
  
  // Smooth scroll with offset for fixed navbar
  navLinkItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      if (targetId === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = targetSection.offsetTop - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });
}

// ============================================================
// Lightbox Functionality
// ============================================================
let currentLightboxIndex = 0;

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  
  // Close lightbox
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Navigation
  lightboxPrev.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + SHOP.gallery.length) % SHOP.gallery.length;
    updateLightboxImage();
  });
  
  lightboxNext.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % SHOP.gallery.length;
    updateLightboxImage();
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      lightboxPrev.click();
    } else if (e.key === 'ArrowRight') {
      lightboxNext.click();
    }
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = SHOP.gallery[currentLightboxIndex];
  lightboxImage.alt = `${SHOP.name} gallery image ${currentLightboxIndex + 1}`;
}

// ============================================================
// Scroll Animations with Intersection Observer
// ============================================================
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  // Special observer for CTA banner section
  const ctaBanner = document.querySelector('.cta-banner');
  if (ctaBanner) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });
    
    ctaObserver.observe(ctaBanner);
  }
}

// ============================================================
// Hero Animations - Dramatic Entrance, Parallax & Scroll-Out
// ============================================================
function setupHeroAnimations() {
  const hero = document.getElementById('hero');
  const heroImage = document.getElementById('hero-image');
  const heroContent = document.querySelector('.hero-content');
  const heroOverlay = document.querySelector('.hero-overlay');
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Trigger dramatic entrance animation on load
  setTimeout(() => {
    hero.classList.add('hero-animate-in');
    
    // Add entrance-complete class after all animations finish
    // Longest animation is 1.1s with 0.9s delay = 2s total
    if (!prefersReducedMotion) {
      setTimeout(() => {
        hero.classList.add('hero-entrance-complete');
      }, 2100);
    }
  }, 100);
  
  // Exit early if user prefers reduced motion (skip parallax and scroll effects)
  if (prefersReducedMotion) {
    // Show all content immediately
    heroImage.style.opacity = '1';
    heroImage.style.transform = 'scale(1.1)';
    heroOverlay.style.opacity = '1';
    hero.classList.add('hero-entrance-complete');
    return;
  }
  
  // Variables for performance optimization
  let ticking = false;
  let lastScrollY = window.scrollY;
  
  // Parallax and scroll-out effect using requestAnimationFrame
  function updateHeroOnScroll() {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const scrollProgress = Math.min(scrollY / heroHeight, 1);
    
    // Parallax effect - background moves slower (0.5x speed creates depth)
    const parallaxOffset = scrollY * 0.5;
    heroImage.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
    
    // Scroll-out fade and scale effect
    const fadeStart = 0.3;
    const fadeProgress = Math.max((scrollProgress - fadeStart) / (1 - fadeStart), 0);
    
    if (scrollProgress > fadeStart) {
      const opacity = 1 - (fadeProgress * 0.6);
      const scale = 1 - (fadeProgress * 0.08);
      
      heroContent.style.opacity = opacity;
      heroContent.style.transform = `scale(${scale}) translateY(${fadeProgress * 30}px)`;
      heroOverlay.style.opacity = opacity;
    } else {
      heroContent.style.opacity = '';
      heroContent.style.transform = '';
      heroOverlay.style.opacity = '';
    }
    
    ticking = false;
  }
  
  // Optimized scroll handler with requestAnimationFrame
  function onScroll() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeroOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Throttled scroll listener for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(onScroll);
  }, { passive: true });
  
  // Initial call to set up proper state
  updateHeroOnScroll();
  
  // Observe hero section to optimize when it's out of view
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // Hero is out of view, can skip updates
        hero.style.willChange = 'auto';
        heroImage.style.willChange = 'auto';
        heroContent.style.willChange = 'auto';
      } else {
        // Hero is in view, optimize for transforms
        hero.style.willChange = 'opacity, transform';
        heroImage.style.willChange = 'transform';
        heroContent.style.willChange = 'transform, opacity';
      }
    });
  }, {
    rootMargin: '100px 0px 100px 0px'
  });
  
  heroObserver.observe(hero);
}
