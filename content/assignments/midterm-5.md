---
title: "5. Join Our Efforts"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

<img src="/fall2025/images/midterm-project/section3.png" class="screenshot-lg" />

**Folder:** `05_section3/`  
**Files:** `index.html`, `section3.css`

## Overview

The icon card HTML structure is already provided in the [style guide](/fall2025/downloads/projects/assignment/style-guide-demo.html). Your job is to:
1. Reference the style guide for the icon card HTML structure
2. Create 4 icon cards using that pattern
3. Add CSS for the section layout, background image, and responsive design

## HTML (`index.html`)

Start with this HTML structure, which you will paste inside the `<main></main>` tag:

```html
<!-- Section 3 (Join Our Efforts) -->
<section id="section-3">
    <div class="container">
        <h2 class="heading-1">Join our efforts</h2>

        <div class="grid">
            <!-- TODO: Add 4 icon cards here using the pattern from style guide -->
        </div>
    </div>
</section>
```

**Your task:** Refer to the [Style Guide Demo](/fall2025/downloads/projects/assignment/style-guide-demo.html) and look for the **Icon Card Pattern (Section 3 Style)** in the "Hero Section and Cards" area. Copy that HTML structure and create 4 cards with the following content:

1. **Donate** - Link: `https://naturalareasnyc.org/donate/`, Icon: `../images/icon-donate.svg`, Text: "Give back to natural areas. Your gift will go toward preserving our vital forests and wetlands.", Button: "Donate now"

2. **Volunteer** - Link: `https://naturalareasnyc.org/super-steward-program/`, Icon: `../images/icon-volunteer.svg`, Text: "Bring new vibrancy to your community by becoming a Super Steward Pathkeeper.", Button: "See opportunities"

3. **Partner** - Link: `https://naturalareasnyc.org/corporate-partnerships/`, Icon: `../images/icon-partner.svg`, Text: "Engage with our mission through corporate sponsorship and volunteering.", Button: "Learn more"

4. **Get outside** - Link: `/events`, Icon: `../images/icon-get-outside.svg`, Text: "Tour NYC parks, learn about local wildlife, or get your hands dirty on a stewardship day.", Button: "Browse events"

## CSS (`section3.css`)

Attach the stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="section3.css">
```

Start with this CSS:

```css
#section-3 {
  background-image: url(../images/section-3-bkg.png);
  background: no-repeat center top / 100% auto;
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

/* TODO: Add responsive CSS here */
```

**Your tasks:**
1. **Add responsive CSS**: Add a media query for `max-width: 1024px` that:
   - Adjusts padding for the section to `60px 0`
   - Changes container to single column (`grid-template-columns: 1fr`)
   - Changes grid to single column (`grid-template-columns: 1fr`)
   - Adjusts row-gap to `3rem`
   - Sets icon height to `48px`

## Key Takeaways

1. **Style Guide Reference**: The icon card structure is documented in the style guide - use it as your reference!
2. **CSS Grid Nesting**: Use grid inside grid - container has 2 columns (heading + cards), inner grid has 2x2 cards
3. **Row Gap**: Use `row-gap` to add extra space between rows in the grid
4. **Icon Sizing**: Control icon size with `height` and `width: auto` to maintain aspect ratio
5. **Responsive Design**: Stack the layout vertically on smaller screens using media queries

[← Back to Midterm Project Index](./midterm)
