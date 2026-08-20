# Beverly Portfolio

**Last Updated:** 2026-08-11  
**Status:** Active development — Variant Laboratory phase  
**Read this before making portfolio changes.**

---

# Objective

Create an adaptable professional portfolio that can communicate different facets of Beverly's multidisciplinary career depending on audience and opportunity.

The portfolio is not a single CV. It is a **positioning engine** that presents the same professional reality through multiple lenses, each optimized for a specific audience, market context, or opportunity type.

---

# Core Positioning

Beverly operates at the intersection of:

| Domain | Evidence |
|--------|----------|
| **Business** | MBA, executive support, stakeholder management |
| **Operations** | SAP Regional Lead, process standardization, KPI frameworks |
| **Revenue** | LinkedIn Deal Desk, CPQ, Salesforce, forecasting, pricing |
| **Customer Success** | SAP Customer Success Partner, renewal optimization, churn prevention |
| **Technology** | Salesforce, CPQ, Tableau, Excel, AI/automation, workflow tools |
| **Data** | Reporting accuracy +25%, dashboard design, A/B testing, analytics |
| **Science** | BSc Medical Laboratory Science, analytical rigor, process discipline |
| **International Experience** | Kenya ↔ Spain, three continents, English/Swahili/Spanish |

The portfolio must make these intersections visible without forcing a single narrative.

---

# Current Stage

## Implementation Status

| Component | Status | Notes |
|-----------|--------|-------|
| Canonical content model | **Complete** | `docs/CONTENT_MODEL.md` — single source of truth for all factual data |
| Variant system architecture | **Complete** | CSS custom properties + `data-section` attributes + JS restructuring |
| 7 variants implemented | **Complete** | Default, Strategist, Revenue, Bridge, Healthcare, Global, Venture |
| 8 variants implemented | **Complete** | Default, Strategist, Revenue, Bridge, Healthcare, Global, Venture, Elegance |
| Structural variant system | **Complete** | Each variant has distinct information architecture, not just colors |
| Navigation architecture | **Complete** | Primary nav (top) + variant toolbar (bottom) — no overlap |
| Design DNA pattern library | **Complete** | 32 documented patterns across 7 categories |
| Experiment ledger | **Complete** | 25 experiments recorded with status and transferable ideas |
| Variant isolation rules | **Complete** | `docs/VARIANT_ISOLATION.md` — prevents cross-variant contamination |
| Regression tracking | **Complete** | `docs/REGRESSIONS.md` — logs variant isolation failures |
| Content layer extraction | **Pending** | Canonical data still embedded in HTML; needs JSON/markdown layer |
| Build pipeline | **Pending** | Manual HTML editing; no static site generator |
| Component system | **Pending** | HTML patterns not yet extracted into reusable components |
| Content variant support | **Pending** | Variants can hide/show sections but cannot override copy |
| Analytics integration | **Pending** | No variant performance tracking |

## What Exists Now

- `index.html` — Locked prototype (canonical design reference)
- `variant.html` — Variant Laboratory with 7 variants, structural changes, and toolbar
- `explorer.html` — Variant overview page
- `docs/PORTFOLIO_AUDIT.md` — Complete architectural audit
- `docs/CONTENT_MODEL.md` — Canonical data model with transformation rules
- `docs/VARIANT_SYSTEM.md` — Variant specifications, design theses, navigation architecture
- `docs/DESIGN_DNA.md` — 32 reusable design patterns with transfer methodology
- `docs/EXPERIMENTS.md` — 25 documented experiments with decisions
- `docs/VARIANT_ISOLATION.md` — Variant isolation rules and testing protocol
- `docs/REGRESSIONS.md` — Regression tracking for variant isolation failures

## What Is Missing

- Separate content layer (JSON/markdown) so variants don't duplicate HTML
- Variant-specific copy overrides (currently only visual/layout changes)
- Build process to compile variants from components + content
- Accessibility audit (skip links, reduced-motion, ARIA states)
- Performance optimization (font loading, image optimization)

---

# Variants

