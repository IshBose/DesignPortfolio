# CLAUDE.md

Guidance for Claude Code agents working in this repository.

## Project Overview

Static HTML/CSS/JS design portfolio for Ishaan Bose, deployed via GitHub Pages at `ishaanbose.com` (CNAME in repo root). **No build system, no framework, no package manager** — files are deployed as-is. Edits to HTML/CSS/JS are immediately live on push.

- Repo: `github.com/IshBose/DesignPortfolio`
- Default branch: `master` 
- No CI, no tests, no lint — verification is visual (open the file in a browser)

## Architecture

### File Layout
- [index.html](index.html) — Landing page: hero (tagline + role list), halftone globe canvas, single work list, contact (~270 LOC)
- [about.html](about.html) — Bio, draggable polaroid gallery, accordion experience timeline (~480 LOC)
- [css/styles.css](css/styles.css) — Single comprehensive stylesheet (~2950 LOC, ~50KB)
- [js/main.js](js/main.js) — All interactivity (~795 LOC, vanilla JS + jQuery)
- [js/jquery.js](js/jquery.js) — Bundled jQuery
- [js/land-110m.json](js/land-110m.json), [js/land-dots.js](js/land-dots.js) — Data + renderer for the halftone globe canvas on `index.html`
- [files/](files/) — Case study subdirectories; each is self-contained with its own HTML and images
- [files/porttemplate.html](files/porttemplate.html) — Starting template for new case studies
- [images/](images/) — Shared image assets referenced from `index.html`, `about.html`, and case studies (cover images, MP4 hover previews, polaroids, etc.)
- [assets/](assets/) — Favicons and a few shared SVGs
- [css/woff/](css/woff/) — Local font files
- [CNAME](CNAME), [IshaanBoseResume2026.pdf](IshaanBoseResume2026.pdf) — Domain config and downloadable resume

### Case Studies
Each case study lives in `files/<project>/` with its HTML alongside its images/videos. Current case studies:

- `files/hashi/remediationagent/agent.html` — Terraform Remediation Agent (NDA, password-protected)
- `files/hashi/workspacerecovery/recovery.html` — Recoverable Items (password-protected)
- `files/hashi/tags/tags.html` — Key Value Tags (password-protected)
- `files/hashi/mlm/mlm.html` — Module Lifecycle Management (password-protected)
- `files/hashi/uirefresh/uirefresh.html` — HCP Terraform UI Refresh (password-protected)
- `files/hashi/imageusage/hashi.html` (+ `hashitwo.html`, `hashi-protected.html`, `hashilocked.html`) — Image Usage Insights (password-protected)
- `files/ccomparison/`, `files/tables/`, `files/integrations/`, `files/bulkactions/` — Demandbase archive
- `files/githubforkids/` — UC San Diego archive

**Section flow** (used in `.section-nav` on each case study): Context → Problem → Research → Ideation → Solution → Prototype → Conclusion. Always start new case studies from `files/porttemplate.html`.

### CSS Tokens (defined in `:root` at [css/styles.css:94](css/styles.css#L94))
```
--blk: #131316          --accent: #3478FF        --hover: #090C12
--background: #FFFFFF   --card: #f0f0f0          --bordercolor: #e0e0e0
--primarytext: #141218  --secondarytext: #5a5a5a --highlight: #B21F1F
--newcard: #F0F0F0      --newborder: #E0E0E0
--font-family: "regola", sans-serif
--packer: #02a8ef       --terraform: #7B42BC     (brand accents)
```

### Fonts
Self-hosted `Regola Neue` (FT trial weights) loaded from [css/woff/](css/woff/) via `@font-face` in `styles.css`. `Tiempos Fine` (woff2) is used for italic display text. Material Icons + Material Symbols are pulled from Google Fonts CDN in each HTML file's head.

### JavaScript Features ([js/main.js](js/main.js))
Sections in the file (line numbers approximate — confirm with grep before editing):

