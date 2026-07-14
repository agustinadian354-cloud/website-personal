# Portfolio Website

Situs portofolio personal — React 19 + TypeScript + Vite, Tailwind CSS v4 untuk design tokens, Framer Motion + Lenis untuk motion dan smooth scroll.

## Struktur

- `src/index.css` — design tokens (warna, type scale, spacing, motion curve)
- `src/design-system/` — layout & typography primitives (`Container`, `Section`, `Reveal`, `Eyebrow`)
- `src/components/` — komponen bersama (`Nav`, `SplitText`, `AuroraBackground`, `GrainOverlay`, `CustomCursor`)
- `src/sections/` — section halaman (`Hero`, `Work`, `About`, `Contact`)
- `src/lib/useSmoothScroll.ts` — integrasi Lenis
- `src/hooks/usePrefersReducedMotion.ts` — accessibility guard untuk semua motion

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
