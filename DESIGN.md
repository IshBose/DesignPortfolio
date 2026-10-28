---
name: Ishaan Bose Portfolio
description: Editorial restraint with quiet personality — a senior product designer's reading room.
colors:
  workshop-ink: "#131316"
  workshop-ink-deeper: "#090c12"
  primary-text: "#141218"
  marginalia-gray: "#5a5a5a"
  page-white: "#ffffff"
  press-sheet: "#f0f0f0"
  drafting-line: "#e0e0e0"
  signal-blue: "#3478ff"
  stamp-red: "#b21f1f"
  terraform-purple: "#7b42bc"
  packer-cyan: "#02a8ef"
typography:
  display:
    fontFamily: "Regola Neue, sans-serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Regola Neue, sans-serif"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "Regola Neue, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "Regola Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 100
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Regola Neue, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  micro:
    fontFamily: "Regola Neue, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  italic-display:
    fontFamily: "Tiempos Fine, Georgia, serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  hairline: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "100px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  base: "16px"
  md: "24px"
  lg: "32px"
  xl: "40px"
  rail: "240px"
  page-max: "1160px"
components:
  button-outline:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.workshop-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  button-outline-hover:
    backgroundColor: "{colors.press-sheet}"
    textColor: "{colors.workshop-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  pill-nav:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.marginalia-gray}"
    rounded: "{rounded.pill}"
    padding: "4px"
  pill-tab-active:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  pill-tab-inactive:
    backgroundColor: "{colors.press-sheet}"
    textColor: "{colors.marginalia-gray}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  tag-chip:
    backgroundColor: "#d4d4d4"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  worklist-row:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.primary-text}"
    rounded: "0"
    padding: "12px"
  worklist-row-hover:
    backgroundColor: "#F0F1F5"
    textColor: "{colors.primary-text}"
    rounded: "0"
    padding: "12px"
  section-nav-link:
    textColor: "{colors.marginalia-gray}"
    padding: "8px 0"
  section-nav-link-active:
    textColor: "{colors.workshop-ink}"
    padding: "8px 0"
---

# Design System: Ishaan Bose Portfolio

## 1. Overview

**Creative North Star: "The Quiet Workshop"**

A senior product designer's reading room. The site reads like a printed dossier: a tight content column, a near-monochrome page, generous interior whitespace, and personality carried by a few specific objects — the halftoneface logo, the halftone globe canvas, the time-of-day emoji, the draggable polaroids on About. Everything else stays out of the way of the writing.

The system is built around the case-study reading experience. Senior hiring managers open one case study to evaluate craft and leveling signal; the shell exists to get them there and the body exists to be read. Restraint is the voice: hairline borders, a single signal-blue accent, no decorative gradients in copy, no shadows under headings. The visual quietness is what lets the writing register as senior.

This system explicitly rejects: Y2K / brutalist / maximalist designer-showcase aesthetics; generic Webflow / Framer dark-hero templates with reflexive scroll-reveal cadence; the SaaS landing-page formula (hero metric + gradient + blue CTA); the editorial-magazine aesthetic of italic display serif + drop caps + ruled three-column grids when there's no editorial reason to use it.

**Key Characteristics:**
- One content column anchored to every page (`--page-max`): `1160px` on case studies, narrowed to `700px` on the index via a scoped `--page-max` on `.indexcontainer`. Every block on a page runs that full measure rather than sitting in a narrower sub-column
- Near-monochrome palette: white page, near-black ink, one Signal Blue accent
- Brand accents (Terraform Purple, Packer Cyan) appear only inside the relevant case studies
- Self-hosted Regola Neue across the system; Tiempos Fine reserved for italic display moments
- Flat by default; soft ambient shadows only on floating elements (pill nav, lightbox)
- Hairline borders (1px / 1.5px) — never colored stripes
- A floating cover preview on work-row hover as the one piece of decorative motion in the index

## 2. Colors

A near-monochrome ink-and-paper palette with one chromatic accent. Brand accents (Terraform Purple, Packer Cyan) live inside their respective case studies and stay out of the shell.

