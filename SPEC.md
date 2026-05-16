# SPEC.md — Tal Cohen Portfolio

> What we're building. Direction locked: **"Baseline"** (editorial / quiet-confidence, type-led, tennis-scoring strip as signature interaction).

---

## 1. Sitemap

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, intro, four case-study previews, About teaser, contact CTA |
| `/work/ollie` | Case study | Ollie — Olympic athlete connection app |
| `/work/mira` | Case study | Mira — Family Plant smart object + app (combined Part 1 + Part 2) |
| `/work/mates-and-matches` | Case study | Mates & Matches — beginner-safe social sport for newcomers |
| `/work/vamos-bites` | Case study | Vamos Bites — Rafa Nadal chocolate set + laser-cut packaging |
| `/about` | About | Long-form bio, tennis-to-design story, skills, tools, three-continents device, **Download CV** button |
| `/cv/tal-cohen-cv.pdf` | Static asset | Placeholder PDF until real CV is dropped in |
| `/404` | Error | Quiet, in-register 404 |

No standalone `/contact` page — contact is integrated into the home footer + About page (email, LinkedIn). One less route, one less click.

---

## 2. Page-by-page content and sections

### 2.1 Home (`/`)

| Section | Content |
|---|---|
| **Nav** (sticky, thin) | Wordmark `Tal Cohen` left · `Work · About · Email` right · `Open to work` pill far right (sage dot + label) |
| **Hero** | Oversized Fraunces display: `UX/UI designer working across three continents.` Set in two lines, ragged right. Below, one line of Departure Mono: `Sydney · Available for full-time roles · 2026`. No image. |
| **Selected Work** | Section label in Departure Mono: `SELECTED WORK / 2024–2025`. Four project rows, each row is a card: thumbnail left (or right, alternating), title + one-line summary + Year · Role · Tools metadata right. Hover scales image 1.00 → 1.02. Whole row is the link |
| **About teaser** | One paragraph of Fraunces body prose (~50 words) — the bio condensed. Link: `Read more →` |
| **Contact CTA** | Large Fraunces line: `Let's talk.` Below: email + LinkedIn + a small mono line `Sydney · open to relocation`. Year/copyright at footer bottom |

### 2.2 Case-study pages (`/work/[slug]`)

Consistent skeleton across all four — see §3 below.

### 2.3 About (`/about`)

| Section | Content |
|---|---|
| **Trilingual hello** | Top of page, 11px Departure Mono: `Hola · Hello · G'day` |
| **Long-form bio** | Fraunces display intro (~3 lines), then PP Neue Montreal body (~250 words). Covers the tennis-to-design transition, three continents, coaching → collaboration, designer-who-codes |
| **Now / Currently** | Short bulleted mono list: location, role focus, what you're reading or working on |
| **Skills** | Two-column list — `Design` (UX research, IA, wireframing, prototyping, design systems, accessibility) and `Build` (HTML, CSS, JavaScript, React basics, Astro) |
| **Tools** | Mono row: `Figma · Blender · Fusion 360` (project-dependent) |
| **Education** | One line: `B. Design Computing, University of Sydney` (confirm with user) |
| **Download CV** | Sage-bordered button. Wired to `/cv/tal-cohen-cv.pdf`. If file 404s, button still renders but shows a quiet `(coming soon)` |
| **Contact** | Email + LinkedIn |

---

## 3. Case-study structure (consistent across all four)

| # | Section | What's in it |
|---|---|---|
| 1 | **Hero** | Project name (oversized Fraunces) + one-line summary. No image — type does the work. Below the title, the **Sticky Meta** appears for the first time: Role · Year · Tools · Stage · Outcome (HD) |
| 2 | **Scoring strip** | Pinned thin bar appearing on scroll: `15 · 30 · 40 · GAME` mapping to (Outcome · Problem · Process · Final). Doubles as scroll progress indicator |
| 3 | **Outcome up front** | Two short paragraphs: what changed, what was shipped, the grade. *Comes before* the process |
| 4 | **Problem & user** | Who, what, why it mattered. Pulls quote from research where strong |
| 5 | **Research** | Methods (think-aloud, SUS, interviews, etc.), participant count, key insights as numbered items |
| 6 | **Process** | Sketches → low-fi → mid-fi → hi-fi. Visual evidence (cropped from existing decks), with decisions and tradeoffs called out. For Vamos Bites: **Stage Markers** for Module A · Module B · Module C · Final Render. For Mira: **Stage Markers** for Part 1 (group) and Part 2 (solo refinement) |
| 7 | **Final design** | Hi-fi screens, prototypes, mockups in context. For Ollie and Mira, an **embedded live Figma prototype** (iframe) sits here |
| 8 | **Reflection** | Short — what you'd do differently, what you learned. PP Neue Montreal body |
| 9 | **Next project** | Quiet handoff: `Next ↗ Mira` (or whichever follows in the sequence) — full-width clickable area at page bottom |

