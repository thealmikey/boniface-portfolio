# Design DNA

**Version:** 1.0  
**Date:** 2026-08-11  
**Status:** Active pattern library  
**Principle:** Successful ideas should be transferable without copying entire variants.

---

# What is Design DNA?

Design DNA is a **library of reusable design concepts** extracted from the variant system. Each pattern is an independent, composable unit that can be borrowed across variants.

## Why Design DNA?

Currently, if Revenue has an excellent metrics treatment and you want Healthcare to use it, you would copy Revenue's entire variant CSS. That couples unrelated design decisions.

Design DNA solves this by:

1. **Extracting patterns** — Identifying successful treatments as named, documented units
2. **Documenting contracts** — Specifying what each pattern requires and provides
3. **Enabling borrowing** — Allowing patterns to be transferred without their original context

## Pattern Categories

```
design-dna/
├── hero/           # Opening composition patterns
├── experience/     # Career history presentation patterns
├── metrics/        # Outcome/statistics presentation patterns
├── services/       # Service offering presentation patterns
├── navigation/     # Site navigation patterns
├── contact/        # Contact/CTA patterns
└── layout/         # Page-level composition patterns
```

---

# Hero Patterns

## split-editorial

### Purpose
Present Beverly's identity through a balanced two-column composition: portrait on one side, name and statement on the other. Creates editorial magazine feel.

### Visual Characteristics
- Portrait and text in separate columns
- Generous whitespace between columns
- Serif typography for name
- Subtle gradient or solid background
- Portrait with decorative border/shadow

### Layout Characteristics
- CSS Grid: `grid-template-columns: 1fr 1fr` or `200px 1fr`
- Portrait aligned to grid
- Text aligned to grid
- Minimum 2rem gap between columns
- Centered vertically within hero

### Suitable Variants
- Default
- Global
- Healthcare (with adjustments)

### Unsuitable Contexts
- Dark mode variants (contrast issues)
- Minimalist variants (too decorative)
- Mobile-first designs (two-column hero on mobile is problematic)

### Dependencies
- Portrait image must be available
- Minimum viewport width: 768px
- Falls back to stacked layout below 768px

### Accessibility Considerations
- Portrait must have descriptive `alt` text
- Text column must maintain reading order (portrait first in DOM, visually secondary)
- Sufficient color contrast between text and background
- Touch targets not applicable (hero is not interactive)

### Implementation Example
```css
.hero-split-editorial .hero-content {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  align-items: center;
}
.hero-split-editorial .hero-portrait {
  grid-row: span 2;
}
```

---

## oversized-statement

### Purpose
Make a bold, declarative statement the dominant visual element. The name and a powerful statement take over the viewport.

### Visual Characteristics
- Massive typography for hero name
- High contrast between text and background
- Minimal or no portrait
- Statement text as secondary but prominent element
- Aggressive letter-spacing and weight

### Layout Characteristics
- Centered or left-aligned text block
- Full viewport height or near-full
- Generous padding
- Single column, no grid
- Statement positioned immediately below name

### Suitable Variants
- Strategist
- Revenue
- Bridge

### Unsuitable Contexts
- Variants needing to show personality/approachability
- Variants where portrait is primary trust signal
- Dense information architectures

### Dependencies
- Font family must support large sizes at display weights
- Background must provide sufficient contrast
- Line-height must be tight for large text

### Accessibility Considerations
- Text must remain readable at maximum size
- Avoid text-overflow at extreme viewport sizes
- Ensure statement doesn't compete with navigation

### Implementation Example
```css
.hero-oversized-statement .hero-name {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.04em;
}
.hero-oversized-statement .hero-portrait {
  display: none; /* or reduce to accent */
}

---

## metric-hero

### Purpose
Lead with a key statistic or outcome. The hero communicates impact before biography.

### Visual Characteristics
- Large number as primary visual element
- Supporting label/description below
- Dark or high-contrast background
- Minimal text beyond the metric
- Number may be animated

### Layout Characteristics
- Single centered column
- Metric dominates vertical space
- Supporting text is smaller, secondary
- May include secondary metrics in row

### Suitable Variants
- Revenue
- Venture
- Healthcare

### Unsuitable Contexts
- Variants where authority comes from narrative, not numbers
- Early-career professionals with limited metrics
- Audiences responding to story, not data

### Dependencies
- Must have at least one strong, verifiable metric
- Metric must be contextually relevant to audience
- Animation library or CSS transitions for counter effect

### Accessibility Considerations
- Numbers must be announced correctly by screen readers
- Animation must respect `prefers-reduced-motion`
- Metric context must be available to screen readers

### Implementation Example
```css
.hero-metric-hero .hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-metric-hero .metric-value {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 800;
}
```

---

## system-map

### Purpose
Present Beverly as part of a system — showing inputs, processes, and outputs. Appeals to technical and systems-thinking audiences.

### Visual Characteristics
- Connected nodes or flow elements
- Monospace or technical typography
- Grid-based composition
- Lines, arrows, or connection indicators
- Cool color palette

### Layout Characteristics
- Asymmetric, often left-aligned
- Portrait as one node in the system
- Text elements arranged like system components
- Dense but organized
- May include decorative system elements

### Suitable Variants
- Bridge
- Healthcare (clinical system view)

### Unsuitable Contexts
- Variants emphasizing human connection over systems
- Audiences unfamiliar with system diagrams
- Mobile-first designs (too complex for narrow viewports)

### Dependencies
- Monospace font family
- SVG or CSS connection lines
- Grid layout system
- Sufficient viewport width

### Accessibility Considerations
- System elements must have semantic meaning
- Connections must be described, not just visual
- Color must not be the only indicator of relationship

### Implementation Example
```css
.hero-system-map .hero-content {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
}
.hero-system-map .hero-subtitle {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}

