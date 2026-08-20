# Portfolio Archaeology & Baseline Audit

**Date:** 2026-08-11  
**Status:** Read-only audit — no modifications made  
**Scope:** Beverly Nasimiyu portfolio positioning system

---

# Current Architecture

## File Structure

```
C:\Users\user\Desktop\Bev\
├── index.html          # Locked prototype (1,935 lines)
├── variant.html        # Variant exploration system (2,916 lines)
├── explorer.html       # Variant selector/overview (251 lines)
├── deploy.ps1          # GitHub Pages deployment script
├── deploy.sh           # Bash deployment script
├── headshot.jpg        # Portrait image
└── Beverly_Nasimiyu_E_B_Partner_CV.pdf
```

## Application Architecture

**Type:** Static multi-page site  
**Stack:** Vanilla HTML + CSS + JavaScript (no framework, no build step)  
**Hosting:** GitHub Pages (`gh-pages` branch)  
**Fonts:** Google Fonts — Inter, Playfair Display, JetBrains Mono  

### Key Characteristic: Single-File Monolith

Each HTML file is entirely self-contained:
- All CSS in `<style>` blocks
- All JavaScript in `<script>` blocks
- No external stylesheets or scripts
- No build process
- No templating engine

This means:
- Content changes require editing HTML directly
- Style changes require editing CSS directly
- Variant switching is purely CSS-driven via attribute selectors
- JavaScript behavior is duplicated across files

---

# Current Content Model

## Content Hierarchy

```
HERO
├── Portrait (headshot.jpg)
├── Name: "Beverly Nasimiyu"
├── Subtitle: "Business Operations & Customer Success Executive"
└── Statement: "SAP · LinkedIn · International · Data-Driven"

ABOUT / SUMMARY
├── Section label: "About"
├── Lead paragraph (strong emphasis on key phrases)
└── 4 summary points (structure, data, impact, executive trust)

METRICS (4 animated counters)
├── 25% reporting accuracy improvement
├── 30% quote turnaround reduction
├── 9+ years experience
└── 46% campaign engagement lift

EXPERIENCE (11 roles, timeline layout)
├── Date rail (left column, sticky)
└── Role entries (right column, 11 articles)

COMPETENCIES (17 tags, wrap layout)
└── Business Operations, Revenue Operations, etc.

SERVICES (6 expandable items)
├── Operations & Process
├── Revenue Operations
├── Customer Success
├── Data & Business Reporting
├── Automation & Workflow
└── Business / Executive Support

BUILD YOUR OWN (5 selectable options)
└── Operations, Revenue, Customer Success, Data, Automation

ENGAGEMENT MODELS (3 cards)
├── Focused Sprint
├── Project Engagement
└── Ongoing Partnership

OUTCOME (dark CTA block)
└── "More clarity. Better processes. Better visibility. Less operational friction."

EDUCATION
├── MBA — United States International University-Africa (2022-2025)
└── BSc Medical Laboratory Science — Kenyatta University (2012-2016)

LANGUAGES
└── English · Swahili · Spanish

FOOTER / CONTACT
├── Email: beverlynasimiyu@gmail.com
├── LinkedIn: https://www.linkedin.com/in/beverly-nasimiyu
├── Phone: +34 711 034 695
└── "© 2026 Beverly Nasimiyu · Barcelona, Spain · Operating globally"
```

## Canonical Data (MUST remain unchanged across variants)

- Email address
- Phone number
- LinkedIn URL
- Physical location (Barcelona, Spain)
- Education institutions and dates
- Language names
- All experience role titles, companies, locations, dates
- All metric values (25%, 30%, 9+, 46%)
- Service names and descriptions
- Engagement model names

## Mutable Content (CAN change per variant)

- Hero subtitle/statement wording
- Summary lead paragraph
- Summary point emphasis
- Section ordering
- Section presence/absence
- Metric emphasis or presentation
- Service titles/subtitles
- CTA text
- Visual metaphors

---

# Current Layout Model

## Spacing System

```css
--pad-x: clamp(1.5rem, 5vw, 3.5rem);   /* Horizontal padding */
--pad-y: clamp(5rem, 12vw, 10rem);     /* Vertical section padding */
--max-width: 1200px;                    /* Content container */
```

## Typography Scale

```css
--font-display: 'Playfair Display', Georgia, serif;  /* Headings */
--font-body: 'Inter', system-ui, sans-serif;          /* Body */

/* Hero name: clamp(3.2rem, 8vw, 6.5rem) */
/* Section headers: clamp(2.5rem, 5vw, 4rem) */
/* Service titles: clamp(1.5rem, 3vw, 2rem) */
/* Body: 0.95rem - 1.15rem */
/* Small/caps: 0.7rem - 0.8rem */
```