| Variant | Purpose | Audience | Status | Design Thesis |
|---------|---------|----------|--------|---------------|
| **Default** | Canonical balanced profile | General business audience | **Stable** | Confident, premium, comprehensive. The reference point. |
| **Strategist** | Strategic operator | C-suite, board members, enterprise | **Stable** | Ultra-minimal executive brief. Authority through reduction. |
| **Revenue** | Revenue/GTM specialist | RevOps, sales leaders, commercial | **Stable** | Dark mode dashboard. Data-forward, high-energy, deal-room aesthetic. |
| **Bridge** | Business-technology translator | Engineering leaders, CTOs, technical | **Stable** | System-map layout. Monospace, grid-precise, technical documentation feel. |
| **Healthcare** | Health operations strategist | HealthTech, MedTech, healthcare SaaS | **Stable** | Clinical journal. Green/white, scientific restraint, outcome-oriented. |
| **Global** | International professional | Spanish/European companies, cross-border | **Stable** | European magazine. Italic headlines, elevated languages, editorial sophistication. |
| **Venture** | Independent operator/venture partner | Startup founders, opportunity-seeking | **Stable** | Opportunity board. Warm, conversational, collaborative, personal brand. |
| **Strategic Elegance** | Premium editorial interpretation | C-suite, board members, enterprise | **Stable** | Premium editorial. Dark ink, warm ivory, muted gold. Refined, confident, timeless. |

### Variant Status Definitions

| Status | Meaning |
|--------|---------|
| **Stable** | Implemented and validated. No major changes expected. |
| **Experimental** | Being tested. May change or be removed. |
| **Proposed** | Designed but not yet implemented. |
| **Deprecated** | Removed or superseded by another variant. |

---

# Current Best Ideas

These are the design ideas currently considered strongest and most likely to be retained or transferred:

1. **Bottom toolbar for variant exploration** — Solves the navigation overlap problem cleanly. Top = primary nav, bottom = variant exploration. No z-index conflict.
2. **Section curation as positioning** — Hiding non-essential sections (Strategist hides 5 of 9) is more powerful than showing everything. What remains carries more weight.
3. **Dark mode + amber + giant metrics for data audiences** — Revenue variant proves this formula works. Immediate recognition as data-forward.
4. **Monospace + grid + bordered cards for technical audiences** — Bridge variant creates system-diagram credibility without actual diagrams.
5. **Elevating unique differentiators** — Global variant's elevated languages band is a transferable technique. Make unique capabilities visually prominent.
6. **Pattern library over monolithic CSS** — Design DNA enables surgical borrowing. "Transfer Revenue's metrics treatment to Healthcare" without copying Revenue's hero, typography, or layout.
7. **Experiment ledger** — Institutional memory prevents repeating failed experiments and makes design decisions explicit.
8. **Canonical content model** — Separating facts from presentation enables variant experiments without data corruption risk.

---

# Current Problems

## UX Problems

1. **No skip-to-content link** — Keyboard users must tab through all navigation to reach main content.
2. **No reduced-motion support** — Metric counter animation and reveal animations may cause vestibular issues.
3. **Variant toolbar on mobile** — 7 buttons in a row is tight. May need horizontal scroll or abbreviation strategy.
4. **Service accordion on mobile** — Expand/collapse pattern may be problematic on touch devices.
5. **No visual indication of variant switching** — Users may not notice the page restructured when switching variants.

## Content Problems

1. **Content duplicated across files** — `index.html` and `variant.html` share identical HTML bodies. Changes must be made in two places.
2. **No variant-specific copy layer** — Variants can hide/show sections but cannot override hero copy, summary text, or CTA wording.
3. **Experience entries are monolithic** — Cannot show different roles per variant without CSS hacks.
4. **No content validation** — No automated check that canonical data is preserved across variants.

## Technical Problems

1. **Single-file architecture** — 4,300+ line HTML files are hard to maintain. No modular CSS or JS.
2. **No build process** — Deployment is manual. No linting, no type checking, no optimization.
3. **CSS specificity risk** — As variants grow, `!important` may be needed to override. Should be avoided.
4. **JavaScript duplication** — Main IIFE is duplicated between index.html and variant.html.
5. **No error boundaries** — JavaScript errors in one IIFE can break other functionality.
6. **Image dependency** — `headshot.jpg` must be manually deployed alongside HTML.

## Architectural Problems

1. **No content layer** — All content is hardcoded in HTML. Cannot reuse content across variants efficiently.
2. **No component system** — Repeated HTML patterns (service items, role cards, engagement cards) are copy-pasted.
3. **Variant CSS is monolithic** — Each variant's CSS is a single block. Hard to see what each variant changes.
4. **No variant composition** — Cannot say "this variant uses patterns A, B, C" without manual CSS selection.

