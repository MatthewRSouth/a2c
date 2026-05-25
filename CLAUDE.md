@AGENTS.md

# A2C Pipe Master — Production Website

## Project Overview

**Client:** A2C Pipe Master  
**Business:** Plumbing, water fixture renovation, repair (水まわりリフォーム)  
**Location:** 寝屋川市成田東町17-1, 〒572-0001, Osaka  
**Phone:** 090-5153-4046  
**Hours:** 09:00–18:00 daily  
**Contact email (form target):** a2c.makimura@gmail.com  
**Existing site:** https://www.a2cpipemaster.com (Wix, Japanese-only, 5 pages)  
**Deploy target:** Vercel

---

## Design Reference — Source of Truth

**THE DESIGN IS CLIENT-APPROVED. Do NOT redesign, do NOT "improve," do NOT add sections not in the reference.**  
If something is ambiguous, ask the user — do not decide.

| Asset | Location | Purpose |
|-------|----------|---------|
| Page screenshots | `A2C Pictures/*.png` | Visual reference per section (23 images) |
| Full HTML design | `A2c.html` | Claude Design export — contains exact CSS values, colors, spacing, fonts |

Screenshot naming convention: `A2C {Page} {N}.png` (e.g. `A2C Home - 1.png`, `A2C Service 3.png`)

---

## Design Tokens (extracted from A2c.html + screenshots)

### Colors
```
Navy (primary dark):    #06283D   — hero bg, footer, navbar, headings on light
Coral (accent):         #EF7C4A   — primary CTA buttons, highlights, borders
Cream (bg primary):     #FBF6EC   — main page background
Beige (bg alternate):   #FFF6E8   — alternate sections, card backgrounds
Gold (bg CTA):          #FFD27A   — CTA sections
Blue-light (bg card):   #CDE0E2   — maintenance service card accent
Text primary:           #000000
Text secondary:         #3D4A5A
Text muted:             #8A7D6B
White:                  #FFFFFF
```

### Typography
- **Font:** Noto Sans JP (japanese subset via next/font/google) — replaces the system-font fallback in A2c.html
- **Hero H1:** 60px / line-height 1.1 / letter-spacing -0.5px
- **Section H2:** 28–48px / letter-spacing -0.5px to 0px
- **Card H3:** 20–26px
- **Body:** 14–16px / line-height 1.6
- **Caption/label:** 10–12px / letter-spacing +1.4–1.8px (wide, uppercase-style)
- Japanese and latin text share the same font stack

### Spacing & Layout
- **Container max-width:** 1280px, centered, horizontal padding 24px (mobile) / 48px (desktop)
- **Section module height:** ~840px on desktop
- **Grid columns:** 4-col (Works page cards), 2-col (About table, card pairs), full-width (hero/footer)
- **Border radius:** 2px (subtle) on cards and buttons
- Photo placeholder style: diagonal stripe pattern (color varies by service/card)

---

## Component Inventory

### Shared (every page)
- **Navbar** — navy bg, left: logo (orange circle + "A2C" text + company name), right: nav links + coral CTA button ("お見積もり")
- **Footer** — navy bg, 3-col: company info / service links / hours + contact, copyright line

### Home (8 sections)
1. **Hero** — navy bg, large JP heading (60px), subheading, 2 buttons: "お見積もり" (coral fill) + "お電話" (navy outline)
2. **About preview** — cream bg, large photo left, company intro right
3. **Services preview** — beige bg, 4 service cards in 2×2 grid, colored left-border accents
4. **CTA section** — gold bg, large JP heading, subtext
5. **Contact section** — gold bg, phone number prominent, 2 buttons
6. **Footer**

### About / 私たちについて
1. **Page header** — beige bg, page title + tagline
2. **Company story** — cream bg, large photo (coral placeholder), body text (founded 2019, mission)
3. **Company details table** — 2-col: label (muted) / value (dark), rows: 会社名, 住所, 電話, メール, 事業内容, 営業時間, Instagram

### Services / サービス
One page listing all 4 services, each as a full-width section:
- **メンテナンス** — blue-light accent
- **真心プランニング** — gold accent
- **リフォーム** — coral accent
- **修理** — beige accent

Per service block: heading, description, photo placeholder, detail bullet list, CTA link ("このサービスについて詳しく →")

### Works / works (施工事例)
- **Filter tabs** — すべて / キッチンリフォーム / お風呂リフォーム / リフォーム / 修理
- **4-col project grid** — card: image placeholder, project name, location, category
- **"事例をすべて見る →"** — right-aligned coral link

### Contact / お問合せ
- **Quote form** — fields: お名前, お住まい, メールアドレス, ご希望内容 (textarea); submit: "送信する" (coral)
- **Direct contact card** — navy bg, phone, hours ("受付時間 09:00 — 18:00"), email, full address

