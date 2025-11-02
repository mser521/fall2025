# Task 4: Make Section 3 ("Join Our Efforts")

## Objective
Create a call-to-action section with background image and a grid of 4 action cards with icons.

## HTML Structure

Add after Section 2:

```html
<section id="section-3" class="module ctas style2 has-bkg-img"
    style="background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/bkg-1.png);">
    <div class="container">
        <h2 class="heading-1">Join our efforts</h2>

        <div class="grid">
            <a class="btn-container" href="https://naturalareasnyc.org/donate/" target="">
                <div class="media">
                    <img src="https://naturalareasnyc.org/wp-content/uploads/2024/01/Donate-Expand_On-Light.svg"
                        class="attachment-medium size-medium" alt="Donate icon" decoding="async">
                </div>
                <article>
                    <h3 class="heading-4">Donate</h3>
                    <p class="small">Give back to natural areas. Your gift will go toward preserving our
                        vital forests and wetlands.</p>
                    <span class="btn tertiary">Donate now</span>
                </article>
            </a>

            <a class="btn-container" href="https://naturalareasnyc.org/super-steward-program/" target="">
                <div class="media">
                    <img src="https://naturalareasnyc.org/wp-content/uploads/2024/01/Volunteer-Expand_On-Light.svg"
                        class="attachment-medium size-medium" alt="volunteer icon" decoding="async">
                </div>
                <article>
                    <h3 class="heading-4">Volunteer</h3>
                    <p class="small">Bring new vibrancy to your community by becoming a Super Steward
                        Pathkeeper.</p>
                    <span class="btn tertiary">See opportunities</span>
                </article>
            </a>

            <a class="btn-container" href="https://naturalareasnyc.org/corporate-partnerships/" target="">
                <div class="media">
                    <img src="https://naturalareasnyc.org/wp-content/uploads/2024/01/Partner-Expand_On-Light-copy-3.svg"
                        class="attachment-medium size-medium" alt="Partnership icon" decoding="async">
                </div>
                <article>
                    <h3 class="heading-4">Partner</h3>
                    <p class="small">Engage with our mission through corporate sponsorship and volunteering.</p>
                    <span class="btn tertiary">Learn more</span>
                </article>
            </a>

            <a class="btn-container" href="/events" target="">
                <div class="media">
                    <img src="https://naturalareasnyc.org/wp-content/uploads/2024/01/Get-Outside-Expand_On-Light.svg"
                        class="attachment-medium size-medium" alt="Get Outside icon" decoding="async">
                </div>
                <article>
                    <h3 class="heading-4">Get outside</h3>
                    <p class="small">Tour NYC parks, learn about local wildlife, or get your hands dirty on
                        a stewardship day.</p>
                    <span class="btn tertiary">Browse events</span>
                </article>
            </a>
        </div>
    </div>
</section>
```

## CSS Styles

```css
/* ============================================
   SECTIONS
   ============================================ */

#section-3 {
  background: no-repeat center top/100% auto;
  padding: 120px 0;
}

#section-3 .container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

#section-3 .grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  row-gap: 6rem;
}

/* ============================================
   BUTTONS
   ============================================ */

.btn.tertiary {
  font-size: calc(15rem / 16);
  line-height: calc(18 / 15);
  padding-bottom: 2px;
  position: relative;
}

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

.btn.tertiary:hover:after,
.btn-container:hover .btn.tertiary:after {
  transform: scaleX(0.8);
}
```

## Key Concepts

### 1. Inline Background Images
- `style="background-image: url(...)"` sets background in HTML
- Useful when background varies per section
- Can also be set in CSS with `background-image`

### 2. Tertiary Button Style
- Text-only button with underline effect
- Uses `:after` pseudo-element for underline
- Underline shrinks on hover (`scaleX(0.8)`)

### 3. SVG Icons
- SVG files load as images
- Scalable without quality loss
- Work well for icons and logos

### 4. Grid with Sub-grids
- Section 3 has its own grid layout
- Contains another grid for cards
- Nested grids for complex layouts

## Testing Checklist

- [ ] Section displays with background image
- [ ] Heading "Join our efforts" is visible
- [ ] Grid shows 2x2 layout (4 cards)
- [ ] Each card has an icon image
- [ ] Tertiary buttons have underline effect
- [ ] Underline shrinks on hover
- [ ] Cards are clickable links

## Next Steps

After completing this task, move on to Task 5: Make Section 4.

