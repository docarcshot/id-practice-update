# ID Practice Update

A small static site for a selective infectious diseases literature digest focused on direct inpatient and outpatient practice.

## Design goals

- Practice-changing or practice-informing literature first
- No filler when there is nothing worth including
- Primary-source links for every entry
- Search by clinical area, article type, or text
- Mobile-friendly static site without a database or build step
- Easy deployment on GitHub Pages

## Updating content

New literature goes in `data/articles.js`. Historical backfill can be kept in separate files under `data/` and loaded before `app.js` in `index.html`; all loaded entries are merged into the same searchable archive.

Required fields are:

- `id`
- `date` in `YYYY-MM-DD`
- `title`
- `type`
- `journal`
- `impact` (`Practice changing`, `Practice informing`, or `Worth knowing`)
- `tags`
- `summary`
- `change`
- `takeaway`
- `limitations`
- `link`
- `doi`

The site automatically sorts entries newest first and updates the clinical-area and article-type filters.

## Editorial standard

Use the article's actual first publication or online-publication date rather than a later print-issue date. Prefer guidelines, major reviews, diagnostic or treatment studies, and trials that change or materially clarify practice. Social media and curated feeds may be used for discovery, but each entry should be verified against the primary publication or issuing organization before inclusion.

## Local preview

Open `index.html` directly, or serve the folder with any static HTTP server.

## GitHub Pages

This site has no build dependencies. A GitHub Actions workflow deploys the repository root to GitHub Pages whenever `main` changes.
