# Technical validation and publication record

November 4, 2026. Clinical verification status is defined in the [review report](README.md), not by these checks.

## Repository and release scope

The working tree was clean at baseline commit `6dee93669573b1ab5f90e621a5b0938fad53a46c`. A fresh fetch before release confirmed that `origin/main` still matched that baseline. The release changes the 19 existing lecture HTML files, their catalog, the exact-content link-review manifest and review documentation. No unrelated article data, shared application scripts, shared styles or deployment configuration were changed.

Existing lecture URLs and section IDs were preserved. All catalog HTML downloads remain. The baseline repository contained no active lecture PowerPoint or presentation files; the earlier retirement was not reversed. The homepage article/status data and local CSS/JavaScript references did not change, so the README's article/status cache-version requirement did not apply to this self-contained lecture correction release.

## Required commands

All six README commands completed with exit code 0 on the final lecture content and review manifest.

| Command | Observed result |
|---|---|
| `node scripts/prepare-site.mjs` | Prepared dates for 78 entries; 2 on the latest review date. |
| `node scripts/validate-site.mjs` | Validated 78 entries, unique IDs/titles/DOIs, review status, publication metadata and versioned assets. |
| `node --test scripts/ui-core.test.mjs` | 8 passed, 0 failed, 0 skipped. |
| `node scripts/lecture-links.mjs` | Passed destinations, fragments, anchor compatibility and exact-content review records for all 19 modules. |
| `node --test scripts/lecture-links.test.mjs` | 5 passed, 0 failed, 0 skipped. |
| `node scripts/generate-rss.mjs` | Generated 30 summaries with stable item IDs. |

`git diff --check` also passed. Preparation/RSS generation produced no unrelated tracked changes. Each module's final `--context` output was obtained before saving its SHA-256 and specific review note. The manifest records navigation/editorial review separately from complete clinical verification.

## Independent link and clinical regression checks

A separate reviewer checked 118 distinct labeled companion links across all 19 lectures and all 19 catalog fellow-section destinations. No target/scope mismatch was found. A separate static resolution pass over 1,427 local links in the lecture pages, catalog and site home found no missing file or HTML fragment.

The final independent clinical regression pass read the saved clinical diff across all 19 lectures and checked surrounding AmpC, fosfomycin, OVIVA, source-control and flucytosine statements. No new dose, unit, route, frequency or cross-module conflict was identified in the changed claims. This does not complete the sixteen documented partial source audits.

## Browser and print checks

Headless Chromium 153 with Playwright exercised the 19 lectures and catalog at 1440 by 1000 desktop and 390 by 844 mobile viewports. All 20 pages completed without a JavaScript page error, missing image, document-level horizontal overflow or uncontained overflowing table. Each showed one educational notice on desktop, mobile and print. Existing intentional horizontally scrolling navigation/table containers were preserved.

The catalog retained 19 modules, all seven topic filters, its five short modules, empty-search state and reset behavior. Browser checks exercised available expandable sections, in-page navigation and all 37 print controls. The tick-borne atlases passed all 24 infection-layer selections, place-list independence, zoom and fit behavior. A test-script assumption of four short modules was corrected to include H. pylori; reset verification was changed to await the existing asynchronous reset. These were test corrections, not website defects.

All 20 full-print PDFs were generated, totaling 364 pages. Text/bounds checks found no blank page, text outside the paper, duplicate educational notice or printed skip-navigation artifact. Selected first, last, dosing/table and advanced-section pages were visually inspected, including 65 pages in the initial print pass and the corrected catalog/OPAT examples in the final pass. This was selected-page visual inspection, not visual inspection of every one of the 364 pages. Desktop/mobile screenshots of the catalog and lecture templates were also inspected. Clinical text, color highlighting and full advanced content remained available.

## Deployment

Deployment has not yet been verified at the time of this validation commit. Record the exact release commit, successful GitHub Actions run and live-site checks here after publication. A queued workflow or a successful prior deployment is not evidence that this release is live.
