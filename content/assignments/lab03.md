---
title: "Intro to HTML & CSS"
num: "3"
date: "2025-09-30"
type: "lab"
due_date: "2025-10-09"
draft: 0
---


> **Assumptions:** This tutorial assumes that you have:
>
> 1. Installed and configured VS Code
> 2. [Installed and configured GitHub](/fall2025/activities/github)


## Part 1. Setting Up Your Development Environment

### 1. Install Visual Studio Code (if you haven't already)
Download and install Visual Studio Code: <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>. 

### 2. Organize your files
<a href="/fall2025/downloads/lab03.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a>

Download the `lab03.zip` file, unzip it, and move the unzipped `lab03` folder into the `mser521` folder (see diagram below).


```bash
mser521
    ├── intro-html
    ├── lab02
    └── lab03
        ...
```

### 3. Take a look at your lab03 files
You will be ***editing*** your files using VS Code (or another code editor of your choice), and ***viewing*** your rendered files in your web browser.

#### A. View file in Visual Studio Code
1. Open VS Code (your code editor).
2. Add **your entire mser521 folder** to VS Code by 
   * clicking `File >> Add Folder to Workspace...`  
   * and then navigating to your mser521 folder (wherever you saved it)
3. Open your index.html file inside of the `lab03` folder and take a look at it. You should see a very simple HTML file that looks like this:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
        <!-- stylesheets and metadata go here -->
       <title>Home</title>       
       <!-- <link rel="stylesheet" href="style.css"> -->
   </head>
   <body>
       <!-- HTML content tags go here -->
        <nav class="navbar">
            <strong>Home</strong>
            <a href="#">Music</a>
            <a href="#">Videos</a>
        </nav>
        <main>
            <h1>Home</h1>
            <p>Here is some text for the homepage.</p>

            <section class="photo-section">
                <!-- photos go here-->
            </section>
        </main>
   </body>
</html>
```

#### B. View file in Web Browser 
Once you’ve taken a look at the code in VS Code, view it in your browser using the Live Server plugin you previously installed. It should look something like this:

<img class="screenshot-xs" src="/fall2025/images/labs/lab01/a.png" />

## Part 2. Completing the Exercises
Now that you're set up, please complete the 6 tasks below:

> 1. [Connect your stylesheet to your HTML files](#step1)
> 1. [Link your HTML files together](#step2)
> 1. [Add some images to index.html](#step3)
> 1. [Add some embedded videos to videos.html](#step4) 
> 1. [Add a music player to music.html](#step5)
> 1. [Attempt the optional enhancements (if time)](#step6)
            


### 1. Connect your style.css stylesheet <span id="step1"></span>
Open your `index.html` file. Within the `<head></head>` section, uncomment the following line by removing the `<!--` on one side and the `-->` on the other:

```html
<!-- <link rel="stylesheet" href="style.css"> -->
```

This "link tag" instructs the browser to style the `index.html` according to the rules specified in the `styles.css` stylesheet. When you're done, it your code should look like this:

```html
<link rel="stylesheet" href="style.css">
```

Test your change by refreshing your web browser. Your page should now look like this:

<img class="screenshot-md" src="/fall2025/images/labs/lab01/b.png" />

Next, add this same stylesheet link tag inside of the head tag of the `videos.html` and `music.html` files, and then preview both of these in your web browser. These pages should look like this:

<img class="screenshot-md" src="/fall2025/images/labs/lab01/c.png" />
<img class="screenshot-md" src="/fall2025/images/labs/lab01/d.png" />

<span id="step2"></span>

### 2. Link your pages to one another in the navigation section 
Next, modify the anchor tags within the navigation section (in each of your pages) so that your pages link to one another. To do this, you will modify the value that corresponds to the `href` ***attribute*** so that it points to the file you want to open when your user clicks the link. In other words, you will replace the `#` with a ***relative path*** to the relevant HTML file.

```html
<nav class="navbar">
    <strong>Home</strong>
    <a href="#">Music</a>
    <a href="#">Videos</a>
</nav>
```

