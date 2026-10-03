# JoySpend copy review delivery

2026-10-02. Website edits completed locally. Store replacement text prepared. Nothing deployed, pushed, submitted or published. Mobile runtime, products, prices, entitlements, data handling and analytics settings were not changed. Existing user files were preserved.

## Material before/after changes

| Before | After |
|---|---|
| Abstract mindful-spending lead | Practical benefit: know your spending and find what feels worthwhile |
| 1–5 transaction rating and star artwork | Four emotion tags, Joyful default described; calculated amount-weighted score explained separately |
| Fully offline / instant all-device backup | Core manual tracking offline; signed-in cloud sync, AI, purchases and rate refreshes need internet |
| Exact unverified paid prices, seven-day trial, 30 trial messages | In-app local offer is authoritative; eligibility, auto-renewal and cancellation explained; exact prices/quotas omitted |
| Everything free forever; paid plans underspecified | Free core explained first; Plus spending assistance and Pro goals clearly labelled paid |
| 100% private / never share / anonymous zero-collection cookie claim | Local records, Firebase sync, Google AI, diagnostics and subscription processing explained; consent wording corrected |
| Most popular plan and guaranteed outcomes | Neutral plan badge; explanations and planning without promises |
| Duplicated old marketing in comparison/blog pages and social image | Copy corrected across 12 marketing pages; neutral existing brand image replaces old social artwork references |

Deliverables: `store-listing-drafts.md` (separate Apple/Google text, all field counts and official policy sources), `claim-register.md` (release scope, evidence paths/lines and URLs, unresolved claims).

## Validation

- `npm run build:css`: passed. Existing Browserslist database warning; dependencies not updated for a copy task. Repository has no test or general build script beyond CSS compilation.
- `git diff --check`: passed.
- Static review of 12 marketing HTML pages: all local referenced links/assets/anchors exist, no duplicate IDs, JSON-LD parses, 15 inline JavaScript blocks pass `node --check`.
- Main FAQ structured data exactly matches six visible FAQ questions/answers.
- No legacy 1–5 selector, fully-offline, perpetual-free, absolute-private, numeric subscription price, seven-day-trial or 30-trial-message promises remain in updated marketing HTML. Legal policy is an intentional exception and is flagged.
- Store counts verified from exact fenced fields, including spaces/punctuation/internal newlines: Apple 25/30 name, 26/30 subtitle, 142/170 promo, 81/100 keyword bytes, 2418/4000 description. Google 25/30 name, 72/80 short description, 2461/4000 full description.
- Browser desktop (1280×720): hero and plans reviewed; no horizontal overflow, CTA rows align, revised pricing labels wrap; monthly/annual selection and summary work; no captured console errors.
- Mobile browser frames 375×844 and 390×844: hero, Free/Plus/Pro cards, trial FAQ and download CTA reviewed. Browser viewport override did not apply, so actual narrow iframe viewports were used. Body scroll width equals client width after correcting decorative badge overflow; no clipped text among headings, paragraphs or list items.
- Download URLs lead to both correct public store IDs. Fresh browser confirms iOS/Android 2.1.0; local policy/delete links resolve to existing files. Both public store privacy links currently lead to the homepage privacy section: flagged for a console update, not edited.
- Policy HTML, console declarations, old social artwork and public screenshots were not modified. Old social artwork requires replacement; paid screenshot captions need qualification and production captures. Full installed-app UI testing remains outstanding.

## Required before publication

1. Map each production binary and Expo OTA bundle to its exact commit. Candidate `3a0557c` is release-era evidence, not proven production mapping. Confirm emotion labels/default, core entitlements and sync in installed apps.
2. Inspect live RevenueCat/native store offerings for both tiers/periods/platforms. Verify trial eligibility/duration, renewal amounts/deadlines, and deployed message limits before adding exact figures. Conservative drafts contain no exact price/trial/quotas.
3. Reconcile legal policy and store privacy declarations with AI, diagnostics, purchase processing, caches and cloud providers. Update console privacy URLs only after a complete policy is reviewed. Do not interpret Google service-provider processing as automatically contradicting its sharing declaration.
4. Replace old social artwork and check every store screenshot/platform size against the production UI. New suggested captions identify paid AI; no screenshots were fabricated.

The current website still contains legal-policy claims inconsistent with this review because legal disclosures were explicitly excluded from silent modification. Resolve those conflicts before publishing the site or store text.

## User-confirmed pricing update

The user subsequently confirmed USD reference prices: Plus $5.99/month or $65.99/year; Pro $8.99/month or $89.99/year, and explicitly requested Free display “$0 / forever”. Homepage cards now use these amounts. Monthly/annual price values live in each card’s data attributes and drive the existing billing toggle. Region/currency/tax and offer qualifications remain next to the plans. This is user confirmation, not an independently retrieved RevenueCat offering; platform applicability was not specified. Earlier omissions and recommendations above describe the initial review, superseded for website pricing by this instruction. Trial duration/eligibility was not newly confirmed. Store drafts remain as prepared.
