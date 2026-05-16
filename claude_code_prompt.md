# Claude Code Prompt — Tal Cohen Portfolio Website

> Paste this into Claude Code from inside the `portfolio` folder.

---

## Role and mission

You are my senior creative developer and design partner. I'm Tal Cohen, a UX/UI designer, and you're going to help me build an **elite, memorable, hand-crafted portfolio website** — not a template, not "AI slop," not generic. The bar is the kind of site that makes a hiring manager stop scrolling and read every case study.

I'm targeting **UX/UI designer roles**. The site needs to read fluently to design hiring managers within 60 seconds and reward deeper reading after.

This is a multi-session project. Before you write a single line of code, you will do a deep discovery pass, ask me clarifying questions, propose a direction, and only then start building. **Do not rush to implementation.** I'd rather spend 30 minutes aligning than throw away a half-built site.

---

## About me

- **Name:** Tal Cohen
- **Email:** t.cohen2002@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/tal-cohen-74b126338
- **Role I'm targeting:** UX/UI Designer
- **Photo:** I've included a headshot — use it on the About section if it strengthens the design. If you have a stronger direction without it (e.g. typography-led hero), pitch that to me and I'll decide.
- **Bio:**

> I'm a UX/UI designer with a global perspective, shaped by living across three continents and competing as an international tennis player. Transitioning from the court to design, I now focus on creating intuitive, human-centred digital experiences grounded in user research and empathy. My background in coaching has sharpened my collaborative mindset, while my coding skills help bring ideas to life through responsive front-end design. I'm driven by a desire to build meaningful, inclusive products that connect people across cultures and make technology feel effortless to use.

Threads worth pulling on in the design and copy: **three continents, tennis discipline, court-to-design transition, coaching → collaboration, designer-who-codes, human-centred + inclusive.** These are differentiators. Most UX portfolios are generic.

---

## CV download button

I want a **"Download CV"** button on the About page (and optionally in the nav or footer). I don't have the CV file yet, so:

- Build the button and wire it to a `/cv/tal-cohen-cv.pdf` route (or equivalent)
- Place a clearly named **placeholder PDF** at that path so the button works end-to-end
- Add a TODO in `CLAUDE.md` reminding me to drop the real PDF in when ready
- Make sure the button gracefully handles a missing file (no broken link)

---

## Reference portfolios (study these before proposing direction)

I love these three. Fetch and study each before Phase 1:

1. **https://www.ary4n.com/** — Aryan Rustagi, Sydney-based product designer. Editorial, restrained, type-led. "Open to work" badge. Curated "Selected Work" feed with one-line project metadata. Strong About section with timeline. A "Scratchpad" for side experiments. Quiet confidence — work does the talking.

2. **https://www.antoninsaurat.work/** — Antonin Saurat, French graphic designer. Atmospheric horizon/sunset hero imagery. Poetic positioning line ("identities and digital experiences shaped like horizons, where clarity meets emotion"). Wide, cinematic project rows. Soft prose project descriptions, not bullet points. Lottie animations used sparingly.

3. **https://www.kiucheung.com/** — Kiu Cheung. Bold thumbnail-grid home. Big caps project titles. Gallery-style browsing where work leads.

**The common thread I'm drawn to:** editorial, confident, type-and-image-led, atmospheric but restrained, work front-and-centre, strong personal voice, quiet confidence. **Not** WebGL-heavy, **not** cartoonish playful, **not** maximalist. The site should feel considered — like every element earned its place.

Don't copy these. Study what makes each work and propose a direction that lives in this register but is unmistakably *mine*.

---

## The four projects

There are four case studies. Each project has its own folder containing a slide deck PDF, JPEGs, and product images with mockups and wireframes (screens).

1. **Ollie**
2. **Mira**
3. **Vamos Bites** — note: this was a **4-stage project with 3 modules and a final render project**. The case study structure should reflect that progression rather than flatten it into one block.
4. **Mates & Matches**

---

## Phase 0 — Discovery (do this BEFORE anything else)

**Do not start designing or coding yet.** Work through these in order and report back to me after each step.

### 0.1 Inventory every asset

