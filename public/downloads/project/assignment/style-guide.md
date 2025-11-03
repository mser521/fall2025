# HTML Style Guide

This guide demonstrates how to use the utility classes available in `styles.css`. These classes provide consistent styling across all exercises.

**📖 Visual Demo:** Open `style-guide-demo.html` in your browser to see all these classes rendered visually!

## Typography Classes

### Headings

#### `.heading-1` (Large Section Headings)
```html
<h2 class="heading-1">What we do</h2>
<!-- Or use semantic h1 -->
<h1 class="heading-1">Page Title</h1>
```

#### `.heading-4` (Card/Article Headings)
```html
<h3 class="heading-4">Card Title</h3>
<h4 class="heading-4">Article Heading</h4>
```

#### `.heading-5` (Smaller Card Headings)
```html
<h3 class="heading-5"><span>Train</span> the next generation</h3>
<!-- Use span inside for colored words -->
<h3 class="heading-5"><span>Conduct</span> applied research</h3>
```

#### `.heading-6` (Subheadings)
```html
<p class="heading-6">The backdoor to NYC's backyard</p>
```

#### `.eyebrow` (Small Label Above Heading)
```html
<h2 class="eyebrow">Who are we?</h2>
```

### Text Size Utilities

#### `.mega` (Extra Large Hero Text)
```html
<h1 class="mega">Healthy, resilient natural areas for all</h1>
```

#### `.xlarge` (Large Paragraph Text)
```html
<p class="xlarge">We champion and protect New York City's 20,000 acres of forests and wetlands...</p>
```

#### `.large` (Medium-Large Text)
```html
<p class="large">Experience a bird's-eye-view of our natural areas and learn what's in your neighborhood.</p>
```

#### `.small` (Small Body Text)
```html
<p class="small">Our CUNY and high school internship programs provide STEM students with the training to succeed.</p>
```

#### `.caption` (Small Caption Text)
```html
<span class="caption">October 27, 2025</span>
<!-- Often used with pill badges -->
<span class="pill small green">Announcements</span>
<span class="caption">October 27, 2025</span>
```

---

## Button Classes

### Primary Buttons (`.btn.primary`)
Use for main call-to-action buttons:
```html
<a href="#" class="btn primary">Donate</a>
<a href="#" class="btn primary">Explore Now</a>
<a href="#" class="btn primary">Get Started</a>
```

### Tertiary Buttons (`.btn.tertiary`)
Use for text links with animated underline:
```html
<span class="btn tertiary">Donate now</span>
<span class="btn tertiary">See opportunities</span>
<span class="btn tertiary">Learn more</span>
<!-- Inside clickable containers -->
<a class="btn-container" href="#">
    <span class="btn tertiary">Browse events</span>
</a>
```

### Icon Buttons (`.btn.icon`)
Circular icon buttons, often with arrow:
```html
<!-- Standard size -->
<span class="btn icon arrow">
    <span class="accessibility">Read more</span>
</span>

<!-- Large size -->
<span class="btn icon large">
    <svg>...</svg>
</span>
```

### Button Container (`.btn-container`)
Wraps clickable content (entire card or section):
```html
<a class="btn-container card" href="#">
    <!-- Card content -->
</a>

<a class="btn-container" href="#">
    <div class="media">
        <img src="icon.svg" alt="">
    </div>
    <article>
        <h3 class="heading-4">Title</h3>
        <span class="btn tertiary">Action</span>
    </article>
</a>
```

---

## Layout Classes

### Container (`.container`)
Wraps section content for consistent width and padding:
```html
<section id="section-3">
    <div class="container">
        <!-- Content here -->
    </div>
</section>
```

### Grid Layout (`.grid`)
Creates CSS Grid layout. Define columns in your section CSS:
```html
<div class="container grid">
    <!-- Grid items -->
</div>

<!-- Or standalone grid -->
<div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```

### Cards (`.card`)
Clickable card components:
```html
<a class="btn-container card" href="#">
    <div class="media fancy-boxes">
        <img src="image.jpg" alt="">
    </div>
    <article>
        <h3 class="heading-5">Card Title</h3>
        <p class="small">Description text</p>
        <span class="btn icon arrow"></span>
    </article>
</a>
```

### Columns (`.column`)
For two-column layouts (Section 4):
```html
<div class="container grid">
    <div class="column">
        <div class="media">
            <img src="image.jpg" alt="">
        </div>
        <article>
            <h2>Title</h2>
            <p class="large">Description</p>
            <a href="#" class="btn primary">Button</a>
        </article>
    </div>
    <div class="column">
        <!-- Second column -->
    </div>
</div>
```

### Media Container (`.media`)
Wraps images for consistent positioning:
```html
<div class="media">
    <img src="image.jpg" alt="Description">
</div>

<!-- With fancy boxes decoration -->
<div class="media fancy-boxes">
    <img src="image.jpg" alt="">
</div>
```

---

## Utility Classes

### Panel (`.panel`)
Adds background color and padding to sections:
```html
<section id="section-1" class="panel">
    <!-- Section content -->
</section>

<section id="section-2" class="panel">
    <!-- Section content -->
</section>
```

