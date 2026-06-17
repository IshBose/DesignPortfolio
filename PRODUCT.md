# Product

## Register

brand

## Users

**Senior design hiring managers** — design directors, principals, and heads of design at product-led companies, typically reviewing the site between other tabs during an active hiring loop. They are reading for leveling signal: depth of thought, craft, decision-making, business outcomes. They will spend most of their time inside one or two case studies, not on the index. Secondary audience: recruiters who screen first, and PM/engineering hiring partners who validate during onsites.

The job to be done: *"Decide in five minutes whether this designer can operate at senior / staff IC, and want to read more."*

## Product Purpose

Personal design portfolio for Ishaan Bose, Product Designer at HashiCorp working on HCP Terraform. Lives at `ishaanbose.com`. Static HTML/CSS/JS, deployed via GitHub Pages.

**Why it exists**: to land a senior or staff IC product-design role in the next 6–12 months. Every editorial and visual choice is in service of that outcome.

**What success looks like**: a senior hiring manager opens a HashiCorp case study, reads through it, and reaches out — or forwards the link to a teammate. The site converts on case-study depth, not hero theatrics.

## Brand Personality

**Thoughtful · quietly playful · precise.**

- **Thoughtful**: the writing leads. Case studies make arguments, not feature tours. Hierarchy and pacing prioritize reading over scrolling.
- **Quietly playful**: real-time clock + time-of-day emoji, halftoneface logo, halftone globe canvas, draggable polaroids on About. The flourishes are specific to Ishaan and earn their place; nothing decorative-for-decoration's-sake.
- **Precise**: self-hosted Regola Neue + Tiempos Fine italic, smart-quote HTML entities, tight `--page-max: 1040px` content column, restrained palette anchored on near-black + a single blue accent with brand-specific terraform purple and packer cyan where the work is the subject.

Voice in copy: first-person, slightly dry, confident about taste without performing it. Not corporate, not designer-y-cute.

## Anti-references

Do not let the site drift into either of these:

- **Y2K / brutalist / maximalist showcase aesthetic.** No intentionally loud type, no neon, no "look at me" designer-showcase patterns. The audience is hiring managers, not Awwwards judges.
- **Generic Webflow / Framer template.** No templated dark hero with a centered headline + Inter, no identical scroll-reveal cadence on every section, no card-grid-with-icon-and-eyebrow. If a pattern shows up on every templated portfolio, it should not show up here.

Also bans inherited from impeccable's universal list: gradient text, side-stripe borders, eyebrows above every section, `01 / 02 / 03` numbered scaffolding by reflex, hero-metric template, identical card grids, glassmorphism-as-default.

## Design Principles

1. **The site IS a case study.** Hiring managers are reading the portfolio for leveling signal *as they read the work*. Every detail — kerning, link affordance, scroll feel, error states — is on the test. No template tells, no shortcut shrugged off as "fine."
2. **Earn every flourish.** The clock-emoji and the polaroids work because they're specific to Ishaan. New decorative elements must clear the same bar: would removing this change what someone learns about the designer? If no, cut.
3. **Devtools and complex systems are the spine.** HashiCorp / Terraform / Demandbase isn't biography, it's the POV. Surface the work as an opinion about how complex systems should feel, not as a job history.
4. **Restraint reads as senior.** Quietly playful, not showcase loud. Hold the palette tight, let typography and copy carry voice. When in doubt, do less.
5. **Reading-first hierarchy.** Optimize the case-study reading experience above hero theatrics. Section nav, line length, scroll spy, image lightbox — these are the surfaces that decide whether the audience finishes a case study.

## Accessibility & Inclusion

**WCAG 2.1 AA + reduced-motion.**

- Body text ≥4.5:1 contrast against background; large text (≥18px, or bold ≥14px) ≥3:1. Placeholder and secondary text held to the same body bar, not the muted-gray default.
- Full keyboard reachability. Skip-link present (`<a class="skip-link">`) — keep it.
- Every animation (hover video previews, halftone globe canvas, draggable polaroids, scroll-spy transitions, hamburger toggle) needs a `@media (prefers-reduced-motion: reduce)` alternative: crossfade, static image, or instant transition.
- Password-protected case studies must remain keyboard-operable and announce lockout state to screen readers; do not silently fail.
- Color is never the only carrier of meaning (e.g., the time-of-day emoji is paired with the time string; status pills in the work list use text + position, not color alone).
