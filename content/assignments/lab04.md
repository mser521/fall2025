---
title: "CSS Lab"
num: "4"
date: "2025-10-09"
type: "lab"
due_date: "2025-10-16"
draft: 0
---


## Overview
This lab can be completed individually or in pairs. Working in pairs does not mean "splitting up the work" so that each person does half of the tasks. Rather, both parties should complete the tasks and help one another as questions arise. We will use class time on Tuesday to work on the lab, but you are encouraged to start it before class.

> ### References
> CSS is best understood through practice, and by consulting online resources as needed. Here are a curated list of resources that should help you complete your tasks:
> 
> #### Common CSS Properties and Techniques
> * <a href="../resources/css">CSS Rules of Thumb</a> 
> * <a href="../resources/css-selectors">Selectors</a>
>     * [CSS Diner](https://flukeout.github.io/)
> * <a href="../resources/css-color/">Color</a>
> * [CSS Units](../resources/css-units/)
> * <a href="../resources/css-fonts/">Text &amp; Fonts</a>
> * <a href="../resources/css-box-model/">The Box Model</a>
> * <a href="../resources/css-grid/">CSS Grid</a>  
> * <a href="../resources/css-flexbox/">Flexbox</a>  
> * <a href="../resources/css-media-queries/">Media Queries</a>    
>
> #### CSS Grid
> * <a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden</a> <br>Please try to complete at least the first 10 levels 
> 
> #### Flex
> 
> * <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a>.<br>Please try to complete at least the first 10 levels  



## Your Tasks
<a href="/fall2025/downloads/lab04.zip" class="nu-button">Download Lab Files <i class="fas fa-download"></i></a>

Download the `lab04.zip` file, unzip it and move the unzipped `lab04` folder into the `mser521` folder (see diagram below).

```
mser521
    ├── intro-htmlt
    ├── lab02
    ├── lab03
    └── lab04
        ...
```

### Task 1: CSS Selectors
Complete the first 14 steps of <a href="https://flukeout.github.io/" target="_blank">CSS Diner</a>. When you're done, take a screenshot showing you completed all of the levels. Your screenshot should have a green checkmark next to each level (like the one below but with checkmarks).

<img class="screenshot-sm" src="/fall2025/images/labs/lab04/exercise01.png" />

### Task 2: Box Model Properties
Open `02-box-model` and modify the CSS so that the card looks like the screenshot shown below. You should only need to use [Box Model](../resources/css-box-model/) CSS properties.

<img class="screenshot-sm" src="/fall2025/images/labs/lab04/exercise02.png" />

### Task 3: Use an external stylesheet
Open `03-fonts` and use CSS to style the `h1` and `h2` tags using a Google font (example shown below). If you need help...
* Check out <a href="https://www.youtube.com/watch?v=E7QPO8P8nls" target="_blank">this video</a>
* You can also Google "How to use a Google Font in CSS" 

<img class="screenshot-xxs" src="/fall2025/images/labs/lab04/exercise03.png" />

### Task 4: Center-align elements within a container

Open `04-flex` and create the layout shown below by editing the CSS file. You should not need to edit the HTML. Some hints:
* Put each of the containers into "flex" mode and give them a height of 100vh (vh stands for viewport height)
* To get the children of the container to stack vertically, experiment with the "flex-direction" property
* To align the items horizontally and vertically, experiment with the "justify-content" and "align-center" properties

Check out the <a href="../resources/css-flexbox/" target="_blank">Flexbox</a> documentation for help.


<img class="screenshot" src="/fall2025/images/labs/lab04/exercise04.gif" />

Please ensure that the following criteria are met:

* The height of each `section` should be the same as the height of the browser window.
* The content inside of each `section` tag should be centered horizontally and vertically.
* Each `section` should have a different background color.
* The content in each `section` should be stacked vertically

### Task 5: Create a Navigation Bar
Open `05-navbar`, and try to make the following layout using flex. The boxes don't have to look exactly like the ones below, but do your best:

<img class="screenshot-lg" src="/fall2025/images/labs/lab04/exercise05.png" />

Hints:

* Both the `nav` and `ul` elements will need to be put into flex mode.
* Use the Chrome inspector to adjust the alignment properties.
* To turn the bullets off, set the `ul` tag's `list-style-type` property to `none`.

### Task 6: Create this layout

Open `06-grid`, and try to make the following layout using CSS Grid. You should not need to modify the HTML file. Note that the gridlines are just for demonstration, but they won’t actually be visible.

<img class="screenshot-sm" src="/fall2025/images/labs/lab04/exercise06b.png" />

**Note:** You do NOT have to center the text inside of each section unless you want to.
Check out the <a href="../resources/css-grid/" target="_blank">Flexbox</a> documentation for help.

### Task 7: Create the Taco Temple layout

Open `07-tacotemple`, and try to make the following layout using CSS Grid. You should only have to edit the CSS file. 

<img class="screenshot-lg" src="/fall2025/images/labs/lab04/tacotemple01.png" />

**A few hints:**
The `main` container is a grid with two columns -- no rows specified). See grid lines: 

<img class="screenshot-lg" src="/fall2025/images/labs/lab04/tacotemple02.png" />

The `section` container is also a grid with two columns. See grid lines: 

<img class="screenshot-sm" src="/fall2025/images/labs/lab04/tacotemple03.png" />

## What to turn in
Please create a link from your homepage to your completed in class (see Sarah's homepage: <a href="https://vanwars.github.io/mser521/" target="_blank">https://vanwars.github.io/mser521/</a> for an example). Then, commit and push all of your edits to GitHub and, paste a link to your GitHub Repository and to your GitHub pages in the Moodle submission.
