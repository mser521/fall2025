---
title: "3. Video Introduction"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

<img src="/fall2025/images/midterm-project/section1.png" class="screenshot-lg" />

**Folder:** `03_video_intro/`  
**Files:** `index.html`, `section1.css`

## Overview

Much of the section 1 code structure is already provided. Your job is to:
1. Implement the video label with play button and text
2. Add responsive CSS for mobile devices

## HTML (`index.html`)

The starter file already contains the HTML structure inside the `<main></main>` tag. Open `index.html` to see the section structure with a TODO comment for the video label.

**Your task:** Add the video label inside the `<a>` tag (where the TODO comment is). The video label should include:
- A `<span>` with class `video-label`
- Inside it, a `<span>` with classes `btn icon play large` for the play button
- A `<span>` with class `heading-4` containing the text "Watch Video"

In other words, it should look something like this:

```html
<span class="video-label">
    <span class="btn icon play large"></span>
    <span class="heading-4">Watch Video</span>
</span>
```

If you've made the above changes and nothing is showing up, don't worry: the content is just be hidden behind the video image. We will adjust this in the CSS.

## CSS (`section1.css`)

The starter file already contains the CSS structure. Open `section1.css` to see the existing styles with TODO comments for the video label and responsive CSS.

**Your tasks:**
1. **Style the video label**: Create a CSS class called `.video-label`. This class will position your label so that it is overlaid on top of the video to the bottom and left:
   - Use flexbox:

        ```css
        display: flex;
        align-items: center;
        gap: 20px;
        ```
   - To position the label above the video and on the bottom right:

        ```css
        position: absolute;
        bottom: 24px;
        left: 24px;
        z-index: 5;   /* so the container appears above the video */
        ```

> **Missing Play Button Image**: Phoebe S. pointed out that I forgot to include the play button in the `images` folder, so if you're not seeing a black triangle, please download <a href="/fall2025/downloads/projects/midterm/images/btn-play.svg" target="_blank">btn-play.svg</a> and save it in your `midterm/images` folder.

2. **Add responsive CSS**: Add a media query for screens with `max-width: 1024px` that:
   - Changes the grid to single column (`grid-template-columns: 1fr`)
   - Makes the media container full width (remove max-width, set to 100%)
   - Removes the top and left margins from the media container
   - Adjusts the content-styles padding to `40px 30px`

    Start with this media query stub (one example is already implemented):

    ```css
    @media screen and (max-width: 1024px) {
        #section-1 {
            grid-template-columns: 1fr;
        }
        /* TODO: Add the remaining responsive styles here */
    }
    ```


[← Back to Midterm Project Index](./midterm)
