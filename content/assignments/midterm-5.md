---
title: "5. Join Our Efforts"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 5: Section 3 (Join Our Efforts)

<img src="/fall2025/images/midterm-project/section3.png" class="screenshot-lg" />

**Folder:** `05_section3/`  
**Files:** `index.html`, `section3.css`

## HTML Structure (`index.html`)

Create a section with background pattern and icon-based cards:

```html
<section id="section-3" style="background-image: url(../images/section-3-bkg.png);">
    <div class="container">
        <h2 class="heading-1">Join our efforts</h2>
        
        <div class="grid">
            <a class="btn-container" href="https://naturalareasnyc.org/donate/" target="">
                <div class="media">
                    <img src="../images/icon-donate.svg" alt="Donate icon">
                </div>
                <article>
                    <h3 class="heading-4">Donate</h3>
                    <p class="small">Give back to natural areas. Your gift will go toward preserving our vital forests and wetlands.</p>
                    <span class="btn tertiary">Donate now</span>
                </article>
            </a>
            <!-- Repeat for 3 more cards: Volunteer, Partner, Get outside -->
        </div>
    </div>
</section>
```

## CSS Solution (`section3.css`)

### Part 1: Section and Container Layout

Set up the section with background and container grid:

```css
#section-3 {
  background: no-repeat center top/100% auto;
  padding: 120px 0;
}

#section-3 img {
  height: 56px;
  margin-bottom: 8px;
  width: auto;
}

/* Container with heading on left, cards on right */
#section-3 .container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

/* Large heading */
#section-3 .heading-1 {
  font-size: calc(60rem / 16);
  letter-spacing: -1.4px;
  line-height: calc(68 / 60);
}
```

### Part 2: Cards Grid

Set up 2x2 grid for the icon cards:

```css
#section-3 .grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  row-gap: 6rem;
}
```

### Part 3: Tertiary Button with Underline Animation

Style the tertiary buttons with animated underline:

```css
.btn.tertiary {
  font-size: calc(15rem / 16);
  line-height: calc(18 / 15);
  padding-bottom: 2px;
  position: relative;
  text-decoration: none;
  color: var(--black);
}

/* Underline using pseudo-element */
.btn.tertiary:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--persian-coral);
  transition: transform 0.25s ease;
}

/* Underline shrinks on hover */
.btn.tertiary:hover:after,
.btn-container:hover .btn.tertiary:after {
  transform: scaleX(0.8);
}
```

### Part 4: Responsive Styles

Stack everything on mobile:

```css
@media screen and (max-width: 1024px) {
  #section-3 {
    padding: 60px 0;
  }

  #section-3 .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  #section-3 .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    row-gap: 3rem;
  }

  #section-3 img {
    height: 48px;
  }
}

@media screen and (max-width: 768px) {
  #section-3 {
    padding: 40px 0;
  }

  #section-3 .heading-1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  #section-3 .grid {
    row-gap: 2rem;
    gap: 1.5rem;
  }

  #section-3 img {
    height: 40px;
    margin-bottom: 0.5rem;
  }

  #section-3 .heading-4 {
    font-size: 1.1rem;
  }

  #section-3 .small {
    font-size: calc(14rem / 16);
  }
}
```

## Key Takeaways

1. **CSS Grid Nesting**: Use grid inside grid - container has 2 columns, inner grid has 2x2 cards
2. **Animated Underline**: Use `:after` pseudo-element with `transform: scaleX()` to create animated underline effect
3. **Background Image**: Apply background via inline style or CSS - it repeats across section
4. **Row Gap**: Use `row-gap` to add extra space between rows in grid
5. **Icon Sizing**: Control icon size with `height` and `width: auto` to maintain aspect ratio

[← Back to Midterm Project Index](./midterm)
