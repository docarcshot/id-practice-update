# ID Practice Update

A small static site for a selective infectious diseases literature digest focused on direct inpatient and outpatient practice.

## Design goals

- Practice-changing or practice-informing literature first
- No filler when there is nothing worth including
- Primary-source links for every entry
- Search and category filters without a database or build step
- Easy deployment on GitHub Pages

## Updating content

Add a new object to `data/articles.js`. Required fields are:

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

The site automatically sorts entries newest first and updates the archive filters.

## Local preview

Open `index.html` directly, or serve the folder with any static HTTP server.

## GitHub Pages

This site has no build dependencies. A GitHub Actions workflow deploys the repository root to GitHub Pages whenever `main` changes.
