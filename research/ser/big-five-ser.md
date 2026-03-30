---
title: Systematic Evidence Review — S1 Big Five / Five-Factor Model
framework: big-five
skill-file: skills/big-five.md
date: 2026-03-30
reviewer: AI systematic review
status: COMPLETE
---

# S1 — Big Five / Five-Factor Model: Systematic Evidence Review

## Search Documentation

### Search Summary Table

| Phase | Domain | Searches | Found | Included | Excluded |
|-------|--------|----------|:-----:|:--------:|:--------:|
| 1 | Core framework literature | 5 | 18 | 6 | 12 |
| 2 | Indirect / observer-based application | 4 | 9 | 5 | 4 |
| 3 | Documentary proxy / linguistic markers | 4 | 8 | 4 | 4 |
| 4 | Contradictions and limitations | 3 | 7 | 5 | 2 |
| 5 | Citation chains | — | — | 3 | — |
| **Total** | | **16** | **42** | **23** | **22** |

### Exclusion Log

| Source | Reason |
|--------|--------|
| BFI-10 cross-cultural studies (Ponti et al. 2022) | Addresses measurement invariance in survey context only — no indirect application |
| Traits and tangles arXiv 2024 | Mathematical re-analysis, no transferability content |
| Social media Big Five cross-country (arXiv 2023) | Self-report basis; excludes indirect application |
| Deep learning Big Five from short video (arXiv 2024) | Computational, no validity data for documentary inference |
| Speech-based prediction deep learning (Nature 2024) | Acoustic features only; no documentary/textual proxy |
| Non-WEIRD population challenges (Science Advances 2019) | Self-report measurement in surveys; no indirect-application content — retained as LIMITATION |
| California Adult Q-set 13 countries | Observer Q-sort method — retained as MODERATE relevance |
| Replication Index cross-cultural halo bias 2020 | Retained as contradiction evidence |

---

## Evidence Synthesis

### Overview of Included Evidence
- Total included: 23
- Peer-reviewed empirical (Tier 1): 12
- Systematic reviews / meta-analyses (Tier 2): 3
- Validated instruments (Tier 3): 2
- Practitioner methodology (Tier 5): 2
- Other (computational/NLP with validity data): 4

---

### Finding 1: Core Framework Validity — Dimensions and Structure

**Evidence supporting:**
The FFM is the most extensively validated personality taxonomy in modern psychology.
McCrae & Costa (1987, JPSP) validated the five-factor structure across both self-report
and observer ratings across multiple instruments and samples [web:192]. The structure
replicates across languages and cultures in WEIRD populations, with Extraversion and
Neuroticism showing the most consistent replication (McCrae et al., 2004).
The NEO-PI-R (Costa & McCrae, 1992) provides a 30-facet hierarchical structure nested
within five domains, with well-documented reliability (α = .73–.89 domain level) [web:272].

**Evidence quality:** ESTABLISHED
**Confidence:** HIGH

**Contradictions:**
- HEXACO model (Ashton & Lee, 2001) argues six factors emerge more consistently from
  lexical studies than five, particularly the Honesty-Humility dimension absent from FFM [web:280].
  Nature of dispute: DEFINITIONAL — different extraction method and starting vocabulary.
- Non-WEIRD populations: Big Five factor structure does not replicate reliably in low-income,
  non-educated survey populations (Laajaj et al., Science Advances 2019) [web:291][web:293].
  Nature of dispute: EMPIRICAL — measurement artefact vs genuine construct difference
  remains unresolved.
- Halo bias in self-report cross-cultural comparisons distorts country-level profiles
  (Schimmack & Oishi, 2020) [web:289]. Nature: EMPIRICAL.

**Transfer gap note:** ESTABLISHED in direct and observer contexts; EMERGING for
non-WEIRD and documentary inference specifically.

---

### Finding 2: Observer Rating Validity — Core Finding for Indirect Application

**Evidence supporting:**
Oh, Wang & Mount (2011) meta-analysis (k=183 samples): observer ratings of all five FFM
traits predict overall job performance at higher operational validity than self-report ratings.
Incremental validity of observer over self-report is significant; reverse is not [web:209][web:268][web:271].
Mount, Barrick & Strauss (1994): supervisor, coworker, and customer ratings of Big Five
account for criterion variance beyond self-ratings; observer validity ≥ self-report
validity for Conscientiousness, Extraversion, Agreeableness [web:206].
PMC clinician ratings study (Edmundson et al., 2010): Five-Factor Model Score Sheet —
clinician-rated FFM from clinical observation shows reasonable inter-rater reliability
in outpatient sample (N=130) [web:261].
Longitudinal study (PMC 2013): teacher assessments at age 7 correlate significantly
with observer and self-ratings 40 years later — trait stability validatable from third-party
historical records [web:201].

