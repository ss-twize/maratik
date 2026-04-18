# Maratik Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first single-page selling landing for Marat Deev fishing footwear — pure HTML/CSS/JS, Vercel-ready, with product sliders and two-level buy popup.

**Architecture:** Static site with one `index.html` entry point, separate `css/style.css` and `js/main.js`, SVG placeholders in `assets/images/`. No build tools, no dependencies. All external links and contact details live in a single `LINKS` config object at the top of `main.js` for easy replacement.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JS (ES6+), Google Fonts (Playfair Display + Inter), Vercel static hosting.

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Page structure, all 8 sections, popup markup |
| `privacy.html` | Privacy policy static page |
| `css/style.css` | All styles: variables, reset, layout, components, responsive |
| `js/main.js` | LINKS config, slider, popup, FAQ accordion, smooth scroll, analytics stub |
| `assets/images/placeholder-hero.svg` | Hero section Marat photo placeholder |
| `assets/images/placeholder-marat.svg` | About section Marat photo placeholder |
| `assets/images/placeholder-product-boots-high-*.svg` | 5 slides for high boots (1–5) |
| `assets/images/placeholder-product-boots-low-*.svg` | 5 slides for low boots (1–5) |
| `assets/images/placeholder-product-crocs-*.svg` | 5 slides for crocs (1–5) |

---

## Task 1: Project scaffold + SVG placeholders

**Files:**
- Create: `index.html`
- Create: `privacy.html`
- Create: `css/style.css`
- Create: `js/main.js`
- Create: `assets/images/placeholder-hero.svg`
- Create: `assets/images/placeholder-marat.svg`
- Create: `assets/images/placeholder-product.svg` (reused for all product slides)

- [ ] **Step 1: Create directory structure**

```bash
cd /Users/savelijsidorenko/maratik
mkdir -p css js assets/images
```

- [ ] **Step 2: Create placeholder-hero.svg**

```svg
<!-- assets/images/placeholder-hero.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#D4C9B8"/>
  <text x="400" y="280" font-family="sans-serif" font-size="24" fill="#6B6459" text-anchor="middle">Фото Марата</text>
  <text x="400" y="320" font-family="sans-serif" font-size="16" fill="#6B6459" text-anchor="middle">800 × 600</text>
</svg>
```

- [ ] **Step 3: Create placeholder-marat.svg**

```svg
<!-- assets/images/placeholder-marat.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <rect width="400" height="500" fill="#D4C9B8"/>
  <circle cx="200" cy="180" r="60" fill="#6B6459" opacity="0.4"/>
  <rect x="120" y="270" width="160" height="180" rx="20" fill="#6B6459" opacity="0.3"/>
  <text x="200" y="480" font-family="sans-serif" font-size="14" fill="#6B6459" text-anchor="middle">Фото Марата</text>
</svg>
```

- [ ] **Step 4: Create placeholder-product.svg** (used for all product slides)

```svg
<!-- assets/images/placeholder-product.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <rect width="400" height="500" fill="#F5F5F5"/>
  <ellipse cx="200" cy="290" rx="130" ry="50" fill="#E0E0E0"/>
  <path d="M100 280 Q130 180 200 190 Q270 200 290 250 Q310 280 300 290 Q200 320 100 280Z" fill="#D0D0D0"/>
  <path d="M120 280 Q150 200 200 210 Q250 220 270 255" stroke="#BDBDBD" stroke-width="2" fill="none"/>
  <text x="200" y="440" font-family="sans-serif" font-size="14" fill="#9E9E9E" text-anchor="middle">Фото товара</text>
</svg>
```

- [ ] **Step 5: Create bare-bones index.html**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Марат Деев — Обувь для рыбалки и отдыха</title>
  <link rel="stylesheet" href="css/style.css">
  <!-- METRIKA: вставьте счётчик Яндекс.Метрики здесь -->
</head>
<body>
  <p>scaffold</p>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 6: Create bare-bones style.css**

```css
/* css/style.css */
:root {
  --color-bg: #FAF8F4;
  --color-white: #FFFFFF;
  --color-text: #1A1A18;
  --color-text-secondary: #6B6459;
  --color-accent: #C85A1E;
  --color-accent-hover: #A84A18;
  --color-border: #EDE9E2;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --radius: 8px;
  --shadow: 0 2px 16px rgba(0,0,0,0.07);
  --max-width: 1140px;
  --section-padding: 80px 24px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 16px;
  line-height: 1.6;
}

img { max-width: 100%; display: block; }

a { color: inherit; text-decoration: none; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}
```

- [ ] **Step 7: Create bare-bones main.js**

```js
// js/main.js

// ─── LINKS CONFIG ────────────────────────────────────────────────────────────
// Replace all # values with real URLs before going live.
const LINKS = {
  boots_high: {
    avito:    '#',
    vk:       '#',
    telegram: '#',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать высокие сапоги. Подскажите по наличию и размеру.')
  },
  boots_low: {
    avito:    '#',
    vk:       '#',
    telegram: '#',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать низкие сапоги. Подскажите по наличию и размеру.')
  },
  crocs: {
    avito:    '#',
    vk:       '#',
    telegram: '#',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать кроксы. Подскажите по наличию и размеру.')
  }
};

// ─── ANALYTICS STUB ──────────────────────────────────────────────────────────
// Connect Yandex.Metrika counter in <head>, then ym() calls below will work.
function trackEvent(name) {
  if (typeof ym === 'function') {
    ym(0, 'reachGoal', name); // replace 0 with your counter ID
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Maratik ready');
});
```

