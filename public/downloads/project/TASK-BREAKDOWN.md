# Project Task Breakdown

This document breaks down the NYC Natural Areas website into smaller, teachable tasks.

## Overview

This project consists of:
1. **Header** - Navigation bar with logo and menu
2. **Hero Section** - Full-screen banner with call-to-action
3. **Section 1** - Video introduction with content panel
4. **Section 2** - "What We Do" with 4 service cards
5. **Section 3** - "Join our efforts" with 4 action cards
6. **Section 4** - Two-column feature showcase
7. **Section 5** - "Forests in Cities" network cards
8. **Section 6** - Blog carousel (with JavaScript)
9. **JavaScript Carousel** - Interactive slide navigation
10. **Scroll Effects** - Animated scroll-triggered effects

---

## Task 1: Make Header

### Learning Objectives
- Create semantic HTML navigation structure
- Style header with flexbox layout
- Add SVG logo
- Create navigation links with hover effects

### HTML Structure
```html
<header>
  <nav>
    <div class="left">
      <a class="logo">[SVG Logo]</a>
      <a href="#section-2">What We Do</a>
      <a href="#section-3">About Us</a>
      <a href="#section-6">Events</a>
    </div>
    <div class="right">
      <a href="#">Get Involved</a>
      <a href="#" class="btn primary">Donate</a>
    </div>
  </nav>
</header>
```

### CSS Concepts
- `position: absolute` for header overlay
- Flexbox for navigation layout
- SVG styling with CSS
- Button component styling
- Z-index for layering

### Files to Create/Modify
- `index.html` - Add header structure
- `styles.css` - Add header styles

---

## Task 2: Make Section 1 (Hero & Introduction)

### Learning Objectives
- Create full-viewport hero section
- Add background image with overlay
- Style large typography
- Create two-column layout

### HTML Structure
```html
<section id="hero" class="hero">
  <div class="container grid">
    <article>
      <h1>Healthy, resilient natural areas for all</h1>
      <p class="xlarge">[Description text]</p>
      <a class="jump-arrow" href="#section-1">[Arrow]</a>
    </article>
  </div>
</section>

<section id="section-1" class="panel">
  <div class="container-off">
    <div class="media">
      <a class="play-video">[Video thumbnail]</a>
    </div>
  </div>
  <article class="content-styles">
    <h2 class="eyebrow">Who are we?</h2>
    <h3 class="heading-4">[Mission statement]</h3>
  </article>
</section>
```

### CSS Concepts
- `height: 100vh` for full viewport
- Background images with `background-size: cover`
- CSS gradients with `:before` and `:after` pseudo-elements
- Two-column grid layout
- Overlay effects

### Files to Create/Modify
- `index.html` - Add hero and section 1
- `styles.css` - Add hero and section 1 styles

---

## Task 3: Make Section 2 ("What We Do")

### Learning Objectives
- Create responsive grid layout
- Build card components with images
- Style hover effects
- Use background images with parallax

### HTML Structure
```html
<section id="section-2" class="panel">
  <img id="geese" src="[image]" alt="Geese flying">
  <h2 class="heading-1">What we do</h2>
  <div class="grid">
    <a class="btn-container card" href="...">
      <div class="media fancy-boxes">
        <img src="[image]" alt="...">
      </div>
      <article>
        <h3 class="heading-5"><span>Train</span> the next generation</h3>
        <p class="small">[Description]</p>
        <span class="btn icon arrow">[Arrow icon]</span>
      </article>
    </a>
    <!-- Repeat for 4 cards total -->
  </div>
</section>
```

### CSS Concepts
- CSS Grid with `grid-template-columns`
- Card component styling
- Fancy-boxes decorative border effect
- Hover transitions
- Background positioning

### Files to Create/Modify
- `index.html` - Add section 2
- `styles.css` - Add section 2 styles

---

## Task 4: Make Section 3 ("Join Our Efforts")

### Learning Objectives
- Create call-to-action grid
- Style icon-based cards
- Implement tertiary button style
- Background image sections

### HTML Structure
```html
<section id="section-3" class="module ctas style2 has-bkg-img"
        style="background-image: url(...);">
  <div class="container">
    <h2 class="heading-1">Join our efforts</h2>
    <div class="grid">
      <a class="btn-container" href="...">
        <div class="media">
          <img src="[icon.svg]" alt="Donate icon">
        </div>
        <article>
          <h3 class="heading-4">Donate</h3>
          <p class="small">[Description]</p>
          <span class="btn tertiary">Donate now</span>
        </article>
      </a>
      <!-- Repeat for 4 cards: Donate, Volunteer, Partner, Get Outside -->
    </div>
  </div>
</section>
```

### CSS Concepts
- Icon sizing and display
- Tertiary button styling with underline
- Background image with positioning
- Grid layout for multiple items

### Files to Create/Modify
- `index.html` - Add section 3
- `styles.css` - Add section 3 styles

---

## Task 5: Make Section 4 (Two-Column Feature)

### Learning Objectives
- Create side-by-side column layout
- Style large images with content
- Primary button implementation
- Responsive column design

### HTML Structure
```html
<section id="section-4">
  <div class="container grid">
    <div class="column">
      <div class="media">
        <img src="[screenshot]" alt="NYC Nature Map">
      </div>
      <article>
        <h2>The NYC Nature Map</h2>
        <p class="large">[Description]</p>
        <a href="..." class="btn primary">Explore Now</a>
      </article>
    </div>
    <div class="column">
      <div class="media">
        <img src="[screenshot]" alt="Data Sets">
      </div>
      <article>
        <h2>Data Sets for Download</h2>
        <p class="large">[Description]</p>
        <a href="..." class="btn primary">Get Started</a>
      </article>
    </div>
  </div>
</section>
```