## Color System

```css
--bg: #fafaf8;           /* Main background (warm off-white) */
--bg-alt: #f3f1ed;       /* Alternate background */
--bg-dark: #1a1a1a;      /* Dark blocks */
--text: #111111;         /* Primary text */
--text-secondary: #555555; /* Secondary text */
--text-light: #888888;   /* Tertiary text */
--accent: #b84c2f;       /* Burnt sienna/terracotta */
--accent-strong: #8b3a24; /* Darker accent */
--accent-light: rgba(184, 76, 47, 0.08);  /* Tint */
--accent-glow: rgba(184, 76, 47, 0.15);  /* Glow */
--border: #e0dcd6;       /* Light border */
--border-strong: #c5c0b8; /* Stronger border */
```

## Breakpoints

```css
1024px:  /* Tablet landscape */
  - Metrics gap reduction
  - Experience grid narrows (160px date column)
  - Service body goes single column
  - Engagement grid goes single column

768px:   /* Mobile */
  - Navigation becomes slide-out drawer
  - Hero min-height reduces to 90vh
  - Experience grid goes single column (dates become 2-col grid)
  - All grids go single column
  - Metrics go single column
  - Services go single column
  - Padding reduces
```

---

# Variant Architecture

## Implementation

### CSS-Driven Switching

```html
<html lang="en" data-variant="default">
```

All variant styles are defined as descendant selectors:

```css
[data-variant="revenue"] {
  --bg: #0a0a0a;
  --accent: #f59e0b;
  /* ... */
}
```

This means:
- No JavaScript required for visual changes
- CSS custom properties cascade automatically
- Switching is instant (no page reload)

### Variant Switching JavaScript

```javascript
const html = document.documentElement;
function setVariant(variant) {
  html.setAttribute('data-variant', variant);
  // Update active button
  // Persist to localStorage
}
```

### localStorage Persistence

```javascript
localStorage.setItem('portfolio-variant', variant);
// On load: localStorage.getItem('portfolio-variant') || 'default'
```

### Current Variants

| Variant | Theme | Font | Accent |
|---------|-------|------|--------|
| default | Warm editorial | Playfair + Inter | Burnt sienna |
| strategist | Minimal executive | Playfair + Inter | Black |
| revenue | Dark mode | Inter only | Amber |
| bridge | Tech/SaaS | Inter + JetBrains Mono | Cyan |
| healthcare | Clinical | Playfair + Inter | Green |
| global | European editorial | Playfair + Inter | Burnt sienna |
| venture | Warm beige | Playfair + Inter | Amber |

## Variant CSS Coverage

Each variant currently overrides:
- `--bg`, `--bg-alt`, `--text`, `--text-secondary`
- `--accent`, `--accent-strong`, `--accent-light`, `--border`
- `--font-display`, `--font-body`
- `.hero` background
- `.hero-name` font weight, style, size, letter-spacing
- `.hero-subtitle` font style, weight, case
- `.hero-portrait` border color, box-shadow
- `.section-label` font family, style
- `.metric-value` font family, weight, color, size
- `.outcome` background, text color
- `.languages` font style, case, letter-spacing

### What Variants Do NOT Currently Override

- HTML structure
- Section order
- Copy/content
- Navigation links
- Experience entries
- Service items
- Build options
- Engagement models
- Education entries
- Contact details
- JavaScript behavior

---

# Navigation Architecture

## Dual Navigation System

### 1. Primary Navigation (`#nav`)

```html
<nav id="nav">
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#expertise">Expertise</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="nav-toggle">...</button>
</nav>
```

**Position:** Fixed, top-right  
**Z-index:** 100  
**Behavior:** 
- Transparent initially, gains background on scroll (`scrolled` class)
- Hides when compact header appears (`header-hidden` class)
- Mobile: transforms to slide-out drawer

### 2. Compact Header (`#compactHeader`)

```html
<header class="compact-header" id="compactHeader">
  <div class="compact-header-inner">
    <img class="compact-portrait">
    <span class="compact-name">Beverly Nasimiyu</span>
    <nav class="compact-nav">
      <a href="#about">About (icon)</a>
      <a href="#experience">Experience (icon)</a>
      <a href="mailto:...">Email (icon)</a>
      <a href="https://linkedin.com/...">LinkedIn (icon)</a>
    </nav>
  </div>
</header>
```

