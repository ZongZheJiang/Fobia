# Fobia Website

The marketing and documentation website for [Fobia](https://fobia.ai), built with Next.js (App Router).

## Getting Started

### Prerequisites

* Node.js 18+
* npm

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```sh
npm run build
npm start
```

---

## File Layout

```
fobia-app/
│
├── app/                        # Next.js App Router pages (each folder = a route)
│   ├── page.tsx                # Home / landing page  (/)
│   ├── layout.tsx              # Root layout — wraps every page
│   ├── about/page.tsx          # /about
│   ├── blog/page.tsx           # /blog
│   ├── community/page.tsx      # /community
│   ├── documentation/page.tsx  # /documentation
│   ├── download/page.tsx       # /download
│   └── use_cases/              # /use_cases/* — audience-specific pages
│       ├── enterprise_professional/page.tsx
│       ├── ai_enthusiast/page.tsx
│       └── application_developer/page.tsx
│
├── components/                 # Base UI components
│   ├── ui/                     # Raw Shadcn components — import here, do NOT edit
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── navigation-menu.tsx
│   │   └── ...
│   ├── footer.tsx              # Site-wide footer
│   ├── fobia.tsx               # Fobia logo component
│   ├── theme-provider.tsx      # next-themes provider
│   ├── theme-switcher.tsx      # Light / dark toggle button
│   └── ...
│
├── examples/                   # Composed, page-ready sections built on top of components/ui
│   │                           # These are the building blocks imported into app/ pages
│   ├── navigation-menu.tsx     # Top nav bar (sticky, theme-aware)
│   ├── hero.tsx                # Hero section
│   ├── hero-download.tsx       # Download-page hero variant
│   ├── download-cards.tsx      # Platform download card grid
│   ├── card-triplets.tsx       # 3-column feature card grid (used on use-case pages)
│   ├── use-case-summary-card.tsx # Headline + CTA card for use-case pages
│   ├── carousel-audiences.tsx  # Audience carousel (used on landing page)
│   ├── horizontal-card.tsx     # Featured blog post card
│   ├── horizontal-card-grid.tsx # Blog post grid
│   └── ...
│
├── data/                       # Static content / copy consumed by examples and pages
│   ├── navbarUsecases.tsx      # Links shown in the "Use Cases" nav dropdown
│   ├── navbarResources.tsx     # Links shown in the "Resources" nav dropdown
│   ├── audiencePosts.tsx       # Audience cards shown in the landing-page carousel
│   ├── blogPosts.tsx           # Blog post list
│   ├── featuredBlogPost.tsx    # Single featured blog post
│   ├── downloadCards.tsx       # Per-platform download card data
│   ├── cardDatas.tsx           # Generic card data (landing-page feature cards)
│   ├── useCaseEnterpriseProfessional.tsx   # Summary card copy for enterprise page
│   ├── useCaseAIEnthusiast.tsx             # Summary card copy for AI enthusiast page
│   ├── useCaseApplicationDeveloper.tsx     # Summary card copy for app developer page
│   ├── cardTripletEnterpriseProfessional.tsx  # 3-card feature data for enterprise page
│   ├── cardTripletAIEnthusiast.tsx            # 3-card feature data for AI enthusiast page
│   └── cardTripletApplicationDeveloper.tsx    # 3-card feature data for app developer page
│
├── types/                      # TypeScript interfaces shared across the project
│   ├── blogPost.ts
│   ├── navbarItem.ts
│   ├── useCardSummary.ts       # useCaseSummary — summary card props
│   ├── useCaseCard.ts          # UseCaseCard — feature triplet card props
│   ├── downloadCard.ts
│   └── audiencePost.ts
│
├── public/                     # Static assets served at /
│   ├── icons/                  # App / integration icons (used in icon carousel)
│   ├── blogPics/               # Blog post images
│   ├── useCasePics/            # Use-case feature images (referenced in cardTriplet data)
│   ├── fobia-logo.jpeg
│   ├── discord.svg
│   ├── linkedin.svg
│   └── ...
│
└── lib/
    └── utils.ts                # Tailwind cn() helper
```

### Key conventions

| Layer | Rule |
|---|---|
| `components/ui/` | Shadcn source — never edit directly. Upgrade via `npx shadcn@latest add`. |
| `examples/` | Composed sections that wrap `components/ui/`. Edit freely. One file per section. |
| `data/` | Plain TypeScript objects. No JSX, no side-effects. Each page's copy lives in its own file. |
| `app/` | Pages only — import from `examples/` and `data/`, keep logic minimal. |
| Image paths | Static images go in `public/`. Reference them as `/path/from/public` in `<Image src>`. |

---

## Built With

* [![Next][Next.js]][Next-url]

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
