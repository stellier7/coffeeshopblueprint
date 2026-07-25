// ============================================================
// OPTIONAL THREE.JS HERO BACKGROUND
// Modern geometric particle field for hero section
// ============================================================

let scene, camera, renderer, particles;
let animationFrameId;

function init3DHero() {
  // Check if 3D is enabled in config
  if (!SHOP.animations || SHOP.animations.enable3D === false) {
    return;
  }
  
  // Check if Three.js is available
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded. Skipping 3D hero background.');
    return;
  }
  
  const heroContainer = document.getElementById('hero');
  if (!heroContainer) return;
  
  // Create scene
  scene = new THREE.Scene();
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 50;
  
  // Renderer setup with alpha for transparency
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    powerPreference: 'high-performance' // Optimize for performance
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.zIndex = '1';
  renderer.domElement.style.pointerEvents = 'none';
  renderer.domElement.id = 'hero-3d-canvas';
  
  // Insert canvas behind hero content but above hero image
  const heroOverlay = heroContainer.querySelector('.hero-overlay');
  if (heroOverlay) {
    heroContainer.insertBefore(renderer.domElement, heroOverlay);
  } else {
    heroContainer.appendChild(renderer.domElement);
  }
  
  // Create particles - modern geometric style
  createParticles();
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);
  
  // Start animation
  animate();
  
  // Stop animation when hero is out of view for performance
  setupVisibilityObserver();
}

function createParticles() {
  // Get colors from config
  const accentColor = new THREE.Color(SHOP.colors.accent || '#C9A227');
  const primaryColor = new THREE.Color(SHOP.colors.primary || '#4A2C2A');
  
  // Particle count based on device performance
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 100 : 200;
  
  // Geometry
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  const sizes = [];
  const velocities = [];
  
  for (let i = 0; i < particleCount; i++) {
    // Random position in 3D space
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 50;
    positions.push(x, y, z);
    
    // Alternate between accent and primary colors
    const color = i % 2 === 0 ? accentColor : primaryColor;
    colors.push(color.r, color.g, color.b);
    
    // Random sizes
    sizes.push(Math.random() * 3 + 1);
    
    // Random velocities for organic movement
    velocities.push(
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.01
    );
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
  geometry.userData.velocities = velocities;
  
  // Material - point sprites with vertex colors
  const material = new THREE.PointsMaterial({
    size: 2,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);
  
  if (!particles) return;
  
  // Gentle rotation
  particles.rotation.y += 0.0005;
  particles.rotation.x += 0.0002;
  
  // Organic particle movement
  const positions = particles.geometry.attributes.position.array;
  const velocities = particles.geometry.userData.velocities;
  
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] += velocities[i];
    positions[i + 1] += velocities[i + 1];
    positions[i + 2] += velocities[i + 2];
    
    // Boundary wrapping for infinite effect
    if (Math.abs(positions[i]) > 50) velocities[i] *= -1;
    if (Math.abs(positions[i + 1]) > 50) velocities[i + 1] *= -1;
    if (Math.abs(positions[i + 2]) > 25) velocities[i + 2] *= -1;
  }
  
  particles.geometry.attributes.position.needsUpdate = true;
  
  // Render scene
  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!camera || !renderer) return;
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function setupVisibilityObserver() {
  const heroContainer = document.getElementById('hero');
  if (!heroContainer) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // Pause animation when hero is out of view
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        // Resume animation when hero is in view
        if (!animationFrameId) {
          animate();
        }
      }
    });
  }, {
    rootMargin: '100px 0px'
  });
  
  observer.observe(heroContainer);
}

// Cleanup function
function cleanup3DHero() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  if (particles) {
    particles.geometry.dispose();
    particles.material.dispose();
  }
  
  if (renderer) {
    renderer.dispose();
    const canvas = document.getElementById('hero-3d-canvas');
    if (canvas) canvas.remove();
  }
}

// Initialize when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for Three.js to load
    setTimeout(init3DHero, 500);
  });
} else {
  setTimeout(init3DHero, 500);
}
