# Perspectivity Landing Page — Redesign Plan

> Branch: `feat/redesign` · Status: **proposal, no code yet**
> Source artifacts read for this plan:
> - Pitch deck: `Docs/Pitch/Perspectivity_Pitch_Bangladesh_15Jun2026.pdf` (13 slides)
> - Competitor screenshots: `Docs/Perspectivity_Competitor_Products/` (Graphika, Blackbird.AI, Dataminr, Alethea, Cyabara, Logically, Meltwater)
> - Mockup artifacts: `Docs/Perspectivity_NarrativeIntelligence_Mockup/` (A–E lens screens, L1 The Stack, L2 Boardroom, The EANAT Model)
> - Current site code: `app/page.tsx` + 16 components

---

## 1. The fundamental gap

**The current site is a Ground News-style consumer landing page.** It sells one product (multi-perspective news) to one audience (curious citizens). It's headlined by *"Expose Media Bias Before It Shapes Your Mind."*

**The pitch deck sells a different company.** Perspectivity is a **Narrative Intelligence Platform** — the Bloomberg model: free B2C news app on top, paid B2B terminal underneath. Primary revenue is **institutional licensing** to newsrooms, election monitors, NGOs, and research labs. The deck headlines: *"News is only the surface. We map the hidden structure of public narratives."*

These are not the same product positioning. The current site only shows the surface — it leaves the actual revenue engine (the institutional terminal) invisible to the people who would buy it.

**This redesign aligns the site with the pitch.** The new site leads with the institutional product (the EANAT engine, five lenses, demo CTA) and uses the live consumer app as proof — the inverse of today.

---

## 2. What the pitch actually says (the source of truth)

Distilled from the 13-slide deck:

| Slide | Concept | Anchor copy |
|---|---|---|
| 01 | Hero | "News is only the surface. We map the hidden structure of public narratives — who pushes what, what's disputed, what's amplified or suppressed, and how it all moves over time." |
| 02 | The problem | "A citizen sees headlines. The real story is everything underneath." → Coordinated framing · Strategic silence · Manufactured fade · "Perspectivity is that lens." |
| 03 | The solution | "An AI-native narrative intelligence platform" across News · YouTube · Commentators · Institutions · Politicians · Social. *"News is the surface. Underneath lies a structure of actors, incentives, affiliations, and recurring narratives — and that structure is computable."* |
| 04 | Product — EANAT | **E**vent → **A**ctor → **N**arrative → **A**ffiliation → **T**ime. "Five layers, one chain of intelligence." |
| 05 | Five intelligence layers | Event · Actor · Narrative · Affiliation · Time-series → **one knowledge graph** |
| 06 | Business model | **Two faces. One engine.** Public app (B2C, free, distribution) · Institutional layer (B2B, paid, **primary revenue**). *"The Bloomberg model — free news on the surface, the terminal underneath."* |
| 07 | Market | $30B by 2028 (Gartner). Validated by Recorded Future ($2.65B → Mastercard) and Dataminr ($4.1B peak). TAM/SAM/SOM: global narrative intel → multilingual & Global South → Bangladesh + diaspora beachhead. |
| 08 | Competition | **"Built where the incumbents are blind."** A 2×2: Public+Transparent × AI-native content-reader = **empty quadrant occupied only by Perspectivity**. "Incumbents sell secrecy, in English. We're public, multilingual, content-native — in markets they can't read." |
| 09 | Growth | Launch & loop → Pilots & retention → Depth & expansion. **Bangladesh (proof) → US non-English (wedge) → emerging democracies.** "Our outputs are our marketing." |
| 10 | Traction | Thousands of active users, 29K+ FB followers, millions of social views, live on iOS+Android (Drishtikon → Perspectivity). |
| 11 | Revenue | Institutional licensing (primary) · Consumer Pro (secondary) · Data & API. Year 1 $50K → Year 5 $1.5M. |
| 12 | Team | AZ (PhD Purdue, ex-Cisco, BongLLaMA author) + NI (lead engineer Chittagong). |
| 13 | Vision | "Make the hidden structure of public narrative visible to everyone." |

**Two things to lock from the deck and never let the site drift from:**
1. The product is the **EANAT model + one knowledge graph**, not "6 AI agents."
2. The buyer is **institutional**, not consumer. The consumer app is the distribution & proof layer — the demo CTA is the conversion goal.

