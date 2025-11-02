# Task 1: Make Header

## Objective
Create a navigation header that stays fixed at the top of the page with a logo and navigation links.

## HTML Structure

Add this to your `index.html` file, right after the opening `<body>` tag:

```html
<header>
    <nav>
        <div class="left">
            <a class="logo" href="https://naturalareasnyc.org">
                <svg xmlns="http://www.w3.org/2000/svg" width="117" height="96" viewBox="0 0 117 96" fill="none">
                    <g clip-path="url(#clip0_1057_1517)">
                        <path d="M15.2389 28.7884V5.4415H100.708V28.7884H106.172V0H9.7749V28.7884H15.2389Z" fill="#9ACD32"></path>
                        <path d="M100.708 51.9189V90.5585H15.2389V51.9189H9.7749V96H106.172V51.9189H100.708Z" fill="#9ACD32"></path>
                        <!-- Add remaining SVG paths from index.html lines 27-93 -->
                    </g>
                    <defs>
                        <clipPath id="clip0_1057_1517">
                            <rect width="117" height="96" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href="#section-2">What We Do</a>
            <a href="#section-3">About Us</a>
            <a href="#section-6">Events</a>
        </div>
        <div class="right">
            <a href="#">Get Involved</a>
            <a href="#" class="btn primary">Donate</a>
        </div>
    </nav>
</header>
```

## CSS Styles

Add these styles to your `styles.css` file:

```css
/* ============================================
   HEADER
   ============================================ */

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 0 0 40px;
  z-index: 2;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
}

header .left,
header .right {
  display: flex;
  align-items: center;
  gap: 30px;
}

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

## Key Concepts

### 1. `position: absolute`
- Positions the header relative to the viewport
- Allows it to overlay content below
- `top: 0` and `left: 0` place it at the top-left

### 2. Flexbox Layout
- `display: flex` on `nav` creates a horizontal layout
- `justify-content: space-between` pushes left and right groups to edges
- `gap: 30px` adds spacing between items

### 3. Z-Index
- `z-index: 2` ensures header appears above other content
- Higher z-index = closer to viewer

### 4. SVG Styling
- `fill: white` changes SVG path colors to white
- Allows the logo to be visible on dark backgrounds

## Testing Checklist

- [ ] Header appears at top of page
- [ ] Logo displays correctly (white SVG)
- [ ] Navigation links are visible and clickable
- [ ] "Donate" button has primary button styling
- [ ] Header stays at top when scrolling (after hero section is added)

## Next Steps

After completing the header, move on to Task 2: Make Hero Section and Section 1.

