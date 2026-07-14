# Portfolio Website

Situs portofolio personal — React 19 + TypeScript + Vite, Tailwind CSS v4 untuk design tokens, Framer Motion + Lenis untuk motion dan smooth scroll.

## Struktur

- `src/index.css` — design tokens (warna, type scale, spacing, motion curve)
- `src/design-system/` — layout & typography primitives (`Container`, `Section`, `Reveal`, `Eyebrow`)
- `src/components/` — komponen bersama (`Nav`, `SplitText`, `AuroraBackground`, `GrainOverlay`, `CustomCursor`)
- `src/sections/` — section halaman (`Hero`, `Work`, `About`, `Contact`)
- `src/three/` — WebGL background scene (React Three Fiber): sebuah "director's set" 3D dengan monitor pemutar reel, tata cahaya panggung, dan debu yang melayang, dengan kamera yang dolly mengikuti scroll. Dimuat lazy dan hanya untuk browser yang mendukung WebGL serta tidak meminta reduced motion — fallback-nya adalah `VideoBackground` flat yang sudah ada
- `src/lib/useSmoothScroll.ts` — integrasi Lenis
- `src/hooks/usePrefersReducedMotion.ts` — accessibility guard untuk semua motion
- `src/hooks/useWebGLSupport.ts` — deteksi dukungan WebGL untuk fallback Scene3D

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