---

## 3. What the mockups give us (the visual vocabulary)

The `NarrativeIntelligence_Mockup/` folder contains the most important asset of the redesign: **five live lens mockups (A–E) and three explainer screens (L1, L2, EANAT).** Each lens screen is a directly portable React surface that gives the site a *"see the product"* moment competitors cannot match.

| Mockup | What it shows | Site role |
|---|---|---|
| **A — Narrative Graph** | Per-outlet framing analysis. Fox News framing of the war powers vote, omissions, coordinated-framing detection ("near-identical framing to NY Post within 24h"). | Lens 2 (Narrative). Headline mockup. |
| **B — Event Prism** | One event, five framings (Left → Left-Center → Center → Right-Center → Right). Each frame: headline + emphasis + omission. | Lens 1 (Event). The "wow" image of the homepage. |
| **C — Stance Drift** | One actor (Tarique Rahman, BNP), 12-month timeline. Softening, Hardening, Contradictions flagged. | Lens 3 (Actor over time). |
| **D — Narrative Momentum** | Top 5 narratives ranked: Rising / Fading / **Suppressed**. "Iran struck first" amplified by right, absent from 13 left+center. | Lens 4 (Narrative-time). |
| **E — Affiliation Network** | Bangla-script Jonomot TV ownership graph: RJSC filing, party-alleged, ideology-confirmed, alliance-confirmed, confidence scores. | Lens 5 (Affiliation). Also doubles as Bangla/multilingual proof. |
| **L1 — The Intelligence Stack** | Full 5-layer explainer with "Only Perspectivity shows you" callouts per layer. | Source content for the EANAT section copy. |
| **L2 — Boardroom slide** | Tight 5-card grid. *"Closer to Palantir for narratives — or a Bloomberg Terminal for public discourse — than a news app."* | Source content for the executive summary band. |
| **The EANAT Model** | E→A→N→A→T pipeline graphic with arrows + content samples per stage. | The signature interactive on the new homepage. |

**Design language locked from these mockups:** Newsreader serif for display, Hanken Grotesk sans for body, Noto Serif Bengali for the Bangla example. Navy `#16273F`, ink `#1B1E26`, green-deep `#0E7A50`, green `#16A06B`, faint `#97A0AD`, line `#E4E7EC`. These supersede the current Inter / Instrument-Sans / lime-green palette.

---

## 4. What competitors are doing (and where the gap is)

I went through every screenshot in `Perspectivity_Competitor_Products/` plus the Graphika product video. Pattern:

| Competitor | Headline | Solutions menu | CTAs | Visual |
|---|---|---|---|---|
| **Graphika** ⭐ | "The Decision Intelligence Platform for **Complex Digital Environments**" | Use Cases × Industries (Scam, Trust & Safety, Brand, Crisis, Cyber, Geopolitical, Audience × Financial, Gov, Tech, Media, Agencies, Retail) | Request a Demo / Explore Use Cases | Dark navy/purple, network globe, "Powered by Graphika's AI World Model." Sequence: *Turn questions into intelligence → Monitor evolving conversations → Understand how narratives spread → See the digital world differently.* "A continuously evolving view of Emerging Narratives, Connected Communities, Influential Actors, Growing Momentum." |
| **Blackbird.AI** | (narrative use cases) | 14 use cases: Crisis, Labor Relations, Executive Targeting, Physical Security, Financial Markets, Cyber, Geopolitical, Brand, M&A, Stock Manipulation, Supply Chain, Insider Threat, ESG, Brand Protection | Book a Demo | Dark green / teal |
| **Dataminr** | "Architect of Real-Time…" | Use Cases × Products × Partners (Diplomatic, Emergency, Executive, Law Enforcement, Cyber, Travel, Supply Chain, Insurance) | Request a Demo | Dark blue / black, code aesthetic |
| **Alethea** | "The Leader in AI Risk Management Innovation" | Use Case × Industry × Role (CCO, CSO, CISO) | (demo) | White, calm, executive deck |
| **Cyabra** | (orange + white) | Industry × Role × Use Case (Disinformation, Coordinated Inauthentic Activity, Deepfake, Election Monitoring, Foreign Interference) | Request Demo | White + orange |
| **Logically** | (services + solutions) | Outcome × Industry × Partner Ecosystem | Talk to an Expert | Light teal/cyan |
| **Meltwater** | "Intelligence you can act on" | Use Case × Org Type (AI Visibility, Brand Monitoring, Consumer Intel, Media Relations, Influencer ROI) | Request a Demo / Discover Meltwater AI | Bright purple/orange gradient |

