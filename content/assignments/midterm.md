---
title: "Midterm Project: Building a Multi-Section Website"
date: "2025-11-04"
due_date: "2025-11-20"
type: "midterm project"
draft: 1
---

This project consists of 8 exercises, each focused on implementing a specific section of the <a href="https://naturalareasnyc.org" target="_blank">Natural Areas Conservancy</a> website (<a href="https://naturalareasnyc.org" target="_blank">https://naturalareasnyc.org</a>). Each exercise is in its own folder with a blank `index.html` and corresponding CSS file. The shared `styles.css` file contains all the base styles, CSS variables, and utility classes you'll need.

**Note:** Screenshots for each exercise show what the final result should look like.

## Setup Instructions

1. Navigate to the `public/downloads/project/assignment/` folder
2. Each exercise folder (01_hero, 02_nav, etc.) contains:
   - An `index.html` file (start with basic HTML structure)
   - A corresponding CSS file (hero.css, nav.css, etc.)
3. All exercises should link to `../styles.css` for base styles
4. Use relative paths for images: `../images/filename.jpg`

## Before You Begin
Before you begin, please read [How to Use the Style Guide](./midterm-0) carefully. Then, when you're done, complete the exercises.

## Exercises

- [Exercise 1: Hero Section](./midterm-1)
- [Exercise 2: Navigation](./midterm-2)
- [Exercise 3: Section 1 (Video Introduction)](./midterm-3)
- [Exercise 4: Section 2 (What We Do)](./midterm-4)
- [Exercise 5: Section 3 (Join Our Efforts)](./midterm-5)
- [Exercise 6: Section 4 (The NYC Nature Map)](./midterm-6)
- [Exercise 7: Section 5 (Forests in Cities Network)](./midterm-7)
- [Exercise 8: Section 6 (Carousel)](./midterm-8)

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

