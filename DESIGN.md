# DESIGN.md — Loving Love

> Source of truth derived from reading every component, config, and stylesheet in the repo.
> Nothing invented. All values pulled directly from code.

---

## Project Identity

| Property | Value |
|----------|-------|
| **Client** | Lena Saunig |
| **Brand** | Loving Love |
| **Tagline** | *Celebrating love, and also life.* |
| **Role** | Authorised Marriage Celebrant, Sydney |
| **Domain** | lovinglove.com.au |
| **Copyright** | © 2019 by Loving Love |
| **Tone** | Warm, conversational, personal — never generic or brochure-like |

### What the Site Leads With

The homepage opens with a **scroll-driven film sequence** (140 frames of a wedding ceremony, rendered on canvas). This is the dominant feature — it signals that this is an experience, not a brochure. Everything else defers to it. Typography is layered over imagery, not the other way around.

---

## Typography

### Fonts

| Role | Font | CSS class | Tailwind token |
|------|------|-----------|----------------|
| **Display / Serif** | Playfair Display (Google Fonts) | `font-display` | `var(--font-display)` |
| **Body / UI** | System sans-serif stack | *(default)* | `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |

Playfair Display is loaded via `next/font/google` with both `normal` and `italic` styles. It is **the brand font** — used for all headings, taglines, and any italic emphasis text. System sans is used for body copy, captions, and UI labels.

### Type Scale (all values from code)

| Role | Size | Class / Style |
|------|------|---------------|
| Hero H1 — desktop | `clamp(3rem, 9.5dvh, 6.5rem)` | `font-display font-normal` `lineHeight: 1.08` |
| Hero H1 — mobile | `clamp(1.75rem, 7.5vw, 2.5rem)` | `font-display font-normal` `lineHeight: 1.1` |
| H1 sub-line (e.g. "Marriage Celebrant") | `0.42em` of parent H1 | `uppercase tracking-[0.18em]` |
| Section H2 — large | `clamp(2rem, 5dvh, 3.5rem)` | `font-display font-normal` `lineHeight: 1.08` |
| Section H2 — medium | `clamp(1.75rem, 5vw, 3.25rem)` | `font-display font-normal leading-tight` |
| Meet Lena H1 | `clamp(2.75rem, 5.5vw, 4.75rem)` | `font-display font-normal` `lineHeight: 1.02` |
| Quote | `text-4xl md:text-6xl` | `font-display font-normal leading-tight` |
| **Tagline / italic sub-text** | `clamp(1rem, 1.9dvh, 1.25rem)` | `font-display italic` |
| Body — primary | `clamp(1.0625rem, 1.4vw, 1.125rem)` | `text-neutral-500 leading-relaxed` |
| Body — secondary | `clamp(0.9375rem, 1.3vw, 1.0625rem)` | `text-neutral-500 leading-relaxed` |
| Body — small | `clamp(0.875rem, 1.5dvh, 1.0625rem)` | `text-neutral-500 leading-relaxed` |
| Body — mobile small | `clamp(0.8125rem, 3.2vw, 0.9375rem)` | `leading-relaxed` |
| **Eyebrow** | `text-[9px]` or `text-[10px]` | `uppercase tracking-[0.26em]` |
| Footer heading | `text-xs` | `uppercase tracking-[0.24em] font-medium` |
| Couple attribution | `text-sm` | `uppercase tracking-[0.24em] font-medium` |
| Navbar brand name | `text-sm` | `font-display font-medium tracking-wide` |

### Italic Rule

Any text styled like the tagline *"Celebrating love, and also life."* uses:
```
className="font-display italic"
```
This is the site's **editorial voice** marker. It is used for:
- The hero tagline
- Section sub-titles that read as personal phrases (e.g. "Your Marriage Celebrant", "please get in touch. It would be a privilege to be your Celebrant.")
- Introductory phrases in the IntroSection ("I'm so glad you found your way here.", "Let me introduce myself.")

---

## Colour System

The site uses Tailwind's **neutral scale** exclusively — no custom brand colour hex values in components (except the gold shimmer effect). This creates a deliberate monochrome elegance that defers to photography.

### Neutral Scale (used values)

| Token | Approx Hex | Usage |
|-------|-----------|-------|
| `neutral-950` | `#0a0a0a` | Dark section background (FocusSection) |
| `neutral-900` | `#171717` | Primary text, dark buttons, headings |
| `neutral-500` | `#737373` | Body text, secondary labels |
| `neutral-400` | `#a3a3a3` | Eyebrows, captions, muted text, image overlays |
| `neutral-200` | `#e5e5e5` | Borders, dividers, nav separators |
| `neutral-100` | `#f5f5f5` | Image card placeholder backgrounds |
| `neutral-50`  | `#fafafa` | Card backgrounds (Google Reviews card) |
| `white`       | `#ffffff` | Page base, hero gradient, light sections |