- [ ] **Step 8: Commit scaffold**

```bash
cd /Users/savelijsidorenko/maratik
git add .
git commit -m "feat: project scaffold — file structure + placeholders + LINKS config"
```

---

## Task 2: Google Fonts + CSS variables confirmation

**Files:**
- Modify: `index.html` (add Google Fonts link)
- Modify: `css/style.css` (typography base)

- [ ] **Step 1: Add Google Fonts to index.html `<head>`**

Add after `<meta charset>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Add typography base to style.css**

Append to `css/style.css`:
```css
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  line-height: 1.2;
  color: var(--color-text);
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; }
h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 600; margin-bottom: 16px; }
h3 { font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 600; }

p { color: var(--color-text-secondary); margin-bottom: 12px; }

.btn {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 32px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  min-height: 48px;
}

.btn:hover, .btn:focus { background: var(--color-accent-hover); }
.btn:focus { outline: 3px solid var(--color-accent); outline-offset: 2px; }

.btn--ghost {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}

.btn--ghost:hover, .btn--ghost:focus {
  background: var(--color-accent);
  color: #fff;
}

section { padding: var(--section-padding); }

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
  display: block;
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: Google Fonts + typography base + btn component"
```

---

## Task 3: Header (sticky navigation)

**Files:**
- Modify: `index.html` (add `<header>`)
- Modify: `css/style.css` (header styles)

- [ ] **Step 1: Add header markup to index.html** (replace `<p>scaffold</p>`)

```html
<header class="site-header" id="top">
  <div class="container site-header__inner">
    <a href="#top" class="site-header__logo">Марат Деев</a>
    <nav class="site-header__nav" aria-label="Основная навигация">
      <a href="#about">О Марате</a>
      <a href="#catalog">Каталог</a>
      <a href="#faq">FAQ</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <button class="btn site-header__cta" data-product="boots_high" data-buy>Купить</button>
  </div>
</header>

<main>
  <!-- sections go here -->
</main>
```

- [ ] **Step 2: Add header CSS to style.css**

```css
/* ── HEADER ─────────────────────────────────────────────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 248, 244, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 64px;
}

.site-header__logo {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  flex-shrink: 0;
}

.site-header__nav {
  display: flex;
  gap: 24px;
  margin-left: auto;
}

.site-header__nav a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color 0.2s;
}

.site-header__nav a:hover { color: var(--color-accent); }

.site-header__cta {
  padding: 10px 22px;
  font-size: 0.9rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .site-header__nav { display: none; }
  .site-header__logo { font-size: 1rem; }
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: sticky header with nav and CTA"
```

---

## Task 4: Hero section

**Files:**
- Modify: `index.html` (add `<section id="hero">`)
- Modify: `css/style.css`

- [ ] **Step 1: Add hero markup inside `<main>`**

```html
<section class="hero" id="hero">
  <div class="hero__media">
    <img src="assets/images/placeholder-hero.svg" alt="Марат Деев — рыболов-спортсмен" class="hero__img" loading="eager">
  </div>
  <div class="hero__content container">
    <span class="section-label">Лимитированная серия</span>
    <h1 class="hero__title">Обувь для рыбалки и отдыха с характером</h1>
    <p class="hero__subtitle">Лимитированная серия обуви, связанная с Маратом Деевым&nbsp;— рыболовом-спортсменом и автором «Диалогов о рыбалке»</p>
    <button class="btn hero__cta" data-product="boots_high" data-buy>Смотреть каталог</button>
  </div>
</section>
```

- [ ] **Step 2: Add hero CSS**

```css
/* ── HERO ────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
}

.hero__media {
  width: 100%;
  flex: 1;
  min-height: 60vh;
  overflow: hidden;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.hero__content {
  position: relative;
  background: var(--color-bg);
  padding: 40px 24px 48px;
  text-align: center;
}

.hero__title { margin-bottom: 16px; }

.hero__subtitle {
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 32px;
}

.hero__cta { min-width: 200px; }

@media (min-width: 900px) {
  .hero {
    flex-direction: row;
    min-height: 90vh;
  }

  .hero__media {
    width: 55%;
    min-height: 90vh;
    flex: none;
  }

  .hero__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 60px 60px 60px 56px;
    background: var(--color-bg);
  }

  .hero__subtitle { margin-left: 0; margin-right: 0; }
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: hero section with placeholder and responsive layout"
```

---

## Task 5: About Marat section

**Files:**
- Modify: `index.html` (add `<section id="about">`)
- Modify: `css/style.css`

- [ ] **Step 1: Add about markup after hero section**

```html
<section class="about" id="about">
  <div class="container about__inner">
    <div class="about__photos">
      <img src="assets/images/placeholder-marat.svg" alt="Марат Деев" class="about__photo" loading="lazy">
    </div>
    <div class="about__content">
      <span class="section-label">О Марате</span>
      <h2>Марат Деев</h2>
      <p>Рыболов-спортсмен, многократный призёр и победитель коммерческих и любительских соревнований по рыбалке. Продюсер, автор и ведущий телеканала «Диалоги о рыбалке». Ведёт YouTube-канал о рыбалке, путешествиях и практике на воде.</p>
      <ul class="about__facts">
        <li class="about__fact">
          <span class="about__fact-icon" aria-hidden="true">🎣</span>
          <span>Рыболов-спортсмен</span>
        </li>
        <li class="about__fact">
          <span class="about__fact-icon" aria-hidden="true">🏆</span>
          <span>Многократный призёр и победитель соревнований</span>
        </li>
        <li class="about__fact">
          <span class="about__fact-icon" aria-hidden="true">📺</span>
          <span>Автор и ведущий «Диалогов о рыбалке»</span>
        </li>
        <li class="about__fact">
          <span class="about__fact-icon" aria-hidden="true">▶️</span>
          <span>YouTube-канал о рыбалке и путешествиях</span>
        </li>
      </ul>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS**

```css
/* ── ABOUT ───────────────────────────────────────────────────── */
.about { background: var(--color-white); }

