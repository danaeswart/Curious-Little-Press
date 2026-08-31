# Fonts

Drop the licensed **Erica Type** font files here and they will be picked up automatically
(referenced from `src/styles/fonts.css`):

- `EricaType-Regular.woff2`
- `EricaType-Bold.woff2`

The CSS `font-family` is set to `'Erica Type'` (with the space) — that has to match
exactly, since browsers fall back silently on a mismatched family name.

Until those files exist, the site falls back to a bold monospaced system stack so the
display headings still read as blocky/typewriter-style like the design.

**Poppins** (body copy) is loaded from Google Fonts in `index.html`, no local files needed.