Walk the `portfolio` folder and each of the four project folders. List for me:
- Every file, what it is (deck, mockup, wireframe, photo, etc.), and which case study it belongs to
- The total number of usable images per project
- Anything that looks low-res, watermarked, missing, or inconsistent in style
- For Vamos Bites specifically: map which assets belong to which of the 4 stages / 3 modules / final render so the case study can be structured cleanly

### 0.2 Read every slide deck

Open each PDF and extract:
- Problem statement
- Target user / persona
- Research methods used
- Key insights
- Design process
- Final solution
- My specific role and contribution
- Outcomes, learnings, or reflections
- Any metrics or testing results

Summarise each project back to me in ~150 words. **If anything is unclear, contradictory, or missing — flag it as a question.** Don't paper over gaps; I'd rather you ask.

### 0.3 Ask me everything you need

After your inventory and deck reads, give me a single consolidated list of questions. Group them by:
- **Content gaps** — what's missing that you need from me (e.g. "Ollie's outcome isn't in the deck — what was the result?")
- **Material requests** — extra images, photos, hero shots, prototype recordings, Figma exports, screen-recordings, a higher-res headshot, sketches, post-it photos, anything that would strengthen the site
- **Clarifications on the work itself** — anything in the decks you want me to explain so the case study writes accurately
- **Brand and tone questions** — colour preferences, type preferences, password-protection on any project, whether I want a "Scratchpad" or side-work section, whether to show an "Open to work" indicator

Wait for my answers before moving on.

---

## Phase 1 — Direction (still no code)

Once Phase 0 is done, propose **3 distinct creative directions** for the site. They should all live in the editorial / quiet-confidence register of my references, but be genuinely different from each other. For each, give me:

- A one-line concept
- The mood and how it connects to my background (tennis, three continents, court-to-design)
- Typography pairing — **specific font names**. Avoid Inter, Arial, generic system fonts. Reach for distinctive choices like Fraunces, Editorial New, PP Neue Montreal, Söhne, Migra, Reckless, GT Sectra, Tobias, Söhne Mono, Departure Mono, ABC Diatype, etc. Pair a workhorse sans with a characterful serif or display face.
- Colour palette (5–7 swatches with hex codes)
- One signature interaction or motif that makes the site memorable and ties to *me* specifically — not decoration for decoration's sake
- How case studies are laid out (full-page scrolly editorial? side-scroll? sectioned with sticky meta?)
- A reference moment from one of the three portfolios that the direction borrows energy from

I'll pick one (or mix elements). **Then** we plan the build.

---

## Phase 2 — Spec and architecture

Once direction is locked, write a `SPEC.md` and a `CLAUDE.md` in the repo root.

**`CLAUDE.md`** should contain:
- Project overview
- Tech stack and why
- File structure
- Code conventions
- Build / dev / deploy commands
- The CV-file TODO (drop real PDF at the placeholder path)
- Anything you'd want to re-read at the start of a future session

**`SPEC.md`** should contain:
- Sitemap (pages and routes)
- Each page's purpose, sections, and content
- Each case study's structure (it should be consistent across all four, but flexible enough that Vamos Bites' staged structure fits without feeling forced)
- Component inventory
- Animation / interaction inventory
- Responsive breakpoints
- Accessibility commitments (WCAG AA minimum — colour contrast, focus states, keyboard nav, reduced-motion support, alt text on every image, semantic HTML)
- Performance budget (Lighthouse targets — I want 90+ on all four categories)
- SEO basics (meta tags, OG images, sitemap.xml, robots.txt)

Show me both files. I review, you adjust, then we build.

---

## Phase 3 — Build

### Tech stack guidance (you choose, justify it)