---

# Decisions

## Architectural Decisions

| Decision | Rationale | Date | Status |
|----------|-----------|------|--------|
| **CSS custom properties for visual variants** | Instant switching, no JS required, cascade works naturally | 2026-08-11 | Accepted |
| **`data-section` attributes for structural variants** | Enables CSS + JS show/hide without duplicating HTML | 2026-08-11 | Accepted |
| **JavaScript `restructureForVariant()` for DOM changes** | CSS alone cannot reorder DOM; JS needed for section visibility | 2026-08-11 | Accepted |
| **Bottom toolbar for variant explorer** | Resolves overlap with primary navigation without z-index warfare | 2026-08-11 | Accepted |
| **Two navigation systems, separate edges** | Primary nav (top) + variant toolbar (bottom) — clear ownership | 2026-08-11 | Accepted |
| **Canonical content model in markdown** | Single source of truth for factual data; variants cannot corrupt | 2026-08-11 | Accepted |
| **Design DNA pattern library** | Enables surgical borrowing of successful treatments between variants | 2026-08-11 | Accepted |
| **Experiment ledger** | Institutional memory; prevents repeating failed experiments | 2026-08-11 | Accepted |
| **No `!important` in variant CSS** | Maintainability; specificity should be managed through selector strategy | 2026-08-11 | Accepted |
| **No variant-specific HTML structure** | Shared HTML, variant-specific styling via CSS/JS | 2026-08-11 | Accepted |

## Rejected Approaches

| Approach | Why Rejected | Date |
|----------|--------------|------|
| **Top-right floating panel for variants** | Competed with primary navigation for same territory | 2026-08-11 |
| **Dropdown from nav item for variants** | Hides variants behind interaction; reduces discoverability | 2026-08-11 |
| **Side drawer for variants** | Adds friction; variants should be immediately accessible | 2026-08-11 |
| **Top toolbar for variants** | Creates second top bar; visually noisy | 2026-08-11 |
| **Shrinking primary navigation** | Compromises usability; primary nav is sacred | 2026-08-11 |
| **CSS-only structural changes** | Cannot reorder DOM or hide/show arbitrary sections | 2026-08-11 |
| **Separate HTML files per variant** | Content duplication; maintenance nightmare | 2026-08-11 |
| **JavaScript framework** | Over-engineering for static site; no build step currently | 2026-08-11 |

---

# Next Experiments

Keep this section short — maximum 5 items.

1. **Variant-specific copy layer** — Allow variants to override hero subtitle, summary text, and CTA without changing canonical data. Currently only visual/layout changes are possible.

2. **Accessibility audit** — Add skip-to-content, reduced-motion media query, ARIA state validation. Required before production.

3. **Mobile toolbar refinement** — Test 7-button toolbar at 360px, 390px, 430px. Determine if horizontal scroll, abbreviation, or "more" menu is needed.

4. **Content layer extraction** — Move canonical data from HTML to JSON files. Variants consume JSON instead of hardcoded HTML.

5. **Pattern class system** — Add pattern classes to HTML elements (`.hero-split-editorial`, `.metrics-giant-numbers`) to enable composable variant construction.

---

# Completed

| Milestone | Date | Notes |
|-----------|------|-------|
| Locked prototype (`index.html`) | 2026-08-11 | Canonical design reference. Do not modify. |
| Variant system v1 (CSS-only) | 2026-08-11 | Color/font changes via `data-variant` attribute |
| Navigation architecture fix | 2026-08-11 | Moved variant selector to bottom toolbar |
| Variant Laboratory v2 | 2026-08-11 | Structural changes via `data-section` + JS |
| 7 variants implemented | 2026-08-11 | Each with distinct information architecture |
| Design DNA pattern library | 2026-08-11 | 32 patterns documented with transfer methodology |
| Experiment ledger | 2026-08-11 | 25 experiments recorded with decisions |
| Content model documentation | 2026-08-11 | Canonical data separated from presentation |
| Deployment to GitHub Pages | 2026-08-11 | `thealmikey.github.io/portfolio/` |

---

# Rejected

