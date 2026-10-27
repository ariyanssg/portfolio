---
name: Mahmudul Hassan
description: Portfolio and resume of a full-stack developer, set as a product page; white page, grey tiles, one amber action.
colors:
  page: "#ffffff"
  tile: "#f5f5f7"
  tile-deep: "#e8e8ed"
  ink: "#1d1d1f"
  ink-2: "#424245"
  muted: "#6e6e73"
  rule: "#d2d2d7"
  accent: "#f5a524"
  accent-ink: "#1d1d1f"
  accent-line: "#a8590a"
  page-dark: "#0f0f11"
  tile-dark: "#1c1c1e"
  tile-deep-dark: "#2c2c2e"
  ink-dark: "#f5f5f7"
  ink-2-dark: "#d2d2d7"
  muted-dark: "#98989d"
  rule-dark: "#3a3a3c"
  accent-line-dark: "#f5a524"
  error: "#c4262e"
  success: "#1d7a3e"
  error-dark: "#ff6961"
  success-dark: "#30d158"
typography:
  hero:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5.2vw + 1.2rem, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 3.4vw + 1.3rem, 4.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 2.4vw + 1.2rem, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1vw + 1.2rem, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 0.5vw + 1.05rem, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-prose:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  fine:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.88em"
rounded:
  control: "12px"
  card: "18px"
  tile: "28px"
  capsule: "999px"
spacing:
  3xs: "2px"
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  3xl: "96px"
  4xl: "144px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.capsule}"
    padding: "0 24px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.capsule}"
    padding: "0 24px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.tile}"
  button-tinted-sm:
    textColor: "{colors.ink}"
    rounded: "{rounded.capsule}"
    padding: "0 16px"
    height: "32px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.capsule}"
    size: "44px"
  input:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "48px"
  tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "28px"
  tile-wide:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "56px"
  diagram-node:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  screen-frame:
    rounded: "{rounded.card}"
  nav-bar:
    textColor: "{colors.ink}"
    height: "52px"
  footer:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
---

# Design System: Mahmudul Hassan

## Overview

**Creative North Star: "The Product Page"**

The site presents one engineer the way a hardware maker presents a product line: a white page, a centred hero that says who and offers two actions, then each piece of work in its own soft grey tile carrying its real artifact (a drawn system diagram, a live screenshot rising out of the tile). Below the work, the record (experience, education, skills) reads as a calm two-column list with sticky headings, and the page closes on one centred invitation tile and grey fine print.

The voice is large, quiet and confident. A brand grotesk (Schibsted Grotesk) sets every headline at semibold with tight tracking; everything people read is the platform's own system face, so body text feels native on every device. Colour is almost absent: white, two greys, near-black ink, and one amber reserved for the primary action on each view. Depth is soft and real: tiles are flat fills, artifacts on them float on short shadows.

Appearance follows the system: light by default, graphite in dark mode, steeper greys under Increase Contrast, solid chrome under Reduce Transparency, still motion under Reduce Motion, plain paper in print.

**Key Characteristics:**
- Brand face for headlines only; the system UI face for all reading, labels and controls.
- White page, grey tiles; tiles are filled, never bordered, never nested.
- One amber capsule per view for the primary action; secondary actions are hairline or tinted capsules.
- Big type, generous section gaps (96 to 160px), centred hero and closing tile, left-aligned record.
- Every user preference honoured: dark, increased contrast, reduced transparency, reduced motion, print.
- 44px touch targets, 28px with a fine pointer.

## Colors

A near-achromatic Apple-style palette of white, cool greys and near-black, with one saturated amber; hex is canonical.

### Primary
- **Marigold** (`accent`, same in light and dark): the fill of the primary capsule (Download resume, Email me, Get in touch, Download PDF), the full-width Resume button in the phone sheet, and a 22% selection tint. It always carries near-black text (8.3:1).
- **Marigold Ink** (`accent-ink`): text and icons on the amber fill, both themes.
- **Burnt Amber** (`accent-line`; `accent-line-dark` equals the fill): amber as a line or mark on the page: link and title hover underlines, prose link underlines, the focus ring, the text caret, and the ring around the PostgreSQL node (5.1:1 on white).

### Neutral
- **Page White** (`page` / `page-dark`): page ground, diagram nodes, inputs, the resume sheet, the phone menu sheet; the bar material is 78% of it.
- **Tile Grey** (`tile` / `tile-dark`): every tile, the footer band, inline code, secondary-capsule hover.
- **Tile Deep** (`tile-deep` / `tile-deep-dark`): scrollbar thumb and image-slot gradients only.
- **Ink** (`ink` / `ink-dark`): headlines, names, links, skill lists, active nav item.
- **Ink Soft** (`ink-2` / `ink-2-dark`): body copy, leads, prose, taglines.
- **Muted** (`muted` / `muted-dark`): metadata (status, dates, stack lines), group labels, nav links at rest, captions, hints, input borders, diagram arrows, list markers, footer fine print.
- **Hairline** (`rule` / `rule-dark`): row dividers in the record and "Also built", the resume heading rules, the case-study fact strip, the module grid in the diagram, the bar's bottom edge (at 70%).

