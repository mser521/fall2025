# Task 8: Implement JavaScript Carousel

## Objective
Add JavaScript functionality to make the carousel navigable with previous/next buttons.

## Setup

### 1. Create carousel.js file

Create a new file: `carousel.js`

### 2. Link the script in HTML

Add this before the closing `</body>` tag in `index.html`:

```html
<script src="carousel.js" defer></script>
```

**Note:** The `defer` attribute ensures the script runs after the HTML is fully loaded.

## JavaScript Implementation

```javascript
// Track the current slide index
let currentSlide = 0;

// Get all slide elements
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Get navigation buttons
const prevButton = document.querySelector('.slick-prev');
const nextButton = document.querySelector('.slick-next');

// Function to update slide visibility
function updateSlides() {
  // Hide all slides
  slides.forEach((slide, index) => {
    slide.classList.remove('slick-current', 'slick-active');
    slide.setAttribute('aria-hidden', 'true');
    slide.setAttribute('tabindex', '-1');
  });

  // Show current slide
  if (slides[currentSlide]) {
    slides[currentSlide].classList.add('slick-current', 'slick-active');
    slides[currentSlide].setAttribute('aria-hidden', 'false');
    slides[currentSlide].setAttribute('tabindex', '0');
  }

  // Update button states
  updateButtons();
}

// Function to update button disabled states
function updateButtons() {
  // Disable previous button if on first slide
  if (currentSlide === 0) {
    prevButton.classList.add('slick-disabled');
    prevButton.setAttribute('aria-disabled', 'true');
  } else {
    prevButton.classList.remove('slick-disabled');
    prevButton.setAttribute('aria-disabled', 'false');
  }

  // Disable next button if on last slide
  if (currentSlide === totalSlides - 1) {
    nextButton.classList.add('slick-disabled');
    nextButton.setAttribute('aria-disabled', 'true');
  } else {
    nextButton.classList.remove('slick-disabled');
    nextButton.setAttribute('aria-disabled', 'false');
  }
}

// Function to move to next slide
function moveForward() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlides();
  }
}

// Function to move to previous slide
function moveBackward() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
}

// Add event listeners to buttons
prevButton.addEventListener('click', moveBackward);
nextButton.addEventListener('click', moveForward);

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
  updateSlides();
});
```

## HTML Update

Update the button elements in `index.html` to call the functions:

```html
<button onclick="moveBackward()" class="slick-prev slick-arrow slick-disabled" 
        aria-label="Previous" type="button" aria-disabled="true">Previous</button>
<button onclick="moveForward()" class="slick-next slick-arrow" 
        aria-label="Next" type="button" aria-disabled="false">Next</button>
```

## Key JavaScript Concepts

### 1. DOM Selection
- `document.querySelector()` - Selects first matching element
- `document.querySelectorAll()` - Selects all matching elements
- Returns NodeList (array-like collection)

### 2. Event Listeners
- `addEventListener('click', function)` - Waits for user click
- `DOMContentLoaded` - Event fires when HTML is fully loaded
- Ensures JavaScript runs after page loads

### 3. ClassList Manipulation
- `classList.add()` - Adds CSS class
- `classList.remove()` - Removes CSS class
- Used to toggle visual states

### 4. Conditional Logic
- `if/else` statements check conditions
- `currentSlide < totalSlides - 1` prevents going past last slide
- `currentSlide > 0` prevents going before first slide

### 5. Functions
- `function updateSlides()` - Updates display
- `function moveForward()` - Moves to next slide
- `function moveBackward()` - Moves to previous slide
- Functions organize and reuse code

### 6. Variables
- `let currentSlide = 0` - Tracks position (can be changed)
- `const slides` - Stores NodeList (cannot be reassigned)
- Variables store data for reuse

### 7. Loops
- `forEach()` - Executes code for each element
- Iterates through all slides
- More efficient than writing code for each slide

### 8. Attributes
- `setAttribute()` - Sets HTML attributes
- Used for accessibility (`aria-hidden`, `tabindex`)
- Helps screen readers understand state

## Testing Checklist

- [ ] Script file is linked in HTML
- [ ] First slide displays on page load
- [ ] Previous button is disabled on first slide
- [ ] Next button works and moves to second slide
- [ ] Previous button works and moves back
- [ ] Next button disables on last slide
- [ ] Previous button enables when not on first slide
- [ ] Multiple slides can be navigated
- [ ] Only one slide is visible at a time
- [ ] Buttons have proper disabled styling

## Debugging Tips

### Console Errors
- Open browser DevTools (F12)
- Check Console tab for errors
- Common issues:
  - Script loaded before HTML
  - Wrong class names in selectors
  - Missing elements

### Visual Debugging
- Add `console.log(currentSlide)` to see current position
- Check if buttons exist: `console.log(prevButton, nextButton)`
- Verify slides found: `console.log(slides.length)`

## Extension Ideas

1. **Auto-play**: Automatically advance slides every 5 seconds
2. **Keyboard navigation**: Use arrow keys to navigate
3. **Touch/swipe**: Add mobile touch support
4. **Slide indicators**: Add dots showing current slide
5. **Smooth transitions**: Add CSS transitions for slide changes

## Next Steps

After completing this task, move on to Task 9: Implement Scroll Effects.

