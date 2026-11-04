# Chronic, opportunistic, and mycobacterial lecture review, 4 November 2026

## Status and scope

This is a partial clinical source audit and a record of verified corrections, not certification of any complete lecture. Clinical review dates were not advanced. The HIV and hepatitis lectures were read through all published prose, tables, cases, advanced material, questions, and print summaries. The entire NTM visible text has now also been read, including both dosing/TDM tables, cases, advanced sections, laboratory collection instructions, and the print rounds reference. A separate reviewer has completed full TB and antifungal reading and is documenting targeted source checks in `tb-antifungal-addendum.md`. None of the five modules has completed the requested claim-by-claim verification of every dose, adjustment, interaction, trial numerator, and source.

Repository instructions, the README, lecture-link protocol, clinical-teaching scope, and clinical-quality protocol were read. The lecture-link `--context` command was run before editing each changed lecture. No anchors, navigation, styles, or interactive behavior were changed. Catalog, link-review hashes, technical validation, and publication are coordinated by the integrating reviewer.

## Saved corrections

### HIV PrEP renal eligibility

Location: `HIV_Diagnosis_ART_Prevention_and_Opportunistic_Infections.html`, prevention section.

Original: “Oral PrEP requires renal eligibility and serial HIV testing; FTC/TDF generally needs eCrCl ≥60 mL/min and FTC/TAF ≥30.”

Replacement: “Oral PrEP requires renal eligibility and serial HIV testing. For initiation, CDC specifies Cockcroft–Gault estimated creatinine clearance (eCrCl) >60 mL/min for FTC/TDF and ≥30 mL/min for FTC/TAF; reassess kidney function during use.”

