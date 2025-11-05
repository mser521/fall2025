---
title: "2. Navigation"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 2: Navigation
**Folder:** `02_nav/`  
**Files:** `index.html`, `nav.css`, `nav.js`

**Screenshot of Solution:**

<img src="/fall2025/images/midterm-project/nav-desktop.png" class="screenshot-lg" />

<img src="/fall2025/images/midterm-project/nav-mobile.png" class="screenshot-2xs" />

## Overview

Much of the navigation code is already given to you in the [style guide](/fall2025/downloads/projects/assignment/style-guide-demo.html) and in `utility-classes.css`. Your job is to integrate and link this code together.

## HTML (`index.html`)

**Refer to the Style Guide:** Navigate to the [Style Guide Demo](/fall2025/downloads/projects/assignment/style-guide-demo.html) and look for the **Navigation Pattern** section in the "Hero Section and Cards" area. Copy the HTML structure and paste it inside your `<header></header>` tag.

Then, adjust the link text and hyperlinks to match the screenshot above:
- Left nav links: "What We Do", "About Us", "Events"
- Right nav links: "Get Involved", and a "Donate" button

## CSS (`nav.css`)

The navigation CSS styles are already included in `utility-classes.css`. Make sure to link this file in your HTML:

```html
<link rel="stylesheet" href="../utility-classes.css">
<link rel="stylesheet" href="nav.css">
```

You may need to add minimal styles to `nav.css` if you need to override any styles specific to this exercise (like `body` background color), but the core navigation styles are in the utility classes.

## JavaScript (`nav.js`)

To attach the JavaScript, paste the following `<script>` tag within the `<head></head>` of your HTML document:

```html
<script src="nav.js" defer></script>
```

**How it works:**
1. Click hamburger → `toggleMenu()` runs
2. Toggles `active` class on `<nav>` element
3. CSS rule `nav.active .nav-links` automatically shows all nav links (cascading)
4. Click outside → body click listener closes menu

**Key JavaScript concepts:**
- `classList.toggle()` - adds class if missing, removes if present
- `ev.stopPropagation()` - prevents event from bubbling to parent
- `ev.target.closest()` - checks if click is inside a specific element
- No loops - we let CSS cascading do the work!

[← Back to Midterm Project Index](./midterm)

