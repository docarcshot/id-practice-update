# ID Practice Update

A small static site for a selective infectious diseases literature digest focused on direct inpatient and outpatient practice.

## Design goals

- Practice-changing or practice-informing literature first
- No filler when there is nothing worth including
- Primary-source links for every entry
- Search by clinical area, article type, or text
- Mobile-friendly static site without a database or runtime dependencies
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
- `doi` when available

The site defaults to date added, newest first, with optional sorting by publication date. Impact, clinical-area, article-type, date-added, and text filters can be combined.

### Dates added and returning visitors

`scripts/prepare-site.mjs` recovers each article's first repository commit from the full Git history and generates `data/article-metadata.js`. Do not substitute the publication date for the date added. Generated metadata is a deployment artifact, not a second editable article database.

The catch-up controls include the current Chicago calendar day and the previous 6 or 29 days. "Since your last visit" compares article IDs with the previous visit in the same browser. The baseline is retained across reloads within 30 minutes. The first visit establishes the baseline. If browser storage is unavailable, date filters continue to work.

Every article has an archive anchor at `/#<article-id>`. Direct summary links reveal filtered-out entries and expand their details. RSS links to these summaries and preserves the original item GUIDs. The primary publication remains linked from the summary and feed. "Copy citation" uses only recorded citation fields. "Report correction" opens a prefilled GitHub issue form; submission requires a GitHub account. Hyvor comments remain supported when a website ID is configured.

### Review and publication status

Preserve `window.ID_STATUS.lastReviewed` as the last successfully completed literature review in America/Chicago. Record `lastAttempt: {date, result}` with `result` equal to `success` or `failed`. A failed review must leave `lastReviewed` at its last successful value. Never advance a review date just because the website code changed.

The status panel reports the completed review date, the number of entries first committed on that date, and the next review on the existing every-other-day schedule. Its cadence is anchored to July 26, 2026. Do not change the schedule or editorial standards without the owner's instruction. A recorded failed review or an overdue review is shown separately from a successful review with no additions. The page also checks the public GitHub Actions status for a newer failed deployment; if that request is unavailable, the published status and overdue detection still work.

Commit accepted article changes, review status, and a fresh cache version for **every** local CSS and JavaScript reference in `index.html` together in one commit. Before publishing, run the preparation and validation commands below. The deployment stops on duplicate IDs, titles or DOIs, missing fields, invalid dates, stale metadata, missing assets, or unchanged cache URLs on a content/status commit. These checks do not replace verification against primary publications.

## Editorial standard

Use the article's actual first publication or online-publication date rather than a later print-issue date. Prefer guidelines, major reviews, diagnostic or treatment studies, and trials that change or materially clarify practice. Social media and curated feeds may be used for discovery, but each entry should be verified against the primary publication or issuing organization before inclusion.

## Local preview

From a full checkout containing the committed accepted entries, run:

```sh
node scripts/prepare-site.mjs
node scripts/validate-site.mjs
node --test scripts/ui-core.test.mjs
node scripts/generate-rss.mjs
```

Then open `index.html` directly, or serve the folder with a static HTTP server. All scripts use built-in Node modules. New accepted articles must be committed locally before preparation, so their dates added are based on actual history.

## GitHub Pages

The GitHub Actions workflow checks out the complete history, generates metadata, validates content and assets, runs the focused behavior checks, generates RSS, and deploys to GitHub Pages whenever `main` changes. No package installation is required. A failed validation leaves the previous deployment in place.
