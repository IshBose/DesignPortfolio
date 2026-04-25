# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS design portfolio for Ishaan Bose, deployed via GitHub Pages at `ishaanbose.com`. No build system, no framework, no package manager — files are deployed as-is.

## Architecture

### File Layout
- `index.html` — Main portfolio landing page with project grid
- `about.html` — Bio, draggable polaroid gallery, accordion experience timeline
- `css/styles.css` — Single comprehensive stylesheet (~50KB)
- `js/main.js` — All interactivity (~18KB, vanilla JS + jQuery)
- `files/` — Case study subdirectories, each self-contained with its own HTML and images
- `files/porttemplate.html` — Template to follow when creating new case studies

### Case Study Structure
Each case study lives in `files/<project>/`. The section navigation follows: Context → Problem → Research → Ideation → Solution → Prototype → Conclusion. Use `porttemplate.html` as the starting point for new case studies.

### CSS Variables (defined in `:root`)
Key tokens: `--blk`, `--accent` (#3478FF), `--background`, `--card`, `--bordercolor`, `--primarytext`, `--secondarytext`. Brand-specific: `--packer` (#02a8ef), `--terraform` (#7B42BC).

### Password Protection
`js/main.js` (lines ~229–372) implements client-side password protection for NDA case studies. The check runs on pages that have a `.login-container` element. Protected pages show a lock screen before revealing content. The system limits to 5 attempts before locking.

### Image Overlay / Lightbox
Any `<img class="fullwidth">` gets a click-to-expand fullscreen overlay (implemented in `js/main.js` lines ~376–494). Supports Esc key, click-to-close, and mobile swipe-to-dismiss. No external library.

### Key Interactive Features in `main.js`
- Hamburger menu toggle
- Real-time clock with time-of-day emoji in the nav
- Scroll-aware nav hiding
- Draggable polaroid photos (about.html)
- Accordion for experience section (about.html)
- Collapsible sections (`.collapsible` class)

## Deployment

Push to `main` branch → GitHub Pages auto-deploys to `ishaanbose.com`. No CI/CD, no build step.

## Fonts

Custom `Regola Neue` font loaded from `css/woff/` directory. `Tiempo Italic` also used. These are referenced directly in `styles.css` via `@font-face`.
