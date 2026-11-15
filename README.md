# Vernit Gupta — portfolio

A warm, minimal portfolio with colourful project cards, GSSoC contribution stories, and a little play. Live at https://vernit-portfolio.vercel.app/.

Run `npm run dev` in this folder and open http://127.0.0.1:4175. The static site is in `dist/`; no dependency installation or build is needed. `npm run check` validates JavaScript syntax.

## Vercel deployment

Import `guptavernit2-afk/portfolio` in Vercel with the repository root as the Root Directory and `main` as the Production Branch. `vercel.json` selects the Other framework preset, skips dependency installation, runs the JavaScript syntax check, and publishes only `dist/`. No environment variables are required. Once connected, pushes to `main` deploy the production site automatically.

## Content

Name, Bangalore location, CS background, social links, and featured projects were drawn from Vernit's public GitHub profile and repository READMEs on 15 November 2026:

- https://github.com/guptavernit2-afk
- https://github.com/guptavernit2-afk/CatchUp
- https://github.com/guptavernit2-afk/descent-lab
- https://github.com/guptavernit2-afk/MediWatch
- https://github.com/parasmani-dev/hackoween (team contribution, engine API/run control)
- https://github.com/guptavernit2-afk/Avertiq_ (ongoing research and application work)

MediWatch uses the actual screenshot from its repository's `docs/images/overview.png` (fictional demo records). CatchUp, Rover Fetch, and Avertiq use labelled HTML/SVG editorial illustrations. SurakshaMitra is intentionally omitted pending a later content decision.

About uses a decorative initials card and biography grounded in the GitHub profile. Contact includes email, LinkedIn, and GitHub links verified against the profile's public Connect section on 15 November 2026. The email opens the visitor's mail app; the copy control appears when the Clipboard API is available and reports failures without removing the address. No message is submitted by the portfolio itself.

The hero pairs its blue interactive character with a warm pastel art card, project and GitHub links, and an Avertiq workbench shortcut. The sticky navigation highlights the current section. On small screens it becomes a coloured disclosure menu with Escape dismissal, anchor focus handling, and an always-visible link fallback when JavaScript is unavailable.

DescentLab's card and contribution dialog were checked against its README, architecture guide, project history, and package manifest. Its actual application screenshot and brand mark come from commit `5dca1c20c6ff1b4411d3ac9227f4c0d8dbbe18fc`. Skill groups follow the GitHub profile stack, supplemented by TypeScript, SQLite, Vite, Vitest, Canvas, MapLibre, and Drizzle from the featured projects. Icons are served locally; attribution is in `THIRD_PARTY_NOTICES.md`.

Project and contribution cards use one-time entrance animations and pointer hover effects. Reduced-motion preferences disable these effects, and content remains visible without JavaScript.

### GSSoC contribution evidence

These four PRs were verified through the GitHub API on 15 November 2026: each is authored by `guptavernit2-afk`, merged, and labelled `gssoc:approved`. Cards describe only the contributed change, not ownership of the complete upstream project.

- pdf-qa-bot: https://github.com/FireFistisDead/pdf-qa-bot/pull/50 — retrieval relevance gate and fallback.
- PixelTruth: https://github.com/Piyush-Sharma788/PixelTruth/pull/31 — low-confidence display state and threshold tests.
- AegisAI: https://github.com/SdSarthak/AegisAI/pull/249 — static React analytics page, navigation and Recharts.
- CricScope: https://github.com/Arnav-Singh-5080/CricScope/pull/44 — pre-prediction match-state validation.

Rover Fetch role evidence: merged PRs [7](https://github.com/parasmani-dev/hackoween/pull/7), [13](https://github.com/parasmani-dev/hackoween/pull/13), and [18](https://github.com/parasmani-dev/hackoween/pull/18). Avertiq's current scope is documented in [the backend milestone](https://github.com/guptavernit2-afk/Avertiq_/blob/main/docs/BACKEND_MILESTONE.md); illustrative assessments are distinct from physical-model validation.

## Editing

- `dist/index.html`: layout, biography, project previews, social links.
- `dist/style.css`: colours, typography, responsive layout, motion.
- `dist/content.css`: project/contribution cards, work-in-progress panel, grouped toolkit, profile card, contact postcard, hero and navigation refinements.
- `dist/assets/`: locally served project imagery.
- `dist/script.js`: project details, dialog behavior, mascot interaction, mobile navigation, section highlighting, email copy, India time.
- `.openai/hosting.json`: private Sites identity and static output.

DM Sans loads from Google Fonts, with Arial as an offline fallback. Illustrations and interactive features do not require external libraries. Dialogs support Escape, backdrop dismissal, and focus restoration; reduced-motion settings suppress decorative animation.
