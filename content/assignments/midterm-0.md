---
title: "How to Use the Style Guide"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

For this midterm project, you'll build a multi-section website by implementing 8 different exercises. Each exercise focuses on a specific section (hero, navigation, content sections, etc.). The good news: **you don't need to write any of the utility classes yourself!** They're already provided in `utility-classes.css`.

Your job is to:
1. **Write semantic HTML** with the correct structure
2. **Apply the right utility classes** from `utility-classes.css` to make your content look good
3. **Write section-specific CSS** (e.g., `hero.css`, `nav.css`) for positioning, backgrounds, and unique styling

**The best way to see all available classes is to open the interactive style guide:**

**[Style Guide Demo](/fall2025/downloads/project/assignment/style-guide-demo.html)**


## What's in `utility-classes.css`?

The `utility-classes.css` file contains everything you need to style your sections. It includes:

### 1. **CSS Variables** (Colors & Layout)
Use these throughout your CSS instead of hardcoding values:
- **Colors**: `var(--black)`, `var(--white)`, `var(--persian-coral)`, `var(--moss-green)`, `var(--green)`, `var(--ivory)`, etc.
- **Layout**: `var(--container-max-width)`, `var(--container-outer-padding)`

### 2. **Typography Classes**
Pre-styled text classes for consistent typography:
- `.heading-1` - Large section headings
- `.heading-4`, `.heading-5`, `.heading-6` - Various heading sizes
- `.mega` - Extra large hero text
- `.xlarge`, `.large`, `.small` - Body text sizes
- `.eyebrow` - Small labels above headings
- `.caption` - Small caption text

### 3. **Button Classes**
Ready-to-use button styles:
- `.btn.primary` - Main action buttons (coral background)
- `.btn.tertiary` - Text link buttons (with animated underline)
- `.btn.icon.arrow` - Circular arrow buttons for cards
- `.btn.icon.large` - Large icon buttons

### 4. **Layout Classes**
Classes for structuring your content:
- `.container` - Centers content with max-width
- `.grid` - CSS Grid container (you'll add your own `grid-template-columns`)
- `.card` - Card component with hover effects
- `.column` - Centered column layout
- `.media` - Image/video container with aspect ratio
- `.panel` - Section background (ivory background with padding)

### 5. **Utility Classes**
Small but useful classes:
- `.pill` - Badge/tag elements (with `.green` and `.small` modifiers)
- `.accessibility` - Screen reader text (visually hidden)
- `.fancy-boxes` - Decorative border effect for card images

## How to Use the Style Guide

### Visual Reference

**The best way to see all available classes is to open the interactive style guide:**

**[Style Guide Demo](/fall2025/downloads/project/assignment/style-guide-demo.html)**

This visual demo shows:
- What each class looks like when rendered
- Example HTML code for each class
- How to combine classes for common patterns

### Step-by-Step Process

When working on each exercise:

1. **Look at the screenshot** - See what the final result should look like
2. **Check the style guide** - Find classes that match the design:
   - Need a large heading? Use `.heading-1`
   - Need a button? Use `.btn.primary` or `.btn.tertiary`
   - Need a card layout? Use `.card` with `.media`
3. **Write your HTML** - Apply the appropriate classes:
   ```html
   <h2 class="heading-1">What We Do</h2>
   <a href="#" class="btn primary">Donate</a>
   <div class="container grid">
       <!-- Your content -->
   </div>
   ```
4. **Write section-specific CSS** - Only write CSS for things NOT covered by utility classes:
   - Positioning and layout (grid columns, flexbox)
   - Background images
   - Section-specific spacing
   - Hover effects unique to that section
   - Media queries

### Example: Combining Classes

Here's how you might combine utility classes to create a card:

```html
<a href="#" class="btn-container card">
    <div class="media fancy-boxes">
        <img src="../images/card.jpg" alt="">
    </div>
    <article>
        <h3 class="heading-5"><span>Train</span> the next generation</h3>
        <p class="small">Card description text.</p>
        <span class="btn icon arrow">
            <span class="accessibility">Card link</span>
        </span>
    </article>
</a>
```

This uses:
- `.btn-container` - Makes the whole card clickable
- `.card` - Adds card styling and hover shadow
- `.media.fancy-boxes` - Image container with decorative borders
- `.heading-5` - Card heading (with colored `<span>`)
- `.small` - Card description text
- `.btn.icon.arrow` - Circular arrow button
- `.accessibility` - Screen reader text

## Important Rules

1. **Don't redefine utility classes** - If `utility-classes.css` has `.btn.primary`, don't write your own `.btn.primary` in your section CSS file. Just use it!

2. **Use CSS variables** - Instead of `color: #ff9d79;`, use `color: var(--persian-coral);`

3. **Relative paths for images** - Always use `../images/filename.jpg` (not `images/filename.jpg`)

4. **Link to utility-classes.css** - Make sure your `index.html` includes:
   ```html
   <link rel="stylesheet" href="../utility-classes.css">
   ```

5. **Check the visual demo** - When in doubt, open the style guide demo to see how classes are used

## Quick Reference

| Need... | Use this class |
|---------|---------------|
| Large section heading | `.heading-1` |
| Card/article heading | `.heading-4` |
| Card heading with colored word | `.heading-5` with `<span>` inside |
| Large hero text | `.mega` |
| Large paragraph | `.xlarge` or `.large` |
| Small body text | `.small` |
| Primary button | `.btn.primary` |
| Text link button | `.btn.tertiary` |
| Circular arrow button | `.btn.icon.arrow` |
| Centered container | `.container` |
| Grid layout | `.grid` (add your own `grid-template-columns`) |
| Card component | `.card` |
| Image container | `.media` |
| Badge/tag | `.pill` (add `.green` or `.small` as needed) |

## Next Steps

1. Start with **[Exercise 1: Hero Section](./midterm-1)** - It's provided as a complete solution so you can see the pattern
2. Use the **[Style Guide Demo](/fall2025/downloads/project/assignment/style-guide-demo.html)** as your visual reference
3. Follow the pattern from Exercise 1 for Exercises 2-8