| Feature | Approx. line | Notes |
|---|---|---|
| Section-nav scrollspy (IntersectionObserver) | 1–30 | Used on case study pages |
| Legacy scroll-based active-link fallback | 34–60 | |
| Collapsible sections (`.collapsible` class) | ~64–125 | |
| Accordion (`.accordion-item` / `.accordion-header`) | ~139–175 | About page experience timeline |
| Hamburger menu toggle | ~214–235 | All pages |
| Legacy `<section>` scrollspy | ~47–60 | Guarded: skips sections with no matching `[href='#id']` anchor |
| Real-time clock + time-of-day emoji (`#currentTime`, `#timeIcon`) | ~187 | Nav element |
| **Password protection** | ~241–372 | SHA-256 hash check, 5-attempt lockout. Activates on pages containing `#passwordInput` |
| **Image lightbox** for `img.fullwidth` | ~376–494 | Click to expand, Esc/click to close, mobile swipe-to-dismiss. No external library |
| **Work list hover preview** | ~606–700 | Floating cover preview on `.worklist-row` hover/focus. Desktop pointers only; reduced-motion safe |
| **Halftone dither** | ~915–end | Ordered-Bayer renderer; drives the `.site-footer` card and the `.pill-nav` pill. See below |

Other interactivity (the halftone globe, draggable polaroids, scroll-aware nav hiding) lives further down in `main.js`.

### Password Protection
Pages with a password gate include the encrypted content + a `#passwordInput` element; the handler in `main.js` SHA-256-hashes the input and compares against an embedded hash, decrypting and revealing content on match. Limit: 5 attempts → lockout. All HashiCorp case studies are currently gated.

### Work List + Hover Previews (index.html)
`index.html` presents every case study as one joined table (`.worklist`), newest first: a year rail, the title with a one-line subtitle under it, and the company on the right. The year prints only on the first row of each year block; repeat rows carry `.worklist-year-repeat` with the year in a `.visually-hidden` span so screen readers still get it. Subtitle and company share one treatment (13px / 300, `--secondarytext`) — keep them matched.

**Adding a piece** is one `<li>` in `.worklist-items`:

```html
<li>
  <a class="worklist-row" href="./files/<project>/<page>.html"
     data-preview-video="./images/<clip>.mp4" data-preview-poster="./images/<cover>.webp">
    <span class="worklist-year">2026</span>
    <span class="worklist-title">Title</span>
    <span class="worklist-desc">One line on what it is &mdash; keep under ~70 chars.</span>
    <span class="worklist-org">Company</span>
  </a>
</li>
```

Drop `data-preview-video` for pieces with no clip — the poster shows alone. Then add a matching `<link rel="prefetch" href="...">` in the head for each new asset: **always `prefetch`, never `preload`**, so hover media doesn't compete with initial render.

The floating preview itself is built once in [js/main.js](js/main.js) (`WORK LIST HOVER PREVIEW`, before the globe IIFE). It only binds under `(hover: hover) and (pointer: fine)`, crossfades the video on its `playing` event, clamps to the viewport, mirrors on keyboard focus, and skips video under `prefers-reduced-motion`.

### Writings ([writings.html](writings.html))
A third top-level nav destination (Work / About / Writings) for short personal posts, modeled after [p.atrick.org](https://p.atrick.org/)'s reverse-chronological list. `writings.html` reuses the `.worklist` row system from the work list verbatim — same classes, same CSS — rather than a parallel set of list styles: `.worklist-org` is repurposed as a right-aligned read time instead of a company name, and rows carry no `data-preview-*` attributes, so the hover-preview binding in `main.js` (which queries `.worklist-row[data-preview-poster]`) simply doesn't attach. The page sits in a `.writingscontainer` that scopes `--page-max: 700px`, matching `.indexcontainer`'s narrow single-column width.

Individual posts live at `files/writings/<slug>.html`, copied from `files/writings/posttemplate.html` (the `files/porttemplate.html` equivalent for posts): back link to `../../writings.html`, a `.subtitle`-styled date eyebrow, an `.writing-post-title` H1, and `.writing-post-body` prose paragraphs, inside a narrower `.writing-post-container` (`--page-max: 680px`). Add a new post by copying the template, then adding a matching `<li>` to `writings.html`.

`.writingscontainer` and `.writing-post-container` are both siblings of `.site-footer`, like `.indexcontainer` — see the `body:has(> .indexcontainer)` rule in `css/styles.css` for why the footer's width has to be told about each narrow container separately.

**Gotcha:** `.worklist-title`'s hit area is a `::after` pseudo-element stretched with `inset: 0` against its positioned ancestor `.worklist-row` (see the comment above `.worklist-title` in `styles.css`). The global `a:hover { transform: scale(1.005) }` rule applies to that same anchor — and since a `transform` other than `none` makes an element a new containing block, hovering makes the `::after` suddenly resolve against the tiny title text instead of the full row, which un-hovers it, drops the transform, and re-expands the `::after` back to the full row — an infinite flicker loop the instant the cursor isn't over the title text itself. `writings.html`'s row killed this with a scoped `.writingscontainer .worklist-title:hover { transform: none; }` rather than fixing the shared rule (untouched, since the work list on `index.html` wasn't reported as affected). If it ever needs fixing globally, that's the mechanism.