### Opacity modifiers for text on dark backgrounds

| Opacity | Token | Context |
|---------|-------|---------|
| Full | `text-white` | Headings on dark |
| 90% | `text-white/90` | Eyebrow on dark (mobile hero) |
| 70% | `text-white/70` | Tagline italic on dark |
| 65% | `text-white/65` | Body copy on dark (mobile) |
| 60% | `text-white/60` | Body copy on dark (desktop FocusSection) |
| 50% | `text-white/50` | Eyebrow on dark (desktop FocusSection) |

### Gold Shimmer (special effect — `.text-shimmer` only)

```css
rgb(184, 134, 57)   /* shimmer mid — warm gold */
rgb(245, 222, 179)  /* shimmer peak — pale gold */
rgb(115, 115, 115)  /* base text colour when shimmer is inactive */
```
Used exclusively on the "Thoughtful comments shared by wonderful couples" label in `FeaturedQuotes`. Sweeps across in ~2s, repeats every 10s (infinite loop activated on scroll into view).

---

## Spacing

### Page-level Horizontal Padding

```
px-6                     — mobile base
md:px-16                 — tablet
xl:px-24                 — wide desktop
```

### Text Column Left Padding (desktop hero / FocusSection)

```
md:pl-24 lg:pl-32 xl:pl-36
```

### Vertical Spacing Within Text Blocks

| Gap | From → To |
|-----|-----------|
| `mb-2` – `mb-3` | Eyebrow → H1 |
| `mb-4` – `mb-5` | H1 → tagline |
| `mb-3` | Tagline → body |
| `mb-8` – `mb-10` | Body → CTA button |
| `mt-3 mb-10` | Sub-title → body (Meet Lena) |

### Section Vertical Padding

```
py-16 md:py-20      — standard section
py-24 md:py-32      — generous sections (GoogleReviews placeholder)
pt-24 pb-6 md:py-20 — panels inside IntroSection horizontal track
```

---

## Layout Patterns

Seven distinct layout patterns are used across the site. Each has a clear semantic meaning.

### 1. Scroll-driven Film Hero
`HeroSequence.tsx` — homepage only

Canvas-rendered frame sequence (140 frames). Text overlaid on top:
- **Mobile**: dark gradient from bottom, text anchored at bottom-safe-area
- **Desktop**: white left panel (`rgba(255,255,255,1) 0–42%`), text centered vertically in left column

### 2. Horizontal Scroll Panels
`IntroSection.tsx` — homepage

Sticky container + `translateX` track driven by `scrollYProgress`. Three panels slide through:
- Panel A: Lena intro (text left, image right)
- Panel B: Ceremony (text left, image right)
- Panel C: CTA (centered)

### 3. Dark Cinematic Split
`FocusSection.tsx` — homepage

`bg-neutral-950` full-viewport section. Image occupies right 58% (`left: 42%`). Text left 40% on black. Navbar hidden via `.hide-navbar` when section is visible.

### 4. Editorial 50/50 Split
`IntroSection` panels, `MeetLenaPage` section

```
grid md:grid-cols-[50fr_50fr]    or    md:grid-cols-2
```
Text column left, image card right (or reversed). Image is a **rounded card** (`rounded-2xl`), not full-bleed.

### 5. Full-Viewport Snap Section
`FeaturedQuotes`, `GoogleReviewsPlaceholder`, `FocusSection`

```
h-[100lvh] snap-start             — mobile (lvh = layout viewport)
md:h-[100dvh]                     — desktop (dvh = dynamic viewport)
```
Desktop snap is mandatory (`scroll-snap-type: y mandatory`) activated by `HomeSnapZone` IntersectionObserver.

### 6. Centered Content Block
`FeaturedQuotes`, IntroSection CTA panel

```
flex items-center justify-center
max-w-[4xl|5xl|2xl] text-center mx-auto
```