**Pattern that wins in this market:**

1. **Dark hero** with glowing globe / network / particle field. Light hero = consumer; dark hero = enterprise.
2. **Display sans + bold tagline** in the form *"[verb] [noun] in/for [complex situation]."*
3. **Mega-menu Solutions** split by **Use Case × Industry × Role** — this is table-stakes in this category. Our current site has zero.
4. **"Request a Demo" or "Book a Demo"** as the primary CTA. Never "Sign Up" or "Try Free" for the institutional surface.
5. **Persona-targeted copy** for CCO / CSO / CISO / Comms Lead / Trust & Safety Lead / Research Director.
6. **One signature visual** — Graphika's evolving globe + the live "Health and Fitness Map" network. We have a *better* signature available: the EANAT pipeline + 5 live lens mockups.

**Where Perspectivity wins** (and where the site must say so loudly):
- **Public + multilingual + content-native.** Every competitor here is private, English-first, and sells source-metadata rather than reads content. The "empty quadrant" from slide 8 is real, defensible positioning.
- **Bangla + Global South coverage.** Mockup E (Bengali Jonomot TV affiliation) is unrepeatable proof for any incumbent.
- **A live consumer app with 29K followers and millions of views.** Graphika has none; Blackbird has none; Dataminr has none. Our distribution proof is unique in the category.

---

## 5. New site IA

The site flips. **Lead with the institutional product. Use the consumer app as live proof.**

