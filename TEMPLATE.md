# Utility AdSense Site — Next.js Template

Production-proven template for free utility websites monetised with Google AdSense.
Achieved **98 Performance / 94 Accessibility / 100 SEO** on PageSpeed Insights (Mobile).

Built from: [SoleTraderTax.com.au](https://soletradertax.com.au)

---

## Stack

- **Next.js 14** — App Router, fully static output
- **Tailwind CSS v4**
- **TypeScript**
- **framer-motion** — deferred client components only (never on critical path)
- **No auth, no DB**

---

## What's included

```
app/
  layout.tsx          ← Root layout with AdSense, GA4, SEO metadata, preconnects
  globals.css         ← System font stack, scroll-behavior, scrollbar hide
  page.tsx            ← Server component pattern (hero SSR for fast LCP)

components/
  AdSlot.tsx          ← Reusable AdSense placeholder (swap real ad unit in one line)
  HomeNav.tsx         ← Sticky nav, mobile drawer — CSS transitions only (no framer-motion)
  SiteFooter.tsx      ← Dark footer with link columns
  BackgroundEffects.tsx ← Animated grid + mouse reveal (deferred, ssr:false)
  ScrollProgress.tsx  ← Right-side scroll bar (deferred, passive scroll listener)
  DeferredSections.tsx ← Pattern for lazy-loading heavy client components

public/
  robots.txt          ← Allow all, sitemap pointer
  llms.txt            ← AI crawler summary (ChatGPT, Perplexity)

next.config.ts        ← compress, poweredByHeader off, optimizePackageImports
```

---

## Key architecture decisions

### 1. Server/client split for LCP
`app/page.tsx` is a **server component** — hero h1 renders as static HTML.
Client-only components (calculator, animations, FAQ) are imported from `DeferredSections.tsx`.

**Rule:** Any component above the fold that contains the LCP element must be server-rendered.

### 2. DeferredSections pattern
Heavy client bundles are lazy-loaded via `next/dynamic` with `ssr: false` inside a `"use client"` wrapper.
This means their JS doesn't block initial paint.

```tsx
// components/DeferredSections.tsx  ← "use client"
export const MyTool = dynamic(() => import("./MyTool"), {
  ssr: false,
  loading: () => <div style={{ minHeight: 640 }} />,  // prevents CLS
});
```

### 3. System font stack
No Google Fonts. Zero font download on critical path. FCP stays under 1s.
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
```

### 4. framer-motion only in deferred components
`HomeNav` and `ScrollProgress` use CSS transitions.
framer-motion lives only in `BackgroundEffects`, `FaqAccordion`, and the tool component — all deferred.

### 5. AdSlot component
Replace the placeholder body with the real AdSense `<ins>` tag when the ad unit is approved:
```tsx
// components/AdSlot.tsx — swap this div for the real ad unit
<ins className="adsbygoogle" data-ad-client="ca-pub-XXXX" data-ad-slot="YYYY" />
```

---

## Setup checklist for a new site

- [ ] `npm create next-app@latest` with App Router + Tailwind + TypeScript
- [ ] Copy all files from this template
- [ ] Replace `ADSENSE_CLIENT_ID` in `layout.tsx` with your publisher ID
- [ ] Replace `GA4_MEASUREMENT_ID` in `layout.tsx` with your GA4 ID
- [ ] Update `metadataBase`, `title`, `description`, `siteName`, `canonical` in `layout.tsx`
- [ ] Update `og:image` — add a 1200×630 jpg to `public/`
- [ ] Update `SiteFooter.tsx` — brand name, links, tagline
- [ ] Update `HomeNav.tsx` — brand name, nav links
- [ ] Update `llms.txt` — site description and tool list
- [ ] Update `robots.txt` — sitemap URL
- [ ] Add `sitemap.ts` + `robots.ts` in `app/` for Next.js auto-generation
- [ ] Build your tool component and add it to `DeferredSections.tsx`
- [ ] Deploy to Vercel, connect custom domain

---

## Performance targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| LCP | < 2.5s |
| TBT | < 200ms |
| CLS | 0 |
| FCP | < 1s |

