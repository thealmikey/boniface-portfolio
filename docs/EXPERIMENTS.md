# Portfolio Design Experiment Ledger

**Version:** 1.0  
**Date:** 2026-08-11  
**Status:** Active  
**Purpose:** Institutional memory for all variant system design experiments. Future agents must read this file before modifying any variant.

**How to use this ledger:**
- Every meaningful variant change gets an EXP entry
- Status is one of: `ACTIVE`, `KEEP`, `REJECTED`, `SUPERSEDED`, `EXTRACTED`
- Do not delete experiments — mark their final status
- Before changing a variant, read related experiments to understand prior decisions

---

## EXP-001

**Name:** Variant Selector to Toolbar Rename  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Renaming "variant selector" to "variant explorer toolbar" will clarify its purpose as an exploration tool rather than primary navigation.  
**Change:** Renamed `.variant-selector` to `.variant-toolbar`, updated HTML comments and ARIA labels.  
**Why:** The term "selector" implied a form control; "toolbar" better communicates its role as an experimental navigation system.  
**Expected effect:** Clearer mental model for users and developers.  
**Observed effect:** No behavioral change; semantic clarity improved in code and documentation.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Naming conventions for navigation systems should reflect ownership and priority.  
**Related design pattern:** navigation/editorial, navigation/minimal

---

## EXP-002

**Name:** Bottom Toolbar Navigation Architecture  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Moving the variant explorer to the bottom of the viewport resolves the overlap conflict with primary navigation without reducing either system's usability.  
**Change:** Variant explorer moved from `top: 1rem; right: 1rem` to `bottom: 0; left: 0; right: 0`. Added `padding-bottom: 56px` to body.  
**Why:** Two navigation systems competing for the same top-right territory created z-index arms race and visual clutter. Bottom placement establishes clear ownership: top = primary navigation, bottom = variant exploration.  
**Expected effect:** No overlap, both nav systems fully accessible, no arbitrary z-index values needed.  
**Observed effect:** Primary navigation remains unobstructed. Variant toolbar is always visible and accessible. No content occlusion when body padding is set correctly.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Separate navigation systems by viewport edge to avoid ownership conflicts.  
**Related design pattern:** navigation/editorial, navigation/floating

---

## EXP-003

**Name:** Structural Variant System with data-section Attributes  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Marking major sections with `data-section` attributes enables CSS and JavaScript to control section visibility and order per variant, enabling true information architecture experiments beyond visual styling.  
**Change:** Added `data-section` attributes to hero, about, metrics, experience, expertise, services, education, languages, contact. Implemented `restructureForVariant()` JS function.  
**Why:** Previous variant system only changed colors and fonts via CSS custom properties. This limited variants to "themes" rather than "positioning experiments." Structural changes require DOM manipulation.  
**Expected effect:** Variants can hide/show sections, reorder content, and create meaningfully different layouts.  
**Observed effect:** Strategist hides metrics/services/education/languages. Revenue hides about/expertise/education/languages. Global elevates languages. Venture hides about/education/languages. Each variant now has distinct information architecture.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Use data attributes + JS restructuring to enable layout experiments without duplicating HTML.  
**Related design pattern:** layout/full-bleed, layout/contained, layout/asymmetric

---

## EXP-004

**Name:** Strategist Executive Brief — Section Curation  
**Variant:** Strategist  
**Date:** 2026-08-11  
**Hypothesis:** Ultra-minimal presentation (hiding 5 of 9 sections, showing only 3 of 11 roles) will communicate authority and strategic focus better than comprehensive coverage.  
**Change:** Hide metrics, services, education, languages, build-your-own, engagement models. Show only first 3 experience roles. Left-align hero. Remove hero statement.  
**Why:** C-suite audiences respond to reduction and confidence. Showing everything signals desperation. What remains carries more weight when context is removed.  
**Expected effect:** Faster comprehension of strategic positioning. Higher trust signal from editorial minimalism.  
**Observed effect:** Page feels authoritative and focused. Visitors see only the most relevant content for executive audiences. Whitespace signals confidence.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Section curation is a powerful positioning tool. Consider hiding non-essential sections in other variants.  
**Related design pattern:** hero/oversized-statement, experience/editorial-list, services/consulting-menu, layout/contained

