# CLAUDE.md — Tal Cohen Portfolio

> Re-read this at the start of every session before touching code.

## Project overview

A personal portfolio website for **Tal Cohen**, targeting UX/UI designer roles. Four case studies (Ollie, Mira, Mates & Matches, Vamos Bites) plus About and Contact. Editorial / quiet-confidence register — references are Aryan Rustagi (ary4n.com), Antonin Saurat (antoninsaurat.work), and Kiu Cheung (kiucheung.com). The bar is: a hiring manager stops scrolling and reads every case study.

The locked creative direction is **"Baseline"** — type-led, restrained, with a tennis-scoring strip as the signature interaction (see `SPEC.md`).

## Tech stack and why

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 4** | Content-first, zero-JS by default, MDX for case studies, native View Transitions, image optimisation built-in, simple file-based routing |
| Styling | **Tailwind CSS** + custom design tokens | Speed + consistency. Default Tailwind is *not* shipped — we extend with our own type scale, palette, and spacing (see `tailwind.config.mjs`) |
| Content | **MDX** in `src/content/work/` | Case studies are long-form articles, not data. MDX gives us prose + components in one file |
| Smooth scroll | **Lenis** (lazy-loaded, opt-out for reduced-motion) | Subtle editorial pace. Tiny footprint |
| Animation | **Motion One** | ~3 KB, native Web Animations API, lighter than Framer Motion for an Astro site |
| Images | **Astro `<Image />`** (Sharp under the hood) | AVIF + WebP fallback, responsive `srcset`, lazy loading |
| Deploy | **Netlify** | Static hosting, instant cache invalidation, branch previews, free tier sufficient |
| Analytics | **Plausible** (optional, post-launch) | Lightweight, no cookie banner needed |

**Why not Next.js:** This is a static content site. Astro ships less JS for the same outcome and the DX for a single maintainer is simpler.

## File structure

```
portfolio/
├── CLAUDE.md                 ← this file
├── SPEC.md                   ← what we're building
├── README.md                 ← public-facing project notes
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── cv/
│   │   └── tal-cohen-cv.pdf          ← PLACEHOLDER — see TODO below
│   ├── fonts/                        ← self-hosted .woff2 files
│   ├── og/                           ← custom Open Graph images
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── ScoringStrip.astro         ← the signature interaction
│   │   ├── CaseStudyHero.astro
│   │   ├── StickyMeta.astro
│   │   ├── MediaBlock.astro
│   │   ├── PullQuote.astro
│   │   ├── StageMarker.astro          ← used by Vamos Bites + Mira
│   │   ├── FigmaEmbed.astro
│   │   ├── ContactCTA.astro
│   │   └── ThreeContinents.astro
│   ├── content/
│   │   ├── config.ts                  ← Astro Content Collections schema
│   │   └── work/
│   │       ├── ollie.mdx
│   │       ├── mira.mdx
│   │       ├── mates-and-matches.mdx
│   │       └── vamos-bites.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── CaseStudyLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   └── work/
│   │       └── [slug].astro
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── reduced-motion.ts
├── Ollie/                    ← raw source assets (kept; not deployed)
├── Mira/
├── Mates&Matches/
├── Rafa/
├── ME.png
├── Tennis.JPG
└── claude_code_prompt.md     ← original brief
```

**Raw asset folders (`Ollie/`, `Mira/`, etc.) stay in the repo as the source of truth.** Optimised, web-ready images are copied into `public/images/<project>/` during a one-time prep step or via an Astro asset import. We never deploy the raw 90 MB PDFs.

## Code conventions

- **TypeScript** in `.ts` files; `.astro` files use TS in frontmatter
- **Semantic HTML** mandatory — `<article>` for case studies, `<nav>` for nav, `<main>` once per page, heading hierarchy never skipped
- **Tailwind** for styling; design tokens in `tailwind.config.mjs`. No arbitrary one-off colour values — if a colour isn't a token, add it as one
- **One component per file**, named in PascalCase. Co-locate component-specific styles if needed
- **No `any` types** in TS
- **Images:** always go through Astro's `<Image />` with explicit width / height and meaningful alt text
- **Links:** all external links open in the same tab unless they're prototypes or downloads (then `target="_blank" rel="noopener"`)
- **Reduced motion:** every animation must check `prefers-reduced-motion`. Use `src/lib/reduced-motion.ts` helper
- **No comments explaining what code does** — only why, and only when non-obvious

