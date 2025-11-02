---
title: "Midterm Project"
date: "2025-11-03"
type: "midterm project"
draft: 0
---

# Midterm Project: Building a Multi-Section Website

This project consists of 8 exercises, each focused on implementing a specific section of a Natural Areas Conservancy website. Each exercise is in its own folder with a blank `index.html` and corresponding CSS file. The shared `styles.css` file contains all the base styles, CSS variables, and utility classes you'll need.

**Note:** Screenshots for each exercise show what the final result should look like.

## Setup Instructions

1. Navigate to the `public/downloads/project/assignment/` folder
2. Each exercise folder (01_hero, 02_nav, etc.) contains:
   - An `index.html` file (start with basic HTML structure)
   - A corresponding CSS file (hero.css, nav.css, etc.)
3. All exercises should link to `../styles.css` for base styles
4. Use relative paths for images: `../images/filename.jpg`


## Exercise 1: Hero Section (Solution Provided)

<img src="/fall2025/images/midterm-project/hero.png" class="screenshot-lg" />

**Folder:** `01_hero/`  
**Files:** `index.html`, `hero.css`

This exercise is provided as a complete solution. Study it to understand the pattern for the remaining exercises.

### Complete HTML Solution (`index.html`)
Please add inside the `<main></main>` tag:

```html

<section id="hero" class="hero">
    <div class="container grid">
        <article>
            <h1 class="mega">Healthy, resilient natural areas for all</h1>
            <p class="xlarge">We champion and protect New York City's 20,000 acres of forests and wetlands to
                create a sustainable future here and across the nation.
            </p>
            <a class="jump-arrow" href="#">
                <span class="accessibility">Jump to first section</span>
            </a>
        </article>
    </div>
</section>
```

### Complete CSS Solution (`hero.css`)

#### Part 1: Base Styles (No pseudo-classes or media queries)

Start with the foundation styles:

```css
/* Hero section - full viewport height with background image */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh; /* Full viewport height */
  color: white;
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  background-color: #222;
  -webkit-font-smoothing: antialiased;
}

/* Large heading styling */
.hero h1 {
  font-size: 4.3rem;
  line-height: 1em;
  text-align: left;
  margin-top: 250px;
  max-width: 80vw;
  letter-spacing: 0;
}

/* Link styling */
.hero a {
  color: white;
  text-decoration: none;
}

.hero a:visited {
  color: white;
  text-decoration: none;
}

.hero a:hover {
  text-decoration: underline;
}
```


#### Part 2: The Grid

something about the grid layout

```css
/* Container grid - two column layout */
.hero .grid {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-left: 50px;
  z-index: 1; /* Above gradient overlays */
}
```

#### Part 3: The Arrow

Something about the arrow...

```css
/* Jump arrow - uses SVG icon as background */
.hero .jump-arrow {
  display: block;
  width: 26px;
  height: 30px;
  margin-top: 20px;
  background: url(../images/arrow-down.svg) no-repeat;
  transition: all 0.2s ease-in-out;
}

.hero .jump-arrow:hover {
  transform: translateY(5px); /* Moves down slightly on hover */
}
```


#### Part 4: Add Pseudo-classes

Now add hover effects and pseudo-elements for decorative overlays:

```css
/* Dark gradient overlay from bottom-left using :before pseudo-element */
.hero:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(44deg, rgba(15, 16, 16, 0.5) 37.73%, rgba(15, 16, 16, 0) 52.35%);
}

/* Dark gradient overlay from top using :after pseudo-element */
.hero:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(180deg, rgba(15, 16, 16, 0.7) 11.98%, rgba(15, 16, 16, 0) 76.69%);
}
```

#### Part 5: Add Media Queries

Finally, add responsive styles for mobile devices:

```css
/* Responsive: single column on mobile */
@media screen and (max-width: 768px) {
  .hero .container {
    padding: 10px;
  }

  .hero h1 {
    font-size: 2.5rem;
    max-width: 90vw;
  }

  .container.grid {
    grid-template-columns: 1fr;
    margin-left: 20px;
  }

  .hero {
    background-attachment: scroll; /* Better performance on mobile */
  }
}
```

### Key Takeaways for Other Exercises

1. **HTML Structure**: Use semantic HTML5 elements (`<section>`, `<article>`, etc.) with appropriate IDs and classes
2. **CSS Organization**: Target elements by ID/class, use pseudo-elements for decorative overlays
3. **Layouts**: Use CSS Grid or Flexbox for positioning content
4. **Responsive Design**: Always include mobile breakpoints at `768px`
5. **Classes from `styles.css`**: Reuse utility classes (`.container`, `.grid`, `.mega`, `.xlarge`, etc.) instead of redefining them
6. **Relative Paths**: Always use `../images/filename.jpg` for images in CSS

Use this pattern as a reference for Exercises 2-8!

## Exercise 2: Navigation

<img src="/fall2025/images/midterm-project/nav-desktop.png" class="screenshot-lg" />


<img src="/fall2025/images/midterm-project/nav-mobile.png" class="screenshot-2xs" />