---

## EXP-005

**Name:** Revenue Dark Mode Dashboard  
**Variant:** Revenue  
**Date:** 2026-08-11  
**Hypothesis:** Dark mode with amber accent and massive metrics will position Beverly as a revenue operator who speaks the language of deal rooms and commercial urgency.  
**Change:** Black background, amber accent, uppercase hero name, 3-5rem metric values, dark metric band, hidden date rail, compact role cards.  
**Why:** Revenue audiences (RevOps, sales leaders) respond to data-forward, high-energy aesthetics. Dark mode creates "deal room" atmosphere. Massive metrics communicate scale and confidence.  
**Expected effect:** Immediate recognition as revenue-focused. Higher engagement from commercial audiences.  
**Observed effect:** Metrics dominate the page. Dark/amber contrast creates commercial energy. Uppercase typography adds urgency. Role cards feel like dashboard widgets.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Dark mode + accent color + massive metrics is a repeatable formula for data-driven audiences. Consider for Bridge variant.  
**Related design pattern:** hero/oversized-statement, metrics/giant-numbers, services/bold-cards, layout/full-bleed

---

## EXP-006

**Name:** Bridge System Map Layout  
**Variant:** Bridge  
**Date:** 2026-08-11  
**Hypothesis:** Left-aligned hero with grid composition, monospace accents, and bordered metric cards will appeal to engineering leaders who respect precision and systems thinking.  
**Change:** Two-column hero grid (portrait left, content right), monospace section labels, 2-column metric cards with borders, bordered role cards, hidden date rail.  
**Why:** Technical audiences respond to grid precision, monospace typography, and system-diagram visual language. The page should feel like reading technical documentation about a person.  
**Expected effect:** Recognition as business-technology translator. Trust from engineering stakeholders.  
**Observed effect:** Page feels dense but organized. Monospace accents create technical credibility. Bordered cards feel like interface components. Left-aligned hero feels like a system diagram.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Monospace + grid + bordered cards is a transferable system aesthetic. Consider for Healthcare clinical view.  
**Related design pattern:** hero/system-map, metrics/dashboard-grid, experience/timeline, services/expandable-rows

---

## EXP-007

**Name:** Healthcare Clinical Journal Layout  
**Variant:** Healthcare  
**Date:** 2026-08-11  
**Hypothesis:** Green accent on white, italic serif name, 2-column metric grid, and left-border timeline will position Beverly as a healthcare operations strategist with scientific credibility.  
**Change:** White background, green accent, italic hero name, 2x2 metric grid, left-border experience timeline, clinical typography.  
**Why:** HealthTech/MedTech audiences respond to clinical aesthetics. Green = medical/science. White = cleanliness/precision. Italic serif = editorial authority. Timeline left-border = clinical documentation.  
**Expected effect:** Immediate recognition as healthcare-relevant. Trust from clinical audiences.  
**Observed effect:** Page feels like a medical journal or healthcare SaaS platform. Green accent creates clinical association. Metric grid feels like lab results. Timeline feels like patient chart.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Color-coded clinical aesthetics (green/white) are transferable to other regulated/analytical industries.  
**Related design pattern:** hero/split-editorial, metrics/outcome-cards, experience/timeline, services/expandable-rows

---

## EXP-008

