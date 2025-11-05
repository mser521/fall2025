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

## Overview

The card HTML structure is already provided in the [style guide](/fall2025/downloads/projects/assignment/style-guide-demo.html). Your job is to:
1. Reference the style guide for the card HTML structure
2. Create a section with heading and 4 cards
3. Add CSS for the section layout and styling

## HTML (`index.html`)

Start with this HTML structure, which you will paste inside the `<main></main>` tag:

```html
<!-- Section 2 (What We Do) -->
<section id="section-2" class="panel">
    <img id="geese" width="630" height="97" src="../images/goose.png" alt="Geese flying">

    <h2 class="heading-1">What we do</h2>

    <div class="grid">
        <!-- TODO: Add 4 cards here using the pattern from style guide -->
    </div>
</section>
```

**Your task:** Refer to the [Style Guide Demo](/fall2025/downloads/projects/assignment/style-guide-demo.html) and look for the **Card** pattern in the "Hero Section and Cards" area. Copy that HTML structure and create 4 cards with the following content:

1. **Train** - Link: `https://naturalareasnyc.org/internships/`, Image: `../images/card-intern.jpg`, Alt: "Intern waters planters with a hose inside greenhouse", Heading: `<span>Train</span> the next generation`, Text: "Our CUNY and high school internship programs provide STEM students with the training to succeed in the environmental workforce.", Accessibility: "Internships"

2. **Conduct** - Link: `https://naturalareasnyc.org/research/`, Image: `../images/card-staff.jpg`, Alt: "Three staff members walk one by one into a forest, NAC logos are visible on back of shirts", Heading: `<span>Conduct</span> applied research`, Text: "We study urban natural areas and develop resources that demonstrate their value.", Accessibility: "Innovative Research"

3. **Connect** - Link: `https://naturalareasnyc.org/connect-nyc-to-nature/`, Image: `../images/card-program.jpg`, Alt: "Two volunteers smiling wearing safety gloves, one holds a branch", Heading: `<span>Connect</span> New Yorkers to nature`, Text: "We host tours and volunteer events in local natural areas and work to improve NYC's network of trails.", Accessibility: "Connect New Yorkers to Nature"

4. **Advocate** - Link: `https://naturalareasnyc.org/coalition-advocacy/`, Image: `../images/card-advocacy.jpg`, Alt: "Large group of protestors holding Play Fair signs stand on steps of NYC city hall", Heading: `<span>Advocate</span> for natural areas`, Text: "We make our voices heard by championing forests and wetlands with elected officials.", Accessibility: "Coalition Advocacy"

## CSS (`section2.css`)

Attach the stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="section2.css">
```

Start with this CSS:

```css
#section-2 {
  background-image: url(../images/section-2-bkg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 400px;
}

#section-2 .heading-1 {
  text-align: center;
  padding-top: 50px;
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

/* TODO: Add responsive CSS here */
```

**Your tasks:**
1. **Add responsive CSS**: Add a media query for `max-width: 1024px` that:
   - Changes grid to single column (`grid-template-columns: 1fr`)
   - Adjusts gap to `1.5rem`
   - Adjusts section padding-bottom to `200px`
   - Adds margin-top of `50px` to the section
   - Adjusts heading font-size to `2.5rem` and padding-top to `30px`
   - Adjusts geese image positioning (`right: 10px`, `top: 10px`) and size (`width: 300px`, `height: auto`)

## Key Takeaways

1. **Style Guide Reference**: The card structure with fancy-boxes is documented in the style guide - use it as your reference!
2. **Background Images**: Use `background-image` with `background-size: contain` to display decorative backgrounds
3. **Absolute Positioning**: Position decorative elements like the geese image absolutely within a relative parent
4. **CSS Grid**: Use `grid-template-columns: repeat(2, 1fr)` for a 2-column grid layout
5. **Responsive Design**: Stack the grid vertically on smaller screens using media queries

[← Back to Midterm Project Index](./midterm)
