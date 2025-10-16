---
title: "Homepage"
date: "2025-10-16"
type: "activity"
---

## Homepage Exercise
Today we will spend some time organizing your homepage so that it can serve a a launching point to find your various assignments and exercises. I recommend that it have the following structure:

### 1. Create a Skeleton
If you haven't already, create an `index.html` at the root of your `mser521` folder. Then, create your skeleton (suggested structure below):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title of your Homepage</title>
  </head>

  <body>
    <!-- Header Section -->
    <header>
      <div class="container">
        <h1>Sarah's Homepage</h1>
      </div>
    </header>

    <!-- Main Section -->
    <main class="container">

        <section>
            <h2>Exercises</h2>
            Exercises go here...
        </section>

        <section>
            <h2>Labs</h2>
            Labs go here...
        </section>

        <section>
            <h2>Homework</h2>
            Homework goes here...
        </section>      
    </main>
  </body>
</html>
```


### 2. Create a Stylesheet
Next, create a stylesheet called `styles.css` (if you haven't already) at the root of your `mser521` folder. Then, create your base styling (suggested starter stylesheet below):

```css
body {
    margin: 0;
    font-family: "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.6rem;
}

/* add your styles here... */
```

### 3. Link Your Styleheet to Your HTML File
Don't forget to link your stylesheet to your HTML file by adding the link tag in the `<head></head>` section of your document:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title of your Homepage</title>
    <!-- Link to stylesheet -->
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    ...
  </body>
</html>
```

### 4. Begin Adding Links
Now you can begin to add links to your different assignments. Some tips:
1. Start with something simple: add a link to your Lab 3 exercise in the "Labs" section of your homepage. It should look something like this:
    ```html
    <a href="lab03/index.html">HTML Linking Lab</a>
    ```
2. Now try linking to some of your lab04 assignments:
    ```html
    <a href="lab04/02-box-model/index.html">Box Model</a>
    <a href="lab04/03-fonts/index.html">Fonts</a>
    ...
    ```
3. To make your content more readable / organized, try grouping each of these labs into different lists with different headings:
    ```html
    <h3>Lab 3</h3>
    <ul>
        <li>
            <a href="lab03/index.html">HTML Linking Lab</a>
        </li>
    </ul>
    <h3>Lab 4</h3>
    <ol>
        <li><a href="lab04/exercise01.png">Screenshot</a></li>
        <li><a href="lab04/02-box-model/index.html">Box Model</a></li>
        ...
    </ol>
    ```
    You can learn more about lists [here](/fall2025/resources/html-composite-tags)

### 5. Add Some Styling
See if you can jazz up your homepage with some CSS. You don't have to do it all at once...you can make small changes as you go. Feel free to take a look at Sarah's homepage: <a href="https://vanwars.github.io/mser521/" target="_blank">https://vanwars.github.io/mser521/</a>. It's pretty simple, but it can give you some ideas!
* Try using the browser inspector or viewing the page source to see how things are implemented.