### Primary
- **Signal Blue** (`#3478FF`): every link, every keyboard focus ring, every "this is interactive" cue. The only chromatic color used in the shell. Reserve it; if half a page is blue, the system is lying about what's interactive.

### Secondary (case-study scoped)
- **Terraform Purple** (`#7B42BC`): brand accent inside HashiCorp Terraform case studies. Never appears on the index or in About.
- **Packer Cyan** (`#02A8EF`): brand accent inside the Packer Image Usage case study. Same scoping rule.

### Tertiary
- **Stamp Red** (`#B21F1F`): rare emphasis only. Editorial pull-quote treatment or a single dot of warning. Not for body text, not for links.

### Neutral
- **Workshop Ink** (`#131316`): primary text on light surfaces. The near-black is intentional — true `#000` reads as harsh on body copy and Regola at 100 weight needs every percent of contrast it can get.
- **Workshop Ink Deeper** (`#090C12`): link hover state only.
- **Primary Text** (`#141218`): an alias of Workshop Ink used in card bodies. Treat as the same color.
- **Marginalia Gray** (`#5A5A5A`): secondary body text, dates, captions, inactive pill tabs. Already at 4.5:1 against page white — do **not** lighten it.
- **Page White** (`#FFFFFF`): the body. The page IS the surface. Do not tint warm by reflex.
- **Press Sheet** (`#F0F0F0`): interior card surface, pill-slider track, neutral chip background. The lightest layered tone.
- **Drafting Line** (`#E0E0E0`): every hairline border. 1px on shell surfaces, never wider.

### Named Rules

**The One Accent Rule.** Signal Blue is the only chromatic color in the shell. The shell is index + About + nav + footer. Case studies may introduce their product's brand accent (Terraform Purple, Packer Cyan) inside their own page, but those accents do not leak back into the shell. If a third chromatic color shows up in the shell, the rule is broken.

**The Hairline Rule.** Borders are 1px or 1.5px, in Drafting Line (`#e0e0e0`). No 2px+ borders. No colored stripes on the left or right of cards or callouts. If a card needs more presence, give it a soft shadow on hover or interior padding, not a heavier border.

**The Brand-Scoped Color Rule.** Terraform Purple and Packer Cyan are scoped to their case studies. Mixing them on the same page (the index) is forbidden; that's the company's marketing site's job, not a personal portfolio's.

## 3. Typography

**Display Font:** Regola Neue (self-hosted, FT trial weights 100 / 300 / 400 / 500 / 600 / bold)
**Body Font:** Regola Neue
**Italic Display Font:** Tiempos Fine (woff2) — reserved for editorial italic moments

**Character:** Regola Neue is a calm, slightly mechanical geometric sans with a workhorse range of weights. It does not perform. The pairing with Tiempos Fine italic gives the system one editorial gear when a paragraph needs to slow the reader down — a pull-quote, a case-study aside — without committing to a magazine layout.

### Hierarchy
- **Display** (Regola Neue 500, 48px, line-height 1.1): case-study titles (`.textcasetitle`), section markers. The largest type the system uses. Do not exceed 6rem (96px) anywhere.
- **Headline** (Regola Neue 300, 24px, line-height 1.3): subheadings (`h4`, `.largetext`). The light weight at this size is the visual signature; do not promote it to 400+.
- **Title** (Regola Neue 500, 20px, line-height 1.35): the hero tagline, primary intro paragraphs.
- **Body** (Regola Neue 100, 16px, line-height 1.5): default paragraph copy. The 100 weight is intentional and only works because Regola's 100 is sturdier than most ultra-thin weights — verify in browser at every contrast change. Keep line length ≤75ch in case studies.
- **Label** (Regola Neue 400, 14px): card titles, card descriptions, pill nav, section-nav links, captions.
- **Micro** (Regola Neue 500, 12px): tag pills only.
- **Italic Display** (Tiempos Fine 400, 48px italic): editorial pull-quotes, the rare display-italic moment. Use sparingly.

### Named Rules