---

## Stack (actual installed versions)

| Package | Version | Notes |
|---------|---------|-------|
| next | 16.2.6 | App Router, Turbopack default — see gotchas below |
| react | 19.2.4 | |
| typescript | ^5 | strict mode on |
| tailwindcss | ^4 | Config lives in globals.css `@theme` block — NO tailwind.config file |
| @tailwindcss/postcss | ^4 | PostCSS plugin for Tailwind 4 |

### Packages to install before scaffolding
```bash
# Lucide icons
npm install lucide-react

# Framer Motion (only use where reference shows animation)
npm install framer-motion

# shadcn/ui init (interactive — choose: TypeScript, Tailwind CSS, src/ no, app/ yes)
npx shadcn@latest init

# Noto Sans JP is loaded via next/font/google — no separate install needed
```

---

## Pages & Routing

| Route | Page | File |
|-------|------|------|
| `/` | Home | `app/page.tsx` |
| `/私たちについて` | About | `app/私たちについて/page.tsx` |
| `/サービス` | Services | `app/サービス/page.tsx` |
| `/works` | Works (施工事例) | `app/works/page.tsx` |
| `/お問合せ` | Contact | `app/お問合せ/page.tsx` |

Japanese URL segments preserved for SEO parity with existing Wix site.

---

## SEO Requirements

Every page must have `generateMetadata` with:
- Japanese `title` and `description`
- `openGraph.images` (OG image per page)
- `lang="ja"` on `<html>`

### LocalBusiness JSON-LD (all pages, in layout or per-page)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "A2C Pipe Master",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "成田東町17-1",
    "addressLocality": "寝屋川市",
    "postalCode": "572-0001",
    "addressCountry": "JP"
  },
  "telephone": "090-5153-4046",
  "openingHours": "Mo-Su 09:00-18:00"
}
```

### Files required
- `app/sitemap.ts` — all 5 routes
- `app/robots.ts`
- OG image per page (can use `opengraph-image.tsx` convention)

### Lighthouse acceptance thresholds (must pass before ship)
- SEO ≥ 95
- Performance ≥ 95

---

## Conventions

- **No redesign.** Match the reference pixel-closely. If unsure, ask.
- **No emojis** anywhere in code or content — use Lucide React icons only.
- **Framer Motion** only where the reference visually implies motion (scroll reveals, hover transitions). Do not add animation speculatively.
- **next/image** for every image — no bare `<img>` tags.
- **No comments** explaining what code does. One-line comments only when the WHY is non-obvious.
- **TypeScript strict** — no `any`, no `as unknown`.
- **Japanese text** goes directly in JSX — no i18n library needed (single-language site).
- **Contact form** posts to a2c.makimura@gmail.com — use a server action or a service like Resend/Formspree (ask before choosing).

---

## Workflow

1. **Read reference → write design-system summary → wait for approval** before touching any code
2. **After approval: scaffold project** (install deps, set up globals.css tokens, layout.tsx, shared components)
3. **Build homepage only** → stop and show user for review against screenshots
4. **After homepage approval:** build remaining pages one at a time
5. **Flag problems before coding around them** — never silently "improve" or workaround ambiguity

---

## Next.js 16 Gotchas (vs Next.js 14)

These are breaking changes — read before writing any routing or data-fetching code.

### Async params & searchParams
```tsx
// ALL page/layout params are now Promise<T> — must await
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params  // required
}
```
Run `npx next typegen` to generate `PageProps` / `LayoutProps` type helpers.

### cookies() / headers() are async
```tsx
import { cookies } from 'next/headers'
const cookieStore = await cookies()  // must await
```

### Turbopack is the default
`next dev` and `next build` use Turbopack — no `--turbopack` flag needed.  
Custom webpack config will **break the build** — do not add one.

### middleware.ts → proxy.ts
- Rename `middleware.ts` to `proxy.ts`
- Export function named `proxy` (not `middleware`)
- Edge runtime NOT supported — Node.js only

### No tailwind.config.js
Tailwind 4 puts all configuration inside `globals.css` using `@theme {}` and `@import "tailwindcss"`.  
Do not create a `tailwind.config.ts/js` file.

### AMP, serverRuntimeConfig, publicRuntimeConfig
All three are removed. Use env vars instead.

### images.domains deprecated
Use `images.remotePatterns` in `next.config.ts` for any external image hosts.

### sitemap / OG image functions receive async params
```tsx
// opengraph-image.tsx
export default async function Image({ params, id }: { params: Promise<{...}>; id: Promise<string> }) {
  const p = await params
  const imageId = await id
}
```