| Idea | Why Rejected | Date |
|------|--------------|------|
| **Treating variants as color themes** | Variants are positioning experiments, not skins. The original approach only changed colors and fonts. | 2026-08-11 |
| **Separate HTML files per variant** | Content duplication creates maintenance nightmare. One source of truth is required. | 2026-08-11 |
| **CSS-only structural changes** | CSS cannot reorder DOM or hide arbitrary sections. JavaScript is required for true information architecture experiments. | 2026-08-11 |
| **Top-right variant panel** | Created overlap with primary navigation. Established that two navigation systems must not compete for the same viewport territory. | 2026-08-11 |
| **Shrinking primary navigation** | Compromises usability. Primary navigation is sacred and must remain at default size. | 2026-08-11 |
| **JavaScript framework** | Over-engineering for a static portfolio. Current vanilla HTML/CSS/JS is sufficient. | 2026-08-11 |
| **Automatic content generation** | Beverly's career narrative requires human judgment. Automated content generation would produce generic output. | 2026-08-11 |
| **Single "best" variant** | The point is multiple interpretations. Choosing one variant defeats the purpose of the system. | 2026-08-11 |

---

# Project Structure

```
C:\Users\user\Desktop\Bev\
├── index.html                 # Locked prototype — DO NOT MODIFY
├── variant.html               # Variant Laboratory — all 7 variants
├── explorer.html              # Variant overview page
├── headshot.jpg               # Portrait image
├── Beverly_Nasimiyu_E_B_Partner_CV.pdf
├── deploy.ps1                 # Deployment script
├── deploy.sh                  # Bash deployment script
├── docs/
│   ├── PORTFOLIO_PROJECT.md   # This file — read first
│   ├── PORTFOLIO_AUDIT.md     # Architectural audit
│   ├── CONTENT_MODEL.md       # Canonical data model
│   ├── VARIANT_SYSTEM.md      # Variant specifications and architecture
│   ├── VARIANT_ISOLATION.md   # Variant isolation rules
│   ├── DESIGN_DNA.md          # Pattern library (32 patterns)
│   ├── EXPERIMENTS.md         # Experiment ledger (25 experiments)
│   └── REGRESSIONS.md         # Regression tracking
└── content/                   # (Proposed) Future content layer
    ├── person.json
    ├── experience.json
    ├── education.json
    ├── capabilities.json
    ├── outcomes.json
    ├── services.json
    └── engagement-models.json
```

---

# Key Principles

1. **Canonical data is inviolable** — Variants may reinterpret, but never alter, factual information.
2. **Primary navigation is sacred** — Must remain accessible, unobstructed, and at default size.
3. **Variants are experiments, not themes** — They change information architecture, not just colors.
4. **Variant isolation is mandatory** — A change to one variant must never affect another. See `docs/VARIANT_ISOLATION.md`.
5. **Patterns over duplication** — Successful ideas should be transferable without copying entire variants.
6. **Document everything** — Every meaningful change gets an experiment entry.
7. **No `!important`** — Specificity should be managed through selector strategy.
8. **Accessibility is non-negotiable** — All variants must maintain WCAG AA compliance.
9. **Mobile-first responsive** — All variants must work at 360px viewport width.
7. **Accessibility is non-negotiable** — All variants must maintain WCAG AA compliance.
8. **Mobile-first responsive** — All variants must work at 360px viewport width.

---

# How to Work on This Project

1. **Read `docs/PORTFOLIO_PROJECT.md`** (this file) — Understand current state and decisions.
2. **Read `docs/VARIANT_ISOLATION.md`** — Understand variant isolation rules before making any variant changes.
3. **Read `docs/EXPERIMENTS.md`** — Understand prior experiments and their outcomes.
4. **Read `docs/REGRESSIONS.md`** — Understand prior isolation failures and how they were fixed.
5. **Read `docs/VARIANT_SYSTEM.md`** — Understand variant architecture and constraints.
6. **Read `docs/DESIGN_DNA.md`** — Understand available patterns before creating new ones.
7. **Read `docs/CONTENT_MODEL.md`** — Understand what data is canonical and immutable.
8. **Make changes** — Follow the variant architecture, pattern system, and isolation rules.
9. **Test thoroughly** — Modified variant, Default, at least one unrelated variant, navigation, mobile, desktop.
10. **Log experiments** — Add EXP entry to `docs/EXPERIMENTS.md` for meaningful changes.
11. **Log regressions** — If a change affects an unintended variant, add REG entry to `docs/REGRESSIONS.md`.
12. **Extract patterns** — If a treatment is successful, document it in `docs/DESIGN_DNA.md`.

---

*This document is the single source of truth for project-level decisions. When in doubt, update this document before making changes.*
