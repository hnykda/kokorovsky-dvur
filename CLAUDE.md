# CLAUDE.md — Kokořovský dvůr

## Project Overview

Static export website (`output: "export"`) for Kokořovský dvůr, a Czech heritage site in Žlutice (est. 1680). Run by Spolek Žlutický zámek.

- **Domain:** kokorovskydvur.cz
- **Dev:** `pnpm dev --turbopack` / **Build:** `pnpm build --turbo`
- **Lint/check:** `pnpm check` (eslint + knip + tsc)
- **Content owner:** Jakub Mráz emails content to Dan; content is hardcoded in page components.

## Branding & Design System

### Colors (Tailwind tokens in `tailwind.config.ts`)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#8b4513` | Saddle brown — headings, accents |
| `primary-dark` | `#654321` | Darker brown variant |
| `accent` | `#c9a84c` | Refined gold — decorative elements, dividers |
| `cream` | `#faf7f2` | Main background |
| `parchment` | `#fdf6e3` | Alternate background (e.g. /historie) |
| `text-dark` | `#2c1810` | Primary text |
| `text-muted` | `#5c4033` | Secondary/muted text |

### Fonts

- **Playfair Display** (serif) — headings and body, loaded via `next/font/google`, weights 400 and 700
- **Inter** (sans) — used on the website alongside Playfair; for standalone materials (posters etc.) Playfair only is preferred for simplicity
- Tailwind: `font-serif` = Playfair, `font-sans` = Inter

### Logos & Artwork

All branding assets live in `other-content/branding/`:

| File | Description |
|------|-------------|
| `finals/logo-simple.svg` | Simple logo (used in nav, footer) |
| `finals/logo-simple-rounded.{svg,png,jpg}` | Rounded version of simple logo |
| `finals/logo-simple-rounded-with-text.svg` | Rounded logo with "Kokořovský dvůr" text |
| `finals/logo-simple-rounded-with-text-oneline.{svg,png}` | One-line text variant |
| `finals/plne-bez-pozadi.png` | Full coat of arms, transparent background, with text |
| `finals/plne-bez-pozadi.jpg` | Same, JPEG version |
| `finals/plne-s-pozadim.png` | Full coat of arms with parchment background, no text |
| `finals/simple-logo-big.png` | Large simple logo export |
| `origs/` | Original source images |
| `*.kra` | Krita source files (base-layers, simple-logo variants) |

**For posters/print materials:** use `finals/plne-bez-pozadi.png` for the coat of arms (transparent bg) and `finals/logo-simple.svg` for the simple logo.

### Design Guidelines for Print/Poster Materials

When creating standalone HTML posters or print materials:

- **Single font:** Playfair Display (400 + 700 weights only) from Google Fonts
- **Two visual levels:** bold/large for key info (venue name, date), regular for everything else
- **Avoid:** italic, uppercase transforms, letter-spacing variations, multiple font weights — keep it clean
- **Colors:** use the same palette as the website (brown, gold, cream) or go pure B&W for photocopy-friendly versions
- **A4 format** with `@page { size: A4; margin: 0; }` and `@media print` styles
- **Tip:** when saving as PDF from browser, enable "Background graphics" in print settings to include colors and images

## File Structure

```
src/
  app/              # Next.js pages (route-based)
  components/       # Shared components (Nav, Footer, Hero, PhotoGallery, etc.)
public/
  images/           # Website images (hero, galleries, partners, QR code)
other-content/
  branding/         # Logos, coat of arms, Krita sources (from original loga-koko/)
    finals/         # Export-ready logos in various formats
    origs/          # Original source images
  bpd-2026/         # Brány památek dokořán event posters (April 2026)
```

## Git LFS

Binary files under `other-content/` are tracked via Git LFS (see `.gitattributes`):
- `*.kra` (Krita), `*.png`, `*.jpg`, `*.webp`
- SVGs and HTML stay in regular git

When adding new images or artwork to `other-content/`, they'll automatically be handled by LFS. If adding a new binary format, run `git lfs track "other-content/**/*.ext"`.

## Routes

- `/` — Homepage: hero + 3×2 section nav grid
- `/historie` — History text + photo gallery
- `/obnova` — Renovation by year with photo galleries
- `/zluticky-zamek` — About the association
- `/chci-prispet` — Donate/contribute
- `/aktuality` — News feed (hardcoded `items` array, newest first)
- `/partneri` — Partners logo grid

## Adding News (Aktuality)

Edit the `items` array in `src/app/aktuality/page.tsx`, add new items at the top (newest first).

## ESLint Notes

- `react/no-unescaped-entities` disabled (Czech typographic quotes „..." trigger false positives)
