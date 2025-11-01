# Task 3: Make Section 2 ("What We Do")

## Objective
Create a section with a decorative background image and a grid of 4 service cards with hover effects.

## HTML Structure

Add after Section 1:

```html
<section id="section-2" class="panel">
    <img id="geese" width="630" height="97"
        src="https://naturalareasnyc.org/wp-content/uploads/2023/12/goose.png"
        class="attachment-xlarge size-xlarge" alt="Geese flying" decoding="async" fetchpriority="high">

    <h2 class="heading-1">What we do</h2>

    <div class="grid">
        <a class="btn-container card" href="https://naturalareasnyc.org/internships/" target="">
            <div class="media fancy-boxes">
                <img width="1024" height="669"
                    src="https://naturalareasnyc.org/wp-content/uploads/2023/12/Intern-prepping-planter-1024x669.jpg"
                    alt="Intern waters planters with a hose inside greenhouse" loading="lazy" decoding="async">
            </div>
            <article>
                <h3 class="heading-5"><span>Train</span> the next generation</h3>
                <p class="small">Our CUNY and high school internship programs provide STEM students with
                    the training to succeed in the environmental workforce.</p>
                <span class="btn icon arrow">
                    <span class="accessibility">Internships</span>
                </span>
            </article>
        </a>

        <a class="btn-container card" href="https://naturalareasnyc.org/research/" target="">
            <div class="media fancy-boxes">
                <img width="1024" height="768"
                    src="https://naturalareasnyc.org/wp-content/uploads/2023/12/Staff-in-Action-6-1024x768.jpg"
                    alt="Three staff members walk one by one into a forest, NAC logos are visible on back of shirts"
                    loading="lazy" decoding="async">
            </div>
            <article>
                <h3 class="heading-5"><span>Conduct</span> applied research</h3>
                <p class="small">We study urban natural areas and develop resources that demonstrate
                    their value.</p>
                <span class="btn icon arrow">
                    <span class="accessibility">Innovative Research</span>
                </span>
            </article>
        </a>

        <a class="btn-container card" href="https://naturalareasnyc.org/connect-nyc-to-nature/" target="">
            <div class="media fancy-boxes">
                <img width="1024" height="768"
                    src="https://naturalareasnyc.org/wp-content/uploads/2023/12/Natural-Areas-Conservancy-Program-1024x768.jpg"
                    alt="Two volunteers smiling wearing safety gloves, one holds a branch" loading="lazy"
                    decoding="async">
            </div>
            <article>
                <h3 class="heading-5"><span>Connect</span> New Yorkers to nature</h3>
                <p class="small">We host tours and volunteer events in local natural areas and work to
                    improve NYC's network of trails.</p>
                <span class="btn icon arrow">
                    <span class="accessibility">Connect New Yorkers to Nature</span>
                </span>
            </article>
        </a>

        <a class="btn-container card" href="https://naturalareasnyc.org/coalition-advocacy/" target="">
            <div class="media fancy-boxes">
                <img width="1024" height="768"
                    src="https://naturalareasnyc.org/wp-content/uploads/2023/12/Advocacy-Natural-Areas-Conservancy-1-1024x768.jpg"
                    alt="Large group of protestors holding Play Fair signs stand on steps of NYC city hall"
                    loading="lazy" decoding="async">
            </div>
            <article>
                <h3 class="heading-5"><span>Advocate</span> for natural areas</h3>
                <p class="small">We make our voices heard by championing forests and wetlands with
                    elected officials.</p>
                <span class="btn icon arrow">
                    <span class="accessibility">Coalition Advocacy</span>
                </span>
            </article>
        </a>
    </div>
</section>
```

## CSS Styles

```css
/* ============================================
   SECTIONS
   ============================================ */

#section-2 {
  margin-top: 100px;
  position: relative;
  background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/bkg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 400px;
  min-height: 100vh;
}

#section-2 h2 {
  text-align: center;
}

#section-2 .grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

#geese {
  position: absolute;
  right: 30px;
  top: 20px;
}

/* ============================================
   LAYOUT - GRID & CARDS
   ============================================ */

.grid {
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0;
}

.btn-container {
  display: block;
  text-decoration: none;
  color: inherit;
}

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

.card:hover,
a.card:hover {
  box-shadow: 8px 24px 40px 0px rgba(0, 0, 0, 0.06);
  color: var(--black);
}

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

.fancy-boxes {
  position: relative;
  overflow: hidden;
}

.fancy-boxes img {
  height: 100%;
  object-fit: cover;
  width: 100%;
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

.btn.icon.arrow {
  background: url(//naturalareasnyc.org/wp-content/themes/studio-simpatico/svgs/btn-arrow.svg) var(--persian-coral)
    no-repeat center / 100% auto;
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

## Key Concepts

### 1. CSS Grid with `repeat()`
- `grid-template-columns: repeat(2, 1fr)` creates 2 equal columns
- `repeat(4, 1fr)` would create 4 columns
- More efficient than writing `1fr 1fr 1fr 1fr`

### 2. Fancy Boxes Effect
- Uses `:before` and `:after` pseudo-elements
- Creates decorative borders that grow on hover
- `transform: scale(1, -1)` flips the bottom border vertically

### 3. Card Hover Effects
- `transition: all 0.25s ease` enables smooth animations
- `box-shadow` appears on hover for depth
- Button arrow slides right on hover

### 4. Background Image Positioning
- `background-size: contain` ensures image fits without cropping
- `background-position: center bottom` positions at bottom center
- `padding-bottom: 400px` creates space for background image

### 5. Absolute Positioning (Geese Image)
- `position: absolute` removes from normal flow
- Positioned relative to section-2 (its parent)
- `top` and `right` control placement

## Testing Checklist

- [ ] Section displays with background image
- [ ] Geese image appears in top-right corner
- [ ] Grid shows 2 columns (4 cards total)
- [ ] Cards have white background with images on left
- [ ] Fancy border boxes appear on card images
- [ ] Hover effect makes borders grow
- [ ] Arrow button slides on hover
- [ ] Card shadow appears on hover
- [ ] Cards are clickable links

## Next Steps

After completing this task, move on to Task 4: Make Section 3.