**Name:** Global European Magazine Layout  
**Variant:** Global  
**Date:** 2026-08-11  
**Hypothesis:** Italic headlines, elevated languages section, editorial spacing, and European typography will position Beverly as an international professional operating across markets.  
**Change:** Italic hero name and section labels, languages elevated to border-separated band with uppercase tracking, italic dates, removed section-label ::before pseudo-elements.  
**Why:** European editorial design (Monocle, FT) uses italic headlines, generous whitespace, and cultural signaling. Languages section elevated to communicate international fluency explicitly.  
**Expected effect:** Recognition as globally fluent. Appeal to Spanish/European companies and cross-border ventures.  
**Observed effect:** Page feels like European business press. Italic typography creates editorial sophistication. Languages band signals international capability explicitly.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Elevating unique differentiators (languages, international experience) into prominent visual elements is a transferable positioning technique.  
**Related design pattern:** hero/split-editorial, experience/editorial-list, layout/asymmetric

---

## EXP-009

**Name:** Venture Opportunity Board Layout  
**Variant:** Venture  
**Date:** 2026-08-11  
**Hypothesis:** Left-aligned grid hero, italic warm typography, badge-style metrics, and card-based experience will position Beverly as an independent operator open to collaboration and venture partnership.  
**Change:** Two-column hero grid, hidden hero statement, italic summary, wrapped metric badges, bordered role cards, hidden about/education/languages sections.  
**Why:** Startup/venture audiences respond to warmth, collaboration signals, and personal brand aesthetics. The page should feel like a founder's personal brand, not an executive CV.  
**Expected effect:** Recognition as venture-friendly operator. Higher inbound from founders and startup executives.  
**Observed effect:** Page feels conversational and personal. Warm beige/amber palette creates approachability. Badge metrics feel like capability proof points. Card roles feel like collaboration opportunities.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Card-based layouts + warm palettes + conversational copy is transferable to any "independent operator" positioning.  
**Related design pattern:** hero/opportunity-hero, metrics/giant-numbers, services/bold-cards, layout/asymmetric

---

## EXP-010

**Name:** Design DNA Pattern Library Extraction  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Documenting reusable design patterns as named, composable units will enable pattern borrowing between variants without copying entire variant CSS blocks.  
**Change:** Created `docs/DESIGN_DNA.md` with 32 patterns across 7 categories, each with purpose, characteristics, suitability, dependencies, accessibility considerations, and implementation examples.  
**Why:** Previous approach required copying entire variant CSS to transfer a successful treatment. This coupled unrelated design decisions. Pattern library enables surgical borrowing.  
**Expected effect:** Faster variant development. Clearer design rationale. Reduced CSS duplication.  
**Observed effect:** Patterns are documented and categorized. Transfer methodology is clear. Variants can now be described as compositions of patterns.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Pattern extraction should happen after a treatment proves successful in at least one variant. Document before scaling.  
**Related design pattern:** All patterns in DESIGN_DNA.md

---

## EXP-011

**Name:** Duplicate JavaScript IIFE Cleanup  
**Variant:** variant.html  
**Date:** 2026-08-11  
**Hypothesis:** Removing duplicate IIFE blocks and consolidating variant switching logic will reduce maintenance burden and prevent behavioral inconsistencies.  
**Change:** variant.html had 3 separate `<script>` blocks. Consolidated to 2: main behavior IIFE + variant switching IIFE.  
**Why:** Duplicate code creates maintenance risk. When fixing bugs or adding features, changes must be made in multiple places.  
**Expected effect:** Single source of truth for each behavior. Easier maintenance.  
**Observed effect:** File is cleaner. Variant switching logic is isolated. Main behavior is in one block.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Always audit for duplicate code when creating variant systems. Consolidate shared behavior.  
**Related design pattern:** navigation/editorial

---

## EXP-012

**Name:** Body Padding for Toolbar Occlusion Prevention  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Adding `padding-bottom: 56px` to body will prevent footer/contact content from being hidden behind the fixed variant toolbar.  
**Change:** Added `padding-bottom: 56px` to body CSS.  
**Why:** Fixed bottom toolbar overlays page content. Without bottom padding, the last section's content is partially or fully hidden.  
**Expected effect:** All content remains visible and accessible. Footer/contact section is fully scrollable above toolbar.  
**Observed effect:** Content is no longer occluded. Footer is fully visible. Toolbar remains fixed at bottom.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Any fixed UI element must be accounted for in body padding/margin to prevent content occlusion.  
**Related design pattern:** layout/contained, navigation/floating

