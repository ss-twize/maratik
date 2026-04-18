# Maratik Landing Page — Design Spec
**Date:** 2026-04-18  
**Repo:** ss-twize/maratik  
**Stack:** HTML + CSS + JS, no build tools, Vercel-ready

---

## 1. Project Goal

Adaptive single-page selling landing for fishing footwear associated with Marat Deev. Primary goal: convert visitors to orders via Avito or manager (VK/Telegram/WhatsApp).

---

## 2. File Structure

```
maratik/
├── index.html
├── privacy.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── placeholder-hero.svg
        ├── placeholder-marat.svg
        └── placeholder-product.svg
```

---

## 3. Visual System

- **Background:** `#FAF8F4` (warm cream)
- **Block backgrounds:** `#FFFFFF`
- **Primary text:** `#1A1A18`
- **Secondary text:** `#6B6459`
- **Accent (buttons/links):** `#C85A1E` (warm orange)
- **Borders/dividers:** `#EDE9E2`
- **Headings font:** Playfair Display (Google Fonts)
- **Body font:** Inter (Google Fonts)
- Style: clean minimalism, generous padding, light shadows

---

## 4. Navigation (sticky header)

- Logo left: text `Марат Деев`
- Desktop right: anchor links `О Марате · Каталог · FAQ · Контакты` + orange `Купить` button
- Mobile: logo + `Купить` button only (no burger — single page)

---

## 5. Page Sections

### Block 1 — Hero
- Full-width, Marat photo placeholder (1:1 or 16:9 on desktop)
- H1: `Обувь для рыбалки и отдыха с характером`
- Subtitle: `Лимитированная серия обуви, связанная с Маратом Деевым — рыболовом-спортсменом и автором "Диалогов о рыбалке"`
- CTA button: `Купить`

### Block 2 — О Марате
- 1–2 photo placeholders
- Short text + 4 facts:
  1. Рыболов-спортсмен
  2. Многократный призер и победитель соревнований
  3. Автор и ведущий «Диалогов о рыбалке»
  4. YouTube-канал о рыбалке и путешествиях

### Block 3 — Каталог (3 products)

| | Высокие сапоги | Низкие сапоги | Кроксы |
|---|---|---|---|
| Цена | 6 490 ₽ | 3 990 ₽ | 2 490 ₽ |
| Размеры | 38–46 | 36–46 | 36–46 |
| Материал | EVA/PVC | EVA/PVC | Резина |

Each card: photo slider (5 placeholder images, 4:5 ratio, white bg), name, price, sizes, `Купить` button, material note below.

### Block 4 — Преимущества
6 items with icons:
1. Заметный фирменный стиль
2. Для рыбалки, берега, воды и отдыха
3. Практичные материалы
4. Заказ через привычные площадки
5. Лимитированная серия
6. Связь с рыболовным комьюнити

### Block 5 — Материалы
Two columns: EVA/PVC (лёгкость, практичность, рыбалка и берег) + Резина (удобство, износостойкость, повседневный формат). Scenarios: рыбалка, база, берег, лодка, дача.

### Block 6 — Размеры
Simple table: high boots 38–46, low boots 36–46, crocs 36–46. CTA text: "Если сомневаетесь — напишите менеджеру".

### Block 7 — FAQ (accordion)
7 questions from spec: material, sizes, how to order, Avito vs manager, size help, delivery, response time.

### Block 8 — Footer
Phone placeholder, email placeholder, Telegram placeholder, brand name, privacy policy link.

---

## 6. Buy Popup Logic

**Level 1** (per product):
- `Заказать на Авито` → product-specific Avito link
- `Заказать через менеджера` → opens Level 2

**Level 2**:
- `ВКонтакте` → VK product page link
- `Telegram` → Telegram chat with pre-filled message
- `WhatsApp` → WhatsApp chat with pre-filled message

**Pre-filled messages:**
- Высокие сапоги: `Здравствуйте, хочу заказать высокие сапоги. Подскажите по наличию и размеру.`
- Низкие сапоги: `Здравствуйте, хочу заказать низкие сапоги. Подскажите по наличию и размеру.`
- Кроксы: `Здравствуйте, хочу заказать кроксы. Подскажите по наличию и размеру.`

All links are `#` placeholders — replace in `js/main.js` in the `LINKS` config object at the top of the file.

Popup close: × button, click outside, Escape key.

---

## 7. Technical

- Pure HTML/CSS/JS, zero dependencies
- Mobile-first, responsive for desktop
- Semantic HTML5 tags
- Images: `<img loading="lazy">`, `alt` attributes set
- `<title>`, `<meta description>`, OG tags, favicon placeholder
- `privacy.html` — standard privacy policy page
- Yandex.Metrika: `<!-- METRIKA: вставьте счётчик здесь -->` comment in `<head>`
- Analytics events stub in `main.js`: `trackEvent()` function, no-op until Metrika is connected

---

## 8. Decisions

| Question | Decision |
|---|---|
| Brand name | Марат Деев (text logo) |
| Product links | `#` placeholders, config object in main.js |
| Product photos | SVG placeholders (grey + shoe icon) |
| Yandex.Metrika | Comment placeholder only |
| Deploy | Code in repo only, Vercel-ready |
| Payment/delivery block | Not a separate large section |
| Sizes | Ranges only, no cm grid |