**Position:** Fixed, top, full width  
**Z-index:** 90  
**Behavior:** Hidden initially, slides down when hero is scrolled past

### 3. Variant Selector (`.variant-selector`)

```html
<div class="variant-selector">
  <button class="variant-btn" data-variant="default">Default</button>
  <!-- ... 6 more buttons ... -->
</div>
```

**Position:** Fixed, top-right  
**Z-index:** 200  
**Behavior:** Always visible, wraps on narrow screens

## Current Navigation Problem

The variant selector (`z-index: 200`) and primary navigation (`z-index: 100`) both occupy the top-right corner. On desktop, the variant selector visually overlaps and competes with the primary navigation.

### Why This Is an Architectural Problem

1. **Ownership conflict:** Both systems claim the same visual territory
2. **Z-index arms race:** Variant selector uses higher z-index to "win"
3. **Responsive failure:** On mobile, both systems try to adapt independently
4. **Semantic confusion:** Users don't know which is which

### Incorrect Solutions (Explicitly Rejected)

- Shrinking navigation text
- Reducing font sizes
- Squeezing nav links
- Adding arbitrary margins
- Hiding navigation
- Reducing variant button count

---

# Responsive Architecture

## Mobile Behavior (≤768px)

- Navigation: Full-screen overlay drawer from right
- Hero: 90vh min-height, no scroll indicator
- Experience: Single column, dates become 2-column grid
- Metrics: Single column
- Services: Single column, no hover effects
- Engagement: Single column
- Variant selector: Bottom-anchored, full-width, centered

## Tablet Behavior (≤1024px)

- Experience: Narrower date column
- Services: Single column body
- Engagement: Single column
- Metrics: Reduced gap

## Desktop Behavior (>1024px)

- Full multi-column layouts
- Hover effects active
- Variant selector top-right

---

# JavaScript Architecture

## Event Systems

### index.html
- Single IIFE containing all logic
- Scroll-based nav state management
- Hero parallax/shrink effect
- Mobile nav toggle
- IntersectionObserver for reveal animations
- Metric counter animation
- Service item toggle
- Build option selection
- Active nav link tracking

### variant.html
- **Three separate `<script>` blocks:**
  1. Main IIFE (same as index.html)
  2. Variant switching IIFE
  3. Duplicate scroll/nav/reveal/metric logic

This duplication is a maintenance risk.

## Animation Systems

### Reveal Animation
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms ease, transform 600ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```
Triggered by IntersectionObserver with 0.15 threshold, -40px rootMargin.

### Metric Counter
- Triggers once when metrics band enters viewport
- 1200ms duration, cubic ease-out
- Reads `data-target` and `data-suffix` attributes

### Hero Parallax
- Scale: 1 → 0.75
- Translate: (0,0) → (-30px, -40px)
- Opacity: 1 → 0.7
- Triggered by scroll position relative to hero height

---

# Content/Data Sources

## Hardcoded Content

All content is embedded directly in HTML. There is no:
- JSON data file
- CMS
- Markdown source
- API endpoint
- Template engine

## Content Duplication

`index.html` and `variant.html` share identical HTML bodies. The only differences are:
1. `<html data-variant="default">` attribute
2. Variant selector HTML
3. Variant CSS rules
4. Variant switching JavaScript

`explorer.html` has its own simplified content describing the variants.

---

# External Dependencies

| Dependency | Usage |
|------------|-------|
| Google Fonts | Inter, Playfair Display, JetBrains Mono |
| headshot.jpg | Local image file |
| SVG icons | Inline SVGs (no external icon library) |
| GitHub Pages | Hosting |

---

# Accessibility Considerations

**Current State:**

- `lang="en"` on `<html>`
- `aria-label` on nav toggle, social links
- `alt` text on images
- `focus-visible` styles on links
- Semantic HTML: `<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`

**Gaps:**
- No skip-to-content link
- No ARIA landmarks beyond native elements
- No reduced-motion media query
- No high-contrast mode support
- Variant selector buttons lack `aria-pressed`
- Mobile nav lacks `aria-expanded` on toggle

---

# Technical Risks

1. **Code duplication:** Main IIFE is copy-pasted between index.html and variant.html
2. **No build process:** Changes require manual editing of large HTML files
3. **Single-file architecture:** CSS and JS are not modular
4. **No content layer:** Content changes require HTML editing
5. **Variant selector overlap:** Architectural layout problem
6. **localStorage coupling:** Variant choice persists across all pages, but explorer.html doesn't participate
7. **Hardcoded URLs:** Contact info scattered in HTML
8. **Image dependency:** headshot.jpg must be deployed alongside HTML
9. **No error boundaries:** JavaScript errors in one IIFE don't affect others, but debugging is harder
10. **Variant CSS specificity:** Future variants may need `!important` to override

---

# Opportunities

1. **Extract canonical data:** Separate content from presentation
2. **Shared component library:** Extract repeated HTML patterns
3. **Variant composition system:** Allow variants to override specific aspects
4. **Navigation ownership model:** Resolve dual-claim on top-right space
5. **Progressive enhancement:** Variants could eventually include layout changes
6. **A/B testing infrastructure:** Variant system already supports this
7. **Content variants:** Not just visual, but copy/positioning variants
8. **Section ordering:** Variants could reorder sections entirely
9. **Metric emphasis:** Variants could highlight different metrics
10. **Service bundling:** Variants could show different service combinations

---

# Recommended Architecture

## Phase 1: Fix Navigation Ownership

**Decision:** Variant selector is NOT primary navigation. It is an exploration tool.

**Recommended placement options:**
- Bottom-right corner (less intrusive)
- Dedicated "Explore" section in page
- Collapsible panel
- Separate view (current explorer.html approach)

**Primary navigation must remain dominant in the top navigation area.**

## Phase 2: Extract Shared Foundation

Create a base system that both index.html and variant.html inherit:

```
/shared/
├── content.json          # Canonical data
├── components/           # Reusable HTML patterns
│   ├── nav.html
│   ├── hero.html
│   ├── metrics.html
│   ├── experience.html
│   ├── services.html
│   └── footer.html
├── styles/
│   ├── base.css          # Shared foundation
│   ├── layout.css        # Layout system
│   └── variants/         # Variant overrides
└── scripts/
    ├── main.js           # Shared behavior
    └── variants.js       # Variant system