### CSS Concepts
- Flexbox for column layout
- Image aspect ratios
- Column borders and spacing
- Primary button styling

### Files to Create/Modify
- `index.html` - Add section 4
- `styles.css` - Add section 4 styles

---

## Task 6: Make Section 5 ("Forests in Cities")

### Learning Objectives
- Create stacked card layout
- Style cards with background images
- Implement large heading styles
- Background image with overlay

### HTML Structure
```html
<section id="section-5">
  <div class="container">
    <h2 class="heading-1 mega">Forests in <br>Cities network</h2>
    <div class="cards">
      <a class="btn-container card" href="...">
        <article>
          <h3 class="heading-4">What is Forests in Cities?</h3>
          <p class="large">[Description]</p>
          <span class="btn icon arrow medium">[Icon]</span>
        </article>
      </a>
      <a class="btn-container card" href="...">
        <article>
          <h3 class="heading-4">Explore the Resource Library</h3>
          <p class="large">[Description]</p>
          <span class="btn icon arrow medium">[Icon]</span>
        </article>
      </a>
    </div>
  </div>
</section>
```

### CSS Concepts
- Background images with `background-size: 100% auto`
- Padding-top with viewport units (`20vw`)
- Flexbox column layout
- Card stacking with gaps

### Files to Create/Modify
- `index.html` - Add section 5
- `styles.css` - Add section 5 styles

---

## Task 7: Make Section 6 (Blog Carousel - HTML/CSS Only)

### Learning Objectives
- Create carousel HTML structure
- Style blog post cards
- Add navigation buttons (visual only)
- Structure for JavaScript integration

### HTML Structure
```html
<section id="section-6" class="module featured-blog-carousel has-bkg"
        style="background-image: url(...);">
  <div class="container">
    <article>
      <h2 class="heading-1">Understories</h2>
      <p class="heading-6">The backdoor to NYC's backyard</p>
    </article>
    <div class="carousel">
      <button class="slick-prev slick-arrow">Previous</button>
      <button class="slick-next slick-arrow">Next</button>
      <div class="slick-list">
        <div class="slick-track">
          <div class="slide slick-slide slick-current slick-active">
            <a class="card post" href="...">
              <div class="media fancy-boxes medium">
                <img src="[image]" alt="...">
              </div>
              <article>
                <span class="pill small green">Announcements</span>
                <span class="caption">October 27, 2025</span>
                <h3 class="heading-5">[Title]</h3>
                <span class="btn icon arrow"></span>
              </article>
            </a>
          </div>
          <!-- Multiple slides -->
        </div>
      </div>
    </div>
    <a href="..." class="btn primary">View All</a>
  </div>
</section>
```

### CSS Concepts
- Carousel container styling
- Hidden/visible slide states
- Button positioning
- Card styling within carousel

### Files to Create/Modify
- `index.html` - Add section 6 structure
- `styles.css` - Add section 6 styles
- `carousel.css` - Create carousel-specific styles

---

## Task 8: Implement JavaScript Carousel

### Learning Objectives
- Manipulate DOM elements with JavaScript
- Add event listeners to buttons
- Update CSS classes for slide visibility
- Track current slide index
- Handle edge cases (first/last slide)

### JavaScript Concepts
- `querySelector` and `querySelectorAll`
- `classList.add()` and `classList.remove()`
- `addEventListener`
- Array manipulation
- Conditional logic

### Implementation
```javascript
// Track current slide
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveForward() {
  // Hide current slide
  // Show next slide
  // Update button states
}

function moveBackward() {
  // Hide current slide
  // Show previous slide
  // Update button states
}
```

### Files to Create/Modify
- `carousel.js` - Implement carousel functionality

---

## Task 9: Implement Scroll Effects

### Learning Objectives
- Use Intersection Observer API
- Add CSS animations on scroll
- Implement parallax effects
- Create smooth scroll behavior
- Apply data attributes for configuration

### HTML Setup
```html
<!-- Add data attributes to elements -->
<div data-scroll="slide-up">Content</div>
<div data-scroll="fade-in" data-scroll-delay="200">Content</div>
<img data-parallax="0.3" src="...">
```

### JavaScript Concepts
- Intersection Observer API
- Event listeners for scroll
- CSS class manipulation
- Transform calculations
- Performance optimization

### CSS Concepts
- CSS transitions
- Transform properties
- Opacity animations
- Transition delays

### Implementation Steps
1. Create CSS animations in `scroll-effects.css`
2. Implement Intersection Observer in `scroll-effects.js`
3. Add parallax calculation function
4. Initialize on page load
5. Add data attributes to HTML elements

### Files to Create/Modify
- `scroll-effects.css` - Animation styles
- `scroll-effects.js` - Scroll effect logic
- `index.html` - Add data attributes to elements

---

## Suggested Teaching Order

1. **Week 1**: Tasks 1-2 (Header, Hero, Section 1)
2. **Week 2**: Tasks 3-4 (Sections 2-3)
3. **Week 3**: Tasks 5-6 (Sections 4-6 HTML/CSS)
4. **Week 4**: Task 8 (JavaScript Carousel)
5. **Week 5**: Task 9 (Scroll Effects)

---

## Resources

- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

