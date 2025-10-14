# Achigreens Static Site (React + Vite)

This repository contains the Achigreens marketing/static site built with React and Vite. The codebase has been structured for scalability and maintainability, following enterprise-lean practices for accessibility, security, and performance.

## Tech Stack
- React 18 (Vite)
- TailwindCSS (utility-first styling)
- lucide-react (icons)
- ESLint (JS/React recommended rules)

## Project Structure
```
src/
  components/        # Reusable, accessible UI components
    ProductCard.jsx
    ServicesSection.jsx
    Testimonials.jsx
  data/              # Centralized static content and config
    siteContent.js
  pages/
    Home.jsx         # Composes sections using components/data
  images/            # Local images (if any) referenced by components
```

## Key Conventions
- Data is centralized in `src/data/siteContent.js` to separate content from presentational components and enable future i18n.
- Presentational components are pure, memoized where beneficial, and include accessibility attributes (roles, aria-*, focus styles).
- Images outside the initial viewport use `loading="lazy"` and `decoding="async"` for performance.
- Anchors are only used for navigation. For non-navigation actions, use `<button>`.
- External links should specify `rel="noopener noreferrer"` when `target="_blank"` is used.
- No inline event-based scripts. All interactivity is in React components.

## Security & Compliance
- A conservative Content Security Policy (CSP) is defined in `index.html`.
- Only required external origins are allowed (Unsplash for demo imagery). Adjust if adding integrations (APIs, analytics, etc.).
- Avoid `dangerouslySetInnerHTML`. If absolutely necessary, sanitize with a vetted library.
- Do not commit secrets. Use environment variables (`.env`) for per-environment config if dynamic features are added.

## SEO & Accessibility
- Base SEO meta (description, OG/Twitter) and theme color configured in `index.html`.
- Semantic HTML, alt text on images, and keyboard/focusable controls are used where applicable.

## Local Development
- Install: `npm ci`
- Run dev server: `npm run dev`
- Build: `npm run build`
- Preview production build: `npm run preview`

## Future Enhancements
- Convert to TypeScript for stronger typing across components and data.
- Add unit tests (React Testing Library + Vitest) for critical components.
- Add route-based code splitting and a CMS-backed content layer if the site grows.
