# Publication restrictions

## Proprietary source exclusion

At the owner's request on October 31, 2026, do not use proprietary clinical reference services as sources for lecture creation, verification, revision, or publication, including through the owner's login or uploaded PDFs. Do not copy, closely paraphrase, redraw, translate, embed, or adapt its text, tables, figures, algorithms, screenshots, or distinctive teaching structure. This applies to separate drafts as well as published modules.

Use independently retrieved issuing-organization guidance, regulatory labeling, and original studies. Write the teaching text and tables independently. A replacement citation alone does not establish independent authorship or remove copied expression. When previous reliance on a proprietary clinical reference is known or suspected, independently verify the affected claims and reconstruct the affected passage from the permitted sources; omit material that cannot be independently supported. Preserve necessary clinical qualifications.

For source-origin reviews, inspect text, references, links, figures, embedded assets, tables, and available provenance. Distinguish "no identifiable proprietary source material found" from a complete authorship or rights clearance. A keyword scan cannot establish the origin of every sentence. Do not delete the owner's uploaded source files unless explicitly requested.

Do not publish internal WashU or BJC documents, institutional consensus documents, screenshots, tables, or reproduced passages from them. Do not upload or embed Google Drive board-preparation materials, commercial course files, slide decks, question banks, or their copied text or figures. Access to a private file is not authorization to redistribute it.

Public teaching modules must use original wording and public guideline, journal, or regulatory sources. Check every added file, attachment, embed, and link before publication. Keep private source materials out of the repository, build output, and deployment artifacts.

Clinical teaching may remain consistent with the user's stated local practice. This does not authorize attaching, linking, naming, or reproducing the internal source document. Preserve explicitly requested clinical alignment while removing private document references.

# Lecture links and section compatibility

For every new or revised lecture, follow `docs/lecture-link-protocol.md`. Review relevant existing modules for incoming and outgoing links, including potential relationships not yet linked. Preserve existing URLs and section IDs or provide meaningful compatibility targets. Do not publish planned/future-lecture placeholders. Complete the per-module editorial record in `data/lecture-link-reviews.json` after the review. Never refresh hashes as a substitute for checking link relevance. Run the lecture link validator and its tests before publishing; report unavailable browser checks honestly.

# Clinical verification and release

For every new lecture, clinical revision, separate draft, or approved correction, follow `docs/lecture-clinical-quality-protocol.md`. Keep a claim-level evidence record for consequential statements, reopen primary sources during a separate exception-focused review, reconcile tables/cases/print summaries and companion modules, and verify the result for each exact saved target/version before reporting completion. Source lists, another AI pass, file hashes and a successful deployment are not clinical validation. Do not report intended draft writes as completed saves. These requirements also apply outside scheduled reviews and do not change the approval boundary below.

# Periodic lecture evidence review

## Teaching presentations

The owner retired the generated presentations on October 31, 2026. Do not add hidden presentation links or automatically generate slides or PowerPoints for new or revised modules. Future presentations require a separate request and teaching design.

## Scheduled review

Review the complete current lecture catalog every three weeks. This is separate from the literature-digest update workflow. Include newly published lectures automatically by reading the current catalog at each review, rather than using a fixed module list.

## Review scope and sources

Read the current published module content and record the repository revision and review date. Check the clinical pathways, diagnostic performance and limitations, treatment indications, doses, routes, durations, organ-function adjustments, contraindications, interactions, monitoring, resistance interpretation, special populations, and follow-up. Examine tables, cases, answers, captions and printable summaries, not just the main prose. Check agreement between related modules and the relevance of cross-links.

Use current public issuing-society guidelines, regulatory labels and safety communications, and original studies. Recheck existing consequential claims as well as searching for evidence published since the previous completed review. Distinguish a new recommendation from preliminary, observational, conflicting or practice-informing evidence. Do not automatically change teaching because a new paper exists. Verify publication dates, corrections and retractions when relevant. Do not use proprietary or unpublished materials for public revisions.

## Required approval report

Return a concise report to the owner in ChatGPT before making any changes. For each proposed revision provide the module and section, current wording or claim, exact proposed replacement, reason, primary-source links and publication dates, evidence limitations, and affected companion modules. Separate potential patient-safety errors, guideline or regulatory changes, and optional teaching improvements.

Account for every module using one of these statuses: reviewed with no change identified; proposed revision; verification incomplete. State which sections or sources could not be checked and why. Never claim that all data are correct, that inaccessible evidence was verified, or that the whole catalog was reviewed when coverage is incomplete. Urgent findings must be highlighted in the report, but do not bypass owner approval.

## Approval boundary

Scheduled reviews are read-only for the website and repository. Do not edit lecture files, update public clinical review dates, refresh link-review hashes, commit, merge, deploy, or open a public pull request containing proposed clinical revisions during the scheduled review. Present the proposed edits in the private review response and wait for the owner's explicit approval of those changes. Approval of a previous review, general site maintenance, or the literature-digest automation is not standing approval for later clinical revisions. Silence is not approval.

Track pending, approved, rejected and deferred proposals in the review conversation. Carry unresolved proposals forward without repeatedly presenting them as new discoveries. After approval, re-read the current files to avoid overwriting concurrent changes, apply only approved revisions, follow the cross-link protocol, run applicable checks, and verify publication. Update clinical review dates only for content actually reviewed. If approval is partial, leave the remaining proposals pending.