**Sticky Meta** (right-rail on desktop ≥1024px, inline below hero on tablet/mobile) is *always* visible during sections 3–8. Contains: Role · Year · Tools · Stage · Outcome.

---

## 4. Per-project content notes

### Ollie
- Year: 2024 (Aug–Nov)
- Role: UX/UI design, research, prototyping & front-end · team of three
- Tools: Figma
- Stage: Concept · 2 hi-fi iterations
- Outcome: HD
- Hero summary: `An omni-channel app and watch experience helping Olympic athletes connect across cultures and competition.`
- SUS scores: 78.5 → 88 → 85 → 87 (chart, simple bars in `--clay`)
- Live Figma prototype embedded

### Mira (combined Part 1 + Part 2)
- Year: 2025 (Feb–Jun)
- Role: UX/UI design, research, prototyping · team of three (Part 1); solo refinement (Part 2)
- Tools: Figma · physical prototyping
- Stage: Concept · group hi-fi · solo refinement
- Outcome: HD
- Hero summary: `A smart object and reflective app helping families stay emotionally close — across distance, generations, and the quiet space between visits.`
- Stage markers: `PART 1 / GROUP CONCEPT` then `PART 2 / SOLO REFINEMENT`
- Key Part-2 moment to call out: replacing the unrecognised speech bubble with an explicit button, and the dynamic warm/dull screen colour replacing the 64% / 87% number — both directly informed by Part-1 testing
- Live Figma prototype (Part 2) embedded

### Mates & Matches
- Year: 2025 (Aug–Nov)
- Role: Solo · end-to-end
- Tools: Figma
- Stage: Concept → Mid-fi → Hi-fi
- Outcome: HD
- Hero summary: `A beginner-safe social-sport app for international students and working-holiday makers in Sydney — turning loneliness into a regular match.`
- Tennis hero image (from existing deck) used as one of the two main visuals
- Iterations 5–7 with participant quotes (`P1`, `P2`, `P4`) shown verbatim — quotes are the heart of this case study
- SUS: 75 average (pre-iteration); state honestly as "pre-iteration baseline"

### Vamos Bites
- Year: 2025 (Aug–Nov)
- Role: Solo · end-to-end (3D modelling, casting, rendering)
- Tools: Fusion 360 · Blender
- Stage: 4-stage build (3 modules + final render)
- Outcome: HD
- Hero summary: `A Rafa Nadal chocolate set and laser-cut packaging — smash cravings, not your racquet.`
- Tagline: `Smash cravings, not your racquet.`
- Stage markers: `MODULE A / 3D PRINTING (CHOCOLATE)` → `MODULE B / LASER CUTTING (PACKAGING)` → `MODULE C / BLENDER RENDERS` → `FINAL RENDER / POSTER`
- Bull-head → tennis-court pivot is the marquee "decision and tradeoff" moment — `bull-head.png` shown alongside the refined plywood box
- `choc_process/` photos plus the `firstbite.jpg` carry the "this thing actually exists" energy
- HEIC files: convert before use

---

## 5. Component inventory

| Component | Purpose | JS? |
|---|---|---|
| `Nav` | Sticky top nav with wordmark, links, Open-to-work pill | No |
| `Footer` | Email, LinkedIn, year, three-continents mono line | No |
| `ProjectCard` | Home page work row | No |
| `ScoringStrip` | The signature interaction — sticky scroll-progress score-line on case studies | Yes (small — IntersectionObserver) |
| `CaseStudyHero` | Title + one-line + sticky meta | No |
| `StickyMeta` | Right-rail meta column (desktop) / inline meta (mobile) | No |
| `MediaBlock` | Image + caption, variants: `full`, `two-col`, `gallery` | No |
| `PullQuote` | Fraunces italic, participant quote with attribution | No |
| `StageMarker` | Section divider for Vamos Bites modules / Mira parts | No |
| `FigmaEmbed` | Lazy-loaded iframe + fallback link | Yes (lazy load on scroll-in) |
| `ContactCTA` | Home + case-study-end contact block | No |
| `ThreeContinents` | Trilingual hello row | No |
| `OpenToWork` | The sage-dot pill | No |
| `SUSChart` | Tiny bar chart for Ollie's scores | No (inline SVG) |

JS budget total ≤ **40 KB minified + gzipped**.

---

## 6. Animation / interaction inventory

All animations check `prefers-reduced-motion: reduce` and degrade to instant state changes.

