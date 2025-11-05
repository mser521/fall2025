---
title: "3. Video Introduction"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 3: Section 1 (Video Introduction)

<img src="/fall2025/images/midterm-project/section1.png" class="screenshot-lg" />

**Folder:** `03_section1/`  
**Files:** `index.html`, `section1.css`

## Overview

Much of the section 1 code structure is already provided. Your job is to:
1. Implement the video label with play button and text
2. Add responsive CSS for mobile devices

## HTML (`index.html`)

Start with this HTML structure, which you will paste inside of `the <main></main>` tag:

```html
<!-- Section 1 (Video Introduction) -->
<section id="section-1" class="panel">
    <div>
        <div class="media">
            <a href="https://www.youtube.com/watch?v=dn75qhZWbh4">
                <div class="cover-image">
                    <img width="1024" height="573" src="../images/video-thumbnail.png" alt="">
                </div>
                <!-- TODO: Add video label here with play button and "Watch Video" text -->
            </a>
        </div>
    </div>
    <article class="content-styles">
        <h2 class="eyebrow">Who are we?</h2>
        <h3 class="heading-4">The Natural Areas Conservancy
            strives to deepen the connection between people and
            nature in NYC by increasing access, providing education, and building the parks workforce. Through
            research, partnerships, and advocacy, we ensure that urban natural areas are healthy and thriving
            and that their benefits reach all New Yorkers.
        </h3>
    </article>
</section>
```

**Your task:** Add the video label inside the `<a>` tag (where the TODO comment is). The video label should include:
- A `<span>` with class `video-label`
- Inside it, a `<span>` with classes `btn icon play large` for the play button
- A `<span>` with class `heading-4` containing the text "Watch Video"

## CSS (`section1.css`)

Start with this CSS:

```css
#section-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  align-items: self-start;
}

#section-1 .media {
  max-width: 40vw;
  aspect-ratio: 5 / 4;
  margin-top: 80px;
  margin-left: 80px;
}

#section-1 a,
#section-1 a:visited {
  text-decoration: none;
  color: white;
}

#section-1 h2 {
  color: var(--matcha-green);
  margin-bottom: 10px;
}

.content-styles {
  padding: 80px 80px;
}

/* TODO: Add video-label styles here */
```

**Your tasks:**
1. **Style the video label**: Add CSS for `.video-label` to position it absolutely at the bottom-left of the media container. It should:
   - Use flexbox with `display: flex` and `align-items: center`
   - Have a gap of 20px between elements
   - Be positioned absolutely at `bottom: 24px` and `left: 24px`
   - Have `z-index: 5` to appear above the image
   - Set text color to white

2. **Add responsive CSS**: Add a media query for screens with `max-width: 1024px` that:
   - Changes the grid to single column (`grid-template-columns: 1fr`)
   - Makes the media container full width (remove max-width, set to 100%)
   - Removes the top and left margins from the media container
   - Adjusts the content-styles padding to `40px 30px`

## Key Takeaways

1. **Absolute Positioning**: Use `position: absolute` to overlay the video label on the image
2. **Flexbox**: Use flexbox to align the play button and text horizontally
3. **Responsive Design**: Use media queries to stack the layout vertically on smaller screens
4. **Z-index**: Use `z-index` to ensure the video label appears above the image

[← Back to Midterm Project Index](./midterm)