---

## opportunity-hero

### Purpose
Frame the portfolio as an invitation rather than a resume. "What could we build together?"而不是"What have you done?"

### Visual Characteristics
- Warm, inviting colors
- Conversational typography
- Portrait prominent but not formal
- Question or invitation as hero text
- Asymmetric, personal composition

### Layout Characteristics
- Left-aligned or asymmetric grid
- Portrait integrated into narrative flow
- Generous whitespace
- Warm background tones
- CTA integrated into hero or immediately following

### Suitable Variants
- Venture
- Global (warm editorial variant)

### Unsuitable Contexts
- Corporate or formal audiences
- Variants emphasizing authority over collaboration
- Dark mode aesthetics

### Dependencies
- Warm color palette
- Italic or humanist typography
- Portrait with approachable styling
- Conversational copy

### Accessibility Considerations
- Invitation text must be clear and direct
- Portrait must not distract from message
- Color warmth must not compromise contrast

### Implementation Example
```css
.hero-opportunity-hero .hero-content {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2.5rem;
  text-align: left;
}
.hero-opportunity-hero .hero-name {
  font-style: italic;
}
```

---

# Experience Patterns

## timeline

### Purpose
Show career progression chronologically. The timeline communicates growth, duration, and career arc.

### Visual Characteristics
- Vertical line connecting roles
- Date markers on left or right
- Role cards alternating or stacked
- Current role highlighted
- Clean, structured appearance

### Layout Characteristics
- Two-column grid: dates | content
- Vertical line as visual spine
- Each role is a card or block
- Consistent spacing between roles
- Current role has special treatment

### Suitable Variants
- Default
- Healthcare
- Bridge

### Unsuitable Contexts
- Variants hiding chronology for strategic focus
- Variants with limited vertical space
- Audiences responding to capability over tenure

### Dependencies
- All 11 roles must be available
- Date formatting must be consistent
- Vertical spacing must accommodate all roles

### Accessibility Considerations
- Timeline must be navigable via keyboard
- Current role must be clearly marked
- Dates must be machine-readable
- Vertical line must have sufficient contrast

### Implementation Example
```css
.experience-timeline {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 3rem;
}
.experience-timeline .experience-entries {
  border-left: 1px solid var(--border);
  padding-left: 2rem;
}
```

---

## editorial-list

### Purpose
Present experience as a curated editorial list rather than a chronological timeline. Emphasizes selection and curation over chronology.

### Visual Characteristics
- No timeline spine
- Roles presented as a clean list or grid
- Emphasis on company and title
- Reduced visual weight on dates
- Editorial typography

### Layout Characteristics
- Single column or asymmetric grid
- Generous spacing between items
- No connecting lines
- Dates may be omitted or minimized
- Current role may be at top, not chronologically first

### Suitable Variants
- Strategist
- Global
- Venture

### Unsuitable Contexts
- Variants emphasizing career progression
- Audiences needing to see tenure
- Chronological storytelling

### Dependencies
- Curation logic (which roles to show)
- Editorial typography support
- Sufficient whitespace

### Accessibility Considerations
- List must be navigable
- Role order must be logical
- Dates must be available even if minimized

### Implementation Example
```css
.experience-editorial-list .experience-dates {
  display: none;
}
.experience-editorial-list .experience-entries {
  border-left: none;
  padding-left: 0;
}
.experience-editorial-list .role {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 2px solid var(--border);
}

---

## capability-led

### Purpose
Group experience by capability demonstrated rather than by employer. Shows what Beverly can do, not where she worked.

### Visual Characteristics
- Grouped by skill or capability
- Company and date as metadata
- Emphasis on achievements and metrics
- Cards or blocks per capability
- May include capability icons or labels

### Layout Characteristics
- Grouped sections or cards
- Each capability shows relevant roles
- Metrics highlighted per capability
- Non-linear organization
- May use tabs or filters

### Suitable Variants
- Bridge (system capability view)
- Healthcare (clinical capability view)
- Revenue (commercial capability view)

### Unsuitable Contexts
- Variants emphasizing loyalty/tenure
- Traditional corporate audiences
- Chronological career review required

### Dependencies
- Capability taxonomy defined
- Role-to-capability mapping
- Metrics per capability

### Accessibility Considerations
- Grouping must be semantically clear
- Filtering must be keyboard accessible
- Capability definitions must be available

### Implementation Example
```html
<div class="capability-group">
  <h3>Revenue Operations</h3>
  <div class="capability-roles">
    <!-- Roles that demonstrate this capability -->
  </div>
