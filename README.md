# Bal Krishna Nursery by Woolwich Temple

Nuxt 3, Vue 3, Tailwind CSS, and Prismic CMS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

You need access to the Prismic repository (`balkrishna`). For a private repo, add an access token (see below).

## Environment

Copy `.env.example` to `.env` and set:

- `NUXT_PUBLIC_PRISMIC_ACCESS_TOKEN` – optional; only required if the Prismic repository is private.

## Scripts

- **`npm run dev`** – Development server with hot reload
- **`npm run build`** – Production build
- **`npm run generate`** – Static site generation
- **`npm run preview`** – Preview production build locally

## Stack

- **Nuxt 3** – Vue framework with file-based routing and SSR
- **Vue 3** – Composition API and `<script setup>`
- **Tailwind CSS** – Nursery-themed UI (greens, cream, soft typography)
- **Prismic** – CMS via `@nuxtjs/prismic`; content types: `home`, `our-nursery`, `parents`, `blog`
- **Netlify Forms** – Contact page submits to Netlify (form name: `contact`). Ensure Forms are enabled in your Netlify site settings.

## Project structure

- `app/` – App entry and Prismic client
- `components/` – Vue components (AppHeader, AppFooter, slices, etc.)
- `layouts/` – Default layout (header + main + footer)
- `pages/` – File-based routes (index, our-nursery, parents, blog, contact, post)
- `public/` – Static assets (images, manifest, etc.)
