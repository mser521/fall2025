---
title: "4. What We Do"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 4: Section 2 (What We Do)

<img src="/fall2025/images/midterm-project/section2.png" class="screenshot-lg" />

**Folder:** `04_section2/`  
**Files:** `index.html`, `section2.css`

## HTML Structure (`index.html`)

Create a section with a heading and four clickable cards:

```html
<section id="section-2" class="panel">
    <img id="geese" src="../images/goose.png" alt="Geese flying">
    
    <h2 class="heading-1">What we do</h2>
    
    <div class="grid">
        <a class="btn-container card" href="https://naturalareasnyc.org/internships/" target="">
            <div class="media fancy-boxes">
                <img src="../images/card-intern.jpg" alt="Intern waters planters with a hose inside greenhouse">
            </div>
            <article>
                <h3 class="heading-5"><span>Train</span> the next generation</h3>
                <p class="small">Our CUNY and high school internship programs provide STEM students with the training to succeed in the environmental workforce.</p>
                <span class="btn icon arrow">
                    <span class="accessibility">Internships</span>
                </span>
            </article>
        </a>
        <!-- Repeat for 3 more cards: Research, Programs, Advocacy -->
    </div>
</section>
```

## CSS Solution (`section2.css`)

### Part 1: Section and Background

Set up the section with background and positioning:

```css
.panel {
  padding: 50px;
  background-color: #f4f2ef;
}

#section-2 {
  margin-top: 100px;
  position: relative;
  background-image: url(../images/section-2-bkg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 400px;
  min-height: 100vh;
}

/* Centered heading */
#section-2 .heading-1 {
  text-align: center;
  padding-top: 50px;
  font-size: calc(60rem / 16);
  letter-spacing: -1.4px;
  line-height: calc(68 / 60);
}

/* Decorative geese image */
#geese {
  position: absolute;
  right: 30px;
  top: 20px;
}
```

### Part 2: Grid Layout

Set up the 2x2 grid for cards:

```css
#section-2 .grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
```

### Part 3: Card Styles

Style the clickable cards:

```css
.card {
  display: flex;
  background: white;
  transform: translate3d(0, 0, 0);
  transition: all 0.25s ease;
}

a.card {
  text-decoration: none;
  color: var(--black);
}

/* Hover effect - shadow appears */
.card:hover,
a.card:hover {
  box-shadow: 8px 24px 40px 0px rgba(0, 0, 0, 0.06);
  color: var(--black);
}

/* Card image sizing */
.card .media {
  aspect-ratio: 1;
  flex-shrink: 0;
  width: calc(180 / 578 * 100%);
}

.card .media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card article {
  padding: 2rem;
}
```

### Part 4: Fancy Boxes Decoration

Create decorative borders using pseudo-elements:

```css
.fancy-boxes {
  position: relative;
  overflow: hidden;
}

.fancy-boxes img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

/* Top decorative border */
.fancy-boxes:before {
  content: '';
  position: absolute;
  left: 10px;
  top: 10px;
  width: calc(100% - 26px);
  height: 30%;
  border: 3px solid white;
  border-bottom: none;
  transition: all 0.25s ease;
}

/* Bottom decorative border (flipped) */
.fancy-boxes:after {
  content: '';
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: calc(100% - 26px);
  height: 30%;
  border: 3px solid white;
  border-bottom: none;
  transform: scale(1, -1); /* Flip vertically */
  transition: all 0.25s ease;
}

/* Borders expand on card hover */
.card:hover .fancy-boxes:before,
.card:hover .fancy-boxes:after {
  height: 50%;
}
```

### Part 5: Arrow Button

Position arrow button in bottom-right of card:

```css
.btn.icon.arrow {
  background: url(../images/btn-arrow.svg) var(--persian-coral) no-repeat center / 100% auto;
}

/* Position button absolutely in card */
a.card .btn {
  bottom: 10px;
  position: absolute;
  right: 10px;
}

/* Button moves right on hover */
.card:hover .btn.icon.arrow {
  transform: translateX(4px);
}

/* Colored words in headings */
.heading-5 span {
  color: var(--green);
  font-weight: 700;
}
```

### Part 6: Responsive Styles

Stack cards on mobile:

```css
@media screen and (max-width: 1024px) {
  #section-2 .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card article {
    padding: 1.5rem;
  }

  .heading-5 {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 768px) {
  #section-2 {
    padding-bottom: 200px;
    margin-top: 50px;
  }

  #section-2 .heading-1 {
    font-size: 2.5rem;
    padding-top: 30px;
  }

  #geese {
    right: 10px;
    top: 10px;
    width: 300px;
    height: auto;
  }
}
```

## Key Takeaways

1. **Fancy Boxes**: Use `:before` and `:after` pseudo-elements with borders to create decorative overlays
2. **Transform Scale**: Use `transform: scale(1, -1)` to flip an element vertically
3. **Card Hover Effects**: Add shadow and animate decorative borders on hover
4. **Absolute Positioning**: Position arrow button and geese image absolutely within relative parent
5. **Object-fit**: Use `object-fit: cover` to fill container while maintaining aspect ratio

[← Back to Midterm Project Index](./midterm)
