# CLAUDE.md — Loving Love

## Project Overview

Website redesign for **Lena Saunig — Loving Love**, a Sydney-based Authorised Marriage Celebrant. The site is warm, personal, and conversational — never generic or brochure-like. Brand voice: calm, focused, professional yet personal.

- **Client:** Lena Saunig (`lena@lovinglove.com.au` · `0405 143 843`)
- **Business:** Loving Love — `lovinglove.com.au`
- **Tagline:** *Celebrating love, and also life.*
- **Instagram:** @LovingLove

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 15 (App Router) | Turbopack for dev |
| Language | TypeScript 5 | Strict mode |
| Styling | Tailwind CSS 3 | No UI component library |
| Animation | Motion (Framer Motion v12) | |
| Icons | Lucide React | |
| Database | Supabase (PostgreSQL) | Free tier |
| Auth | Supabase Auth — Google OAuth | No username/password |
| Image Storage | Supabase Storage | 1 GB free tier |
| Image Delivery | Next.js `<Image>` + Vercel CDN | Minimises Supabase bandwidth |
| Deployment | Vercel | Hobby (free) |
| Font | Inter (Google Fonts) | |

---

## Commands

```bash
npm run dev      # Development server with Turbopack (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Environment Variables

Required — create `.env.local` from `.env.local.example`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
ADMIN_EMAIL=lena@lovinglove.com.au
```

`ADMIN_EMAIL` is checked in middleware to gate `/admin`. Never expose it client-side.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — Navbar + metadata
│   ├── globals.css                 # Global styles
│   ├── page.tsx                    # / — Home
│   ├── meet-lena/page.tsx          # /meet-lena
│   ├── your-ceremony/page.tsx      # /your-ceremony
│   ├── moments/page.tsx            # /moments — testimonials (Supabase)
│   ├── other-services/page.tsx     # /other-services
│   ├── celebrations-of-life/page.tsx  # /celebrations-of-life (content TBD)
│   ├── partners/page.tsx           # /partners — filterable (Supabase)
│   ├── connect/page.tsx            # /connect — contact form
│   └── admin/page.tsx              # /admin — protected dashboard (Lena only)
├── components/
│   └── layout/
│       ├── Navbar.tsx
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   └── supabase/
│       ├── client.ts               # Browser client (use client components)
│       └── server.ts               # Server client (use server components / route handlers)
└── types/
    └── index.ts                    # Shared TypeScript interfaces
```

---

## Supabase Client Usage

- **Client Components** → `import { createClient } from '@/lib/supabase/client'`
- **Server Components / Route Handlers / Server Actions** → `import { createClient } from '@/lib/supabase/server'`

Never use the browser client in server context or vice versa.

---

## Authentication & Roles

Authentication is handled by **Supabase Auth with Google OAuth only** — no password login.

| Role | Who | How identified |
|------|-----|----------------|
| `admin` | Lena (single user) | `user.email === process.env.ADMIN_EMAIL` |
| `user` | Any signed-in visitor | Google OAuth, any email |

- `/admin` is protected at the middleware level — redirect to `/` if not Lena's email
- Regular users authenticate to access the AI assistant (Phase 2)
- Unauthenticated visitors can browse all public pages freely

---

## Data Types (`src/types/index.ts`)

```ts
// Testimonial (Moments page — loaded from Supabase)
interface Testimonial {
  id: string
  couple_names: string
  venue_location: string
  quote: string
  photo_1_url: string | null
  photo_2_url: string | null
  is_featured: boolean
  created_at: string
}

// Partner categories (Supabase — Lena manages)
interface PartnerCategory {
  id: string
  name: string        // e.g. "Favourite Venues", "Trusted Partners"
  created_at: string
}

// Partner entry (Supabase — Lena manages)
interface Partner {
  id: string
  name: string
  category_id: string
  description: string
  photo_url: string | null
  website_url: string | null
  instagram_handle: string | null
  created_at: string
}

