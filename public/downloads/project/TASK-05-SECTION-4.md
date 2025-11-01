# Task 5: Make Section 4 (Two-Column Feature)

## Objective
Create a two-column layout showcasing two features with images and call-to-action buttons.

## HTML Structure

Add after Section 3:

```html
<section id="section-4">
    <div class="container grid">
        <div class="column">
            <div class="media">
                <img width="1024" height="611"
                    src="https://naturalareasnyc.org/wp-content/uploads/2023/12/callout1.jpg"
                    class="attachment-large size-large" alt="Image of Forests in Cities Climate Tool">
            </div>
            <article>
                <h2>The NYC Nature Map</h2>
                <p class="large">Experience a bird's-eye-view of our natural areas and learn what's in your
                    neighborhood.</p>
                <a href="https://naturalareasnyc.org/nyc-nature-map/" class="btn primary" target="">Explore Now</a>
            </article>
        </div>
        <div class="column">
            <div class="media">
                <img width="1024" height="611"
                    src="https://naturalareasnyc.org/wp-content/uploads/2024/06/Screenshot-2024-06-27-at-1.01.08 PM-1024x611.png"
                    class="attachment-large size-large" alt="Image of Forests in Cities Climate Tool" decoding="async">
            </div>
            <article>
                <h2>Data Sets for Download</h2>
                <p class="large">Explore our forest assessment and other data sets, packaged for easy
                    download.</p>
                <a href="https://naturalareasnyc.org/data-sets-for-download/" class="btn primary" target="">Get Started</a>
            </article>
        </div>
    </div>
</section>
```

## CSS Styles

```css
/* ============================================
   SECTIONS
   ============================================ */

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

/* ============================================
   LAYOUT - GRID & CARDS
   ============================================ */

.column,
.column article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.column .media {
  aspect-ratio: 425 / 286;
  margin: 0 auto var(--text-spacing-small);
  width: calc(425 / 538 * 100%);
}

.column .media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.column .large {
  color: var(--moss-green);
  font-weight: 700;
}

.column:first-child {
  border-right: 1px solid var(--button-gray);
}
```

## Key Concepts

### 1. Flexbox Column Layout
- `flex-direction: column` stacks items vertically
- `align-items: center` centers horizontally
- `justify-content: center` centers vertically

### 2. Border Separator
- `border-right` on first column creates divider
- Only visible on first column
- `:first-child` pseudo-selector targets first element

### 3. Centered Container
- `max-width: 1150px` limits section width
- `margin: 0 auto` centers the container

### 4. Percentage-Based Width Calculation
- `width: calc(425 / 538 * 100%)` maintains proportions
- Creates responsive sizing based on design specs

### 5. Primary Button
- Uses `btn primary` class
- Full background color
- Hover effects change color

## Testing Checklist

- [ ] Section displays with two equal columns
- [ ] Images display correctly with proper aspect ratio
- [ ] Border separator visible between columns
- [ ] Content is centered in each column
- [ ] Primary buttons display correctly
- [ ] Buttons are clickable
- [ ] Text is readable and properly styled

## Next Steps

After completing this task, move on to Task 6: Make Section 5.

