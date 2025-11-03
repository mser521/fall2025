---
title: "2. Navigation"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 2: Navigation
**Folder:** `02_nav/`  
**Files:** `index.html`, `nav.css`, `nav.js` (optional)

**Screenshot of Solution:**

<img src="/fall2025/images/midterm-project/nav-desktop.png" class="screenshot-lg" />

<img src="/fall2025/images/midterm-project/nav-mobile.png" class="screenshot-2xs" />

## HTML Structure (`index.html`)

Create the navigation structure inside a `<header>`:

```html
<header>
    <nav>
        <div class="left">
            <a class="logo" href="https://naturalareasnyc.org">
                <img src="../images/logo-white.svg" alt="Natural Areas Conservancy Logo">
            </a>
            <div class="nav-links">
                <a href="#section-2">What We Do</a>
                <a href="#section-3">About Us</a>
                <a href="#section-6">Events</a>
            </div>
        </div>
        <div class="right">
            <div class="nav-links">
                <a href="#">Get Involved</a>
                <a href="#" class="btn primary">Donate</a>
            </div>
        </div>
        <button onclick="toggleMenu(event)" class="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
</header>
```

**Key points:**
- Navigation links are grouped in `.nav-links` containers
- Hamburger button has three `<span>` elements for the icon bars
- `onclick="toggleMenu(event)"` calls the JavaScript function
- `aria-expanded` attribute for accessibility

## CSS Solution (`nav.css`)

### Part 1: Base Styles (Desktop Layout)

Start with the foundation - desktop navigation that's always visible:

```css
body {
  margin: 0;
  background-color: black;
  min-height: 100vh;
}

/* Position header absolutely at top of page */
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 0 0 40px;
  z-index: 2; /* Above other content */
}

/* Flexbox layout for nav - space items between left and right */
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
}

/* Both left and right groups use flexbox */
header .left,
header .right {
  display: flex;
  align-items: center;
  gap: 40px;
}

/* Navigation links are flexbox too */
.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

/* Link styling */
header nav a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: 1.2em;
}

.logo svg path {
  fill: white;
}
```

### Part 2: Hamburger Button Styles

Style the hamburger button (hidden on desktop, visible on mobile):

```css
/* Hamburger button - hidden by default */
.hamburger {
  display: none; /* Hidden on desktop */
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 3; /* Above menu when open */
}

/* Each bar of the hamburger icon */
.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease; /* Smooth animation */
}
```

### Part 3: Hamburger Animation (Using Attribute Selector)

Animate the hamburger to an X when `aria-expanded="true"`:

```css
/* First bar rotates and moves */
.hamburger[aria-expanded='true'] span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

/* Middle bar fades out */
.hamburger[aria-expanded='true'] span:nth-child(2) {
  opacity: 0;
}

/* Third bar rotates opposite direction */
.hamburger[aria-expanded='true'] span:nth-child(3) {
  transform: rotate(-45deg) translate(3.5px, -3.5px);
}
```

**Key concept:** We use the `aria-expanded` attribute as a state indicator. When it's `"true"`, CSS transforms the three bars into an X shape.

### Part 4: Mobile Responsive Styles

Add a media query to change behavior on mobile devices:

```css
@media screen and (max-width: 768px) {
  /* Adjust header padding for mobile */
  header {
    padding: 10px 0 0 20px;
  }

  header nav {
    padding-right: 20px;
    position: relative;
  }

  /* Show hamburger button on mobile */
  .hamburger {
    display: flex;
  }

  /* Hide nav links by default on mobile */
  .nav-links {
    display: none;
  }

  /* Show nav links when parent nav has active class (CSS cascading) */
  nav.active .nav-links {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: rgba(15, 16, 16, 0.98);
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 30px 30px;
    gap: 20px;
    transition: right 0.3s ease;
    z-index: 2;
    overflow-y: auto;
  }

  /* Position right nav links below left when nav is active */
  nav.active .right .nav-links {
    top: auto;
    bottom: 0;
    height: auto;
    max-height: 50vh;
  }

  /* Remove gaps on mobile */
  header .left,
  header .right {
    gap: 0;
  }

  /* Make links stack vertically and fill width */
  header nav a {
    font-size: calc(18rem / 16);
    padding: 10px 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn.primary {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
}
```

**Key CSS concept - Cascading:** 
- When `nav` has class `active`, the selector `nav.active .nav-links` targets all `.nav-links` inside it
- This is more efficient than adding `active` to each `.nav-links` individually
- JavaScript only needs to toggle one class on the parent element

## JavaScript Solution (`nav.js`)

The JavaScript uses CSS cascading - we only toggle a class on the parent element:

```javascript
// Get references to elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Function to toggle the menu
function toggleMenu(ev) {
  // Get current state
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  
  // Toggle the aria-expanded attribute (for accessibility and CSS)
  hamburger.setAttribute('aria-expanded', !isExpanded);
  
  // Toggle active class on nav (CSS cascading will show/hide .nav-links)
  nav.classList.toggle('active');

  // Prevent click event from bubbling up to body
  ev.stopPropagation();
}

// Close menu when clicking outside of nav-links
document.body.addEventListener('click', function (ev) {
  // If click is inside .nav-links, don't close
  if (ev.target.closest('.nav-links')) {
    return;
  }
  // Otherwise, close the menu
  hamburger.setAttribute('aria-expanded', 'false');
  nav.classList.remove('active');
});
```

**How it works:**
1. Click hamburger → `toggleMenu()` runs
2. Toggles `active` class on `<nav>` element
3. CSS rule `nav.active .nav-links` automatically shows all nav links (cascading)
4. No loops needed - CSS handles showing/hiding all children
5. Click outside → body click listener closes menu

**Key JavaScript concepts:**
- `classList.toggle()` - adds class if missing, removes if present
- `ev.stopPropagation()` - prevents event from bubbling to parent
- `ev.target.closest()` - checks if click is inside a specific element
- No loops - we let CSS cascading do the work!

## Key Takeaways

1. **CSS Cascading:** Use parent `.active` class + descendant selectors (`nav.active .nav-links`) instead of adding classes to multiple children
2. **Attribute Selectors:** Use `aria-expanded` attribute for state (good for accessibility too!)
3. **Fixed Positioning:** Mobile menu uses `position: fixed` to overlay the page
4. **CSS Transitions:** Smooth animations with `transition` property
5. **Event Handling:** Use `stopPropagation()` to control event flow

[← Back to Midterm Project Index](./midterm)

