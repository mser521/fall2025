---
title: "8. Carousel"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

<img src="/fall2025/images/midterm-project/section6.png" class="screenshot-lg" />

**Folder:** `08_carousel/`  
**Files:** `index.html`, `section6.css`, `carousel.js`

## Overview

The carousel card HTML structure is already provided in the [style guide](/fall2025/downloads/projects/midterm/style-guide/index.html). Your job is to:
1. Reference the style guide for the carousel card HTML structure
2. Create the carousel section with navigation buttons and track
3. Add multiple carousel cards (at least 3-4 for practice)
4. Link the carousel CSS and JavaScript files

## HTML (`index.html`)

Start with this HTML structure, which you will paste inside the `<main></main>` tag:

```html
<!-- Section 6 (Carousel) -->
<section id="section-6">
    <div class="container">
        <article>
            <h2 class="heading-1">Understories</h2>
            <p class="heading-6">The backdoor to NYC's backyard</p>
        </article>

        <div class="carousel">
            <button onclick="moveBackward()" class="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
            <button onclick="moveForward()" class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
            <div>
                <div class="slick-track">
                    <!-- TODO: Add carousel cards here using the pattern from style guide -->
                </div>
            </div>
        </div>

        <a href="https://naturalareasnyc.org/understories/" class="btn primary" target="">View All</a>
    </div>
</section>
```

**Your task:** Refer to the [Style Guide Demo](/fall2025/downloads/projects/midterm/style-guide/index.html) and look for the **Carousel Card Pattern (Section 6 Style)** in the "Hero Section and Cards" area. Copy that HTML structure and wrap each card in a `<div class="slide slick-slide">` element. Create at least 3-4 carousel cards with your own content (images, titles, dates, pills, etc.).

**Note:** Each slide should be wrapped like this:
```html
<div class="slide slick-slide">
    <!-- Carousel card HTML from style guide -->
</div>
```

## CSS (`section6.css`)

Attach the stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="section6.css">
```

Start with this CSS:

```css
#section-6 {
  background-image: url(../images/section-6-bkg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-top: 50px;
  padding-bottom: 350px;
}

#section-6 .heading-1 {
  margin: 0;
}

.carousel-card .heading-5 {
  font-size: 1.2rem;
}

#section-6 .card {
  width: 360px;
}

#section-6 .card .media {
  height: 250px;
  width: 100%;
}
```

**Note:** The carousel-specific styles (track, arrows, navigation) are already included in `utility-classes.css`, so you don't need a separate `carousel.css` file. Make sure you've linked `utility-classes.css` in your HTML.

## JavaScript (`carousel.js`)

Attach this script in your HTML `<head>` or before closing `</body>`:

```html
<script src="carousel.js" defer></script>
```

This file contains the carousel functionality:
- `moveForward()` - Moves carousel to the next slide
- `moveBackward()` - Moves carousel to the previous slide
- `updateCarouselPosition()` - Calculates and applies the transform

**How it works:**
- Uses `transform: translateX()` to move the carousel track horizontally
- Calculates offset based on slide width (360px) + gap (40px) × current position
- Loops back to start/end when reaching boundaries


[← Back to Midterm Project Index](./midterm)
