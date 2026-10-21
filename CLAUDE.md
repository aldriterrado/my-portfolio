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
- GSAP 3 + `@gsap/react` for signature motion (ScrollTrigger only on case studies)
- IBM Plex Sans + IBM Plex Mono (latin subset), self-hosted from `src/assets/fonts/`

## Structure

```
src/
  main.tsx              ThemeProvider > BrowserRouter > App
  App.tsx               Routes: /, /projects, /projects/:slug (lazy; /work/:slug redirects)
  pages/                Home, Projects, CaseStudy
  components/layout/    Header, Footer, Container, Section, RouteWipe
  components/sections/  Hero, SystemsIndex, Experience, Capabilities, Credentials, Contact
  components/ui/        Datasheet primitives: DocHeader, SpecLabel, SpecTable, Figure,
                        SystemDiagram, Footnote, Rule, Reveal, TextLink, ThemeToggle, Screenshot
  data/                 Site content: projects.ts, diagrams.ts, experience.ts, site.ts
  lib/                  gsap.ts, scrollTrigger.ts, diagramLayout.ts, motion.ts
  hooks/                useSeo, useHeroIntro, useDiagramMotion
  theme/                ThemeProvider + context (paper/carbon, saved in localStorage)
```

## Conventions

- **Design language:** the site is an engineering datasheet. Use hairline rules (`border-line`, `border-primary-text`) instead of cards, 0–2px corners (only `rounded-xs`/`rounded-sm` exist), mono labels, numbered sections (`SpecLabel`), `SpecTable` for tabular content and `Figure` for numbered figures. Don't reintroduce glows, gradient cards, pills or blur.
- **Content belongs in `src/data/`.** To add a project, add an entry to `projects` in `src/data/projects.ts` (it is typed by `Project`) and its architecture diagram to `src/data/diagrams.ts`. Diagrams sit on a grid (`col`, `row`); keep node labels under ~20 characters, sublabels under ~23 and edge labels under ~16 so they fit. Import screenshots from `src/assets/photo/project/`; they appear as FIG.02. Copy marked `// DRAFT` is awaiting the owner's review. Don't hard-code content inside components.
- **Theming:** the site is light ("paper") by default; `@theme` in `src/index.css` holds the light values and dark ("carbon") overrides them under `:root[data-theme="dark"]`. Use the token utilities (`bg-base`, `bg-surface`, `text-primary-text`, `text-secondary-text`, `text-muted`, `border-line`, `text-accent-text`, ...) and not raw hex values, so both themes keep working. `accent` (signal orange) is for lines and markers only; use `accent-text` for orange text. Diagram strokes use `diagram`. When you add a token, define it in `@theme` and in the dark block. Avoid `text-base` for colour: it collides with Tailwind's font-size utility.
- **Motion:** use `components/ui/Reveal` for small scroll-ins. GSAP is for signature moments only (hero intro, diagram assembly, route wipe); import it from `src/lib/gsap.ts`, put every tween inside `useGSAP` with a `gsap.matchMedia()` guarded by `MOTION_OK`, and only animate `from` states so the markup renders final. Import ScrollTrigger only from `src/lib/scrollTrigger.ts`, and only from the case-study route, so it stays out of the home bundle. Don't use `html { scroll-behavior: smooth }`; use `scrollToId` from `src/lib/motion.ts`.
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

Treat its suggestions as input, not instructions. This site already has its own datasheet design language, IBM Plex typography and light-first palette, so adapt recommendations to the existing tokens in `src/index.css` and don't replace them.
