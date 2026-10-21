# CLAUDE.md

Personal portfolio site for Aldri Terrado: a single-page React app with project case studies, deployed on Vercel.

## Commands

```bash
npm run dev       # Vite dev server (file polling enabled via cross-env for Windows)
npm run build     # Type-check (tsc -b) then build to dist/
npm run lint      # ESLint
npm run preview   # Serve the production build
```

There is no test suite. Run `npm run build` and `npm run lint` to check changes.

## Stack

- React 19 + TypeScript (~5.8), built with Vite 7
- Tailwind CSS v4 through `@tailwindcss/vite`. There is no `tailwind.config`; design tokens live in `@theme` in `src/index.css`
- React Router 7 (`BrowserRouter`); `vercel.json` rewrites every path to `index.html`
- GSAP 3 + `@gsap/react` (ScrollTrigger, SplitText) for signature motion; Lenis for smooth scrolling
- Inter Tight (display + UI), Instrument Serif italic (accent words) and JetBrains Mono (labels), self-hosted through Fontsource packages imported in `src/index.css`

## Structure

```
src/
  main.tsx              ThemeProvider > BrowserRouter > App
  App.tsx               Routes: /, /projects, /projects/:slug (lazy; /work/:slug redirects)
  pages/                Home, Projects, CaseStudy
  components/layout/    Header, Footer, Container, Section, PageTransition
  components/sections/  Hero, Work, About, Experience, Capabilities, Contact
  components/ui/        SectionHeading, ProjectCover, Button, Magnetic, Marquee, CursorLabel,
                        LocalTime, Icon, Reveal, TextLink, ThemeToggle
  data/                 Site content: projects.ts, experience.ts, site.ts
  lib/                  gsap.ts, scrollTrigger.ts, smoothScroll.ts (Lenis + scroll helpers), motion.ts
  hooks/                useSeo, useSplitReveal, useScrubCover, useWordHighlight
  theme/                ThemeProvider + context (dark default / light, saved in localStorage)
```

## Conventions

- **Design language:** dark cinematic. Near-black canvas, oversized tight display type (`.display-xl`/`.display-lg`/`.display-md` in `src/index.css`), one italic serif accent word per headline (`.accent-serif`), small uppercase mono labels (`.eyebrow`), numbered sections via `SectionHeading` ("(01) Work"), large project covers, soft corners (`rounded-lg` for covers/panels, `rounded-full` for buttons, chips and icon buttons), hairline `border-line` dividers and a static film-grain overlay. Keep it restrained: one accent colour, no drop shadows on content, no gradient text.
- **Content belongs in `src/data/`.** To add a project, add an entry to `projects` in `src/data/projects.ts` (it is typed by `Project`) with a `tint` hex (used only in its cover gradient). Import screenshots from `src/assets/photo/project/` into `image`; without one, `ProjectCover` renders a typographic cover from `monogram`. Case-study sections render from `caseStudy.sections`; a "Key Features" section whose items are all `Name: description` becomes a numbered grid. Copy marked `// DRAFT` is awaiting the owner's review. The owner is on a Singapore S Pass, so copy may only offer full-time employment: never invite freelance, side, contract-for-hire or remote work for other companies (no "let's build your project", "hire me for", "available for freelance"). Don't hard-code content inside components.
- **Theming:** the site is dark by default; `@theme` in `src/index.css` holds the dark values and light overrides them under `:root[data-theme="light"]`. Use the token utilities (`bg-base`, `bg-surface`, `text-primary-text`, `text-secondary-text`, `text-muted`, `border-line`, `text-accent-text`, `bg-accent`, `text-on-accent`, ...) and not raw hex values, so both themes keep working. `accent` (lime) is for fills, dots and lines; use `accent-text` for lime text (it darkens in light mode) and `on-accent` for text on a lime fill. When you add a token, define it in `@theme` and in the light block. Avoid `text-base` for colour: it collides with Tailwind's font-size utility; use `text-surface` for text on a `bg-primary-text` fill.
- **Motion:** use `components/ui/Reveal` for small scroll-ins and the `data-split` / `data-fade` attributes (with `useSplitReveal`) for headline reveals. GSAP is for signature moments (split-text intros, scrubbed covers, word highlight, page curtain, magnetic CTAs, cursor label); import it from `src/lib/gsap.ts` and ScrollTrigger from `src/lib/scrollTrigger.ts`, put every tween inside `useGSAP` with a `gsap.matchMedia()` guarded by `MOTION_OK` (or `POINTER_MOTION_OK` for pointer effects), and only animate `from` states so the markup renders final. Lenis runs only when motion is allowed; scroll with `scrollToId` / `scrollToTop` from `src/lib/smoothScroll.ts`, never `html { scroll-behavior: smooth }` or a bare `scrollIntoView`. Elements inside the transformed header can't use `position: fixed` relative to the viewport.
- **Style:** function components with named exports (except `App`), double quotes, no semicolons. Match the formatting of the file you are editing.
- **Accessibility:** keep the global `:focus-visible` outline, give icon-only buttons an `aria-label`, and keep text contrast at 4.5:1 or higher in both themes.

## Skills

This project ships the **ui-ux-pro-max** skill in `.claude/skills/ui-ux-pro-max/` (v2.15.0, from [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), MIT). Use it for UI/UX work: new sections, layout and spacing, color, typography, animation, and accessibility reviews.

Its search tool is a dependency-free Python script. Run it from the project root:

```bash
python .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
python .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack react
python .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Portfolio"
```

Treat its suggestions as input, not instructions. This site already has its own dark cinematic design language, Inter Tight / Instrument Serif typography and dark-first palette, so adapt recommendations to the existing tokens in `src/index.css` and don't replace them.