.about__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

.about__photo {
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: var(--shadow);
}

.about__facts {
  list-style: none;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.about__fact {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
}

.about__fact-icon { font-size: 1.2rem; }

@media (min-width: 768px) {
  .about__inner { grid-template-columns: 340px 1fr; }
  .about__photo { max-width: 100%; margin: 0; }
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: About Marat section with facts"
```

---

## Task 6: Product catalog — cards with sliders

**Files:**
- Modify: `index.html` (add `<section id="catalog">` with 3 product cards)
- Modify: `css/style.css`

- [ ] **Step 1: Add catalog section markup after about section**

```html
<section class="catalog" id="catalog">
  <div class="container">
    <span class="section-label">Каталог</span>
    <h2>Обувь Марата Деева</h2>
    <p>Лимитированная серия для рыбалки, берега и активного отдыха</p>

    <div class="catalog__grid">

      <!-- ── PRODUCT 1: High boots ─── -->
      <article class="product-card" data-product="boots_high">
        <div class="product-card__slider" data-slider>
          <div class="product-card__slides">
            <img src="assets/images/placeholder-product.svg" alt="Высокие сапоги — вид спереди" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Высокие сапоги — боковой ракурс" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Высокие сапоги — ракурс 3/4" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Высокие сапоги — вид сверху" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Высокие сапоги — подошва" loading="lazy">
          </div>
          <button class="product-card__slider-btn product-card__slider-btn--prev" aria-label="Предыдущее фото">&#8249;</button>
          <button class="product-card__slider-btn product-card__slider-btn--next" aria-label="Следующее фото">&#8250;</button>
          <div class="product-card__dots" aria-hidden="true"></div>
        </div>
        <div class="product-card__body">
          <h3 class="product-card__name">Высокие сапоги</h3>
          <div class="product-card__price">6&nbsp;490&nbsp;₽</div>
          <div class="product-card__sizes">Размеры: 38–46</div>
          <button class="btn product-card__buy" data-product="boots_high" data-buy>Купить</button>
          <p class="product-card__material">Материал: EVA/PVC — лёгкие, тёплые, практичные для рыбалки и берега</p>
        </div>
      </article>

      <!-- ── PRODUCT 2: Low boots ─── -->
      <article class="product-card" data-product="boots_low">
        <div class="product-card__slider" data-slider>
          <div class="product-card__slides">
            <img src="assets/images/placeholder-product.svg" alt="Низкие сапоги — вид спереди" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Низкие сапоги — боковой ракурс" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Низкие сапоги — ракурс 3/4" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Низкие сапоги — вид сверху" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Низкие сапоги — подошва" loading="lazy">
          </div>
          <button class="product-card__slider-btn product-card__slider-btn--prev" aria-label="Предыдущее фото">&#8249;</button>
          <button class="product-card__slider-btn product-card__slider-btn--next" aria-label="Следующее фото">&#8250;</button>
          <div class="product-card__dots" aria-hidden="true"></div>
        </div>
        <div class="product-card__body">
          <h3 class="product-card__name">Низкие сапоги</h3>
          <div class="product-card__price">3&nbsp;990&nbsp;₽</div>
          <div class="product-card__sizes">Размеры: 36–46</div>
          <button class="btn product-card__buy" data-product="boots_low" data-buy>Купить</button>
          <p class="product-card__material">Материал: EVA/PVC — лёгкие, тёплые, практичные для рыбалки и берега</p>
        </div>
      </article>

      <!-- ── PRODUCT 3: Crocs ─── -->
      <article class="product-card" data-product="crocs">
        <div class="product-card__slider" data-slider>
          <div class="product-card__slides">
            <img src="assets/images/placeholder-product.svg" alt="Кроксы — вид спереди" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Кроксы — боковой ракурс" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Кроксы — ракурс 3/4" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Кроксы — вид сверху" loading="lazy">
            <img src="assets/images/placeholder-product.svg" alt="Кроксы — подошва" loading="lazy">
          </div>
          <button class="product-card__slider-btn product-card__slider-btn--prev" aria-label="Предыдущее фото">&#8249;</button>
          <button class="product-card__slider-btn product-card__slider-btn--next" aria-label="Следующее фото">&#8250;</button>
          <div class="product-card__dots" aria-hidden="true"></div>
        </div>
        <div class="product-card__body">
          <h3 class="product-card__name">Кроксы</h3>
          <div class="product-card__price">2&nbsp;490&nbsp;₽</div>
          <div class="product-card__sizes">Размеры: 36–46</div>
          <button class="btn product-card__buy" data-product="crocs" data-buy>Купить</button>
          <p class="product-card__material">Материал: резина — удобство, износостойкость, повседневный формат</p>
        </div>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add catalog + product card CSS**

```css
/* ── CATALOG ─────────────────────────────────────────────────── */
.catalog__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 40px;
}

@media (min-width: 600px) {
  .catalog__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 900px) {
  .catalog__grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── PRODUCT CARD ────────────────────────────────────────────── */
.product-card {
  background: var(--color-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}

/* slider */
.product-card__slider {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #F5F5F5;
}

.product-card__slides {
  display: flex;
  height: 100%;
  transition: transform 0.35s ease;
}

.product-card__slides img {
  min-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.product-card__slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: background 0.2s;
  z-index: 2;
}

.product-card__slider-btn:hover { background: #fff; }

.product-card__slider-btn--prev { left: 8px; }
.product-card__slider-btn--next { right: 8px; }

.product-card__dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.product-card__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  cursor: pointer;
  transition: background 0.2s;
}

.product-card__dot--active { background: #fff; }

/* body */
.product-card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.product-card__name { font-size: 1.1rem; }

.product-card__price {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
}

.product-card__sizes {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.product-card__buy { width: 100%; margin-top: 8px; }

.product-card__material {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin: 0;
  padding-top: 4px;
  border-top: 1px solid var(--color-border);
}
```

- [ ] **Step 3: Add slider JS to main.js** (append inside DOMContentLoaded)

```js
// ─── SLIDERS ─────────────────────────────────────────────────────────────────
document.querySelectorAll('[data-slider]').forEach(slider => {
  const slides = slider.querySelector('.product-card__slides');
  const imgs = slides.querySelectorAll('img');
  const dotsContainer = slider.querySelector('.product-card__dots');
  let current = 0;
  const total = imgs.length;

  // build dots
  imgs.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'product-card__dot' + (i === 0 ? ' product-card__dot--active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    current = (idx + total) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.product-card__dot').forEach((d, i) => {
      d.classList.toggle('product-card__dot--active', i === current);
    });
  }

  slider.querySelector('.product-card__slider-btn--prev')
    .addEventListener('click', () => goTo(current - 1));
  slider.querySelector('.product-card__slider-btn--next')
    .addEventListener('click', () => goTo(current + 1));

  // touch swipe
  let startX = 0;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });
});
```

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css js/main.js
git commit -m "feat: catalog section with 3 product cards and touch-swipe slider"
```

---

## Task 7: Advantages section

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add advantages section after catalog**

```html
<section class="advantages" id="advantages">
  <div class="container">
    <span class="section-label">Почему эта обувь</span>
    <h2>Преимущества</h2>
    <div class="advantages__grid">
      <div class="advantages__item">
        <span class="advantages__icon" aria-hidden="true">👟</span>
        <h3>Фирменный стиль</h3>
        <p>Заметный брендовый дизайн, выделяющийся на берегу и воде</p>
      </div>
      <div class="advantages__item">
        <span class="advantages__icon" aria-hidden="true">🌊</span>
        <h3>Для воды и суши</h3>
        <p>Рыбалка, берег, лодка, база, дача — обувь для любого сценария</p>
      </div>
      <div class="advantages__item">
        <span class="advantages__icon" aria-hidden="true">⚙️</span>
        <h3>Практичные материалы</h3>
        <p>EVA/PVC и резина — лёгкие, прочные, не боятся воды и грязи</p>
      </div>
      <div class="advantages__item">
        <span class="advantages__icon" aria-hidden="true">📲</span>
        <h3>Удобный заказ</h3>
        <p>Через Авито, Telegram, WhatsApp или ВКонтакте — как вам удобнее</p>
      </div>
      <div class="advantages__item">
        <span class="advantages__icon" aria-hidden="true">🔖</span>
        <h3>Лимитированная серия</h3>
        <p>Ограниченный тираж — не массовый маркетплейсный товар</p>
      </div>
      <div class="advantages__item">
        <span class="advantages__icon" aria-hidden="true">🤝</span>
        <h3>Из комьюнити</h3>
        <p>Создана человеком, который сам рыбачит и понимает, что нужно на воде</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add advantages CSS**

```css
/* ── ADVANTAGES ──────────────────────────────────────────────── */
.advantages { background: var(--color-white); }

.advantages__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
}

@media (min-width: 768px) {
  .advantages__grid { grid-template-columns: repeat(3, 1fr); }
}

.advantages__item {
  background: var(--color-bg);
  border-radius: 12px;
  padding: 24px 20px;
  border: 1px solid var(--color-border);
}

.advantages__icon { font-size: 2rem; display: block; margin-bottom: 12px; }

.advantages__item h3 { font-size: 1rem; margin-bottom: 8px; }
.advantages__item p { font-size: 0.875rem; margin: 0; }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: advantages section with 6 items"
```

---

## Task 8: Materials + Sizes sections

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add materials section after advantages**

```html
<section class="materials" id="materials">
  <div class="container">
    <span class="section-label">О товаре</span>
    <h2>Материалы и применение</h2>
    <div class="materials__grid">
      <div class="materials__card">
        <h3>EVA / PVC</h3>
        <p>Лёгкие и практичные материалы, специально подходящие для рыбалки и берега. Не впитывают воду, легко моются, комфортны при длительной носке.</p>
        <ul class="materials__tags">
          <li>Рыбалка</li><li>Берег</li><li>Лодка</li><li>База</li><li>Дача</li>
        </ul>
      </div>
      <div class="materials__card">
        <h3>Резина</h3>
        <p>Износостойкий материал для повседневного формата. Хорошо держит форму, устойчив к механическим воздействиям, подходит для активного использования.</p>
        <ul class="materials__tags">
          <li>Берег</li><li>База</li><li>Дача</li><li>Повседневно</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="sizes" id="sizes">
  <div class="container">
    <span class="section-label">Размеры</span>
    <h2>Доступные размеры</h2>
    <table class="sizes__table">
      <thead>
        <tr><th>Модель</th><th>Размерный ряд</th></tr>
      </thead>
      <tbody>
        <tr><td>Высокие сапоги</td><td>38 — 46</td></tr>
        <tr><td>Низкие сапоги</td><td>36 — 46</td></tr>
        <tr><td>Кроксы</td><td>36 — 46</td></tr>
      </tbody>
    </table>
    <p class="sizes__note">Если сомневаетесь в размере&nbsp;— <button class="btn btn--ghost sizes__contact-btn" data-product="boots_high" data-buy>напишите менеджеру</button></p>
  </div>
</section>
```

- [ ] **Step 2: Add materials + sizes CSS**

```css
/* ── MATERIALS ───────────────────────────────────────────────── */
.materials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
}

@media (min-width: 640px) {
  .materials__grid { grid-template-columns: 1fr 1fr; }
}

.materials__card {
  background: var(--color-white);
  border-radius: 12px;
  padding: 28px 24px;
  border: 1px solid var(--color-border);
}

.materials__card h3 { margin-bottom: 12px; }

.materials__tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.materials__tags li {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

/* ── SIZES ───────────────────────────────────────────────────── */
.sizes { background: var(--color-white); }

.sizes__table {
  width: 100%;
  max-width: 480px;
  border-collapse: collapse;
  margin-top: 32px;
  font-size: 0.95rem;
}

.sizes__table th,
.sizes__table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.sizes__table th {
  font-weight: 600;
  color: var(--color-text);
  font-family: var(--font-heading);
}

.sizes__table td { color: var(--color-text-secondary); }

.sizes__note {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.sizes__contact-btn { padding: 8px 18px; font-size: 0.9rem; min-height: 40px; }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: materials and sizes sections"
```

---

## Task 9: FAQ accordion

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`
- Modify: `js/main.js`

- [ ] **Step 1: Add FAQ section after sizes**

```html
<section class="faq" id="faq">
  <div class="container">
    <span class="section-label">Вопросы и ответы</span>
    <h2>FAQ</h2>
    <div class="faq__list">

      <details class="faq__item">
        <summary class="faq__question">Из какого материала сделана обувь?</summary>
        <div class="faq__answer">
          <p>Высокие и низкие сапоги изготовлены из EVA/PVC — лёгкого и практичного материала, не впитывающего воду. Кроксы выполнены из резины — износостойкого и удобного материала для повседневного использования.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Какие размеры доступны?</summary>
        <div class="faq__answer">
          <p>Высокие сапоги: 38–46. Низкие сапоги: 36–46. Кроксы: 36–46. Если сомневаетесь в размере — напишите менеджеру, поможем с выбором.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Как оформить заказ?</summary>
        <div class="faq__answer">
          <p>Нажмите кнопку «Купить» у нужного товара и выберите удобный способ: через Авито или напрямую через менеджера (ВКонтакте, Telegram, WhatsApp).</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Где лучше заказывать — на Авито или через менеджера?</summary>
        <div class="faq__answer">
          <p>Оба варианта надёжны. Авито удобен, если важна защита сделки через платформу. Менеджер подходит, если хотите быстро уточнить детали или нужна помощь с выбором размера.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Помогут ли с выбором размера?</summary>
        <div class="faq__answer">
          <p>Да. Напишите менеджеру через Telegram, WhatsApp или ВКонтакте — подскажем по размерной сетке и наличию.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Есть ли доставка?</summary>
        <div class="faq__answer">
          <p>Уточните у менеджера — он подскажет актуальные варианты доставки и условия.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Как быстро отвечает менеджер?</summary>
        <div class="faq__answer">
          <p>Обычно в течение нескольких часов в рабочее время. Для срочных вопросов пишите в Telegram или WhatsApp.</p>
        </div>
      </details>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add FAQ CSS**

```css
/* ── FAQ ─────────────────────────────────────────────────────── */
.faq__list {
  margin-top: 40px;
  border-top: 1px solid var(--color-border);
}

.faq__item {
  border-bottom: 1px solid var(--color-border);
}

.faq__item summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
  gap: 16px;
  user-select: none;
}

.faq__item summary::-webkit-details-marker { display: none; }

.faq__item summary::after {
  content: '+';
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-accent);
  flex-shrink: 0;
  transition: transform 0.2s;
}

.faq__item[open] summary::after {
  transform: rotate(45deg);
}

.faq__answer {
  padding: 0 0 20px;
}

.faq__answer p { font-size: 0.95rem; margin: 0; }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: FAQ accordion using native details/summary"
```

---

## Task 10: Footer

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add footer after `</main>`**

```html
<footer class="site-footer" id="contacts">
  <div class="container site-footer__inner">
    <div class="site-footer__brand">
      <span class="site-footer__logo">Марат Деев</span>
      <p class="site-footer__tagline">Обувь для рыбалки и отдыха</p>
    </div>
    <div class="site-footer__contacts">
      <a href="tel:+70000000000" class="site-footer__link">📞 +7 (000) 000-00-00</a>
      <a href="mailto:info@example.com" class="site-footer__link">✉️ info@example.com</a>
      <a href="https://t.me/example" class="site-footer__link" target="_blank" rel="noopener">✈️ Telegram</a>
    </div>
    <div class="site-footer__legal">
      <a href="privacy.html" class="site-footer__link site-footer__link--small">Политика конфиденциальности</a>
      <p class="site-footer__copy">© 2024 Марат Деев. Все права защищены.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Add footer CSS**

```css
/* ── FOOTER ──────────────────────────────────────────────────── */
.site-footer {
  background: var(--color-text);
  color: rgba(255,255,255,0.75);
  padding: 48px 24px;
  margin-top: auto;
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .site-footer__inner { grid-template-columns: 1fr 1fr 1fr; align-items: start; }
}

.site-footer__logo {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  display: block;
  margin-bottom: 8px;
}

.site-footer__tagline { font-size: 0.85rem; margin: 0; color: rgba(255,255,255,0.5); }

.site-footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.site-footer__link {
  color: rgba(255,255,255,0.75);
  font-size: 0.9rem;
  transition: color 0.2s;
  display: inline-block;
}

.site-footer__link:hover { color: #fff; }

.site-footer__link--small { font-size: 0.8rem; }

.site-footer__legal { display: flex; flex-direction: column; gap: 8px; }

.site-footer__copy { font-size: 0.8rem; margin: 0; color: rgba(255,255,255,0.4); }
```

- [ ] **Step 3: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: footer with contacts and legal links"
```

---

## Task 11: Buy popup (two-level)

**Files:**
- Modify: `index.html` (popup markup before `</body>`)
- Modify: `css/style.css`
- Modify: `js/main.js`

- [ ] **Step 1: Add popup markup before `</body>`**

```html
<!-- BUY POPUP -->
<div class="popup-overlay" id="buyPopup" role="dialog" aria-modal="true" aria-label="Купить товар" hidden>
  <div class="popup">
    <button class="popup__close" id="popupClose" aria-label="Закрыть">&#10005;</button>

    <!-- Level 1 -->
    <div class="popup__level" id="popupLevel1">
      <h3 class="popup__title">Как хотите заказать?</h3>
      <p class="popup__subtitle" id="popupProductName"></p>
      <div class="popup__actions">
        <button class="btn popup__btn-avito" id="popupAvitoBtn">
          Заказать на Авито
        </button>
        <button class="btn btn--ghost popup__btn-manager" id="popupManagerBtn">
          Заказать через менеджера
        </button>
      </div>
    </div>

    <!-- Level 2 -->
    <div class="popup__level popup__level--hidden" id="popupLevel2">
      <button class="popup__back" id="popupBack">&#8592; Назад</button>
      <h3 class="popup__title">Выберите мессенджер</h3>
      <p class="popup__subtitle">Мы ответим и поможем оформить заказ</p>
      <div class="popup__actions popup__actions--column">
        <a class="btn popup__btn-vk" id="popupVkBtn" target="_blank" rel="noopener">ВКонтакте</a>
        <a class="btn popup__btn-tg" id="popupTgBtn" target="_blank" rel="noopener">Telegram</a>
        <a class="btn popup__btn-wa" id="popupWaBtn" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Add popup CSS**

```css
/* ── POPUP ───────────────────────────────────────────────────── */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 200;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  animation: fadeIn 0.2s ease;
}

@media (min-width: 520px) {
  .popup-overlay { align-items: center; padding: 24px; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.popup {
  background: var(--color-white);
  border-radius: 16px 16px 0 0;
  padding: 32px 24px 40px;
  width: 100%;
  max-width: 420px;
  position: relative;
  animation: slideUp 0.25s ease;
}

@media (min-width: 520px) {
  .popup { border-radius: 16px; padding: 40px 36px; }
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

.popup__close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.popup__close:hover { background: var(--color-bg); }

.popup__title { margin-bottom: 6px; font-size: 1.2rem; }

.popup__subtitle { font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 24px; }

.popup__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.popup__level--hidden { display: none; }

.popup__back {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 500;
  padding: 0;
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.popup__btn-vk  { background: #0077FF; }
.popup__btn-vk:hover  { background: #005FCC; }
.popup__btn-tg  { background: #27A7E7; }
.popup__btn-tg:hover  { background: #1A8EC2; }
.popup__btn-wa  { background: #25D366; }
.popup__btn-wa:hover  { background: #1DAE52; }
```

- [ ] **Step 3: Add popup JS to main.js** (append inside DOMContentLoaded)

```js
// ─── POPUP ───────────────────────────────────────────────────────────────────
const popup        = document.getElementById('buyPopup');
const level1       = document.getElementById('popupLevel1');
const level2       = document.getElementById('popupLevel2');
const productLabel = document.getElementById('popupProductName');
const avitoBtn     = document.getElementById('popupAvitoBtn');
const vkBtn        = document.getElementById('popupVkBtn');
const tgBtn        = document.getElementById('popupTgBtn');
const waBtn        = document.getElementById('popupWaBtn');

const PRODUCT_NAMES = {
  boots_high: 'Высокие сапоги',
  boots_low:  'Низкие сапоги',
  crocs:      'Кроксы'
};

function openPopup(productKey) {
  const cfg = LINKS[productKey];
  if (!cfg) return;

  // populate level 1
  productLabel.textContent = PRODUCT_NAMES[productKey] || '';
  avitoBtn.onclick = () => {
    trackEvent('buy_avito_' + productKey);
    window.open(cfg.avito, '_blank', 'noopener');
  };

  // populate level 2 links
  vkBtn.href = cfg.vk;
  tgBtn.href = cfg.telegram + '?text=' + cfg.message;
  waBtn.href = 'https://wa.me/' + cfg.whatsapp.replace(/\D/g, '') + '?text=' + cfg.message;

  vkBtn.onclick = () => trackEvent('buy_vk_' + productKey);
  tgBtn.onclick = () => trackEvent('buy_tg_' + productKey);
  waBtn.onclick = () => trackEvent('buy_wa_' + productKey);

  // show popup at level 1
  level1.classList.remove('popup__level--hidden');
  level2.classList.add('popup__level--hidden');
  popup.hidden = false;
  document.body.style.overflow = 'hidden';
  trackEvent('popup_open_' + productKey);
}

function closePopup() {
  popup.hidden = true;
  document.body.style.overflow = '';
}

// open from any [data-buy] button
document.querySelectorAll('[data-buy]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.product || 'boots_high';
    openPopup(key);
  });
});

// manager branch
document.getElementById('popupManagerBtn').addEventListener('click', () => {
  level1.classList.add('popup__level--hidden');
  level2.classList.remove('popup__level--hidden');
});

// back
document.getElementById('popupBack').addEventListener('click', () => {
  level2.classList.add('popup__level--hidden');
  level1.classList.remove('popup__level--hidden');
});

// close
document.getElementById('popupClose').addEventListener('click', closePopup);
popup.addEventListener('click', e => { if (e.target === popup) closePopup(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
```

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css js/main.js
git commit -m "feat: two-level buy popup with Avito / VK / Telegram / WhatsApp"
```

---

## Task 12: SEO meta tags + OG + favicon

**Files:**
- Modify: `index.html` (head section)

- [ ] **Step 1: Replace the `<head>` block**

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Марат Деев — Обувь для рыбалки и отдыха</title>
  <meta name="description" content="Лимитированная серия рыболовной обуви, связанная с Маратом Деевым — рыболовом-спортсменом и автором «Диалогов о рыбалке». Высокие сапоги, низкие сапоги, кроксы. Заказ через Авито и мессенджеры.">

  <!-- OG -->
  <meta property="og:title" content="Марат Деев — Обувь для рыбалки и отдыха">
  <meta property="og:description" content="Лимитированная серия обуви от рыболова-спортсмена и автора «Диалогов о рыбалке».">
  <meta property="og:type" content="website">
  <meta property="og:image" content="assets/images/placeholder-hero.svg">
  <meta property="og:locale" content="ru_RU">

  <!-- Favicon placeholder -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23C85A1E'/><text x='16' y='22' font-size='18' text-anchor='middle' fill='white'>М</text></svg>">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/style.css">

  <!-- METRIKA: вставьте счётчик Яндекс.Метрики здесь -->
</head>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: SEO meta, OG tags, inline SVG favicon"
```

---

## Task 13: Privacy policy page

**Files:**
- Modify: `privacy.html`

- [ ] **Step 1: Write privacy.html**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Политика конфиденциальности — Марат Деев</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    .privacy-page { max-width: 720px; margin: 0 auto; padding: 60px 24px; }
    .privacy-page h1 { margin-bottom: 32px; }
    .privacy-page h2 { margin-top: 32px; margin-bottom: 12px; font-size: 1.2rem; }
    .privacy-page p, .privacy-page li { font-size: 0.95rem; color: var(--color-text-secondary); }
    .privacy-page ul { padding-left: 20px; }
    .privacy-back { display: inline-block; margin-bottom: 24px; color: var(--color-accent); font-weight: 500; }
  </style>
</head>
<body>
  <div class="privacy-page">
    <a href="index.html" class="privacy-back">← На главную</a>
    <h1>Политика конфиденциальности</h1>
    <p>Дата последнего обновления: 2024 г.</p>

    <h2>1. Общие положения</h2>
    <p>Настоящий сайт является информационным ресурсом для знакомства с продукцией. Сайт не собирает персональные данные пользователей через формы заказа — все заказы оформляются через внешние платформы (Авито, мессенджеры).</p>

    <h2>2. Какие данные могут обрабатываться</h2>
    <p>При посещении сайта могут автоматически собираться технические данные: IP-адрес, тип браузера, страницы просмотра. Данные используются исключительно для статистики (Яндекс.Метрика) и улучшения работы сайта.</p>

    <h2>3. Cookies</h2>
    <p>Сайт может использовать cookies для аналитики. Продолжая использовать сайт, вы соглашаетесь с их использованием. Вы можете отключить cookies в настройках браузера.</p>

    <h2>4. Передача данных третьим лицам</h2>
    <p>Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p>

    <h2>5. Контакты</h2>
    <p>По вопросам конфиденциальности: info@example.com</p>
  </div>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add privacy.html
git commit -m "feat: privacy policy page"
```

---

## Task 14: Mobile polish + final responsive pass

**Files:**
- Modify: `css/style.css` (append mobile overrides)

- [ ] **Step 1: Append mobile-specific overrides to style.css**

```css
/* ── MOBILE FINAL PASS ───────────────────────────────────────── */
@media (max-width: 480px) {
  :root { --section-padding: 52px 20px; }

  h1 { font-size: 1.85rem; }
  h2 { font-size: 1.4rem; }

  .advantages__grid { grid-template-columns: 1fr; }

  .catalog__grid { gap: 20px; }

  .product-card__price { font-size: 1.25rem; }

  .popup { padding: 28px 20px 36px; }
}

/* Ensure tap targets are at least 44px */
button, a, summary { min-height: 44px; }
.product-card__dot { min-height: unset; }

/* Smooth scroll offset for sticky header */
[id] { scroll-margin-top: 72px; }
```

- [ ] **Step 2: Final visual check list**

Open `index.html` with a local server (`python3 -m http.server 8080` or VS Code Live Server) and verify:
- [ ] Header sticks on scroll
- [ ] Hero shows placeholder + text overlaid correctly on mobile
- [ ] All 3 product sliders swipe on touch
- [ ] Each "Купить" opens popup
- [ ] Popup level 1 → Авито link; level 1 → Менеджер → level 2 → 3 channels
- [ ] Escape and overlay-click close popup
- [ ] FAQ items expand/collapse
- [ ] Footer links present
- [ ] Privacy page loads and back link works

- [ ] **Step 3: Final commit**

```bash
git add css/style.css
git commit -m "feat: mobile polish, tap target fixes, scroll-margin for sticky header"
```

---

## Task 15: Push to GitHub

- [ ] **Step 1: Push all commits**

```bash
cd /Users/savelijsidorenko/maratik
git remote -v   # confirm remote is https://github.com/ss-twize/maratik.git
git push -u origin main
```

- [ ] **Step 2: Confirm on GitHub**

Visit `https://github.com/ss-twize/maratik` — all files visible in repo.

---

## Self-Review Against Spec

| Spec requirement | Task covering it |
|---|---|
| Sticky header + CTA Купить | Task 3 |
| Hero с Маратом | Task 4 |
| О Марате + 4 факта | Task 5 |
| 3 товара с ценами, размерами, слайдером | Task 6 |
| 6 преимуществ | Task 7 |
| Материалы + сценарии | Task 8 |
| Размеры таблицей | Task 8 |
| FAQ аккордеон 7 вопросов | Task 9 |
| Футер с телефоном, email, Telegram | Task 10 |
| Попап 2 уровня: Авито / Менеджер | Task 11 |
| 3 канала менеджера: ВК / TG / WA | Task 11 |
| Автотекст в мессенджерах | Task 11 |
| LINKS config для замены ссылок | Task 1 |
| SEO title, meta, OG, favicon | Task 12 |
| Политика конфиденциальности | Task 13 |
| Яндекс.Метрика комментарий | Task 1 |
| Analytics trackEvent заглушка | Task 1 |
| Мобильная адаптация | Tasks 3–14 |
| Vercel-ready (нет сборщика) | All |
| Пуш в GitHub | Task 15 |
