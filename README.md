# HIKE

A responsive outdoor clothing and footwear portfolio concept.

## Stack

React, TypeScript, Vite, Tailwind CSS and Lucide icons.
No server, database, authentication, API keys or environment variables.

## Local development

Install Node.js 22.12+ and run:

```bash
npm ci
npm run dev
```

Open the address printed in the terminal.

## Build and check

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy on Vercel

Upload the contents of this folder to the root of a GitHub repository, then
import that repository into Vercel:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

`vercel.json` allows direct links and page refreshes on `/about` and `/contacts`.
Pages use ordinary links without a routing library. The host serves `index.html`
for these paths; React chooses the page from the URL.
For other static hosts configure the equivalent fallback to `index.html`.

Do not upload `.env`, `node_modules`, `.output` or `dist` to GitHub.
Use `npm ci` to install the versions recorded in `package-lock.json`.

## Project structure

- `src/pages/` — home, about and contact pages
- `src/components/` — newsletter and shared button
- `src/assets/` — local photos
- `src/styles.css` — colours, typography and styles
- `src/App.tsx` — page selection
- `src/main.tsx` — React entry point

## Demo features

Contact and newsletter forms use native browser validation and show demo
feedback. No data is sent or saved. The newsletter shows a sample code.
Product prices, brand story and contact details are sample content from the
original design. Basket and payment processing are not implemented.
Google Fonts requires an internet connection; local fallback fonts remain usable.
