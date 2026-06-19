# Redesign Decisions — Lock Before Phase 1

> Companion: [`REDESIGN_PLAN.md`](./REDESIGN_PLAN.md) · Branch: `feat/redesign`
> Status: **LOCKED 2026-06-16 — all recommended options adopted.** Phase 1 (hero + tokens) building.

How to use: pick an option per row (or amend with your own). Once D1–D4 are ✅, Phase 1 (hero + tokens) starts. The remaining decisions can be locked during Phase 1.

---

## D1 — Hero headline 🔴 BLOCKER

The single most important sentence on the site.

- **Option A (recommended):** Adopt the deck verbatim — *"News is only the surface. We map the hidden structure of public narratives — who pushes what, what's disputed, what's amplified or suppressed, and how it moves over time."*
- **Option B:** Punchier, more consumer-readable — *"See the story beneath the story."* (loses the institutional positioning)
- **Option C:** Action verb in the Graphika mold — *"Turn fragmented narratives into decision-ready intelligence."* (sounds generic; we lose what makes us different)

**Status:** ✅ LOCKED (recommended)

---

## D2 — Primary CTA 🔴 BLOCKER

- **Option A (recommended):** Primary `[Request a Demo]` · Secondary `[Explore the Platform →]` (scrolls to EANAT). Consumer app links demoted to §7. *Matches every B2B competitor (Graphika, Blackbird, Dataminr, Alethea, Cyabra, Meltwater).*
- **Option B:** Balanced — `[Request a Demo]` + `[Try the app]` co-equal. (Weakens institutional positioning.)
- **Option C:** Consumer-first as today — `[Try Perspectivity]` + `[Try Drishtikon]` + `Request demo` link. (Status quo. Hides the actual product we sell.)

**Status:** ✅ LOCKED (recommended)

---

## D3 — Solutions mega-menu 🔴 BLOCKER

- **Option A (recommended):** Three-column mega-menu — **Use Case × Industry × Role**. Header `Solutions ▾` opens it on hover. Matches Alethea, Cyabra, Logically, Dataminr.
- **Option B:** Flat dropdown of 6–8 solution links. (Easier to ship; weaker than competitors; no role-based discovery.)
- **Option C:** No solutions menu — solutions live only on the homepage scroll. (Loses search-traffic destinations.)

**Status:** ✅ LOCKED (recommended)

---

## D4 — Design tokens 🔴 BLOCKER

- **Option A (recommended):** Adopt the **deck + mockup system** as canonical — Newsreader serif (display) + Hanken Grotesk (body) + Noto Serif Bengali (multilingual), navy `#16273F` + ink `#1B1E26` + amber `#E0A030` accent, green-deep `#0E7A50` retained for "confirmed"/"rising" states. Same system across pitch deck, lens mockups, and site = compound credibility.
- **Option B:** Evolve current — keep Inter + Instrument Sans + green `#10b981`, just add navy backgrounds. (Site stays mismatched with pitch deck and mockups.)
- **Option C:** Blank-slate new system. (Highest cost; lowest leverage.)

**Status:** ✅ LOCKED (recommended)

---

## D5 — Bangla example on the homepage

- **Option A (recommended):** Yes — keep mockup E (Jonomot TV affiliation graph, Bengali script) as Lens 5 on the homepage. Multilingual is the moat; showing it is proof.
- **Option B:** Move Bangla example to a separate `/markets/bangladesh` page; English-only on homepage. (Hides the moat.)

**Status:** ✅ LOCKED (recommended)

---

## D6 — Consumer-app cards above the fold

- **Option A (recommended):** Demote the Perspectivity / Drishtikon product cards to §7 (Two Faces). Hero stays focused on institutional positioning + Request a Demo.
- **Option B:** Keep them in the hero. (Hero competes with itself between B2B and B2C messages.)

**Status:** ✅ LOCKED (recommended)

---

## D7 — Pricing visibility

- **Option A (recommended):** No public pricing in v1; pricing page = `[Talk to us]` form. Matches Graphika, Blackbird, Dataminr, Alethea. Reduces friction in early sales conversations and prevents anchoring.
- **Option B:** Publish institutional + Consumer Pro tiers now.
- **Option C:** Hide pricing entirely (no page).

**Status:** ✅ LOCKED (recommended)

---

## D8 — News marquee placement

- **Option A (recommended):** Move the live news marquee into §8 Live Proof. It's evidence the data layer is real, not the headline of the site.
- **Option B:** Keep it at the bottom of the hero. (Crowds the hero; competes with the CTA.)
- **Option C:** Remove entirely.

**Status:** ✅ LOCKED (recommended)

---

## Summary gate

| # | Decision | Blocker? | Recommended |
|---|---|---|---|
| D1 | Hero headline | 🔴 | Adopt deck verbatim |
| D2 | Primary CTA | 🔴 | `Request a Demo` primary |
| D3 | Solutions mega-menu | 🔴 | Use Case × Industry × Role |
| D4 | Design tokens | 🔴 | Adopt deck + mockup system |
| D5 | Bangla on homepage | — | Yes (Lens 5) |
| D6 | Consumer cards above fold | — | Demote to §7 |
| D7 | Pricing | — | "Talk to us" only in v1 |
| D8 | News marquee | — | Move to §8 Live Proof |

**Blockers D1–D4 ✅ → Phase 1 (hero + tokens) starts.**