</div>
```

---

## company-cards

### Purpose
Emphasize employer brands and company contexts. Each company becomes a card showing Beverly's contribution.

### Visual Characteristics
- Card per company
- Company name as card header
- Multiple roles may appear in one card
- Company context emphasized
- Clean card borders or shadows

### Layout Characteristics
- Grid of cards
- Each card contains one or more roles
- Company branding feel
- Consistent card sizing
- Current company may be highlighted

### Suitable Variants
- Venture (startup-friendly)
- Global (international companies emphasized)

### Unsuitable Contexts
- Variants emphasizing individual achievement over team context
- Variants with many short-tenure roles
- Audiences focused on role, not company

### Dependencies
- Company data available
- Role-to-company mapping
- Card layout system

### Accessibility Considerations
- Cards must be navigable
- Company names must be clear
- Role hierarchy within cards must be semantic

### Implementation Example
```css
.experience-company-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.experience-company-cards .company-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.5rem;
}

---

## career-journey

### Purpose
Tell the story of Beverly's career as a narrative journey. From education through early roles to current position.

### Visual Characteristics
- Journey or path metaphor
- Story-like progression
- Milestone markers
- Geographic or thematic chapters
- Narrative text between roles

### Layout Characteristics
- Single column, scroll-driven
- Chapters or phases
- Visual path or journey line
- Mix of narrative and data
- May include maps or geographic elements

