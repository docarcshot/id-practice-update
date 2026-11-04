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


## Hepatitis B/C continuation after published batch 8e6f6b1

Review performed 4 November 2026. This continuation supersedes the hepatitis-only source gaps listed in the first batch above. It does not change the documented incomplete coverage of HIV, NTM, TB, or antifungals. Only the hepatitis lecture and this ledger were edited by this reviewer. Catalog, clinical-review dates, shared assets, hashes, commits, and publication are owned by the integrating reviewer.

### Scope and clinical disposition

The entire published hepatitis module was read again, including every serology/risk/drug/follow-up table, all four cases, the advanced fellow section, and references. The pre-edit module contained approximately 4,090 visible words. It has no separate hidden quiz or separately authored print sheet; printing uses the same lecture content. The actionable recommendations were compared against the issuing guidance and prescribing information listed below, rather than inferred from prior review dates. No unqualified whole-source clinical pass is claimed: original full-text access remains incomplete for the narrowly framed background explanation of concurrent HBsAg/anti-HBs, and several internal inconsistencies in the final AASLD guideline are explicitly documented.

| Published scope | Completed source comparison and result |
| --- | --- |
| Objectives, triple-panel interpretation, acute/chronic distinction, isolated core antibody, discordant tests | CDC 2023 actual interpretation table and explanatory text, AASLD 2018 serology sections, and current AASLD phase definitions. Vaccine-history/passive-antibody qualification added. CDC's same-assay repeat for low-risk isolated anti-HBc retained. Full-text limits for coexistence mechanism papers are recorded separately. |
| HBV baseline workup, HDV screening, prevention, fibrosis/HCC assessment | CDC baseline/prevention sections; EASL 2025 HDV testing recommendations; AASLD 2025 final Core Concepts and Table 4; original AASLD HCC surveillance statements. Society differences and treatment-candidate restrictions preserved. PAGE-B validation population and active versus past HDV infection clarified. |
| HBV treatment eligibility, acute severe disease, pregnancy, HIV, drug selection and safety | Current AASLD 2025 final recommendations and 2018 sections not replaced; CDC perinatal instructions; NIH HBV/HIV; full current entecavir, TAF, TDF and peginterferon labels. Relevant routes, food requirements, organ adjustments, interactions, contraindications, monitoring, and off-label boundaries checked. No new oral HBV dose table was invented where the lecture previously taught selection rather than numeric dosing. |
| HBV monitoring and withdrawal | Final AASLD recommendations 3–5, Figures 2–4, Table 3, and AASLD 2018 monitoring. Selection criteria and urgent restart thresholds made specific. Conflicting duration and boundary wording in the source is acknowledged; default continuation until HBsAg loss remains. |
| Every immunosuppression risk-table row and prophylaxis/monitoring example | Original AGA 2025 Table 6 and recommendations 1–4 read category by category; ASCO full provisional clinical opinion read for systemic therapy, hormonal-only exception, anti-CD20/transplant, monitoring alternative, and duration. High-risk threshold overlap corrected. Low-risk DAA-only exposure explicitly separated from ongoing immunosuppression. |
| HCV diagnosis, pretreatment, both simplified regimens, organ impairment/interactions, decompensation/retreatment, pregnancy, HBV reactivation, and SVR follow-up | Current official HCV Guidance sections and full drug-label sections listed below. Adult dose, oral route, food, 8/12/24-week duration and indication populations checked. Simplified exclusions, genotype 3 Y93H, prior decompensation, pregnancy testing, renal drug safety versus pathway eligibility, Epclusa PPI timing, and ribavirin safety clarified. |
| All four cases and fellow extensions | Reconciled with the main tables. Immune-tolerant case now includes repeated ALT over at least six months. Rituximab case remains the preferred prophylaxis strategy and is not contradicted by the separately qualified ASCO monitoring alternative. No separate trial-result table or numerical study-effect claim was published in the original module. |
| New October 2026 bepirovirsen option | FDA approval and complete relevant label sections independently checked by two reviewers. Bounded fellow update added with exact loading/maintenance dose, selected population, contraindications, minimum monitoring, organ/coinfection limitations, interaction review, and distinct NA continuation/withdrawal requirements. No numerical efficacy or unrestricted cure claim added. |

The TAF comparative statement is now limited to renal laboratory and bone-density differences observed in the label's trials, rather than implying demonstrated reductions in fractures or long-term renal clinical events. Numerical effect estimates from the guideline evidence reviews were read where necessary to assess certainty but are not reproduced in the lecture. This review does not claim to have reanalyzed every trial cited within every guideline.

### Primary sources actually accessed and sections read

All sources below were accessed on 4 November 2026. “Full” means the original full document or official full HTML was accessible and the specified relevant passages were read. It does not mean every unrelated section of a large guideline was audited. Third-party hosts below supply the original published article, not a secondary summary.

