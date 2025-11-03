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

## HTML Structure (`index.html`)

Create a two-column section with video thumbnail on left and content on right:

```html
<section id="section-1" class="panel">
    <div>
        <div class="media">
            <a href="https://www.youtube.com/watch?v=dn75qhZWbh4">
                <div class="cover-image">
                    <img src="../images/video-thumbnail.png" alt="">
                </div>
                <video muted autoplay loop playsinline>
                    <source src="https://www.youtube.com/watch?v=dn75qhZWbh4" type="video/mp4">
                    Sorry, your browser doesn't support embedded videos.
                </video>
                <span class="play-button">
                    <span class="btn icon large">
                        <svg role="presentation" class="svg-inline--fa fa-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M384 256L0 32V480L384 256z"></path>
                        </svg>
                    </span>
                    Watch Video
                </span>
            </a>
        </div>
    </div>
    <article class="content-styles">
        <h2 class="eyebrow">Who are we?</h2>
        <h3 class="heading-4">The Natural Areas Conservancy strives to deepen the connection between people and nature in NYC by increasing access, providing education, and building the parks workforce. Through research, partnerships, and advocacy, we ensure that urban natural areas are healthy and thriving and that their benefits reach all New Yorkers.</h3>
    </article>
</section>
```

## CSS Solution (`section1.css`)

### Part 1: Base Layout

Start with the grid layout for two columns:

```css
/* Two-column grid layout */
#section-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  align-items: self-start;
}

/* Media container positioning */
#section-1 .media {
  max-width: 50vw;
  aspect-ratio: 5 / 4;
  margin-top: 80px;
  margin-left: 80px;
}

.media {
  position: relative;
}
```

### Part 2: Image Overlay

Style the cover image that sits on top of the video:

```css
/* Cover image positioned absolutely over video */
.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### Part 3: Play Button

Position the play button absolutely at bottom-left:

```css
.media .play-button {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;
  left: 24px;
  gap: 14px;
  font-size: calc(20rem / 16);
  font-weight: 700;
  line-height: calc(28 / 20);
  color: white;
  z-index: 2; /* Above cover image */
}

/* SVG icon styling */
.svg-inline--fa {
  display: inline-block;
  height: 1em;
  font-size: inherit;
  vertical-align: -0.125em;
  overflow: visible;
}

/* Large icon button */
.btn.icon.large {
  width: 64px;
  height: 64px;
  font-size: calc(22rem / 16);
}
```

### Part 4: Content Panel

Style the dark content panel on the right:

```css
/* Dark content panel */
.content-styles {
  background-color: #26281e;
  color: white;
  padding: 80px 140px;
  margin-left: -100px; /* Overlaps with left column */
}

/* Eyebrow text color */
#section-1 h2 {
  color: var(--matcha-green);
  margin-bottom: 10px;
}

/* Heading 4 styling */
.content-styles .heading-4 {
  font-size: 1.3rem;
  letter-spacing: 0.2px;
  line-height: calc(34 / 28);
}
```

### Part 5: Responsive Styles

Make it stack on mobile:

```css
@media screen and (max-width: 768px) {
  /* Single column on mobile */
  #section-1 {
    grid-template-columns: 1fr;
  }

  /* Adjust media positioning */
  #section-1 .media {
    max-width: 100%;
    margin-top: 0;
    margin-left: 0;
  }

  /* Adjust content panel */
  .content-styles {
    padding: 30px 20px;
    margin-left: 0;
  }

  /* Smaller play button on mobile */
  .media .play-button {
    font-size: calc(18rem / 16);
    bottom: 16px;
    left: 16px;
    gap: 10px;
  }

  .btn.icon.large {
    width: 48px;
    height: 48px;
    font-size: calc(18rem / 16);
  }
}
```

## Key Takeaways

1. **CSS Grid**: Use `grid-template-columns: 1fr 1fr` for equal two-column layout
2. **Aspect Ratios**: Use `aspect-ratio: 5 / 4` to maintain image proportions
3. **Absolute Positioning**: Position play button and cover image absolutely within relative parent
4. **Negative Margin**: Use `margin-left: -100px` to create overlap effect
5. **Z-index**: Use `z-index` to layer elements (play button above image)

[← Back to Midterm Project Index](./midterm)
