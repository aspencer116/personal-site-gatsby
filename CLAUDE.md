# Claude Code Guidelines

## Project Overview

Gatsby 2 personal portfolio site running React 16 and SCSS. Node 18+.

## Stack

- **Framework**: Gatsby 2 (`gatsby-plugin-sass` for SCSS)
- **React**: 16.14 (cannot upgrade without migrating to Gatsby 3+)
- **Styling**: Global SCSS — no CSS modules or CSS-in-JS
- **Fonts**: NEXT-pan (display/sans-serif), Segment (body), PP Editorial New (serif/editorial headings)

## CSS Architecture (ITCSS)

Styles live in `src/styles/` and follow an ITCSS-based structure imported via `base.scss`:

1. **Settings** — SCSS variables, breakpoints, CSS custom properties
2. **Tools** — Mixins (`heading-base`, `heading-editorial`, `paragraph-base`, etc.)
3. **Generic** — Focus styles
4. **Elements** — Reset, `@font-face` declarations
5. **Objects** — Reusable utility classes
6. **Components** — Component-specific styles

All styles are imported globally through `gatsby-browser.js`. Components do not import their own stylesheets.

## Class Naming Convention (BEM-like)

- `.c-*` — Component classes (e.g., `.c-landing`, `.c-site-header`)
- `.t-*` — Typography classes (e.g., `.t-title`, `.t-editorial`, `.t-paragraph`)
- `.o-*` — Object/utility classes (e.g., `.o-delist`, `.o-visually-hidden`)
- `.g-*` — Grid classes (e.g., `.g-2-col`)
- `.mb-*`, `.mt-*`, `.mr-*` — Spacing utilities (e.g., `.mb-lg`, `.mt-md`)

## Use Object Utility Classes

Prefer existing utility classes from `src/styles/objects/` over writing new declarations in component SCSS files for:

- **Typography** (`_typography.scss`): Use `.t-title`, `.t-editorial`, `.t-heading-1` through `.t-heading-6`, `.t-paragraph`, `.t-meta`, `.t-callout`, etc.
- **Spacing** (`_spacing.scss`): Use `.mb-xs`, `.mb-sm`, `.mb-md`, `.mb-lg`, `.mb-xl`, `.mt-sm`, `.mt-md`, `.mr-xs`, `.mr-sm`, etc.
- **Grid** (`_grid.scss`): Use `.g-2-col`, `.g-color-grid` for common layouts
- **Colors** (`_colors.scss`): Use existing color utility classes
- **General** (`_general.scss`): Use `.o-visually-hidden`, `.o-delist`, `.o-delink`, `.o-block`

Only create new declarations in component files for layout and behavior specific to that component. Do not duplicate typography sizes, spacing values, or color assignments that already exist as utilities.

Even if the utility styles for typography are not exactly right, still prefer these in order to stay consistent across the codebase.

## CSS Variables

Key variables defined in `:root` (see `src/styles/settings/`):

- **Fonts**: `--v-font-display`, `--v-font-editorial`, `--v-font-body`
- **Colors**: `--c-black`, `--c-white`, `--c-highlight`, `--c-grayscale-1` through `--c-grayscale-6`
- **Spacing**: `--space-xxs` through `--space-xl`
- **Layout**: `--v-page-margin` (6.5vw mobile, 10vw tablet+)
- **Transitions**: `--v-transition-time`, `--v-transition-function`

## Breakpoints

Defined as SCSS variables in `src/styles/settings/_breakpoints.scss`:

- `$bp-sm`: 27.5rem (440px)
- `$bp-md`: 45rem (720px)
- `$bp-lg`: 60rem (960px)
- `$bp-xl`: 93.75rem (1500px)

## Dark Mode

The site supports dark mode via `@media (prefers-color-scheme: dark)`. Color variables auto-invert in dark mode. Use CSS custom properties (`var(--c-*)`) for colors — never hardcode color values.

## Component Patterns

- Components live in `src/components/`, with page-section components in `src/components/home/`
- Use functional components with arrow functions
- Use `prop-types` for type checking
- Use Gatsby's `<Link>` for internal navigation
- Static fonts are in `static/fonts/`, images in `src/images/`
