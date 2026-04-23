---
name: Malpublish
version: 0.1.0
colors:
  background: "#ffffff"
  foreground: "#171717"
  primary: "#0074ff"              # brand blue — primary CTAs, links, highlights
  primary-dark: "#0063dd"         # hover/pressed state for primary
typography:
  sans: "Geist Sans"              # UI + body fallback, via next/font
  mono: "Geist Mono"
  serif: "Georgia"                # dictionary-style copy, with Cambria / Times fallback
rounded:
  default: "0.5rem"
components:
  body-text:
    textColor: "{colors.foreground}"
    backgroundColor: "{colors.background}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.default}"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#ffffff"
  link:
    textColor: "{colors.primary}"
  prose-serif:
    textColor: "{colors.foreground}"
---

## Overview

Malpublish is a concept/term project built around a dictionary-style definition page — the word "malpublish" presented in serif typography with companion notes. Currently a soft-launch / parked-domain surface that may activate further. Four `malpublish.*` domains are owned; `malpublish.org` is the primary.

Light-mode only today. Dark mode can be added later without breaking existing tokens — there's no conflict with the `@theme inline` pattern used here.

## Colors

**Primary = `#0074ff` (brand blue).** Used for: CTAs, body links, headline highlights in the dictionary-card pattern. `primary-dark` (`#0063dd`) is paired as the hover/pressed state — don't introduce a separate hover color.

Neutral pair is `#171717` foreground on `#ffffff` background. No muted/border tokens today — dictionary-style layout uses whitespace and serif weight, not dividers.

## Components

| Component | Tokens | Where in code |
|---|---|---|
| **Body text** | `foreground` on `background`, Geist Sans | `body` in `globals.css` |
| **Prose (serif)** | `foreground`, Georgia via `.font-serif` utility | `.font-serif` in `globals.css` |
| **Button (primary)** | `primary` bg, white text, `primary-dark` on hover | Tailwind `bg-primary hover:bg-primary-dark` |
| **Link** | `primary` (brand blue) | Tailwind utility |

The two-typeface pattern (Geist sans for UI, Georgia serif for definition/prose) is load-bearing for the dictionary-style aesthetic. Don't collapse to one font.

## Do's and Don'ts

- **Don't** introduce a secondary accent. The two-blue pair (`primary` + `primary-dark`) is the full palette — adding a third blue or a non-blue accent flattens the "malpublish is a word, not a brand" framing.
- **Don't** replace Georgia serif with a custom display face without revisiting the dictionary-style framing. The Georgia / Geist pairing is deliberately *familiar* — malpublish positions itself as a dictionary entry, not a marketing launch.
- **Do** add dark mode tokens here if dark mode ships. The current `@theme inline` pattern supports it cleanly; just extend with `-light` / `-dark` suffixes when added.
- **Do** run `npx @google/design.md lint DESIGN.md` after editing the YAML front matter.
