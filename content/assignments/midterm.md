---
title: "Midterm Project: Building a Multi-Section Website"
date: "2025-11-04"
due_date: "2025-11-25"
type: "midterm project"
draft: 0
---

<style>
    ol li {
        margin: 0;
        margin-bottom: 5px;
    }

    table {
        width: auto;
    }
    th, td {
        min-width: auto;
    }
</style>

For the midterm project, in lieu of an exam, you will go through the process of creating a professional-looking website. Rather than building everything from scratch, you'll work with starter files and a comprehensive style guide that provides HTML patterns and utility classes. This project consists of 10 exercises, each focused on implementing a specific section of the <a href="https://naturalareasnyc.org" target="_blank">Natural Areas Conservancy</a> website. You'll build each section incrementally, learning to apply CSS Grid, Flexbox, responsive design, and JavaScript interactions, while following established design patterns and best practices.

I am expecting that this assignment will take you around 8-10 hours to complete (+ or -). Given this, my recommendation is that you complete this project in several sittings versus saving it all for one day.


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

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Exercise</th>
      <th>Time Estimate</th>
      <th>Walkthrough</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><a href="./midterm-1">Hero Section</a></td>
      <td>1/2 hour</td>
      <td><a href="https://drive.google.com/file/d/1kVdFAd_F19gia_FIwZ84wzccNYA91uHU/view?usp=drive_link" target="_blank">🎥 Video</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td><a href="./midterm-2">Navigation</a></td>
      <td>1/2 hour</td>
      <td>
      <a href="https://drive.google.com/file/d/1YEHOd2z0EENhKHAQMb5gTXAXoFhsag4k/view?usp=drive_link" target="_blank">🎥 Video</a>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td><a href="./midterm-3">Video Introduction</a></td>
      <td>1/2 hour</td>
      <td><a href="https://drive.google.com/file/d/12EtXXW679wWjAWS0pNopgo5oCkw0n_dD/view?usp=drive_link" target="_blank">🎥 Video</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td><a href="./midterm-4">What We Do</a></td>
      <td>1 hour</td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td><a href="./midterm-5">Join Our Efforts</a></td>
      <td>1/2 hour</td>
      <td><a href="https://drive.google.com/file/d/1HhJPo01MXYShf4XHqB6P86j0um9_a1VA/view?usp=drive_link" target="_blank">🎥 Video</a></td>
    </tr>
    <tr>
      <td>6</td>
      <td><a href="./midterm-6">The NYC Nature Map</a></td>
      <td>1/2 hour</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td><a href="./midterm-7">Forests in Cities Network</a></td>
      <td>1 hour</td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td><a href="./midterm-8">Carousel</a></td>
      <td>1.5 hours</td>
      <td></td>
    </tr>
    <tr>
      <td>9</td>
      <td><a href="./midterm-9">Putting Everything Together</a></td>
      <td>1.5 hours</td>
      <td></td>
    </tr>
    <tr>
      <td>10</td>
      <td><a href="./midterm-10">Scrolling Effects</a></td>
      <td>1.5 hours</td>
      <td><a href="https://drive.google.com/file/d/1VIgc-kfew6vuizJxbaWfZ2dck2DuIOnT/view?usp=drive_link" target="_blank">🎥 Video</a></td>
    </tr>
  </tbody>
</table>

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

## What to Submit
Please make sure that you have completed all 10 exercises.

When you're done, please create a link from your homepage to the `index.html` page at the root of your `midterm` folder (see <a href="https://vanwars.github.io/mser521" target="_blank">Sarah's homepage</a> for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.

