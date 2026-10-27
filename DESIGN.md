---
name: Mahmudul Hassan
description: Portfolio and resume of a full-stack developer; daylight paper, graphite ink, one amber signal.
colors:
  paper: "oklch(98.6% 0.003 85)"
  paper-2: "oklch(96.2% 0.004 85)"
  paper-3: "oklch(92.6% 0.005 85)"
  ink: "oklch(21% 0.008 260)"
  ink-2: "oklch(36% 0.008 260)"
  muted: "oklch(49% 0.01 260)"
  rule: "oklch(89.5% 0.004 85)"
  accent: "oklch(80% 0.145 72)"
  accent-ink: "oklch(21% 0.03 65)"
  accent-line: "oklch(55% 0.13 66)"
  paper-dark: "oklch(22% 0.006 260)"
  paper-2-dark: "oklch(25.5% 0.007 260)"
  paper-3-dark: "oklch(30% 0.008 260)"
  ink-dark: "oklch(94% 0.004 85)"
  ink-2-dark: "oklch(84% 0.005 85)"
  muted-dark: "oklch(71% 0.01 260)"
  rule-dark: "oklch(34% 0.008 260)"
  accent-line-dark: "oklch(80% 0.145 72)"
  error: "oklch(52% 0.19 27)"
  success: "oklch(50% 0.12 150)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 3vw + 1.5rem, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 0.8vw + 1.25rem, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 0.5vw + 1.1rem, 1.5rem)"
    fontWeight: 700
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.3vw + 1rem, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  body-prose:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
  caption:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.9em"
rounded:
  control: "8px"
  card: "12px"
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
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-2}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px"
    height: "44px"
  diagram-node:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
  screenshot-frame:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.card}"
  top-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "56px"
---

# Design System: Mahmudul Hassan

## Overview

**Creative North Star: "The Annotated Record"**

A calm, exact working record set on daylight paper. Who he is stays fixed in view; the work scrolls past as a plain list of evidence: real screenshots, one drawn system figure, a muted line naming the stack, dates in tabular figures. Nothing performs. Hierarchy comes from one grotesk family at three weights, graphite ink in three strengths, and hairline rules; colour is spent on a single amber that marks the next action and the current place.

Density is reading density, not dashboard density: generous section gaps, a 65ch measure for running text, and lists separated by hairlines rather than boxed into cards or decorated with pills. Dark mode is the same record after hours: graphite paper (not black), warm off-white ink, and the very same amber. Print is a third theme: paper is paper whatever the screen says, and every amber role drops to ink.

The system refuses the developer-portfolio costume: navy and teal, neon glow, badge walls, card grids, typing headers.

**Key Characteristics:**
- One family (Schibsted Grotesk), weights 400, 600 and 700 only; monospace for inline code alone.
- Warm paper neutrals (hue 85) against cool graphite ink (hue 260); amber is the only chroma.
- One amber in two jobs: a light fill behind graphite text, and a deeper line for marks drawn on paper.
- Hairline rules (1px) do the structural work; text, not chips, carries metadata.
- Three themes from one token set: light, dark, print.
- 44px minimum hit area on every control.

## Colors

A near-neutral paper-and-graphite palette with one warm amber signal; all canonical values are OKLCH.

### Primary
- **Signal Amber** (`accent`, identical in light and dark): the fill of the primary button and the tint of text selection (22% mix). Always carries graphite text, never sits as a thin mark on light paper.
- **Amber Graphite** (`accent-ink`, both themes): text and icons on the amber fill.
- **Amber Line** (`accent-line`; `accent-line-dark` equals the fill): every amber drawn as a line or edge: the primary button's 1px border, the active section-nav line, link and title hover underlines, the focus ring and input focus halo, and the edge of the core node in the system figure. In light it is darkened so a 1px mark holds against daylight paper; in dark the fill already holds, so the two collapse.

### Neutral
- **Daylight Paper** (`paper` / `paper-dark`): page ground, inputs, top bar (at 90% with blur), diagram nodes. Dark paper is graphite, not near-black.
- **Paper Shade** (`paper-2` / `paper-2-dark`): screenshot frame, inline code, hover fill for secondary and icon buttons.
- **Paper Deep** (`paper-3` / `paper-3-dark`): scrollbar thumb and the far end of image-slot gradients only.
- **Graphite Ink** (`ink` / `ink-dark`): names, headings, labels, links, strong text.
- **Graphite Ink Soft** (`ink-2` / `ink-2-dark`): body copy, lead sentences, prose, icon-button rest colour; at 50% it borders the monolith box in the system figure.
- **Graphite Muted** (`muted` / `muted-dark`): metadata (dates, status, stack lines), group labels, hints, captions, input borders, list markers, diagram arrows.
- **Hairline** (`rule` / `rule-dark`): every divider, node and frame border, the section-nav line at rest, the gaps of the module grid.