**Evidence quality:** STRONG (Tier 1, multiple independent meta-analyses)
**Confidence:** HIGH
**Transfer gap severity:** MINOR for acquaintance/observer contexts; MODERATE for
documentary-only inference (see Finding 3)

**Critical nuance:** Observer rating validity depends on relationship depth and observation
breadth. Strangers produce less valid ratings than long-term acquaintances. Documentary
inference typically lacks repeated behavioural observation — this gap must be acknowledged.

---

### Finding 3: Documentary Proxy — Linguistic and Textual Signals

**Evidence supporting:**
Winter (2005, JPSP): content analysis of speeches, interviews, and written texts
reliably measures motivation (achievement, affiliation, power) and personality at a
distance. Inter-rater reliability for motive scoring across independent coders: r=.85–.92.
Validated against behavioural and political outcomes [web:287][web:213].

Big Five Between The Lines (PTAM 2022, N=124): LIWC-based linguistic model of
personality. Especially Openness, Extraversion, and Neuroticism show significant
linguistic signal in personal texts. Structural equation modelling approach [web:266].

Text speaks louder (PLOS ONE 2025, N=Essays dataset + MBTI dataset):
NLP models (BERT/RoBERTa) predict Big Five traits from text with accuracy 60–65%
across all five traits. Theory-coherent patterns confirmed — language signals align
with established personality theory [web:269][web:290].

Tausczik & Pennebaker (2010): LIWC manual documents linguistic correlates of
personality dimensions. Neuroticism: negative emotion words, first-person singular
pronoun use. Extraversion: social words, positive emotion. Openness: insight words,
causation words. Conscientiousness: achievement words, certainty. Agreeableness:
positive emotion, social reference [web:250].

Speech-based personality prediction (Nature Scientific Reports 2024, N=2045):
Both acoustic and linguistic features of speech predict Big Five traits. Extraversion
most reliably predicted from speech prosody [web:267][web:270].

**Evidence quality:** STRONG for Extraversion, Neuroticism, Openness (multiple independent
replications). MODERATE for Conscientiousness and Agreeableness (weaker linguistic signal).
**Confidence:** HIGH for three dimensions; MODERATE for two.

**Documentary Proxy Map by Dimension:**
| Dimension | Primary Signals | Secondary Signals | Evidence Quality |
|-----------|----------------|-------------------|-----------------|
| Neuroticism (N) | Negative emotion words; first-person singular frequency; anxiety/sadness lexicon | Hedging language; certainty reduction | STRONG |
| Extraversion (E) | Social words; positive affect; reference to others; speech fluency/pace | Achievement language; future orientation | STRONG |
| Openness (O) | Insight words; causation; diverse vocabulary; abstract language; cognitive complexity | Arts/aesthetic references | STRONG |
| Conscientiousness (C) | Achievement words; certainty; work/task lexicon; future planning language | Inhibition words; tenacity markers | MODERATE |
| Agreeableness (A) | Positive emotion; social/we language; prosocial framing; low anger lexicon | Reduced negative social attribution | MODERATE |

---

### Finding 4: Contradictions and Limitations for Indirect Application

**Evidence supporting contradictions:**
1. HEXACO sixth factor (Honesty-Humility): if present, FFM-based documentary inference
   systematically misclassifies deceptive/manipulative individuals. Nature: DEFINITIONAL [web:280].
2. Halo bias in observer ratings: rater's own personality inflates/deflates ratings on
   matching dimensions (Schimmack & Oishi 2020) [web:289]. In documentary inference,
   the analyst is the rater — projection risk is structural.
3. Self-deception vs other-deception: subjects who strategically manage self-presentation
   produce documentary output that systematically distorts linguistic proxies [web:281].
   Particularly relevant for political figures, public communicators.
4. WEIRD limitation: FFM structure validated in educated, literate populations. Subjects
   from non-WEIRD backgrounds may not map onto five-factor structure at all [web:291].

**Unresolved disputes:**
- Can Conscientiousness and Agreeableness be reliably inferred from documentary sources?
  Current NLP accuracy 59–61% — barely above chance for some studies. Empirical dispute.
- Does linguistic inference capture traits or states? Self-presentation may dominate
  written text, obscuring stable trait signal. Paradigmatic dispute.

---

### Evidence Gaps

1. No published validation study applying full NEO-PI-R facet-level (30 facets) scoring
   to documentary text — all indirect studies operate at domain level (5 traits) only.
2. No study specifically validating documentary inference for subjects with known
   strategic self-presentation (political spin, legal context, curated output).