Source: [CDC Clinical Guidance for PrEP](https://www.cdc.gov/hivnexus/hcp/prep/index.html), updated 30 April 2026, Evaluation / Baseline assessments / Kidney function. Full official HTML section accessed 4 November 2026. The change identifies both the calculation and the CDC initiation threshold; it does not equate eGFR with Cockcroft–Gault clearance or alter treatment dosing. Independent peer review found that the same CDC page uses ≥60 in its later kidney-eligibility discussion. This is therefore an explicit attribution to the initiation section, not a claim that every ≥60 statement or the drug label is incorrect. Existing source link retained. Disposition: corrected, targeted verification complete; independent peer review completed against the official current source.

### HBV/HIV treatment must be complete suppressive ART

Location: `Viral_Hepatitis_B_and_C_Workup_Treatment_and_Follow-up.html`, tenofovir disoproxil fumarate table row.

Original: “Potent, high barrier; preferred when simultaneous HIV treatment is needed and has the longest pregnancy safety experience”.

Replacement: “Potent, high barrier; extensive pregnancy experience. In HIV/HBV coinfection, the usual regimen includes TDF or TAF with FTC or 3TC within fully suppressive ART, selected for renal, bone, and interaction risks”.

Source: [NIH Hepatitis B Virus/HIV Coinfection](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/coinfections-hepatitis-b-virus-hiv?view=full), updated 24 September 2026, Key Considerations / Recommended Therapy. Full official HTML sections accessed 4 November 2026. TAF or TDF selection depends on kidney/bone risk; the original wording could be read as preferring TDF over TAF simply because HIV is present. The revised example explicitly requires a complete suppressive HIV regimen. The source also permits selected tenofovir-only HBV coverage alongside an otherwise effective HIV regimen; this standard-regimen example does not prohibit that specialist option. Independent review specifically identified the islatravir/FTC-or-3TC contraindication, prompting “the usual regimen” wording to retain the exception. Direct primary citation added to the table cell. Disposition: corrected, targeted verification complete; independent peer review completed against the official current source.

### Consistent HCC surveillance after HCV cure

Location: `Viral_Hepatitis_B_and_C_Workup_Treatment_and_Follow-up.html`, post-treatment follow-up.

Original: “Cirrhosis remains cirrhosis after cure: continue ultrasound with or without AFP every 6 months and manage portal-hypertension risk.”

Replacement: “After HCV cure, patients with cirrhosis who remain candidates for HCC-directed treatment need continued surveillance. The AASLD HCC guidance recommends ultrasound plus AFP approximately every 6 months; use specialist-selected imaging when ultrasound quality is inadequate. Continue assessment of portal-hypertension risk.”

Source: [AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma](https://doi.org/10.1097/HEP.0000000000000466), 2023, surveillance-candidate, modality, and interval recommendations. The original primary article's indexed full-text recommendation passages were retrieved 4 November 2026; direct publisher access returned HTTP 402 and PMC returned a browser challenge. This initial access was section-level primary-text verification. The AASLD/IDSA [HCV monitoring guidance](https://www.hcvguidelines.org/guidance/monitoring-patients-who-are-starting-hcv-treatment-are-on-treatment-or-have-completed-therapy/) was also opened in full HTML. The HCV page retains “with or without AFP” language; the replacement explicitly attributes the choice to the dedicated AASLD HCC guidance and reconciles this lecture with its earlier HBV ultrasound-plus-AFP recommendation. Scope is surveillance candidates, not patients unable to benefit from HCC treatment. Existing HCC reference retained. Disposition: corrected attribution/qualification. Independent reviewer opened the full original 44-page article at the [Spanish liver society mirror](https://aeeh.es/wp-content/uploads/2026/04/HCC-AASLD-2023.pdf), reading page 7 guidance statements 7–11 and page 9 statement 12, and confirmed these recommendations. This resolves the direct-access limitation for these particular statements, without claiming every HCC recommendation was reviewed.

## Important recent statements checked and retained

| Lecture claim | Primary source and access | Disposition and limits |
| --- | --- | --- |
| DTG/3TC no longer has the former baseline RNA ceiling in the September 2026 NIH initial-ART recommendation | [NIH Initial Combination Antiretroviral Regimens](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/what-start-initial-combination-regimens?view=full), updated 24 September 2026, Table 6a. Full official HTML table reopened 4 November. | Retained. The exclusions for HBV coinfection, unknown HBV status, absent reverse-transcriptase genotype, and planned rapid initiation remain. Prior CAB PrEP requires the separate resistance pathway. This check does not independently validate the underlying DOLCE trial. |
| HBV cirrhosis treatment regardless of DNA or ALT | [AASLD/IDSA 2025 HBV guideline](https://doi.org/10.1097/HEP.0000000000001549), Figure 5 caption, primary indexed text accessed 4 November; direct publisher access HTTP 402. | Retained as the AASLD/IDSA recommendation. EASL 2025 uses a detectable-DNA qualification, so this should not be portrayed as unanimous across all guidelines. Complete new-guideline evidence tables not independently reviewed. |
| Rezafungin age at least 12 years, 400 mg IV first dose then 200 mg weekly, limited/no alternatives, safety beyond four weekly doses not established | [FDA REZZAYO label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/217417s007lbl.pdf), revised July 2026, sections 1, 2.1, 4–5. Full label PDF opened; relevant sections directly read and reopened 4 November. | Retained. The label still excludes established evidence for Candida endocarditis, osteomyelitis, or meningitis. Full antifungal module verification remains incomplete. |

## Remaining evidence gaps

| Lecture | Completed reading / source work | Not clinically verified in this pass |
| --- | --- | --- |
| HIV diagnosis, ART, prevention, OIs | Entire rendered-text content read. Targeted NIH initial ART, NIH HIV/HBV, CDC oral PrEP eligibility, and IDVYNSO label qualifications checked and independently reviewed. PCP and cryptococcal recommendation tables, selected prophylaxis rules, and ART timing checked as specified below. Additional toxoplasma/CMV/MAC/histoplasma treatment tables were accessed and read; their limited scope is recorded below. | Remaining ART/OI renal/hepatic adjustments, interactions, and contraindications; current lenacapavir label; IDVYNSO clinical-study details; all trial counts/effect estimates (START, A5164, COAT, REPRIEVE, PURPOSE 1/2, LATITUDE); remaining OI timing/stopping-rule and diagnostic claims outside the recorded checks; vaccine/pregnancy recommendations; current statin update; all references' actual supporting scope. |
| Hepatitis B/C | Entire rendered-text content read. NIH HIV/HBV regimen qualification, AASLD HCC recommendation passage, HCV monitoring source, and AASLD/IDSA HBV cirrhosis Figure 5 passage checked. | Full AASLD/IDSA 2025 evidence tables/algorithms; AGA 2025 reactivation Table 6 category-by-category (including CAR-T, checkpoint, JAK, IL-6 agents); prophylaxis duration; pregnancy prevention; antiviral dosing/renal adjustments; all simplified HCV/retreatment exclusions and SVR follow-up references; quantitative risk estimates. |
| NTM | Entire visible content read, including all tables, advanced sections, laboratory instructions, cases and print rounds reference. Guideline scope and selected pulmonary recommendations and current ALIS indication/safety directly checked. | Detailed drug-by-drug renal/hepatic/interaction adjustments and TDM sampling/targets, extrapulmonary durations, reference-laboratory current specimen instructions, original 2014/2024/2025/2026 trial counts/effect estimates and limitations remain unverified. The IDSA HTML links Table 3 rather than rendering the detailed dose table, so a dosing-source audit is still required. |
| Tuberculosis | Independent reviewer reports all visible content read; see separate TB/antifungal addendum for targeted corrections. | No comprehensive source verification by this reviewer. Drug-sensitive and resistant regimen eligibility, doses, durations, pediatric/pregnancy exclusions, renal/hepatic adjustments, HIV/rifamycin interactions, LTBI, monitoring, and trial results require full source audit. |
| Antifungals | Targeted rezafungin label check completed. Independent reviewer reports full visible content read; see separate addendum for additional source work. | No comprehensive source verification by this reviewer. Azole/echinocandin/polyene doses, organ adjustment, TDM thresholds, rare-fungal recommendations, source control, trial numerators/effect estimates, and pipeline statements require full source audit. |

## Verification and handoff

The unchanged DTG/3TC and rezafungin eligibility sources were reopened after the first review to check their exceptions. The antimicrobial reviewer independently reopened the official CDC, NIH, FDA ALIS label, and NTM guideline sources and the complete original AASLD HCC article through a liver-society mirror. The HIV/hepatitis/NTM changes were supported; CDC threshold attribution and the islatravir exception were explicitly considered. The late IDVYNSO paragraph received a separate completed independent label check. The final flucytosine cross-module reconciliation is recorded below. Technical tests and site deployment are recorded by the integrating reviewer. No missing row should be interpreted as a passed clinical claim.


## NTM saved corrections and scope

Source: [ATS/ERS/ESCMID/IDSA NTM pulmonary disease guideline](https://www.idsociety.org/practice-guideline/nontuberculous-mycobacterial-ntm-diseases/), 6 July 2020, current listing accessed 4 November 2026, Executive Summary and recommendations V–IX, XIX–XXI. Official full HTML accessed. Detailed dosing Table 3 is linked externally and was not comprehensively checked in this pass. The guideline supports the existing distinction between daily severe/cavitary and intermittent selected noncavitary MAC treatment, multidrug therapy, and the post-conversion duration endpoint. No all-regimen endorsement is inferred.

Original scope sentence: “The main focus is pulmonary disease in adults. Skin, bone, joint, device and disseminated infections require different specimens, source control and treatment endpoints.”

Replacement: “The main pulmonary recommendations follow the 2020 multisociety guideline for adults without HIV or cystic fibrosis. HIV-associated and CF-associated NTM require their own guidance and specialist assessment. Skin, bone, joint, device and disseminated infections require different specimens, source control and treatment endpoints.”

Disposition: brings the guideline exclusions to the treatment framework rather than leaving them only in the reference list. HIV-specific cross-links and extrapulmonary teaching retained.

Source for the following changes: [FDA ARIKAYCE label, 2026 supplement 25](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/207356s025lbl.pdf), sections 1, 2, 4, 5.1 and 5.5; full PDF accessed and relevant sections directly read 4 November 2026, then reopened for the safety exceptions. Label still carries accelerated-approval/limited-population wording; it does not establish broad nonrefractory MAC or M. abscessus use.

Original ALIS treatment cell: “ALIS 590 mg inhaled once daily is an add-on for refractory disease, not a replacement for companion drugs. Use its dedicated nebulizer system; it is not interchangeable with nebulized IV amikacin.”

Replacement: “ALIS 590 mg inhaled once daily is an add-on for refractory MAC in adults with limited or no alternatives after at least 6 consecutive months of multidrug treatment. Continue active companion drugs. Use the dedicated Lamira nebulizer; ALIS is not interchangeable with nebulized IV amikacin.”

Original inhaled amikacin toxicity sentence: “Inhaled treatment can cause dysphonia, cough, bronchospasm or hemoptysis.”

Replacement: “Inhaled treatment can cause dysphonia, cough, bronchospasm or hemoptysis. ALIS also carries a boxed warning for serious respiratory reactions, including hypersensitivity pneumonitis and exacerbation of underlying lung disease.”

Original amikacin response-cell ending: “New tinnitus or imbalance needs prompt assessment even when creatinine is normal.”

Replacement: “New tinnitus or imbalance needs prompt assessment even when creatinine is normal. Discontinue ALIS and assess promptly if hypersensitivity pneumonitis or anaphylaxis occurs; evaluate new respiratory deterioration before attributing it to NTM progression.”

Disposition: corrected missing indication and major toxicity qualifications without removing dose or practical regimen teaching. Existing FDA source retained. Independent peer review completed against the full FDA label sections and official guideline scope. The shared file diff passed `git diff --check`; clinical conclusions are limited to the identified claims.


## Independent review of antimicrobial-group changes

This reviewer inspected the actual visible-text diff for the antibiotic primer, AMR, gram-negative primer, OPAT, and penicillin allergy modules, including the late OVIVA case/summary changes. Primary sources were independently reopened on 4 November 2026. This pass supports the specific saved corrections, not the full clinical verification of those five lectures.

| Change | Independently checked source section | Result |
| --- | --- | --- |
| Narrow oral fosfomycin cUTI transition and no extension to ESBL bacteremia | [IDSA 2026 AMR guidance](https://www.idsociety.org/practice-guideline/amr-guidance/), Q1.2 and Q1.3 full HTML rationale | Supported. E. coli, lack of other oral options, initial treatment/improvement, and separate bloodstream exposure boundary retained. The existing 2026 trial percentages remain outside this verification. |
| Selected ceftriaxone completion for nonsevere improving source-controlled AmpC infection after empiric initiation | Same primary guidance, Q2.4 suggested approach, full HTML | Supported. No new severe/invasive default recommended. |
| Specialist-selected inhaled treatment exception for DTR Pseudomonas pneumonia | Same primary guidance, Q4.7 full rationale | Supported. No active newer beta-lactam plus suboptimal systemic response; absent demonstrated survival benefit and toxicity remain. Reviewer alerted author that ledger Q4.9 numbering was incorrect; current section is Q4.7. |
| Daptomycin suspected eosinophilic pneumonia action in primer and OPAT | [CUBICIN full prescribing information](https://www.merck.com/product/usa/pi_circulars/c/cubicin/cubicin_pi.pdf), section 5.3, full PDF | Supported. Immediate cessation and systemic-steroid recommendation read directly; typical 2–4-week onset is not used as a required threshold. |
| Direct challenge prerequisites and severe delayed exclusions | [CDC Clinical Features of Penicillin Allergy](https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html), updated 25 August 2025, full HTML | Supported. Observed standardized low-risk pathway and rescue capacity; severe delayed organ/blood-cell injuries excluded. |
| Carbapenem recommendation excludes severe delayed/organ-involved histories | [Original final 2022 JACI practice parameter, institutional mirror](https://health.ucdavis.edu/media-resources/antibiotic-stewardship/documents/pdfs/guidelines/drug-allergy-aaaai-2022.pdf), displayed PDF page 28 carbapenem paragraph and page 26 figure note (zero-based tool pages 27 and 25) | Supported in the actual primary text, not only an inference from CDC. Entire paper was accessible; the relevant sections were read, not every matrix/trial elsewhere in the paper. |
| OVIVA one-year failure endpoint and preceding-month S. aureus bacteremia/endocarditis exclusion | [Original OVIVA protocol](https://link.springer.com/article/10.1186/s13063-015-1098-y), full HTML Methods / Exclusion criteria; primary report indexed abstracts | Supported. Direct protocol full text confirms exclusion window and route-vs-outcome timing. Counts 67/509 oral and 74/506 IV match the primary NEJM Oxford indexed abstract and original NIHR report abstract. This reviewer encountered direct PMC challenge and Oxford HTTP 403; the integrating reviewer separately accessed the original full results. No independent complete-case/subgroup reanalysis claimed. |

No new changes to those other reviewers' lecture files were made during this independent pass. The gram-negative CSS wrapping change was nonclinical; browser verification belongs to the integrating reviewer.


## Additional HIV source checks and label qualification

The [IDVYNSO prescribing information](https://www.merck.com/product/usa/pi_circulars/i/idvynso/idvynso_pi.pdf), revised April 2026, was opened in full and sections 1–2, 4, 5.1, 8.6–8.8 were read directly on 4 November. These support the existing approval and dose statement but identify missing restrictions relevant to the exact regimen example. The label sections on renal/hepatic impairment and rifabutin adjustment were reopened for the exception-focused check. Trial 051/052 complete methods/results were not audited.

Original: “Doravirine/islatravir (Idvynso), approved in April 2026, is a once-daily 100/0.25 mg two-drug switch regimen for suppressed adults on stable ART without prior virologic treatment failure or known doravirine resistance substitutions. It is not a rapid-start regimen. Strong CYP3A inducers and concomitant 3TC/FTC are contraindicated; it does not provide an HBV treatment backbone.”

Replacement: “Doravirine/islatravir (Idvynso), approved in April 2026, is a 100/0.25 mg tablet taken orally once daily with or without food to replace stable ART in adults with HIV RNA <50 copies/mL, no prior virologic treatment failure, and no known doravirine resistance substitutions. It is not a rapid-start regimen. The label does not recommend it with eGFR <30 mL/min/1.73 m² or Child-Pugh C hepatic impairment; dialysis has not been studied. Strong CYP3A inducers and concomitant 3TC/FTC are contraindicated. With rifabutin, the label requires an additional doravirine 100 mg dose approximately 12 hours after Idvynso, not a second Idvynso tablet. It does not provide HBV treatment; preserve separate HBV-active therapy when indicated.”

Disposition: saved label qualification; separate independent review completed against the full April 2026 label, sections 1, 2.1, 2.2, 4, and 8.6–8.8. The reviewer read the actual saved paragraph and confirmed every added qualification. NIH HBV/HIV guidance supplies the preservation-of-HBV-treatment principle and the islatravir-compatible options. Existing label citation retained.

The [NIH PCP guideline](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis), updated 27 May 2026, was read in official full HTML in the primary/secondary prophylaxis and treating-disease recommendation tables. The lecture's TMP-based 15–20 mg/kg/day treatment, IV 6–8-hour division for moderate/severe disease, oral transition after improvement, 21-day duration, room-air PaO2/A–a steroid thresholds, prednisone schedule, ART within two weeks, immediate secondary prophylaxis and CD4/viral-load stopping/restart distinctions agree. Its special lifelong secondary-prophylaxis caution after PCP above CD4 200 on ART is present. Renal-dose subdivisions, all adverse-event management, and the original trials remain unaudited. No PCP regimen change was made.

The [NIH cryptococcosis guideline](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cryptococcosis), updated 29 October 2024 and reviewed 16 March 2026, was read in official full HTML for induction/consolidation/maintenance, ART timing, CrAg screening and pressure-management sections. The lecture agrees with the US induction example, culture-directed consolidation, lower fluconazole consolidation dose only after stability/sterile CSF/ART, maintenance cessation after at least one year of antifungal treatment plus immune/virologic criteria, and usual 4–6-week CNS ART delay. The conditional nuance of early ART in selected high-resource cases does not invalidate the qualified standard teaching. These checks verify the guideline summaries, not the underlying randomized-trial estimates or individualized renal dosing. No crypto regimen change was made.

The direct NIH statin page returned HTTP 403 on this pass; its current 2026 age-based claim remains outside verified coverage. It was not silently deleted or marked checked.

### Additional OI source access completed before publication

The following official NIH pages were accessed in full HTML on 4 November 2026 and their indicated recommendation tables were read. This preserves the completed source work without claiming a finished comparison of every surrounding diagnostic, ART-timing, adjustment, or original-trial statement. No additional lecture revision arose from these table reads.

| Source and version | Sections actually read | Limits |
| --- | --- | --- |
| [Toxoplasma gondii Encephalitis](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis), updated 9 September 2025, reviewed 23 June 2026 | Primary prophylaxis, treatment and chronic-maintenance recommendation tables. Read weight-dependent pyrimethamine/sulfadiazine plus leucovorin and TMP-SMX examples, minimum treatment duration, maintenance and stopping criteria. | ART timing, the diagnostic response checkpoint, detailed organ adjustments, adverse-event management, and original comparative studies were not fully source-matched. |
| [Cytomegalovirus Disease](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus), updated 14 July 2025, reviewed 16 March 2026 | Retinitis induction/maintenance, sight-threatening disease, stopping/restarting maintenance, and gastrointestinal disease treatment tables. Read valganciclovir/ganciclovir examples and the distinct retinitis and GI durations. | Diagnostic accuracy, ART timing, renal-dose schedules, CNS treatment, and underlying trials were not comprehensively checked. |
| [Disseminated MAC](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/disseminated), updated 27 May 2026 | Primary-prophylaxis eligibility and treatment examples. Read immediate-ART exception, exclusion of active MAC before prophylaxis, macrolide/ethambutol regimen and conditional third-drug rationale. | Detailed ART/rifabutin interactions, all maintenance stopping/restart rules and underlying trials remain outside completed verification. |
| [Histoplasmosis](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/histoplasmosis), updated 29 October 2024, reviewed 16 March 2026 | Primary prophylaxis and treating-disease tables, including severe versus mild/moderate disseminated disease, itraconazole loading/maintenance and level interpretation, and long-term suppression stopping criteria. | ART timing, comprehensive formulation/interaction review, all special-population dosing and the original trial findings remain outside completed verification. |

### Final flucytosine contraindication reconciliation

Location: `HIV_Diagnosis_ART_Prevention_and_Opportunistic_Infections.html`, `#crypto`, directly after the flucytosine dose and renal/TDM precautions.

Original sentence transition: “with renal adjustment and drug-level monitoring for flucytosine. Follow CBC, renal function, potassium, and magnesium.”

Replacement sentence transition: “with renal adjustment and drug-level monitoring for flucytosine. Flucytosine is contraindicated in known complete dihydropyrimidine dehydrogenase (DPD) deficiency (current prescribing information). Follow CBC, renal function, potassium, and magnesium.”

The parenthetical links directly to the [Lupin flucytosine prescribing information on DailyMed](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5721b46a-4a9f-46c2-8804-a9bad4d5f80a), updated 26 August 2025. Full official HTML was opened and the Contraindications and Warnings sections were read directly on 4 November 2026. The label identifies known complete DPD deficiency as a contraindication and explains fluorouracil-mediated toxicity. The added statement does not recommend universal screening or delaying treatment pending screening. Existing nearby antifungal `#ampho` and `#tdm` cross-links were retained. All other flucytosine mentions, including the single-dose amphotericin discussion and print summary, were inspected; they do not give a conflicting contraindication or screening instruction.

Disposition: saved with the integrating reviewer's explicit approval for the final cross-module safety reconciliation. The integrating reviewer independently reopened the exact label, read the Contraindications section, and verified the actual saved sentence. Second verification passed. This agrees with the independently reviewed antifungal-module warning. Lecture content is frozen for final technical validation and publication; no whole-module clinical review date was advanced.