> **Hint**: Please review the <a href="https://www.w3schools.com/html/html_filepaths.asp" target="_blank">W3Schools reference</a> on "HTML File Paths," if you are not sure what a relative path is (open this link in a new tab so that you can get back to these instructions).

Update all of your anchor tags on all three pages. When you're done, all of the pages should link together as shown below:

<img class="screenshot-sm" src="/fall2025/images/labs/lab01/e.gif" />

<span id="step3"></span>

### 3. Add some images to the index.html file
Inside the `index.html` file:

1. Add three image tags inside of the `<section class="photo-section"></section>` region of your page.
2. Each image should reference one of the flower images inside of the `images` folder.
3. Make sure that you use **relative** paths to each of your images.
4. Feel free to save other images into your `images` folder and use those if you want.

When you're done, your page should look like this:

<img class="screenshot-md" src="/fall2025/images/labs/lab01/f.png" />


> **Hint**: Please see the course resources on [images](/fall2025/resources/html-images/) for more detail (open this link in a new tab so that you can get back to these instructions).

<span id="step4"></span>

### 4. Add two videos to the videos.html file
Inside the `videos.html` file, add two different YouTube or Vimeo videos inside of the `<section class="video-section"></section>` region of your page. To get the embed code of any YouTube video, (a) navigate to the video, (b) click "share", (c) then click "embed," and (d) then copy the embed code (iframe tag), as pictured below (note the pink squares):

<img class="screenshot-xs" src="/fall2025/images/labs/lab01/g.png" />

<img class="screenshot-xs" src="/fall2025/images/labs/lab01/h.png" />

<img class="screenshot-xs" src="/fall2025/images/labs/lab01/i.png" />

When you're done, your page should look like this (except with *your* videos):

<img class="screenshot-md" src="/fall2025/images/labs/lab01/j.png" />

If you want, you can also try embedding one of the Tableau charts that you made -- or one of the maps you've made in your GIS course.

> **More examples**: Please also see the course resources on [media tags](/fall2025/resources/html-media/) (open this link in a new tab so that you can get back to these instructions).

<span id="step5"></span>

### 5. Add a Spotify player to music.html
Inside the `music.html` file, add one or more embedded music players inside of the `<section class="music-section"></section>` region of your page. There are instructions on how to get the embed code of a Spotify artist profile, album, song, playlist, or podcast on Spotify's <a href="https://artists.spotify.com/en/help/article/embedded-players" target="_blank">documentation page</a>. 

When you're done, your page should look like this (except with *your* videos):

<img class="screenshot-md" src="/fall2025/images/labs/lab01/k.png" />


<span id="step6"></span>

### 6. Optional Enhancements
While we have not yet covered CSS, try using Google and various online resources to see how you might edit the `style.css` file to achieve the following:

* Change the fonts and/or text color of the h1 tag
* Resize the images
* Style your iframe to have the the same dimensions as your image
* Change the background color of you web page
* Give your hyperlinks a hover effect


> #### CSS Reference
> Please also see the course resources on CSS (open this link in a new tab so that you can get back to these instructions):
>
> * [fonts](/fall2025/resources/css-fonts)
> * [color](/fall2025/resources/css-color/)
> * [selectors](/fall2025/resources/css-selectors/)

<!-- ## Part 3. Publishing to GitHub
Please [follow these instructions](../activities/github) to publish your tutorial02 to GitHub. -->


## How to think about this exercise (meta-comment)
The purpose of this lab was to get you familiar with some HTML widgets and conventions. We are now officially done with HTML instruction. What you should be comfortable with after this tutorial:


1. Finding online resources (like <a href="https://www.w3schools.com/html/default.asp" target="_blank">W3Schools</a> and the [course HTML reference](/fall2025/resources/html)) that help you learn about and integrate HTML tags.
2. Understanding the rules of various tags, and how to nest them.
3. Understanding how to link files together using both relative and absolute paths.
4. Semantic containers

## What to turn in
Please commit and push all of your edits to GitHub. Then, paste a link to your GitHub Repository (code files) and to your GitHub pages (website) in the Moodle submission.
