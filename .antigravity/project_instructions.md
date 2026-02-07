# .antigravity/project_instructions.md

This file provides guidance to Antigravity (Google Deepmind's agentic coding assistant) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development with livereload (watches .hbs, CSS, JS)
npm run build        # Production build (CSS/JS → assets/built/)
npm run test         # Build + validate theme with gscan (Ghost theme scanner)
npm run zip          # Build + create distributable zip archive
```

## Architecture

This is a Ghost CMS theme (requires Ghost >=5.0.0) using Handlebars templates, with an IndieWeb-inspired retro-minimalist design.

### Build Pipeline

`assets/js/index.js` is the Rollup entry point. It imports `assets/css/index.css`, which chains all CSS via `@import`. Rollup + PostCSS compiles everything to `assets/built/index.css` and `assets/built/index.js`. The JS bundle is currently empty (CSS-only mobile toggle via checkbox hack, no runtime JS needed).

### CSS Structure

`assets/css/index.css` imports in this order:
1. `vars.css` — CSS custom properties (oklch colors, system fonts, layout vars) + dark mode via `@media (prefers-color-scheme: dark)`
2. `components/` — Reset (`global.css`), forms, buttons
3. `ghost/` — Ghost-specific: `header.css` (2-column grid layout), `content.css` (post typography), `readmore.css`, `members.css`, `errors.css`, `footer.css`, `badge.css`, `pagination.css`, `comments.css`
4. Theme-specific styles at the bottom of `index.css` (article lists, post layout, author/tag archives)

### Template Hierarchy

`default.hbs` is the master layout: header → checkbox mobile toggle → 2-column grid (`nav | main`) → footer. All page templates extend it with `{{!< default}}`.

- `index.hbs` — Home page: `h-feed` with `article-list` (date + title per post)
- `post.hbs` — Single post with `h-entry` microformats, feature image, prev/next nav
- `page.hbs` — Static pages (conditional title/feature image via `@page.show_title_and_feature_image`)
- `tag.hbs` / `author.hbs` — Archive pages using `partials/card.hbs` as list items
- `error.hbs` — Standalone error page (does not extend default.hbs)
- `members/` — Signup/signin/account pages for Ghost members

Custom templates by slug: `page-about.hbs`, `tag-news.hbs`, `author-jamie.hbs`.

### Layout Model

The site uses a 2-column CSS Grid (`1fr 3fr`) with navigation on the left and content on the right. At `≤40em`, it collapses to a single column with a CSS-only mobile menu (checkbox hack). Body is max `50rem` wide, centered.

### IndieWeb Microformats

Templates include `h-feed`, `h-entry`, `h-card`, `p-name`, `u-url`, `u-uid`, `dt-published`, `e-content`, `p-author`, `p-summary` classes for IndieWeb compatibility. A hidden `h-card` for the site is in the nav area of `default.hbs`.

### Deployment

`.github/workflows/deploy-theme.yml` auto-deploys on push to master/main using `TryGhost/action-deploy-theme@v1`. Requires `GHOST_ADMIN_API_URL` and `GHOST_ADMIN_API_KEY` secrets.

### Local Development Setup

Symlink this theme into a local Ghost install's `content/themes/` directory, then run `npm run dev`.
