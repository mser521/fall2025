---
title: "Style Guide for Midterm Project"
date: "2025-11-03"
type: "midterm project"
draft: 0
toc: false
excluded: true
---

# HTML Style Guide - Visual Demo

This page demonstrates how each utility class looks when rendered. Use this as a visual reference while building your exercises.

## Typography Classes

### `.heading-1` - Large Section Headings

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;h2 class="heading-1"&gt;What we do&lt;/h2&gt;
&lt;!-- Or use semantic h1 --&gt;
&lt;h1 class="heading-1"&gt;Page Title&lt;/h1&gt;</code>
</div>
<div class="demo-visual">
<h2 class="heading-1">What we do</h2>
</div>
</div>

### `.heading-4` - Card/Article Headings

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;h3 class="heading-4"&gt;Card Title&lt;/h3&gt;
&lt;h4 class="heading-4"&gt;Article Heading&lt;/h4&gt;</code>
</div>
<div class="demo-visual">
<h3 class="heading-4">Card Title or Article Heading</h3>
</div>
</div>

### `.heading-5` - Smaller Card Headings (with colored span)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;h3 class="heading-5"&gt;&lt;span&gt;Train&lt;/span&gt; the next generation&lt;/h3&gt;
&lt;!-- Use span inside for colored words --&gt;
&lt;h3 class="heading-5"&gt;&lt;span&gt;Conduct&lt;/span&gt; applied research&lt;/h3&gt;</code>
</div>
<div class="demo-visual">
<h3 class="heading-5"><span>Train</span> the next generation</h3>
</div>
</div>

### `.heading-6` - Subheadings

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;p class="heading-6"&gt;The backdoor to NYC's backyard&lt;/p&gt;</code>
</div>
<div class="demo-visual">
<p class="heading-6">The backdoor to NYC's backyard</p>
</div>
</div>

### `.eyebrow` - Small Label Above Heading

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;h2 class="eyebrow"&gt;Who are we?&lt;/h2&gt;</code>
</div>
<div class="demo-visual">
<h2 class="eyebrow">Who are we?</h2>
</div>
</div>

### `.mega` - Extra Large Hero Text

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;h1 class="mega"&gt;Healthy, resilient natural areas for all&lt;/h1&gt;</code>
</div>
<div class="demo-visual">
<h1 class="mega">Healthy, resilient natural areas for all</h1>
</div>
</div>

### `.xlarge` - Large Paragraph Text

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;p class="xlarge"&gt;We champion and protect New York City's 20,000 acres of forests and wetlands to create a sustainable future here and across the nation.&lt;/p&gt;</code>
</div>
<div class="demo-visual">
<p class="xlarge">We champion and protect New York City's 20,000 acres of forests and wetlands to create a sustainable future here and across the nation.</p>
</div>
</div>

### `.large` - Medium-Large Text

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;p class="large"&gt;Experience a bird's-eye-view of our natural areas and learn what's in your neighborhood.&lt;/p&gt;</code>
</div>
<div class="demo-visual">
<p class="large">Experience a bird's-eye-view of our natural areas and learn what's in your neighborhood.</p>
</div>
</div>

### `.small` - Small Body Text

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;p class="small"&gt;Our CUNY and high school internship programs provide STEM students with the training to succeed in the environmental workforce.&lt;/p&gt;</code>
</div>
<div class="demo-visual">
<p class="small">Our CUNY and high school internship programs provide STEM students with the training to succeed in the environmental workforce.</p>
</div>
</div>

### `.caption` - Small Caption Text

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="caption"&gt;October 27, 2025&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<span class="caption">October 27, 2025</span>
</div>
</div>

## Button Classes

