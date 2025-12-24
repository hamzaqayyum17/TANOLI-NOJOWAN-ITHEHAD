# GitHub Copilot Instructions for this repository

Purpose: help AI coding agents become immediately productive on this small static website project.

- Project type: plain static multi-page website (HTML/CSS/JS). No build system, no server-side code.
- Key entry points:
  - [index.html](index.html) — homepage layout and examples of cards/events.
  - [blog.html](blog.html), [post.html](post.html) — blog listing and single-post pattern.
  - [events.html](events.html) — canonical events list and structure.
  - [assets/css/style.css](assets/css/style.css) — single stylesheet; follow existing class names and spacing.
  - [assets/js/main.js](assets/js/main.js) — client-side behaviors (nav toggle, small interactions).

Big picture and why
- This repo contains a small, hand-authored static site whose pages repeat a shared header/footer structure rather than using templates. Changes to global UI (header, footer, styles) must be applied across the HTML files.
- Content is mostly static: adding posts/events means adding or editing HTML fragments (article/event-card) rather than modifying a CMS or DB.

Conventions and common patterns (observe and follow)
- Reusable classes: `container`, `btn`, `btn-primary`, `btn-outline`, `btn-ghost`, `card`, `card-body`, `meta`, `muted`, `hero`, `hero-cta`.
- Navigation: the header uses a hamburger `button#nav-toggle` and `nav#main-nav`. JS expects these IDs for toggle behavior — update `assets/js/main.js` when changing them.
- Cards: blog previews are `article.card` with an `img` followed by `.card-body` containing `h3 > a`, `.meta`, and a paragraph.
- Dates and events: `event-card` contains `.event-date` and descriptive block; keep markup consistent to preserve styling.

Developer workflows
- No build step: preview edits by opening the HTML files in a browser (File → Open) or use a simple static server (e.g., `python -m http.server`).
- Editing CSS/JS: modify `assets/css/style.css` and `assets/js/main.js` directly. Keep selectors small and avoid global resets that change utility classes.
- Deployment: copy the repository contents to a static host (S3, Netlify, GitHub Pages). There are no scripts or CI configured in this repo.

Examples (how to make common changes)
- Add a new blog preview on the homepage: copy an existing `article.card` block in [index.html](index.html) and update `img`, title link (to a new `post.html` or a new post file), `.meta`, and summary.
- Add a site-wide link: update the `nav` block in each HTML file (e.g., [index.html](index.html)) — the header/footer are duplicated across pages.
- Change mobile nav behavior: edit `assets/js/main.js` and ensure the `nav-toggle` button still has `aria-label="Toggle navigation"` for accessibility.

Integration points & external deps
- Fonts: Google Fonts links are used in the head; no package manager dependencies.
- Images: stored under `assets/images/` and referenced with relative paths — preserve path correctness when moving files.

What NOT to do
- Do not introduce a complex build system or framework without project owner approval: this site is intentionally simple.
- Avoid renaming core utility classes (`container`, `btn`, `card`) unless you update every HTML file.

Where to look for more context
- Homepage and component examples: [index.html](index.html)
- Styles: [assets/css/style.css](assets/css/style.css)
- Interactive behavior: [assets/js/main.js](assets/js/main.js)

If anything here is unclear or you want the instructions adjusted (more examples or CI/deploy steps), please ask and I'll iterate.
