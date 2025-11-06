---
title: "7. Forests in Cities Network"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---


<img src="/fall2025/images/midterm-project/section5.png" class="screenshot-lg" />

**Folder:** `07_forests_in_cities/`  
**Files:** `index.html`, `section5.css`

## Overview

The text-only card HTML structure is already provided in the [style guide](/fall2025/downloads/projects/midterm/style-guide/index.html). Your job is to:
1. Reference the style guide for the text-only card HTML structure
2. Create 2 text-only cards using that pattern
3. Add CSS for the section layout, background image, and responsive design

## HTML (`index.html`)

Start with this HTML structure, which you will paste inside the `<main></main>` tag:

```html
<!-- Section 5 (Forests in Cities Network) -->
<section id="section-5">
    <div class="container">
        <h2 class="heading-1 mega">Forests in <br>Cities network</h2>
        <div class="cards">
            <!-- TODO: Add 2 text-only cards here using the pattern from style guide -->
        </div>
    </div>
</section>
```

**Your task:** Refer to the [Style Guide Demo](/fall2025/downloads/projects/midterm/style-guide/index.html) and look for the **Text-Only Card Pattern (Section 5 Style)** in the "Hero Section and Cards" area. Copy that HTML structure and create 2 cards with the following content:

1. **What is Forests in Cities?** - Link: `https://naturalareasnyc.org/forests-in-cities-network/`, Heading: "What is Forests in Cities?", Text: "We created the FiC network in 2019 to advance healthy forested natural areas across America. By nurturing a network of interdisciplinary experts from 26 cities, together we advance urban forest science and practice while advocating for increased resources and support for our cities' forests.", Accessibility text: "FiC"

2. **Explore the Resource Library** - Link: `https://fic.naturalareasnyc.org/`, Heading: "Explore the Resource Library", Text: "Everything you need to know about forested natural areas—all in one place. Find peer-reviewed research, forest management plans, land and project assessment protocols, and more. We curate and collect new resources from FiC members weekly.", Accessibility text: "Explore the Resource Library"

## CSS (`section5.css`)

Attach the stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="section5.css">
```

Start with this CSS:

```css
#section-5 {
  background-image: url(../images/section-5-bkg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left bottom;
  padding-top: 20vw;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.heading-1.mega {
  color: white;
  font-size: 4rem;
}

#section-5 .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: flex-end;
  border-bottom: 1px solid white;
}

.cards {
  display: grid;
  gap: 50px;
  padding-bottom: 50px;
}
```

**Your tasks:**
1. **Add responsive CSS**: Add media queries for `max-width: 1024px` and `max-width: 768px` that:
   - Change heading color to `black` and adjust font size (3rem for 1024px, 2rem for 768px)
   - Remove background image (`background: none`) and adjust padding-top to `16vw`
   - Change container to single column (`grid-template-columns: 1fr`)
   - Adjust container gap and padding for smaller screens
   - Adjust card spacing (`gap` for `.cards`)
   - Adjust card article padding and typography sizes for smaller screens

    ```css
    /* TODO: Add responsive CSS here */
    @media screen and (max-width: 1024px) {
    
    /* TODO: Add the remaining responsive styles for 1024px and 768px here */
    }
    ```

[← Back to Midterm Project Index](./midterm)