```

## Phase 3: Variant System Evolution

Current system: CSS-only visual variants  
Target system: Content + layout + visual variants

```css
/* Variant can now override: */
[data-variant="revenue"] {
  /* Visual */
  --accent: #f59e0b;
  
  /* Layout */
  --hero-layout: stacked;
  --metrics-prominence: dominant;
  
  /* Typography */
  --font-display: 'Inter', sans-serif;
  --text-transform-headings: uppercase;
}

/* Content overrides via data attributes */
[data-variant="revenue"] .hero-subtitle {
  content: attr(data-variant-subtitle);
}
```

---

# Implementation Map

## Immediate (Do Now)

| Task | File | Description |
|------|------|-------------|
| Fix variant selector placement | variant.html | Move from top-right to non-conflicting position |
| Remove duplicate IIFE | variant.html | Keep one script block for main behavior |
| Add skip-to-content | Both | Accessibility improvement |

## Short-term (Next Sprint)

| Task | Files | Description |
|------|-------|-------------|
| Extract shared CSS | Both | Split into base.css + variant.css |
| Extract shared JS | Both | Single main.js file |
| Create content layer | New | JSON or markdown data files |
| Add variant metadata | New | Variant definitions (name, positioning, copy) |

## Medium-term (Next Phase)

| Task | Files | Description |
|------|-------|-------------|
| Component system | New | Reusable HTML components |
| Layout variant support | CSS | Allow section reordering per variant |
| Content variant support | New | Variant-specific copy overrides |
| Build pipeline | New | Simple static site generator |

## Long-term (Vision)

| Task | Files | Description |
|------|-------|-------------|
| CMS integration | New | Content management for non-developers |
| Analytics integration | New | Track variant performance |
| A/B testing | New | Compare variant effectiveness |
| Multi-page variants | New | Different page structures per variant |

---

# Current Problems Summary

1. **Navigation overlap:** Variant selector competes with primary nav for top-right space
2. **Code duplication:** JavaScript IIFE duplicated in variant.html
3. **No content layer:** All content is hardcoded HTML
4. **Monolithic files:** 2,900+ line HTML files are hard to maintain
5. **Limited variant scope:** Variants only change visuals, not content/layout
6. **Accessibility gaps:** Missing skip links, ARIA states, reduced-motion
7. **No build process:** Manual deployment and file management

---

# Technical Debt

| Item | Severity | Effort | Impact |
|------|----------|--------|--------|
| Duplicate JS IIFE | High | Low | Maintenance burden |
| Variant selector overlap | High | Medium | UX confusion |
| No content layer | Medium | High | Content changes are risky |
| Monolithic HTML | Medium | High | Hard to collaborate |
| Limited variant scope | Medium | Medium | Missed opportunity |
| Accessibility gaps | Low | Low | Inclusive design |