### Suitable Variants
- Global (geographic journey)
- Venture (founder's journey)
- Strategist (executive journey)

### Unsuitable Contexts
- Variants needing quick scanning
- Technical audiences wanting data first
- Dense information displays

### Dependencies
- Narrative copy for each phase
- Geographic or thematic chapter definitions
- Journey visual elements

### Accessibility Considerations
- Journey must be navigable
- Chapters must have clear headings
- Visual path must have text alternative

---

# Metrics Patterns

## giant-numbers

### Purpose
Make the numbers the hero. Massive typography creates immediate impact and communicates scale.

### Visual Characteristics
- Numbers at 3-5x normal size
- High contrast against background
- Minimal supporting text
- Animation on scroll
- Dark or accent background

### Layout Characteristics
- Full-width band or section
- Numbers in grid or row
- Generous spacing around numbers
- Labels small and secondary
- Context quotes minimized or hidden

### Suitable Variants
- Revenue
- Bridge
- Venture
- Healthcare

### Unsuitable Contexts
- Variants where metrics are supporting evidence, not proof
- Audiences skeptical of "hype" metrics
- Variants emphasizing narrative over data

### Dependencies
- Strong, verifiable metrics
- Animation system for counters
- Dark or high-contrast background

### Accessibility Considerations
- Animated numbers must respect `prefers-reduced-motion`
- Numbers must be announced correctly
- Context must be available to screen readers
- Animation must not cause vestibular issues

### Implementation Example
```css
/* Revenue / Venture: aggressive scale */
.metrics-giant-numbers .metric-value {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
}

/* Healthcare: restrained scale, clinical weight */
[data-variant="healthcare"] .metric-value {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
}
```

---

## proof-strip

### Purpose
Show evidence and context for each metric. The metric is the headline, but the proof matters.

### Visual Characteristics
- Metric on left, context on right
- Quote or description accompanies number
- Clean card or row layout
- Balanced typography
- Professional, not flashy

### Layout Characteristics
- Two-column: metric | context
- Consistent vertical rhythm
- Cards or bordered rows
- Quote marks or attribution styling
- Balanced whitespace

### Suitable Variants
- Default
- Healthcare
- Strategist

### Unsuitable Contexts
- Variants hiding context for dramatic effect
- Dark mode with low contrast
- Mobile-first (two-column is tight)

### Dependencies
- Metric context quotes available
- Two-column grid system
- Sufficient width

### Accessibility Considerations
- Context must be available to screen readers
- Quote attribution must be semantic
- Metric and context must be logically grouped

### Implementation Example
```css
.metrics-proof-strip .metric {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
  align-items: center;
}

---

## outcome-cards

### Purpose
Frame metrics as completed outcomes rather than ongoing statistics. Each metric is a delivered result.

### Visual Characteristics
- Card-based presentation
- Outcome-focused language
- Green or positive accent colors
- Checkmark or completion indicators
- Clean, contained blocks

### Layout Characteristics
- Grid of cards
- Each card is self-contained
- Consistent card sizing
- Icon or indicator at top
- Metric value prominent within card

### Suitable Variants
- Healthcare
- Strategist
- Default

### Unsuitable Contexts
- Variants where metrics are aspirational, not achieved
- Dark mode with low contrast
- Variants emphasizing process over outcomes

### Dependencies
- Outcome-oriented metric copy
- Card layout system
- Icon or indicator library

### Accessibility Considerations
- Cards must be navigable
- Outcome language must be clear
- Icons must have text alternatives

### Implementation Example
```css
.metrics-outcome-cards .metrics-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.metrics-outcome-cards .metric {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: #fff;
}
```

---

## inline-statistics

### Purpose
Weave metrics into narrative text rather than isolating them in a dedicated section.

### Visual Characteristics
- Bold or colored numbers within paragraphs
- Seamless integration with text
- No dedicated metrics section
- Numbers stand out through weight or color
- Context is immediate

### Layout Characteristics
- No separate metrics band
- Numbers flow with text
- May appear in summary, experience, or services
- Smaller overall emphasis
- Text-first, numbers-as-support

### Suitable Variants
- Bridge (system documentation style)
- Strategist (minimal proof)
- Healthcare (clinical reporting style)

### Unsuitable Contexts
- Variants where metrics are primary proof
- Audiences needing quick-scan statistics
- Mobile-first (inline stats can be missed)

### Dependencies
- Inline styling system
- Text sections that can accommodate stats
- Sufficient text content

### Accessibility Considerations
- Inline stats must be announced correctly
- Must not disrupt reading flow for screen readers
- Color must not be only indicator of statistic

---

## dashboard-grid

### Purpose
Present metrics like a dashboard or control panel. Data-forward, precise, system-like.

### Visual Characteristics
- Grid layout with borders
- Monospace or technical typography
- Dark background
- Precise alignment
- Data-label-value hierarchy

### Layout Characteristics
- Two-column grid
- Bordered cells
- Consistent sizing
- Label above or beside value
- No decorative elements

### Suitable Variants
- Bridge
- Revenue

### Unsuitable Contexts
- Variants emphasizing warmth over precision
- Audiences unfamiliar with dashboards
- Mobile-first (grid is complex)

### Dependencies
- Monospace font
- Grid layout system
- Dark mode support

### Accessibility Considerations
- Grid must be navigable
- Labels must be associated with values
- Color must not convey information alone

### Implementation Example
```css
.metrics-dashboard-grid .metrics-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.metrics-dashboard-grid .metric {
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: #fff;
}

---

# Services Patterns

## expandable-rows

### Purpose
Present services as an accordion or expandable list. Each service reveals detail on interaction. Keeps initial view clean.

### Visual Characteristics
- Service title always visible
- Expand/collapse indicator
- Detail panel slides or fades in
- Numbered or icon indicators
- Clean, list-like appearance

### Layout Characteristics
- Vertical stack
- Each item is a row
- Expandable area below title
- Consistent height for collapsed state
- Smooth transition on expand

### Suitable Variants
- Default
- Healthcare
- Bridge

### Unsuitable Contexts
- Variants where all services must be visible immediately
- Mobile-first with touch concerns (accordion on mobile can be problematic)
- Variants emphasizing visual impact over efficiency

### Dependencies
- JavaScript for expand/collapse
- Sufficient content for each service
- Consistent structure across services

### Accessibility Considerations
- Expand/collapse must be keyboard accessible
- State must be announced (`aria-expanded`)
- Expanded content must be focusable
- Animation must respect `prefers-reduced-motion`

### Implementation Example
```css
.services-expandable-rows .service-item {
  border-top: 1px solid var(--border);
  padding: 1.5rem 0;
}
.services-expandable-rows .service-body {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 400ms ease, opacity 300ms ease;
}
.services-expandable-rows .service-item.expanded .service-body {
  max-height: 500px;
  opacity: 1;
}
```

---

## bold-cards

### Purpose
Make each service a bold, visually distinct card. Services become primary visual elements, not just list items.

### Visual Characteristics
- Cards with borders or shadows
- High contrast
- Number or icon prominent
- Title large and bold
- Minimal decoration inside card

### Layout Characteristics
- Grid of cards
- Each card self-contained
- Consistent sizing
- Generous padding
- Hover or interaction states

### Suitable Variants
- Revenue
- Venture
- Bridge

### Unsuitable Contexts
- Variants with many services (cards take space)
- Variants needing compact presentation
- Mobile-first with limited width

### Dependencies
- Card layout system
- Hover/interaction states
- Sufficient viewport width

### Accessibility Considerations
- Cards must be navigable
- Hover states must have focus equivalents
- Card content must be semantic

### Implementation Example
```css
.services-bold-cards .services-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.services-bold-cards .service-item {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2rem;
  background: #fff;
}

---

## problem-solution

### Purpose
Frame each service as a problem → intervention → outcome story. Makes services immediately relevant.

### Visual Characteristics
- Problem statement prominent
- Solution/service description follows
- Outcome or benefit stated
- May use visual metaphor (arrow, path)
- Clean, story-like flow

### Layout Characteristics
- Vertical flow per service
- Three distinct sections: problem, solution, outcome
- May use icons or separators
- Consistent structure across services
- Generous spacing between elements

### Suitable Variants
- Strategist
- Healthcare
- Venture

### Unsuitable Contexts
- Variants where service details are less important than capability names
- Dense information architectures
- Mobile-first (three-part structure is tall)

### Dependencies
- Problem/solution/outcome copy for each service
- Icon or visual separator library
- Vertical spacing system

### Accessibility Considerations
- Problem/solution/outcome must be semantically grouped
- Icons must have text alternatives
- Flow must be logical for screen readers

### Implementation Example
```html
<article class="service-item problem-solution">
  <div class="service-problem">
    <h4>The Problem</h4>
    <p>...</p>
  </div>
  <div class="service-solution">
    <h4>The Approach</h4>
    <p>...</p>
  </div>
  <div class="service-outcome">
    <h4>The Outcome</h4>
    <p>...</p>
  </div>
</article>
```

---

## consulting-menu

### Purpose
Present services like a consulting firm's engagement menu. Clean, professional, capability-focused.

### Visual Characteristics
- Clean list or grid
- Numbered items
- Minimal decoration
- Professional typography
- "Best for" or "Includes" as metadata

### Layout Characteristics
- Vertical list or tight grid
- Numbered or lettered items
- Consistent item height
- Metadata in smaller type
- No expand/collapse (all visible)

### Suitable Variants
- Strategist
- Default (condensed)
- Healthcare

### Unsuitable Contexts
- Variants emphasizing visual impact
- Variants with many services (menu becomes long)
- Mobile-first with limited vertical space

### Dependencies
- Numbered service structure
- Metadata formatting
- Clean typography

### Accessibility Considerations
- Numbered list must be semantic
- Metadata must be available
- Items must be navigable

### Implementation Example
```css
.services-consulting-menu .service-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
}
.services-consulting-menu .service-number {
  font-family: var(--font-mono);
  font-size: 1.25rem;
}
```

---

## capability-matrix

### Purpose
Show services as a matrix of capabilities rather than a list of packages. Appeals to technical and analytical audiences.

### Visual Characteristics
- Grid or table-like layout
- Capabilities as rows or columns
- Services intersecting with capabilities
- Checkmarks or indicators for coverage
- Technical, precise appearance

### Layout Characteristics
- Two-dimensional grid
- Headers for capabilities and services
- Cells indicate coverage or level
- Consistent alignment
- May include legend

### Suitable Variants
- Bridge
- Revenue
- Healthcare (clinical capability view)

### Unsuitable Contexts
- Variants needing narrative flow
- Audiences unfamiliar with matrices
- Mobile-first (matrix is complex)

### Dependencies
- Capability taxonomy
- Service-to-capability mapping
- Grid layout system

### Accessibility Considerations
- Matrix must be navigable
- Headers must be properly associated
- Indicators must have text alternatives

---

## engagement-model

### Purpose
Lead with how Beverly works, not what she offers. The engagement model becomes the primary organizational principle.

### Visual Characteristics
- Three engagement types as primary elements
- Visual distinction between models
- "Best for" or suitability indicators
- Clean, structured cards or sections
- Professional, consulting feel

### Layout Characteristics
- Three-column or three-row layout
- Each model is a distinct block
- Consistent structure per model
- May include pricing or timeline indicators
- Comparison-friendly

### Suitable Variants
- Default
- Strategist
- Venture

### Unsuitable Contexts
- Variants where services are more important than engagement models
- Variants with custom engagement approaches
- Mobile-first (three-column is tight)

### Dependencies
- Three engagement models defined
- Comparison structure
- Card or block layout

### Accessibility Considerations
- Models must be distinguishable
- Comparison must be navigable
- "Best for" criteria must be available


---

# Navigation Patterns

## editorial

### Purpose
Navigation feels like a table of contents or masthead. Traditional, authoritative, magazine-like.

### Visual Characteristics
- Serif or display typography
- Generous spacing between links
- Underline or decorative hover states
- Left-aligned or centered
- Refined, not minimal

### Layout Characteristics
- Horizontal row or column
- Generous gap between items
- Underline animation on hover
- Brand/name on opposite side
- Active state clearly indicated

### Suitable Variants
- Default
- Global
- Healthcare

### Unsuitable Contexts
- Minimalist variants
- Technical or system-focused variants
- Mobile-first (horizontal nav is problematic)

### Dependencies
- Sufficient horizontal space
- Display typography
- Hover state styling

### Accessibility Considerations
- Active state must be clearly indicated
- Hover states must have focus equivalents
- Spacing must meet touch target requirements

---

## minimal

### Purpose
Navigation recedes. The focus is on content, not navigation. Authority through reduction.

### Visual Characteristics
- Small, unadorned text
- Minimal spacing
- No decorative elements
- Low contrast until interaction
- Functional, not beautiful

### Layout Characteristics
- Compact horizontal row
- Tight letter-spacing
- No underlines or decorations
- Transparent or minimal background
- May hide on scroll

### Suitable Variants
- Strategist
- Bridge

### Unsuitable Contexts
- Variants where navigation is a brand element
- Variants with many nav items
- Audiences needing clear wayfinding

### Dependencies
- Sufficient contrast for readability
- Compact font stack
- Scroll-based hide/show logic

### Accessibility Considerations
- Reduced visual styling must not reduce usability
- Active state must still be clear
- Focus indicators must be visible

---

## floating

### Purpose
Navigation appears to float above content. Modern, layered, app-like feel.

### Visual Characteristics
- Translucent background
- Backdrop blur or saturation
- Shadow or elevation
- Rounded corners or pills
- Layered appearance

### Layout Characteristics
- Fixed or sticky positioning
- Rounded container
- Shadow for elevation
- May be centered or cornered
- backdrop-filter for glass effect

### Suitable Variants
- Revenue (dark mode floating)
- Venture
- Bridge

### Unsuitable Contexts
- Editorial or traditional variants
- Variants with flat design
- Performance-sensitive contexts (backdrop-filter can be expensive)

### Dependencies
- `backdrop-filter` support
- Translucent backgrounds
- Shadow system

### Accessibility Considerations
- Floating nav must not obscure content
- Background must provide sufficient contrast
- Focus must remain visible through blur

---

## compact

### Purpose
Navigation is minimized to icons or short labels. Saves space for content.

### Visual Characteristics
- Icons instead of text
- Short labels or no labels
- Dense arrangement
- Tooltip or title for clarity
- Modern, app-like

### Layout Characteristics
- Icon row or column
- Tight spacing
- May include text labels below icons
- Hamburger on mobile
- Compact padding

### Suitable Variants
- Venture
- Bridge
- Mobile contexts

### Unsuitable Contexts
- Variants with many navigation items
- Audiences needing clear text labels
- Editorial or traditional variants

### Dependencies
- Icon library or SVG system
- Tooltip implementation
- Hamburger menu for mobile

### Accessibility Considerations
- Icons must have accessible names
- Tooltips must be keyboard accessible
- Hamburger must have `aria-expanded`

---

# Contact Patterns

## traditional

### Purpose
Standard contact section. Email, LinkedIn, phone in a clean footer.

### Visual Characteristics
- Horizontal row of links
- Icon + text format
- Clean, contained block
- Standard footer styling
- Copyright below

### Layout Characteristics
- Horizontal flex row
- Icons with labels
- Centered or left-aligned
- Consistent spacing
- Standard footer padding

### Suitable Variants
- Default
- Strategist
- Healthcare

### Unsuitable Contexts
- Variants where contact is integrated into narrative
- Mobile-first (horizontal row is tight)

### Dependencies
- Contact data available
- Icon system
- Footer layout

### Accessibility Considerations
- Links must have descriptive text
- Icons must be decorative or labeled
- Contact info must be easy to find

---

## conversational

### Purpose
Contact feels like a conversation starter, not a directory listing. Warm, inviting, personal.

### Visual Characteristics
- Question or invitation as headline
- Warm colors
- Generous whitespace
- Personal tone
- May include portrait or signature

### Layout Characteristics
- Single centered column
- Headline above contact links
- Generous padding
- Warm background
- Signature or personal element

### Suitable Variants
- Venture
- Global

### Unsuitable Contexts
- Formal corporate variants
- Variants emphasizing efficiency over relationship
- Dark mode (warm conversation doesn't translate)

### Dependencies
- Conversational copy
- Warm color palette
- Generous spacing

### Accessibility Considerations
- Invitation must be clear
- Contact links must be obvious
- Tone must not obscure purpose


---

## opportunity-led

### Purpose
Contact is framed as an opportunity to explore, not just to get in touch.

### Visual Characteristics
- Question-focused headline
- Open-ended language
- Warm or neutral tones
- May include "Have a problem?" framing
- Exploratory, not transactional

### Layout Characteristics
- Centered or asymmetric
- Headline as primary element
- Contact links as secondary
- Generous whitespace
- May include CTA button

### Suitable Variants
- Venture
- Strategist (executive opportunity)

### Unsuitable Contexts
- Variants where immediate contact is priority
- Variants with transactional framing
- Formal contexts

### Dependencies
- Opportunity-focused copy
- CTA styling
- Warm or neutral palette

### Accessibility Considerations
- Opportunity framing must not obscure contact purpose
- CTA must be clearly labeled
- Links must be obvious

---

## consulting-led

### Purpose
Contact presents Beverly as a consultant or advisor. Professional, engaged, solution-oriented.

### Visual Characteristics
- "Let's discuss" or "Let's talk" framing
- Professional but warm
- Clear next-step language
- May include availability or engagement hints
- Clean, professional styling

### Layout Characteristics
- Centered or contained block
- Clear CTA
- Supporting contact methods
- Professional spacing
- May include availability indicator

### Suitable Variants
- Strategist
- Default
- Healthcare

### Unsuitable Contexts
- Variants with casual or venture framing
- Variants where contact is not the primary goal

### Dependencies
- Consulting-focused copy
- CTA system
- Availability or engagement hints

### Accessibility Considerations
- CTA must be clear and descriptive
- Contact methods must be obvious
- Tone must not obscure purpose

---

# Layout Patterns

## full-bleed

### Purpose
Sections extend to viewport edges, breaking out of content container. Creates dramatic, immersive feel.

### Visual Characteristics
- Background extends full width
- Content remains contained
- Strong visual separation between sections
- Dramatic use of color or imagery
- Editorial or dramatic feel

### Layout Characteristics
- Section background: `width: 100%`
- Content within: `max-width: var(--max-width); margin: 0 auto;`
- Generous padding
- May use different background colors
- Clear section boundaries

### Suitable Variants
- Revenue
- Global
- Venture

### Unsuitable Contexts
- Minimalist variants
- Variants with tight spacing
- Mobile-first (full-bleed can be heavy)

### Dependencies
- Alternating background colors
- Content container system
- Sufficient padding

### Accessibility Considerations
- Full-bleed backgrounds must maintain contrast
- Content must remain readable
- Section boundaries must be clear

### Implementation Example
```css
.layout-full-bleed .metrics-band {
  background: var(--bg-alt);
  width: 100%;
  padding: var(--pad-y) var(--pad-x);
}
.layout-full-bleed .metrics-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}
```

---

## contained

### Purpose
All content within a single centered column. Clean, readable, focused.

### Visual Characteristics
- Single content column
- Generous whitespace on sides
- No background breaks
- Editorial, magazine-like
- Focused reading experience

### Layout Characteristics
- All sections: `max-width: var(--max-width); margin: 0 auto;`
- Consistent horizontal padding
- No full-width backgrounds
- Vertical rhythm emphasized
- Clean section separators

### Suitable Variants
- Default
- Healthcare
- Strategist

### Unsuitable Contexts
- Variants needing visual drama
- Variants with complex layouts
- Data-heavy presentations

### Dependencies
- Content container system
- Consistent padding
- Vertical rhythm system

### Accessibility Considerations
- Line length must be readable (45-75 characters)
- Padding must be sufficient
- Focus must be clear

---

## asymmetric

### Purpose
Break the grid. Create visual interest through offset, overlap, or unexpected alignment.

### Visual Characteristics
- Off-center elements
- Overlapping sections
- Unexpected alignment
- Visual tension
- Editorial or artistic feel

### Layout Characteristics
- Negative margins or transforms
- Grid-breaking elements
- Asymmetric margins
- Overlapping sections
- Deliberate imbalance

### Suitable Variants
- Global
- Venture
- Strategist (minimal asymmetry)

### Unsuitable Contexts
- Variants needing clarity over style
- Technical or system-focused variants
- Mobile-first (asymmetry is hard on narrow viewports)

### Dependencies
- Grid system that allows breaking
- Sufficient viewport width
- Careful spacing calculations

### Accessibility Considerations
- Asymmetry must not disrupt reading order
- Focus must follow visual order
- Overlapping elements must not obscure content


---

# Pattern Transfer Methodology

## How to Borrow a Pattern

### Step 1: Identify the Source

Which variant has the pattern you want to borrow?

Example: "Revenue has an excellent metrics treatment."

### Step 2: Isolate the Pattern

Identify the specific CSS and HTML that implement the pattern.

Look for:
- CSS selectors specific to the pattern
- HTML structure required
- JavaScript dependencies
- Visual and layout characteristics

### Step 3: Document the Contract

Specify what the pattern requires:

```yaml
pattern: giant-numbers
requires:
  - Dark or high-contrast background
  - Large font support
  - Animation system
  - At least 3 metrics