| Key | Exact source, version, access, and reviewed sections |
| --- | --- |
| AASLD2025 | [Final original publication](https://www.natap.org/2025/AASLD/aasld_isda_practice_guideline_on_treatment_of.24.pdf), Hepatology 2026;83:974–997, DOI 10.1097/HEP.0000000000001549, first published online 4 November 2025. Full 24-page final PDF accessed through NATAP; independently reopened after the peer found differences from the [45-page accepted manuscript on IDSA](https://www.idsociety.org/link/d400d5de79fb44008cd5b65dfaa64d1e.aspx). Core Concepts; recommendations 1–9 and relevant implementation; Tables 1, 3, 4; Figures 1–5. Final pages 974–976, 978–980, 982–989, 990–991 supply the phase, pregnancy, treatment, monitoring, stopping, and surveillance passages. Both reviewers checked final R3 and R5/Table 3, rather than treating the accepted manuscript as the final version. |
| AASLD2018 | [Original full 40-page article](https://www.natap.org/2022/HBV/Hepatology2018TerraultUpdateonpreventiondiagnosiandeatment%20ofchronichepatitisBAASLD2018hepatitis.pdf), Hepatology 2018;67:1560–1599, DOI 10.1002/hep.29800. Table 1, serology/isolated core, prevention and HDV risk testing, monitoring guidance statements 5 and 7, section 6E acute severe/protracted HBV, and NA treatment monitoring. Applied only where not superseded by 2023/2025 guidance or current labeling. |
| CDC2023 | [CDC MMWR screening and testing recommendations](https://www.cdc.gov/mmwr/volumes/72/rr/rr7201a1.htm), 10 March 2023, full official HTML. Table 1 serology, Table 2 evaluation, Box 5 prevention, isolated-core discussion, transient HBsAg after vaccination, passive anti-HBs, IgM during chronic flares, vaccination-record/booster qualifications. The linked erratum changes an affiliation, not these clinical instructions. |
| CDCperinatal | [CDC perinatal clinical overview](https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/index.html), updated 18 September 2025, full official HTML. HBsAg-positive maternal pathway, HBIG and vaccine within 12 hours, series completion, postvaccination serology at 9–12 months or appropriate delayed-series interval. |
| EASL2025 | [Original full EASL HBV guideline](https://www.hepb.org/assets/Uploads/EASL-guidelines-May-2025.pdf), J Hepatol 2025;83:502–583, DOI 10.1016/j.jhep.2025.03.018. Pages 5–6 of the PDF, HDV testing recommendation: once for all HBsAg-positive people, repeat with ongoing risk or unexplained hepatitis, RNA after positive antibody. Lecture expressly follows this screening framework while identifying AASLD 2018's risk-based approach. |
| HCC2023 | [Original full AASLD HCC guidance](https://aeeh.es/wp-content/uploads/2026/04/HCC-AASLD-2023.pdf), DOI 10.1097/HEP.0000000000000466, full article mirrored by the Spanish liver society. PDF page 7 guidance statements 7–11 and page 9 statement 12 read and reopened: treatment candidates, Child-Pugh C transplant exception, ultrasound plus AFP approximately every six months, alternate imaging for inadequate visualization. |
| HCC2025update | [AASLD current issuing page](https://www.aasld.org/practice-guidelines/management-hepatocellular-carcinoma) and [original critical update](https://doi.org/10.1097/hep.0000000000001269), July 2025. Direct publisher access blocked; primary indexed original update passages identify the change as adjuvant HCC therapy, statement 32/Figure 11, not the surveillance statements used here. No adjuvant-treatment claim was added to the lecture. |
| AGA2025 | [Original full guideline](https://aeeh.es/wp-content/uploads/2026/04/AGA-2025-VHB-1.pdf), Gastroenterology 2025;168:267–284, DOI 10.1053/j.gastro.2024.11.008; full 18-page original via liver-society mirror after publisher access failed. Recommendations 1–4, Table 4, entire Table 6 including every serostatus/drug row and footnote, and corresponding risk/monitoring rationale. Certainty limits for IL-6/JAK and other sparse categories preserved. |
| ASCO2020 | [Original full provisional clinical opinion](https://pmc.ncbi.nlm.nih.gov/articles/PMC11828660/), J Clin Oncol 2020;38:3698–3715, DOI 10.1200/JCO.20.01757. Full PMC manuscript, clinical recommendations and management algorithms. Chronic-HBV systemic anticancer prophylaxis, hormonal-only exception, past-HBV anti-CD20/HSCT prophylaxis or selected intensive monitoring, minimum duration, CAR-T considerations, and anti-HBs limitations directly read. |
| NIH HBV/HIV | [Official NIH HBV/HIV guidance](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/coinfections-hepatitis-b-virus-hiv), updated 24 September 2026. Full relevant regimen and HBV-withdrawal sections, verified in the first batch and retained. “Usual regimen” intentionally allows the current islatravir/FTC/3TC interaction exception discussed in the HIV lecture. |
| BARACLUDE | [FDA full label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021798s025lbl.pdf), revised August 2026, sections 2.1, 2.2, 2.4, 2.5, 5.1–5.3. Naive versus lamivudine-refractory/decompensated dosing, CrCl below 50 adjustment including dialysis, fasting interval, HIV resistance risk, and stopping warnings checked. No numeric dose was newly published in the selection table. |
| VEMLIDY | [Current manufacturer full prescribing information](https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/vemlidy/vemlidy_pi.pdf), revised March 2024. Sections 1–2, 5, 6.1, 7 and organ-impairment sections. Food, eCrCl below 15 without chronic HD, post-HD timing, Child-Pugh B/C limitation, urine protein/glucose and CKD phosphorus, P-gp interactions. Section 6.1 trial renal/BMD outcomes explicitly state uncertain long-term clinical significance. |
| VIREAD | [Current manufacturer full prescribing information](https://www.gilead.com/-/media/files/pdfs/medicines/hiv/viread/viread_pi.pdf), sections 2.4, 5.2, 5.5. Adult renal-interval table, absent recommendation below CrCl 10 without HD, nephrotoxicity/urine monitoring, CKD phosphorus and bone risk. Checked against the label, not copied from a secondary dosing table. |
| PEGASYS | [Current DailyMed full label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9290e5b-6d40-2318-e053-2995a90a9916), updated 7 July 2026. Adult CHB section 2.4, renal section 2.6, contraindications 4, warnings 5 including psychiatric/cytopenic/autoimmune/thyroid/ophthalmic risks. Subcutaneous route and renal reduction verified. Pregnancy avoidance is also supported by HBV guidance; it is not misrepresented as a stand-alone PEGASYS formal pregnancy contraindication. |
| HCVsimpleNC | [Official simplified treatment without cirrhosis](https://www.hcvguidelines.org/guidance/simplified-hcv-treatment-for-treatment-naive-adults-without-cirrhosis/), current living full HTML. All eligibility/exclusion, fibrosis assessment, laboratory/pregnancy testing, regimens, HIV/TDF renal exception, monitoring, SVR and recurrent-risk follow-up sections read. |
| HCVsimpleC | [Official simplified compensated-cirrhosis pathway](https://www.hcvguidelines.org/guidance/simplified-hcv-treatment-algorithm-for-treatment-naive-adults-with-compensated-cirrhosis/), current living full HTML. All exclusion criteria, three-month laboratory/six-month ultrasound timing, prior decompensation, severe renal exclusion, genotype 3 Y93H distinction, doses/durations, and clinical monitoring read. |
| HCVtesting | [Official testing and linkage guidance](https://www.hcvguidelines.org/guidance/hcv-testing-and-linkage-to-care/), current full HTML. Antibody-reflex RNA, negative antibody with recent exposure/immunocompromise, antibody-positive RNA-negative interpretation, reinfection testing, and genotype use. |
| HCVacute | [Official acute-HCV guidance](https://www.hcvguidelines.org/guidance/management-of-acute-hcv-infection/), current full HTML. Treat quantifiable acute viremia without waiting for spontaneous clearance, use chronic-treatment regimens, avoid unsupported abbreviated courses. Matched separately to the current Mavyret acute indication and Epclusa's chronic-only label. |
| HCVmonitoring | [Official before/during/after-treatment guidance](https://www.hcvguidelines.org/guidance/monitoring-patients-who-are-starting-hcv-treatment-are-on-treatment-or-have-completed-therapy/), current full HTML. Pretreatment contraindications/interactions, NS3 prior-decompensation exclusion, glucose/INR, HBV DNA prophylaxis versus monthly monitoring, reactivation thresholds, unresolved routine-DNA schedule for resolved HBV during DAA-only therapy, SVR and annual RNA follow-up. |
| HCVdecomp | [Official decompensated-cirrhosis recommendations](https://www.hcvguidelines.org/guidance/patients-with-decompensated-cirrhosis/), current full HTML. Separate tables for ribavirin eligibility/ineligibility and prior sofosbuvir/NS5A failure, 12 versus 24 weeks, no NS3 inhibitor, lower Child-Pugh C ribavirin starting dose. ASTRAL-4 explanatory limitations read; no numeric trial result added to the lecture. |
| HCVretreatment | [Official sofosbuvir/elbasvir-grazoprevir failure guidance](https://www.hcvguidelines.org/guidance/sofosbuvir-based-and-elbasvir-grazoprevir-treatment-failures/), current full HTML. Retreatment table and genotype/cirrhosis qualifications establish the limited description of Vosevi as a common salvage backbone, not a universal regimen. |
| HCVpregnancy | [Official HCV-in-pregnancy guidance](https://www.hcvguidelines.org/guidance/hcv-in-pregnancy/), current full HTML. Prepregnancy treatment, individualized DAA decision in pregnancy, lack of routine simplified pregnancy pathway, and ribavirin prohibition. |
| MAVYRET | [Current manufacturer full label](https://www.rxabbvie.com/pdf/mavyret_pi.pdf), revised June 2025, sections 1, 2, 4, 8.6. Acute/chronic adult indication, 300/120 mg as three tablets once daily with food for eight weeks in the stated naive population, all-degree renal dosing, any prior decompensation, Child-Pugh B/C, rifampin/atazanavir contraindications. |
| EPCLUSA | [Current manufacturer full label](https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/epclusa/epclusa_pi.pdf), revised April 2022, sections 1–2, 7/Table 4, 8.6–8.7. Adult 400/100 mg orally once daily, food flexibility, renal dosing, decompensated combination regimen, amiodarone, acid suppression and exact omeprazole timing. Section 8.6 explicitly lacks safety data for combined decompensated cirrhosis and severe renal impairment/ESRD; that gap is now published. Acute treatment and ribavirin-free decompensated 24-week treatment are distinguished as guideline-supported off-label use. |
| VOSEVI | [Current manufacturer full label](https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/vosevi/vosevi_pi.pdf), revised November 2019, sections 1–2 and 5.2. Components, salvage indication, NS3 inhibitor, prior-decompensation/Child-Pugh B/C limitation. Dose was checked in source but is not a new published example. |
| HARVONI / ZEPATIER | [Harvoni full label](https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/harvoni/harvoni_pi.pdf), revised December 2024; [Zepatier full label](https://www.merck.com/product/usa/pi_circulars/z/zepatier/zepatier_pi.pdf), revised March 2026. Brand/component crosswalk checked; Zepatier sections 2.2, 2.4 and 4 establish its NS3 inhibitor and prior-decompensation/Child-Pugh B/C contraindication. Neither is presented as an unspecific substitute for the simplified regimens. |
| RIBAVIRINtablet | [Aurobindo tablet full label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eee304d0-c2ea-44f4-97d9-92a414d31b6c), DailyMed updated 6 February 2024, revised May 2023; sections 2.4/Table 4, 4, 5.1–5.2. Renal adjustment, pregnancy/pregnant-partner/hemoglobinopathy/didanosine contraindications, hemolysis, cardiac risk, baseline/two-/four-week hemoglobin monitoring. |
| RIBAVIRINcapsule | [Aurobindo capsule full label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=35f99f76-f2ef-4a81-91ff-285419664be3), DailyMed updated 6 February 2024, revised July 2023; boxed warning, sections 2.5, 4 and 5.1. Product labeling differs for renal restrictions and pregnancy-prevention intervals. The lecture correctly directs product-specific instructions rather than publishing one universal interval or renal regimen. |
| HIBSAGO2026 | [FDA approval announcement](https://www.fda.gov/news-events/press-announcements/fda-approves-first-its-kind-chronic-hepatitis-b-treatment), 20 October 2026, and [full FDA original label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/221276Orig1s000lbl.pdf), reference 5889023, sections 1–2.7/Tables 1–3, 4, 5.1–5.9, 7, 8.1/8.4–8.8, and section 14 eligibility. Independently opened and read by both reviewers. The label supplies the selected adult population, two-injection loading/maintenance dose, maximum duration, baseline eGFR/uACR, platelet/hepatic/renal monitoring and toxicity actions, renal and coinfection evidence limits, and distinct NA continuation/cessation rules. No pivotal efficacy percentage is published; the complete original B-Well trial articles were not separately audited. |
| Coexist2007abstract / Coexist2024abstract | [Original 2007 study abstract, PMID 17407033](https://pubmed.ncbi.nlm.nih.gov/17407033/) and [original 2024 study abstract, PMID 38793596](https://pubmed.ncbi.nlm.nih.gov/38793596/), plus [2017 original abstract, PMID 28198078](https://pubmed.ncbi.nlm.nih.gov/28198078/). Abstracts support subtype-mismatched antibody and surface-gene variants as possible explanations. Original [2006 ASM paper](https://journals.asm.org/doi/10.1128/jvi.80.6.2968-2975.2006) indexed methods/discussion excerpts also read. Full publisher/PMC/EuropePMC/MDPI routes were blocked or challenged; no full-paper verification claimed. No study percentage, assertion that a specific patient has a mutant, or assertion of vaccine failure is published. |

### Source inconsistencies and unresolved questions

The final AASLD publication, rather than only its accepted manuscript, was checked. R3 defines the immune-tolerant evidence population with DNA greater than 10 million IU/mL and age over 40; Core Concepts/Table 1 use at least 10 million and Figure 2 uses age at least 40. The lecture follows the actual recommendation text, and the case is age 44 with DNA 18 million, so neither boundary determines that example. Faculty should adjudicate a patient exactly at a boundary instead of treating a typography difference as a clinical discontinuity.

For NA withdrawal, PICO 5 studies patients with at least three years of NA therapy and at least two years of suppressed DNA. Main implementation/Table 3 require at least two years of suppression, while Figure 4 says at least three. This unresolved primary-source inconsistency is now stated in the fellow section. Main implementation says restart for ALT at least five times ULN; Table 3/Figure 4 use greater than five. The lecture explicitly attributes the more conservative at-least-five threshold to the implementation text. It is not presented as a universally validated numerical stopping/restart protocol.

AGA's prose uses a less-than-one-week short-steroid description while Table 6 includes one week or less. The table teaching follows Table 6. Similarly, changing inactive-HBV first-year monitoring to every three months follows the 2018 detailed monitoring statements; the final 2025 Figure 3 permits every three to six months. The previous three-to-six-month wording should therefore not be reported as a universally unsafe error. This revision is a conservative, sourced teaching choice.

The final AASLD guideline permits treatment of HBsAg-positive cirrhosis regardless of DNA/ALT. EASL uses a detectable-DNA qualification. The lecture explicitly identifies the AASLD treatment framework. TAF use in decompensated cirrhosis is discussed in guideline practice but remains outside Vemlidy's recommended labeled Child-Pugh population; the label restriction is preserved.

Ribavirin labels differ: the reviewed tablet label provides renal reductions at CrCl 50 or below and six-month pregnancy-prevention instructions, whereas the reviewed capsule label has a CrCl-below-50 contraindication and a longer interval for female patients. The lecture avoids fabricating a uniform product-independent rule. Epclusa's lack of combined severe-renal/decompensated safety data is a limitation, not a new formal contraindication.

The remaining inaccessible full-text evidence is the background mechanism of HBsAg/anti-HBs coexistence and the full direct publisher page for the limited HCC critical update. The latter's scope was established from the issuing page and primary indexed update text; the actual original HCC surveillance guidance was read in full. These limits prevent claiming that every linked article was independently read in full. The substantive actionable pathways have undergone primary-source comparison, and any clinical pass must retain these limits rather than imply complete all-source certification.

### Exact sequential corrections

The following records preserve the original and replacement visible wording for every saved substitution. Some later entries refine an earlier replacement after independent review; the latest entry governs the final HTML. Pure source-link additions are recorded as such. Source keys resolve to the exact URLs and access/version details above. Unchanged drug doses and durations were still checked, as documented in the coverage table.

#### HEP-01 · #hbv-panel

Original: Vaccine immunity

Replacement: Vaccine-associated anti-HBs; confirm a completed series and exclude recent passive antibody

Source: CDC2023. Disposition: Qualifies serology interpretation when vaccination history or recent HBIG is relevant.

#### HEP-02 · #hbv-workup

Original: EASL recommends one-time HDV screening for every HBsAg-positive patient; older AASLD guidance uses risk-based testing. Universal one-time testing is a reasonable practical approach because risk histories miss infections.

Replacement: EASL 2025 recommends at least one anti-HDV test for every HBsAg-positive patient; the AASLD 2018 guidance uses risk-based testing. This module follows the EASL screening approach. Repeat testing when exposure risk continues or otherwise unexplained hepatitis develops.

Source: EASL2025; AASLD2018. Disposition: Attributes the screening framework and adds its repeat-testing condition.

#### HEP-03 · #hbv-workup

Original: Creatinine/eGFR and urinalysis; add phosphorus when considering or using TDF.

Replacement: Creatinine/estimated creatinine clearance and urine protein/glucose before tenofovir; add serum phosphorus in chronic kidney disease.

Source: VEMLIDY; VIREAD. Disposition: Matches both tenofovir labels and uses creatinine clearance for drug dosing.

#### HEP-04 · #hbv-workup

Original: and patients with PAGE-B ≥10. The 2025 AASLD/IDSA guidance also includes all HBV/HDV coinfection and, without cirrhosis, HBV/HIV coinfection in men age 18 or older and women age 40 or older.

Replacement: and patients with PAGE-B ≥10 (validated chiefly in patients receiving antiviral therapy). The 2025 AASLD/IDSA guidance also includes adults with active HBV/HDV coinfection and, without cirrhosis, HBV/HIV coinfection in men age 18 or older and women age 40 or older. Anti-HDV positivity without detectable HDV RNA follows the HBV-alone surveillance criteria.

Source: AASLD2025 R7/R8 and Table4. Disposition: Avoids extending adult active-HDV surveillance evidence to children or resolved HDV.

#### HEP-05 · #hbv-treat

Original: Clinical settingTreatment direction

Replacement: These are adult treatment principles using the AASLD/IDSA 2025 guideline and the AASLD 2018 guidance for questions not replaced by that update. Other societies use different eligibility thresholds. Clinical settingTreatment direction

Source: AASLD2025; AASLD2018. Disposition: States adult population and identifies the guideline framework without suggesting institutional policy.

#### HEP-06 · #hbv-treat

Original: 2025 AASLD suggests treatment when age is over 40 or there is at least F2 fibrosis or grade 2 inflammation. Confirm persistently normal ALT before using this label.

Replacement: 2025 AASLD conditionally suggests treatment when age is over 40 or there is at least F2 fibrosis or grade 2 inflammation; evidence certainty is very low. The immune-tolerant pattern requires HBeAg positivity, HBV DNA >10 million IU/mL, and normal ALT on at least two measurements over at least 6 months.

Source: AASLD2025 R3 and Table1. Disposition: Defines the population and preserves the conditional, very-low-certainty character of the age-based recommendation.

#### HEP-07 · #hbv-treat

Original: Begin TDF or TAF at gestational week 28 to reduce perinatal transmission. TDF has the longer pregnancy safety record. The infant still needs HBV vaccine and HBIG promptly after birth.

Replacement: Begin TDF or TAF at gestational week 28 to reduce perinatal transmission; start promptly if first presenting later. TDF has the longer pregnancy safety record. The infant needs HBV vaccine and HBIG within 12 hours of birth, completion of vaccination, and HBsAg/anti-HBs testing at age 9–12 months.

Source: AASLD2025 R1; CDCperinatal. Disposition: Provides a definite neonatal prevention interval and closes the late-presentation and follow-up gaps.

#### HEP-08 · #hbv-treat

Original: Preferred oral agents

Replacement: If maternal antiviral therapy was started only to prevent perinatal transmission, the 2025 guideline permits stopping at delivery with ALT and HBV DNA every 1–3 months for 6 months and prompt reassessment for a flare. Continue treatment when there is an ongoing maternal indication. Preferred nucleos(t)ide agents and a selected interferon option

Source: AASLD2025 R1/Figure1; PEGASYS. Disposition: Adds the postpartum plan and corrects a heading that incorrectly called injectable peginterferon oral.

#### HEP-09 · #hbv-treat

Original: Dose-adjust for renal function. Take fasting. Avoid monotherapy in untreated HIV because it can select HIV resistance. Prior lamivudine resistance reduces its barrier.

Replacement: Adjust dose or interval when creatinine clearance is <50 mL/min, including dialysis. Take at least 2 hours after a meal and 2 hours before the next meal. In HIV coinfection use only with fully suppressive ART. Prior lamivudine resistance reduces its barrier; tenofovir is generally preferred in that setting.

Source: BARACLUDE 2.1/2.4/5.2; AASLD2025 CoreConcepts. Disposition: Adds the actual renal threshold and fasting instruction; reconciles HIV and lamivudine-resistance qualifications.

#### HEP-10 · #hbv-treat

Original: Potent; less renal and bone toxicity than TDF

Replacement: Potent; smaller declines in estimated creatinine clearance and bone mineral density than TDF in trials; long-term clinical benefit from those differences is uncertain

Source: VEMLIDY 6.1. Disposition: Avoids extrapolating surrogate measures to proven reductions in fractures or renal clinical events.

#### HEP-11 · #hbv-treat

Original: Check renal function. Vemlidy is not recommended by its labeling in decompensated Child-Pugh B or C cirrhosis. Review HIV status and drug interactions.

Replacement: Take with food. Monitor creatinine/estimated clearance, urine protein/glucose, and phosphorus in CKD. Labeling does not recommend use with creatinine clearance <15 mL/min unless receiving chronic hemodialysis, or in Child-Pugh B/C disease. Give after dialysis on dialysis days. Review HIV status and interactions, particularly P-gp inducers.

Source: VEMLIDY 2/5.2/5.3/7. Disposition: Makes the renal and hepatic label restrictions concrete; retains the specialist distinction from off-label decompensated use.

#### HEP-12 · #hbv-treat

Original: Monitor creatinine/eGFR, urine protein/glucose, and phosphorus; consider bone density in patients at risk.

Replacement: Extend the dosing interval when creatinine clearance is <50 mL/min. Monitor creatinine/estimated clearance and urine protein/glucose; check phosphorus in CKD and consider bone density in patients at risk. Avoid concurrent or recent nephrotoxic drugs when feasible.

Source: VIREAD 2.4/5.2/5.5. Disposition: Adds renal interval adjustment and aligns monitoring with the current label.

#### HEP-13 · #hbv-treat

Original: Avoid in decompensated cirrhosis, pregnancy, major uncontrolled psychiatric disease, cytopenias, and selected autoimmune disease. Requires close CBC, hepatic, thyroid, and clinical monitoring.

Replacement: Subcutaneous therapy; avoid in pregnancy, uncontrolled psychiatric illness, and significant cytopenias. Autoimmune hepatitis and hepatic decompensation are contraindications. Reduce dose when creatinine clearance is <30 mL/min. Requires close CBC, hepatic, thyroid, and clinical monitoring plus baseline eye assessment.

Source: PEGASYS 2.4/2.6/4/5; AASLD2018 Table1. Disposition: Separates contraindications from clinical exclusions and adds renal and ocular safety.

#### HEP-14 · #hbv-treat

Original: Do not use lamivudine, adefovir, or telbivudine as routine first-line long-term therapy.

Replacement: Use the current entecavir, TAF, TDF, and peginterferon labels for formulation-specific dosing and interaction review. Do not use lamivudine, adefovir, or telbivudine as routine first-line long-term therapy.

Source: Currentlabels. Disposition: Provides direct primary labeling next to the agent table.

#### HEP-15 · #hbv-follow

Original: ALT and HBV DNA every 3–6 months for the first year, then every 6–12 months if stable. Recheck sooner if ALT rises.

Replacement: ALT and HBV DNA every 3 months for the first year to establish inactivity, then every 6–12 months if stable. Recheck sooner if ALT rises; assess HBsAg loss annually.

Source: AASLD2018 Monitoring statements5/7. Disposition: Reconciles the stated first-year interval with the source and adds the annual seroclearance check.

#### HEP-16 · #hbv-follow

Original: Never stop in cirrhosis without specialist oversight.

Replacement: Do not withdraw suppressive therapy solely because HBV DNA becomes undetectable in a patient with current or prior cirrhosis. See the selected withdrawal criteria below.

Source: AASLD2025 R5. Disposition: Removes the implication that specialist supervision alone makes withdrawal appropriate in cirrhosis.

#### HEP-17 · #immunosuppression

Original: means an estimated reactivation risk of at least 10%.

Replacement: means an estimated reactivation risk greater than 10%.

Source: AGA2025 riskdefinition. Disposition: Removes overlap with the moderate category (1–10%).

#### HEP-18 · #immunosuppression

Original: Any systemic corticosteroid course shorter than 1 week or intra-articular steroid

Replacement: A single systemic corticosteroid course of 1 week or less, or intra-articular steroid

Source: AGA2025 Table6. Disposition: Matches the table boundary; repeated courses and combinations still require reassessment.

#### HEP-19 · #immunosuppression

Original: For HBsAg-positive patients receiving systemic anticancer therapy, ASCO recommends antiviral prophylaxis regardless of the specific regimen. For resolved HBV, anti-CD20 therapy and stem-cell transplantation require prophylaxis. CAR-T recipients should also generally receive prophylaxis even though the isolated AGA estimate falls in the moderate-risk range.

Replacement: For HBsAg-positive patients receiving systemic anticancer therapy, ASCO recommends prophylaxis; hormonal therapy alone is the exception and follows usual HBV treatment criteria. Added corticosteroids or other systemic agents change that assessment. For resolved HBV, prophylaxis is the preferred approach with anti-CD20 therapy or stem-cell transplantation. With CAR-T, AGA favors prophylaxis at moderate risk; prior B-cell depletion and prolonged immune dysfunction further support that choice.

Source: ASCO2020 PCO; AGA2025 R1/R2 and Table6. Disposition: Preserves prophylaxis as default while identifying the explicit hormonal-only exception.

#### HEP-20 · #immunosuppression

Original: Start entecavir, TAF, or TDF before or no later than immunosuppression. Do not substitute monitoring alone.

Replacement: AGA strongly recommends prophylaxis with entecavir, TAF, or TDF before or at immunosuppression. Monitoring alone requires an explicitly selected alternative pathway with dependable testing and immediate access to treatment.

Source: AGA2025 R1; ASCO2020 PCO. Disposition: Avoids contradicting ASCO selected-monitoring alternative while retaining the strong prophylaxis recommendation.

#### HEP-21 · #immunosuppression

Original: Monitor rather than routinely prophylax. Use ALT and HBV DNA every 1–3 months during meaningful ongoing exposure; add HBsAg for patients with resolved infection.

Replacement: Monitor rather than routinely prophylax. During ongoing immunosuppression, use ALT plus HBV DNA every 1–3 months; add HBsAg for resolved infection. DAA-only exposure has a separate HCV monitoring pathway.

Source: AGA2025 R3; HCVmonitoring. Disposition: Separates immunosuppressive monitoring from the less prescriptive resolved-HBV DAA-only pathway.

#### HEP-22 · #immunosuppression

Original: Vaccinate. Vaccination does not provide immediate protection and does not replace prophylaxis for someone with prior infection.

Replacement: Review the vaccination record and vaccinate if susceptible. Vaccination does not provide immediate protection and does not replace prophylaxis for someone with prior infection.

Source: CDC2023. Disposition: Reconciles this repeat with documented prior vaccination and waning anti-HBs in the initial panel table.

#### HEP-23 · #immunosuppression

Original: When prophylaxis is used

Replacement: For selected patients with past HBV receiving anti-CD20 therapy or transplantation, ASCO allows an alternative of HBsAg and HBV DNA every 3 months during treatment and for up to 12 months afterward, with treatment at the earliest reactivation. This requires sustained follow-up and specialist agreement; anti-HBs positivity alone does not justify choosing it. When prophylaxis is used

Source: ASCO2020 PCO. Disposition: Documents the selected alternative without weakening the usual prophylaxis pathway.

#### HEP-24 · #immunosuppression

Original: ASCO recommends at least 12 months after systemic anticancer therapy for patients with chronic HBV.

Replacement: ASCO recommends at least 12 months after systemic anticancer therapy requiring prophylaxis in patients with chronic HBV.

Source: ASCO2020 PCO. Disposition: Makes the duration paragraph consistent with the hormonal-only exception.

#### HEP-25 · #hcv

Original: Antibody remains positive after cure.

Replacement: Antibody usually remains positive after cure.

Source: HCVtesting; HCVmonitoring. Disposition: Avoids an absolute claim; RNA remains the test for suspected reinfection.

#### HEP-26 · #hcv

Original: Do not wait for spontaneous clearance once acute HCV viremia is confirmed. Treat using the same regimens used for chronic infection.

Replacement: Do not wait for spontaneous clearance once acute HCV viremia is confirmed. AASLD-IDSA recommends the same regimens as for chronic infection. Mavyret gained an FDA indication for acute HCV in 2025; Epclusa use for acute infection remains guideline-supported off-label treatment.

Source: HCVacute; MAVYRET1/2; EPCLUSA1. Disposition: Distinguishes current labeling from guideline-supported acute treatment.

#### HEP-27 · #hcv

Original: CBC, hepatic function panel, eGFR, and INR when cirrhosis is possible. Assess Child-Pugh class before any NS3 protease inhibitor.

Replacement: For the noncirrhotic simplified pathway, obtain CBC, hepatic panel, and eGFR within 6 months. For compensated cirrhosis, obtain those tests plus INR within 3 months and liver ultrasound within 6 months to exclude HCC and subclinical ascites. Assess Child-Pugh class and any prior decompensation before an NS3 protease inhibitor.

Source: HCVsimpleNC; HCVsimpleC. Disposition: Provides the actual algorithm laboratory windows and cirrhosis imaging requirements.

#### HEP-28 · #hcv

Original: Glecaprevir 300 mg / pibrentasvir 120 mg once daily

Replacement: Glecaprevir 300 mg / pibrentasvir 120 mg orally once daily

Source: HCVsimpleNC; MAVYRET2.3. Disposition: Explicitly states route; dose, interval, and 8-week duration remain unchanged.

#### HEP-29 · #hcv

Original: Sofosbuvir 400 mg / velpatasvir 100 mg once daily

Replacement: Sofosbuvir 400 mg / velpatasvir 100 mg orally once daily

Source: HCVsimpleNC; EPCLUSA2.3. Disposition: Explicitly states route; dose, interval, and 12-week duration remain unchanged.

#### HEP-30 · #hcv

Original: One tablet once daily. Review acid suppression carefully.

Replacement: One tablet once daily with or without food. Review acid suppression carefully.

Source: EPCLUSA2.3/7. Disposition: Adds the labeled administration detail.

#### HEP-31 · #hcv

Original: Simplified treatment does not apply to prior HCV treatment, HBsAg positivity, pregnancy, suspected HCC, prior liver transplantation, or other pathway-specific exclusions. Compensated cirrhosis has a separate simplified algorithm; genotype 3 treated with sofosbuvir/velpatasvir requires baseline NS5A Y93H testing.

Replacement: Simplified treatment excludes prior HCV treatment, HBsAg positivity, pregnancy, known or suspected HCC, and prior liver transplantation. HIV coinfection with TDF use and eGFR <60 mL/min/1.73 m² requires additional monitoring outside simplified care. The separate compensated-cirrhosis algorithm also excludes any prior decompensation and eGFR <30. In eligible Child-Pugh A patients, glecaprevir/pibrentasvir is given for 8 weeks; sofosbuvir/velpatasvir is given for 12 weeks, but genotype 3 requires absence of baseline NS5A Y93H. If Y93H is present, use specialist-guided treatment.

Source: HCVsimpleNC; HCVsimpleC. Disposition: Defines the previously unspecified pathway exclusions and the actual Y93H decision.

#### HEP-32 · #hcv

Original: No protease inhibitor in decompensated cirrhosis.

Replacement: Both standard-dose regimens can be used in severe renal impairment, including dialysis, under their labels; renal exclusions from simplified care do not make the drugs contraindicated. Mavyret is contraindicated with rifampin or atazanavir. With Epclusa, proton-pump inhibitors are not recommended; if omeprazole is essential, the label specifies Epclusa with food 4 hours before omeprazole 20 mg. Check all other interacting drugs and acid-suppressant doses individually. No protease inhibitor in decompensated cirrhosis.

Source: MAVYRET2/4/8.6; EPCLUSA2/7/8.6. Disposition: Separates algorithm eligibility from renal drug safety and adds concrete high-impact interaction precautions.

#### HEP-33 · #hcv

Original: For uncomplicated simplified therapy, routine on-treatment laboratory monitoring is usually unnecessary. Check in for adherence, new medications, and adverse effects.

Replacement: For uncomplicated noncirrhotic simplified therapy, routine on-treatment laboratory monitoring is usually unnecessary. In cirrhosis, consider hepatic tests and promptly evaluate jaundice, ascites, encephalopathy, or worsening laboratory results. Check in for adherence, new medications, and adverse effects.

Source: HCVsimpleNC; HCVsimpleC. Disposition: Restricts the no-laboratory recommendation to the population that supports it.

#### HEP-34 · #hcv

Original: If prophylaxis is chosen under the HCV pathway, continue it through 12 weeks after DAA completion.

Replacement: If prophylaxis is chosen under the HCV pathway, continue it through 12 weeks after DAA completion. For HBsAg-negative, anti-HBc-positive patients receiving DAAs alone, HCV Guidance does not establish a routine HBV DNA schedule; unexplained ALT elevation during or after therapy should prompt assessment for reactivation, including HBV DNA and HBsAg.

Source: HCVmonitoring; AASLD2018 HBV/HCV. Disposition: Makes the resolved-infection DAA pathway explicit and prevents applying immunosuppression monitoring universally.

#### HEP-35 · #cases

Original: ALT 31 U/L on repeated measurements,

Replacement: ALT 31 U/L on repeated measurements over at least 6 months,

Source: AASLD2025 R3. Disposition: Makes the immune-tolerant case meet the published longitudinal definition.

#### HEP-36 · #advanced

Original: Repeat the triple panel on a new specimen, preferably using a different assay when available. Vaccinate if susceptible.

Replacement: Repeat anti-HBc using the same assay to confirm a low-risk isolated result, as CDC recommends; obtain a new specimen and consult the laboratory if discordance persists. Vaccinate if susceptible.

Source: CDC2023 Isolatedcore. Disposition: Corrects the initial confirmatory assay recommendation while retaining laboratory evaluation of persistent discordance.

#### HEP-37 · #advanced

Original: Ordering only HBsAg misses resolved infection and therefore misses most patients at risk during rituximab or CAR-T therapy.

Replacement: Ordering only HBsAg misses resolved infection and leaves patients with prior HBV unrecognized before rituximab or CAR-T therapy.

Source: CDC2023; ASCO2020. Disposition: Removes an unsupported population-frequency claim.

#### HEP-38 · #advanced

Original: For HBeAg-negative adults without cirrhosis, 2025 AASLD suggests continuing nucleos(t)ide therapy until HBsAg loss. If a highly selected patient strongly prefers withdrawal, reassess cirrhosis, prior decompensation, HCC, coinfections, extrahepatic disease, duration of suppression, quantitative HBsAg when available, and ability to comply with intensive follow-up. Restart thresholds include clinically significant flare, jaundice or impaired synthetic function, or substantial virologic relapse as defined by the specialist protocol.

Replacement: For HBeAg-negative adults, AASLD 2025 conditionally favors continuing therapy until HBsAg loss. Its selected withdrawal pathway requires no advanced fibrosis/cirrhosis, prior decompensation, HCC, extrahepatic HBV disease, HIV, or HDV; undetectable HBV DNA for at least 2 years; quantitative HBsAg <100 IU/mL; and dependable follow-up. If initially HBeAg positive, HBeAg loss with anti-HBe positivity must have persisted for at least 1 year. This is a specialist shared decision based on very-low-certainty evidence, not a routine stopping rule. Use the withdrawal monitoring schedule above. The guideline implementation text calls for immediate restart if HBV DNA is ≥10,000 IU/mL regardless of ALT, ALT is ≥5 times ULN regardless of DNA, bilirubin is >2.5 mg/dL, or hepatic decompensation develops. Restart may also be appropriate for ordinary treatment indications, extrahepatic disease, or patient preference.

Source: AASLD2025 R5/implementation/Table3. Disposition: Replaces vague optional quantitative HBsAg and relapse criteria with the actual constrained pathway and urgent restart thresholds.

#### HEP-39 · #advanced

Original: No NS3 protease inhibitor. Use a specialist sofosbuvir/velpatasvir (Epclusa)-based pathway, usually 12 weeks with ribavirin when eligible or 24 weeks without ribavirin.

Replacement: No NS3 protease inhibitor. For patients without prior sofosbuvir/NS5A treatment failure, HCV Guidance recommends sofosbuvir/velpatasvir 400/100 mg orally daily with ribavirin for 12 weeks when eligible, or 24 weeks without ribavirin when ineligible. The ribavirin-free 24-week course is guideline-supported off-label use. Prior sofosbuvir/NS5A failure changes the pathway, generally to 24 weeks with ribavirin under specialist care (lower-certainty evidence).

Source: HCVdecomp; EPCLUSA1/2. Disposition: Prevents the 12-week course being generalized to prior DAA failure and identifies the label-guideline distinction.

#### HEP-40 · #advanced

Original: HBsAg positive Manage HBV treatment or reactivation prevention concurrently.

Replacement: Ribavirin eligibility Assess renal function, hemoglobin, cardiac disease, pregnancy risk, hemoglobinopathies, and interacting drugs. It is contraindicated during pregnancy, when a male patient’s partner is pregnant, and with didanosine. Use product-specific renal dosing and pregnancy-prevention instructions; monitor hemoglobin before treatment, at weeks 2 and 4, and thereafter as indicated. Child-Pugh C patients generally start at a reduced ribavirin dose in the specialist pathway. HBsAg positive Manage HBV treatment or reactivation prevention concurrently.

Source: RIBAVIRINtablet2.4/4/5.2; RIBAVIRINcapsule4/5.1; HCVdecomp. Disposition: Adds safeguards needed to make the retained ribavirin example usable; avoids an incorrect universal contraception interval across product labels.

#### HEP-41 · #references

Original: Terrault NA, et al. Update on Prevention, Diagnosis, and Treatment of Chronic Hepatitis B: AASLD 2018 Hepatitis B Guidance. Hepatology. 2018;67:1560–1599.

Replacement: Terrault NA, et al. Update on Prevention, Diagnosis, and Treatment of Chronic Hepatitis B: AASLD 2018 Hepatitis B Guidance. Hepatology. 2018;67:1560–1599. Apply the 2025 update where recommendations changed.

Source: AASLD2018. Disposition: Links the accessible original full paper and labels the superseded portions.

#### HEP-42 · #references

Original: Table 6 accessed October 31, 2026.

Replacement: Table 6 accessed October 31, 2026. Full guideline, including Tables 4 and 6.

Source: AGA2025. Disposition: Adds the original full guideline, not only its PubMed record.

#### HEP-43 · #references

Original: ASCO. Hepatitis B Virus Screening and Management for Patients With Cancer Prior to Therapy: Provisional Clinical Opinion Update. J Clin Oncol. 2020.

Replacement: ASCO. Hepatitis B Virus Screening and Management for Patients With Cancer Prior to Therapy: Provisional Clinical Opinion Update. J Clin Oncol. 2020.

Source: ASCO2020. Disposition: Links accessible full original manuscript.

#### HEP-44 · #references

Original: Singal AG, et al. AASLD Practice Guidance on Prevention, Diagnosis, and Treatment of Hepatocellular Carcinoma. Hepatology. 2023.

Replacement: Singal AG, et al. AASLD Practice Guidance on Prevention, Diagnosis, and Treatment of Hepatocellular Carcinoma. Hepatology. 2023. Surveillance statements 7–12; the 2025 critical update concerns adjuvant HCC treatment.

Source: HCC2023; HCC2025update. Disposition: Links full original surveillance recommendations and distinguishes the later update’s scope.

#### HEP-45 · #references

Original: This teaching module

Replacement: AASLD-IDSA HCV Guidance. Simplified treatment without cirrhosis; compensated cirrhosis; decompensated cirrhosis; acute HCV; pregnancy. Current prescribing information. Mavyret; Epclusa; Vosevi; ribavirin tablets. Product labels differ for some renal and pregnancy-prevention instructions. CDC. Clinical overview of perinatal hepatitis B. This teaching module

Source: HCVguidance; currentlabels; CDCperinatal. Disposition: Adds direct pathway and label references for the retained dosing and new qualifications.

#### HEP-46 · #hbv-treat

Original: Extend the dosing interval when creatinine clearance is <50 mL/min. Monitor

Replacement: Extend the dosing interval when creatinine clearance is <50 mL/min; no labeled dose is established below 10 mL/min without hemodialysis. Monitor

Source: VIREAD2.4. Disposition: Prevents treating a missing renal dose recommendation as an interval-adjustment instruction.

#### HEP-47 · #advanced

Original: It is contraindicated during pregnancy, when a male patient’s partner is pregnant, and with didanosine. Use product-specific

Replacement: It is contraindicated during pregnancy, when a male patient’s partner is pregnant, with hemoglobinopathies, and with didanosine. Avoid it with significant or unstable cardiac disease. Use product-specific

Source: RIBAVIRINtablet4/5.2. Disposition: Retains actual contraindications and the major cardiac warning within the treatment example.

#### HEP-48 · #advanced

Original: Consider assay interference, passive antibody, mixed subtypes, or immune-escape variants.

Replacement: Consider assay interference or passive antibody. Subtype-mismatched antibodies and surface-gene variants are reported explanations for coexistence; serology alone cannot identify the mechanism.

Source: Coexist2007abstract; Coexist2024abstract; CDC2023. Disposition: Narrows mechanism teaching to documented possibilities; full-text access limit retained in ledger.

#### HEP-49 · #hbv-panel

Original: Consider assay interference, recent HBIG, mixed viral subtypes, or escape variants.

Replacement: Consider assay interference, recent HBIG, subtype-mismatched antibody, or surface-gene variants; see the advanced discussion.

Source: Coexist2007abstract; Coexist2024abstract; CDC2023. Disposition: Reconciles the repeated mechanism wording with the source-qualified advanced discussion.

#### HEP-50 · #hcv

Original: Check coinfections and vaccines. HIV Ag/Ab and the complete HBV triple panel. Vaccinate against HAV and HBV when nonimmune.

Replacement: Check coinfections, pregnancy, and vaccines. HIV Ag/Ab and the complete HBV triple panel. Offer pregnancy testing and counseling about treatment risks when pregnancy is possible. Vaccinate against HAV and HBV when nonimmune.

Source: HCVsimpleNC pretreatment; HCVsimpleC pretreatment. Disposition: Peer identified a missing selection step; pregnancy testing/counseling added before treatment.

#### HEP-51 · #hcv

Original: Both standard-dose regimens can be used in severe renal impairment, including dialysis, under their labels; renal exclusions from simplified care do not make the drugs contraindicated. Mavyret is contraindicated with rifampin or atazanavir. With Epclusa, proton-pump inhibitors are not recommended; if omeprazole is essential, the label specifies Epclusa with food 4 hours before omeprazole 20 mg. Check all other interacting drugs and acid-suppressant doses individually.

Replacement: Both standard-dose regimens can be used in severe renal impairment, including dialysis, under their labels; renal exclusions from simplified care do not make the drugs contraindicated. The Epclusa label has no safety data for patients with both decompensated cirrhosis and severe renal impairment or dialysis; this combination requires specialist assessment. Mavyret is contraindicated with rifampin or atazanavir. With Epclusa, proton-pump inhibitors are not recommended; if omeprazole is essential, the label specifies Epclusa with food 4 hours before omeprazole 20 mg. Check all other interacting drugs and acid-suppressant doses individually.

Source: EPCLUSA8.6. Disposition: Peer identified the combined decompensation/severe-renal-impairment evidence gap; added specialist assessment without inventing a contraindication.

#### HEP-52 · #advanced

Original: For HBeAg-negative adults, AASLD 2025 conditionally favors continuing therapy until HBsAg loss. Its selected withdrawal pathway requires no advanced fibrosis/cirrhosis, prior decompensation, HCC, extrahepatic HBV disease, HIV, or HDV; undetectable HBV DNA for at least 2 years; quantitative HBsAg <100 IU/mL; and dependable follow-up. If initially HBeAg positive, HBeAg loss with anti-HBe positivity must have persisted for at least 1 year. This is a specialist shared decision based on very-low-certainty evidence, not a routine stopping rule.

Replacement: For HBeAg-negative adults, AASLD 2025 conditionally favors continuing therapy until HBsAg loss. Its implementation criteria for selected withdrawal include no advanced fibrosis/cirrhosis, prior decompensation, HCC, extrahepatic HBV disease, HIV, or HDV; undetectable HBV DNA for at least 2 years; quantitative HBsAg <100 IU/mL; and dependable follow-up. If initially HBeAg positive, HBeAg loss with anti-HBe positivity must have persisted for at least 1 year. The guideline's evidence question involved at least 3 years of NA therapy and 2 years of suppression, while Figure 4 describes 3 years of suppression. Reconcile timing with the treating hepatologist; the shortest interval is not an automatic stopping rule. This is a specialist shared decision based on very-low-certainty evidence.

Source: AASLD2025 final R5/PICO/Table3/Figure4. Disposition: Final published original retains inconsistent withdrawal intervals; text now explicitly attributes implementation criteria and exposes the discrepancy rather than treating the shortest duration as a routine stopping rule.

#### HEP-53 · #advanced

Original: No bepirovirsen update was present.

Replacement: October 2026 HBV update: bepirovirsen FDA approved bepirovirsen (Hibsago) on October 20, 2026, after the AASLD guideline. It is added to nucleos(t)ide therapy in selected noncirrhotic adults treated for at least 6 months, with suppressed HBV DNA and HBsAg ≤3,000 IU/mL by an FDA-authorized test. Specialist selection and dependable laboratory access are essential. The FDA label specifies 300 mg subcutaneously (two 150 mg injections) twice weekly in weeks 1–2, 3–4 days apart, then weekly through week 24. Continue nucleos(t)ide therapy for at least 24 additional weeks; withdrawal requires all section 2.7 criteria and at least one year of close follow-up. Preserve HIV treatment when applicable. Contraindications include acute hepatic impairment, cirrhosis, and baseline platelets <100 × 109/L. Boxed warnings concern hepatic flares and thrombocytopenia. Obtain baseline viral, hepatic, platelet, and renal assessment, including eGFR and urine albumin-to-creatinine ratio. Minimum monitoring is platelets weekly, ALT/bilirubin weekly through week 12 then every other week, and eGFR every other week through week 24. Abnormal results require the label's intensified testing and interruption/discontinuation rules. No dose adjustment is recommended for mild renal impairment; safety data are insufficient in moderate/severe renal impairment, pregnancy, and HCV coinfection. HDV coinfection and concomitant peginterferon are not recommended. Review anticoagulants, antiplatelets, platelet-lowering drugs, and nephrotoxic drugs. Hold treatment and obtain platelets promptly for new bleeding; unexplained immune-mediated toxicity requires permanent discontinuation. This is a distinct labeled pathway, not permission for routine antiviral withdrawal.

Source: HIBSAGO2026 FDA approval; FDA label1–2/4/5/7/8/14. Disposition: New approved option after the 2025 guideline, narrowly scoped to label population and safety requirements. No efficacy percentage or broadly applicable cure claim added. Includes holding treatment and prompt platelet testing for new bleeding.

#### HEP-54 · #refs

Original: Ghany MG, et al. AASLD/IDSA Practice Guideline on Treatment of Chronic Hepatitis B. Hepatology. Published November 4, 2025. Figure 5 and Table 4 accessed October 31, 2026.

Replacement: Ghany MG, et al. AASLD/IDSA Practice Guideline on Treatment of Chronic Hepatitis B. Published online November 4, 2025; final publication, Hepatology. 2026;83:974–997. Figure 5 and Table 4 accessed October 31, 2026.

Source: AASLD2025 final publication. Disposition: Adds an accessible original final publication while retaining the issuing-society manuscript link and original access-date history. No clinical-review date changed.


### Second verification and integration handoff

The author reread the actual edited module and reopened exception-sensitive passages after editing, including the final AASLD R3/R5/Table 3/Figures 2–4, ASCO hormonal-only and monitoring alternatives, HCV compensated-cirrhosis/Y93H/renal exclusions, decompensated prior-failure tables, ribavirin contraindications, Epclusa acid-suppression and organ-impairment sections, TDF severe renal limits, and the new Hibsago safety and cessation sections. The entire final HBV/HCV text was reread for altered numbers, units, intervals, and conflicting repeats.

A separate antimicrobial reviewer independently read the saved module and full primary sources. Completed peer findings so far confirm the HCV doses/durations, pathway exclusions, Y93H, acid-suppression order, AGA/ASCO qualifications, final AASLD stopping inconsistency, and all saved Hibsago paragraphs. Peer requests for pregnancy testing, the Epclusa combined-organ-impairment evidence gap, and baseline Hibsago urine albumin-to-creatinine ratio have been incorporated. The reviewer is finishing the remaining whole-module comparison; final disposition will be appended rather than inferred from this interim statement.

All original lecture IDs, cross-lecture destinations, and existing navigation/styles are intended to remain stable. Parent integration owns full preparation, link-hash manifest review, browser desktop/mobile/print behavior, repository validation, commit, deployment, and live-byte verification. No technical success is used as proof of clinical verification.


#### HEP-55 · #advanced

Original: Continue nucleos(t)ide therapy for at least 24 additional weeks

Replacement: Continue nucleos(t)ide therapy for at least 24 weeks after the last bepirovirsen dose

Source: HIBSAGO2026 FDA announcement and label section 2.7. Disposition: the integrating reviewer requested an explicit time origin; the FDA announcement specifies at least 24 weeks after the last injection. The intended duration is unchanged.

### Final source-gap resolution and completed hepatitis disposition

This final subsection supersedes the interim access-gap and pending-peer statements earlier in the hepatitis continuation. Both the author and independent reviewer have now completed the published-scope clinical comparison. The revised hepatitis lecture passes that clinical verification, with the guideline inconsistencies and evidence limitations described in its text and this record. This is an educational-source review, not faculty approval, institutional endorsement, or certification of patient-specific prescribing.

The two original papers supporting the qualified HBsAg/anti-HBs coexistence explanation became accessible in full during the independent pass. Both reviewers directly read methods, results/tables, discussion, and relevant limitations. The [Zhang 2007 original article](https://www.researchgate.net/publication/6415002_Coexistence_of_Hepatitis_B_Surface_Antigen_HBsAg_and_Heterologous_Subtype-Specific_Antibodies_to_HBsAg_among_Patients_with_Chronic_Hepatitis_B_Virus_Infection), DOI 10.1086/513200, is the author's full-text upload of the Clinical Infectious Diseases paper. Its 411 consecutive treatment-naive Chinese patients had HBeAg-positive active CHB; 20 were dual-positive in three assays. Only three were serially followed for 12 months. The study found heterologous subtype-specific antibodies and did not find greater substitution frequency than in its 26 sequenced anti-HBs-negative controls. These results do not justify declaring that every dual-positive patient has an escape mutant.

The [Ali 2024 original full article](https://pmc.ncbi.nlm.nih.gov/articles/PMC11125813/), DOI 10.3390/v16050713, describes a single-center retrospective cohort with 45 dual-positive patients among 2,178 screened and only 24 sequenced; 11 lacked detectable DNA and 10 lacked sufficient serum. Twelve sequenced patients had alpha-determinant mutations. The small, predominantly Asian selected cohort lacked an anti-HBs-negative control group, and treatment during follow-up limited causal interpretation. The lecture therefore retains only possible reported explanations and explicitly states that serology alone cannot identify the mechanism. No numerical cohort effect or patient-specific mechanism was inferred. These full-text reads close the prior mechanism-source gap; the 2017/2006 papers remain supplementary access-limited material, not necessary support for the final published statement.

Source metadata correction: the PEGASYS DailyMed set ID d9290e5b-6d40-2318-e053-2995a90a9916 currently says updated 16 October 2026, with prescribing information revised December 2023. The earlier 7 July date in the source table was inaccurate and is superseded here. Both reviewers reopened the current page; the relevant renal, route, contraindication, and monitoring provisions remain as recorded.

The direct publisher page for the 2025 HCC critical update remains inaccessible. Its issuing-page/primary indexed text establishes that it changes adjuvant treatment, outside this lecture's treatment scope; the complete original 2023 surveillance guidance and final 2025/2026 HBV surveillance recommendations were directly read. This access limitation does not leave a published surveillance recommendation dependent on an unread treatment update. Likewise, no B-Well efficacy percentages are taught, so no claim of a separate complete original B-Well trial reanalysis is made; the newly taught bepirovirsen eligibility, regimen, precautions, and monitoring were checked in the full FDA label.

Independent review completed for the full published AGA risk table, ASCO exceptions/durations, final AASLD treatment/monitoring/withdrawal/HCC passages, CDC serology, EASL HDV testing, HCV diagnostic and treatment pathways, and relevant current drug-label sections. Every peer correction was incorporated, including pregnancy testing, Epclusa's combined severe-renal/decompensated evidence gap, bepirovirsen baseline urine albumin-to-creatinine ratio, and the explicit NA continuation time origin. No remaining concrete dosing, interval, duration, or eligibility contradiction was identified. Faculty review should retain the explicitly unresolved internal AASLD duration/boundary differences rather than resolve them by editorial assertion.

Focused technical checks passed before handoff: git diff whitespace check, all 12 original IDs preserved with no duplicates, all relative/local-anchor targets resolved, and existing script/style counts unchanged. Full desktop/mobile/print, repository validation, hash manifest, deployment and live-site checks remain the integrating reviewer's responsibility. No review dates were advanced by this author. Lecture content is released to integration and frozen pending a concrete blocker.

## Independent verification of the HIV pritelivir addition

Reviewer: bacterial-syndromes reviewer. Accessed November 4, 2026. This is a subsequent source check of the integrating editor's saved two-paragraph addition after the advanced OI table, including its immediate context and label link. It is not a new complete HIV-module review.

The previous published content only advised that nonhealing HSV raises concern for resistance and needs culture/susceptibility testing and expert treatment. It contained no pritelivir statement and no falsely outdated claim that the drug remained investigational. The existing severe-HSV/disseminated-VZV row, including IV acyclovir and renal/organ assessment, is unchanged.

The reviewer independently read the [October 9, 2026 FDA approval announcement](https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-drug-treat-lesions-caused-herpes-simplex-virus) and the entire [October 2026 FDA prescribing information](https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/221154Orig1s000lbl.pdf), all 17 pages. After the editor saved the text, the reviewer reopened the label and rechecked sections 1–8 and 14 against each added claim. Full primary labeling was accessible. No separate complete PRIOH-1 journal report or protocol was read in this check, and no trial efficacy percentage was added to the lecture.

The saved indication is limited to immunocompromised adults with refractory mucocutaneous HSV, with or without documented resistance. Dose, oral route, food instructions and healing-based duration agree with section 2. The PPI restrictions, H2-blocker timing, antacid separation and BCRP interaction warning agree with sections 2, 5 and 7. Renal/hepatic qualifications, missing pregnancy/lactation data and reported headache/transaminase elevations agree with sections 6 and 8. Section 14 confirms exclusion of ocular, CNS and disseminated HSV; the text appropriately does not extend the indication to those syndromes or VZV. No new prescribing preference over foscarnet was inferred.

The [original NIH HSV chapter](https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/herpes-simplex), updated July 14, 2025 and reviewed March 16, 2026, was read through original issuing-site indexed text for its treatment-failure and resistant-HSV sections. Its investigational/expanded-access description predates the FDA approval. The addition is explicitly a regulatory update rather than an attributed new NIH recommendation.

Disposition: the two saved paragraphs and citation pass this bounded clinical and editorial verification. No correction was needed after rereading. The reviewer made no HIV HTML edits. This finding does not establish a whole-HIV clinical pass, advance a clinical review date, verify commercial availability, or replace final technical/deployment checks.