### 7. Asymmetric Grid
`GoogleReviewsPlaceholder`, `Footer`

```
md:grid-cols-[0.9fr_1.1fr]    — reviews
lg:grid-cols-[1.05fr_1.95fr]  — footer
```

---

## Component Patterns

### Buttons

**Primary — on light background**
```tsx
className="inline-flex items-center px-7 py-3 rounded-full
           text-sm font-medium bg-neutral-900 text-white
           hover:opacity-85 transition-opacity duration-200"
```
Sizes: `px-6 py-2.5` (small/mobile) · `px-7 py-3` (standard) · `px-8 py-3.5` (large)

**Primary — on dark background**
```tsx
className="inline-flex items-center px-6 py-2.5 rounded-full
           text-sm font-medium bg-white text-neutral-900
           hover:opacity-85 transition-opacity duration-200"
```

**Hover pattern**: always `hover:opacity-85` — never background colour change.

### Glass Effect

Used in Navbar (pill, logo button, hamburger, Sign In button):
```ts
const glass = {
  background:           "rgba(255, 255, 255, 0.15)",
  backdropFilter:       "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  border:               "1px solid rgba(0, 0, 0, 0.20)",
}
```

### Image Cards

Standard rounded card:
```tsx
className="relative w-full rounded-2xl overflow-hidden bg-neutral-100
           h-[min(45svh,360px)] md:h-[min(58dvh,520px)]"
```
With desktop hover:
```tsx
whileHover={{ scale: 1.03 }}
transition={{ duration: 0.5, ease: "easeOut" }}
```
(Mobile: hover disabled via `isMobile ? {} : { scale: 1.03 }`)

### Eyebrow Label
```tsx
className="text-[10px] tracking-[0.26em] uppercase text-neutral-400"
```
Always above the heading it introduces. Gap: `mb-2` to `mb-5`.

### Section with Asymmetric Column Label
```tsx
// e.g. IntroSection CTA
<h2 className="font-display font-normal text-neutral-900 leading-tight mb-5"
    style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)" }}>
```

---

## Animation System

All animation via **Motion (Framer Motion v12)** — imported from `motion/react`.

### Named Variants (from FocusSection — reusable)

```ts
// Title entrance — blur resolves to focus
const blurIn = {
  hidden:  { opacity: 0, filter: "blur(14px)" },
  visible: { opacity: 1, filter: "blur(0px)"  },
}

// Supporting elements — fade up
const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
}
```

### Standard Timings

| Purpose | Duration | Ease | Delay |
|---------|----------|------|-------|
| Blur-in title | `1.0s` | `easeOut` | `0.15s` |
| Fade-up support | `0.5s` | `easeOut` | `0.35s` |
| Fade-up body | `0.55s` | `easeOut` | `0.4s` |
| Fade-up button | `0.55s` | `easeOut` | `0.6s` |
| Hero crossfade (title) | `0.45s` | `easeInOut` | — |
| Hero crossfade (other) | `0.35s` | `easeInOut` | — |
| Scroll-triggered appear | `0.5s` | `easeOut` | `0s` / `0.2s` |
| Mobile dropdown | `0.2s` | `[0.25,0.1,0.25,1]` | staggered `i × 0.04s` |
| Footer blur-in | `0.7s` | `easeOut` | `0.1–0.35s` |

### Viewport Trigger Thresholds

```ts
viewport={{ once: true, amount: 0.5 }}   // FocusSection
viewport={{ once: true, amount: 0.25 }}  // Footer
{ threshold: 0.8 }                       // FeaturedQuotes title (IntersectionObserver)
{ threshold: 0.12 }                      // Footer navbar-hide trigger
{ threshold: 0.3  }                      // FocusSection navbar-hide trigger
```

### Gold Shimmer Loop
```css
animation: subtle-text-shimmer-loop 10s linear infinite;
/* Sweep: 0%–20% of cycle (~2s). Pause: 20%–100% (~8s). */
```

### Scroll-based Motion (IntroSection)
Uses `useScroll` + `useTransform`. Breakpoints range from `[0.18, 1.00]` on `scrollYProgress`. Separate sets for `isMobile` (`< 768px`) and desktop.

---

## Navbar

```
Position:  fixed top-4 left-0 right-0 z-50
Height:    auto — published to --navbar-h via ResizeObserver (fallback: 81px)
```

**Desktop**: glass pill centered (3-column grid: logo | nav pill | actions). Links inactive: `text-black/40`, active: `text-black font-semibold`.