### Status
- **Error** and **Success** (`error`, `success`; brighter `-dark` variants) on form validation and the sent message only.

### Named Rules
**The One Amber Rule.** Each view has one amber capsule per action cluster, for its primary action. Chrome uses the grey tinted capsule so amber stays with the page.

**The Fill and Line Rule.** Amber as a surface is Marigold with ink text on it; amber as a 1px mark on white is Burnt Amber. Never draw thin marks in Marigold on a light page.

**The System Appearance Rule.** Dark mode follows `prefers-color-scheme`; there is no in-page toggle. Increase Contrast steps muted and hairline toward ink in both themes; print collapses to paper and ink with every amber role mapped to ink.

## Typography

**Display Font:** Schibsted Grotesk (with ui-sans-serif, system-ui, sans-serif), headlines only.
**Body Font:** the system UI stack (-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif).
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo, for inline code only.

**Character:** A tight, semibold grotesk carries the brand at headline sizes; the native system face does everything else, so reading feels like the visitor's own device.

### Hierarchy
- **Hero** (Schibsted 600, clamp 3 to 5.5rem, 0.98, -0.04em): the person's name on home, the project name on a case study. Once per page.
- **Display** (Schibsted 600, clamp 2.5 to 4.25rem, 1, -0.035em): project names in full-width work tiles.
- **Headline** (Schibsted 600, clamp 2 to 3.5rem, 1.05, -0.03em): section titles (Selected work, Experience, Skills), the closing invitation, the Resume page title.
- **Title** (Schibsted 600, clamp 1.5 to 2.125rem): half-tile project names, role title, Education, next-case-study link. Prose h2 uses Schibsted 600 at 1.75rem.
- **Lead** (system 400, clamp 1.1875 to 1.4375rem): hero sentence (30ch, balanced), tile taglines, section intros, case-study summary.
- **Body** (system 400, 17px, 1.55): running text. Case-study prose at 19px, 1.6, 58ch measure.
- **Label** (system 600, 15px): buttons at 17px, small capsules and nav at 15px, link clusters, group labels (Also built, skill groups, Status) in muted.
- **Caption** (system 400, 15px, muted): stack lines, dates, figure captions, footer. **Fine** (13px) for hints and field errors.

### Named Rules
**The Two Faces Rule.** Schibsted Grotesk is for headings and the wordmark; body, labels, buttons, nav and forms use the system face. Never set reading text in the brand face.

**The Semibold Ceiling Rule.** Headlines are 600, not bold; text weights are 400 and 600 only.

**The Stack Is a Sentence Rule.** Technologies appear as one muted, comma-separated caption line, never as chips or badges.

**The Tabular Dates Rule.** Dates use tabular numerals.

## Layout

Mobile-first. One global translucent bar (52px) sits on every page; content lives in a 1120px container with responsive gutters (20, 32, 48px). Section gaps are large and scale with width (96px, 120px at 40rem, 160px at 64rem).

