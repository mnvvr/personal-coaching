# BetterHealth Edge - Codebase Structure

## 📁 Project Organization

```
tugce coach/
├── index.html                     # Main HTML file (HTML only)
├── CODEBASE_STRUCTURE.md         # This file
├── assets/
│   ├── css/
│   │   ├── variables.css         # Color, typography, spacing variables
│   │   ├── base.css              # Reset, body, typography base styles
│   │   ├── components.css        # Buttons, navigation, reusable components
│   │   ├── layout.css            # Sections, hero, approach, grid layouts
│   │   ├── animations.css        # Keyframes and animation utilities
│   │   └── responsive.css        # Media queries (mobile-first)
│   ├── js/
│   │   ├── main.js               # Initialization and module coordination
│   │   ├── navigation.js         # Navigation highlighting and smooth scroll
│   │   ├── carousel.js           # Approach carousel navigation
│   │   ├── animations.js         # Scroll animations and parallax
│   │   └── loader.js             # Donk loader animation (currently disabled)
│   ├── icons/
│       └── svg/
│           ├── arrow-left.svg    # Left navigation arrow
│           ├── arrow-right.svg   # Right navigation arrow
│           ├── menu.svg          # Menu hamburger icon
│           └── close.svg         # Close X icon
│   └── images/
│       ├── hero/                 # Hero section images
│       ├── approach/             # Approach carousel images
│       ├── process/              # How it works section images
│       ├── about/                # About section images
│       ├── gallery/              # Gallery and misc images
│       └── original/             # Original/backup images
├── index-reference.html          # Reference version (backup)
├── index-backup-temp.html        # Temporary backup
└── README.md                      # Project readme
```

## 🎨 CSS Architecture

### variables.css
- **Color variables** — Primary, secondary, tertiary text colors
- **Spacing variables** — Standardized spacing scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- **Typography variables** — Font families (Inter, Fraunces)
- **Z-index variables** — Layering hierarchy
- **Transition variables** — Animation timing

### base.css
- **Global reset** — Margin, padding, box-sizing
- **Body & typography** — Font smoothing, base text styles
- **Heading styles** — h1, h2, h3 with consistent letterspacing
- **Link styles** — Color transitions and hover states
- **Utility classes** — .text-primary, .text-secondary, etc.

### components.css
- **.cta-button** — Primary CTA styling with hover animation
- **.cta-button.dark** — Dark variant
- **nav** — Fixed navigation with backdrop blur
- **.nav-container** — Centered navigation layout
- **.logo** — Logo styling with hover
- **.nav-links** — Navigation link list with underline animation
- **.section-label, .section-title, .section-text** — Reusable section typography

### layout.css
- **section** — Base section styling with padding
- **.hero** — Full-height hero section with background image
- **.hero-background** — Parallax background image
- **.hero-content, .hero-grid** — Hero content layout
- **.approach** — Approach section
- **.approach-carousel** — 2x2 grid carousel layout
- **.carousel-item** — Grid layout (text left, image right)
- **.carousel-content, .carousel-image** — Content and image areas
- **.who-section** — 2-column grid for "Who I Work With"
- **.quick-cta** — Black CTA section
- **.story** — Story section with sidebar

### animations.css
- **@keyframes fadeIn, fadeOut** — Opacity animations
- **@keyframes slideInUp, slideInDown, slideInLeft, slideInRight** — Directional slide animations
- **@keyframes scaleIn** — Scale zoom animation
- **.animate-fade-in, .animate-slide-in-up, .animate-scale-in** — Utility animation classes
- **.hover-lift, .hover-scale** — Reusable hover effects

### responsive.css
- **@media (max-width: 768px)** — Tablet breakpoint
  - Hides navigation links
  - Adjusts typography sizes
  - Carousel becomes single column
  - Sections stack vertically
  
- **@media (max-width: 480px)** — Mobile breakpoint
  - Extra small padding
  - Buttons full-width
  - Even smaller typography
  
- **@media (min-width: 1920px)** — Large screen breakpoint
  - Increased heading sizes

## 🔧 JavaScript Architecture

### main.js
- **Module initialization** — Coordinates all JS modules
- **DOMContentLoaded** — Waits for DOM ready before initialization
- **Module checks** — Safely checks if module functions exist
- **Window resize** — Debounced resize handler

### navigation.js
- **initNavigation()** — Smooth scroll and nav highlighting
- **Smooth scrolling** — `scrollIntoView()` with smooth behavior
- **Nav link highlighting** — Updates active state based on scroll position
- **Scroll listener** — Detects which section is in view

