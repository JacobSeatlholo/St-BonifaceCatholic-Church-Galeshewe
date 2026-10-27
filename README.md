# St Boniface Catholic Church — Galeshewe, Kimberley

> *A hundred years of grace in Galeshewe.* — Established 1925 · Centenary celebrated 8 December 2025

The parish website of **St Boniface Catholic Church, Galeshewe, Kimberley** — a parish of the Roman Catholic Diocese of Kimberley, South Africa.

Built as a fast, single-page site with Next.js 16, Tailwind CSS 4 and TypeScript. No database, no tracking, no clutter — just the parish: its story, its worship, its people.

---

## Sections

| Section | What it holds |
| --- | --- |
| **Hero** | Full-bleed photograph of Sunday Mass beneath the mosaic of Christ in glory, with Mass times and address at a glance |
| **Welcome** | A greeting and three anchor facts (1925 · 100 years · 08.12.2025) |
| **Our Story** | The parish narrative with drop cap, pull quote, photo collage and a milestone timeline — the place to grow the parish's history |
| **Our Patron** | St Boniface, bishop and martyr (c. 675–754), with a fact row |
| **Worship** | Weekly Mass schedule, note on feast-day changes, and the six sacraments |
| **Centenary** | The 100th-anniversary story with the original centenary programme cover |
| **Parish Life** | Ministries and groups — altar servers, choir, catechism, sodalities, youth, outreach |
| **Gallery** | Six photographs from parish life with a keyboard-accessible lightbox |
| **Visit** | Address, phone, email, office hours, directions link and diocesan leadership |
| **Footer** | Emblem, navigation and full contact details |

## Quick start

```bash
npm install
npm run dev        # local development
npm run build      # production build
npm run start      # serve the production build
```

Requires Node.js 20 or newer.

## Editing parish information

Parish facts live in **one file**:

```
src/lib/site.ts
```

It contains, clearly labelled:

- **Contact details** — address, phone, email, office hours, directions link
- **Leadership** — bishop and parish priest
- **Gallery image paths** — which photos appear, in what order

> **Important:** Mass times and office hours are currently marked `PLACEHOLDER` and must
> be confirmed with the parish office before the site goes live. Search for `PLACEHOLDER`.

## Three languages

The site speaks **English, Setswana and Afrikaans**. A switcher sits in the navbar
(desktop) and in the mobile menu; the visitor's choice is remembered on their device.

Every sentence on the page — headings, Mass times, sacraments, photo captions, even
the alt text — lives in one dictionary file:

```
src/lib/i18n.ts
```

It is organised in three blocks: `en`, `tn` (Setswana) and `af` (Afrikaans). To correct
a translation, find the wording in the block and edit it; the three blocks mirror each
other line for line.

> **Note:** the Setswana and Afrikaans wording was written with care but should be
> reviewed by a first-language speaker of the parish before launch. Parish-specific
> terms ("Misa", "Kolobetso", "Vormsel"…) follow common South African Catholic usage.

### Replacing photographs

Photographs live in `public/images/`. Replace a file (keep the name) and the site
updates itself. Current photos were taken at the centenary Thanksgiving Mass,
8 December 2025, and belong to the parish.

### The parish emblem

The emblem (St Boniface blessing two children, drawn in a single blue line) appears
in the navbar, the story section and the footer, and is cropped from the official
parish artwork. `public/images/logo-light.jpg` is the full emblem with wordmark.

## Credits

- Photographs, emblem and centenary poster © St Boniface Catholic Church, Galeshewe
- Demo website built by [BusinessHustle](https://businesshustle.co.za)

## Tech notes

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**
- Fonts: Cormorant Garamond (display) and Inter (UI), self-hosted via `next/font`
- Palette drawn from the parish's centenary artwork: parchment, deep liturgical purple, gold
- SEO: metadata, Open Graph image and `Church` JSON-LD schema with the parish address
- Accessibility: semantic landmarks, keyboard-navigable gallery lightbox and mobile menu,
  `prefers-reduced-motion` respected
- No database and no external services — deployable anywhere Next.js runs
  (Vercel, Netlify, a parish VPS…). On Vercel, import the repo and press deploy.

## Repository

Maintained for the parish of St Boniface, Galeshewe.
