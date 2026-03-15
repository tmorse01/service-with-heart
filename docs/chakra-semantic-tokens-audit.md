# Chakra UI Semantic Tokens Audit

This document audits the app for proper use of Chakra UI semantic tokens (see [Chakra theming – Colors](https://chakra-ui.com/docs/theming/colors)). The goal is to use semantic tokens (`bg.subtle`, `fg.default`, `border.default`, etc.) instead of raw color values (`gray.50`, `gray.800`, `#f4f4f4`) so styling stays consistent and can adapt if you add dark mode or rebrand later.

---

## Current Semantic Tokens (theme.js)

Defined in `src/theme.js`:

| Token | Light | Use for |
|-------|--------|---------|
| `bg.default` | white | Main surfaces, cards, skip link |
| `bg.subtle` | gray.50 | Alternate section backgrounds |
| `bg.muted` | gray.100 | Hover states, footer-like areas |
| `bg.emphasized` | gray.200 | Stronger emphasis |
| `fg.default` | gray.900 | Primary text, headings |
| `fg.muted` | gray.600 | Secondary text |
| `fg.subtle` | gray.500 | Tertiary text |
| `fg.inverted` | gray.50 | Text on dark (e.g. hero overlay) |
| `border.default` | gray.200 | Dividers, card borders |
| `border.muted` | gray.100 | Subtle dividers |

**Missing:** A semantic token for the **accent/primary** (teal) used for buttons, links, and active states. Recommendation: add `accent` or `primary` so all teal usage goes through one token.

---

## File-by-File Findings

### 1. `src/components/shared/Header.jsx` — Good

- Uses `bg.subtle`, `bg.default`, `fg.default`, `border.default`.
- **Minor:** `linkStyles` and `activeLinkStyles` use raw `tealPrimary.500` / `tealPrimary.600`. Consider a semantic `accent` token for consistency.

---

### 2. `src/components/pages/Home.jsx` — Needs updates

| Location | Current | Recommendation |
|----------|---------|-----------------|
| Hero overlay text (line ~50) | `color="white"` | `color="fg.inverted"` (text on dark overlay) |
| Section backgrounds | `bg="gray.50"` (lines 101, 179, 268) | `bg="bg.subtle"` |
| Section backgrounds | `bg="white"` (lines 122, 234, 321) | `bg="bg.default"` |
| Headings | `color="gray.800"` (110, 330) | `color="fg.default"` |
| Body text | `color="gray.700"` (113, 154, 212, 301) | `color="fg.muted"` (gray.700 is darker than fg.muted; use `fg.muted` for consistency or add `fg.emphasized` if you want slightly darker) |
| Link (line 255) | `color="teal.600"` | Use theme: `tealPrimary.600` or semantic `accent` once defined |
| Outline button (89–90) | `borderColor="white"`, `color="white"` | `borderColor="fg.inverted"`, `color="fg.inverted"` |
| Outline button hover (91) | `_hover={{ bg: "whiteAlpha.300" }}` | Keep or use `bg="whiteAlpha.300"` (semantic for “overlay” is optional) |

**Note:** `colorScheme="teal"` uses Chakra’s default teal palette, not your `tealPrimary`. For brand consistency, consider a custom button variant that uses `tealPrimary` or a semantic `accent` token.

---

### 3. `src/components/shared/Footer.jsx` — Needs updates

| Location | Current | Recommendation |
|----------|---------|-----------------|
| Container | `bg="#f4f4f4"` | `bg="bg.muted"` (gray.100 is close to #f4f4f4) |
| Text | `color="#777"` | `color="fg.muted"` (gray.600) |

---

### 4. `src/components/shared/Testimonial.jsx` — Needs updates

| Location | Current | Recommendation |
|----------|---------|-----------------|
| Card | `bg="white"` | `bg="bg.default"` |
| Quote text | `color="gray.700"` | `color="fg.muted"` |
| Left border | `borderLeftColor="var(--primary)"` | Use Chakra token: e.g. `borderLeftColor="tealPrimary.500"` or semantic `accent` when added. Removes dependency on App.css `--primary`. |

`colorScheme="teal"` on the Button: keep for now, or switch to a theme-based accent when you add an accent token.

---

### 5. `src/components/pages/Testimonials.jsx` — Needs updates

| Location | Current | Recommendation |
|----------|---------|-----------------|
| Page container | `bg="gray.50"` | `bg="bg.subtle"` |
| Subheading / text | `color="gray.600"` | `color="fg.muted"` |

---

### 6. `src/components/pages/Mexico.jsx` — Needs updates

| Location | Current | Recommendation |
|----------|---------|-----------------|
| Carousel dot (active) | `bg="teal.500"` | `tealPrimary.500` or semantic `accent` (project uses `tealPrimary`, not Chakra `teal`) |
| Carousel dot (inactive) | `bg="gray.300"` | `bg="bg.emphasized"` or `border.default` |
| Dot hover | `_hover={{ bg: "teal.600" / "gray.400" }}` | Use `tealPrimary.600` and `bg.emphasized` or similar for consistency |

---

### 7. `src/components/pages/Contact.jsx` — Minor

- Uses `colorScheme="teal"`. Same as elsewhere: Chakra default teal vs. your `tealPrimary`. Optionally align with theme via semantic accent or custom component.

---

### 8. `src/components/pages/About.jsx` and `src/components/pages/IET.jsx`

- No raw color/bg/border usage found; only border radius. No semantic token changes needed.

---

## Recommended Theme Additions (theme.js)

Add an accent so buttons, links, and active states share one token:

```js
// In semanticTokens.colors:
"accent.solid": { default: "tealPrimary.600", _dark: "tealPrimary.400" },
"accent.muted": { default: "tealPrimary.500", _dark: "tealPrimary.300" },
```

Then use `accent.solid` for primary buttons and active states, `accent.muted` for hover or secondary emphasis. For `colorScheme` you’d still need a [custom component style](https://v2.chakra-ui.com/docs/components/button#customizing-theme) that maps to `tealPrimary` if you want every teal button to use your palette.

---

## Summary

| File | Status | Action |
|------|--------|--------|
| theme.js | Good + optional | Add `accent.solid` / `accent.muted` (optional) |
| Header.jsx | Good | Optional: use accent token for link hover/active |
| Home.jsx | Needs work | Replace gray/white with bg.*, fg.*, fg.inverted; fix teal.600 → theme/accent |
| Footer.jsx | Needs work | Replace hex with bg.muted, fg.muted |
| Testimonial.jsx | Needs work | bg.default, fg.muted; borderLeftColor from theme or accent |
| Testimonials.jsx | Needs work | bg.subtle, fg.muted |
| Mexico.jsx | Needs work | Use tealPrimary or accent for dots; bg.emphasized for inactive |
| Contact.jsx | Minor | Optional: align teal with theme |
| About.jsx, IET.jsx | OK | No changes |

Applying these changes will give you consistent use of Chakra semantic tokens across the app and make future theme or dark-mode changes easier.