### `.btn.primary` - Primary Action Buttons

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;a href="#" class="btn primary"&gt;Donate&lt;/a&gt;
&lt;a href="#" class="btn primary"&gt;Explore Now&lt;/a&gt;
&lt;a href="#" class="btn primary"&gt;Get Started&lt;/a&gt;</code>
</div>
<div class="demo-visual">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
<a href="#" class="btn primary">Donate</a>
<a href="#" class="btn primary">Explore Now</a>
<a href="#" class="btn primary">Get Started</a>
<a href="#" class="btn primary">View All</a>
</div>
</div>
</div>

### `.btn.tertiary` - Text Link Buttons (hover to see underline animation)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="btn tertiary"&gt;Donate now&lt;/span&gt;
&lt;span class="btn tertiary"&gt;See opportunities&lt;/span&gt;
&lt;span class="btn tertiary"&gt;Learn more&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<div style="padding: 20px; background: white;">
<span class="btn tertiary">Donate now</span><br><br>
<span class="btn tertiary">See opportunities</span><br><br>
<span class="btn tertiary">Learn more</span><br><br>
<span class="btn tertiary">Browse events</span>
</div>
</div>
</div>

### `.btn.icon` - Standard Icon Button

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="btn icon"&gt;
    &lt;span class="accessibility"&gt;Icon button&lt;/span&gt;
&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<span class="btn icon">
    <span class="accessibility">Icon button</span>
</span>
</div>
</div>

### `.btn.icon.large` - Large Icon Button

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="btn icon large"&gt;
    &lt;span class="accessibility"&gt;Large icon button&lt;/span&gt;
&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<span class="btn icon large">
    <span class="accessibility">Large icon button</span>
</span>
</div>
</div>

### `.btn.icon.arrow` - Arrow Icon Button

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="btn icon arrow" style="position: absolute; bottom: 10px; right: 10px;"&gt;
    &lt;span class="accessibility"&gt;Arrow button&lt;/span&gt;
&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<div style="padding: 20px; background: white; position: relative; height: 100px;">
<span class="btn icon arrow" style="position: absolute; bottom: 10px; right: 10px;">
    <span class="accessibility">Arrow button</span>
</span>
<p style="margin: 0;">Hover over the arrow button to see it move</p>
</div>
</div>
</div>

## Layout Classes

### `.container` - Content Wrapper

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;div class="container"&gt;
    &lt;!-- Content here --&gt;
&lt;/div&gt;</code>
</div>
<div class="demo-visual">
<div class="container" style="background: var(--ivory); padding: 20px; border: 2px dashed var(--gray);">
<p>This content is inside a .container - it has max-width and centered margin.</p>
</div>
</div>
</div>

### `.grid` - Grid Layout (2 columns example)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 20px;"&gt;
    &lt;div&gt;Grid Item 1&lt;/div&gt;
    &lt;div&gt;Grid Item 2&lt;/div&gt;
    &lt;div&gt;Grid Item 3&lt;/div&gt;
    &lt;div&gt;Grid Item 4&lt;/div&gt;
&lt;/div&gt;</code>
</div>
<div class="demo-visual">
<div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 20px;">
<div style="background: var(--button-gray); padding: 20px; text-align: center;">Grid Item 1</div>
<div style="background: var(--button-gray); padding: 20px; text-align: center;">Grid Item 2</div>
<div style="background: var(--button-gray); padding: 20px; text-align: center;">Grid Item 3</div>
<div style="background: var(--button-gray); padding: 20px; text-align: center;">Grid Item 4</div>
</div>
</div>
</div>

### `.card` - Card Component (with hover effect)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;a class="btn-container card" href="#"&gt;
    &lt;div class="media"&gt;
        &lt;img src="image.jpg" alt=""&gt;
    &lt;/div&gt;
    &lt;article&gt;
        &lt;h3 class="heading-5"&gt;Card Title&lt;/h3&gt;
        &lt;p class="small"&gt;Card description text.&lt;/p&gt;
    &lt;/article&gt;
