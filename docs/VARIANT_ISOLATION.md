# Variant Isolation Rules

**Version:** 1.0  
**Date:** 2026-08-11  
**Status:** Active  
**Purpose:** Prevent cross-variant contamination during variant modifications.

---

# The Golden Rule

**A change intended for one variant must not accidentally modify another variant.**

Before modifying any variant, you must:

1. Identify shared components
2. Identify variant-specific components
3. Identify shared CSS/tokens
4. Identify variant-specific CSS/tokens
5. Identify canonical content
6. Identify variant content overrides

---

# Conceptual Hierarchy

```
CANONICAL
    ↓
SHARED COMPONENTS
    ↓
VARIANT CONFIGURATION
    ↓
VARIANT-SPECIFIC PRESENTATION
```

## CANONICAL (Layer 0)

**Never modified by variants.**

- Person identity (name, location, languages)
- Contact details (email, phone, LinkedIn)
- Education (institutions, dates, degrees)
- Experience (companies, titles, dates, locations, responsibilities)
- Metrics (values, contexts)
- Services (names, includes, best-for)
- Engagement models (names, descriptions)

**Rule:** If you find yourself changing canonical data to achieve a presentation effect, stop. Create a variant interpretation instead.

## SHARED COMPONENTS (Layer 1)

**Used by all variants. Changes affect all variants.**

- HTML structure (`<section>`, `<article>`, `<nav>`)
- Base CSS (`.hero`, `.metrics-band`, `.experience-grid`, `.services-list`)
- JavaScript behavior (scroll handling, reveal animations, metric counters)
- Font loading
- Accessibility attributes

**Rule:** Changes to shared components must be tested across ALL variants. Do not modify shared components for a single variant's benefit.

## VARIANT CONFIGURATION (Layer 2)

**Per-variant settings that control presentation.**

- `data-variant` attribute on `<html>`
- CSS custom properties (`--bg`, `--accent`, `--font-display`, etc.)
- Section visibility (`[data-variant="x"] [data-section="y"] { display: none; }`)
- Section ordering (`order` property via CSS)

**Rule:** Variant configuration should be additive. If Strategist needs different section visibility, add Strategist-specific CSS. Do not change the shared section visibility logic.

## VARIANT-SPECIFIC PRESENTATION (Layer 3)

**Per-variant visual styling that does not affect other variants.**

- Typography overrides (`.hero-name`, `.section-label`)
- Color overrides (backgrounds, text, borders)
- Spacing overrides (padding, gaps, margins)
- Layout overrides (grid templates, flex directions)
- Component styling (cards, buttons, metrics)

**Rule:** All variant-specific presentation must be scoped with `[data-variant="..."]`. Never use global selectors for variant-specific changes.

---

# Variant Modification Protocol

## Before Modifying a Variant

### Step 1: Identify the Scope

Answer these questions:

- What am I trying to change?
- Is this change specific to one variant, or should it apply to all?
- Does this change touch canonical data?
- Does this change touch shared components?
- What other variants might be affected?

### Step 2: Find the Right Layer

| Change Type | Layer | Example |
|-------------|-------|---------|
| Change a metric value | CANONICAL | ❌ Never do this for presentation |
| Change how metrics look | VARIANT-SPECIFIC | `[data-variant="revenue"] .metric-value { ... }` |
| Hide a section for one variant | VARIANT CONFIG | `[data-variant="strategist"] [data-section="metrics"] { display: none; }` |
| Change navigation behavior | SHARED | ⚠️ Must test all variants |
| Change hero layout | VARIANT-SPECIFIC | `[data-variant="bridge"] .hero-content { ... }` |
| Change a role title | CANONICAL | ❌ Never do this |
| Change experience presentation | VARIANT-SPECIFIC | `[data-variant="venture"] .role { ... }` |

### Step 3: Check for Shared Dependencies

Before modifying shared components:

- List all variants that use this component
- List all patterns that depend on this component
- List all experiments that reference this component

If any variant or pattern would be affected, you must test them all.

---

# Testing Protocol

## Before and After Every Variant Change

### 1. Test the Modified Variant
- Does the change achieve the intended effect?
- Does it break existing functionality?
- Does it maintain accessibility?

### 2. Test Default
- Is Default still stable?
- Did the change leak into Default?
- Are all sections visible and functional?

### 3. Test at Least One Unrelated Variant
- Pick a variant that does NOT use the changed component
- Verify it is completely unaffected
- Good pairs: Revenue ↔ Healthcare, Bridge ↔ Global, Strategist ↔ Venture

### 4. Test Navigation
- Primary navigation works
- Variant toolbar works
- No overlap
- Mobile hamburger works
- Active states update correctly

### 5. Test Mobile (360px - 430px)
- No horizontal overflow
- No content occlusion
- Toolbar is accessible
- All buttons are tappable
- Text is readable

### 6. Test Desktop (1024px - 1920px)
- No overlap
- No clipping
- Layout is correct
- Typography is readable
- Spacing is consistent

---

# Isolation Mechanisms

## CSS Scoping

All variant-specific CSS must use attribute selectors:

```css
/* ✅ CORRECT - Scoped to variant */
[data-variant="revenue"] .hero {
  background: #0a0a0a;
}

/* ❌ WRONG - Global, affects all variants */
.hero {
  background: #0a0a0a;
}
```

## JavaScript Scoping

Variant-specific JavaScript must check the active variant:

```javascript
/* ✅ CORRECT - Scoped to variant */
if (html.getAttribute('data-variant') === 'revenue') {
  // Revenue-specific logic
}

/* ❌ WRONG - Runs for all variants */
function setupRevenueMetrics() {
  // This runs regardless of active variant
}
```

## Content Isolation

Variant-specific content must be stored separately from canonical content:

```javascript
/* ✅ CORRECT - Variant interpretation stored separately */
const variantContent = {
  revenue: {
    heroSubtitle: "The person behind the numbers.",
    summaryLead: "Revenue Operations executive..."
  },
  strategist: {
    heroSubtitle: null, // No subtitle for Strategist
    summaryLead: "Strategic operator..."
  }
};

/* ❌ WRONG - Modifying canonical data */
const canonicalHeroSubtitle = "The person behind the numbers.";
```

## HTML Structure Isolation

Never create variant-specific HTML structure:

```html
<!-- ✅ CORRECT - Shared HTML, variant styling via CSS -->
<section data-section="hero" class="hero">
  <div class="hero-content">
    <h1 class="hero-name">Beverly Nasimiyu</h1>
  </div>
</section>

<!-- ❌ WRONG - Variant-specific HTML fork -->
<section data-section="hero" class="hero">
  <!-- Revenue-specific hero structure -->
  <div class="hero-revenue-only">...</div>
</section>
```

---

# Common Isolation Violations

## Violation 1: Global CSS Changes

**Problem:** Changing a shared CSS property to fix one variant breaks others.

**Example:**
```css
/* Changed for Revenue, but breaks Healthcare */
.metric-value {
  font-size: clamp(3rem, 6vw, 5rem);
}
```

**Fix:** Scope to variant
```css
[data-variant="revenue"] .metric-value {
  font-size: clamp(3rem, 6vw, 5rem);
}
```

## Violation 2: Canonical Data Mutation

**Problem:** Changing factual data to fit a variant's narrative.

**Example:**
```css
/* Trying to hide a metric by changing its value */
[data-variant="strategist"] .metric-value::after {
  content: ""; /* Hiding 30% quote turnaround */
}
```

**Fix:** Hide the entire metric section via `display: none` or configure metric emphasis.

## Violation 3: Shared Component Modification

**Problem:** Modifying a shared component for one variant's benefit.

**Example:**
```css
/* Changed for Bridge, but breaks Default navigation */
nav {
  font-family: 'JetBrains Mono', monospace;
}
```

**Fix:** Scope to variant
```css
[data-variant="bridge"] nav {
  font-family: 'JetBrains Mono', monospace;
}
```

## Violation 4: JavaScript Side Effects

**Problem:** JavaScript logic that runs for all variants but was designed for one.

**Example:**
```javascript
// Runs for all variants, but only makes sense for Revenue
document.querySelector('.hero-name').style.textTransform = 'uppercase';
```

**Fix:** Check variant before applying
```javascript
if (html.getAttribute('data-variant') === 'revenue') {
  document.querySelector('.hero-name').style.textTransform = 'uppercase';
}
```

## Violation 5: Content Duplication

**Problem:** Creating variant-specific copies of content instead of interpretations.

**Example:**
```html
<!-- Revenue-specific copy hardcoded in HTML -->
<p class="hero-subtitle revenue-only">The person behind the numbers.</p>
```

**Fix:** Store variant content in JavaScript configuration
```javascript
const variantContent = {
  revenue: {
    heroSubtitle: "The person behind the numbers."
  }
};
```

---

# Variant Isolation Checklist

Before committing a variant change:

- [ ] Change is scoped to target variant using `[data-variant="..."]`
- [ ] No global CSS selectors were modified
- [ ] No canonical data was altered
- [ ] No shared component behavior was changed without testing all variants
- [ ] No variant-specific HTML structure was added
- [ ] JavaScript changes check `data-variant` before executing
- [ ] Modified variant tested and working
- [ ] Default variant tested and unaffected
- [ ] At least one unrelated variant tested and unaffected
- [ ] Navigation tested (top + bottom)
- [ ] Mobile viewport tested (360px - 430px)
- [ ] Desktop viewport tested (1024px - 1920px)
- [ ] No horizontal overflow
- [ ] No content occlusion
- [ ] Accessibility maintained (focus indicators, contrast, ARIA)

---

# Emergency Procedures

## If a Change Affects Multiple Variants

1. **Stop** — Do not commit the change
2. **Assess** — Which variants are affected? How?
3. **Isolate** — Move the change to variant-specific scope
4. **Test** — Verify each variant independently
5. **Document** — Add regression entry to `docs/REGRESSIONS.md`

## If Canonical Data Is Accidentally Modified

1. **Stop** — Do not deploy
2. **Revert** — Restore canonical data to original values
3. **Re-approach** — Use variant interpretation instead of data mutation
4. **Document** — Add regression entry to `docs/REGRESSIONS.md`

## If a Shared Component Is Broken

1. **Stop** — Do not deploy
2. **Revert** — Restore shared component to working state
3. **Isolate** — Move variant-specific styling to variant scope
4. **Test** — Verify all variants
5. **Document** — Add regression entry to `docs/REGRESSIONS.md`

---

# Related Documents

- `docs/PORTFOLIO_PROJECT.md` — Project control document
- `docs/VARIANT_SYSTEM.md` — Variant architecture and specifications
- `docs/DESIGN_DNA.md` — Pattern library
- `docs/EXPERIMENTS.md` — Experiment ledger
- `docs/CONTENT_MODEL.md` — Canonical data model
- `docs/REGRESSIONS.md` — This document

---

# Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-11 | Initial variant isolation rules established |