## Build / dev / deploy commands

```bash
# Install
npm install

# Local dev
npm run dev               # http://localhost:4321

# Type check
npm run check

# Build for production
npm run build             # outputs to ./dist

# Preview production build locally
npm run preview

# Deploy: push to main → Netlify auto-deploys
```

## Important TODOs (durable)

- [ ] **CV file:** drop the real PDF at `public/cv/tal-cohen-cv.pdf` (replace the placeholder). The download button on `/about` is already wired to this path
- [ ] **HEIC conversion:** `Rafa/Rafa_product/IMG_8487.heic` and `Rafa/Rafa_product/box2.heic` must be converted to JPG or WebP before they can be used on the web (browsers do not render HEIC). Recommended: open in macOS Preview → Export As JPEG, then place in `public/images/vamos-bites/`
- [ ] **OG images:** custom Open Graph image per page (1200×630) once layouts are final
- [ ] **Favicon:** SVG favicon using a single typographic mark (e.g. lowercase `t` in Fraunces)

## Things I want to re-read at the start of a future session

1. **Direction is "Baseline" — restraint over spectacle.** When in doubt, take a feature *out*
2. **Tennis motif is restrained.** The scoring-strip is the *only* literal reference. No racquets, no balls, no court lines as decoration
3. **Three continents = Spain · USA · Australia.** Trilingual hello on About: `Hola · Hello · G'day`
4. **No headshot of Tal.** Typography-led hero, no face photo anywhere
5. **All four case studies received HD grades.** Stated as `Outcome: HD` on every case study sticky meta. Don't editorialise it — it's a quiet fact
6. **Role attribution:**
   - **Ollie** → "UX/UI design, research, prototyping & front-end · team of three"
   - **Mira** → "UX/UI design, research, prototyping · team of three (Part 1); solo refinement (Part 2)"
   - **Mates & Matches** → "Solo · end-to-end"
   - **Vamos Bites** → "Solo · end-to-end (3D modelling, casting, rendering)"
7. **Interactive prototypes embed via Figma iframe:**
   - Ollie: `https://embed.figma.com/proto/rnoae3OyPx01KbJhTSBTx8/Tal-Cohen---Ollie-App---Interaction-Design?...`
   - Mira (Part 2): `https://embed.figma.com/proto/NYhpEWCK5Z1XUUihQ2JR8g/HighFidelityInteractivePrototype_TCOH0396?...`
   (Full URLs in the case-study MDX frontmatter)
8. **Performance budget is non-negotiable:** Lighthouse 90+ all four categories, LCP < 2 s, initial JS < 50 KB
9. **Type pairing (final):**
   - Display: **Fraunces** (variable, Google Fonts — free, self-hosted .woff2)
   - Body: **PP Neue Montreal** (Pangram Pangram — free for personal/portfolio use, self-hosted .woff2)
   - Mono: **Departure Mono** (free — used for scoring-strip and metadata)
10. **Site palette is intentionally neutral so case-study colours pop:**
    - `--paper: #F4F1EA`
    - `--ink: #0B0B0E`
    - `--paper-dark: #E6E2D8`
    - `--clay: #C9633F` (single warm accent)
    - `--sage: #B7C2B0` (single cool accent)
11. **Project order on `/` is chronological:** Ollie → Mira → Mates & Matches → Vamos Bites
12. **Tennis.JPG appears on About only** — not on the home page, not on case studies
13. **Mira2 lives in `Mira/`** (was briefly in `Mates&Matches/` before being moved). Both `Mira1` and `Mira2` source decks/JPEGs are under `Mira/`
14. **Mates & Matches hero image is `Mates&Matches/cover.png`** — Tal's own photo, used as the case-study hero
15. **Local-only dev for now.** No GitHub, no Netlify, no domain wired up. User will deploy when ready

## Working agreement with Claude (durable)

- **Plan before coding.** TodoWrite for any multi-step work
- **Small reviewable diffs.** Ship sections, get feedback, iterate. Never dump 2,000 lines
- **Ask before assuming.** If a decision could go two ways, ask
- **No placeholder lorem ipsum** in shipped files. If content is missing, raise it
- **Stay in register.** Editorial / quiet-confidence. No WebGL, no cartoonish playful, no maximalism
- **Challenge me if I'm wrong**
