# Neon Café Image Placement Guide

This guide shows you where to place each of the images you provided.

## Image Directory Structure

All images should be placed in the `/images/` folder in the root directory.

## Required Images

### 1. Logo
- **File name**: `logo.png` or `logo.jpg`
- **Image**: The neon café gradient logo (first image you provided)
- **Location**: `/images/logo.png`
- **Notes**: The logo will be displayed circularly via CSS

### 2. Hero Image
- **File name**: `hero.jpg`
- **Image**: The stunning interior shot with pink neon lights and circular neon café sign
- **Location**: `/images/hero.jpg`
- **Recommended size**: 1920x1080px or larger (landscape)

### 3. About Section Image
- **File name**: `about.jpg`
- **Image**: Can use the coffee and brownie on green velvet chair image
- **Location**: `/images/about.jpg`
- **Recommended size**: 800x600px or similar

### 4. Gallery Images
Place these images in the `/images/gallery/` folder:

1. **gallery-1.jpg** - Coffee and brownie on green velvet chair
2. **gallery-2.jpg** - Iced coffee drink with neon café branding  
3. **gallery-3.jpg** - Woman with neon rainbow and neon café bag
4. **gallery-4.jpg** - Slice of cake/tart on plate
5. **gallery-5.jpg** - Another dessert slice
6. **gallery-6.jpg** - Any additional café interior or product shots

## Quick Setup Instructions

1. Create the gallery subfolder:
   ```bash
   mkdir -p images/gallery
   ```

2. Download your images and place them in the appropriate locations:
   - `images/logo.png`
   - `images/hero.jpg`
   - `images/about.jpg`
   - `images/gallery/gallery-1.jpg`
   - `images/gallery/gallery-2.jpg`
   - `images/gallery/gallery-3.jpg`
   - `images/gallery/gallery-4.jpg`
   - `images/gallery/gallery-5.jpg`
   - `images/gallery/gallery-6.jpg`

3. The config.js file is already set up to reference these local paths!

## Alternative: Upload to Image Host

If you prefer, you can upload your images to an image hosting service like:
- Cloudinary
- Imgur (direct image links)
- Your own server/hosting

Then update the URLs in `config.js` accordingly.
