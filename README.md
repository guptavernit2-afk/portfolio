# Vernit — warm portfolio concept

An independent, responsive portfolio direction. The existing portfolio in the parent directory is unchanged.

Run `npm run dev` in this folder and open http://127.0.0.1:4175. The static site is in `dist/`; no dependency installation or build is needed. `npm run check` validates JavaScript syntax.

## Content

Name, Bangalore location, CS background, social links, and featured projects were drawn from Vernit's public GitHub profile and repository READMEs on 15 November 2026:

- https://github.com/guptavernit2-afk
- https://github.com/guptavernit2-afk/CatchUp
- https://github.com/guptavernit2-afk/descent-lab
- https://github.com/guptavernit2-afk/MediWatch

Project visuals are custom HTML/SVG editorial illustrations, not screenshots of the live products. The detail dialogs identify this distinction. Personal copy is a first-draft adaptation for review. LinkedIn is the contact destination because an email address was not supplied.

## Editing

- `dist/index.html`: layout, biography, project previews, social links.
- `dist/style.css`: colours, typography, responsive layout, motion.
- `dist/script.js`: project details, dialog behavior, mascot interaction, India time.
- `.openai/hosting.json`: private Sites identity and static output.

DM Sans loads from Google Fonts, with Arial as an offline fallback. Illustrations and interactive features do not require external libraries. Dialogs support Escape, backdrop dismissal, and focus restoration; reduced-motion settings suppress decorative animation.