| Interaction | Behaviour | Library |
|---|---|---|
| Hero text reveal | Fade + 4px translate, stagger 60 ms per line, ~600 ms total. Fires once on mount | Motion One |
| Page transitions | Astro View Transitions API — cross-fade default; case-study → next-project uses a slide-up | Native |
| Scoring strip | Sticky bar, position derived from scroll percentage. CSS `position: sticky` + JS scroll listener (throttled) | Custom (~1 KB) |
| Project card hover | `transform: scale(1.02)` on image, 200 ms ease-out. Reduced motion: no transform | CSS only |
| Image lazy-load | Astro built-in `loading="lazy"` + blur-up placeholder | Astro |
| Smooth scroll | Lenis, disabled if reduced-motion | Lenis |
| Figma embed | Iframe loaded only when within 200 px of viewport | IntersectionObserver |

No custom cursor (deliberately — Aryan-restraint).

---

## 7. Responsive breakpoints

| Name | Width | Notes |
|---|---|---|
| `xs` | 360 px | Minimum supported (iPhone SE). Test here |
| `sm` | 640 px | Larger phones |
| `md` | 768 px | Tablet portrait |
| `lg` | 1024 px | Tablet landscape / small desktop. **Sticky Meta switches to right-rail here** |
| `xl` | 1280 px | Standard desktop |
| `2xl` | 1536 px | Large desktop, max content width caps at 1440 px |

Type scale uses `clamp()` so it scales smoothly across breakpoints, not stepwise.

---

## 8. Accessibility commitments (WCAG 2.1 AA minimum)

- **Contrast:** all body text against backgrounds meets 4.5:1; large text 3:1. Token combinations pre-audited in `tailwind.config.mjs`
- **Focus states:** visible ring on every interactive element. `outline: 2px solid var(--clay); outline-offset: 3px` as default
- **Keyboard navigation:** all interactive elements reachable; logical tab order; skip-to-content link at top
- **Reduced motion:** every animation gated; transitions become instant
- **Semantic HTML:** `<main>`, `<nav>`, `<article>`, `<section>` used correctly; heading hierarchy never skipped (`h1` → `h2` → `h3`, no jumping to `h4`)
- **Alt text:** meaningful and content-aware (e.g. `Ollie home screen with upcoming activities list and friend-request shortcut`), not `screenshot.png`. Decorative images get `alt=""`
- **Forms:** none on v1, so no input concerns
- **ARIA:** used sparingly and correctly — `aria-current="page"` on active nav, `aria-label` only when there's no visible label
- **Language:** `<html lang="en">`; trilingual hello uses `<span lang="es">Hola</span> · Hello · <span lang="en-AU">G'day</span>`
- **External links:** `rel="noopener"` plus a visually-hidden `(opens in new tab)` for screen readers

---

## 9. Performance budget

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP | < 2.0 s on 4G |
| CLS | < 0.05 |
| INP | < 200 ms |
| Initial JS (gzipped) | < 50 KB |
| Hero image (largest) | < 200 KB (AVIF) |
| Total page weight (home) | < 1 MB |

Tested on a **throttled Fast 3G profile** in Chrome DevTools before declaring done.

---

## 10. SEO basics

- `<title>` per page, format: `<Page name> — Tal Cohen` (home title is just `Tal Cohen — UX/UI Designer`)
- `<meta name="description">` per page, hand-written, 150–160 chars
- Open Graph tags + custom **OG image per page** (1200 × 630, designed in the site's type system)
- `og:type` = `website` (home/about), `article` (case studies)
- JSON-LD `Person` schema on home, `CreativeWork` per case study
- `sitemap.xml` auto-generated by Astro Sitemap integration
- `robots.txt` allowing all crawlers
- Canonical URLs on every page

---

## 11. Out of scope (v1)

- Blog / Scratchpad (user said no)
- Dark mode
- Custom cursor
- Multi-language UI (the trilingual hello is decorative, not a switcher)
- Search
- Comments / interactions
- CMS — content lives in MDX files in-repo

---

## 12. Open questions for Tal before build

These are small but I'd rather ask than guess:

1. **Education line on About** — `B. Design Computing, University of Sydney` correct? Or different program/university?
2. **Open-to-work label exact copy** — `Open to work` or `Open to UX/UI roles` or `Open to full-time roles, Sydney`?
3. **Hero positioning line** — I've drafted `UX/UI designer working across three continents.` Want to tweak it?
4. **Currently location** — Sydney? Used for the home hero meta line + About
5. **Email visibility** — should the email render as plain text `t.cohen2002@gmail.com` or behind a `Get in touch →` link only?
6. **GitHub / other socials** beyond LinkedIn?
7. **Should the home "Selected Work" rows show project thumbnails, or be pure typography** (Aryan does both — his current site is type-led with no thumbnails on the home rows)? My instinct: typography-led rows with one image per row on hover only. Push back if you want thumbnails always visible
