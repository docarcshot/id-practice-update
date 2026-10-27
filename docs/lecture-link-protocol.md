# Lecture cross-link maintenance protocol

Effective October 27, 2026. Applies to every new, revised, renamed, split, or retired lecture in this repository. This is a navigation and editorial review, not a certification of clinical accuracy.

## Before editing

1. Read the current catalog and the module being changed. For a new lecture, scan all catalog titles and descriptions to identify related modules. Read the relevant sections, not every lecture in full.
2. For an existing lecture, run `node scripts/lecture-links.mjs --context lectures/FILENAME.html`. This lists its incoming and outgoing links, its current content hash, and the catalog of modules. Existing links alone are not a complete list of potential relationships.
3. Identify sections whose scope, recommendations, audience, or location will change. Check likely companion modules, especially antimicrobial selection, resistance, allergy, monitoring, OPAT, diagnostic interpretation, and the relevant disease-specific treatment modules.

## New lectures

1. Add contextual links from the new lecture to relevant existing sections.
2. Review the relevant older modules for useful links back to the new lecture. Add them beside the applicable discussion. Do not add reciprocal links merely for symmetry.
3. Use descriptive link text that accurately states what the destination covers. Prefer a specific section over the top of a long lecture. Do not send a resident to advanced treatment detail without making the scope clear.
4. Link only to published modules, or modules included in the same release. Do not publish promises such as “planned lecture,” “future module,” or “coming soon.”
5. Add the module to the catalog and complete its review record. Update review records for older modules edited in the same release.

## Existing lectures

1. Check each incoming link against the revised destination. A technically valid anchor can still lead to the wrong discussion. Update the referring text or destination when the scope changes.
2. Check outgoing links for clinical relevance, audience, and placement. Review newly relevant catalog entries even if they have no existing link relationship.
3. Keep section IDs stable when changing headings or moving sections. If an ID must change, retain the old ID as a compatibility anchor immediately beside the equivalent content, for example `<span id="old-section-id"></span>`. Do not put every obsolete anchor at the page top.
4. If a section is removed without equivalent content, revise incoming links and explain the removal at the old anchor. If a lecture is renamed or split, preserve the old URL and section anchors in a short compatibility page pointing to the relevant replacement sections.
5. For a purely typographic change, verify that headings, anchors, scope, and link labels are unaffected. Record that limited review; a full clinical reread of companion modules is unnecessary.
6. Keep clinical review dates separate from navigation maintenance dates. Adding links alone does not establish a new clinical review.

## Required review record

Maintain `data/lecture-link-reviews.json`. Each module has a record containing its exact SHA-256, review date, related modules actually reviewed, confirmation of incoming/outgoing link and catalog review, and a specific note describing the decision. The record is required even when no link changes are needed; explain why. Do not mark checks complete without performing them.

After the review and final edit, use `node scripts/lecture-links.mjs --context lectures/FILENAME.html` to obtain the content hash and enter it in the record. Updating the hash is the final documentation step, not a substitute for editorial review. If a related module is edited, review and record that module too.

The initial records document the October 27 cross-link review of all 17 modules and the subsequent removal of future-lecture wording. They do not claim faculty review or a new clinical evidence review.

## Before publication

Run the repository preparation and validation commands, then the dedicated checks:

```sh
node scripts/prepare-site.mjs
node scripts/validate-site.mjs
node --test scripts/ui-core.test.mjs
node scripts/lecture-links.mjs
node --test scripts/lecture-links.test.mjs
node scripts/generate-rss.mjs
```

The deployment workflow runs these checks before uploading the site. A failure prevents deployment and leaves the prior published version available. The lecture checks reject missing local destinations, missing fragment targets, duplicate IDs, removed page URLs or section anchors, and absent or stale review records. External source availability is outside this validator's scope.

Check changed links in a browser at desktop and mobile widths. Confirm that the destination is visible, advanced sections are reachable, link labels fit, and print output remains usable. If browser testing is unavailable, report that limitation rather than claiming it passed.

After publication, verify the changed pages and representative new links on the live site. Record the review decisions in the manifest and report any unresolved limitation.

## What automation cannot establish

The checks can require an up-to-date review record, but cannot establish whether the editorial review was thoughtful or whether a link is medically appropriate. The author remains responsible for the meaning of the link and the clinical claims at both ends. A successful link check is not clinical validation.