provides:
  - Dominant metric presentation
  - Scroll-triggered counters
  - High visual impact
```

### Step 4: Adapt to Target

Copy the pattern CSS to the target variant's block. Adjust:
- Colors to match target variant palette
- Fonts to match target variant typography
- Spacing to match target variant density
- Remove any source-variant-specific dependencies

### Step 5: Test in Context

Verify the pattern works in the target variant:
- Does it clash with existing styles?
- Does it maintain accessibility?
- Does it work at all breakpoints?
- Does it preserve canonical data?

## Pattern Transfer Example

### Source: Revenue's outcome-metric treatment

```css
/* Revenue's metric treatment */
[data-variant="revenue"] .metric-value {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  color: var(--accent);
}
[data-variant="revenue"] .metric-label {
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}
[data-variant="revenue"] .metric-context {
  color: var(--text-secondary);
}
```

### Target: Healthcare

```css
/* Healthcare's adapted metric treatment */
[data-variant="healthcare"] .metric-value {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--accent);
}
[data-variant="healthcare"] .metric-label {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text);
}
[data-variant="healthcare"] .metric-context {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-style: normal;
}
```

**What changed:**
- Size reduced from `3-5rem` to `2-3rem` (less aggressive)
- Color adapted from amber to Healthcare's green
- Background context added (white card)
- Spacing adjusted for Healthcare's density

**What stayed:**
- Uppercase labels with letter-spacing
- Accent-colored metric values
- Context text in secondary color

## Pattern Composition

A variant is composed of patterns:

```yaml
strategist:
  hero: minimal
  experience: editorial-list
  metrics: proof-strip
  services: consulting-menu
  navigation: minimal
  contact: consulting-led
  layout: contained

