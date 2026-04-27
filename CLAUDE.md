# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint check
```

No test suite is configured yet.

## Architecture

**Next.js 16.2.4 App Router** portfolio site — single page, no routes beyond `/`.

### Theme system

All visual theming is driven by CSS custom properties in `app/globals.css`. Two axes:
- `data-theme="light|dark"` on `<body>` — switches the full color palette
- `data-direction="a|b"` on `<body>` — swaps the accent color (burnt orange ↔ gold)

`contexts/ThemeContext.tsx` holds the `isDark` / `direction` state and syncs them to those body attributes via `useEffect`. Any component that needs to **read** the theme for logic (not just CSS) must call `useTheme()` — currently only `Nav`, `Hero`, and `GeometricHero` do this.

### Canvas animation (`components/GeometricHero.tsx`)

The hero background is a multi-layer canvas animation that re-initialises whenever the `accent` prop changes (accent is a hex string computed from theme state). Four layers run in a single `requestAnimationFrame` loop: constellation grid → floating geometric shapes → orbiting particles with trails → mouse-following radial glow. All randomised values (node positions, orbiter speeds, shape types) are seeded once at mount — do not move them outside the `useEffect`.

### Component model

- **Server components** (no `'use client'`): `Section`, `SectionLabel`, `TechPill`, `Footer`, `About`, `Experience`, `Projects`, `app/page.tsx`
- **Client components** (`'use client'`): everything with interactivity — `Nav`, `Hero`, `GeometricHero`, `ScrollReveal`, `MagneticButton`, `TimelineItem`, `ProjectCard`, `Skills`, `Writing`, `Contact`, `ThemeContext`

`ScrollReveal` uses `IntersectionObserver` with `threshold: 0.15` and fires once (disconnects after first intersection). `MagneticButton` applies a `translate(x,y)` offset proportional to mouse distance from the button centre.

### Styling approach

Inline styles dominate (faithful to the original HTML prototype). Tailwind is used for the global CSS reset, the `skills-marquee` keyframe, and the responsive breakpoint helpers (`nav-desktop`, `nav-mobile-btn`, `about-grid`). CSS variable references like `var(--accent)` work in both inline styles and Tailwind's arbitrary-value syntax.

### Fonts

Loaded via `next/font/google` in `app/layout.tsx` as CSS variables `--font-instrument-serif` and `--font-jetbrains-mono`. `globals.css` composes them into `--font-serif` and `--font-mono` which all components reference. The sans-serif stack remains the system default (`-apple-system, BlinkMacSystemFont, …`).