### Site Footer
Every page ends with the same `<footer class="site-footer">` block — a contained, off-white dithered card carrying the ask, the two contact buttons, the copyright and a back-to-top link, in two rows. It sits in the page's own content column so its edges line up with whatever is above it: 700px on `index.html`, the global 1160px everywhere else. Because `.indexcontainer` scopes `--page-max: 700px` to itself and the card is a *sibling* of that element, index's width comes from a `body:has(> .indexcontainer)` rule rather than inheritance.

Layout lives in the `SITE FOOTER` block at the end of [css/styles.css](css/styles.css); the field is drawn by `HALFTONE DITHER` at the end of [js/main.js](js/main.js). The markup is byte-identical on all 16 pages (every href is absolute, `mailto:` or `#main`), so it is copied verbatim regardless of directory depth.

The field is an 8×8 ordered (Bayer) dither — the same dot language as the halftone globe and `halftoneface.png` — drawn on canvas rather than shipped as an image so the dots stay square at any size. The ramp runs **light to dark**, and **index 0 is `null`**: the lightest step paints nothing, so the card's own `--card` background is what shows through. That is why there is no CSS gradient fallback to keep in sync, and why no-JS degrades to a clean flat card.

**Contrast is load-bearing, and the direction is the opposite of what a dark card would need.** The ramp's deepest steps are saturated blue, so ink copy is only safe where the field stays pale. Two mechanisms guarantee it:
1. The **guard masks** in `footerField` hold back the left column and the baseline strip *before* quantization — so what sits behind text is still true dither, just dither that never reaches the saturated end. The two guards use **different strengths on purpose**: the left column carries `--primarytext` (still ~11:1 on ramp index 3, so held to ~0.38), the baseline carries `--secondarytext` at 13px (spent by index 2, so held much harder). One shared strength would have to satisfy the stricter of the two and would drain the colour out of the whole card.
2. **Opaque controls** (`.btn-footer-*`) carry their own ground and can sit anywhere on the field.

Verify contrast by sampling actual canvas pixels under the text and compositing over the card background — not by eye, and not on a canvas you haven't confirmed is fully drawn. Current worst cases: 13.4:1 for the ask, 5.46:1 for the 13px baseline row.

**The develop animation must stay additive.** `mount()` renders the settled field *unconditionally* first; only then, and only from inside a `requestAnimationFrame` callback, does it blank the canvas and arm the reveal. Both `requestAnimationFrame` and `IntersectionObserver` are delivered by the rendering loop and either can go quiet, and because the ramp's lightest step paints nothing, a stalled reveal means a **completely blank card**, not merely an un-animated one. There is also a 5s bail-out that settles the field if the observer never fires — a case actually observed in a headless renderer where rAF ticked and the observer did not. Do not restructure this so the field's existence depends on either API.