revenue:
  hero: oversized-statement
  experience: timeline
  metrics: giant-numbers
  services: bold-cards
  navigation: floating
  contact: opportunity-led
  layout: full-bleed
```

This makes it clear what each variant is made of and enables easy pattern swapping.

## Pattern Dependencies

Some patterns depend on others:

```
system-map (hero)
  └── requires: monospace typography
  └── requires: grid layout
  └── requires: technical navigation

capability-led (experience)
  └── requires: capability taxonomy
  └── requires: service-capability mapping

dashboard-grid (metrics)
  └── requires: dark background
  └── requires: monospace typography
  └── requires: grid layout
```

When borrowing, check dependencies are satisfied in the target variant.

---

# Creating New Patterns

## When to Extract a Pattern

Extract a pattern when:
1. A treatment is successful in one variant
2. You want to use it in another variant
3. The treatment is a distinct, reusable concept
4. It has clear requirements and effects

## Pattern Extraction Process

1. **Identify** — Find the successful treatment in a variant
2. **Name** — Give it a clear, descriptive name
3. **Document** — Fill in the pattern template (purpose, characteristics, etc.)
4. **Isolate** — Extract CSS/HTML into a reusable form
5. **Test** — Verify it works independently
6. **Publish** — Add to DESIGN_DNA.md

## Pattern Template

```markdown
## pattern-name