### Pill Badges (`.pill`)
Small badge/tag elements:
```html
<!-- Default pill (black background) -->
<span class="pill">Category</span>

<!-- Green pill -->
<span class="pill green">Announcements</span>
<span class="pill green">Nature Tips</span>

<!-- Small pill -->
<span class="pill small">Tag</span>

<!-- Small green pill (commonly used) -->
<span class="pill small green">Announcements</span>
```

### Accessibility (`.accessibility`)
Hides text visually but keeps it for screen readers:
```html
<a class="jump-arrow" href="#section-1">
    <span class="accessibility">Jump to first section</span>
</a>

<span class="btn icon arrow">
    <span class="accessibility">Read more about this article</span>
</span>
```

---

## Common Patterns

### Hero Section Pattern
```html
<section id="hero" class="hero">
    <div class="container grid">
        <article>
            <h1 class="mega">Main Heading</h1>
            <p class="xlarge">Large description text</p>
            <a class="jump-arrow" href="#section-1">
                <span class="accessibility">Jump to first section</span>
            </a>
        </article>
    </div>
</section>
```

### Card Grid Pattern
```html
<div class="grid">
    <a class="btn-container card" href="#">
        <div class="media fancy-boxes">
            <img src="image.jpg" alt="">
        </div>
        <article>
            <h3 class="heading-5"><span>Action</span> description</h3>
            <p class="small">Card description text</p>
            <span class="btn icon arrow">
                <span class="accessibility">Card title</span>
            </span>
        </article>
    </a>
    <!-- More cards -->
</div>
```

### Icon Card Pattern (Section 3)
```html
<a class="btn-container" href="#">
    <div class="media">
        <img src="../images/icon-donate.svg" alt="Donate icon">
    </div>
    <article>
        <h3 class="heading-4">Donate</h3>
        <p class="small">Description text</p>
        <span class="btn tertiary">Donate now</span>
    </article>
</a>
```

### Carousel Card Pattern (Section 6)
```html
<a class="card" href="#">
    <div class="media fancy-boxes">
        <img src="../images/carousel-1.jpg" alt="">
        <span>Read more</span>
    </div>
    <article>
        <span class="pill small green">Announcements</span>
        <span class="caption">October 27, 2025</span>
        <h3 class="heading-5">Article Title</h3>
        <span class="btn icon arrow"></span>
    </article>
</a>
```

---

## CSS Variables Reference

Use these CSS variables in your custom CSS (not in HTML):

```css
/* Colors */
var(--white)
var(--ivory)
var(--button-gray)
var(--gray)
var(--black)
var(--persian-coral)
var(--persian-coral-hover)
var(--matcha-green)
var(--green)
var(--green-callout)
var(--moss-green)
var(--soil-green)

/* Layout */
var(--container-max-width)
var(--container-outer-padding)
```

**Example:**
```css
.my-element {
  color: var(--black);
  background: var(--persian-coral);
  max-width: var(--container-max-width);
}
```

---

## Best Practices

1. **Combine Classes**: Use multiple classes together:
   ```html
   <a class="btn primary">Button</a>
   <h1 class="heading-1 mega">Heading</h1>
   <span class="pill small green">Tag</span>
   ```

2. **Semantic HTML First**: Use appropriate HTML elements, then add utility classes:
   ```html
   <h2 class="heading-1">Good</h2>
   <div class="heading-1">Avoid</div>
   ```

3. **Accessibility**: Always include `.accessibility` class for icon-only buttons:
   ```html
   <span class="btn icon arrow">
       <span class="accessibility">Descriptive text for screen readers</span>
   </span>
   ```

4. **Container + Grid**: Use `.container` for outer wrapper, `.grid` for layout:
   ```html
   <div class="container">
       <div class="grid">
           <!-- Grid items -->
       </div>
   </div>
   ```

5. **Relative Paths**: Always use `../images/filename.jpg` in your exercise folders

---

## Quick Reference

| Class | Purpose | Example |
|-------|---------|---------|
| `.heading-1` | Large section headings | `<h2 class="heading-1">Title</h2>` |
| `.heading-4` | Card/article headings | `<h3 class="heading-4">Card Title</h3>` |
| `.heading-5` | Smaller headings | `<h3 class="heading-5">Title</h3>` |
| `.mega` | Extra large text | `<h1 class="mega">Hero Title</h1>` |
| `.xlarge` | Large paragraphs | `<p class="xlarge">Text</p>` |
| `.large` | Medium text | `<p class="large">Text</p>` |
| `.small` | Small text | `<p class="small">Text</p>` |
| `.btn.primary` | Main action buttons | `<a class="btn primary">Button</a>` |
| `.btn.tertiary` | Text link buttons | `<span class="btn tertiary">Link</span>` |
| `.btn.icon.arrow` | Arrow icon button | `<span class="btn icon arrow"></span>` |
| `.container` | Content wrapper | `<div class="container">Content</div>` |
| `.grid` | Grid layout | `<div class="grid">Items</div>` |
| `.card` | Card component | `<a class="card">Card content</a>` |
| `.pill` | Badge/tag | `<span class="pill">Tag</span>` |
| `.media` | Image container | `<div class="media"><img></div>` |
| `.accessibility` | Screen reader text | `<span class="accessibility">Hidden text</span>` |