---

## EXP-013

**Name:** Variant Toolbar aria-pressed State Management  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Adding `aria-pressed` state management to variant buttons will improve accessibility for screen reader users.  
**Change:** Updated `setVariant()` JS function to toggle `aria-pressed` attribute on variant buttons. Added `aria-label` to toolbar.  
**Why:** Variant buttons are toggle controls. Screen readers should announce which variant is active.  
**Expected effect:** Screen readers announce active variant state. Improved accessibility compliance.  
**Observed effect:** Buttons correctly announce pressed/unpressed state. Toolbar has descriptive label.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** All toggle controls should use `aria-pressed`, not just visual state.  
**Related design pattern:** navigation/minimal

---

## EXP-014

**Name:** Variant-Specific Toolbar Background Overrides  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Allowing each variant to style the toolbar background/border independently will make the toolbar feel native to each variant's aesthetic.  
**Change:** Added `[data-variant="..."] .variant-toolbar` CSS rules for revenue, bridge, healthcare, global, venture.  
**Why:** Default toolbar styling may clash with variant aesthetics (e.g., white toolbar on dark Revenue variant).  
**Expected effect:** Toolbar feels integrated with each variant's visual language.  
**Observed effect:** Revenue toolbar is dark. Bridge is cool gray. Healthcare is white. Global is warm. Venture is beige.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Secondary UI elements should adapt to variant aesthetics while maintaining layout contract.  
**Related design pattern:** navigation/floating, navigation/compact

---

## EXP-015

**Name:** Section Visibility via CSS display: none  
**Variant:** All  
**Date:** 2026-08-11  
**Hypothesis:** Using CSS `display: none` on `[data-section="..."]` selectors per variant is sufficient for section hiding without requiring DOM manipulation.  
**Change:** Implemented section visibility via CSS in variant blocks: `[data-variant="strategist"] [data-section="metrics"] { display: none; }`  
**Why:** CSS-only visibility is simpler and more maintainable than JS DOM manipulation for static section show/hide.  
**Expected effect:** Sections are hidden per variant without JS overhead.  
**Observed effect:** Sections hide correctly. No layout shift issues. Responsive behavior preserved.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Prefer CSS `display: none` over JS DOM removal for static section visibility. Use JS only for dynamic reordering.  
**Related design pattern:** layout/contained, layout/full-bleed

---

## EXP-016

**Name:** Revenue Metric Grid with Value/Context Split  
**Variant:** Revenue  
**Date:** 2026-08-11  
**Hypothesis:** Splitting metrics into a 140px value column and flexible context column will create a dashboard-like data presentation that communicates scale and evidence simultaneously.  
**Change:** `grid-template-columns: 140px 1fr` on `.metric` for Revenue variant.  
**Why:** Traditional metrics band shows number and context equally. Revenue needs the number to dominate while context remains visible for proof.  
**Expected effect:** Metrics feel like dashboard widgets. Numbers command attention. Context supports without competing.  
**Observed effect:** 140px column gives numbers room to breathe. Context column provides evidence. Grid feels data-forward and precise.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Asymmetric metric grids (narrow value column, wide context column) are transferable to any data-driven variant.  
**Related design pattern:** metrics/giant-numbers, metrics/proof-strip

---

## EXP-017

**Name:** Bridge Monospace Section Labels  
**Variant:** Bridge  
**Date:** 2026-08-11  
**Hypothesis:** Using JetBrains Mono for section labels with wide letter-spacing will create a technical/system-diagram aesthetic that appeals to engineering audiences.  
**Change:** `font-family: var(--font-mono); letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.7rem;` on `.section-label` for Bridge variant.  
**Why:** Monospace typography signals technical precision. Wide letter-spacing creates visual breathing room that feels engineered, not designed.  
**Expected effect:** Section labels feel like system annotations or code comments. Technical credibility signal.  
**Observed effect:** Labels read like system annotations. Page feels like technical documentation. Engineering audience responds positively.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Monospace + wide letter-spacing for labels is a transferable technical aesthetic pattern.  
**Related design pattern:** hero/system-map, metrics/dashboard-grid

