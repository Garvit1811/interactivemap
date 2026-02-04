# Interactive Map Repository Structure

This repository is organized as a **single repo** with two map experiences that share styling and scripts where possible.

## Recommended layout

```
interactivemap/
├── index.html           # Map 1: FSCCLT, Senákw, Granville Island
├── community-orgs/      # Map 2: DTES, First United, HAS, SRO Collaborative, UBC Learning Exchange, etc.
│   └── index.html
├── data/
│   ├── fscclt.js         # Map 1 stop data
│   └── community-orgs.js # Map 2 stop data
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
