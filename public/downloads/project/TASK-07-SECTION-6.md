# Task 7: Make Section 6 (Blog Carousel - HTML/CSS Only)

## Objective
Create the HTML structure and CSS styling for a blog carousel. JavaScript functionality will be added in Task 8.

## HTML Structure

Add after Section 5:

```html
<section id="section-6" class="module featured-blog-carousel has-bkg"
    style="background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/bkg-scaled.jpg);">
    <div class="container">
        <article>
            <h2 class="heading-1">Understories</h2>
            <p class="heading-6">The backdoor to NYC's backyard</p>
        </article>

        <div class="carousel slick-initialized slick-slider">
            <button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true">Previous</button>
            <button class="slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false">Next</button>
            
            <div class="slick-list">
                <div class="slick-track">
                    <div class="slide slick-slide slick-current slick-active" tabindex="0" data-slick-index="0">
                        <a class="card post" href="https://naturalareasnyc.org/gratitude-giveaway-2025/">
                            <div class="media fancy-boxes medium">
                                <img width="1024" height="683"
                                    src="https://naturalareasnyc.org/wp-content/uploads/2025/10/IMG_2549-1024x683.jpg"
                                    alt="giveaway items" decoding="async" loading="lazy">
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
                    <!-- Add more slides as needed (10 total) -->
                </div>
            </div>
        </div>

        <a href="https://naturalareasnyc.org/understories/" class="btn primary" target="">View All</a>
    </div>
</section>
```

## CSS Styles

Create or add to `carousel.css`:

```css
/* ============================================
   CAROUSEL
   ============================================ */

.carousel {
  position: relative;
  margin: 2rem 0;
}

.slick-list {
  overflow: hidden;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  display: none;
  min-width: 100%;
}

.slide.slick-current {
  display: block;
}

.slick-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: var(--persian-coral);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
}

.slick-prev {
  left: -50px;
}

.slick-next {
  right: -50px;
}

.slick-arrow.slick-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slick-arrow:hover:not(.slick-disabled) {
  background: var(--persian-coral-hover);
}
```

## Additional Section 6 Styles

Add to `styles.css`:

```css
/* ============================================
   SECTIONS
   ============================================ */

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
}

#section-6 .heading-5 {
  line-height: 1.2em;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

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

/* ============================================
   UTILITY CLASSES
   ============================================ */

.pill,
.content-styles h4:not([class]) {
  background: var(--black);
  border-radius: 24px;
  color: var(--white);
  display: inline-block;
  font-size: calc(9rem / 16);
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: calc(15 / 9);
  padding: 6px 16px;
  text-align: center;
  text-transform: uppercase;
}

.pill.green {
  background: var(--green);
  color: var(--soil-green);
}

.pill.small {
  border-radius: 40px;
  line-height: calc(16 / 9);
  padding: 3px 12px;
}
```

## Key Concepts

### 1. Carousel Structure
- `.slick-list` - container that hides overflow
- `.slick-track` - container that holds all slides
- `.slide` - individual slide items
- Slides positioned absolutely or hidden initially

### 2. Display Control
- `display: none` hides inactive slides
- `display: block` shows active slide
- JavaScript will toggle these classes

### 3. Button Positioning
- `position: absolute` positions buttons relative to carousel
- `left: -50px` and `right: -50px` place buttons outside carousel
- `top: 50%` and `transform: translateY(-50%)` centers vertically

### 4. Disabled State
- `.slick-disabled` class indicates inactive button
- Reduces opacity and changes cursor
- Applied to "Previous" on first slide

### 5. Pill Badges
- Rounded label badges for categories
- Green variant for special categories
- Small variant for smaller badges

## Testing Checklist

- [ ] Section displays with background image
- [ ] Heading "Understories" is visible
- [ ] Carousel structure is in place
- [ ] Navigation buttons are visible (though not functional yet)
- [ ] First slide displays correctly
- [ ] Card styling matches other sections
- [ ] Pill badges display correctly
- [ ] "View All" button is visible

## Important Notes

- **JavaScript not yet implemented** - Navigation buttons won't work until Task 8
- Only the first slide will be visible until JavaScript is added
- This task focuses on structure and styling only

## Next Steps

After completing this task, move on to Task 8: Implement JavaScript Carousel.