**The Single-Family Rule.** Regola Neue carries every UI surface. Tiempos Fine is permitted only for italic display moments and only when a paragraph needs to register editorially. Do not pair a second sans-serif (no Inter, no DM Sans, no Plus Jakarta). A single well-chosen family carrying every weight is the design choice.

**The Light-Weight-At-Body Rule.** Body paragraphs use Regola 100. This is the single most fragile call in the system. Test in browser at every change; if contrast even feels close, the answer is to darken the ink, never to bump the weight.

**The Smart-Quotes Rule.** HTML entities (`&lsquo;` / `&rsquo;` / `&ndash;` / `&mdash;` / `&middot;`) carry typographic punctuation. Straight quotes are forbidden in shipped copy.

## 4. Elevation

Flat by default. Surfaces sit on the page. The visual depth in this system comes from typography weight, color contrast, and a single hairline border — not from shadow.

Shadows appear only on floating elements: the fixed pill nav, the active pill tab inside it, and the image lightbox. They are soft, low-opacity ambient shadows whose only job is to suggest "this object is above the page" without calling attention to itself.

### Shadow Vocabulary
- **Pill Float** (`box-shadow: 0 2px 16px rgba(0,0,0,0.07)`): the fixed pill nav at the top of every page. Soft, diffuse, almost invisible.
- **Pill Tab Active** (`box-shadow: 0 1px 4px rgba(0,0,0,0.10)`): the active tab inside the pill nav (e.g. Work / About). Tighter and slightly darker than Pill Float — it sits closer to the surface than the nav itself.
- **Card Glow** (per-card `conic-gradient` blurred 28px, opacity 0.55 on hover): not a shadow but the system's one decorative depth move. Each project card has a paired pair of brand-tinted glow colors (`--glow-1`, `--glow-2`) that animate behind it on hover. Document under Components.

### Named Rules

**The Flat-By-Default Rule.** Headings, body, cards at rest, sections, and dividers have no shadow. If a designer adds a shadow under a heading "for hierarchy," they're solving the wrong problem; the answer is type weight or whitespace.

**The Float-Only Shadow Rule.** Shadows are reserved for elements that genuinely float (fixed nav, active state inside that nav, modal lightbox). A card at rest does not float; it sits.

## 5. Components

### Buttons
- **Shape:** small radius (6px) for the primary `.btn`. No fully-rounded buttons — that role is owned by pill-nav and tag-chip.
- **Primary** (`.btn`): Page White background, 1px Workshop Ink border, Workshop Ink text, 12px×16px padding, 16px / 500. Hover: Press Sheet background, 1.02 scale, 0.1s ease. The outline-style "ghost" treatment is the default; this system has no filled chromatic CTA.
- **Hover / Focus:** focus-visible ring is 2px Signal Blue at 2px offset with a 4px radius. The same ring covers `.pill-tab`, `.pill-btn`, `.hamburger`, `.collapsible`, `.accordion-header`, and `.skip-link`. Never customize per-component.

### Chips (`.tag-chip`)
- **Style:** filled Press Sheet–adjacent grey (`#d4d4d4`), fully rounded (999px), 5px×12px padding, 13px label. Used inside case studies to mark a term or a value, not on the index.
- **Scope:** the index carries no chips. Status and outcome live inside each case study now that the work list is text-only.

### Work List (`.worklist`)
The index's only content component: one joined table of every case study, newest first.

- **Structure:** a quiet `Work` label over a hairline, then one `<li>` per piece, each divided by a 1px Drafting Line rule. Rows are `display: grid` on `88px 1fr auto` with named areas — year rail, title over subtitle, company.
- **Year rail:** the year prints only on the first row of each year block; repeats keep the year in the accessibility tree via `.visually-hidden` and leave the column visually empty. Marginalia Gray, tabular numerals.
- **Title:** Workshop Ink at 14px / 400. The whole row is the link, and the title is the only thing at full contrast — that is what makes the list scannable.
- **Subtitle (`.worklist-desc`):** one line under the title saying what the piece is. Marginalia Gray at 13px / 300. Keep it under ~70 characters so it stays on one line at the 800px measure.
- **Company:** Marginalia Gray at 13px / 300, right-aligned, matching the subtitle exactly. It is the only place the employer is named, which is why the list needs no per-company headings.
- **The one-voice rule:** subtitle and company share a size, weight, and color. If one of them drifts, the row grows a third level of hierarchy it does not need.
- **Hover:** the row fills with `#F0F1F5` — the same tone `.hero-status-active` uses for the current role, so the work list and the hero role list read as one system. No shadow, no scale, no glow.
- **Measure:** the full `--page-max` column (700px on the index), sharing both edges with the hero above it. Under 800px the year rail collapses and the year rides above the title.

