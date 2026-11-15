# Real project previews

Historical record: this preview treatment was rolled back to the project visuals from `c804f2a`. The rest of the portfolio design and content were preserved. The captures below remain as unused reference assets.

Updated 15 November 2026. All five generated project illustrations have been replaced with authentic captures. Only rectangular crops and JPEG encoding (quality 93) were applied; interface content, numbers, colours, and results were not redrawn or generated.

The cards share a straight, neutral frame, a project label, and an explicit description of the captured state. Pastel colour remains in the surrounding card. Project dialogs show the image again and link to its full-resolution file. There is no decorative image zoom or rotation.

| Project | Delivered asset | Dimensions | Source and captured state |
| --- | --- | --- | --- |
| CatchUp | `dist/assets/catchup-workspace.jpg` | 920 × 575 | Captured from `https://catchup-workspace.vercel.app/` using Load sample → Instant Rules → Analyze Conversation. Built-in fictional conversation; no AI model or cloud API used for this capture. |
| DescentLab | `dist/assets/descentlab-workspace.jpg` | 1145 × 716 | Crop of the retained `descentlab-overview.png`, sourced from the repository screenshot at commit `5dca1c20c6ff1b4411d3ac9227f4c0d8dbbe18fc`. Shows the loss surface, optimizer paths, and controls. |
| MediWatch | `dist/assets/mediwatch-workspace.jpg` | 1147 × 717 | Crop of the retained `mediwatch-overview.png`, sourced from the repository's `docs/images/overview.png`. Summary cards and vital trends use fictional demo records. |
| Rover Fetch | `dist/assets/rover-simulator.jpg` | 1280 × 800 | Crop of `rover_lab/site/arena.jpg` from `parasmani-dev/hackoween`, retrieved 15 November 2026. Actual team simulator environment; not a claim of sole authorship. |
| Avertiq | `dist/assets/avertiq-workspace.jpg` | 1200 × 750 | Existing published Site screenshot of the Avertiq incident workspace, retrieved through Sites on 15 November 2026. Shows the D-001 training dashboard with illustrative demo inputs and geographic context. |

## Crop records

Coordinates are source pixels `(x, y, width, height)`:

- CatchUp: `(382, 350, 920, 575)` from the 1425 × 1000 browser capture.
- DescentLab: `(256, 289, 1145, 716)` from the 1440 × 2511 repository image.
- MediWatch: `(258, 289, 1147, 717)` from the 1440 × 2092 repository image.
- Rover Fetch: `(0, 80, 1280, 800)` from the 1280 × 960 arena image.
- Avertiq: complete 1200 × 750 screenshot, no crop.

Local source captures and the retired generated previews are retained in ignored `outputs/`. The previous generation prompts remain in the documentation as historical records; those images are no longer shipped in `dist/`.

## Attribution

- DescentLab: https://github.com/guptavernit2-afk/descent-lab
- MediWatch: https://github.com/guptavernit2-afk/MediWatch
- Rover Fetch: https://github.com/parasmani-dev/hackoween/blob/main/rover_lab/site/arena.jpg
- Avertiq source: https://github.com/guptavernit2-afk/Avertiq_
- Avertiq map: © OpenStreetMap contributors (https://www.openstreetmap.org/copyright); terrain: Mapterhorn (https://mapterhorn.com/attribution). These credits are displayed alongside the preview and retained in the project dialog.