### Status
- **Error Red** (`error`) on invalid input borders and field messages; **Success Green** (`success`) on the form's sent message. Neither appears decoratively.

### Named Rules
**The One Signal Rule.** Amber marks action and location, nothing else: the primary button, the active nav line, link hover, focus, the system's core node. Never a section fill, a heading colour, or decoration.

**The Fill and Line Rule.** Amber as a surface uses the fill with graphite text on it; amber as a 1px mark on paper uses the line token. Never draw a thin mark in the fill colour on light paper.

**The Warm Paper, Cool Ink Rule.** Paper neutrals sit at hue 85, ink at hue 260, both at chroma 0.01 or below. New neutrals pick a side; none sit between.

**The Paper Is Paper Rule.** In print the palette collapses to near-white paper and near-black ink, every amber role (fill, text on fill, line) maps to ink or paper, and no shadow or border frames the sheet.

## Typography

**Display Font:** Schibsted Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (same stack)
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo, for inline code in case studies only.

**Character:** A single editorial grotesk, tight and confident at display size, plain and even in running text. Weight and ink strength carry hierarchy; there is no second face.

### Hierarchy
- **Display** (700, clamp 2.5 to 3.5rem, 1.02, -0.03em): the person's name on home and the project name on a case study. Once per page.
- **Headline** (700, clamp 1.5 to 1.875rem, 1.15, -0.02em): section titles in the record column (Selected work, Experience, Education, Skills, Contact).
- **Title** (700, clamp 1.25 to 1.5rem, tight tracking): featured project names, role title, next-case-study link.
- **Lead** (400, clamp 1.0625 to 1.1875rem, relaxed): the identity sentence (max 34ch), the case-study summary (48ch), the contact invitation (55ch).
- **Body** (400, 1rem, 1.55): all running text, max 65ch. In case-study prose, 1.7 line height with a 68ch measure; prose h2 is 1.375rem/700, h3 1.125rem/600.
- **Label** (600, 0.875rem): buttons, nav links, profile links, field labels, and muted group labels (More projects, Degrees, Status, skill groups) in sentence case.
- **Caption** (400, 0.875rem, muted): stack lines, dates, status, figure captions; hints and field errors drop to 0.8125rem.

### Named Rules
**The Three Weights Rule.** 400 reads, 600 labels and acts, 700 names. No 300, 500 or 800; font synthesis is off.

**The Tabular Dates Rule.** Dates and figures set with tabular numerals, in a fixed 9rem gutter or right-aligned, so they scan as a column.

**The Sentence Case Rule.** Labels are short sentence-case words in the label style, muted when they group content. No uppercase tracked micro-labels above headings.

**The Stack Is a Sentence Rule.** Technologies are listed as one muted, comma-separated caption line, never as chips or badges.

## Layout