Three notes on the surrounding code, all pre-existing:
- A legacy global `footer { text-align: center }` and `footer p { text-align: center }` (~line 2715) still match this element. A directly-matching declaration beats an inherited one, so `.site-footer p` re-aligns explicitly.
- The global `a:hover { color: var(--hover) }` at [css/styles.css:380](css/styles.css#L380) overrides every anchor in the card on hover. Each one states its own hover/focus/active colour rather than inheriting one nothing here chose.
- Most pages load `main.js` *above* the footer markup and without `defer`, so the routine waits for `DOMContentLoaded` instead of assuming the element exists.

### Pill Nav Field

The pill nav carries the same dithered surface as the footer, from the same renderer: one `<canvas class="pill-nav-dither">` as the first child of `<nav class="pill-nav">` on all 14 pages that have the pill (`hashitwo.html`, `hashilocked.html` and `hash-protected.html` have no pill nav). `.pill-nav` gets `overflow: hidden` to clip the field to the capsule and `isolation: isolate`; the canvas is `z-index: 0` and every other child is lifted to `z-index: 1`.

**The nav's contrast guarantee is structural, not masked, and that is the one thing to preserve.** The footer can run its ramp to saturated blue because its guard masks hold back the regions that carry copy. The pill carries copy across its entire width — there is nowhere to guard — so `NAV_PALETTE` simply stops three steps short of the footer's: `[null, "#e4edfb", "#c8dcff", "#ded7ef"]`, where the deepest paintable step is 4.97:1 against `--secondarytext` (the 14px tabs, links and clock) and 13.4:1 against `--primarytext`. No bloom position can cost the nav its AA. **Do not add a step without redoing that sum** — the footer's next entry down, `#9cbeff`, is 3.69:1 and fails.

Verified by sampling the live canvas under each text element's box and compositing over the pill's white ground: worst cases 4.95:1 (the two link buttons, over the lavender speckle), 4.97:1 (the inactive tab), 15.76:1 (the name).

`navField` is a radial bloom anchored just past the pill's lower-right corner — the light the footer's sphere throws, on a strip too short to show the sphere itself. It carries a `* 1.3` gain because the bloom's centre is off-canvas: ungained, the strip only samples the falloff's tail and the whole pill flattens to one wash of index 1, which is a tint rather than a halftone. Cell size is 3px, not the footer's 4px, because the pill sits directly behind 14px type. The develop animation never runs here — the pill is on screen at load, so `mount()` leaves the settled field alone.

### Analytics
Google Tag Manager (`GTM-NRTS34N`) is injected at the top of each HTML page's `<head>` plus a `<noscript>` iframe in the body.

## Deployment

Push to GitHub → GitHub Pages serves the repo at `ishaanbose.com` (custom domain via `CNAME`). No build step, no GitHub Action — the live site is whatever is on the deploy branch.

## Working in This Repo

- **Prefer editing existing files** over creating new ones. New case studies copy `files/porttemplate.html` into a new `files/<project>/` directory.
- **Verify visually**: there are no automated tests. After non-trivial CSS/JS changes, open the affected page (`index.html`, `about.html`, or the case study) in a browser to confirm behavior.
- **Don't refactor opportunistically**: the codebase mixes inline styles, utility classes, and component classes by design — match the surrounding style rather than normalizing.
- **Smart quotes / HTML entities**: existing HTML uses entities like `&lsquo;`, `&ndash;`, `&middot;` for typographic punctuation. Keep that convention.
- **jQuery is loaded** but new interactivity is mostly vanilla JS — follow whichever the surrounding code uses.

## Design Context
- **Register**: `brand` — the portfolio site itself is the product being judged.
- **Audience**: people who already have a reason to look — a colleague, a founder, a designer sent the link. Not an active hiring loop.
- **Voice**: thoughtful · quietly playful · precise. Restraint reads as senior; flourishes (clock emoji, halftoneface, polaroids) must be specific to Ishaan.
- **Anti-references**: Y2K / brutalist / maximalist showcase aesthetic; generic Webflow / Framer templates.
- **A11y bar**: WCAG 2.1 AA + `prefers-reduced-motion` alternatives on every animation.
- Full strategic spec in [PRODUCT.md](PRODUCT.md). Visual system spec in [DESIGN.md](DESIGN.md) (if present). Both are read by `/impeccable` commands.

## Memory & References
See [/Users/ishaanbose/.claude/projects/-Users-ishaanbose-Documents-GitHub-DesignPortfolio/memory/MEMORY.md](../../.claude/projects/-Users-ishaanbose-Documents-GitHub-DesignPortfolio/memory/MEMORY.md) for the persisted user preferences and patterns (e.g., hover video pattern, prefetch policy). Update it when new conventions emerge.
