# Task 6: Make Section 5 ("Forests in Cities")

## Objective
Create a section with background image and two stacked informational cards.

## HTML Structure

Add after Section 4:

```html
<section id="section-5">
    <div class="container">
        <h2 class="heading-1 mega">Forests in <br>Cities network</h2>
        <div class="cards">
            <a class="btn-container card" href="https://naturalareasnyc.org/forests-in-cities-network/" target="">
                <article>
                    <h3 class="heading-4">What is Forests in Cities?</h3>
                    <p class="large">We created the FiC network in 2019 to advance healthy forested natural
                        areas across America. By nurturing a network of interdisciplinary experts from 26
                        cities, together we advance urban forest science and practice while advocating for
                        increased resources and support for our cities' forests.</p>
                    <span class="btn icon arrow medium">
                        <span class="accessibility">FiC</span>
                    </span>
                </article>
            </a>

            <a class="btn-container card" href="https://fic.naturalareasnyc.org/" target="_blank">
                <article>
                    <h3 class="heading-4">Explore the Resource Library</h3>
                    <p class="large">Everything you need to know about forested natural areas—all in one
                        place. Find peer-reviewed research, forest management plans, land and project
                        assessment protocols, and more. We curate and collect new resources from FiC members
                        weekly.</p>
                    <span class="btn icon arrow medium">
                        <span class="accessibility">Explore the Resource Library</span>
                    </span>
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

#section-5 {
  background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/bkg-2.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left bottom;
  padding-top: 20vw;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

#section-5 .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: flex-end;
  border-bottom: 1px solid white;
}

#section-5 .cards {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: flex-end;
  border-bottom: 1px solid white;
  padding-bottom: 2rem;
}

#section-5 .heading-1 {
  color: white;
}
```

## Key Concepts

### 1. Viewport Width Units (`vw`)
- `padding-top: 20vw` = 20% of viewport width
- Creates responsive spacing that scales with screen size
- Useful for maintaining proportions

### 2. Background Image Sizing
- `background-size: 100% auto` fills width, maintains aspect ratio
- `100%` = full width
- `auto` = height adjusts automatically

### 3. Flexbox Column Stacking
- `flex-direction: column` stacks cards vertically
- `row-gap: 2rem` adds space between cards
- `justify-content: flex-end` aligns to bottom

### 4. Border Separators
- White borders create visual separation
- Used on both container and cards div
- Helps organize content visually

### 5. Minimum Height
- `min-height: 600px` ensures section has enough space
- Prevents content from being cramped
- Works with padding-top for full layout

## Testing Checklist

- [ ] Section displays with background image
- [ ] Background image fills horizontal space
- [ ] Heading "Forests in Cities network" is white and visible
- [ ] Two cards stack vertically
- [ ] Cards have proper spacing between them
- [ ] Border separators are visible
- [ ] Arrow buttons display correctly
- [ ] Cards are clickable links
- [ ] Section has proper vertical spacing

## Next Steps

After completing this task, move on to Task 7: Make Section 6 (HTML/CSS only).