**Mobile**: logo + brand name left, hamburger right. Dropdown animates in (`opacity + y + scale`).

**Hide trigger**: Navbar slides off-screen (`translateY(calc(-100% - 2rem))`) when Footer or FocusSection enters viewport. Class `.hide-navbar` added to `<html>`.

---

## CSS Custom Properties

| Variable | Default | Set by |
|----------|---------|--------|
| `--navbar-h` | `81px` | `Navbar.tsx` ResizeObserver |
| `--font-display` | Playfair Display | `next/font/google` in `layout.tsx` |

Usage pattern for sections that must clear the navbar:
```tsx
style={{ paddingTop: "var(--navbar-h)" }}
```

---

## Page Architecture

```
layout.tsx
  └─ <Navbar />          fixed, z-50, glass
  └─ <main>
       └─ page content   starts at y:0 (navbar is fixed, not in flow)
  └─ <Footer />          hides navbar when in view
```

### Home (`/`)

```
HeroSequence          scroll film, 600vh desktop / 280vh mobile
IntroSection          sticky horizontal track, 550vh desktop / 450vh mobile
HomeSnapZone ──┐      activates snap-scroll (desktop mandatory)
  FocusSection │      dark cinematic, 100dvh, hides navbar
  GoogleReviews│      placeholder, 100dvh
  FeaturedQuotes─┘    quotes carousel, 100dvh
```

### Meet Lena (`/meet-lena`) — in progress

```
Section 1   50/50 grid, white bg, lena1.png card — "Hello, I'm Lena Saunig"
[more sections to follow]
```

---

## Available Images

| File | Usage |
|------|-------|
| `hero1.webp` | IntroSection Panel A (Lena portrait, ceremony) |
| `hero2.webp` | IntroSection Panel B (ceremony) |
| `hero3.webp` | FocusSection (ceremony) |
| `lena.png`   | Full portrait — available for headers |
| `lena1.png`  | Lena officiating, smiling, microphone, outdoor waterfront |
| `lena2.png`  | Available |
| `lena3.png`  | Available |
| `lena4.png`  | Available |
| `lena5.png`  | Available |
| `logo.webp`  | Loving Love wordmark |
| `amc_logo.webp` | Australian Marriage Celebrants accreditation |
| `abia_logo.webp` | ABIA Weddings accreditation |

---

## What Not to Do

- ❌ Do not use any font other than Playfair Display or the system sans stack
- ❌ Do not introduce custom colour hex values in components — use Tailwind neutral scale
- ❌ Do not use `hover:bg-*` on buttons — always `hover:opacity-85`
- ❌ Do not use `<img>` tags — always `next/image` with `fill` or explicit dimensions
- ❌ Do not use a UI component library — Tailwind + custom components only
- ❌ Do not apply `font-display italic` to long body paragraphs — reserve it for tagline-register phrases
- ❌ Do not ignore `isMobile` guard on hover effects — desktop only
- ❌ Do not add scroll-snap to mobile — `home-section-snap` is desktop-only per CSS media query

---

## Quick Reference — New Section Checklist

```tsx
// Standard white section with navbar clearance
<section
  className="bg-white min-h-[100dvh] grid md:grid-cols-2"
  style={{ paddingTop: "var(--navbar-h)" }}
>
  {/* Text column */}
  <div className="flex flex-col justify-center
                  px-8 md:pl-16 xl:pl-24 md:pr-12
                  py-16 md:py-20">
    <p className="text-[10px] tracking-[0.26em] uppercase text-neutral-400 mb-3">
      Eyebrow label
    </p>
    <h2 className="font-display font-normal text-neutral-900 leading-tight mb-4"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}>
      Section heading
    </h2>
    <p className="font-display italic text-neutral-400 mb-8"
       style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}>
      Tagline / sub-title phrase
    </p>
    <p className="text-neutral-500 leading-relaxed"
       style={{ fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)", maxWidth: "44ch" }}>
      Body copy.
    </p>
  </div>

  {/* Image column */}
  <div className="flex items-center px-8 md:pl-8 md:pr-16 xl:pr-24 py-8 md:py-16">
    <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-100
                    h-[70vw] md:h-[min(72dvh,620px)]">
      <Image src="/images/lena1.png" alt="..." fill className="object-cover" />
    </div>
  </div>
</section>
```
