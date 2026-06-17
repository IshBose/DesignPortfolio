# CLAUDE.md

Guidance for Claude Code agents working in this repository.

## Project Overview

Static HTML/CSS/JS design portfolio for Ishaan Bose, deployed via GitHub Pages at `ishaanbose.com` (CNAME in repo root). **No build system, no framework, no package manager** — files are deployed as-is. Edits to HTML/CSS/JS are immediately live on push.

- Repo: `github.com/IshBose/DesignPortfolio`
- Default branch: `master` 
- No CI, no tests, no lint — verification is visual (open the file in a browser)

## Architecture

### File Layout
- [index.html](index.html) — Landing page: hero, halftone globe canvas, HashiCorp project grid, archive grid (~370 LOC)
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
| Real-time clock + time-of-day emoji (`#currentTime`, `#timeIcon`) | ~187 | Nav element |
| **Password protection** | ~241–372 | SHA-256 hash check, 5-attempt lockout. Activates on pages containing `#passwordInput` |
| **Image lightbox** for `img.fullwidth` | ~376–494 | Click to expand, Esc/click to close, mobile swipe-to-dismiss. No external library |

Other interactivity (draggable polaroids, scroll-aware nav hiding) lives further down in `main.js`.

### Password Protection
Pages with a password gate include the encrypted content + a `#passwordInput` element; the handler in `main.js` SHA-256-hashes the input and compares against an embedded hash, decrypting and revealing content on match. Limit: 5 attempts → lockout. All HashiCorp case studies are currently gated.

### Hover Video Previews on Cards (index.html)
Project cards on `index.html` show a static image by default and play a muted, looping MP4 on hover. The MP4s are declared with `<link rel="prefetch" href="...">` at the top of `index.html` — **always use `prefetch`, not `preload`**, so the hover assets don't compete with initial render. Pattern is documented in memory; follow it when adding new cards.

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
- **Audience**: senior design hiring managers reading for senior/staff IC leveling signal during a hiring loop.
- **Voice**: thoughtful · quietly playful · precise. Restraint reads as senior; flourishes (clock emoji, halftoneface, polaroids) must be specific to Ishaan.
- **Anti-references**: Y2K / brutalist / maximalist showcase aesthetic; generic Webflow / Framer templates.
- **A11y bar**: WCAG 2.1 AA + `prefers-reduced-motion` alternatives on every animation.
- Full strategic spec in [PRODUCT.md](PRODUCT.md). Visual system spec in [DESIGN.md](DESIGN.md) (if present). Both are read by `/impeccable` commands.

## Memory & References
See [/Users/ishaanbose/.claude/projects/-Users-ishaanbose-Documents-GitHub-DesignPortfolio/memory/MEMORY.md](../../.claude/projects/-Users-ishaanbose-Documents-GitHub-DesignPortfolio/memory/MEMORY.md) for the persisted user preferences and patterns (e.g., hover video pattern, prefetch policy). Update it when new conventions emerge.