### Purpose
[What problem does this pattern solve?]

### Visual Characteristics
- [Key visual traits]

### Layout Characteristics
- [Key layout traits]

### Suitable Variants
- [Which variants use this?]

### Unsuitable Contexts
- [When should you NOT use this?]

### Dependencies
- [What does this pattern require?]

### Accessibility Considerations
- [What must be preserved?]

### Implementation Example
```css
[code example]
```

---

# Pattern Registry

## Current Patterns by Category

### Hero (5 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| split-editorial | Default, Global, Healthcare | Stable |
| oversized-statement | Strategist, Revenue, Bridge | Stable |
| metric-hero | Revenue, Venture, Healthcare | Experimental |
| system-map | Bridge | Experimental |
| opportunity-hero | Venture, Global | Experimental |

### Experience (5 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| timeline | Default, Healthcare, Bridge | Stable |
| editorial-list | Strategist, Global, Venture | Stable |
| capability-led | Bridge, Healthcare, Revenue | Experimental |
| company-cards | Venture, Global | Experimental |
| career-journey | Global | Experimental |

### Metrics (5 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| giant-numbers | Revenue, Venture, Healthcare | Stable |
| proof-strip | Default, Strategist, Healthcare | Stable |
| outcome-cards | Healthcare, Strategist | Stable |
| inline-statistics | Bridge | Experimental |
| dashboard-grid | Bridge, Revenue | Stable |

