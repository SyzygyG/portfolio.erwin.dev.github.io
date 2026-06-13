# Agent Guidance

## Project Context

This is a professional IT portfolio website targeting recruiters, hiring managers, and freelance clients. It is built with **Next.js 15 + React 19 + TypeScript** using the App Router and configured for **static export**.

**Stack:**
- Framework: Next.js 15 (App Router, static export)
- Language: TypeScript (strict)
- Runtime: React 19
- Package manager: pnpm via corepack
- Styling: global CSS with custom properties in `src/styles/globals.css`

**Project structure:**
src/
├── app/              # Next.js App Router pages and layout
├── components/       # Shared UI, layout, and section components
├── data/             # All portfolio content (projects, experience, skills, etc.)
├── styles/           # globals.css — design tokens and base styles
└── types/            # TypeScript type definitions

**Design system at a glance:**
- Palette: `#0F1117` ink, `#F9F8F6` surface, `#2563EB` accent (blue)
- Fonts: DM Serif Display (headings), DM Sans (body), DM Mono (labels/code)
- No glassmorphism, no gradient abuse, no typing effects, no particle backgrounds
- Editorial aesthetic — left-aligned, structured, magazine-like section rhythm

**Deployment target:** Static export via Next.js (`output: 'export'`)

## Confirmation Behavior

- Ask before any change that touches the visual identity: new color tokens, new fonts, new layout patterns, or structural component changes.
- Ask before replacing or removing existing portfolio content in `src/data/` — these are real personal entries.
- Ask before adding new dependencies, changing Next.js config, or making architectural decisions with meaningful tradeoffs.
- Keep confirmation requests short. Prefer a recommended option plus 1–3 concrete alternatives over open-ended questions.
- Do not ask for confirmation on clearly scoped, low-risk tasks: fixing a broken link, correcting a typo, adding a missing ARIA label, or updating a data value in `src/data/`.

## Programming Direction

- **Content belongs in `src/data/`, never hardcoded in components.** If a value is specific to the portfolio owner, it goes in the data layer.
- **Reuse components; do not duplicate UI.** Before building a new component, check `src/components/` for an existing one that fits or can be extended.
- **Follow the existing section anatomy.** New sections use: eyebrow label → section title → section lead → content.
- **Preserve static export compatibility.** No server-side runtime features that break `output: 'export'`.
- **TypeScript is strict.** New data shapes go in `src/types/`. Do not use `any`. Props must be typed.
- **CSS changes use existing custom property tokens** from `globals.css`. Do not hardcode hex values inline or in component styles.
- **JavaScript/React should stay purposeful.** Prefer server components unless interactivity is required.

## Content & Customization Rules

- All portfolio content lives in `src/data/`. This is the single source of truth.
- Placeholder content must be clearly marked with `TODO: replace` comments or `todo` strings so the owner knows what needs updating.
- Never remove a section or data entry without confirming with the user.
- When adding a new project, experience entry, or certification, extend the existing data file and reuse the existing component.

## Workflow Expectations

- **Use `main` only for this repository.** Do not create feature branches, worktrees, or temporary publish branches unless the user explicitly asks for them.
- **When making commits or pushing changes, commit directly on `main` and push `main` to `origin`.**
- After any meaningful change, verify with:

```bash
corepack pnpm lint
corepack pnpm build
```

- For accessibility changes, validate semantic HTML, keyboard navigation, ARIA labels, and color contrast.
- For layout changes, verify behavior at mobile, tablet, and desktop breakpoints.
- Before shipping a visual change, avoid glassmorphism, excessive gradients, large animations, fake counters, typing effects, and visual clutter.
- For deployment readiness: confirm `output: 'export'` is set, all asset paths resolve correctly in static output, and no server-side runtime dependencies have been introduced.