The home page runs as a product line: a centred hero (portrait, hero name, sentence, two capsules, profile links), then Selected work as a stack of tiles with 16 to 20px gaps: full-width tiles for the flagship projects (text and diagram side by side at lg in a 5/7 split; or text split in two columns above a screenshot that bleeds off the tile's bottom edge), then half-width tiles in a two-column grid from md, then hairline-ruled rows for minor work. The record sections (Experience with Education inside it, Skills) switch to a 4/8 split at lg with the section heading sticky beside its content. The page ends on a centred closing tile and a full-bleed grey footer.

Reading pages narrow to 880px: the case study opens with a back link, hero-size name, lead, and a hairline-bounded fact strip (Status, Built with, Links), then prose, then a tile linking the next case study. The resume has a title row (headline plus Print and Download PDF) above a printable sheet.

## Elevation & Depth

Tonal first, shadow second. Tiles are flat fills on white and never carry a shadow or border. Objects placed on a tile (diagram nodes, the product screenshot) and documents (the resume sheet) float on short, soft shadows. The bar is the one translucent material, a 20px saturated blur over content, solid under Reduce Transparency.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgb(29 29 31 / 0.04), 0 12px 32px -18px rgb(29 29 31 / 0.22)`; darker in dark mode): the product screenshot in its tile and the on-screen resume sheet (removed in print).
- **Node** (`box-shadow: 0 1px 2px rgb(29 29 31 / 0.06), 0 4px 14px -6px rgb(29 29 31 / 0.12)`; darker in dark mode): diagram nodes and the hero portrait.

### Named Rules
**The Flat Tile Rule.** A tile is a fill. Things on it may float; the tile itself never lifts, never takes a border, and never holds another tile.

**The One Material Rule.** Only the navigation bar is translucent.

## Shapes

Soft, continuous corners scaled to size: 12px for controls, inputs and diagram nodes; 18px for a screen inside a tile (top corners only when it bleeds off the bottom); 28px for tiles and the resume sheet; capsules for every button and icon button; a circle for the portrait. Lines are 1px hairlines. Groups inside a box are split by 1px hairline gaps rather than their own corners.

## Components

### Buttons
Capsules, confident and calm.
- **Shape:** full capsule, 44px tall, 24px inline padding, 17px semibold, 18px line icons at stroke 2 with an 8px gap.
- **Primary:** Marigold fill, ink text, no border. Hover mixes 12% ink in; press scales to 0.98.
- **Secondary:** transparent with a hairline border and ink text; hover fills tile grey and darkens the border to muted.
- **Tinted (small):** a 7% ink wash capsule, 32px tall (44px on coarse pointers), 15px, for actions in chrome such as the bar's Resume link; hover 12%.
- **Disabled:** 55% opacity, no press. On phones, hero capsules stack full width up to 18rem.

### Links
Ink text with a 28% ink underline at 0.18em offset that turns Burnt Amber on hover. Link clusters are semibold and spaced 24px, each a `tap` target (44px touch, 28px fine pointer). Muted links in the footer keep the same behaviour.

### Tiles
- **Corner Style:** 28px.
- **Background:** tile grey; never bordered, never shadowed, never nested.
- **Internal Padding:** 28px on phones, 40 to 48px at sm, 56px at lg for full-width tiles.
- **Content:** name, tagline, summary, stack line, a status line below it (never above the name), and links, plus the project's artifact. The closing contact tile is centred with 64 to 96px vertical padding. The next-case-study link and the framed figures in case studies are tiles too.
- **Motion:** with motion allowed, the artifact inside a hovered tile lifts 6px over 600ms ease-out.

### Inputs / Fields
- **Style:** white fill, 1px muted border, 12px radius, 48px minimum, 12 by 16px padding, 17px text; label above in 15px semibold; hint in 13px muted.
- **Focus:** 2px Burnt Amber outline at 1px offset, border to match.
- **Error / Disabled:** error border and 13px error message linked by aria-describedby; disabled at 60%. Submit reads "Sending…" while pending. The form renders only when sending is configured; otherwise the contact tile offers Email me and Message me on LinkedIn.

### Navigation
- **Bar:** sticky 52px translucent material with a 70% hairline bottom; wordmark in Schibsted 600 at 17px on the left. From md: section links (Work, Experience, Skills, Contact) in 15px muted, the section in view marked with aria-current and set in ink, then a tinted Resume capsule.
- **Phone sheet:** a 44px menu icon capsule opens a full-height white sheet with section links at 28px in Schibsted 600 (56px rows) and a full-width amber Resume capsule; Escape closes it and the page behind stops scrolling.
- **Footer:** a full-bleed tile-grey band with 15px muted fine print (name, place) and muted links.

### System Figure (signature)
Architecture drawn as real UI on the tile: white nodes with 12px corners and the node shadow, a monolith box whose header sits over a hairline-divided module grid, muted drawn arrows (1.25 stroke) between tiers, and one node, the system's core, ringed in Burnt Amber. Node titles are 15px semibold, details 13px muted. A compact variant shortens details for the home tile; the framed variant wraps itself in a tile for case studies.

### Product Screenshot
A real screen with 18px top corners and the card shadow, rising from the bottom edge of its tile (or inset in its own tile when framed).

### Hero Entrance
The hero's children settle in once on load: 12px rise and fade over 600ms ease-out, staggered 70ms. Off under Reduce Motion, which also disables smooth scrolling and the tile lift.

## Do's and Don'ts

### Do:
- **Do** set headlines in Schibsted Grotesk 600 with tight negative tracking, and everything else in the system face.
- **Do** give each piece of work a filled grey tile with its real artifact inside it.
- **Do** float objects on tiles with the node or card shadow, and keep tiles themselves flat.
- **Do** use one Marigold capsule for the primary action, hairline or tinted capsules for the rest.
- **Do** use Burnt Amber for any amber line, underline, ring or focus outline on a light page.
- **Do** keep section gaps at 96 to 160px and let type size carry hierarchy.
- **Do** honour dark appearance, Increase Contrast, Reduce Transparency, Reduce Motion and print with token overrides, not separate components.
- **Do** make every interactive target 44px on touch.

### Don't:
- **Don't** border, shadow or nest tiles.
- **Don't** add a second accent colour, gradients on content, or glow.
- **Don't** set body copy, labels or buttons in the brand face.
- **Don't** render stack or skills as chips, pills or badges.
- **Don't** add another translucent layer besides the navigation bar.
- **Don't** add kicker or eyebrow lines above headings.
- **Don't** use decorative illustration or stock imagery; pictures are real screenshots or drawn system figures.
