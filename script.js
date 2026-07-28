// ============================================================
// Initialize on DOM Load
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadConfigData();
  setupNavigation();
  setupMenuAccordion();
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
  const logoImage = document.getElementById('logo-image');
  const logoText = document.getElementById('logo-text');
  
  // If logo image is provided, show it; otherwise show text
  if (SHOP.logoImage) {
    logoImage.src = SHOP.logoImage;
    logoImage.style.display = 'block';
    logoText.style.display = 'none';
  } else {
    logoImage.style.display = 'none';
    logoText.textContent = SHOP.logoText || SHOP.name;
    logoText.style.display = 'block';
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
  
  heroImage.src = SHOP.hero.image;
  heroImage.alt = SHOP.hero.headline || SHOP.name;
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
// Populate Menu Section (accordion category cards)
// ============================================================
function populateMenu() {
  const menuGrid = document.getElementById('menu-grid');
  
  SHOP.menu.forEach((category, index) => {
    const categoryDiv = document.createElement('article');
    categoryDiv.className = 'menu-category fade-in';
    
    const panelId = `menu-panel-${index}`;
    const toggleId = `menu-toggle-${index}`;
    
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'menu-category-toggle';
    toggle.id = toggleId;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', panelId);
    
    const categoryTitle = document.createElement('span');
    categoryTitle.className = 'menu-category-title';
    categoryTitle.textContent = category.category;
    
    const chevron = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    chevron.setAttribute('class', 'menu-category-chevron');
    chevron.setAttribute('viewBox', '0 0 24 24');
    chevron.setAttribute('aria-hidden', 'true');
    chevron.setAttribute('focusable', 'false');
    const chevronPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    chevronPath.setAttribute('d', 'M6 9l6 6 6-6');
    chevronPath.setAttribute('fill', 'none');
    chevronPath.setAttribute('stroke', 'currentColor');
    chevronPath.setAttribute('stroke-width', '2.25');
    chevronPath.setAttribute('stroke-linecap', 'round');
    chevronPath.setAttribute('stroke-linejoin', 'round');
    chevron.appendChild(chevronPath);
    
    toggle.appendChild(categoryTitle);
    toggle.appendChild(chevron);
    categoryDiv.appendChild(toggle);
    
    const panel = document.createElement('div');
    panel.className = 'menu-category-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', toggleId);
    
    const itemsWrap = document.createElement('div');
    itemsWrap.className = 'menu-category-items';
    
    category.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';
      
      const itemHeader = document.createElement('div');
      itemHeader.className = 'menu-item-header';
      
      const itemName = document.createElement('span');
      itemName.className = 'menu-item-name';
      itemName.textContent = item.name;
      
      const itemDots = document.createElement('span');
      itemDots.className = 'menu-item-dots';
      itemDots.setAttribute('aria-hidden', 'true');
      
      const itemPrice = document.createElement('span');
      itemPrice.className = 'menu-item-price';
      itemPrice.textContent = item.price;
      
      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemDots);
      itemHeader.appendChild(itemPrice);
      
      itemDiv.appendChild(itemHeader);
      
      if (item.desc) {
        const itemDesc = document.createElement('p');
        itemDesc.className = 'menu-item-desc';
        itemDesc.textContent = item.desc;
        itemDiv.appendChild(itemDesc);
      }
      
      itemsWrap.appendChild(itemDiv);
    });
    
    panel.appendChild(itemsWrap);
    categoryDiv.appendChild(panel);
    menuGrid.appendChild(categoryDiv);
  });
}

