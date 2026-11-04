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

Headless Chromium 153 with Playwright exercised the 19 lectures and catalog at 1440 by 1000 desktop and 390 by 844 mobile viewports. All 20 pages completed without a JavaScript page error, missing image or document-level horizontal overflow. Each showed one educational notice on desktop, mobile and print. Existing intentional horizontally scrolling navigation/table containers were preserved. A later table-specific check found clipped hepatitis columns that the document-level overflow check had not detected; the correction is documented below.

The catalog retained 19 modules, all seven topic filters, its five short modules, empty-search state and reset behavior. Browser checks exercised available expandable sections, in-page navigation and all 37 print controls. The tick-borne atlases passed all 24 infection-layer selections, place-list independence, zoom and fit behavior. A test-script assumption of four short modules was corrected to include H. pylori; reset verification was changed to await the existing asynchronous reset. These were test corrections, not website defects.

All 20 full-print PDFs were generated, totaling 364 pages. Text/bounds checks found no blank page, text outside the paper, duplicate educational notice or printed skip-navigation artifact. Selected first, last, dosing/table and advanced-section pages were visually inspected, including 65 pages in the initial print pass and the corrected catalog/OPAT examples in the final pass. This was selected-page visual inspection, not visual inspection of every one of the 364 pages. Desktop/mobile screenshots of the catalog and lecture templates were also inspected. Clinical text, color highlighting and full advanced content remained available.

## Deployment

The first content release was published as [`8e6f6b1b7c22e35057f8b2426fa7834992520e59`](https://github.com/docarcshot/id-practice-update/commit/8e6f6b1b7c22e35057f8b2426fa7834992520e59). [GitHub Actions run 41858687434](https://github.com/docarcshot/id-practice-update/actions/runs/41858687434) completed successfully at 15:32 UTC on November 4, 2026. All preparation, validation, test, artifact-upload and Pages deployment steps succeeded for that exact commit.

The command-line push could not authenticate in this environment. Publication used the connected GitHub account instead, with a compare-and-swap check against the unchanged baseline. Every uploaded blob matched the local Git blob SHA, and the complete remote tree matched the validated local tree `fbe4964c8078dc8739d66a37044bcbf525a86f47`. This produced a different commit identity with identical tested content; local history was aligned only after tree equality and a clean worktree were confirmed.

All 19 live lecture HTML files and the catalog returned HTTP 200 and matched the validated files byte for byte. Their live SHA-256 values matched the content-review manifest; the catalog SHA-256 was `457572b2c4b60d4f818a5e9dad481e3e774fb37b5711ca11155b8adbc51f7875`. Live browser inspection confirmed the revised notice, working catalog search, OPAT's completed-scope status and HTML download, the updated daptomycin warning, and the OPAT companion link opening the antibiotic primer at `#route`. The full 19-lecture desktop/mobile/print checks described above apply to these identical published bytes.

This records the verified first correction batch. Any subsequent clinical completion work requires its own content hashes, tests and deployment check.

## Second correction batch

The next batch completes the clinical source review of the penicillin-allergy and viral-hepatitis lectures, including independent second reviews, and makes independently checked corrections in the antibiotic primer, HIV, H. pylori, Lyme and recurrent-UTI lectures. Five of nineteen lectures now pass within their published teaching scope; fourteen remain partial. The clinical ledgers identify the sources, corrected claims and remaining gaps. The catalog and teaching-scope document use the same status counts. Clinical review dates advanced only for the two newly completed modules.

All six required commands above were repeated after the final HTML and content hashes were saved. They passed with the same entry, module, test and RSS counts. Preparation and RSS generation again produced no unrelated tracked changes. All seven changed lectures' incoming and outgoing link contexts were read, and a separate reviewer checked their companion-link meaning and the 21 corresponding catalog actions. No target/scope mismatch or new cross-module contradiction was found in the changed claims.

The seven changed lectures and catalog were exercised again at desktop and mobile sizes and in print. The retained full-site report contains twenty passing pages, with no JavaScript errors, missing images or document-level horizontal overflow. Catalog search, seven topic filters, five short modules, reset, expandable content, anchor navigation and print controls remained functional. Existing section IDs were retained.

The focused table check found that hepatitis tables could exceed their mobile card width while the card's hidden overflow concealed the last columns. This defect was also present in the first release. All nine tables now have labeled, keyboard-focusable horizontal scrolling containers. Seven require scrolling at 390 pixels; keyboard right-arrow interaction reached the last column in each. The two narrower tables fit their containers. An extracted-text comparison confirmed that this layout correction changed no clinical text. Table colors remain, and print styles restore visible overflow.

Eight new full-print PDFs contain 141 pages. Text/bounds checks found no empty pages or text outside the paper. Thirty-one selected pages were visually inspected, including the allergy side-chain matrix and evidence details, the new HSV and HBV drug sections, H. pylori salvage examples, Lyme diagnostic qualifications, recurrent-UTI prevention tables and the catalog. This was selected-page inspection, not a claim to have visually inspected every printed page. A few existing page breaks leave short footer or heading fragments; no clinical content was hidden in the inspected output.

The second batch's deployment record will be appended after publication and exact-byte live verification.