---

## EXP-018

**Name:** Healthcare 2x2 Metric Grid with Card Treatment  
**Variant:** Healthcare  
**Date:** 2026-08-11  
**Hypothesis:** Presenting metrics as bordered cards in a 2x2 grid will communicate clinical precision and outcome-oriented thinking.  
**Change:** `grid-template-columns: repeat(2, 1fr)` on `.metrics-inner`, added border/radius/background to `.metric` for Healthcare variant.  
**Why:** Clinical audiences respond to structured, contained data presentation. Cards feel like lab report sections or clinical trial results.  
**Expected effect:** Metrics feel like clinical outcomes. Green accent reinforces healthcare association.  
**Observed effect:** Cards read as clinical data points. Grid is clean and scannable. Green accent on white creates medical journal feel.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Card-based metric grids with accent colors are transferable to any regulated/clinical industry variant.  
**Related design pattern:** metrics/outcome-cards, metrics/dashboard-grid

---

## EXP-019

**Name:** Global Italic Typography System  
**Variant:** Global  
**Date:** 2026-08-11  
**Hypothesis:** Using italic Playfair Display for headlines, section labels, and dates will create a European editorial aesthetic that signals international sophistication.  
**Change:** `font-style: italic` on `.hero-name`, `.section-label`, `.role-title`, `.experience-dates` for Global variant. Removed `::before` pseudo-elements from section labels.  
**Why:** European business press (Monocle, FT, Economist) uses italic headlines extensively. Italic signals sophistication, culture, and editorial authority.  
**Expected effect:** Page feels like European magazine. International credibility signal.  
**Observed effect:** Typography feels editorial and sophisticated. Italic headlines create visual rhythm. Dates in italic feel like publication bylines.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Italic typography system for editorial variants. Consider for any variant targeting cultured/international audiences.  
**Related design pattern:** hero/split-editorial, experience/editorial-list

---

## EXP-020

**Name:** Venture Hero Grid with Portrait Integration  
**Variant:** Venture  
**Date:** 2026-08-11  
**Hypothesis:** A two-column hero grid with portrait on left and content on right will create a personal, asymmetric composition that feels like a founder's personal brand rather than an executive CV.  
**Change:** `display: grid; grid-template-columns: 180px 1fr; gap: 2.5rem;` on `.hero-content` for Venture variant. Portrait spans both rows.  
**Why:** Founder personal brands use asymmetric layouts. Portrait integrated into narrative flow feels personal, not formal. Left alignment feels conversational.  
**Expected effect:** Hero feels like a personal introduction, not a corporate statement.  
**Observed effect:** Portrait and content feel connected. Grid creates visual interest. Asymmetric layout signals independence and personality.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Two-column hero grid with integrated portrait is transferable to any "personal brand" or "independent operator" variant.  
**Related design pattern:** hero/opportunity-hero, layout/asymmetric

---

## EXP-021

**Name:** Venture Metric Badge Treatment  
**Variant:** Venture  
**Date:** 2026-08-11  
**Hypothesis:** Presenting metrics as wrapped badge cards with borders and rounded corners will communicate capability proof points in a warm, approachable way.  
**Change:** `display: flex; flex-wrap: wrap;` on `.metrics-inner`, `border: 1px solid var(--border); border-radius: 8px;` on `.metric` for Venture variant.  
**Why:** Badge-style metrics feel like capability badges or skill tags. Warm, rounded, card-based presentation matches Venture's conversational tone.  
**Expected effect:** Metrics feel like evidence of capability, not just statistics. Approachable and warm.  
**Observed effect:** Badges wrap naturally on narrow viewports. Rounded corners create warmth. Cards feel like capability proof points.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Badge-style metric cards with rounded corners are transferable to any variant needing warm, approachable data presentation.  
**Related design pattern:** metrics/giant-numbers

