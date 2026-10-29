# Teaching presentations

Every module has a browser slide presentation and an editable PowerPoint in `lectures/presentations/`. Click or tap the unmarked 28 by 28 pixel area in the extreme upper-left corner of a lecture. The viewer opens resident teaching directly and includes advanced teaching, the complete deck, references, speaker notes, a section selector, full screen, and PowerPoint download. Arrow keys, Page Up/Down and swipes navigate. F toggles full screen; N toggles notes.

This is an unlisted link, not access control. Files and source are public. A known URL can be shared. The viewer requests no indexing, and the corner link appears only on keyboard focus for accessibility. Do not include private institutional sources in these presentations.

## Source and maintenance

Lecture HTML remains the clinical source of truth. The converter preserves source wording, doses, units, caveats, cases, table cells, labels, figures and public references. Dense tables are split into readable slides. Complete source sections are retained in speaker notes. Resident, advanced and reference material remain distinct. The full deck can be substantially longer than a teaching session; select the relevant sections. This format conversion is not a new clinical evidence review and must not advance clinical review dates.

For each new lecture, add `<script src="presentation-entry.js" defer></script>` before `</body>`, add its catalog entry, and follow the cross-link protocol. Every new or changed module requires current browser slides and a matching PowerPoint in the same release. Never update hashes alone to conceal a stale export. Scheduled clinical reviews retain the owner's approval requirement.

## Build and verify

Use the Codex presentation runtime with Beautiful Soup 4.14.3 available to Python. If needed install the parser in a private build directory, not into the runtime:

```sh
"$CODEX_PRIMARY_RUNTIME_PYTHON" -m pip install --target .presentation-build/python beautifulsoup4==4.14.3
PYTHONPATH=.presentation-build/python "$CODEX_PRIMARY_RUNTIME_PYTHON" scripts/prepare-presentations.py
"$CODEX_PRIMARY_RUNTIME_NODE" scripts/build-presentation.mjs MODULE_BASENAME
node scripts/validate-presentations.mjs
python scripts/validate-presentation-content.py
```

Build each changed or new module. The builder uses the bundled Artifact Tool, exports editable tables and text, renders every slide, and validates package integrity, font use, slide count, table ownership and geometry. It rejects source changes during export. Keep previews and validation reports in `.presentation-build/`, outside the deployed site. Save intermediate source changes to a nonproduction branch before lengthy exports, then save completed decks there as they finish.

Inspect slide order, text fit, figures, dose/qualifier preservation, speaker notes and resident/fellow separation. Verify the corner link, keyboard navigation, full screen, notes, download and return link in a browser. Run the existing repository validation commands too. These checks do not certify clinical accuracy.

GitHub Actions validates committed artifacts without the private authoring runtime. It checks every catalog module, source hashes, model hashes, the actual PowerPoint bytes, projected text, table cells, complete speaker notes and slide counts. Missing or stale presentations block deployment. The author must rebuild affected outputs after changes to conversion or rendering code.
