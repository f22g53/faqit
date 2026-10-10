# Horizon Properties — Base44 Dev Environment

## Overview
This is a Vite + React real estate website (Horizon Properties). It was rebuilt from a WordPress plugin scaffold into a modern SPA.

## Tech Stack
- **Framework:** Vite 6 + React 18
- **Routing:** React Router DOM v6
- **Styling:** Plain CSS with CSS variables (design system in `src/index.css`)
- **No external CSS framework** — all styles are hand-crafted for the premium aesthetic

## Setup
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app runs on port 3000. Vite dev server binds 0.0.0.0 with live reload.

## Project Structure
- `src/data/properties.js` — all property data, team, services, site info
- `src/components/` — reusable components (Header, Footer, PropertyCard, PropertyCarousel, etc.)
- `src/sections/` — homepage sections (Hero, WhoWeAre, FeaturedProperties, etc.)
- `src/pages/` — routed pages (Home, Properties, PropertyDetail, About, Services, Team, Contact)
- `src/index.css` — complete design system with CSS variables

## Key Notes
- Property data is structured for easy future database connection (each property has id, slug, structured fields)
- Images use Unsplash URLs with responsive sizing parameters
- No secrets required — the app runs entirely on the frontend
- The `.base44/environment.json` records `secrets: []` (none needed)
