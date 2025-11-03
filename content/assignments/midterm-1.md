---
title: "1. Hero Section"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

**Folder:** `01_hero/`  
**Files:** `index.html`, `hero.css`

**Screenshot of Solution:**

<img src="/fall2025/images/midterm-project/hero.png" class="screenshot-lg" />

This exercise is provided as a complete solution. Study it to understand the pattern for the remaining exercises.

## HTML Solution (`index.html`)

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

## CSS Solution (`hero.css`)

### Part 1: Base Styles (No pseudo-classes or media queries)

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

### Part 2: The Grid

Set up the two-column grid layout for positioning content:

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

### Part 3: The Arrow

Style the jump arrow using an SVG icon as a background image:

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

### Part 4: Add Pseudo-elements

Now add decorative gradient overlays using pseudo-elements:

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

### Part 5: Add Media Queries

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

## Key Takeaways for Other Exercises

1. **HTML Structure**: Use semantic HTML5 elements (`<section>`, `<article>`, etc.) with appropriate IDs and classes
2. **CSS Organization**: Target elements by ID/class, use pseudo-elements for decorative overlays
3. **Layouts**: Use CSS Grid or Flexbox for positioning content
4. **Responsive Design**: Always include mobile breakpoints at `768px`
5. **Classes from `styles.css`**: Reuse utility classes (`.container`, `.grid`, `.mega`, `.xlarge`, etc.) instead of redefining them
6. **Relative Paths**: Always use `../images/filename.jpg` for images in CSS

Use this pattern as a reference for Exercises 2-8!

[← Back to Midterm Project Index](./midterm)

