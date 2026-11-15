# Vernit — warm portfolio concept

An independent, responsive portfolio direction. The existing portfolio in the parent directory is unchanged.

Run `npm run dev` in this folder and open http://127.0.0.1:4175. The static site is in `dist/`; no dependency installation or build is needed. `npm run check` validates JavaScript syntax.

## Content

Name, Bangalore location, CS background, social links, and featured projects were drawn from Vernit's public GitHub profile and repository READMEs on 15 November 2026:

- https://github.com/guptavernit2-afk
- https://github.com/guptavernit2-afk/CatchUp
- https://github.com/guptavernit2-afk/MediWatch
- https://github.com/parasmani-dev/hackoween (team contribution, engine API/run control)
- https://github.com/guptavernit2-afk/Avertiq_ (ongoing research and application work)

MediWatch uses the actual screenshot from its repository's `docs/images/overview.png` (fictional demo records). CatchUp, Rover Fetch, and Avertiq use labelled HTML/SVG editorial illustrations. LinkedIn is the contact destination because an email address was not supplied. SurakshaMitra is intentionally omitted pending a later content decision.

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
- `dist/content.css`: project/contribution cards, work-in-progress panel and grouped toolkit.
- `dist/assets/`: locally served project imagery.
- `dist/script.js`: project details, dialog behavior, mascot interaction, India time.
- `.openai/hosting.json`: private Sites identity and static output.

DM Sans loads from Google Fonts, with Arial as an offline fallback. Illustrations and interactive features do not require external libraries. Dialogs support Escape, backdrop dismissal, and focus restoration; reduced-motion settings suppress decorative animation.
