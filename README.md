# Interactive Map Repository Structure

This repository is organized as a **single repo** with two map experiences that share styling and scripts where possible.

## Recommended layout

```
interactivemap/
├── index.html          # Landing page
├── fscclt/              # Map 1: FSCCLT, Sen̓áḵw, Granville Island
│   └── index.html
├── community-orgs/      # Map 2: DTES, First United, HAS, SRO Collaborative, UBC Learning Centre, etc.
│   └── index.html
├── images/              # Shared images and icons
├── styles.css           # Shared styles
└── app.js               # Shared JS logic
```

## Why a single repo

- Shared codebase: improvements apply to both maps.
- Consistent styling and UX.
- Single deployment target (e.g., GitHub Pages).
- Easier maintenance with minimal duplication.

If the two maps need to diverge significantly (branding, ownership, privacy), you can split them into separate repositories later.