&lt;/a&gt;</code>
</div>
<div class="demo-visual">
<div style="max-width: 400px;">
<a class="btn-container card" href="#" style="text-decoration: none; color: var(--black);">
<div class="media" style="background: var(--button-gray); aspect-ratio: 1; height: 150px;">
<div style="padding: 20px; text-align: center;">Card Image Area</div>
</div>
<article style="padding: 1.5rem;">
<h3 class="heading-5">Card Title</h3>
<p class="small">Card description text goes here. Hover to see shadow effect.</p>
</article>
</a>
</div>
</div>
</div>

### `.column` - Column Layout (Centered Content)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;div class="grid" style="grid-template-columns: repeat(2, 1fr);"&gt;
    &lt;div class="column"&gt;
        &lt;div class="media"&gt;
            &lt;img src="image.jpg" alt=""&gt;
        &lt;/div&gt;
        &lt;article&gt;
            &lt;h2&gt;Title&lt;/h2&gt;
            &lt;p class="large"&gt;Description&lt;/p&gt;
            &lt;a href="#" class="btn primary"&gt;Button&lt;/a&gt;
        &lt;/article&gt;
    &lt;/div&gt;
    &lt;div class="column"&gt;
        &lt;!-- Second column --&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</div>
<div class="demo-visual">
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; max-width: 800px;">
<div class="column" style="border-right: 1px solid var(--button-gray); padding-right: 20px;">
<div class="media" style="background: var(--button-gray); aspect-ratio: 425 / 286; margin-bottom: 15px;">
<div style="padding: 20px; text-align: center;">Image</div>
</div>
<article>
<h2>The NYC Nature Map</h2>
<p class="large">Experience a bird's-eye-view of our natural areas.</p>
<a href="#" class="btn primary">Explore Now</a>
</article>
</div>
<div class="column">
<div class="media" style="background: var(--button-gray); aspect-ratio: 425 / 286; margin-bottom: 15px;">
<div style="padding: 20px; text-align: center;">Image</div>
</div>
<article>
<h2>Data Sets</h2>
<p class="large">Explore our forest assessment data sets.</p>
<a href="#" class="btn primary">Get Started</a>
</article>
</div>
</div>
</div>

### `.media` - Image Container

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;div class="media"&gt;
    &lt;img src="image.jpg" alt="Description"&gt;
&lt;/div&gt;</code>
</div>
<div class="demo-visual">
<div class="media" style="max-width: 300px; background: var(--button-gray); aspect-ratio: 5 / 4;">
<div style="padding: 20px; text-align: center;">Media container with aspect ratio</div>
</div>
</div>
</div>

## Utility Classes

### `.panel` - Section Background

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;section id="section-1" class="panel"&gt;
    &lt;!-- Section content --&gt;
