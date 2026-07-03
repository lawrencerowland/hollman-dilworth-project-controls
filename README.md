# Hollman and Dilworth Project Controls Lab

Interactive React lab for project controls audiences learning the difference between Dilworth-style schedule lanes and Hollman's schedule-spine result.

The first tab is the schedule-spine explorer. It walks through five scenes:

1. Reframing a staged schedule as comparable dependencies and concurrent fronts.
2. Comparing Dilworth lanes with a single fishbone-style spine.
3. Showing why an uncapped review loop is not enough to break the spine idea.
4. Contrasting safe infinite grids with the nested-infinite tower pathology.
5. Classifying schedule shapes against the known theorem boundary.

The remaining tabs are placeholders for future attempts in this problem area: case-led project controls examples and diagnostic question generation.

## Run locally

```sh
pnpm install
pnpm run dev
```

## Build

```sh
pnpm run build
```

## Publish

This repo deploys to GitHub Pages from `.github/workflows/pages.yml`.