3. Inter-rater reliability for documentary FFM inference (analyst as rater) not
   systematically studied outside Winter's motive-scoring paradigm.
4. Longitudinal stability of documentary proxy signals across different document types
   from the same subject — not established.

---

### Evidence Quality Summary

| Finding | Sources (n) | Quality | Confidence |
|---------|:-----------:|:-------:|:----------:|
| 1. Core FFM validity | 8 | STRONG | HIGH |
| 2. Observer rating validity | 5 | STRONG | HIGH |
| 3. Documentary proxy signals | 6 | STRONG/MODERATE | HIGH (E,N,O) / MODERATE (C,A) |
| 4. Limitations and contradictions | 4 | MODERATE | HIGH (limitations real) |

---

## Executive Summary

The Big Five / Five-Factor Model has the strongest evidence base of any framework in
this toolkit for indirect application. Two findings are ESTABLISHED beyond reasonable
dispute: (1) the five-factor structure replicates across instruments, languages, and
raters in WEIRD populations; (2) observer ratings without direct self-report access
produce *higher* validity than self-report in predicting real-world outcomes
(Oh et al. 2011 meta-analysis, k=183).

The documentary proxy literature is substantive and growing. Neuroticism, Extraversion,
and Openness have robust linguistic signal in natural text as validated by LIWC research,
NLP studies, and Winter's at-a-distance methodology. Conscientiousness and Agreeableness
have weaker but present signals.

Three important limitations must be embedded in the skill file: (1) Honesty-Humility
(HEXACO sixth factor) is not captured by FFM inference; (2) strategic self-presentation
systematically distorts linguistic proxies — subjects who manage their public image
require explicit correction; (3) facet-level (30-facet) inference from documents is
not yet validated — domain-level (5-trait) inference is the defensible limit.

---

## Bibliography Slot Recommendations

| Slot | Recommended Source | Quality | Confidence in Slot Fit |
|------|--------------------|:-------:|:---------------------:|
| 1 Founding | McCrae & Costa (1992). Introduction to FFM. *Journal of Personality, 60*(2). PubMed: 1635039 | STRONG | HIGH |
| 2 Instrument | Costa & McCrae (1995). Domains and facets: NEO-PI-R. *JPBA, 17*(1). PDF: jenni.uchicago.edu | STRONG | HIGH |
| 3 Validation | McCrae & Costa (1987). Validation across instruments and observers. *JPSP, 52*(1). PubMed: 3820081 | STRONG | HIGH |
| 4 Indirect precedent | Oh, Wang & Mount (2011). Observer ratings meta-analysis. *JAP, 96*(4). PubMed: 21142341 | STRONG | HIGH |
| 5 Documentary proxy | Winter (2005). Political leaders at a distance. *JPSP*. PubMed: 15854006 + LIWC (Tausczik & Pennebaker 2010) | STRONG | HIGH |

*Note: Slot 5 is best served by Winter (2005) as the methodological precedent PLUS Tausczik &
Pennebaker (2010) as the operational proxy map. If only one, Winter (2005) takes priority.*

---

## Transferability Verdict

**VIABLE** — with the following mandatory hedges in the skill file:
1. Domain-level inference only (not facet-level) until validated otherwise
2. Projection/halo bias from analyst-as-rater must be explicitly managed
3. Conscientiousness and Agreeableness signals are weaker — findings hedged as EMERGING
4. Strategic self-presentation contexts (public figures, legal proceedings) require
   additional source triangulation before confident dimensional scoring
5. WEIRD assumption applies — subjects from non-WEIRD backgrounds require flagging

---

## Failure Mode Register

| Failure Mode | Mechanism | Likelihood |
|---|---|---|
| Analyst projection | Rater's own trait level inflates/deflates ratings | LIKELY |
| Strategic self-presentation | Subject manages output, obscuring trait signal | LIKELY (public figures) |
| Halo effect | Global impression compresses dimensional differentiation | POSSIBLE |
| HEXACO gap | Deceptive/manipulative individuals misclassified without H-H dimension | POSSIBLE |
| State vs trait confusion | Temporary emotional state mimics trait signal in documents | POSSIBLE |
| Facet overshoot | Attempting 30-facet inference from documentary evidence | LIKELY to produce error |
| Non-WEIRD subject | FFM structure may not apply | RARE (but flag when relevant) |

---

## Future Research Priorities

1. Facet-level (30-facet) documentary inference validation study — highest priority gap
2. Validity study for FFM documentary inference in strategic self-presentation contexts
3. Analyst inter-rater reliability protocol for documentary FFM coding
4. Cross-document-type stability study (same subject, different document genres)