### Services (5 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| expandable-rows | Default, Healthcare, Bridge | Stable |
| bold-cards | Revenue, Venture | Stable |
| problem-solution | Strategist, Healthcare, Venture | Experimental |
| consulting-menu | Strategist, Default | Stable |
| capability-matrix | Bridge, Revenue | Experimental |

### Navigation (4 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| editorial | Default, Global, Healthcare | Stable |
| minimal | Strategist, Bridge | Stable |
| floating | Revenue, Venture | Stable |
| compact | Bridge, Venture | Experimental |

### Contact (4 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| traditional | Default, Strategist, Healthcare | Stable |
| conversational | Venture, Global | Stable |
| opportunity-led | Venture, Strategist | Experimental |
| consulting-led | Strategist, Default | Stable |

### Layout (3 patterns)
| Pattern | Used In | Status |
|---------|---------|--------|
| full-bleed | Revenue, Global, Venture | Stable |
| contained | Default, Healthcare, Strategist | Stable |
| asymmetric | Global, Venture | Experimental |

---

# Implementation Notes

## Current State

The variant system currently uses CSS custom properties and attribute selectors for visual changes, with JavaScript `restructureForVariant()` for structural changes.

## Target State

Design DNA provides a composable pattern system where:
- Patterns are documented, named units
- Patterns can be borrowed across variants
- Pattern contracts specify requirements and effects
- Variants are composed of patterns, not monolithic CSS blocks

## Migration Path

1. **Extract** — Identify patterns in existing variant CSS
2. **Document** — Add patterns to DESIGN_DNA.md
3. **Classify** — Add pattern classes to HTML elements
4. **Compose** — Variants apply patterns via CSS classes
5. **Validate** — Ensure patterns work independently and in combination

## Pattern Class System

Add pattern classes to HTML to enable pattern-based styling:

```html
<!-- Hero with split-editorial pattern -->
<section class="hero hero-split-editorial" data-section="hero">

<!-- Experience with timeline pattern -->
<section class="experience experience-timeline" data-section="experience">

<!-- Metrics with giant-numbers pattern -->
<div class="metrics-band metrics-giant-numbers" data-section="metrics">
```

This allows patterns to be applied independently of variant selection.

## Benefits

- **Reusability:** Patterns can be used across variants
- **Composability:** Variants are built from patterns
- **Maintainability:** Changes to patterns propagate to all variants using them
- **Clarity:** Pattern names communicate intent
- **Flexibility:** Easy to experiment with new combinations

---

# Appendix: Pattern Quick Reference

## By Use Case

| Need | Pattern |
|------|---------|
| Make a bold first impression | oversized-statement |
| Show credibility through numbers | giant-numbers |
| Appeal to technical audience | system-map |
| Show career progression | timeline |
| Emphasize capabilities over jobs | capability-led |
| Keep initial view clean | expandable-rows |
| Show services as packages | bold-cards |
| Recede navigation | minimal |
| Float navigation | floating |
| Invite conversation | opportunity-led |
| Create visual drama | full-bleed |
| Keep focus on content | contained |

## By Variant

| Variant | Core Patterns |
|---------|---------------|
| Default | split-editorial, timeline, proof-strip, expandable-rows, editorial, traditional, contained |
| Strategist | oversized-statement, editorial-list, proof-strip, consulting-menu, minimal, consulting-led, contained |
| Revenue | oversized-statement, timeline, giant-numbers, bold-cards, floating, opportunity-led, full-bleed |
| Bridge | system-map, timeline, dashboard-grid, expandable-rows, minimal, consulting-led, contained |
| Healthcare | split-editorial, timeline, giant-numbers, outcome-cards, expandable-rows, editorial, traditional, contained |
| Global | split-editorial, editorial-list, proof-strip, expandable-rows, editorial, conversational, asymmetric |
| Venture | opportunity-hero, editorial-list, giant-numbers, bold-cards, floating, opportunity-led, asymmetric |

---

*Design DNA is a living document. Patterns are extracted, tested, and refined through use.*
