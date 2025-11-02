# Task 2: Make Section 1 (Hero & Introduction)

## Objective
Create a full-screen hero section with background image and an introduction section with video.

## Part A: Hero Section

### HTML Structure

Add after the `</header>` tag:

```html
<main id="main">
    <section id="hero" class="hero hero-photo-bkg style1 color-white"
        style="background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/NYC-Natural-Areas-R62-5942.jpg)">
        <div class="container grid">
            <article>
                <h1 class="mega">
                    Healthy, resilient natural areas for all
                </h1>
                <p class="xlarge">We champion and protect New York City's 20,000 acres of forests and wetlands to
                    create a sustainable future here and across the nation.
                    <a href="https://naturalareasnyc.org" target="_blank">https://naturalareasnyc.org</a>
                </p>
                <a class="jump-arrow" href="#section-1">
                    <span class="accessibility">Jump to first section</span>
                </a>
            </article>
        </div>
        <div class="mobile-only"
            style="background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/NYC-Natural-Areas-R62-5942-1024x683.jpg)">
        </div>
    </section>
```

### CSS Styles

```css
/* ============================================
   HERO SECTION
   ============================================ */

.hero {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  color: white;
  background-image: url(https://naturalareasnyc.org/wp-content/uploads/2023/12/NYC-Natural-Areas-R62-5942.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #222;
  -webkit-font-smoothing: antialiased;
}

.hero:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(44deg, rgba(15, 16, 16, 0.5) 37.73%, rgba(15, 16, 16, 0) 52.35%);
}

.hero:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(180deg, rgba(15, 16, 16, 0.7) 11.98%, rgba(15, 16, 16, 0) 76.69%);
}

.hero h1 {
  font-size: 4.3rem;
  line-height: 1em;
  text-align: left;
  margin-top: 250px;
  max-width: 80vw;
  letter-spacing: 0;
}

.hero a,
.hero a:visited {
  color: white;
  text-decoration: none;
}

.hero a:hover {
  text-decoration: underline;
}

.hero .jump-arrow {
  display: block;
  width: 26px;
  height: 30px;
  margin-top: var(--text-spacing-medium);
  background: url(//naturalareasnyc.org/wp-content/themes/studio-simpatico/svgs/arrow-down.svg) no-repeat;
  transition: all 0.2s ease-in-out;
}

.hero .jump-arrow:hover {
  transform: translateY(5px);
}
```

## Part B: Section 1 - Introduction

### HTML Structure

Add after the hero section:

```html
<section id="section-1" class="panel">
    <div class="container-off">
        <div class="media">
            <a class="play-video play-iframe" href="https://www.youtube.com/watch?v=dn75qhZWbh4">
                <div class="cover-image">
                    <img width="1024" height="573"
                        src="https://naturalareasnyc.org/wp-content/uploads/2024/06/Home-Page-Video-Shot-1024x573.png"
                        class="attachment-large size-large" alt="" loading="lazy" decoding="async">
                </div>
                <video muted="" autoplay="" loop="" playsinline="">
                    <source src="https://www.youtube.com/watch?v=dn75qhZWbh4" type="video/mp4">
                    Sorry, your browser doesn't support embedded videos.
                </video>
                <span class="play-button">
                    <span class="btn icon large">
                        <svg role="presentation" class="svg-inline--fa fa-play" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512">
                            <path d="M384 256L0 32V480L384 256z"></path>
                        </svg>
                    </span>
                    Watch Video
                </span>
            </a>
        </div>
    </div>
    <article class="content-styles">
        <h2 class="eyebrow">Who are we?</h2>
        <h3 class="heading-4">The Natural Areas Conservancy strives to deepen the connection between people and
            nature in NYC by increasing access, providing education, and building the parks workforce. Through
            research, partnerships, and advocacy, we ensure that urban natural areas are healthy and thriving
            and that their benefits reach all New Yorkers.
        </h3>
    </article>
</section>
```

### CSS Styles

```css
/* ============================================
   SECTIONS
   ============================================ */

#section-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  align-items: self-start;
}

#section-1 .media {
  max-width: 50vw;
  aspect-ratio: 5 / 4;
  margin-top: 80px;
  margin-left: 80px;
}

#section-1 h2 {
  color: var(--matcha-green);
  margin-bottom: var(--text-spacing-xsmall);
}

.content-styles {
  background-color: #26281e;
  color: white;
  padding: 80px 140px;
  margin-left: -100px;
}

.panel {
  padding: 50px;
  background-color: #f4f2ef;
}

.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.media {
  position: relative;
}

.media .play-button {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;
  left: 24px;
  gap: 14px;
  font-size: calc(20rem / 16);
  font-weight: 700;
  line-height: calc(28 / 20);
  color: white;
  z-index: 2;
}
```

## Key Concepts

### 1. `height: 100vh`
- `vh` = viewport height
- `100vh` = 100% of viewport height
- Creates full-screen hero section

### 2. CSS Gradients with Pseudo-elements
- `:before` and `:after` create overlay layers
- `linear-gradient()` creates smooth color transitions
- Used for darkening/lightening background images

### 3. CSS Grid (Section 1)
- `grid-template-columns: 1fr 1fr` creates two equal columns
- `fr` = fraction unit (flexible sizing)

### 4. Aspect Ratio
- `aspect-ratio: 5 / 4` maintains image proportions
- Prevents image distortion

### 5. Object-fit
- `object-fit: cover` fills container while maintaining aspect ratio
- Similar to `background-size: cover` for images

## Testing Checklist

- [ ] Hero section fills entire viewport
- [ ] Background image displays correctly
- [ ] Text is readable over background
- [ ] Jump arrow link works (smooth scroll)
- [ ] Section 1 has two-column layout
- [ ] Video thumbnail displays with play button overlay
- [ ] Content panel has dark background with white text

## Next Steps

After completing this task, move on to Task 3: Make Section 2.

