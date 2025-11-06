---
title: "10. Scrolling Effects"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

<style>
    ol li {
        margin: 0;
        margin-bottom: 5px;
    }
</style>

**Folder:** `final/`  
**Files:**  `scroll-effects.css`, `scroll-effects.js` + all files from `09-combined`

## Overview

In this final exercise, you'll add smooth scrolling animations to your integrated website. These animations will make elements fade in, slide, and scale as users scroll down the page, creating a more engaging and polished user experience.

**Your tasks:**
1. Copy your completed files from `09-combined/` into the `final/` folder
2. Link the scrolling effects CSS and JavaScript files
3. Add scroll animation attributes to elements throughout your page
4. Experiment with different animation types and delays

## Step 1: Copy Files from 09-combined

First, copy all your files from `09-combined/` into the `final/` folder:

1. Copy `index.html`, `styles.css`, `nav.js`, and `carousel.js` from `09-combined/` to `final/`

The `final/` folder already contains `scroll-effects.css` and `scroll-effects.js` - you don't need to copy these.

## Step 2: Link Scrolling Effects Files

Open `final/index.html` and add links to scrolling effects files to your `<head>` section:

```html
<head>
    <!-- ... existing links ... -->
    
    <!-- Link to scrolling effects -->
    <link rel="stylesheet" href="scroll-effects.css">
    <script src="scroll-effects.js" defer></script>
</head>
```

**Important:** Make sure `scroll-effects.css` is linked **after** your `styles.css` so it can override styles if needed. The `scroll-effects.js` should be loaded with `defer` like your other JavaScript files.

## Step 3: Understanding Scroll Animation Classes

The scrolling effects system uses HTML `data` attributes to control animations. Here's how it works:

### How It Works

1. **JavaScript watches for elements** with `data-scroll` attributes as you scroll
2. **When an element enters the viewport**, JavaScript adds the `scroll-in` class
3. **CSS transitions** animate the element from its hidden state to visible

### Available Animation Types

| Attribute | Effect | Initial State | Final State |
|-----------|--------|---------------|-------------|
| `data-scroll="fade-in"` | Fades in | Invisible (`opacity: 0`) | Visible (`opacity: 1`) |
| `data-scroll="slide-up"` | Slides up | Below, invisible | In position, visible |
| `data-scroll="slide-down"` | Slides down | Above, invisible | In position, visible |
| `data-scroll="slide-left"` | Slides from right | Right, invisible | In position, visible |
| `data-scroll="slide-right"` | Slides from left | Left, invisible | In position, visible |
| `data-scroll="scale"` | Scales up | Small, invisible (`scale: 0.8`) | Normal size, visible |
| `data-parallax="0.3"` | Parallax effect | Moves slower than scroll | Creates depth effect |

### Stagger Delays

Use `data-scroll-delay` to create sequential animations (stagger effect):

- `data-scroll-delay="100"` - 0.1 second delay
- `data-scroll-delay="200"` - 0.2 second delay
- `data-scroll-delay="300"` - 0.3 second delay
- `data-scroll-delay="400"` - 0.4 second delay
- `data-scroll-delay="500"` - 0.5 second delay

## Step 4: Applying Scroll Animations

### Example 1: Fade In a Heading

Add a simple fade-in effect to a heading:

```html
<h2 class="heading-1" data-scroll="fade-in">Join our efforts</h2>
```

### Example 2: Slide Up with Delay

Make a card slide up from below with a delay:

```html
<a class="btn-container card" href="..." data-scroll="slide-up" data-scroll-delay="100">
    <!-- card content -->
</a>
```

### Example 3: Staggered Cards

Create a cascading effect where cards appear one after another:

```html
<!-- First card - no delay -->
<a class="btn-container card" href="..." data-scroll="slide-up">
    <!-- card content -->
</a>

<!-- Second card - 0.1s delay -->
<a class="btn-container card" href="..." data-scroll="slide-up" data-scroll-delay="100">
    <!-- card content -->
</a>

<!-- Third card - 0.2s delay -->
<a class="btn-container card" href="..." data-scroll="slide-up" data-scroll-delay="200">
    <!-- card content -->
</a>

<!-- Fourth card - 0.3s delay -->
<a class="btn-container card" href="..." data-scroll="slide-up" data-scroll-delay="300">
    <!-- card content -->
</a>
```

