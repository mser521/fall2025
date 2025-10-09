---
title: "CSS Layouts: Flex, Grid, and Media Queries"
date: "2025-10-09"
type: "activity"
draft: 1
excluded: 1
---

Please download the exercise files (below).

<a href="/fall2025/downloads/css-layouts.zip" class="nu-button">Download Activity Files <i class="fas fa-download"></i></a>

Then, try to complete the following exercises.

## 1. Media Query Exercise
Media queries allow you to set CSS style rules based on the type of media and the device dimensions of the viewport. Typically, your stylesheet will need at least a few media query rules so that your website looks good on mobile devices. Example:

<img class="screenshot-sm" src="/fall2025/images/activities/css-layouts/syntax.png" />

Please open `00-media-query` and take a look at the files. When you're done, please add some CSS rules to create the following screens on Desktop and Mobile:

<img class="screenshot-xl" src="/fall2025/images/activities/css-layouts/mq.png" />

## 2. CSS Grid Exercise
CSS Grid allows you to layout your page in terms of columns and rows. Please try creating the following layout

### Desktop
<img class="screenshot-xl" src="/fall2025/images/activities/css-layouts/grid-desktop.png" />

### Mobile
<img class="screenshot-xs" src="/fall2025/images/activities/css-layouts/grid-mobile.png" />


## 3. Flexbox Exercise
CSS Grid allows you to layout your page in terms of columns and rows. See if you can complete the following tasks:

1. Style all of the `section` tags:
    * Add a border to each of them (`border: solid 1px black;`)
    * Give them a minimum width of `100px`
    * Give them a minimum height of `100px`
    * Give them some `padding`
1. Make the height of the div 100% of the screen's height (viewport height)
1. Put all of the section tags on the same line (in a row)
    * Hint: put the parent of the section tags (the div with the "container" class) into `flex` mode (`display: flex;`).
    * Add a gap between each of the children: `gap: 20px;`
1. Center the sections horizontally within the parent container
    * Hint: set the parent’s `justify-content` property to “center”
1. Center the sections vertically within the parent container
    * Hint: set the parent’s `align-items` property to “center”
1. Experiment with the `flex-direction` property
1. Experiment with the `flex-wrap` property

When you're done, your page should look like this:


<img class="screenshot-xl border border-gray-400 mb-4" src="/fall2025/images/activities/css-layouts/flex.png" />


**Bonus**: See if you can center the numbers within each section. Hint: to do this, you'll have to put the section into "flex" mode also and use the same tricks as before.

## Tips
If you want to keep practicing, I highly recommend completing the <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a> and <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> games.