```
┌─ Header
│  Logo  ·  Platform  ·  Solutions ▾  ·  Resources ▾  ·  Pricing  ·  Company ▾
│                                                    [Sign in]  [Request a Demo]
│
├─ 1.  HERO  (dark navy, rotating EANAT globe, Newsreader serif display)
│      Eyebrow: NARRATIVE INTELLIGENCE PLATFORM
│      H1:      News is only the surface.
│               We map the hidden structure beneath it.
│      Lede:    Who pushes what, what's disputed, what's amplified
│               or suppressed, and how it moves over time.
│      CTAs:    [Request a Demo]  [Explore the Platform →]
│      Below:   Live · 29K+ followers · millions of social views ·
│               iOS + Android shipped
│
├─ 2.  THE PROBLEM  (light section, slide 2 ported)
│      "A citizen sees headlines. The real story is everything underneath."
│      Three problem cards (icons + 2 lines each):
│        · Coordinated framing  — 5 channels, identical language in 24h
│        · Strategic silence    — who stayed conspicuously quiet
│        · Manufactured fade    — amplified 3 days, then buried
│      Side panel: "The intelligence gap" → "Perspectivity is that lens."
│
├─ 3.  THE SOLUTION — THE EANAT ENGINE  (dark, signature interactive)
│      H2:    Five layers. One chain of intelligence.
│      Interactive horizontal pipeline (scroll-driven):
│        E ▸ Event           [happened]
│        A ▸ Actor           [involved]
│        N ▸ Narrative       [generated]
│        A ▸ Affiliation     [discovered]
│        T ▸ Time-change     [occurred]
│      Below: "One knowledge graph. From a single event to a longitudinal
│             map of who moved, when, and why."
│      Pattern: each letter expands to a mini-card on hover/scroll;
│               sticky scrub anchors the headline; reduced-motion fallback
│               renders all five as a static row.
│
├─ 4.  SEE IT IN ACTION — FIVE LENSES  (alternating image-left / image-right)
│      Real product surfaces ported from mockups A–E:
│        4.1  Event Prism         — one event, five framings (mockup B)
│        4.2  Narrative Graph     — per-outlet frame + coordinated-framing
│                                   alert (mockup A)
│        4.3  Stance Drift        — actor over time, contradictions
│                                   flagged (mockup C)
│        4.4  Narrative Momentum  — Rising · Fading · Suppressed (mockup D)
│        4.5  Affiliation Network — ownership graph (mockup E, Bangla
│                                   example — multilingual proof)
│      Each lens row: title · 1-sentence verb · what it answers ·
│                     the mockup image · "Only Perspectivity shows you …"
│
├─ 5.  WHO IT'S FOR  (mega solutions, indexed for the mega-menu in §10)
│      By Role          By Use Case                    By Industry
│      ─────────────────────────────────────────────────────────────
│      Newsroom         Election Integrity             Newsrooms & Media
│      Research Lead    Coordinated Framing Detection  Election Monitors
│      Trust & Safety   Foreign Influence Tracking     NGOs & Civil Society
│      Comms / PR       Crisis Communications          Academic Research
│      Threat / Risk    Narrative Risk Monitoring      Government & Defense
│                       Stance Tracking                Multinational Comms
│
│      Each cell is a future landing page. Today: the section displays
│      the 3-column grid with one-line value per role/use-case/industry.
│
├─ 6.  WHERE WE'RE BUILT  (positioning quadrant, slide 8 ported)
│      H2:    Built where the incumbents are blind.
│      2×2:   x = Private Intel  ↔  Public & Transparent
│             y = Source Metadata  ↔  AI-Native Content-Reader
│      Quadrants:
│        Top-Left:    Blackbird · Cyabra · Graphika · Recorded Future
│        Bottom-Left: Meltwater · legacy media monitoring
│        Bottom-Right: Ground News · AllSides · NewsGuard
│        Top-Right:   Perspectivity (highlighted)
│      Caption: "Incumbents sell secrecy, in English. We're public,
│                multilingual, content-native — in the markets they
│                can't read."
│
├─ 7.  TWO FACES, ONE ENGINE  (slide 6 ported — the B2B2C model)
│      H2:    Two faces. One engine.
│      Side-by-side:
│        Public app (B2C · Free)        Institutional layer (B2B · Paid)
│        · Multi-perspective news       · Actor graphs, narrative timelines
│        · Narrative tab                · API · dashboards · historical query
│        · Drives reach + data flywheel · Newsrooms, monitors, NGOs, platforms
│        · Consumer Pro upsell          · Where the revenue lives
│      Tagline: "The Bloomberg model — free news on the surface,
│                the terminal underneath."
│      Buttons: [Try the consumer app — Perspectivity]
│               [Try the consumer app — Drishtikon]
│               [Request a demo of the terminal]
│
├─ 8.  LIVE PROOF  (slide 10 ported — the moat that competitors can't claim)
│      H2:    Live. Used. Growing.
│      Big numbers:
│        Thousands   — active users
│        29,000+     — Facebook followers
│        Millions    — social video views
│        Live        — shipped on iOS + Android
│      App screenshots + the "Drishtikon → Perspectivity" sentence:
│        "Already in real users' hands in one of the world's hardest
│         media markets."
│
├─ 9.  THE MARKET  (slide 7 ported — for investors + institutional buyers)
│      $30B+ enterprise spend on countering misinformation and narrative
│      intelligence by 2028 (Gartner).
│      Validated by exits: Recorded Future $2.65B (Mastercard) ·
│      Dataminr $4.1B peak private valuation.
│      TAM / SAM / SOM block.
│
├─ 10. TEAM  (slide 12 ported)
│      AZ — Founder & CEO  ·  NI — Co-founder & Lead Engineer.
│      Photographs replace the AZ / NI monograms when available.
│
├─ 11. FINAL CTA BAND  (dark, vision-slide tone)
│      H2:    See the machine the headlines hide.
│      Buttons: [Request a Demo]  [Talk to the founders]  [Try the app]
│
├─ 12. FAQ
│      Rewritten for the institutional audience:
│        · What sources do you cover?
│        · How do you handle source confidence and provenance?
│        · What does the API expose?
│        · Pricing for newsrooms / NGOs / research labs?
│        · Languages supported today and on the roadmap?
│        · How is this different from Ground News, Graphika,
│          Blackbird, Dataminr?
│
└─ Footer
   Product · Solutions · Resources · Company · Legal
   Live consumer apps row (Perspectivity, Drishtikon)
```

### 5.1 Header mega-menu (Solutions ▾)

Modeled on Graphika / Alethea / Cyabra:

```
USE CASES                       INDUSTRIES                  ROLES
─────────────────────────       ─────────────────────────   ─────────────────
Election Integrity              Newsrooms                   Editor / Newsroom Lead
Coordinated Framing             Election Monitors           Research Director
Foreign Influence               NGOs & Civil Society        Trust & Safety
Crisis Communications           Academic Research           Communications / PR
Narrative Risk Monitoring       Government & Defense        Risk / Threat Intel
Stance & Affiliation Tracking   Multinational Comms
```

Each cell links to a future Solutions page; v1 of the redesign ships the menu structure pointing to scroll anchors on the homepage.

### 5.2 Section ↔ pitch slide mapping (for sanity)

| Section | Pitch slide | Source mockup |
|---|---|---|
| 1. Hero | 01 (vision/title) | EANAT model graphic |
| 2. Problem | 02 | — |
| 3. EANAT engine | 04 | `The EANAT Model.html` |
| 4. Five lenses | 05 | A · B · C · D · E |
| 5. Who it's for | 06 (B2B side) + competitor mega-menu | — |
| 6. Positioning quadrant | 08 | — |
| 7. Two faces | 06 | — |
| 8. Live proof | 10 | Mobile app screenshots |
| 9. Market | 07 | — |
| 10. Team | 12 | — |
| 11. Final CTA | 13 | — |
| 12. FAQ | new | — |

Every section ports content already in the deck or the mockup folder. **There is no new copy to invent** — only positioning to lift from the pitch.

---

## 6. What gets retired or repurposed