// ============================================================
// Menu Accordion — single-open cards with smooth expand/collapse
// ============================================================
function setupMenuAccordion() {
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) return;
  
  const cards = Array.from(menuGrid.querySelectorAll('.menu-category'));
  if (!cards.length) return;
  
  const navbar = document.getElementById('navbar');
  let animating = false;
  let cachedSafeAreaTop = null;
  
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const isMobileViewport = () =>
    window.matchMedia('(max-width: 768px)').matches;
  
  function readSafeAreaTop() {
    if (cachedSafeAreaTop != null) return cachedSafeAreaTop;
    const probe = document.createElement('div');
    probe.style.cssText =
      'position:fixed;top:0;left:0;visibility:hidden;pointer-events:none;' +
      'padding-top:env(safe-area-inset-top,0px);';
    document.body.appendChild(probe);
    cachedSafeAreaTop = parseFloat(getComputedStyle(probe).paddingTop) || 0;
    probe.remove();
    return cachedSafeAreaTop;
  }
  
  function setPanelHeight(panel, open) {
    if (open) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    } else {
      panel.style.maxHeight = '0px';
    }
  }
  
  function waitForPanelTransition(panel) {
    return new Promise(resolve => {
      if (prefersReducedMotion()) {
        resolve();
        return;
      }
      
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        panel.removeEventListener('transitionend', onEnd);
        resolve();
      };
      
      const onEnd = (event) => {
        if (event.target !== panel || event.propertyName !== 'max-height') return;
        finish();
      };
      
      panel.addEventListener('transitionend', onEnd);
      // Safety net if transitionend doesn't fire
      setTimeout(finish, 450);
    });
  }
  
  function collapseCard(card) {
    const toggle = card.querySelector('.menu-category-toggle');
    const panel = card.querySelector('.menu-category-panel');
    if (!toggle || !panel) return null;
    
    card.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    
    // Snap from 'none' to pixel height so the collapse can animate
    if (panel.style.maxHeight === 'none' || !panel.style.maxHeight) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      void panel.offsetHeight;
    }
    setPanelHeight(panel, false);
    return panel;
  }
  
  function expandCard(card) {
    const toggle = card.querySelector('.menu-category-toggle');
    const panel = card.querySelector('.menu-category-panel');
    if (!toggle || !panel) return null;
    
    card.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    setPanelHeight(panel, true);
    
    const unlockHeight = () => {
      if (card.classList.contains('is-open')) {
        panel.style.maxHeight = 'none';
      }
    };
    
    if (prefersReducedMotion()) {
      unlockHeight();
    } else {
      const onEnd = (event) => {
        if (event.target !== panel || event.propertyName !== 'max-height') return;
        panel.removeEventListener('transitionend', onEnd);
        unlockHeight();
      };
      panel.addEventListener('transitionend', onEnd);
    }
    
    return panel;
  }
  
  // How far below the visible top (under Safari chrome) the card should sit
  function getPinInset() {
    const safeArea = readSafeAreaTop();
    const visualOffset = window.visualViewport ? window.visualViewport.offsetTop : 0;
    // Keep the category header clear of Safari's URL / status chrome
    const browserChromePad = 16;
    return safeArea + visualOffset + browserChromePad;
  }
  
  // Keep site header tucked away while a menu card is open/moving on mobile,
  // so scroll-driven navbar show/hide cannot cover the category title.
  function lockNavbarAway() {
    if (!isMobileViewport()) return;
    document.body.classList.add('menu-nav-locked');
    if (navbar) navbar.classList.add('navbar-hidden');
  }
  
  function unlockNavbar() {
    document.body.classList.remove('menu-nav-locked');
  }
  
  function syncNavbarLock() {
    const anyOpen = cards.some(card => card.classList.contains('is-open'));
    if (anyOpen && isMobileViewport()) {
      lockNavbarAway();
    } else {
      unlockNavbar();
    }
  }
  
  // Pin open card just under the visible top of the screen (mobile only).
  function pinCardToTop(card) {
    if (!isMobileViewport()) return;
    
    lockNavbarAway();
    
    const inset = getPinInset();
    const top = Math.round(
      window.scrollY + card.getBoundingClientRect().top - inset
    );
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }
  
  async function openCard(card) {
    // Lock before any expand/collapse/scroll so the header cannot pop back in
    lockNavbarAway();
    
    const previous = cards.find(c => c !== card && c.classList.contains('is-open'));
    
    if (previous) {
      const prevPanel = collapseCard(previous);
      if (prevPanel) await waitForPanelTransition(prevPanel);
    }
    
    // Expand in place first (under the tap), then glide to the top
    const panel = expandCard(card);
    if (panel) await waitForPanelTransition(panel);
    
    pinCardToTop(card);
    syncNavbarLock();
  }
  
  cards.forEach(card => {
    const toggle = card.querySelector('.menu-category-toggle');
    const panel = card.querySelector('.menu-category-panel');
    if (!toggle || !panel) return;
    
    panel.style.maxHeight = '0px';
    
    toggle.addEventListener('click', async () => {
      if (animating) return;
      animating = true;
      
      try {
        if (card.classList.contains('is-open')) {
          const closing = collapseCard(card);
          if (closing) await waitForPanelTransition(closing);
          syncNavbarLock();
        } else {
          await openCard(card);
        }
      } finally {
        animating = false;
      }
    });
  });
  
  window.addEventListener('resize', () => {
    cachedSafeAreaTop = null;
    syncNavbarLock();
    cards.forEach(card => {
      if (!card.classList.contains('is-open')) return;
      const panel = card.querySelector('.menu-category-panel');
      if (!panel || panel.style.maxHeight === 'none') return;
      setPanelHeight(panel, true);
    });
  }, { passive: true });
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
    
    // Menu accordion owns the header while a category is open on mobile —
    // don't let scroll-up bring it back over the category title.
    if (document.body.classList.contains('menu-nav-locked')) {
      navbar.classList.add('navbar-hidden');
      lastScrollY = currentScrollY;
      ticking = false;
      return;
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
// Hero Animations - Load entrance only (no scroll / parallax)
// ============================================================
function setupHeroAnimations() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Trigger content entrance on load. Image stays static — no scroll
  // listeners, transforms, will-change, or parallax of any kind.
  setTimeout(() => {
    hero.classList.add('hero-animate-in');
  }, 100);
}
