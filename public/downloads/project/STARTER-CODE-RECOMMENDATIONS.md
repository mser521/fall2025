# Starter Code Recommendations for Single Assignment

## Philosophy: Balance Learning vs. Overwhelming

**Goal**: Provide enough structure to prevent frustration, but not so much that students skip learning the fundamentals.

---

## Recommended Starter Code Package

### ✅ **What TO Include** (Moderate Starter Code)

#### 1. HTML Structure with Comments
- DOCTYPE and basic HTML5 structure
- Semantic section placeholders with TODO comments
- Links to CSS/JS files (commented out)
- Clear organization comments

**Why**: Prevents basic syntax errors, shows structure, but requires students to build content.

#### 2. CSS Variables
- Color palette (`:root` variables)
- Container max-widths
- Spacing variables

**Why**: Saves time on design decisions, ensures consistency, teaches CSS variables.

#### 3. Basic Reset Styles
- `box-sizing: border-box`
- Body margin reset
- Basic font-family

**Why**: Prevents common layout issues, standard practice.

#### 4. Container Class
- Basic container structure
- Max-width and padding

**Why**: Common pattern, shows organization structure.

---

### ❌ **What NOT to Include**

#### 1. Complete CSS for Components
- Don't provide full header styles
- Don't provide full card styles
- Don't provide complete grid layouts

**Why**: Students need to learn CSS Grid, Flexbox, positioning by writing it themselves.

#### 2. Complete HTML Content
- Don't provide all the text content
- Don't provide image tags with URLs
- Don't provide complete card structures

**Why**: Students should learn semantic HTML, proper image tags, and content structure.

#### 3. Working JavaScript
- Don't provide functional carousel code
- Don't provide complete scroll effects

**Why**: JavaScript is a learning objective - they need to write event listeners, DOM manipulation themselves.

#### 4. Advanced Features
- No pre-built animations
- No complex CSS (like fancy-boxes effect)
- No responsive media queries

**Why**: These are learning goals or extension opportunities.

---

## Three Starter Code Options

### Option 1: Minimal (Recommended for Experienced Classes)

**Includes:**
- HTML5 boilerplate only
- Commented placeholders for sections
- Links to empty CSS file

**File**: `STARTER-CODE-MINIMAL.html`

**Pros:**
- Maximum learning
- Students write everything
- No "hand-holding"

**Cons:**
- More time-consuming
- Potential for confusion about structure
- Higher frustration for beginners

**Best for:**
- Students with HTML/CSS background
- Longer assignment timeline
- Focus on full understanding

---

### Option 2: Moderate (Recommended for Most Classes)

**Includes:**
- HTML structure with section placeholders
- CSS variables and basic reset
- Container class
- TODO comments throughout

**File**: `STARTER-CODE-MODERATE.html` + `STARTER-CODE-styles.css`

**Pros:**
- Provides structure without giving away solutions
- Saves time on setup
- Clear guidance via comments
- Students still write all component CSS

**Cons:**
- Less learning about HTML structure
- Some students might rely too much on comments

**Best for:**
- Most introductory/intermediate classes
- 2-3 week assignments
- Balancing learning with time constraints

---

### Option 3: Structured (For Struggling Classes)

**Includes:**
- Everything in Moderate
- Additional helper classes (like `.grid` skeleton)
- More detailed comments
- CSS file sections already organized

**File**: Create by expanding Moderate option

**Pros:**
- Reduces confusion
- Clear file organization
- Less time wasted on structure

**Cons:**
- Less learning about organization
- Might make assignment too easy
- Students might not understand what they're building

**Best for:**
- Struggling students
- Shorter timelines
- When time management is critical

---

## My Recommendation: Moderate Starter Code

### Package Contents:

**1. `index.html`** (Moderate starter)
- HTML5 structure
- Section placeholders with TODO comments
- Semantic HTML hints
- Links to CSS/JS (commented)

**2. `styles.css`** (Moderate starter)
- CSS variables (colors, spacing)
- Basic reset styles
- Container class
- Organized sections with TODO comments
- Empty sections for students to fill

**3. Optional: `README.md`**
- File structure explanation
- Where to add code
- What each section should contain

### What Students Still Write:

✅ All header CSS
✅ All hero section CSS  
✅ All section layouts (Grid/Flexbox)
✅ All card styles
✅ All button styles
✅ All hover effects
✅ All JavaScript
✅ All HTML content

### What Students Get:

✅ Project structure
✅ Color scheme (variables)
✅ File organization
✅ Clear guidance via comments
✅ Time saved on setup

---

## Example Starter Code Structure

```css
/* Students see this structure */
:root {
  /* Colors already defined */
}

/* But they write this themselves */
header {
  /* All header styles */
}

.card {
  /* All card styles */
}
```

---

## Alternative: Progressive Starter Code

For different skill levels:

### Beginner Package:
- More structure
- Some example CSS (commented out)
- Step-by-step comments

### Advanced Package:
- Minimal boilerplate
- Just variables and reset
- No section placeholders

---

## Checklist for Your Starter Code

Before distributing, ensure:

- [ ] No complete component CSS (just structure)
- [ ] CSS variables provided (colors, spacing)
- [ ] Clear TODO comments indicating what to add
- [ ] Basic HTML structure only (no content)
- [ ] File organization is clear
- [ ] Links to CSS/JS are commented (students uncomment)
- [ ] No working JavaScript
- [ ] Comments explain WHY, not just WHAT

---

## Recommended Distribution Strategy

1. **Give students**:
   - `STARTER-CODE-MODERATE.html` (rename to `index.html`)
   - `STARTER-CODE-styles.css` (rename to `styles.css`)
   - Assignment instructions
   - Reference to task files for guidance

2. **Tell them**:
   - "Start with this structure, fill in the TODOs"
   - "You'll write all CSS for components"
   - "Variables are provided to save design time"

3. **Support with**:
   - Task files (TASK-01-HEADER.md, etc.) as references
   - Office hours for questions
   - Examples of similar patterns (not exact solutions)

---

## Sample Instructions to Students

> "You've been given a starter template with:
> - HTML structure with placeholders
> - CSS variables for colors and spacing  
> - Basic reset styles
> 
> Your job is to:
> - Fill in all TODO sections
> - Write CSS for all components (header, cards, etc.)
> - Add JavaScript functionality
> - Complete all HTML content
> 
> The starter code saves you time on setup, but you'll learn by building all the components yourself."

---

## Final Recommendation

**Use the Moderate Starter Code** (`STARTER-CODE-MODERATE.html` + `STARTER-CODE-styles.css`)

**Why it's optimal:**
- ✅ Saves time on setup
- ✅ Provides structure
- ✅ Students still learn core concepts
- ✅ Clear guidance without giving answers
- ✅ Appropriate challenge level
- ✅ Most students can succeed

This balances learning objectives with practical time constraints while ensuring students write the code that teaches them the most important concepts.

