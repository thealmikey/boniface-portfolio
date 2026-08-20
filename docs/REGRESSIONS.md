# Variant Regression Log

**Version:** 1.0  
**Date:** 2026-08-11  
**Status:** Active  
**Purpose:** Track variant isolation failures and their fixes.

**How to use:**
- Record any regression where a change to one variant affected another
- Include date, variant, problem, cause, fix, and prevention
- Do not delete entries — mark as resolved when fixed
- Review before making variant changes to understand prior issues

---

## Regression Template

```markdown
## REG-XXX
**Date:** YYYY-MM-DD  
**Variant:** [Which variant was being modified]  
**Problem:** [What went wrong]  
**Affected Variants:** [Which variants were impacted]  
**Cause:** [Root cause]  
**Fix:** [How it was resolved]  
**Prevention:** [How to prevent recurrence]  
**Status:** OPEN | RESOLVED
```

---

## Current Regressions

No regressions recorded yet.

---

## Regression Index

| ID | Date | Variant | Problem | Status |
|----|------|---------|---------|--------|
| — | — | — | — | — |

---

# How to Log a Regression

1. Assign next REG number (check highest existing)
2. Fill in all fields: Date, Variant, Problem, Affected Variants, Cause, Fix, Prevention, Status
3. Set initial status to OPEN
4. When fixed, update status to RESOLVED
5. Reference the related experiment in `docs/EXPERIMENTS.md` if applicable

---

# Related Documents

- `docs/PORTFOLIO_PROJECT.md` — Project control document
- `docs/VARIANT_ISOLATION.md` — Variant isolation rules
- `docs/EXPERIMENTS.md` — Experiment ledger
- `docs/VARIANT_SYSTEM.md` — Variant architecture
