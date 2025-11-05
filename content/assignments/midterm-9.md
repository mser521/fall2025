---
title: "9. Integrating the Files"
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

<img src="/fall2025/images/midterm-project/section6.png" class="screenshot-lg" />

**Folder:** `09-combined/`  
**Files:** `index.html`, `styles.css`, `nav.js`, `carousel.js`

## Overview

In this  exercise, you'll combine all the sections you've built (Exercises 1-8) into a single, complete website. For each section, you'll copy the HTML, CSS, and JavaScript (if applicable) into the destination files.

**Your tasks:**
1. Copy HTML from each exercise into the `index.html`
2. Copy CSS from each exercise into the consolidated `styles.css`
3. Link JavaScript files (`nav.js` and `carousel.js`)
4. Test the complete website

Open `09-combined/index.html` and `09-combined/styles.css` - you'll see starter files with comments indicating where each section should go.

## Integration Steps

### 1. Navigation

**HTML:**
1. Open `02_nav/index.html`
2. Copy the `<nav class="navigation">` element and paste it into `09-combined/index.html` inside the `<header>` tag (replace the TODO comment)

**JavaScript:**
1. Uncomment the `<script src="nav.js" defer></script>` line in the `<head>` of `09-combined/index.html`

### 2. Hero Section

**HTML:**
1. Copy the hero section from `01_hero/index.html` into the `<main>` section where the "HERO SECTION" comment is

**CSS:**
1. Open `01_hero/hero.css`
2. Copy all CSS from that file and paste it into `09-combined/styles.css` in the "HERO SECTION" section.
3. Make sure that as you create your `09-combined/styles.css` stylesheet, all of the media queries are grouped at the bottom after all of the non-media rulesets.

### 3. Video Introduction

1. Copy `<section id="section-1">` from `03_video_intro/index.html` into `09-combined/index.html`
2. Copy all CSS from `03_video_intro/section1.css` into `09-combined/styles.css` (regular styles in "SECTION 1", media queries at bottom)

### 4. What We Do

1. Copy `<section id="section-2">` from `04_what_we_do/index.html` into `09-combined/index.html`
2. Copy all CSS from `04_what_we_do/section2.css` into `09-combined/styles.css` (regular styles in "SECTION 2 - WHAT WE DO", media queries at bottom)

### 5. Join Our Efforts

1. Copy `<section id="section-3">` from `05_join_our_efforts/index.html` into `09-combined/index.html`
2. Copy all CSS from `05_join_our_efforts/section3.css` into `09-combined/styles.css` (regular styles in "SECTION 3", media queries at bottom)

### 6. The NYC Nature Map

1. Copy `<section id="section-4">` from `06_data_visualizations/index.html` into `09-combined/index.html`
2. Copy all CSS from `06_data_visualizations/section4.css` into `09-combined/styles.css` (regular styles in "SECTION 4", media queries at bottom)

### 7. Forests in Cities Network

1. Copy `<section id="section-5">` from `07_forests_in_cities/index.html` into `09-combined/index.html`
2. Copy all CSS from `07_forests_in_cities/section5.css` into `09-combined/styles.css` (regular styles in "SECTION 5", media queries at bottom)

### 8. Carousel

1. Copy `<section id="section-6">` from `08_carousel/index.html` into `09-combined/index.html`
2. Uncomment `<script src="carousel.js" defer></script>` in the `<head>`
3. Copy all CSS from `08_carousel/section6.css` into `09-combined/styles.css` (regular styles in "SECTION 6", media queries at bottom)

## Important CSS Notes

- **Media Query Placement**: All media queries should be placed at the bottom of `styles.css`, in the "MEDIA QUERIES" section. This ensures proper CSS cascade order.
- **CSS Already in utility-classes.css**: Remember that many styles (like `.card`, `.btn`, `.grid`, etc.) are already in `utility-classes.css`, so you only need to copy section-specific styles.

## Testing Your Website

1. **Open `09-combined/index.html` in your browser**
2. **Check each section:**
   - Navigation should work (hamburger menu on mobile)
   - Hero section displays correctly
   - All sections appear in order
   - Images load properly
   - Buttons and links work
   - Carousel navigation works

3. **Test responsive design:**
   - Resize your browser window
   - Test on mobile viewport (DevTools)
   - Check that all sections stack/adapt properly on smaller screens



[← Back to Midterm Project Index](./midterm)