Mobile-first, one column, with a sticky 56px top bar (theme toggle and menu disclosure; the name fades in only once the page's own name has scrolled away) on phones and tablets. At 64rem the home page becomes the two-column canon: a 5fr identity column, sticky at full viewport height (portrait, name, sentence, primary and secondary actions, section nav, profile links and theme toggle pinned to its foot), and a 7fr record column that scrolls; 64px between columns. At that width the footer drops its profile links because the column already holds them.

Container: 1200px max with a responsive gutter (20px, 32px at 40rem, 48px at 64rem). Section gap scales the same way (72px, 88px, 112px). Reading surfaces (case study, resume) narrow to 880px with a sticky or inline back link. Supporting rows use a 9rem label gutter beside content (experience dates, Degrees, Languages) from 40rem up. Lists of secondary items are rows split by hairlines under a muted label, not grids of cards. Spacing follows the 4/8 scale in the frontmatter; component internals use 8 to 24px, section internals 24 to 48px. Lists, definitions and captions wrap with `text-wrap: pretty`; headings balance.

## Elevation & Depth

Flat. Depth is tonal and linear: paper nodes outlined by hairlines, a paper-2 frame around screenshots, and a translucent blurred top bar over scrolling content. The only shadow in the system lifts the on-screen resume sheet off the page, signalling "this is a document"; it is removed in print. Focus on inputs adds a 3px amber-line halo (28% mix).

### Shadow Vocabulary
- **Document lift** (`box-shadow: 0 1px 2px oklch(21% 0.008 260 / 0.06), 0 8px 24px -12px oklch(21% 0.008 260 / 0.18)`; dark and system-dark: `0 1px 2px oklch(0% 0 0 / 0.3), 0 12px 32px -16px oklch(0% 0 0 / 0.6)`): the resume sheet on screen only.

### Named Rules
**The Hairline Over Shadow Rule.** Separate with a 1px rule or a paper-2 tone. A shadow is reserved for a surface that is literally a sheet of paper.

## Shapes

Gently rounded and consistent: 8px on every control and every drawn box (buttons, icon buttons, inputs, diagram nodes, inline code), 12px on framing containers (screenshot frame, resume sheet), a circle on the portrait only. Borders are always 1px. Grouped items inside one box are divided by hairlines (a 1px gap grid), not given their own corners.

## Components

### Buttons
Quiet, solid, a single pair.
- **Shape:** 8px radius, 44px minimum height, 16px inline padding, 8px icon gap, 16px line icons at stroke 2.
- **Primary:** amber fill, graphite text, 1px amber-line border, 600 label. One per cluster: Download resume, Email me, Send message, Get in touch.
- **Hover / Active:** primary deepens toward its graphite ink (86% amber mix); press nudges 1px down; colour transitions 220ms ease-out.
- **Secondary:** transparent with a hairline border and ink text; hover shifts the border to muted and fills paper-2.
- **Disabled:** 55% opacity, no press.

### Icon Buttons
44px square, 8px radius, ink-2 glyph at 20px (stroke 1.75), transparent at rest; hover fills paper-2 with a hairline. Used for theme toggle and menu.

### Links
Ink text with an underline at 30% ink and 0.16em offset; on hover the underline turns amber-line. Project titles carry no underline until hover, then an amber-line one at 4px offset. Link clusters are 600 labels spaced 20px apart.

### Inputs / Fields
- **Style:** paper fill, 1px muted border (darker than hairline, for 3:1 boundary contrast), 8px radius, 44px minimum, 12px padding, 1rem text. Label above in the label style; optional muted hint between label and field.
- **Focus:** border turns amber-line plus a 3px halo; no outline.
- **Error / Disabled:** error border and an error caption below, linked by aria-describedby; disabled at 60% opacity. The submit button reads "Sending…" while pending, and the status line below announces politely.
- **Availability:** the form renders only when it can send; otherwise the contact block offers Email me (primary) and Message me on LinkedIn (secondary).

### Navigation
- **Section nav (desktop):** a vertical list of 600 labels in muted, each led by a 48px hairline drawn at half length. Hover extends it to three quarters in ink; the current section (aria-current="location") draws it full length in amber-line and sets the label in ink. 300ms ease-out.
- **Top bar (phone):** sticky, 56px, paper at 90% with backdrop blur and a hairline bottom. The name is hidden and unfocusable while the page's own name is on screen, then fades in (200ms). Menu is a disclosure panel of 48px rows, closes on Escape or selection.
- **Reading pages:** a sticky back link with a left arrow and the theme toggle, at the 880px measure.

### System Figure (signature)
Architecture drawn in the interface's own materials rather than illustrated, with no enclosing panel. Tiers stack vertically: paper nodes with hairline borders and 8px corners, joined by drawn muted arrows (1.25 stroke, 28px tall). The monolith is one box bordered in ink-2 at 50%, its header split from a module grid by a hairline, modules divided by 1px hairline gaps. Exactly one node, the system's core, takes an amber-line edge. Node text uses a 600 label over a muted caption; a compact variant shortens the captions for the home page.

### Product Screenshot
A real screenshot full-bleed inside a 12px paper-2 frame with a hairline border and blur placeholder; muted caption below where the figure stands alone.

## Do's and Don'ts

### Do:
- **Do** spend amber only on the primary action, the active location, link hover, focus and the system's core node.
- **Do** use the amber fill as a surface with graphite text, and the amber-line token for every 1px amber mark.
- **Do** set every surface in Schibsted Grotesk at 400, 600 or 700, with hierarchy from weight and ink strength.
- **Do** separate list rows with a 1px hairline and let section gaps (72 to 112px) carry the structure.
- **Do** list technologies as one muted comma-separated line.
- **Do** draw diagrams as hairline boxes and drawn arrows on the page itself, with one amber-line node at most.
- **Do** give every control a 44px minimum hit area and a 2px amber-line focus outline at 2px offset.
- **Do** define any new colour for light, dark and print together.
- **Do** set dates and figures in tabular numerals.

### Don't:
- **Don't** add a second accent hue, gradients on content, or glow effects.
- **Don't** render stack, skills or categories as pills, chips or badges.
- **Don't** box secondary items into card grids or nest a card inside a card.
- **Don't** add drop shadows to cards, buttons or figures; the document lift belongs to the resume sheet alone.
- **Don't** add uppercase tracked micro-labels above headings; labels are sentence case.
- **Don't** introduce a second typeface for display; monospace is for inline code only.
- **Don't** use decorative illustration or stock imagery; pictures are real screenshots or drawn system figures.