| Today | Disposition |
|---|---|
| `HeroSection` — "Expose Media Bias Before It Shapes Your Mind" | **Replaced.** Becomes the new institutional hero (§1). Consumer-facing copy moves to section 7 (Two Faces) and section 8 (Live Proof). |
| `TrendingTopics` (live topic chips, server-fetched) | **Repurposed.** Moves to section 8 (Live Proof) as a "see what's live right now" strip — it's tangible evidence the engine ingests real data. |
| `InformationCrisisSection` ("86% can't identify biased news") | **Replaced** by §2 (the deck's three-card problem framing). |
| `HowItWorksSection` | **Replaced** by §3 (the EANAT engine — the actual product narrative). |
| `FeaturesSection` (6 AI agents grid) | **Replaced** by §4 (Five Lenses with the mockup screens). The "6 AI agents" framing dilutes the EANAT story. |
| `ComparisonShowcase` | **Replaced/folded** into §6 (positioning quadrant) — the quadrant is a stronger competitive frame than a feature table. |
| `DemoSection` (Loom video) | **Kept**, moved adjacent to §8 (Live Proof). |
| `TeamSection` | **Kept**, structurally unchanged — refresh content to match slide 12. |
| `FinalCTASection` | **Rewritten** for institutional CTAs (Request Demo first; Try the app secondary). |
| `FaqAccordion` | **Content rewrite** for the institutional buyer; keep the component shell. |
| `NewsMarquee` | **Kept** as a live-data signal under §8 Live Proof, not the hero. |
| `Header` | **Solutions mega-menu added**; nav reordered to match Graphika/Alethea pattern. |

---

## 7. Design system shift

The current site uses Inter / Instrument-Sans, a lime-green primary (`#10b981`), and a generally light surface. That reads consumer-SaaS. The pitch deck and lens mockups already use a different system, and it reads institutional. We adopt the deck's system as the source of truth.

| Token | Current | New (from deck + mockups) |
|---|---|---|
| Display font | Instrument Sans | **Newsreader (serif)** |
| Body / UI font | Inter | **Hanken Grotesk** |
| Bangla font | — | **Noto Serif Bengali** (for the Affiliation lens + multilingual proof) |
| Mono (labels) | — | IBM Plex Mono or Roboto Mono |
| Surface — dark | `#23272E` (only in cards) | **Navy `#16273F`** + ink `#1B1E26` (hero, signature sections) |
| Surface — light | `#FAFAFA` | Off-white `#FAFAFA` + line `#E4E7EC` |
| Primary accent | Green `#10b981` | **Deep blue (deck headers) + amber `#E0A030`** (sparingly, for accent words) |
| Secondary accent | Coral `#ea384c` | **Green-deep `#0E7A50` / Green `#16A06B`** (kept from lens mockups for "confirmed" / "rising" states) |
| Muted text | secondary-500 `#6A788D` | Muted `#616B7A` · Faint `#97A0AD` |

Dark sections (§1 Hero, §3 EANAT engine, §11 Final CTA) use navy `#16273F` + white type. Light sections (§2 Problem, §4 Lenses, §6 Quadrant, §7 Two Faces, §9 Market) use off-white + ink. This rhythm matches the pitch deck slides 1/2 alternation.

---

## 8. Build phasing (no code yet — this lists the work order once we start)

Once this plan is approved, build in this order. Each phase ships independently behind the same `feat/redesign` branch.

| Phase | Scope | Output |
|---|---|---|
| **0** | This document + decisions list | `REDESIGN_PLAN.md` + a follow-up `DECISIONS.md` once you've reacted |
| **1** | Tokens + hero | Adopt Newsreader/Hanken/navy palette; rewrite `HeroSection` to the institutional version (§1). Highest leverage — positioning shift in one PR. |
| **2** | EANAT engine | Build `EANATPipeline` interactive (§3) using motionfold's sticky-scroll pattern from the CE compass. Replaces `HowItWorksSection`. |
| **3** | Five lenses | Port mockup A–E as static React surfaces, two-column rows, alternating layout. Replaces `FeaturesSection`. The "see the product" moment. |
| **4** | Problem + Two Faces + Positioning quadrant + Live Proof | Replace `InformationCrisisSection` and `ComparisonShowcase`; add `TwoFacesSection`, `PositioningQuadrant`, `LiveProofSection`. |
| **5** | Header mega-menu + Market + Team + Final CTA + FAQ rewrite | Bring `Header` to category parity; rewrite `FinalCTASection` and `FaqAccordion` for institutional copy. |
| **6** | Solutions sub-pages (post-launch) | One landing page per role/use-case/industry cell. Out of scope for v1. |

---

## 9. Decisions to lock before Phase 1

These are the gate. They are not implementation choices — they are positioning calls that the founder/owner should sign off on.

| # | Decision | Recommendation |
|---|---|---|
| **D1** | Headline copy. Do we adopt the deck verbatim ("News is only the surface. We map the hidden structure of public narratives") or vary it? | **Adopt verbatim.** It's already the strongest sentence in the company. |
| **D2** | Primary CTA. "Request a Demo" first, or balanced with "Try the app"? | **Request a Demo first.** Try the app is secondary; it's the proof, not the conversion. |
| **D3** | Solutions mega-menu structure. Use Case × Industry × Role (Alethea/Cyabra pattern) or a flatter list? | **Three-column mega-menu.** Category convention; competitors do it, buyers expect it. |
| **D4** | Design tokens. Newsreader + Hanken + navy/amber (deck) vs. evolve current Inter + green palette. | **Adopt deck tokens.** They already exist; consistency between pitch and site is itself a credibility signal. |
| **D5** | Bangla example (mockup E) on the public homepage? | **Yes.** Multilingual is the moat. Bangla as Lens 5 is the proof. |
| **D6** | Consumer app cards (Perspectivity / Drishtikon). Keep on the homepage hero or demote to §7? | **Demote to §7 Two Faces.** They distract from the institutional positioning above the fold. |
| **D7** | Pricing page. Public or "Talk to us"? | **"Talk to us" (request-demo)** for v1 — matches Graphika/Blackbird/Dataminr. Public pricing comes later when consumer Pro tier launches. |
| **D8** | Do we keep the news marquee in the hero? | **Move to Live Proof (§8).** It's evidence the data layer is real — it shouldn't compete with the headline. |

---

## 10. Bottom line

The current site is selling a consumer news app. The pitch is selling an institutional narrative-intelligence platform with a consumer app as proof. The redesign is **not a visual refresh** — it is a positioning correction. The Bloomberg model becomes legible only if the site leads with the terminal and uses the news app as the trust-and-distribution layer.

We already have every asset we need:
- The pitch deck supplies the copy.
- The 8 mockups supply the visuals (especially mockups A–E for the lens section).
- Motionfold + framer-motion are already wired from the prior session.
- The current React component scaffolding is reusable for ~60% of the structure (Header, Footer, FAQ, Team, Demo are kept; sections are swapped or rewritten).

This is a one-week build, not a rebuild. The gate is §9 (Decisions).
