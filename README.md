# BetterHealth Edge

> Functional Medicine Health Coaching Website - Your path to holistic wellness

## Overview

BetterHealth Edge is a single-page website for functional medicine health coaching, focusing on holistic wellness through personalized nutrition, lifestyle, and integrative health approaches.

## Features

- **Clean, Modern Design** - Calming wellness aesthetic with purple, sage green, and teal color palette
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Powered by GSAP and Lenis for engaging user experience
- **Interactive Carousels** - Showcase approach and wellness pillars
- **Comprehensive Service Information** - Clear presentation of coaching methodology
- **About Section** - Professional credentials and personal story
- **Contact Integration** - Easy inquiry and booking process

## Technology Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modular architecture with design system
  - CSS Variables for theming
  - Modular files: variables, base, components, layout, animations, responsive
- **JavaScript (ES6+)** - Modular organization
  - Navigation with smooth scroll
  - Carousel functionality
  - Scroll-triggered animations
  - Parallax effects
- **External Libraries**
  - [GSAP](https://greensock.com/gsap/) - Advanced animations
  - [Lenis](https://lenis.studiofreight.com/) - Smooth scrolling
  - [ScrollTrigger](https://greensock.com/scrolltrigger/) - Scroll-based animations
- **Google Fonts** - Inter & DM Sans typography

## Project Structure

```
/
├── index.html              # Main website file (2,402 lines)
├── assets/
│   ├── css/               # Modular CSS architecture
│   │   ├── variables.css  # Color, typography, spacing
│   │   ├── base.css       # Reset, typography, links
│   │   ├── components.css # Buttons, nav, reusable components
│   │   ├── layout.css     # Sections, hero, carousel, grid
│   │   ├── animations.css # Keyframes and effects
│   │   └── responsive.css # Media queries (480px, 768px, 1920px)
│   ├── js/                # JavaScript modules
│   │   ├── main.js        # Module initialization
│   │   ├── navigation.js  # Nav highlighting, smooth scroll
│   │   ├── carousel.js    # Carousel navigation
│   │   ├── animations.js  # Scroll and parallax animations
│   │   └── loader.js      # Loader animation
│   └── icons/             # SVG icons (UI & custom wellness icons)
├── images/                # Photography and imagery (Git LFS)
├── CODEBASE_STRUCTURE.md  # Detailed architecture documentation
└── CODE_REVIEW.md         # Code analysis and improvement notes
```

For detailed architecture information, see [CODEBASE_STRUCTURE.md](./CODEBASE_STRUCTURE.md).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### Prerequisites
- Modern web browser
- Local development server (optional but recommended)

### Running Locally

**Option 1: Simple HTTP Server**
```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have npx)
npx http-server

# Then open: http://localhost:8000
```

**Option 2: Direct File Access**
Simply open `index.html` in your browser.

### Code Quality

See [CODE_REVIEW.md](./CODE_REVIEW.md) for detailed code analysis, identified issues, and improvement recommendations.

## Design System

**Color Palette:**
- Primary: Purple tones (wellness, transformation)
- Secondary: Sage green, forest green (nature, balance)
- Accent: Teal (clarity, freshness)
- Neutrals: Grays and whites

**Typography:**
- Headings: DM Sans
- Body: Inter
- Responsive sizing with clamp()

**Spacing Scale:**
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px
- 4xl: 128px

**Responsive Breakpoints:**
- Mobile: 480px
- Tablet: 768px
- Desktop: 1920px

## Content Sections

1. **Hero Section** - Eye-catching introduction with parallax background
2. **Approach Carousel** - 2x2 grid showcasing wellness methodology
3. **Wellness Pillars** - Core features and benefits
4. **Client Testimonials** - Social proof and success stories
5. **About/Story** - Professional background and credentials
6. **Call-to-Action** - Engagement and inquiry sections
7. **Contact** - Easy communication and booking

## Deployment

This static website can be deployed to:
- **GitHub Pages** (recommended for this repository)
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- Any static hosting service

### GitHub Pages Setup
1. Go to repository Settings > Pages
2. Source: Deploy from main branch
3. Folder: / (root)
4. Save
5. Site will be available at: `https://mnvvr.github.io/personal-coaching`

## Performance Optimization

**Current Optimizations:**
- Modular CSS/JS architecture for better caching
- Semantic HTML for faster parsing
- CSS variables for efficient theming
- Git LFS for large image files

**Recommended Future Optimizations:**
- Image compression and WebP conversion
- CSS/JS minification and bundling
- Lazy loading for images
- CDN implementation for assets
- Service worker for offline support

## Git LFS

This repository uses Git LFS (Large File Storage) for image files to optimize repository performance. Large images are stored separately and downloaded on demand.

**Tracked file types:**
- `*.jpg`
- `*.jpeg`
- `*.png`
- `*.gif`

To clone this repository with LFS files:
```bash
git lfs install
git clone git@github.com:mnvvr/personal-coaching.git
```

## Contributing

This is a personal project for BetterHealth Edge coaching services. For inquiries or collaboration, please contact through the website.

## License

© 2025 BetterHealth Edge. All rights reserved.

## Acknowledgments

- Design inspired by modern wellness and health coaching aesthetics
- Icons and imagery selected for wellness and holistic health themes
- GSAP and Lenis for smooth, professional animations

---

Built with care for holistic wellness 🌿