Recommend a stack. Defaults I'd lean toward unless you have a strong reason otherwise:
- **Astro** or **Next.js (App Router)** for the framework
- **Tailwind CSS** with a custom design token layer (don't ship default Tailwind — extend it)
- **GSAP** or **Framer Motion** for animations; **Lenis** for smooth scroll if it fits the editorial feel
- **Lottie** for any vector animations (Antonin uses these well — sparingly)
- Optimised images via the framework's image component
- Deployed to **Vercel** or **Netlify**

If a different stack serves the design direction better, pitch it.

### Case study page structure (apply to all four, adapted for Vamos Bites)

Each case study should answer a hiring manager's questions within 60 seconds of scanning, then reward deeper reading. Use this skeleton:

1. **Hero** — project name, one-line summary, the role I played, timeline, tools, and a single hero visual
2. **Outcome up front** — what changed, what was learned, what was shipped. Put this *before* the process, not after.
3. **Problem and user** — who the user was, what the problem was, why it mattered
4. **Research** — methods, key insights, quotes if I have them
5. **Process** — the messy middle. Sketches, wireframes, iterations, decisions and tradeoffs. This is where you show I *think*, not just that I *make pretty things*.
6. **Final design** — high-fidelity screens, prototypes, mockups in context
7. **Reflection** — what I'd do differently, what I learned
8. **Next project** — a quiet handoff to the next case study so people keep scrolling

For **Vamos Bites**, expand step 5 into the 4 stages × 3 modules + final render, with clear visual signposting between stages so a reader doesn't lose the thread.

### What makes the site special (pick a few, don't do all of them)

Stay in the editorial / quiet-confidence register. Avoid gimmicks. Pick 3–4 of these and execute them excellently:

- A **subtle motif tied to tennis or movement** — court-line dividers, a serve/rally rhythm in section transitions, scoring-style annotations on case study metadata. Restrained, not literal.
- A **"three continents" device** — a quiet trilingual hello in the hero, three-tone accent system, or a small atlas-style motif in the About section
- **Editorial typography** — oversized type, asymmetric grids, considered hierarchy. This is the spine of the site.
- **Scroll-triggered reveals** that respect `prefers-reduced-motion`
- **A small interactive demo** in one case study (since I code) — a working prototype of one screen, embedded, not just static images. This separates me from designers who say they code.
- **Custom cursor** (very subtle — Aryan-level restraint, not flashy)
- **View Transitions API** for page transitions if the framework supports it
- **A signature loading or landing moment** — first impression matters. Antonin's horizon imagery is the reference here.
- **An "Open to work" indicator** in the nav, like Aryan's
- **A "Scratchpad" or "More" section** for non-case-study work, side experiments, or photography if I have any

Better one signature interaction done flawlessly than five half-baked ones.

### Required pages and sections

- **Home** — hero, brief intro, four case study previews, about teaser, contact CTA
- **Work** (or integrated into home) — the four case studies with thumbnails
- **Case study × 4** — one detailed page per project
- **About** — long-form bio, the photo (if we use it), tennis-to-design story, skills, tools, **Download CV button**
- **Contact** — email (t.cohen2002@gmail.com), LinkedIn (https://www.linkedin.com/in/tal-cohen-74b126338), any other socials I give you

---

## Phase 4 — Polish and ship

Before declaring done:

- Run a Lighthouse audit and fix anything below 90
- Test on mobile (iPhone SE width minimum), tablet, and desktop
- Keyboard-navigate the entire site — every interactive element must be reachable and have a visible focus state
- Toggle `prefers-reduced-motion` and confirm animations degrade gracefully
- Check colour contrast on every text/background pair
- Add proper meta tags, OG image (design a custom one), favicon
- Write clean, semantic HTML
- Verify all images have meaningful alt text
- Test load time on a throttled connection
- Run the site through the W3C validator
- Verify the CV download button works (placeholder PDF in place, no broken link)

Then walk me through deployment.

---

## How I want you to work

- **Ask before assuming.** If a decision could go two ways and you're not sure which I'd want, ask.
- **Plan before coding.** Use a todo list. Show me the plan, get a nod, then execute.
- **Small, reviewable diffs.** Don't dump 2,000 lines at once. Ship sections; let me see them; iterate.
- **No filler.** No placeholder lorem ipsum left in final files. No "TODO: replace this" in shipped code except the CV-file TODO. If content is missing, ask me for it.
- **Distinctive over safe — but stay in register.** When choosing between a generic-but-safe pattern and a distinctive-but-considered one, pick distinctive — but stay in the editorial / quiet-confidence register my references live in. Don't drift into WebGL-heavy or cartoon-playful territory.
- **Treat the portfolio as a UX problem.** It's the work showing the work. Apply the same rigour to it that I'd apply to any client project: user goals (UX/UI hiring manager scanning in 60 seconds), constraints, content hierarchy, navigation, measurable outcomes.
- **If I'm wrong, tell me.** I'd rather be challenged than agreed with.

---

## Start now

Begin with **Phase 0.1 — inventory**. Don't skip ahead.