type UserRole = "admin" | "user"
```

---

## Image Handling

- Lena uploads images via the admin dashboard → stored in **Supabase Storage**
- Served via `next/image` with Vercel CDN caching — Supabase bandwidth impact is minimal
- `next.config.ts` already allows `*.supabase.co` remote patterns
- On upload: auto-resize to max 1200px wide, convert to WebP, compress to 80% quality

---

## Site Map & Navigation

```
/                          → Home
/meet-lena                 → Meet Lena
/your-ceremony             → Your Ceremony
/moments                   → Moments & Thoughtful Words (dynamic — Supabase)
/other-services            → Other Services
/celebrations-of-life      → Celebrations of Life (content TBD from Lena)
/partners                  → Partners (dynamic — Supabase, filterable by category)
/connect                   → Connect (contact form)
/admin                     → Admin Dashboard (Lena only — not in public nav)
```

Nav bar (no dropdowns):
```
HOME | MEET LENA | YOUR CEREMONY | MOMENTS | SERVICES | PARTNERS | CONNECT
```

---

## Admin Dashboard (`/admin`)

Not linked in public navigation. Lena accesses it directly.

### Section A — Moments (Testimonials)
- CRUD for testimonial entries
- Fields: couple names, venue/location, quote, photo 1 (required), photo 2 (optional)
- **Seed task:** 32 existing testimonials in `project_docs/CONTENT.md` must be migrated to Supabase on first deploy

### Section B — Partners
- CRUD for categories (default: `Favourite Venues`, `Trusted Partners`) and entries
- Entry fields: name, category, description, photo/logo (optional), website URL (optional), Instagram handle (optional)

---

## Development Phases

### ✅ Phase 1 — Website + Admin Dashboard *(current)*
- Full 8-page public website
- Google OAuth login (Supabase) — foundation for Phases 2 & 3
- Admin dashboard (Lena only): manage Moments and Partners
- Google Reviews widget on Home page
- Contact form → email to `lena@lovinglove.com.au`
- Seed 32 testimonials to Supabase on first deploy

### 🤖 Phase 2 — AI Chat Assistant *(future)*
- Chat widget available to any signed-in visitor
- AI answers questions about Lena, her services, ceremony planning
- Reflects Lena's personality and brand voice
- Rate-limited per user (daily message cap, tracked in Supabase)
- No unauthenticated access
- Supabase tables: `ai_conversations`, `ai_usage`
- Requires `AI_PERSONALITY.md` from Lena before development

### 💍 Phase 3 — Wedding Client Portal + Advanced AI *(future)*
- **3A:** Per-couple wedding dashboards with countdown, session notes, decisions, to-dos
- **3B:** AI with access to wedding-specific data for couples and a full-overview admin AI for Lena
- Supabase tables: `weddings`, `wedding_users`, `sessions`, `decisions`, `todos`

---

## Content Status

| Item | Status |
|------|--------|
| All page copy (Home, Meet Lena, Your Ceremony, Moments, Other Services, Connect) | ✅ Done — see `project_docs/CONTENT.md` |
| Celebrations of Life page content | ❌ Lena to write |
| Partners page intro + venue/partner lists | ❌ Lena to provide |
| Couple photos for Moments (1–2 per couple, 32 couples) | ⚠️ Lena to upload via dashboard |
| Lena portrait for Meet Lena page | ⚠️ Lena to provide |
| Google Business Profile URL | ❌ Lena to provide |
| Meta descriptions (new pages) | ❌ After content is ready |

Full content source: `project_docs/CONTENT.md`  
Full schema and architecture: `project_docs/WEBSITE_SCHEMA.md`

---

## Key Conventions

- **App Router only** — no Pages Router. Use `"use client"` only when needed (interactivity, browser APIs, Supabase browser client).
- **Server Components by default** for data fetching from Supabase.
- **No UI component library** — Tailwind CSS + custom components only.
- **Brand tone** in all UI copy: warm, conversational, personal — not generic or formal.
- **`/admin` is not linked anywhere public** — accessed directly by URL.
- **TypeScript strict** — no `any`, use types from `src/types/index.ts`.
- Supabase image URLs go through `next/image` — never `<img>` tags.
- Contact form submissions email `lena@lovinglove.com.au`.
- Copyright footer: `© 2019 by Loving Love`.

---

## Session Notes — Layout & Scroll (updated 2026-06-06)

### Viewport height units
- **`svh`** (safe) — stable, accounts for browser chrome. Use on mobile snap sections or sticky containers where layout stability matters.
- **`dvh`** (dynamic) — changes as browser toolbar shows/hides. Use on non-snap sections with background images so they always fill the visible screen.
- **`lvh`** (large) — ignores browser chrome. Only used on HeroSequence sticky div (intentional full-bleed behind toolbar).
- **Never use `lvh` on snap sections** — too tall, creates gaps between snapped sections.

### Screen-size scoping rules (established across all pages)
- **`2xl:` prefix only** for large-monitor fixes (>1536px). Never touch `md:`, `lg:`, `xl:` when the task is large-screen only.
- **No prefix / `sm:`** for mobile-only fixes. Never touch `md:` and above when the task is mobile-only.

### 2xl large-screen layout — standard applied to all pages
All content grids use **`2xl:max-w-[1400px] 2xl:mx-auto`** to prevent text and images from spreading too far apart on wide monitors. Status per page:

| Page | Component(s) | 2xl fix applied |
|------|-------------|-----------------|
| Home | `IntroSection` (2 panel grids) | ✅ |
| Meet Lena | `MeetLenaIntro` (4 panel grids) + `2xl:justify-self-start` on text cols | ✅ |
| Your Ceremony | Steps 1–4 | ✅ |
| Other Services | Commitment, Baby Naming, Vow Renewal, Celebrations of Life | ✅ |

`MeetLenaIntro` text columns have **`2xl:justify-self-start`** (overrides `md:justify-self-end`) so text sits next to the gap rather than pushed to the far right edge on wide monitors.

### Scroll snap architecture
- **CSS snap** (`scroll-snap-type: y proximity`) — applied via `.home-section-snap` class on `<html>`, active **`md+` only** (defined in `globals.css`).
- **`HomeSnapZone`** — wrapper that toggles `.home-section-snap` via IntersectionObserver (threshold `0.2`, not `0.25` — the exact max ratio was unreliable). Wraps FocusSection, GoogleReviews, FeaturedQuotes, FinalCallToAction.
- **JS snap hook** `useScrollSnap()` — debounced scroll listener, fires on both UP and DOWN. Option `{ desktopOnly: true }` skips on `window.innerWidth < 768` to prevent trapping users inside tall `min-h` sections on mobile.
- **`MeetLenaIntro`** uses separate `DOWN_SNAPS` / `UP_SNAPS` arrays for its horizontal panel scroll — reversing a single array does not produce correct UP-direction zones.

### Pre-existing TypeScript errors
~~`CelebrationsHero.tsx` has `ease: "easeOut"`~~ — fixed 2026-06-10 (`as const` applied). No known TS errors remain; `npm run build` type-checks clean.

### Navbar
- **Desktop**: full glassmorphism pill — brand + nav links + Let's Chat CTA.
- **Mobile**: only the hamburger circle (`w-9 h-9 rounded-full`), no surrounding pill, no brand text. The pill is `hidden md:flex`; the mobile button is a sibling `md:hidden` element.
- Mobile dropdown uses `rgba(255,255,255,0.94)` background (opaque white) for readability on light sections.

### Mobile-specific notes
- `FinalCallToAction` uses **two separate `<Image>` tags** — `mobile_background1.jpeg` (`md:hidden`, no `scale`) and `background1.jpeg` (`hidden md:block`, keeps `scale-[1.01]`). The scale was causing visible zoom on iPhone when Safari toolbar shows/hides with `dvh` height.
- `IntroSection` mobile panels (Panel A & B) have **underline-link buttons** (Meet Lena / Your Ceremony) that share the panel's opacity + y animation. Desktop panels are a completely separate JSX branch (`hidden md:grid`).
- Hero mobile text block: `lineHeight: 1.15` on h1, `mb-2` between h1 and tagline, `mb-2.5` on eyebrow. The subtitle span ("AUTHORISED MARRIAGE CELEBRANT") has `mt-1` for extra separation from the title line — this span is shared between mobile and desktop `titleMotion` but the proportional impact on desktop (much larger font) is negligible.
- **Sticky panels must fit 100svh on mobile** (`MeetLenaIntro`, `IntroSection`) — the sticky container has `overflow-hidden`, so overflowing content is silently clipped. Fix pattern (2026-06-10): inline `fontSize` clamps were moved to Tailwind classes as `text-[mobile] md:text-[clamp(original)]` so mobile shrinks while md+ keeps the exact original value. Collage heights are `h-[52vw] min-h-[210px]` (MeetLenaIntro) / `h-[min(34svh,300px)]` (IntroSection) on mobile. Don't add tall fixed-height content to these panels without re-checking total height ≤ ~700px.
- `GoogleReviewsPlaceholder` uses `min-h-[100svh]` (not `h-`) on mobile so the card can never clip; `md:h-[100dvh]` keeps desktop snap height (min-h ≤ dvh on desktop, so it never interferes).

---

## Session Notes — Deploy readiness (2026-06-10)

- **Font is self-hosted** via `next/font/local` (`src/app/fonts/*.woff2`, Playfair Display variable, OFL). Do NOT switch back to `next/font/google` — the local machine's TLS interception breaks build-time font downloads (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`).
- **Middleware lives at `src/middleware.ts`** (root `middleware.ts` is ignored when using a `src/` directory — `/admin` was unprotected before). It degrades gracefully: if Supabase env vars are missing it skips session refresh but still redirects `/admin` → `/`.
- **Viewport** is exported separately (`export const viewport: Viewport`) in `layout.tsx` per Next.js 15 rules; `metadataBase` is set to `https://lovinglove.com.au`.
- **Lint** migrated from deprecated `next lint` to ESLint CLI flat config (`eslint.config.mjs`, script `"lint": "eslint ."`). `.eslintrc.json` removed.
- **Moments** is a full-screen heading placeholder (client request 2026-06-10 — testimonials removed). The 29 testimonials remain in `src/data/testimonials.ts` (currently unused; keep as the Supabase seed source). The masonry layout exists in git history (commit `19dbecd`).
- **Connect** is a real contact page (tel/mailto/socials, no form) — a working form needs an email service (e.g. Resend) + route handler first.
- **Partners** is an on-brand "coming soon" page until Lena provides content; **Admin** is a styled stub behind middleware.
- **Never run `next build`/`next start` while `npm run dev` is running** — they share `.next/` and the production bundle gets corrupted (symptom: `EvalError: Code generation from strings disallowed` in middleware).
