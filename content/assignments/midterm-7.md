---
title: "7. Forests in Cities Network"
date: "2025-11-03"
type: "midterm project"
draft: 0
excluded: true
---

# Exercise 7: Section 5 (Forests in Cities Network)

<img src="/fall2025/images/midterm-project/section5.png" class="screenshot-lg" />

**Folder:** `07_section5/`  
**Files:** `index.html`, `section5.css`

## HTML Structure (`index.html`)

Create a section with background image and stacked cards:

```html
<section id="section-5">
    <div class="container">
        <h2 class="heading-1 mega">Forests in <br>Cities network</h2>
        <div class="cards">
            <a class="btn-container card" href="https://naturalareasnyc.org/forests-in-cities-network/" target="">
                <article>
                    <h3 class="heading-4">What is Forests in Cities?</h3>
                    <p class="large">We created the FiC network in 2019 to advance healthy forested natural areas across America. By nurturing a network of interdisciplinary experts from 26 cities, together we advance urban forest science and practice while advocating for increased resources and support for our cities' forests.</p>
                    <span class="btn icon arrow">
                        <span class="accessibility">FiC</span>
                    </span>
                </article>
            </a>
            <!-- Second card: Explore the Resource Library -->
        </div>
    </div>
</section>
```

## CSS Solution (`section5.css`)

### Part 1: Section with Background

Set up the section with background image positioned at bottom:

```css
#section-5 {
  background-image: url(../images/section-5-bkg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left bottom;
  padding-top: 20vw; /* Viewport width units for responsive spacing */
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Content at bottom */
}

/* Two-column container */
#section-5 .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: flex-end;
  border-bottom: 1px solid white;
}
```

### Part 2: Heading and Cards Container

Style the heading and cards stack:

```css
#section-5 .heading-1 {
  color: white; /* White text on dark background */
  font-size: calc(60rem / 16);
  letter-spacing: -1.4px;
  line-height: calc(68 / 60);
}

.mega {
  font-size: 4.3rem;
  line-height: 1em;
  letter-spacing: 0;
}

/* Cards container - stacked vertically */
#section-5 .cards {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: flex-end;
  border-bottom: 1px solid white;
  padding-bottom: 2rem;
}
```

### Part 3: Card Styles

Style the white cards:

```css
.card {
  display: flex;
  background: white;
  transform: translate3d(0, 0, 0);
  transition: all 0.25s ease;
}

a.card {
  text-decoration: none;
  color: var(--black);
}

.card:hover,
a.card:hover {
  box-shadow: 8px 24px 40px 0px rgba(0, 0, 0, 0.06);
  color: var(--black);
}

.card article {
  padding: 2rem;
  position: relative; /* For absolute button positioning */
}

/* Arrow button positioned in card */
a.card .btn {
  bottom: 10px;
  position: absolute;
  right: 10px;
}

.card:hover .btn.icon.arrow {
  transform: translateX(4px);
}
```

### Part 4: Responsive Styles

Remove background on mobile and change heading color:

```css
@media screen and (max-width: 1024px) {
  #section-5 {
    padding-top: 16vw;
    background: none; /* Remove background */
  }

  #section-5 .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  #section-5 .heading-1.mega {
    font-size: 3rem;
    text-align: center;
    color: black; /* Change to black on light background */
  }

  #section-5 .cards {
    align-items: stretch;
  }
}

@media screen and (max-width: 768px) {
  #section-5 {
    padding-top: 16vw;
    background: none;
  }

  #section-5 .container {
    gap: 1.5rem;
    padding: 0 20px;
  }

  #section-5 .heading-1.mega {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  #section-5 .cards {
    row-gap: 1.5rem;
  }

  #section-5 .card article {
    padding: 1.5rem;
  }

  #section-5 .heading-4 {
    font-size: 1.1rem;
  }

  #section-5 .large {
    font-size: 16px;
  }
}
```

## Key Takeaways

1. **Background Positioning**: Use `background-position: left bottom` to anchor background at bottom-left
2. **Viewport Units**: Use `20vw` for responsive padding that scales with viewport
3. **Flex Direction**: Use `flex-direction: column` to stack cards vertically
4. **Background Removal**: Remove background image on mobile for better performance
5. **Color Changes**: Adjust text color on mobile when background changes (white → black)

[← Back to Midterm Project Index](./midterm)