&lt;/section&gt;</code>
</div>
<div class="demo-visual">
<div class="panel" style="max-width: 600px;">
<p>This demonstrates the .panel class - adds background color (#f4f2ef) and padding (50px).</p>
</div>
</div>
</div>

### `.pill` - Badge/Tag Elements

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="pill"&gt;Default Pill&lt;/span&gt;
&lt;span class="pill green"&gt;Green Pill&lt;/span&gt;
&lt;span class="pill small"&gt;Small Pill&lt;/span&gt;
&lt;span class="pill small green"&gt;Small Green Pill&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<div style="padding: 20px; background: white;">
<span class="pill" style="margin-right: 10px;">Default Pill</span>
<span class="pill green" style="margin-right: 10px;">Green Pill</span>
<span class="pill small" style="margin-right: 10px;">Small Pill</span>
<span class="pill small green">Small Green Pill</span>
</div>
</div>
</div>

### `.pill` with `.caption` - Common Pattern

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="pill small green"&gt;Announcements&lt;/span&gt;
&lt;span class="caption"&gt;October 27, 2025&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<div style="padding: 20px; background: white;">
<span class="pill small green">Announcements</span>
<span class="caption">October 27, 2025</span><br><br>
<span class="pill small green">Nature Tips</span>
<span class="caption">October 17, 2025</span><br><br>
<span class="pill small green">Education</span>
<span class="caption">September 29, 2025</span>
</div>
</div>
</div>

### `.accessibility` - Screen Reader Text (Hidden Visually)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;span class="btn icon arrow"&gt;
    &lt;span class="accessibility"&gt;This text is hidden but readable by screen readers&lt;/span&gt;
&lt;/span&gt;</code>
</div>
<div class="demo-visual">
<div style="padding: 20px; background: white; position: relative;">
<span class="btn icon arrow">
    <span class="accessibility">This text is hidden but readable by screen readers</span>
</span>
<p style="margin-top: 20px; font-size: 0.9em; color: var(--gray);">
    ↑ The icon above has hidden accessibility text - inspect the element to see it.
</p>
</div>
</div>
</div>

## Common Patterns

### Hero Section Pattern

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;section id="hero" class="hero"&gt;
    &lt;div class="container grid"&gt;
        &lt;article&gt;
            &lt;h1 class="mega"&gt;Main Heading&lt;/h1&gt;
            &lt;p class="xlarge"&gt;Large description text&lt;/p&gt;
            &lt;a class="jump-arrow" href="#section-1"&gt;
                &lt;span class="accessibility"&gt;Jump to first section&lt;/span&gt;
            &lt;/a&gt;
        &lt;/article&gt;
    &lt;/div&gt;
&lt;/section&gt;</code>
</div>
<div class="demo-visual">
<div style="background: #222; color: white; padding: 40px; border-radius: 8px; position: relative;">
<div class="container grid" style="grid-template-columns: 2fr 1fr;">
<article>
<h1 class="mega" style="color: white; font-size: 3rem; margin-bottom: 20px;">Healthy, resilient natural areas</h1>
<p class="xlarge" style="color: white; margin-bottom: 20px;">Description text goes here.</p>
<a class="jump-arrow" href="#" style="display: inline-block; width: 26px; height: 30px; background: url(images/arrow-down.svg) no-repeat;">
<span class="accessibility">Jump to section</span>
</a>
</article>
</div>
</div>
</div>
</div>

### Card Grid Pattern (2x2)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;div class="grid" style="grid-template-columns: repeat(2, 1fr);"&gt;
    &lt;a class="btn-container card" href="#"&gt;
        &lt;div class="media fancy-boxes"&gt;
            &lt;img src="image.jpg" alt=""&gt;
        &lt;/div&gt;
        &lt;article&gt;
            &lt;h3 class="heading-5"&gt;&lt;span&gt;Action&lt;/span&gt; description&lt;/h3&gt;
            &lt;p class="small"&gt;Card description text.&lt;/p&gt;
            &lt;span class="btn icon arrow"&gt;
                &lt;span class="accessibility"&gt;Card title&lt;/span&gt;
            &lt;/span&gt;
        &lt;/article&gt;
    &lt;/a&gt;
    &lt;!-- More cards --&gt;
&lt;/div&gt;</code>
</div>
<div class="demo-visual">
<div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 800px;">
<a class="btn-container card" href="#" style="text-decoration: none; color: var(--black);">
<div class="media fancy-boxes" style="background: var(--button-gray); aspect-ratio: 1; height: 150px; position: relative;">
<div style="padding: 20px; text-align: center;">Card Image</div>
</div>
<article style="padding: 1.5rem; position: relative;">
<h3 class="heading-5"><span>Train</span> the next generation</h3>
<p class="small">Card description text.</p>
<span class="btn icon arrow" style="position: absolute; bottom: 10px; right: 10px;">
<span class="accessibility">Card link</span>
</span>
</article>
</a>
<a class="btn-container card" href="#" style="text-decoration: none; color: var(--black);">
<div class="media" style="background: var(--button-gray); aspect-ratio: 1; height: 150px;">
<div style="padding: 20px; text-align: center;">Card Image</div>
</div>
<article style="padding: 1.5rem;">
<h3 class="heading-5"><span>Conduct</span> research</h3>
<p class="small">Card description text.</p>
</article>
</a>
</div>
</div>
</div>

### Icon Card Pattern (Section 3 Style)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;a class="btn-container" href="#"&gt;
    &lt;div class="media"&gt;
        &lt;img src="../images/icon-donate.svg" alt="Donate icon"&gt;
    &lt;/div&gt;
    &lt;article&gt;
        &lt;h3 class="heading-4"&gt;Donate&lt;/h3&gt;
        &lt;p class="small"&gt;Description text&lt;/p&gt;
        &lt;span class="btn tertiary"&gt;Donate now&lt;/span&gt;
    &lt;/article&gt;
&lt;/a&gt;</code>
</div>
<div class="demo-visual">
<div style="max-width: 500px;">
<a class="btn-container" href="#" style="text-decoration: none; color: var(--black); display: block; padding: 20px; background: white; border: 1px solid var(--button-gray);">
<div class="media" style="margin-bottom: 15px;">
<div style="background: var(--green); width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Icon</div>
</div>
<article>
<h3 class="heading-4">Donate</h3>
<p class="small">Give back to natural areas. Your gift will go toward preserving our vital forests and wetlands.</p>
<span class="btn tertiary">Donate now</span>
</article>
</a>
</div>
</div>
</div>

### Carousel Card Pattern (Section 6 Style)

<div class="demo-with-code">
<div class="code-snippet">
<code>&lt;a class="card" href="#"&gt;
    &lt;div class="media fancy-boxes"&gt;
        &lt;img src="../images/carousel-1.jpg" alt=""&gt;
    &lt;/div&gt;
    &lt;article&gt;
        &lt;span class="pill small green"&gt;Announcements&lt;/span&gt;
        &lt;span class="caption"&gt;October 27, 2025&lt;/span&gt;
        &lt;h3 class="heading-5"&gt;Article Title&lt;/h3&gt;
        &lt;span class="btn icon arrow"&gt;
            &lt;span class="accessibility"&gt;Read article&lt;/span&gt;
        &lt;/span&gt;
    &lt;/article&gt;
&lt;/a&gt;</code>
</div>
<div class="demo-visual">
<div style="max-width: 360px;">
<a class="card" href="#" style="text-decoration: none; color: var(--black); display: flex; flex-direction: column;">
<div class="media fancy-boxes" style="background: var(--button-gray); aspect-ratio: 1; height: 250px; position: relative;">
<div style="padding: 20px; text-align: center;">Image</div>
</div>
<article style="padding: 2rem; position: relative;">
<div style="margin-bottom: 10px;">
<span class="pill small green">Announcements</span>
<span class="caption">October 27, 2025</span>
</div>
<h3 class="heading-5">Gratitude Giveaway 2025</h3>
<span class="btn icon arrow" style="position: absolute; bottom: 10px; right: 10px;">
<span class="accessibility">Read article</span>
</span>
</article>
</a>
</div>
</div>
</div>

## CSS Color Variables

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
<div style="background: var(--white); padding: 20px; border: 2px solid var(--button-gray); text-align: center;">
<code>--white</code>
</div>
<div style="background: var(--ivory); padding: 20px; border: 2px solid var(--button-gray); text-align: center;">
<code>--ivory</code>
</div>
<div style="background: var(--black); color: var(--white); padding: 20px; text-align: center;">
<code>--black</code>
</div>
<div style="background: var(--persian-coral); padding: 20px; text-align: center;">
<code>--persian-coral</code>
</div>
<div style="background: var(--matcha-green); padding: 20px; text-align: center;">
<code>--matcha-green</code>
</div>
<div style="background: var(--green); padding: 20px; text-align: center;">
<code>--green</code>
</div>
<div style="background: var(--moss-green); color: var(--white); padding: 20px; text-align: center;">
<code>--moss-green</code>
</div>
<div style="background: var(--soil-green); color: var(--white); padding: 20px; text-align: center;">
<code>--soil-green</code>
</div>
</div>