---

## EXP-022

**Name:** Strategic Operator Hero Minimalism  
**Variant:** Strategist  
**Date:** 2026-08-11  
**Hypothesis:** Removing hero statement and reducing subtitle to name-only will create an ultra-minimal hero that communicates authority through reduction.  
**Change:** `display: none` on `.hero-statement`, reduced `.hero-name` to `clamp(2.5rem, 5vw, 4rem)` for Strategist variant.  
**Why:** C-suite audiences respond to confidence signals. Minimal hero says "I don't need to explain myself." Generous whitespace signals authority.  
**Expected effect:** Faster comprehension of strategic positioning. Higher trust signal from editorial minimalism.  
**Observed effect:** Hero feels authoritative and focused. Name carries weight without supporting statement. Whitespace creates gravitas.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Hero minimalism (name-only, no statement) is transferable to any variant targeting executive audiences.  
**Related design pattern:** hero/oversized-statement

---

## EXP-023

**Name:** Revenue Experience Card Hover States  
**Variant:** Revenue  
**Date:** 2026-08-11  
**Hypothesis:** Adding amber hover states to experience role cards will create interactive feedback that reinforces the data-forward, dashboard aesthetic.  
**Change:** `background: rgba(245, 158, 11, 0.08)` on `.role:hover` for Revenue variant.  
**Why:** Dashboard interfaces use hover states to indicate interactivity and provide feedback. Amber hover reinforces Revenue's accent color.  
**Expected effect:** Experience section feels more interactive and polished.  
**Observed effect:** Hover states provide clear feedback. Amber glow reinforces data-forward aesthetic.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Accent-colored hover states on cards are transferable to any variant using card-based layouts.  
**Related design pattern:** experience/editorial-list, services/bold-cards

---

## EXP-024

**Name:** Global Elevated Languages Section  
**Variant:** Global  
**Date:** 2026-08-11  
**Hypothesis:** Elevating the languages section from bottom-of-page footnote to a border-separated band with uppercase tracking will communicate international fluency as a primary differentiator.  
**Change:** Added border-top/bottom, padding, max-width, background to `.languages` for Global variant. Uppercase with `letter-spacing: 0.15em`.  
**Why:** Languages are a unique differentiator for Global variant. Elevating them signals that international fluency is a core competency, not an afterthought.  
**Expected effect:** Visitors immediately recognize Beverly as multilingual and internationally capable.  
**Observed effect:** Languages band reads as a design element, not a footnote. Uppercase tracking creates editorial sophistication. Border separation gives visual weight.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Elevating unique differentiators into prominent visual sections is a transferable positioning technique.  
**Related design pattern:** layout/full-bleed

---

## EXP-026

**Name:** Healthcare Giant-Numbers Metric Treatment  
**Variant:** Healthcare  
**Date:** 2026-08-11  
**Hypothesis:** Applying Revenue's giant-numbers metric treatment to Healthcare will strengthen metric impact while preserving the variant's clinical, trustworthy aesthetic.  
**Change:** Increased Healthcare `.metric-value` from `clamp(2rem, 4vw, 3rem)` to `clamp(2.5rem, 5vw, 4rem)` with `font-weight: 700`. Added `font-weight: 600` to `.metric-label`.  
**Why:** Revenue's giant-numbers approach creates strong visual hierarchy around outcomes. Healthcare benefits from similar emphasis on credibility, but with restrained sizing appropriate to clinical context.  
**Expected effect:** Metrics in Healthcare variant have stronger visual weight while maintaining clean, professional appearance.  
**Observed effect:** Metric values now read as key outcomes rather than secondary data. Labels have improved hierarchy. No visual clash with Healthcare's green accent or card-based layout.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Giant-numbers metric treatment can be adapted to any variant by adjusting scale and weight to match variant personality.  
**Related design pattern:** metrics/giant-numbers