### Example 4: Parallax Effect

Add a parallax effect to an image (moves slower than scroll):

```html
<img id="geese" data-parallax="4.0" src="../images/goose.png" alt="Geese flying">
```

The number (`4.0`) controls the speed - lower numbers = slower movement.

### Example 5: Slide from Different Directions

Create visual interest by having elements slide from different directions:

```html
<!-- Slides from right -->
<div class="column" data-scroll="slide-right">
    <!-- content -->
</div>

<!-- Slides from left -->
<div class="column" data-scroll="slide-left">
    <!-- content -->
</div>
```

## Step 5: Practice Exercises

Now try adding scroll animations to your own website. Here are some exercises:

### Exercise 1: Animate Section Headings

Add `data-scroll="fade-in"` to all your main section headings (`<h2>` elements). Test by scrolling and see each heading fade in as it enters the viewport.

### Exercise 2: Animate Cards in Section 2

Add staggered `slide-up` animations to the four cards in Section 2 (What We Do):
- First card: `data-scroll="slide-up"` (no delay)
- Second card: `data-scroll="slide-up" data-scroll-delay="100"`
- Third card: `data-scroll="slide-up" data-scroll-delay="200"`
- Fourth card: `data-scroll="slide-up" data-scroll-delay="300"`

### Exercise 3: Scale Animation for Icon Cards

Add `scale` animations to the icon cards in Section 3 (Join Our Efforts):
- Apply `data-scroll="scale"` to each icon card
- Add staggered delays (0, 100, 200, 300ms) to create a cascading effect

### Exercise 4: Slide Directions for Columns

In Section 4 (The NYC Nature Map), make the left column slide from the right and the right column slide from the left:
- Left column: `data-scroll="slide-right"`
- Right column: `data-scroll="slide-left"`

### Exercise 5: Parallax Effect

Add a parallax effect to the geese image in Section 2:
- Add `data-parallax="0.3"` to the `<img id="geese">` element
- **What to look for**: As you scroll down through Section 2, the geese image should move upward more slowly than the rest of the content, creating a depth effect
- **Why it might be subtle**: The value `0.3` means it moves at 30% speed - experiment with higher values (try 0.5, 0.7) to make the effect more noticeable
- **Tip**: The parallax effect is most visible when you scroll slowly past the element - try scrolling slowly through Section 2 to see the geese "lag behind" the other content

### Exercise 6: Animate Video Section

In Section 1 (Video Introduction), add animations:
- Add `data-scroll="slide-up" data-scroll-delay="100"` to the div containing the video
- Add `data-scroll="fade-in"` to the "Who are we?" heading
- Add `data-scroll="fade-in" data-scroll-delay="200"` to the description paragraph

### Exercise 7: Experiment with Different Effects

Try mixing different animation types:
- Use `fade-in` for text-heavy sections
- Use `slide-up` for cards and images
- Use `scale` for icon cards
- Use directional slides (`slide-left`, `slide-right`) for side-by-side content

## Key Takeaways

1. **Scroll animations enhance UX**: They draw attention to content as users scroll and make the site feel more polished
2. **Use data attributes**: The `data-scroll` attribute tells JavaScript which animation to apply
3. **Stagger delays create rhythm**: Using `data-scroll-delay` creates a cascading effect that's more visually appealing
4. **Animation choice matters**: Different animations work better for different content types (fade for text, slide for cards, scale for icons)
5. **Parallax adds depth**: The parallax effect creates a sense of depth and movement
6. **Performance**: The Intersection Observer API efficiently watches for elements entering the viewport without constantly checking scroll position

## Testing Your Animations

1. **Scroll slowly** through your page to see each animation trigger
2. **Refresh the page** and scroll from the top to see all animations
3. **Check different screen sizes** - animations should work on all devices
4. **Test scroll speed** - animations should trigger smoothly regardless of scroll speed

[← Back to Midterm Project Index](./midterm)
