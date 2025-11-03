---
title: "8. Carousel"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 8: Section 6 (Carousel)

<img src="/fall2025/images/midterm-project/section6.png" class="screenshot-lg" />

**Folder:** `08_section6/`  
**Files:** `index.html`, `section6.css`, `carousel.css` (optional), `carousel.js` (optional)

## HTML Structure (`index.html`)

Create a carousel section with multiple slides:

```html
<section id="section-6" style="background-image: url(../images/section-6-bkg.jpg);">
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
                    <div class="slide slick-slide">
                        <a class="card" href="https://naturalareasnyc.org/gratitude-giveaway-2025/">
                            <div class="media fancy-boxes">
                                <img src="../images/carousel-1.jpg" alt="giveaway items">
                                <span>Read more</span>
                            </div>
                            <article>
                                <span class="pill small green">Announcements</span>
                                <span class="caption">October 27, 2025</span>
                                <h3 class="heading-5">Gratitude Giveaway 2025</h3>
                                <span class="btn icon arrow"></span>
                            </article>
                        </a>
                    </div>
                    <!-- Repeat for 9 more slides (total 10) -->
                </div>
            </div>
        </div>
        
        <a href="https://naturalareasnyc.org/understories/" class="btn primary" target="">View All</a>
    </div>
</section>
```

## CSS Solution (`section6.css`)

### Part 1: Section and Container

Set up the section with background and container:

```css
#section-6 {
  background: no-repeat center bottom / 100% auto;
  padding-bottom: 337px;
  padding-top: 150px;
}

#section-6 .container {
  margin-left: 5vw;
  position: relative;
  padding: 0;
}

#section-6 .heading-1 {
  margin: 0;
  font-size: calc(60rem / 16);
  letter-spacing: -1.4px;
  line-height: calc(68 / 60);
}

.heading-6 {
  margin-top: 0;
  margin-bottom: 4rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  font-size: 1.2rem;
}

#section-6 .heading-5 {
  line-height: 1.2em;
  font-size: 1.2rem;
  margin-bottom: 20px;
}
```

### Part 2: Carousel Track (Flexbox Horizontal Scrolling)

Create the horizontal scrolling carousel:

```css
.carousel {
  margin-bottom: 20px;
  overflow: hidden; /* Hide slides outside viewport */
}

.slick-track {
  opacity: 1;
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 50000px; /* Wide enough to hold all slides */
  transition: transform 0.3s ease;
}

.slide.slick-slide {
  display: flex;
}
```

### Part 3: Navigation Arrows

Position and style the prev/next arrows:

```css
.slick-arrow {
  background: url(../images/btn-arrow.svg) no-repeat center;
  border: 2px solid var(--black);
  border-radius: 100%;
  font-size: 0px;
  height: 40px;
  text-indent: -999999px; /* Hide text */
  width: 40px;
  position: absolute;
}

.slick-next {
  right: 130px;
  top: 80px;
}

.slick-prev {
  right: 180px;
  top: 80px;
  transform: scale(-1, 1); /* Flip arrow horizontally */
}
```

### Part 4: Card Styles

Style the carousel cards:

```css
#section-6 .card {
  width: 360px;
  flex-direction: column;
}

#section-6 .card .media {
  aspect-ratio: 1;
  flex-shrink: 0;
  height: 250px;
  width: 100%;
}

.card .media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card article {
  padding: 2rem;
  position: relative; /* For absolute button */
}

a.card .btn {
  bottom: 10px;
  position: absolute;
  right: 10px;
}

.card:hover .btn.icon.arrow {
  transform: translateX(4px);
}
```

### Part 5: Fancy Boxes Decoration

Use same fancy boxes pattern as Section 2:

```css
.fancy-boxes {
  position: relative;
  overflow: hidden;
}

.fancy-boxes:before,
.fancy-boxes:after {
  content: '';
  position: absolute;
  left: 10px;
  width: calc(100% - 26px);
  height: 30%;
  border: 3px solid white;
  border-bottom: none;
  transition: all 0.25s ease;
}

.fancy-boxes:before {
  top: 10px;
}

.fancy-boxes:after {
  bottom: 10px;
  top: auto;
  transform: scale(1, -1);
}

.card:hover .fancy-boxes:before,
.card:hover .fancy-boxes:after {
  height: 50%;
}
```

### Part 6: Responsive Styles

Reposition arrows and adjust layout on mobile:

```css
@media screen and (max-width: 768px) {
  #section-6 {
    padding-top: 60px;
    padding-bottom: 150px;
    background-size: cover;
  }

  #section-6 .container {
    margin-left: 0;
    padding: 0 15px;
  }

  #section-6 .heading-1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  #section-6 .heading-6 {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  #section-6 .heading-5 {
    font-size: 1.1rem;
  }

  /* Reposition arrows for mobile */
  #section-6 .slick-prev,
  #section-6 .slick-next {
    position: relative;
    right: auto;
    top: auto;
    margin: 20px 10px;
    display: inline-block;
    vertical-align: middle;
  }

  #section-6 .slick-prev {
    transform: scale(-1, 1);
  }
}
```

## JavaScript Solution (`carousel.js`) - Optional

Basic carousel functionality without loops:

```javascript
const track = document.querySelector('.slick-track');
const items = document.querySelectorAll('.slide');
const totalSlides = items.length;
let currentPosition = 0;
const gap = 40;
const slideWidth = 360;

function moveForward() {
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0; // Loop back to start
  } else {
    currentPosition++; // Move to next slide
  }
  updateCarouselPosition();
}

function moveBackward() {
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2; // Loop to end
  } else {
    currentPosition--; // Move to previous slide
  }
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const offset = (slideWidth + gap) * currentPosition;
  track.style.transform = `translateX(-${offset}px)`;
}
```

**How it works:**
- `moveForward()` and `moveBackward()` change `currentPosition`
- `updateCarouselPosition()` calculates offset and moves the track using `transform: translateX()`
- No loops - just simple addition/subtraction and conditional checks

## Key Takeaways

1. **Horizontal Scrolling**: Use flexbox with wide width (`50000px`) and `overflow: hidden` to create scrolling effect
2. **Transform TranslateX**: Use `transform: translateX()` to move carousel track (more performant than changing `left`)
3. **Arrow Flipping**: Use `transform: scale(-1, 1)` to flip arrow horizontally for previous button
4. **Responsive Arrows**: Change from absolute to relative positioning on mobile
5. **Fixed Card Width**: Each card has fixed width (`360px`) for consistent scrolling

[← Back to Midterm Project Index](./midterm)
