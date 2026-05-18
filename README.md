# Smarter Foundry — Company Website

The company website for **Smarter Foundry LLC**, the independent software
company behind SmarterEats, SmarterTraining, and PostPoint.

The site exists to establish a credible business presence and explain, at a
high level, that Smarter Foundry builds and operates AI-enabled niche consumer
mobile apps. It is intentionally lightweight — no heavy marketing, no backend.

Built with the same stack and conventions as the SmarterEats and
SmarterTraining websites so deployment and maintenance stay familiar.

## Stack

- Next.js 16 (App Router, `output: 'export'` — fully static)
- React 19
- Tailwind CSS 4
- TypeScript
- pnpm

No backend, database, authentication, or analytics.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static export → ./out
```

`pnpm build` writes a static site to `./out` that can be served by any static
host.

## Structure

```
app/
  layout.tsx          Root layout, fonts, metadata, <Header/>
  page.tsx            Landing page (composes the sections below)
  globals.css         Design tokens (warm neutral + foundry-amber accent)
  icon.svg            Favicon (the Smarter Foundry mark)
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
components/landing/    Header, Hero, Products, Company, Contact, Footer, Mark
lib/utils.ts           cn() class-name helper
```

## Deploy to Cloudflare Pages

This is a static export, so Cloudflare Pages serves the contents of `out/`
directly — no Pages Functions or build-time secrets required.

Connect the repository in the Cloudflare dashboard and use:

| Setting                  | Value          |
| ------------------------ | -------------- |
| Framework preset         | Next.js (Static HTML Export) |
| Build command            | `pnpm build`   |
| Build output directory   | `out`          |
| Node version             | `22` (see `.nvmrc`) |

pnpm is detected automatically from `pnpm-lock.yaml`. If you prefer to set the
package manager explicitly, add an environment variable
`PNPM_VERSION` (or use a `packageManager` field) — but the lockfile alone is
normally enough.

To deploy without connecting Git, you can also build locally and upload:

```bash
pnpm build
npx wrangler pages deploy out --project-name smarterfoundry-website
```

## Editing content

All copy lives in the section components under `components/landing/`:

- Hero positioning line — `hero.tsx`
- Product names and descriptions — `products.tsx`
- Company description and principles — `company.tsx`
- Contact details (company, email, location) — `contact.tsx`
- Footer links and copyright — `footer.tsx`

Product descriptions are intentionally conservative — no medical, coaching, or
guaranteed-outcome claims. Keep that tone if you edit them.
