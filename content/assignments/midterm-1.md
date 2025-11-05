---
title: "1. Hero Section"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

**Folder:** `01_hero/`  
**Files:** `index.html`, `hero.css`

**Screenshot of Solution:**

<img src="/fall2025/images/midterm-project/hero.png" class="screenshot-lg" />

## Overview

Much of the hero section code is already given to you in the [style guide](/fall2025/downloads/projects/assignment/style-guide-demo.html) and in `utility-classes.css`. Your job is to integrate and link this code together.

## HTML (`index.html`)

**Refer to the Style Guide:** Navigate to the [Style Guide Demo](/fall2025/downloads/projects/assignment/style-guide-demo.html) and look for the **Hero Section Pattern** in the "Hero Section and Cards" area. Copy the HTML structure and paste it inside your `<main></main>` tag.

Then, modify the text as follows:
- `h1` tag: "Healthy, resilient natural areas for all"
- `p` tag: "We champion and protect New York City's 20,000 acres of forests and wetlands to create a sustainable future here and across the nation."

## CSS (`hero.css`)

Attach the stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="hero.css">
```

Then add the following styles to `hero.css`:

```css
.hero {
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero h1 {
  margin-top: 150px;
}

@media screen and (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}
```

[← Back to Midterm Project Index](./midterm)

