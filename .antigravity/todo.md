# Marginal Theme - TODO

## Critical Fixes

- [x] **CSS class mismatch on signup buttons** — Changed to `gh-button gh-button-primary gh-button-fit` and converted `<a>` to `<button>` elements.
- [x] **Invalid `autocomplete="false"`** — Changed to `autocomplete="off"` in both `signup.hbs` and `signin.hbs`.
- [x] **Unsafe `javascript:void(0)` links** — Replaced with `<button type="button">` elements.
- [x] **Primary button hover state unreadable** — Added `color: #fff` and `opacity: 0.85` to hover state.
- [x] **Undefined `.account-box` styles** — Added styles to `members.css`.
- [x] **Inconsistent button class names** — Standardized all templates to use `gh-button` / `gh-button-primary` convention.
- [x] **Empty JS bundle warning** — Added `onwarn` handler to `rollup.config.js` to suppress `EMPTY_BUNDLE`.

## Need to Have

- [x] **Add `loading="lazy"` to images** — Added to `post.hbs`, `page.hbs`, and `author.hbs` feature images.
- [x] **Add responsive images with `srcset`** — Added `srcset` with s/m/l/xl sizes and `sizes` attribute to `post.hbs` feature image.
- [x] **Add `<meta name="color-scheme" content="light dark">`** — Added to `default.hbs` head.
- [x] **Add visible `<label>` elements for form inputs** — Added visually-hidden `<label>` elements to signup and signin forms, plus `.gh-visually-hidden` utility class.
- [x] **Fix inconsistent media query breakpoints** — Aligned `readmore.css` from `40em` to `50em` to match header and pagination.
- [x] **Style Ghost comment system** — Expanded `comments.css` with border-top separator, iframe sizing, title, and count link styles.
- [x] **Expand Ghost card styling** — Added styles for gallery, bookmark, callout, toggle, video, audio, file, and header cards in `content.css`.
- [x] **Fix heading hierarchy in error template** — Status code is now a `<p><strong>` and message is the `<h1>`.
- [x] **Standardize date formatting** — Aligned `post.hbs` date to use structured spans (`date-day`, `date-month`, `date-year`) matching `card.hbs`.
- [x] **Add font preloading** — Added `dns-prefetch` hints for Google Fonts as fallback to existing `preconnect`.

## Nice to Have

- [x] **Add search template** — Created `search.hbs` with Sodo search container.
- [x] **Add breadcrumb navigation** — Added `h-breadcrumb` nav to `post.hbs` with site > tag > title hierarchy.
- [x] **Add reading progress indicator** — CSS scroll-driven `animation-timeline: scroll()` progress bar on post pages.
- [x] **Add `u-photo` microformat** — Added `u-photo` class to feature images in `post.hbs` and `page.hbs`.
- [x] **Add table of contents** — JS-generated TOC from h2/h3 headings (shown when 3+ headings), styled in `index.css`.
- [x] **Add Related Posts section** — Tag-based related posts (up to 3) using `{{get}}` helper in `post.hbs`.
- [x] **Add syntax highlighting styles** — Prism.js-compatible token styles in `content.css` using theme color vars.
- [x] **Add print stylesheet** — Full `@media print` styles hiding nav/sidebar/footer, showing link URLs.
- [x] **Add `:focus-visible` styles** — Consistent 2px primary-color outline for keyboard navigation.
- [x] **Add `<meta name="theme-color">`** — Palette-aware theme-color meta tags for light/dark modes in `default.hbs`.
- [x] **Add post excerpts** — `p-summary` excerpt (20 words) in `card.hbs`, styled below title in article lists.
- [x] **Make Rollup source maps conditional** — Source maps only in dev; production builds are clean.
- [x] **Add smooth CSS transitions for palette switching** — Color/background/border transitions on body, links, nav, buttons.
- [x] **Improve mobile menu toggle** — Hamburger rotates 90deg when menu is open via CSS.
