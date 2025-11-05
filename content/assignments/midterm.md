---
title: "Midterm Project: Building a Multi-Section Website"
date: "2025-11-04"
due_date: "2025-11-20"
type: "midterm project"
draft: 1
---

<style>
    ol li {
        margin: 0;
        margin-bottom: 5px;
    }
</style>

This project consists of 8 exercises, each focused on implementing a specific section of the <a href="https://naturalareasnyc.org" target="_blank">Natural Areas Conservancy</a> website. 


## Setup Instructions

<a href="/fall2025/downloads/projects/midterm.zip" class="nu-button">Download Midterm Starter Files<i class="fas fa-download"></i></a>

Download the `midterm.zip` file, unzip it and move the unzipped `midterm` folder into the `mser521` folder (see diagram below).

```
mser521
    ├── intro-html
    ├── lab02
    ├── lab03
    ├── lab04
    ├── lab05
    └── midterm
        ...
```

Within the `midterm` folder, each exercise folder (01_hero, 02_nav, etc.) contains:
1. An `index.html` file (start with basic HTML structure)
1. A corresponding CSS file (hero.css, nav.css, etc.)

All exercises should also link to `../utility-classes.css` for base styles, which you **will not edit**

## Before You Begin
Before you begin, please read [How to Use the Style Guide](./midterm-0) carefully. Then, when you're done, complete the exercises.

## Exercises

1. [Hero Section](./midterm-1)
1. [ Navigation](./midterm-2)
1. [Video Introduction](./midterm-3)
1. [What We Do](./midterm-4)
1. [Join Our Efforts](./midterm-5)
1. [The NYC Nature Map](./midterm-6)
1. [Forests in Cities Network](./midterm-7)
1. [Carousel](./midterm-8)
1. [Putting Everything Together](./midterm-9)
1. [Scrolling Effects](./midterm-10)

## General Tips

1. **File Paths**: Always use relative paths (`../images/filename.jpg`, `../styles.css`)

2. **CSS Variables**: Use variables from `styles.css`:
   - Colors: `var(--black)`, `var(--white)`, `var(--persian-coral)`, etc.
   - Container: `var(--container-max-width)`, `var(--container-outer-padding)`

3. **Responsive Design**: Include mobile styles at `max-width: 768px` (and tablet at `1024px` if needed)

4. **CSS Classes**: Reuse utility classes from `styles.css` (`.btn`, `.heading-1`, `.grid`, `.card`, etc.) instead of redefining them

5. **Semantic HTML**: Use appropriate HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)

6. **Accessibility**: Include alt text for images, proper heading hierarchy, `aria-label` where needed

Good luck with your implementation!

