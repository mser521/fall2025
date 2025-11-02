# Task 9: Implement Scroll Effects

## Objective
Add scroll-triggered animations and parallax effects to make the website more interactive and engaging.

## Setup

### 1. Link CSS and JS files

Add to `<head>` section in `index.html`:

```html
<link rel="stylesheet" href="scroll-effects.css">
```

Add before closing `</body>` tag:

```html
<script src="scroll-effects.js" defer></script>
```

### 2. Files already created
- `scroll-effects.css` - Contains animation styles
- `scroll-effects.js` - Contains scroll effect logic

## Part A: Add Data Attributes to HTML

Add `data-scroll` attributes to elements you want to animate:

### Section 1
```html
<div class="container-off" data-scroll="slide-up" data-scroll-delay="100">
  <!-- video content -->
</div>

<h2 class="eyebrow" data-scroll="fade-in">Who are we?</h2>
<h3 class="heading-4" data-scroll="fade-in" data-scroll-delay="200">...</h3>
```

### Section 2
```html
<img id="geese" data-parallax="0.3" src="...">

<h2 class="heading-1" data-scroll="slide-up">What we do</h2>

<a class="btn-container card" data-scroll="slide-up">...</a>
<a class="btn-container card" data-scroll="slide-up" data-scroll-delay="100">...</a>
<a class="btn-container card" data-scroll="slide-up" data-scroll-delay="200">...</a>
<a class="btn-container card" data-scroll="slide-up" data-scroll-delay="300">...</a>
```

### Section 3
```html
<h2 class="heading-1" data-scroll="fade-in">Join our efforts</h2>

<a class="btn-container" data-scroll="scale">...</a>
<a class="btn-container" data-scroll="scale" data-scroll-delay="100">...</a>
<a class="btn-container" data-scroll="scale" data-scroll-delay="200">...</a>
<a class="btn-container" data-scroll="scale" data-scroll-delay="300">...</a>
```

### Section 4
```html
<div class="column" data-scroll="slide-right">...</div>
<div class="column" data-scroll="slide-left">...</div>
```

### Section 5
```html
<h2 class="heading-1 mega" data-scroll="fade-in">Forests in <br>Cities network</h2>
<a class="btn-container card" data-scroll="slide-up">...</a>
<a class="btn-container card" data-scroll="slide-up" data-scroll-delay="200">...</a>
```

### Section 6
```html
<article data-scroll="fade-in">
  <h2 class="heading-1">Understories</h2>
  <p class="heading-6">The backdoor to NYC's backyard</p>
</article>
```

## Part B: Understanding the JavaScript

### Intersection Observer API

The JavaScript uses the Intersection Observer API to detect when elements enter the viewport:

```javascript
const observerOptions = {
  root: null,           // Use viewport as root
  rootMargin: '0px',    // No margin
  threshold: 0.1        // Trigger when 10% visible
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-in');
    }
  });
}, observerOptions);
```

### How It Works

1. **Observer watches elements** with `[data-scroll]` attribute
2. **When element enters viewport**, `isIntersecting` becomes `true`
3. **Adds `scroll-in` class**, which triggers CSS animation
4. **Animation plays once** (you can unobserve after for performance)

### Parallax Effect

Parallax makes elements move at different speeds:

```javascript
function handleParallax() {
  parallaxElements.forEach(element => {
    const speed = parseFloat(element.dataset.parallax) || 0.5;
    const rect = element.getBoundingClientRect();
    const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const translateY = scrollPercent * 100 * speed;
    
    element.style.transform = `translateY(${translateY}px)`;
  });
}
```

## Available Animation Types

### 1. Fade In
```html
<div data-scroll="fade-in">Content</div>
```
- Starts invisible, fades to visible

### 2. Slide Up
```html
<div data-scroll="slide-up">Content</div>
```
- Slides up from below while fading in

### 3. Slide Down
```html
<div data-scroll="slide-down">Content</div>
```
- Slides down from above while fading in

### 4. Slide Left/Right
```html
<div data-scroll="slide-left">Content</div>
<div data-scroll="slide-right">Content</div>
```
- Slides horizontally while fading in

### 5. Scale
```html
<div data-scroll="scale">Content</div>
```
- Scales from 80% to 100% while fading in

### 6. Parallax
```html
<img data-parallax="0.3" src="...">
```
- Moves slower than scroll speed
- Value (0.3) controls speed (lower = slower)

## Stagger Delays

Add delays to create sequential animations:

```html
<div data-scroll="slide-up">Item 1</div>
<div data-scroll="slide-up" data-scroll-delay="100">Item 2</div>
<div data-scroll="slide-up" data-scroll-delay="200">Item 3</div>
```

- `100` = 0.1 second delay
- `200` = 0.2 second delay
- Creates cascading effect

## Testing Checklist

- [ ] Scroll effects CSS and JS files are linked
- [ ] Elements with `data-scroll` animate when scrolled into view
- [ ] Fade-in animations work correctly
- [ ] Slide-up animations work correctly
- [ ] Parallax effect works on geese image
- [ ] Stagger delays create sequential animations
- [ ] Animations are smooth (60fps)
- [ ] No console errors

## Performance Tips

1. **Use Intersection Observer** - More efficient than scroll events
2. **Unobserve after animation** - Prevents repeated checks
3. **Use `will-change`** - Hints browser about animations
4. **Limit parallax elements** - Too many can cause jank

## Common Issues

### Animations don't trigger
- Check browser console for errors
- Verify `data-scroll` attributes are correct
- Ensure JavaScript file is loaded

### Animations too fast/slow
- Adjust `transition` duration in CSS
- Modify `threshold` in observer options

### Parallax not working
- Verify `data-parallax` attribute has value
- Check that element is positioned correctly
- Ensure JavaScript is running

## Extension Ideas

1. **Add more animation types** (rotate, bounce, etc.)
2. **Different thresholds** for different elements
3. **Animate out** when scrolling up
4. **Progress indicators** showing scroll position
5. **Sticky headers** that change on scroll

## Next Steps

Congratulations! You've completed all tasks. The website is now fully functional with:
- ✅ Navigation header
- ✅ All 6 sections
- ✅ Interactive carousel
- ✅ Scroll-triggered animations

Consider adding:
- Mobile responsiveness
- Additional interactive features
- Performance optimizations
- Accessibility improvements

