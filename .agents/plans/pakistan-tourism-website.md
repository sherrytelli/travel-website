# Pakistan Tourism Website — Build Plan

## Project Overview

Modern, visually stunning single-page travel website for Pakistan promoting tourism destinations. Built with HTML5, CSS3, and vanilla JavaScript only — no frameworks.

---

## File Structure

```
travel-website/
├── index.html
├── style.css
└── script.js
```

---

## Color Token System

| Token | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#0F172A` | Backgrounds, dark text |
| Emerald Green | `#10B981` | Primary CTAs, accents |
| Sky Blue | `#38BDF8` | Secondary accents, links |
| Warm Gold | `#FBBF24` | Highlights, badges, ratings |
| White | `#FFFFFF` | Cards, text on dark |

CSS variables will be defined in `:root` for all tokens.

---

## Typography

System font stack (no external dependencies):
- Display headings: `font-weight: 700`, large sizes
- Body text: `font-weight: 400-500`
- Labels/captions: `font-weight: 600`, uppercase, small

---

## Signature Element

Full-viewport hero with parallax mountain backdrop, gradient overlay (navy → emerald), and a glassmorphism "scroll indicator" pill that pulses at the bottom.

---

## Sections (14 total, in order)

### 1. Sticky Navigation Bar
- Logo text: "Pakistan Travel"
- Nav links: Home, Destinations, Experiences, Gallery, Contact
- Dark mode toggle button
- Active link hover effects
- Sticky on scroll with background change

### 2. Hero Section
- Full viewport height (`100vh`)
- Heading: "Discover the Beauty of Pakistan"
- Subheading: "From majestic mountains to vibrant cities and rich culture."
- Two buttons: "Explore Destinations", "Watch Video"
- Background image with gradient overlay
- Animated scroll indicator at bottom

### 3. Why Visit Pakistan
- 4 feature cards in grid:
  - Mountains — Home to breathtaking peaks and valleys
  - Culture — Rich traditions and hospitality
  - Food — Unique and flavorful regional cuisine
  - Adventure — Trekking, camping, and exploration
- Icons (emoji or Unicode symbols)
- Hover lift animation

### 4. Featured Destinations
- 6 destination cards:
  - Hunza Valley
  - Skardu
  - Fairy Meadows
  - Attabad Lake
  - Lahore
  - Mohenjo-Daro
- Each card: image, name, description, "Learn More" button
- Hover zoom effect on image
- Card elevation on hover

### 5. Explore Pakistan by Region
- 5 region cards:
  - Gilgit Baltistan
  - Punjab
  - Sindh
  - KPK
  - Balochistan
  - Azad Kashmir
- Each card: region image, name, short overview
- **JS Feature:** Clicking a card dynamically updates a detail panel below the cards with additional information

### 6. Top Experiences
- 6 experience cards with icons:
  - Trekking
  - Camping
  - Boating
  - Jeep Safari
  - Desert Adventure
  - Cultural Tours
- Hover effects
- Responsive grid layout

### 7. Seasonal Travel Guide
- 4 seasonal cards:
  - Spring — Recommended destinations
  - Summer — Recommended destinations
  - Autumn — Recommended destinations
  - Winter — Recommended destinations
- Hover transitions

### 8. Travel Packages
- 3 package cards:
  - Northern Explorer — 7 Days
  - Hunza Escape — 5 Days
  - Pakistan Grand Tour — 10 Days
- Each card: duration, features list, price, "Book Now" button
- "Pakistan Grand Tour" gets a "Featured" badge
- Hover animation

### 9. Photo Gallery
- CSS Grid layout
- 8+ images with hover zoom
- Overlay captions on hover
- Responsive grid

### 10. Testimonials
- Auto-rotating slider
- Each testimonial: traveler photo, name, star rating, review text
- **JS Feature:** Rotates every 4 seconds
- Navigation dots or arrows

### 11. Statistics Section
- Animated counters triggered by viewport entry:
  - 50+ Destinations
  - 10,000+ Travelers
  - 500+ Tours
  - 100+ Guides
- **JS Feature:** Count animation using IntersectionObserver

### 12. Contact Section
- Form fields: Name, Email, Phone, Message
- **JS Feature:** Form validation
  - No empty fields allowed
  - Valid email required
  - Phone number required
  - Inline error messages
- **JS Feature:** Success notification toast on valid submission

### 13. Call To Action
- Large banner section
- Text: "Ready for Your Next Adventure?"
- Button: "Start Your Journey"
- Attractive background with hover effects

### 14. Footer
- About section
- Quick links
- Contact info
- Social media icons
- Copyright notice

---

## JavaScript Features (7 total)

### Feature 1: Dark Mode Toggle
- Toggle button in navbar
- Save preference in localStorage
- Toggle `dark` class on `<body>`

### Feature 2: Smooth Scrolling Navigation
- All nav links scroll smoothly to their sections
- Uses `scrollIntoView({ behavior: 'smooth' })` or `scrollTo` with smooth behavior

### Feature 3: Region Information Viewer
- Clicking a region card dynamically updates a details panel
- Panel shows: description, top attractions, best time to visit, travel tips
- Implemented with JS event listeners and DOM manipulation

### Feature 4: Animated Statistics Counter
- Numbers animate from 0 to target when section enters viewport
- Uses IntersectionObserver API
- Smooth counting animation with requestAnimationFrame

### Feature 5: Testimonial Auto Slider
- Rotates testimonials every 4 seconds
- Automatic rotation with pause on hover
- Navigation dots for manual control

### Feature 6: Contact Form Validation
- Validate all fields on submit
- Show inline error messages for:
  - Empty fields
  - Invalid email format
  - Invalid phone number
- Prevent default form submission on errors

### Feature 7: Success Alert
- Custom toast notification on valid form submission
- Auto-dismiss after 4 seconds
- Animated entrance and exit

---

## CSS Requirements

- CSS variables in `:root`
- Responsive media queries (mobile: <768px, tablet: 768-1024px, desktop: >1024px)
- Flexbox for alignment and navigation
- CSS Grid for cards and gallery layouts
- Hover effects on all interactive elements
- Smooth transitions (0.3s default)
- Keyframe animations (scroll indicator pulse, counter animation, toast slide-in)
- Glassmorphism effects (backdrop-filter)
- Gradient backgrounds
- Clean, well-commented, maintainable code

---

## Image Strategy

All images sourced from Unsplash with direct image URLs:

| Section | Image Search Terms |
|---------|-------------------|
| Hero | Pakistan mountains, Karakoram |
| Destinations | Hunza Valley, Skardu, Fairy Meadows, Attabad Lake, Lahore Fort, Mohenjo-Daro |
| Regions | Gilgit Baltistan, Punjab, Sindh, KPK, Balochistan, Azad Kashmir |
| Gallery | Pakistan landscapes, Northern areas |
| Testimonials | Placeholder avatars |

---

## Code Quality Standards

- Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Well-organized, properly indented HTML
- Accessible markup (alt text, aria labels where needed)
- SEO-friendly structure
- Modular, well-commented JavaScript
- Descriptive class names (BEM-like naming)
- Consistent formatting throughout
- No unnecessary code or dependencies
- Production-quality code

---

## Responsive Breakpoints

- Mobile: max-width 768px
- Tablet: 769px to 1024px
- Desktop: min-width 1025px

---

## Build Order

1. `index.html` — Complete HTML structure with all 14 sections
2. `style.css` — All styling, variables, responsive design, animations
3. `script.js` — All 7 interactive features