### Work Preview (`.work-preview`)
A single fixed element that follows the cursor while a work row is hovered, showing that case study's cover.

- **Chrome:** built on the `.globe-tooltip` vocabulary — Page White, 1px Drafting Line border, 12px radius, soft ambient shadow, `pointer-events: none`, 120ms opacity fade. The two floating objects on the index deliberately match.
- **Media:** a poster `<img>` at 16:10 with a muted, looping MP4 stacked on top. The video crossfades in only on its `playing` event, so a cold hover never fades an empty box over the poster. Pieces with no video (the Demandbase and UCSD archive) show the poster alone.
- **Sources:** declared per row as `data-preview-poster` and optional `data-preview-video`. MP4s and archive stills are declared with `<link rel="prefetch">` in the page head — never `preload`.
- **Constraints:** bound only under `(hover: hover) and (pointer: fine)`, so touch never triggers it. Position is clamped to the viewport and flips to the other side of the cursor near an edge. Keyboard focus shows the same preview anchored to the row. Under `prefers-reduced-motion: reduce` the video is skipped entirely and the poster stands alone.

### Pill Nav (`.pill-nav`) — signature
- **Position:** `position: fixed; top: 24px`. On the shell pages (index, About) the pill also carries the logo and the time pill, and `\.pill-nav:has(.nav-logo)` centres it horizontally. Case-study pages keep their standalone top-left logo and centred clock, so their pill stays pinned to `right: var(--page-gutter)` — centring it there would drop the pill on top of the fixed clock.
- **Contents (shell pages), left to right:** logo + name · clock · Work/About slider · LinkedIn · Email me, divided by `.pill-sep` hairlines. `.pill-nav .nav-logo` and `.pill-nav .time-container` override the standalone fixed positioning back to `position: static`; the clock's scroll-driven `.hidden` / `.visible` states are neutralised there too, since the pill never retracts.
- **Container:** Page White background, 1px Drafting Line border, fully rounded (100px), 4px padding, Pill Float shadow.
- **Slider:** Press Sheet track, 100px radius, 3px padding, 2px gap between tabs.
- **Tab (`.pill-tab`):** 14px / 400, Marginalia Gray default, 6px×14px padding, 100px radius. Active tab: Page White background, Primary Text label, 500 weight, Pill Tab Active shadow.
- **Mobile:** hidden under 720px; replaced by `.hamburger` and a sliding `.menu` panel.

### Section Nav (`.section-nav`) — signature
- **Layout:** `position: fixed; left: var(--page-gutter); top: 8rem`. The left edge aligns with the content column's left edge. Reserves a 240px rail (`--rail`) inside the body grid on case-study pages (`body:has(.section-nav)`).
- **Typography:** Regola 14px / 100. Light weight reinforces "this is a quiet reading aid, not a primary nav."
- **States:** default `#8E8E93` gray; hover / active is black + 500 weight. 50ms ease — almost instant, so the active state never feels animated.
- **Section flow:** every case-study page follows the same seven-step section vocabulary — Context → Problem → Research → Ideation → Solution → Prototype → Conclusion. Do not invent new section names per case study; the consistency is the point.

