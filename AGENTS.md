# تماشاگاه — Base44 Dev Environment

## Overview
Persian, right-to-left (RTL) landing page for the **تماشاگاه (Tamashagah)** WordPress video
plugin (Aparat/YouTube → a styled video page). The original WordPress plugin scaffold files
(`faqit.php`, `src/block.json`, `src/edit.js`, …) are left untouched and unused; the running app
is a standalone Vite + React SPA that presents the plugin.

## Tech Stack
- **Framework:** Vite 6 + React 18 (no router — single landing page)
- **Styling:** Plain CSS with CSS variables (`src/index.css`), plus a dedicated stylesheet for the
  glow button (`src/components/CursorEdgeGlowButton.css`)
- **Font:** Estedad, self-hosted from `public/fonts/` via `@font-face` in `src/index.css`
- **Direction:** `<html lang="fa" dir="rtl">` in `index.html`

## Setup
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app runs on port 3000. Vite dev server binds 0.0.0.0 with live reload.

## Project Structure
- `src/data/plugin.js` — all Persian content (features, steps, panels, FAQ, nav, site info)
- `src/components/` — `SiteHeader`, `SiteFooter`, `CursorEdgeGlowButton`, `PluginIcons`
- `src/sections/` — landing sections: `Hero`, `Features`, `HowItWorks`, `Panel`, `FaqSection`
- `src/index.css` — full RTL design system (dark navy + cyan accent)
- `public/plugin/` — real plugin assets extracted from the shipped zip (logo, ad-network logos)
- `public/images/` — plugin UI screenshots used in the hero and panel showcase
- `public/fonts/` — Estedad woff2 files

## Key Notes
- **Buttons:** the page uses exactly **two** `CursorEdgeGlowButton` instances in the hero
  («مشاهده دمو» and «خرید افزونه»). The component is the provided cursor-tracking glow button
  ported from Tailwind arbitrary classes to plain CSS; its physics constants live in the JSX.
- No secrets required — the app runs entirely on the frontend.
- The `.base44/environment.json` records `secrets: []` (none needed).

## Verifying it works
- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → 200
- Hero shows two glow buttons; moving the pointer over a button changes the track light and the
  glow opacity (edge glow follows the cursor).
- FAQ accordion opens one item at a time.
- Mobile (<980px): hamburger opens a right-side drawer, closes on overlay tap.
- No horizontal overflow at 360px or desktop widths.
