# Pink October

Interactive breast-awareness guide by Beat, with automatic English and Spanish localization, animated demonstrations and a downloadable image of warning signs.

This repository contains the approved standalone website in `site/`. It collects no health information. Educational content does not diagnose illness or replace professional screening.

## Preview

Serve `site/` with any static web server. The primary browser language selects English for `en` locales and Spanish otherwise. Use `?lang=en` or `?lang=es` to preview either version.

## Publish at beatlab.io/pinkoctober

The main Beat website currently runs on Vinext. From this repository, run:

```sh
npm run integrate -- /absolute/path/to/beat-studio
```

This adds only `app/pinkoctober/` and `public/pinkoctober/` to that project. It does not change the homepage, root layout, hosting identity or DNS. Existing destination files are never overwritten automatically.

Build and check the host project before publishing it through its existing deployment workflow. The route returns a standalone HTML document, so Beat's main navigation and styles do not wrap the guide. Asset paths are rooted under `/pinkoctober/` so the URL works with or without the final slash.

Uploading this repository to GitHub does not activate the route by itself; publishing the Beat host project does.

## Source

Copied from the approved October Rosa source revision `67255985f14eb36e0b1e9c3439f9fbd0a5330c57` on October 26, 2026. Includes the merged closing screen, downloadable warning signs, English localization, faster observation sequence and removal of the edition label.