### carousel.js
- **initCarousel()** — Approach carousel navigation
- **showItem(index)** — Shows specific carousel slide
- **nextItem()** — Navigation to next slide (with looping)
- **prevItem()** — Navigation to previous slide
- **Keyboard navigation** — Arrow keys for carousel control
- **Event listeners** — Click handlers for prev/next buttons

### animations.js
- **initAnimations()** — Scroll and intersection animations
- **IntersectionObserver** — Fade-in animations for sections
- **Smooth scroll** — All anchor link smooth scrolling
- **Parallax** — Hero background parallax effect

### loader.js
- **initLoader()** — Donk loader animation (currently disabled)
- **restoreLoader()** — Function to re-enable loader
- **removeLoader()** — Function to permanently delete loader
- **Display: none** — Loader is hidden via CSS (display: none in .donk)

## 📦 SVG Icons

All icons are in `assets/icons/svg/`:
- **arrow-left.svg** — Previous carousel button
- **arrow-right.svg** — Next carousel button
- **menu.svg** — Mobile menu hamburger
- **close.svg** — Close/dismiss icon

Icons use `fill="currentColor"` for easy color theming.

## 🎨 Icon System

### Icon Sizes
- **.icon-xs** — 16px (extra small, inline)
- **.icon-sm** — 24px (small)
- **.icon-md** — 32px (medium, default)
- **.icon-lg** — 48px (large)
- **.icon-xl** — 64px (extra large)

### Icon Colors
- **.icon-primary** — Dark purple
- **.icon-secondary** — Sage green
- **.icon-tertiary** — Forest green
- **.icon-accent** — Teal
- **.icon-muted** — Text muted gray

### Icon Variants
- **.icon-box** — Icon with background box
- **.icon-border** — Icon with circular border
- **.feature-card** — Card component with icon + title + description

### Feature Cards
Used in "Pillars of Wellness" section:
- 2x2 grid layout on desktop
- Single column on mobile
- Hover effects (lift + shadow)
- Icon + title + description

### Credentials Section
Located in about preview section:
- Icon-based credential display
- Star, checkmark, and info icons
- Centered layout with borders
- White text on dark background

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Three breakpoints: 480px, 768px, 1920px
- Flexible grid layouts

### Accessibility
- ARIA labels on key sections
- Semantic HTML structure
- Title attributes on links
- Proper heading hierarchy

### Performance
- Modular CSS (smaller file sizes, faster loading)
- Modular JS (only load what's needed)
- Organized asset structure
- Lazy loading opportunities

### Maintainability
- Clear separation of concerns (CSS, JS, HTML, Images)
- Consistent naming conventions
- Documented code structure
- Easy to add new components

## 📝 Adding New Features

### New CSS Component
1. Create new class in appropriate CSS file (or create new file)
2. Follow naming convention: `.component-name`
3. Use CSS variables for colors and spacing
4. Add responsive styles to responsive.css

### New JavaScript Module
1. Create new file in `assets/js/`
2. Wrap functionality in init function: `function initNewModule() { }`
3. Call from `main.js` in DOMContentLoaded
4. Use consistent naming: `initNewModule`

### New Images
1. Place in appropriate subfolder: `hero/`, `approach/`, `process/`, `about/`, `gallery/`
2. Use descriptive filenames
3. Optimize images before adding
4. Update image paths in HTML

## 🎨 Design Tokens

### Colors
- **Primary**: var(--dark-purple) #674186
- **Secondary**: var(--sage-green) #4A7C46
- **Tertiary**: var(--forest-green) #2C5029
- **Accent**: var(--teal) #5d7d7e

### Typography
- **Headings**: Fraunces serif (elegant)
- **Body**: Inter sans-serif (clean, readable)
- **Sizes**: 3rem (H1), 2.75rem (H2), 1.375rem (H3)

### Spacing Scale
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)
- 4xl: 8rem (128px)

## 🚀 Optimization Tips

1. **CSS**: Only load CSS files needed per section
2. **JS**: Defer script loading for faster page load
3. **Images**: Compress and use next-gen formats (WebP)
4. **Fonts**: Use font subsetting for Google Fonts
5. **Caching**: Set appropriate cache headers

## 🔄 Future Improvements

- [ ] Create CSS utility class library (tailwind-like)
- [ ] Add Sass/SCSS for better CSS organization
- [ ] Implement CSS-in-JS if using React/Vue
- [ ] Create JavaScript component system
- [ ] Add automated image optimization
- [ ] Implement service worker for offline support
- [ ] Add analytics tracking module
- [ ] Create form validation module

---

**Last Updated**: October 25, 2025
**Version**: 1.0 - Initial organization
