# Pakistan Travel — Discover the Beauty of Pakistan

A modern, visually stunning single-page travel website promoting tourism destinations in Pakistan. Built with **HTML5, CSS3, and vanilla JavaScript** — no frameworks or libraries.

## Live Demo

Open `index.html` in any modern browser.

## Project Structure

```
travel-website/
├── index.html      # Complete HTML structure (601 lines)
├── style.css       # All styling, responsive design, animations (1342 lines)
├── script.js       # Interactive features (383 lines)
└── README.md
```

## Design System

### Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#0F172A` | Backgrounds, dark text |
| Emerald Green | `#10B981` | Primary CTAs, accents |
| Sky Blue | `#38BDF8` | Secondary accents, links |
| Warm Gold | `#FBBF24` | Highlights, badges, ratings |
| White | `#FFFFFF` | Cards, text on dark |

All colors are defined as CSS variables in `:root` for easy theming and dark mode support.

### Typography

System font stack (no external dependencies):
- **Display headings**: `font-weight: 700`, large sizes with `clamp()` for fluid scaling
- **Body text**: `font-weight: 400-500`
- **Labels/captions**: `font-weight: 600`, uppercase, small

### Responsive Breakpoints

| Mode | Width |
|------|-------|
| Mobile | `< 768px` |
| Tablet | `769px – 1024px` |
| Desktop | `> 1024px` |

## Sections (14 Total)

| # | Section | Description |
|---|---------|-------------|
| 1 | Sticky Navigation | Logo, nav links, mobile hamburger menu, dark mode toggle |
| 2 | Hero | Full-viewport mountain backdrop with gradient overlay and animated scroll indicator |
| 3 | Why Visit Pakistan | 4 feature cards with images (Mountains, Culture, Food, Adventure) |
| 4 | Featured Destinations | 6 destination cards (Hunza Valley, Skardu, Fairy Meadows, Attabad Lake, Lahore, Mohenjo-Daro) |
| 5 | Explore by Region | 6 region cards with dynamic detail panel on click |
| 6 | Top Experiences | 6 experience cards (Trekking, Camping, Boating, Jeep Safari, Desert Adventure, Cultural Tours) |
| 7 | Seasonal Travel Guide | 4 seasonal cards with recommended destinations |
| 8 | Travel Packages | 3 package cards with "Featured" badge on Pakistan Grand Tour |
| 9 | Photo Gallery | 8-image grid with hover zoom and overlay captions |
| 10 | Testimonials | Auto-rotating slider (4s interval) with dot navigation |
| 11 | Statistics | Animated counters (50+ Destinations, 10K+ Travelers, 500+ Tours, 100+ Guides) |
| 12 | Contact | Form with name, email, phone, message fields and inline validation |
| 13 | Call To Action | Banner section with gradient overlay |
| 14 | Footer | 4-column grid with about, links, contact info, social icons |



## Getting Started

1. Clone or download this repository
2. Open `index.html` in a browser
3. No build step or dependencies required