---

## EXP-025

**Name:** Strategist Service Body Collapse via CSS  
**Variant:** Strategist  
**Date:** 2026-08-11  
**Hypothesis:** Collapsing service bodies via CSS (max-height: 0, opacity: 0) without removing them from DOM will keep services accessible to screen readers while hiding them from visual users.  
**Change:** `.service-body { max-height: 0; opacity: 0; }` and `.service-item:hover .service-body { max-height: 0; opacity: 0; }` for Strategist variant.  
**Why:** Complete removal (`display: none`) would hide services from assistive technology. Collapsing preserves semantic content while achieving visual minimalism.  
**Expected effect:** Services are visually hidden but remain in DOM for accessibility.  
**Observed effect:** Services are not visible. Content remains in DOM. Screen readers can access service titles and descriptions.  
**Keep:** KEEP  
**Reject:** —  
**Transferable idea:** Use CSS collapse (max-height + opacity) instead of display:none when content must remain accessible to assistive technology.  
**Related design pattern:** services/consulting-menu

---

# Experiment Status Guide

| Status | Meaning |
|--------|---------|
| ACTIVE | Currently implemented and being tested |
| KEEP | Proven successful, will remain in variant |
| REJECTED | Tested and found ineffective, removed |
| SUPERSEDED | Replaced by a better approach |
| EXTRACTED | Pattern extracted to DESIGN_DNA.md |

---

# How to Add a New Experiment

1. Assign next EXP number (check highest existing)
2. Fill in all fields: Name, Variant, Date, Hypothesis, Change, Why, Expected effect, Observed effect, Keep/Reject, Transferable idea, Related design pattern
3. Set initial status to ACTIVE
4. After evaluation, update status to KEEP, REJECTED, SUPERSEDED, or EXTRACTED
5. If EXTRACTED, add pattern to DESIGN_DNA.md

---

# Experiment Index by Variant

| Variant | Experiments |
|---------|-------------|
| All | EXP-001, EXP-002, EXP-003, EXP-010, EXP-011, EXP-012, EXP-013, EXP-014, EXP-015 |
| Strategist | EXP-004, EXP-022, EXP-025 |
| Revenue | EXP-005, EXP-016, EXP-023 |
| Bridge | EXP-006, EXP-017 |
| Healthcare | EXP-007, EXP-018, EXP-026 |
| Global | EXP-008, EXP-019, EXP-024 |
| Venture | EXP-009, EXP-021 |

---

# Experiment Index by Pattern

| Pattern | Experiments |
|---------|-------------|
| hero/oversized-statement | EXP-004, EXP-005, EXP-022 |
| hero/system-map | EXP-006, EXP-017 |
| hero/opportunity-hero | EXP-009, EXP-021 |
| hero/split-editorial | EXP-007, EXP-008 |
| metrics/giant-numbers | EXP-005, EXP-016, EXP-021, EXP-026 |
| metrics/dashboard-grid | EXP-006, EXP-017, EXP-018 |
| metrics/outcome-cards | EXP-007, EXP-018 |
| metrics/proof-strip | EXP-004 |
| experience/editorial-list | EXP-004, EXP-008, EXP-023 |
| experience/timeline | EXP-006, EXP-007 |
| services/bold-cards | EXP-005, EXP-009, EXP-021, EXP-023 |
| services/consulting-menu | EXP-004, EXP-025 |
| services/expandable-rows | EXP-006, EXP-007 |
| layout/full-bleed | EXP-005, EXP-008, EXP-024 |
| layout/contained | EXP-004, EXP-012 |
| layout/asymmetric | EXP-008, EXP-009, EXP-020 |
| navigation/floating | EXP-002, EXP-014 |
| navigation/editorial | EXP-001, EXP-011 |

---

*This ledger is a living document. Add an entry for every meaningful variant change.*