**Folder:** `02_nav/`  
**Files:** `index.html`, `nav.css`, `nav.js` (optional)

Create a fixed navigation bar with:
- Logo on the left
- Navigation links split into left and right groups
- White text on dark background
- Flexbox layout to space items
- Hamburger menu for mobile (hidden on desktop)
- Mobile menu that slides in from the right when hamburger is clicked
- Hamburger icon that animates to an X when menu is open

**Key CSS concepts:** `position: absolute`, Flexbox, CSS transforms, transitions, mobile-first responsive design, z-index



## Exercise 3: Section 1 (Video Introduction)

<img src="/fall2025/images/midterm-project/section1.png" class="screenshot-lg" />

**Folder:** `03_section1/`  
**Files:** `index.html`, `section1.css`

Create a two-column layout with:
- Video thumbnail image on the left with play button overlay
- Dark content panel on the right with white text
- Play button positioned absolutely at bottom-left of image
- Grid layout that stacks on mobile

**Key CSS concepts:** CSS Grid, absolute positioning, aspect ratios, pseudo-elements for overlays



## Exercise 4: Section 2 (What We Do)

<img src="/fall2025/images/midterm-project/section2.png" class="screenshot-lg" />

**Folder:** `04_section2/`  
**Files:** `index.html`, `section2.css`

Create a card-based layout with:
- Large centered heading
- Four clickable cards in a 2x2 grid
- Each card has an image with decorative "fancy boxes" borders
- Cards show hover effects (shadow)
- Decorative borders that expand on hover using `:before` and `:after`
- Arrow button icon in bottom-right of each card
- Absolutely positioned decorative image (geese) in top-right
- Background image at the bottom

**Key CSS concepts:** CSS Grid, pseudo-elements, hover effects, transitions, absolute positioning, `object-fit` for images



## Exercise 5: Section 3 (Join Our Efforts)

<img src="/fall2025/images/midterm-project/section3.png" class="screenshot-lg" />

**Folder:** `05_section3/`  
**Files:** `index.html`, `section3.css`

Create an icon-based card layout with:
- Background pattern image
- Large heading on the left, cards grid on the right
- Four cards, each with an icon, heading, description, and tertiary button
- Tertiary buttons with animated underline effect on hover
- Two-column grid for cards (stacks on mobile)

**Key CSS concepts:** CSS Grid, background images, pseudo-elements for button underlines, transitions


## Exercise 6: Section 4 (The NYC Nature Map)

<img src="/fall2025/images/midterm-project/section4.png" class="screenshot-lg" />

**Folder:** `06_section4/`  
**Files:** `index.html`, `section4.css`

Create a two-column layout with:
- Two equal columns, each containing an image and call-to-action
- Images with specific aspect ratios
- Vertical divider between columns
- Centered content in each column
- Primary buttons for call-to-action
- Stacks to single column on mobile

**Key CSS concepts:** CSS Grid, Flexbox, aspect ratios, borders, responsive stacking



## Exercise 7: Section 5 (Forests in Cities Network)

<img src="/fall2025/images/midterm-project/section5.png" class="screenshot-lg" />

**Folder:** `07_section5/`  
**Files:** `index.html`, `section5.css`

Create a section with background positioning:
- Background image positioned at bottom-left
- Two-column layout: large heading on left, cards on right
- White heading text (appears on dark background)
- Two stacked cards with arrow buttons
- Cards have hover effects
- Background disappears on mobile, heading changes to black

**Key CSS concepts:** Background positioning, CSS Grid, flexbox, responsive background handling, z-index


## Exercise 8: Section 6 (Carousel)

<img src="/fall2025/images/midterm-project/section6.png" class="screenshot-lg" />

**Folder:** `08_section6/`  
**Files:** `index.html`, `section6.css`, `carousel.css` (optional), `carousel.js` (optional)

Create a carousel section with:
- Background image
- Heading and subheading
- Horizontal scrolling carousel with 10 card slides
- Navigation arrows (prev/next) positioned absolutely
- Each card has an image with "fancy boxes" decoration, category pill, date, title, and arrow button
- Carousel track uses flexbox with wide width for scrolling
- "View All" button at bottom
- Optional JavaScript for carousel functionality

**Key CSS concepts:** Flexbox for horizontal scrolling, absolute positioning, transforms for arrow rotation, overflow handling, responsive arrow repositioning


## General Tips

1. **File Paths**: Always use relative paths (`../images/filename.jpg`, `../styles.css`)

2. **CSS Variables**: Use variables from `styles.css`:
   - Colors: `var(--black)`, `var(--white)`, `var(--persian-coral)`, etc.
   - Container: `var(--container-max-width)`, `var(--container-outer-padding)`

3. **Responsive Design**: Include mobile styles at `max-width: 768px` (and tablet at `1024px` if needed)

4. **CSS Classes**: Reuse utility classes from `styles.css` (`.btn`, `.heading-1`, `.grid`, `.card`, etc.) instead of redefining them

5. **Semantic HTML**: Use appropriate HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)

6. **Accessibility**: Include alt text for images, proper heading hierarchy, `aria-label` where needed

Good luck with your implementation!