### Hero (index)
- **Layout:** a single stacked column (`.hero-row`, 40px gap): the halftone globe sits on top, horizontally centred in the column, with the tagline and work history left-aligned under it. Everything spans the full `--page-max` measure — the hero, the work list, and the contact block share one left and one right edge.
- **Tagline (`.hero-tagline`):** Regola 20px / 500, line-height 1.35, full column width, 32px bottom margin.
- **Work history (`.hero-status`):** a stacked, two-column row per role, current role first. Exactly one row carries `.hero-status-active` (`#F0F1F5` fill, Primary Text); every past role is Marginalia Gray. When the current role changes, move the class — do not leave two rows reading as "Now".
- **Company marks (`.hero-status-logo`):** a 16×16 logo with a 4px radius sits before each name, `object-fit: contain` inside an 8px gap. Decorative only — `alt=""`, because the company is already named in the text beside it. A role with no logo on file gets `.hero-status-logo-blank`, an empty slot of the same size, so every name keeps one left edge; never drop the element or the column ragged-edges.

### Halftone Globe (signature, index hero)
A canvas-rendered dotted globe sourced from `js/land-110m.json` + `js/land-dots.js`. Slowly rotating, monochrome dot-map. The single most ambitious decorative element in the system. Treat as immutable — it's part of the brand at this point.

### Polaroids (signature, About)
Draggable Polaroid-card scrapbook. Real photos in tilted card frames. Personality carrier on the About page; do not reuse on case-study pages.

### Time Pill (`.time-container`) — signature
The real-time clock with time-of-day emoji. On the shell pages it sits inside the pill nav; on case-study pages it floats centred below the top edge and retracts on scroll. Updates client-side, every minute. The emoji rotates through time-of-day glyphs. Specific to Ishaan; do not abstract into a reusable "live status" component.

## 6. Do's and Don'ts

### Do:
- **Do** use the `--page-max: 1160px` content column on every new page. The shared column is what holds the system together.
- **Do** anchor the pill nav and the section-nav to `--page-gutter` so they align with the content column at every screen width.
- **Do** keep Signal Blue (`#3478FF`) as the one chromatic accent in the shell. Use it for links and focus rings only.
- **Do** declare hover media (MP4s and archive stills) with `<link rel="prefetch">` in the page head. Never `preload` — it competes with initial render.
- **Do** test new copy at every breakpoint. Long headline words plus the 48px display scale will overflow narrow grids; reduce the clamp or rewrite the copy.
- **Do** match Regola weight 100 for body, 300 for h4, 400 for labels, 500 for hero/cta, 600 for h3. Do not invent in-between weights.
- **Do** use HTML entities for typographic punctuation (`&lsquo;`, `&ndash;`, `&middot;`).
- **Do** carry the seven-section flow (Context → Problem → Research → Ideation → Solution → Prototype → Conclusion) on every case study.
- **Do** ship a `@media (prefers-reduced-motion: reduce)` alternative for every animation — the work preview's video, the halftone globe, polaroids, scroll-spy, section reveals.

### Don't:
- **Don't** drift into Y2K / brutalist / maximalist designer-showcase aesthetics. The site is a reading surface, not an Awwwards entry.
- **Don't** ship anything that reads as a generic Webflow / Framer template — no templated dark hero, no reflexive scroll-reveals on every section, no Inter as a "safe" pairing.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on cards, callouts, or alerts. Banned.
- **Don't** use gradient text (`background-clip: text`). Banned.
- **Don't** put a tiny uppercase tracked eyebrow above every section. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar.
- **Don't** scaffold sections with `01 / 02 / 03` markers unless the section actually IS a sequence that the reader needs to follow in order.
- **Don't** introduce a second sans-serif. Regola Neue covers every UI surface. Tiempos Fine is the only paired family, and only in italic display moments.
- **Don't** lighten Marginalia Gray (`#5A5A5A`). It sits at the 4.5:1 contrast floor; one shade lighter fails AA.
- **Don't** add shadows under headings, cards-at-rest, sections, or dividers. Flat by default.
- **Don't** let Terraform Purple or Packer Cyan leak out of their case studies into the shell.
- **Don't** add a "Layout Principles" or "Motion" top-level section to this file when it changes. Fold new rules into Overview (philosophy) or Components (per-component behavior). The six section names are fixed.
