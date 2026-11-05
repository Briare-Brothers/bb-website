# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for Briare Brothers. A single-route Next.js 14 App Router site exported as static HTML, with a Three.js background and framer-motion reveals. Node 20 is pinned in `.node-version` and `netlify.toml`.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export -> out/
npx serve out      # preview the production build
npm run lint
```

- `npm start` does not work. Next 14 refuses `next start` when `output: 'export'` is set in `next.config.mjs`. Serve `out/` with a static server instead.
- `npm run lint` has no committed ESLint config, so the first run prompts interactively to create one. Don't rely on it in non-interactive sessions.
- There are no tests. `npm run build` is the only verification step.

## Architecture

**One page, composed of sections.** `app/page.tsx` is the only route and renders every section in order: Scene3D, Navigation, Hero, ProductsSection, SoftwareSection, AboutSection, ContactSection, Footer. Navigation is hash anchors only. The nav label "Services" points at `#software`, and `Navigation.tsx` and `Footer.tsx` each keep their own copy of the link list, so section `id`s and both link lists must stay in sync.

**Scene3D must stay client-only.** `page.tsx` loads it through `next/dynamic` with `ssr: false` because React Three Fiber cannot server-render. `transpilePackages: ['three']` in `next.config.mjs` is part of the same requirement. Importing Scene3D directly breaks the build.

**Reveal pattern.** Every component is `'use client'`. Hero and Navigation animate on mount. The below-the-fold sections (Products, Software, About, Contact) all use the same pattern: a `useRef` on the section container plus framer-motion `useInView(ref, { once: true, amount: ... })` driving `animate`. New sections should copy this rather than invent another.

**Content is hardcoded data inside components, and some of it is duplicated.** When a product is added, removed, renamed, or changes status, update all of:
- the `products` array in `components/ProductsSection.tsx` (card content, status, accent hex, store links)
- the "Products Shipped" stat in `components/Hero.tsx`
- the "Products" row in the facts list in `components/AboutSection.tsx`
- `description` and `keywords` in the `metadata` export in `app/layout.tsx`

The Aboyeur order count is duplicated the same way: it appears in the Hero "Orders Processed" stat and twice in the Aboyeur entry in `ProductsSection.tsx` (the `description` text and `metric.value`). Update all three together.

The `layout.tsx` metadata is currently stale: it still names ErewhonPOS, Nexus Files, and EchoPalace, which were renamed (ErewhonPOS became Aboyeur) or removed. Don't treat it as the source of truth for the product list.

**Styling.** Tailwind plus a small set of semantic classes in `app/globals.css`: `.card` (glass panel), `.gradient-text`, `.gradient-text-color`, `.grid-bg`, `.hero-orb`, `.stat-number`, and the status dots `.dot-live` / `.dot-beta` / `.dot-dev` / `.dot-early`. Product status badges pair a `dotClass` with a `statusClass` and an `accent` hex in the product data. Inter is loaded through a Google Fonts `@import` in globals.css. The `@/*` path alias resolves to the repo root.

## Deployment

Netlify is the live target: `netlify.toml` runs `npm run build` and publishes `out/`, with an SPA redirect duplicated in `public/_redirects`. `vercel.json` also exists, but its `outputDirectory` is `.next`, which does not match the static export. Treat it as unverified.

## README is stale

`README.md` describes a crypto-investment site, lists a `CryptoSection.tsx` that no longer exists, and gives a different contact email than the site uses. Don't rely on it beyond the install, dev, and build commands.
