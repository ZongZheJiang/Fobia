# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start local dev server at http://localhost:3000
npm run build     # production build (use this to type-check before committing)
npm run lint      # ESLint across the project
npm start         # serve the production build (requires build first)
```

There is no test suite. `npm run build` is the primary correctness check — it runs the TypeScript compiler and catches import/type errors across all pages.

To add a new Shadcn component:
```bash
npx shadcn@latest add <component-name>
```
This installs into `components/ui/`. Do not edit those files manually.

## Architecture

The project is a **Next.js 16 App Router** site (React 19, TypeScript strict mode). The stack also includes Tailwind CSS v4, Shadcn (radix-nova style, CSS variables), Framer Motion, GSAP, and Three.js.

### Three-layer component model

Every UI surface flows through three layers. Understanding this layering is the most important thing for staying productive:

| Layer | Directory | Purpose |
|---|---|---|
| **Primitives** | `components/ui/` | Raw Shadcn components. Never edit. Upgrade via `npx shadcn@latest add`. |
| **Sections** | `examples/` | Composed, page-ready sections built on top of `components/ui/`. These are the actual building blocks. One file per section. Edit freely. |
| **Pages** | `app/` | Route files. Import from `examples/` and `data/`. Keep logic minimal — mostly layout and data wiring. |

### Data layer

`data/` contains plain TypeScript objects (no JSX, no side-effects). Each page's copy lives in its own file. Types for all data shapes live in `types/`.

**Rule: all static content arrays and objects must live in `data/`, never inline in a page or component.** When adding copy to any page, create a `data/<pageName><DataName>.tsx` file, define the matching interface in `types/`, and import it. Pages must contain only layout JSX and imports — zero data literals.

Key data files:
- `data/navbarUsecases.tsx` / `data/navbarResources.tsx` — drive the nav dropdowns in `examples/navigation-menu.tsx`
- `data/cardTriplet*.tsx` — the 3-column feature cards rendered on each use-case page via `examples/card-triplets.tsx`
- `data/useCase*.tsx` — the headline + CTA copy for each use-case page via `examples/use-case-summary-card.tsx`

### Routing

All routes are under `app/` using the App Router file-system convention. Sub-routes use underscores (`use_cases/enterprise_professional`) not hyphens — keep this consistent.

### Path alias

`@/*` maps to the repo root, so `@/components/ui/button` resolves to `components/ui/button.tsx`. Use `@/` for all imports rather than relative paths.

### Theming

Light/dark mode is handled by `components/theme-provider.tsx` (next-themes). All colours must use CSS variables (`text-foreground`, `bg-card`, `text-muted-foreground`, etc.) rather than hardcoded Tailwind colour classes like `text-black` or `bg-white`, so they adapt to both themes.

### Static assets

Images go in `public/`. Reference them as `/path/from/public` in `<Image src>`. External images are only allowed from `images.unsplash.com` (configured in `next.config.ts`). Use Next.js `<Image>` for all `public/` assets; bare `<img>` is acceptable only for dynamically-sourced URLs (e.g. carousel data from `audiencePosts`).
