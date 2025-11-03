---
title: "6. The NYC Nature Map"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 6: Section 4 (The NYC Nature Map)

<img src="/fall2025/images/midterm-project/section4.png" class="screenshot-lg" />

**Folder:** `06_section4/`  
**Files:** `index.html`, `section4.css`

## HTML Structure (`index.html`)

Create two equal columns with images and call-to-action:

```html
<section id="section-4">
    <div class="container grid">
        <div class="column">
            <div class="media">
                <img src="../images/callout1.jpg" alt="Image of Forests in Cities Climate Tool">
            </div>
            <article>
                <h2>The NYC Nature Map</h2>
                <p class="large">Experience a bird's-eye-view of our natural areas and learn what's in your neighborhood.</p>
                <a href="https://naturalareasnyc.org/nyc-nature-map/" class="btn primary" target="">Explore Now</a>
            </article>
        </div>
        <div class="column">
            <div class="media">
                <img src="../images/data-screenshot.webp" alt="Image of Forests in Cities Climate Tool">
            </div>
            <article>
                <h2>Data Sets for Download</h2>
                <p class="large">Explore our forest assessment and other data sets, packaged for easy download.</p>
                <a href="https://naturalareasnyc.org/data-sets-for-download/" class="btn primary" target="">Get Started</a>
            </article>
        </div>
    </div>
</section>
```

## CSS Solution (`section4.css`)

### Part 1: Section and Grid Layout

Set up the section and two-column grid:

```css
#section-4 {
  max-width: 1150px;
  margin: 0 auto;
}

#section-4 h2 {
  font-size: 2rem;
}

#section-4 .grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
```

### Part 2: Column Layout with Flexbox

Use flexbox to center content vertically in each column:

```css
.column,
.column article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Image container with specific aspect ratio */
.column .media {
  aspect-ratio: 425 / 286;
  margin: 0 auto 15px;
  width: calc(425 / 538 * 100%);
}

.column .media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Vertical divider between columns */
.column:first-child {
  border-right: 1px solid var(--button-gray);
}
```

### Part 3: Typography

Style the large text with green color:

```css
.column .large {
  color: var(--moss-green);
  font-weight: 700;
}
```

### Part 4: Responsive Styles

Stack columns on mobile and change border:

```css
@media screen and (max-width: 1024px) {
  #section-4 {
    max-width: 100%;
    padding: 0 20px;
  }

  #section-4 .grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  /* Change border from right to bottom */
  .column:first-child {
    border-right: none;
    border-bottom: 1px solid var(--button-gray);
    padding-bottom: 3rem;
  }

  .column:last-child {
    padding-top: 3rem;
  }
}

@media screen and (max-width: 768px) {
  #section-4 {
    padding: 0 15px;
  }

  #section-4 h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  #section-4 .grid {
    gap: 2rem;
  }

  .column .media {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .column .large {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  .column:first-child {
    padding-bottom: 2rem;
  }

  .column:last-child {
    padding-top: 2rem;
  }
}
```

## Key Takeaways

1. **Flexbox + Grid**: Use Grid for overall layout, Flexbox within columns for centering
2. **Aspect Ratios**: Use `aspect-ratio: 425 / 286` to maintain image proportions
3. **Border Positioning**: Use `:first-child` and `:last-child` to add borders between columns
4. **Responsive Borders**: Change from `border-right` to `border-bottom` on mobile
5. **Centered Content**: Use `align-items: center` and `justify-content: center` to center content in flex containers

[← Back to Midterm Project Index](./midterm)
