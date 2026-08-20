# Content Model

**Version:** 1.0  
**Date:** 2026-08-11  
**Status:** Canonical source of truth  
**Principle:** Content is separate from presentation. Variants interpret canonical facts; they do not alter them.

---

# Overview

This document defines the single source of truth for Beverly Nasimiyu's professional information.

## Core Principle

**Canonical content is factual.** It represents what is true about Beverly's career, skills, and background.

**Variant content is interpretive.** It is a reframing of canonical facts for a specific audience or opportunity.

```
Canonical Facts (this document)
    ↓ [interpreted by]
Variant Copy (in HTML/CSS/JS)
    ↓ [rendered as]
Visual Presentation (browser)
```

## Content Ownership

| Layer | Owner | Mutability |
|-------|-------|------------|
| Canonical data | This document | Immutable unless facts change |
| Variant interpretations | Variant CSS/JS | Mutable per variant |
| Visual styling | CSS | Mutable per variant |
| Layout structure | HTML/CSS | Mutable per variant |

---

# Entities

## PERSON

### Identity

| Field | Value | Notes |
|-------|-------|-------|
| fullName | Beverly Nasimiyu | Canonical spelling |
| firstName | Beverly | |
| lastName | Nasimiyu | |
| portrait | headshot.jpg | Local asset, deployed with site |

### Location

| Field | Value | Notes |
|-------|-------|-------|
| currentCity | Barcelona | |
| currentRegion | Catalonia | |
| currentCountry | Spain | |
| timezone | CET/CEST | Implied by Spain location |
| markets | Kenya, Spain, international | Canonical geographic scope |
| workModes | Hybrid, remote, on-site | As documented in experience |

### Languages

| Language | Proficiency | Notes |
|----------|-------------|-------|
| English | Native/Fluent | Primary working language |
| Swahili | Fluent | Kenyan context |
| Spanish | Professional | Spain residence |

### Contact

| Channel | Value | Notes |
|---------|-------|-------|
| email | beverlynasimiyu@gmail.com | Primary contact |
| phone | +34 711 034 695 | Spain number |
| linkedin | https://www.linkedin.com/in/beverly-nasimiyu | Professional profile |
| linkedinHandle | @beverly-nasimiyu | URL path only |

### Professional Identity

| Field | Value | Notes |
|-------|-------|-------|
| primaryDisciplines | Business Operations, Customer Success | Core positioning |
| experienceYears | 9+ | Approximate, as stated |
| careerStart | 2009 | First documented role |
| careerSpan | 2009 — present | ~16 years |

---

## EXPERIENCE

### Role 1: Regional Lead — MEE

| Field | Value |
|-------|-------|
| company | SAP |
| title | Regional Lead — MEE |
| department | Business Operations & Customer Success |
| location | Barcelona, Catalonia, Spain |
| workMode | Hybrid |
| startDate | 2024-12 |
| endDate | present |
| isCurrent | true |
| responsibilities | Serve as cross-functional operator across the MEE region, aligning Sales, Product, and Services teams to accelerate time-to-value and drive accountability across the customer lifecycle. Own the regional business operations and go-to-market roadmap, coordinating cross-functional initiatives to drive adoption, retention, and revenue expansion. Built and led cross-functional teams to standardize onboarding, renewal, and escalation processes, improving operational consistency and reducing churn risk. Partner with Account Executives and local stakeholders to identify upsell opportunities and influence contract renewals through data-backed recommendations. Established regional KPI frameworks and reporting dashboards to track adoption, account health, and value realization, enabling data-driven decision-making for leadership. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Cross-functional coordination, operational leadership, KPI frameworks, reporting dashboards, stakeholder management, renewal optimization, regional go-to-market |

### Role 2: License Audit Customer Success Partner Advisor

| Field | Value |
|-------|-------|
| company | SAP |
| title | License Audit Customer Success Partner Advisor |
| department | Customer Success |
| location | Barcelona, Catalonia, Spain |
| workMode | Hybrid |
| startDate | 2024-04 |
| endDate | 2024-11 |
| isCurrent | false |
| responsibilities | Advised on license audit and customer success processes, ensuring compliance and operational rigor across the customer lifecycle. Partnered with cross-functional teams to streamline audit workflows and improve customer outcomes. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | License audit, customer success processes, compliance, cross-functional partnership, workflow improvement |

### Role 3: Deal Desk Analyst

| Field | Value |
|-------|-------|
| company | LinkedIn |
| title | Deal Desk Analyst |
| department | Revenue & Sales Operations |
| location | Barcelona, Catalonia, Spain |
| workMode | Hybrid |
| startDate | 2023 |
| endDate | 2024-02 |
| isCurrent | false |
| responsibilities | Operated at the intersection of Revenue Operations, Analytics, and Sales, supporting deal execution, forecasting, and business reporting for a global sales organization. Led integration of Salesforce and finance systems, improving reporting accuracy by 25% and streamlining data flow for faster, better-informed decisions. Customized and administered CPQ processes and dashboards, achieving a 30% reduction in quote turnaround time and improving sales efficiency. Analyzed KPIs and business trends using Tableau and Excel to identify growth opportunities, bottlenecks, and risks across revenue-generating functions. Facilitated compliance and accountability by guiding deals through structured approval workflows. Prepared and delivered operational reports and presentations to stakeholders, enhancing strategic discussions and business reviews. Directed a sales team to increase weekly activity by 20% and improve forecast accuracy by 15% through structured reporting and coaching. Established data-driven pricing best practices, supporting informed commercial decision-making across the organization. |
| metrics | 25% reporting accuracy improvement, 30% quote turnaround reduction, 20% weekly activity increase, 15% forecast accuracy improvement |
| capabilitiesDemonstrated | Salesforce, CPQ, Tableau, Excel, revenue operations, deal execution, forecasting, business reporting, data integration, pricing, sales coaching, approval workflows |

### Role 4: Digital Operations Lead

| Field | Value |
|-------|-------|
| company | Trendy Clothing KE |
| title | Digital Operations Lead |
| department | Operations |
| location | Nairobi County, Kenya |
| workMode | On-site |
| startDate | 2022-01 |
| endDate | 2023-01 |
| isCurrent | false |
| responsibilities | Managed end-to-end onboarding operations, tailoring processes and documentation to client needs and improving implementation consistency. Built trust-based cross-functional relationships that reduced churn risk and improved satisfaction through proactive issue resolution. Collaborated with cross-functional teams to translate customer feedback into product and process improvements, driving a 34% increase in contract renewals. Monitored progress against milestones and provided operational guidance during implementation to ensure smooth, on-time delivery. Used data analysis and A/B testing to optimize marketing operations, achieving a 46% increase in campaign engagement. |
| metrics | 34% contract renewal increase, 46% campaign engagement increase |
| capabilitiesDemonstrated | Onboarding operations, process documentation, cross-functional collaboration, customer feedback translation, milestone management, data analysis, A/B testing, marketing optimization |

### Role 5: Marketing Operations Manager

| Field | Value |
|-------|-------|
| company | Trendy Clothing KE |
| title | Marketing Operations Manager |
| department | Marketing |
| location | Nairobi County, Kenya |
| workMode | On-site |
| startDate | 2021-03 |
| endDate | 2021-12 |
| isCurrent | false |
| responsibilities | Led marketing operations strategy and execution, coordinating campaigns and cross-functional initiatives to drive business growth. Managed marketing workflows, budget allocation, and performance tracking to optimize campaign effectiveness and ROI. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Marketing strategy, campaign coordination, workflow management, budget allocation, performance tracking, ROI optimization |

### Role 6: Marketing Assistant

| Field | Value |
|-------|-------|
| company | Trendy Clothing KE |
| title | Marketing Assistant |
| department | Marketing |
| location | Nairobi County, Kenya |
| workMode | Hybrid |
| startDate | 2018-06 |
| endDate | 2021-02 |
| isCurrent | false |
| responsibilities | Supported marketing operations and campaign execution, contributing to increased brand visibility and customer engagement. Assisted with market research, content coordination, and performance reporting to inform marketing strategy. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Campaign support, brand visibility, market research, content coordination, performance reporting |

### Role 7: Sales and Marketing Consultant

| Field | Value |
|-------|-------|
| company | Soluble Code |
| title | Sales and Marketing Consultant |
| department | Sales / Marketing |
| location | Nairobi County, Kenya |
| workMode | Full-time |
| startDate | 2016-03 |
| endDate | 2018-05 |
| isCurrent | false |
| responsibilities | Provided sales and marketing consulting services, developing strategies to drive customer acquisition and revenue growth. Conducted market research and implemented marketing initiatives to improve brand positioning and market reach. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Sales strategy, marketing consulting, customer acquisition, revenue growth, market research, brand positioning |

### Role 8: Research and Marketing Consultant

| Field | Value |
|-------|-------|
| company | Go Touch Down Travel and Tours |
| title | Research and Marketing Consultant |
| department | Marketing / Research |
| location | Hybrid |
| workMode | Full-time |
| startDate | 2015-03 |
| endDate | 2016-02 |
| isCurrent | false |
| responsibilities | Led market research and marketing initiatives to support business development and customer engagement strategies. Developed insights that informed product positioning and marketing campaigns. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Market research, business development, customer engagement, product positioning, marketing campaigns |

### Role 9: Brand Ambassador

| Field | Value |
|-------|-------|
| company | Golden Marketing |
| title | Brand Ambassador |
| department | Marketing |
| location | Nairobi County, Kenya |
| workMode | Part-time |
| startDate | 2013-04 |
| endDate | 2014-04 |
| isCurrent | false |
| responsibilities | Represented the brand at events and in-market, building awareness and driving engagement with target audiences. Collected customer feedback and market insights to inform brand strategy and campaign development. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Brand representation, event marketing, audience engagement, customer feedback collection, market insights |

### Role 10: Product Marketing Specialist

| Field | Value |
|-------|-------|
| company | Weetabix East Africa |
| title | Product Marketing Specialist |
| department | Marketing |
| location | Nairobi County, Kenya |
| workMode | Contract |
| startDate | 2012-01 |
| endDate | 2013-03 |
| isCurrent | false |
| responsibilities | Supported product marketing initiatives, including sales enablement, promotional campaigns, and market analysis. Developed materials and strategies to drive product adoption and market share. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Product marketing, sales enablement, promotional campaigns, market analysis, product adoption, market share |

### Role 11: Administrative Assistant / Office Manager

| Field | Value |
|-------|-------|
| company | Armco Kenya Ltd |
| title | Administrative Assistant / Office Manager |
| department | Administration |
| location | Nairobi County, Kenya |
| workMode | On-site |
| startDate | 2009-12 |
| endDate | 2011-12 |
| isCurrent | false |
| responsibilities | Managed office operations, administrative processes, and team coordination to ensure smooth day-to-day functioning. Supported executive and team operations through process organization, documentation, and stakeholder communication. |
| metrics | None explicitly stated |
| capabilitiesDemonstrated | Office management, administrative processes, team coordination, process organization, documentation, stakeholder communication |

---

## EDUCATION

### Entry 1: MBA

| Field | Value |
|-------|-------|
| degree | Master of Business Administration |
| abbreviation | MBA |
| institution | United States International University-Africa |
| abbreviation | USIU-Africa |
| startDate | 2022 |
| endDate | 2025 |
| location | Kenya |
| highlight | true | Primary degree for business positioning |

### Entry 2: BSc Medical Laboratory Science

| Field | Value |
|-------|-------|
| degree | Bachelor of Science Medical Laboratory Science |
| abbreviation | BSc Medical Laboratory Science |
| institution | Kenyatta University |
| startDate | 2012 |
| endDate | 2016 |
| location | Kenya |
| highlight | false | Secondary degree, science foundation |

---

## CAPABILITIES

### Domain Capabilities

| Capability | Evidence Source | Proficiency Level |
|------------|-----------------|-------------------|
| Business Operations | SAP Regional Lead, Trendy Clothing KE | Expert |
| Revenue Operations | LinkedIn Deal Desk Analyst | Expert |
| Customer Success | SAP Customer Success Partner Advisor | Expert |
| Sales | LinkedIn Deal Desk, Soluble Code | Proficient |
| Marketing | Trendy Clothing KE, Golden Marketing, Weetabix | Proficient |
| Analytics | LinkedIn (Tableau, Excel), Trendy Clothing KE (A/B testing) | Proficient |
| Process Improvement | All roles | Expert |
| Executive Support | SAP regional leadership, compact header nav | Expert |
| Automation & AI | Summary point, service offering | Proficient |
| Cross-Functional Coordination | SAP, LinkedIn, Trendy Clothing KE | Expert |
| Strategic Planning | SAP regional roadmap, LinkedIn forecasting | Expert |
| Stakeholder Management | SAP AEs, LinkedIn stakeholders | Expert |
| Team Leadership | SAP cross-functional teams, LinkedIn sales team | Proficient |
| Change Management | Implied through process standardization | Proficient |

### Technical Tools

| Tool | Context | Proficiency |
|------|---------|-------------|
| Salesforce | LinkedIn integration, CPQ | Expert |
| CPQ | LinkedIn customization and administration | Expert |
| Tableau | LinkedIn KPI analysis | Proficient |
| Excel | LinkedIn, Trendy Clothing KE | Expert |
| SAP | Current employer | Expert |

### Methodologies

| Methodology | Context |
|-------------|---------|
| KPI frameworks | SAP regional dashboards |
| Operational reporting | LinkedIn, SAP |
| Dashboard design | SAP, LinkedIn |
| Workflow mapping | All operations roles |
| SOP development | SAP standardization |
| A/B testing | Trendy Clothing KE marketing |
| Approval workflows | LinkedIn deal desk |
| Pricing strategy | LinkedIn data-driven pricing |

---

## OUTCOMES

### Verified Metrics

| Metric | Value | Source Role | Context |
|--------|-------|-------------|---------|
| reportingAccuracyImprovement | 25% | LinkedIn — Deal Desk Analyst | Salesforce and finance systems integration |
| quoteTurnaroundReduction | 30% | LinkedIn — Deal Desk Analyst | CPQ process customization |
| weeklyActivityIncrease | 20% | LinkedIn — Deal Desk Analyst | Sales team direction through structured reporting |
| forecastAccuracyImprovement | 15% | LinkedIn — Deal Desk Analyst | Structured reporting and coaching |
| contractRenewalIncrease | 34% | Trendy Clothing KE — Digital Operations Lead | Cross-functional process improvements |
| campaignEngagementIncrease | 46% | Trendy Clothing KE — Digital Operations Lead | Data analysis and A/B testing |
| yearsOfExperience | 9+ | Career summary | 2009 to present |

### Unverified Claims

| Claim | Source | Status |
|-------|--------|--------|
| "improving operational consistency" | SAP role | Qualitative, not quantified |
| "reducing churn risk" | SAP role | Qualitative, not quantified |
| "accelerate time-to-value" | SAP role | Qualitative, not quantified |
| "improve forecast accuracy" | LinkedIn role | Part of 15% metric above |
| "increase weekly activity" | LinkedIn role | Part of 20% metric above |

### Outcome Themes

| Theme | Associated Metrics |
|-------|-------------------|
| Data reliability | 25% reporting accuracy |
| Speed / efficiency | 30% quote turnaround |
| Revenue enablement | 20% activity, 15% forecast accuracy |
| Retention | 34% contract renewal |
| Marketing effectiveness | 46% campaign engagement |

---

## SERVICES

### Service 1: Operations & Process

| Field | Value |
|-------|-------|
| id | 1 |
| name | Operations & Process |
| subtitle | Bring structure to a business that's getting harder to manage. |
| includes | Process and workflow review, SOP development and standardization, Operational documentation, Workflow improvement, Cross-functional process alignment, KPI and accountability frameworks |
| bestFor | Businesses that have grown quickly and need their operations to catch up. |
| capabilities | Operations, Process Improvement, Documentation, Cross-Functional Coordination |
| canonicalProblem | Business complexity outrunning management capacity |
| canonicalOutcome | Standardized processes, clear accountability, operational consistency |

### Service 2: Revenue Operations

| Field | Value |
|-------|-------|
| id | 2 |
| name | Revenue Operations |
| subtitle | Make the journey from opportunity to close more organized, visible and efficient. |
| includes | Sales and revenue workflow review, Deal process optimization, CPQ process review, Approval workflow improvement, Pipeline and KPI reporting, Sales-process documentation, Identification of operational bottlenecks |
| bestFor | Sales teams that need better processes, reporting and operational visibility. |
| capabilities | Revenue Operations, Salesforce, CPQ, Pipeline Management, KPI Reporting |
| canonicalProblem | Disconnected revenue processes creating friction and delay |
| canonicalOutcome | Faster deal velocity, cleaner pipeline visibility, reduced operational friction |

### Service 3: Customer Success

| Field | Value |
|-------|-------|
| id | 3 |
| name | Customer Success |
| subtitle | Build a more consistent journey from onboarding to renewal. |
| includes | Customer onboarding process design, Renewal workflow review, Escalation process design, Customer-health KPI frameworks, Customer journey documentation, Cross-functional customer-success workflows, Retention and churn-risk processes |
| bestFor | Businesses looking to improve customer experience, retention and operational consistency. |
| capabilities | Customer Success, Onboarding, Renewal, Escalation, Churn Prevention, Customer Health |
| canonicalProblem | Inconsistent customer journeys leading to avoidable churn |
| canonicalOutcome | Higher retention, smoother onboarding, proactive escalation |

### Service 4: Data & Business Reporting

| Field | Value |
|-------|-------|
| id | 4 |
| name | Data & Business Reporting |
| subtitle | Turn scattered business information into reporting leaders can actually use. |
| includes | KPI identification, Operational reporting, Dashboard structure, Excel / Google Sheets reporting, Tableau reporting support, Business-performance tracking, Data-backed recommendations |
| bestFor | Teams spending too much time collecting information and not enough time using it. |
| capabilities | Analytics, Tableau, Excel, Dashboard Design, KPI Frameworks, Operational Reporting |
| canonicalProblem | Leadership decisions made without reliable, timely data |
| canonicalOutcome | Trusted dashboards, faster decisions, less time gathering data |

### Service 5: Automation & Workflow

| Field | Value |
|-------|-------|
| id | 5 |
| name | Automation & Workflow |
| subtitle | Find the repetitive work, simplify it, and build a better way of working. |
| includes | Workflow mapping, Process automation opportunities, Data-flow improvement, SOP optimization, AI-assisted workflow opportunities, Operational efficiency review, Automation recommendations |
| bestFor | Teams where repetitive processes are consuming time and creating avoidable errors. |
| capabilities | Automation, AI, Workflow Mapping, SOP Optimization, Data Flow, Process Efficiency |
| canonicalProblem | Manual, repetitive work consuming capacity that should go to higher-value activities |
| canonicalOutcome | Reduced manual work, fewer errors, faster execution |

### Service 6: Business / Executive Support

| Field | Value |
|-------|-------|
| id | 6 |
| name | Business / Executive Support |
| subtitle | Bring an experienced operator into the room when you need things to move. |
| includes | Executive-ready reporting, Meeting preparation and follow-through, Cross-functional coordination, Project and program support, Stakeholder communication, Business reviews, Operational planning |
| bestFor | Founders, executives and growing teams that need additional operational horsepower without immediately building another full-time function. |
| capabilities | Executive Support, Reporting, Meeting Management, Cross-Functional Coordination, Project Management, Stakeholder Communication, Business Reviews |
| canonicalProblem | Leadership teams lacking operational bandwidth to execute on priorities |
| canonicalOutcome | Better-prepared leadership, executed initiatives, coordinated teams |

### Build-Your-Own Options

| Option | Associated Services |
|--------|-------------------|
| Operations | Operations & Process, Automation & Workflow |
| Revenue | Revenue Operations, Data & Business Reporting |
| Customer Success | Customer Success, Operations & Process |
| Data | Data & Business Reporting, Automation & Workflow |
| Automation | Automation & Workflow, Operations & Process |

---

## ENGAGEMENT MODELS

### Focused Sprint

| Field | Value |
|-------|-------|
| name | Focused Sprint |
| description | A defined problem. A defined outcome. |
| bestFor | A process review, dashboard, workflow improvement, SOP development or operational challenge. |
| duration | Short-term, defined scope |
| structure | Single deliverable or defined outcome |
| canonicalUseCase | Targeted operational fix with clear success criteria |

### Project Engagement

| Field | Value |
|-------|-------|
| name | Project Engagement |
| description | A larger operational initiative with a clear beginning and end. |
| bestFor | Process redesign, customer-success improvements, revenue-operations initiatives or reporting projects. |
| duration | Medium-term, bounded project |
| structure | Phased delivery with milestones |
| canonicalUseCase | Cross-functional initiative requiring sustained operational leadership |

### Ongoing Partnership

| Field | Value |
|-------|-------|
| name | Ongoing Partnership |
| description | Flexible operational support for businesses that need an experienced operator in their corner. |
| bestFor | Founders, growing businesses and teams that need continued support across operations, reporting, customer success or process improvement. |
| duration | Open-ended, retainer-style |
| structure | Recurring support, flexible scope |
| canonicalUseCase | Sustained operational capacity without full-time hire |

---

## CANONICAL OUTCOME STATEMENTS

### Primary Outcome

| Field | Value |
|-------|-------|
| headline | The Outcome |
| body | More clarity. Better processes. Better visibility. Less operational friction. |
| ctaText | Let's talk about what you're trying to improve |
| ctaTarget | #contact |

### Outcome Decomposition

| Outcome Component | Canonical Meaning |
|-------------------|-------------------|
| More clarity | Defined processes, clear accountability, reduced ambiguity |
| Better processes | Standardized workflows, documented procedures, consistent execution |
| Better visibility | Dashboards, KPI tracking, real-time operational data |
| Less operational friction | Reduced bottlenecks, smoother handoffs, fewer errors |

---

## TRANSFORMATION RULES

### What Variants MAY Do

Variants may reinterpret canonical data through:

| Transformation | Example |
|----------------|---------|
| Rephrase | "Led integration of Salesforce and finance systems, improving reporting accuracy by 25%" → "Improved commercial reporting infrastructure behind revenue decisions" |
| Reorder | Move metrics section before experience |
| Emphasize | Highlight different metrics or capabilities |
| Reframe | Change hero subtitle to target different audience |
| Group | Combine services differently |
| Add section | New section that didn't exist before |
| Remove section | Hide non-essential sections |
| Change visual metaphor | Editorial vs. technical vs. clinical aesthetic |
| Change typography voice | Serif authority vs. sans clarity vs. mono precision |

### What Variants MAY NOT Do

Variants may NOT:

| Prohibition | Reason |
|-------------|--------|
| Change metric values | 25% is 25% |
| Change dates | Employment dates are factual |
| Change company names | SAP is SAP |
| Change role titles | Exact titles as held |
| Change contact details | Email, phone, LinkedIn are canonical |
| Change education facts | Institutions, dates, degrees |
| Change location facts | Barcelona, Kenya, etc. |
| Invent new metrics | Cannot create outcomes that didn't happen |
| Change language names | English, Swahili, Spanish |
| Alter factual responsibilities | Can rephrase, cannot add/remove duties |

### Transformation Examples

#### Revenue Variant Interpretation

**Canonical:**
> "Led integration of Salesforce and finance systems, improving reporting accuracy by 25% and streamlining data flow for faster, better-informed decisions."

**Revenue Interpretation:**
> "Improved the commercial reporting infrastructure behind revenue decisions."

**What changed:** Removed specific tools (Salesforce), removed metric (25%), changed emphasis from "data flow" to "commercial reporting infrastructure."

**What stayed:** The fact that systems were integrated, that data flow improved, that decisions were better-informed.

#### Strategist Variant Interpretation

**Canonical:**
> "Led integration of Salesforce and finance systems, improving reporting accuracy by 25% and streamlining data flow for faster, better-informed decisions."

**Strategist Interpretation:**
> "Connected fragmented business systems to give leadership more reliable operational visibility."

**What changed:** Removed specific tools (Salesforce), removed metric (25%), reframed from technical integration to strategic connectivity.

**What stayed:** The fact that systems were integrated, that reliability improved, that leadership benefited.

#### Bridge (Tech) Variant Interpretation

**Canonical:**
> "Led integration of Salesforce and finance systems, improving reporting accuracy by 25% and streamlining data flow for faster, better-informed decisions."

**Bridge Interpretation:**
> "Improved data flow between Salesforce and finance systems, increasing reporting accuracy by 25%."

**What changed:** Kept metric (25%), kept tools (Salesforce), simplified language.

**What stayed:** The exact outcome and tools involved.

---

## ENTITY RELATIONSHIPS

```
PERSON
├── HAS_CONTACT → Contact channels
├── HAS_LOCATION → Geographic context
├── SPEAKS → Languages
├── HAS_EXPERIENCE → Experience roles
├── HAS_EDUCATION → Education entries
├── POSSESSES → Capabilities
├── HAS_DELIVERED → Outcomes
├── OFFERS → Services
└── WORKS_VIA → Engagement Models

EXPERIENCE_ROLE
├── AT_COMPANY → Company
├── HAS_TITLE → Job title
├── DURING_PERIOD → Date range
├── AT_LOCATION → Location
├── INCLUDES → Responsibilities
├── ACHIEVED → Metrics
└── DEMONSTRATED → Capabilities

SERVICE
├── HAS_NAME → Service name
├── INCLUDES → Service deliverables
├── TARGETS → Best-for audience
└── REQUIRES → Capabilities

ENGAGEMENT_MODEL
├── HAS_NAME → Model name
├── DESCRIBED_AS → Description
├── SUITABLE_FOR → Best-for audience
└── HAS_CHARACTERISTICS → Duration, structure

OUTCOME
├── HAS_METRIC → Measurable result
├── AT_VALUE → Numeric value
├── DEMONSTRATED_IN → Source role
└── ENABLED_BY → Capabilities
```

---

## VARIANT CONTENT MAPPING

### Default Variant

- Uses canonical hero subtitle: "Business Operations & Customer Success Executive"
- Uses canonical summary lead verbatim
- Uses canonical service subtitles verbatim
- Uses canonical outcome statement verbatim
- Uses canonical engagement model descriptions verbatim

### Revenue Variant

- Hero subtitle: Interpreted for revenue audience
- Summary lead: Reinterpreted for commercial leadership
- Metrics: Emphasized (larger size, prominent placement)
- Service subtitles: Reinterpreted for sales/revenue teams
- Outcome: Amber CTA, reversed emphasis

### Bridge (Tech) Variant

- Hero subtitle: Reinterpreted for technology audience
- Typography: Monospace accents, system-diagram feel
- Section labels: Monospace, technical feel
- Service subtitles: Reinterpreted for engineering/tech stakeholders

### Healthcare Variant

- Hero subtitle: Reinterpreted for health/MedTech audience
- Typography: Clinical restraint, green accent
- Service subtitles: Reinterpreted for healthcare organizations

### Global Variant

- Hero subtitle: Reinterpreted for international audience
- Typography: European editorial, italic headlines
- Languages: Emphasized (uppercase, tracked)
- Locations: Spain/Kenya foregrounded

### Venture Variant

- Hero subtitle: Conversational, opportunity-focused
- Summary lead: Italic, personal tone
- Services: Reinterpreted as collaborative exploration
- Outcome: Warm, inviting CTA

---

## DATA INTEGRITY RULES

### Immutable Fields

These fields are NEVER modified by variants:

- `person.fullName`
- `person.email`
- `person.phone`
- `person.linkedin`
- `person.languages[]`
- `education[].degree`
- `education[].institution`
- `education[].dates`
- `experience[].company`
- `experience[].title`
- `experience[].dates`
- `experience[].location`
- `outcomes[].value`
- `services[].name`
- `engagementModels[].name`

### Mutable Fields

These fields CAN be reinterpreted by variants:

- `hero.subtitle` → variant interpretation
- `hero.statement` → variant interpretation
- `summary.lead` → variant interpretation
- `summary.points[]` → variant emphasis
- `service.subtitle` → variant interpretation
- `service.includes[]` → variant emphasis/reorder
- `service.bestFor` → variant interpretation
- `engagementModel.description` → variant interpretation
- `engagementModel.bestFor` → variant interpretation
- `cta.text` → variant interpretation
- `sectionOrder` → variant reordering

### Validation

Before any variant is deployed:

1. All immutable fields must match canonical data
2. All metric values must be exact
3. All contact details must be exact
4. All dates must be exact
5. All company/title combinations must be exact

---

# Implementation Notes

## Current State

Canonical data is currently embedded in HTML across three files:
- `index.html` — locked prototype
- `variant.html` — variant system
- `explorer.html` — variant overview

## Target State

Canonical data should exist in a single source that all variants reference. Proposed structure:

```
content/
├── person.json
├── experience.json
├── education.json
├── capabilities.json
├── outcomes.json
├── services.json
└── engagement-models.json
```

## Migration Path

1. Extract canonical data into JSON files
2. Update HTML to consume JSON via JavaScript
3. Variant system reads canonical data and applies transformations
4. HTML becomes pure presentation layer

## Benefits

- Single source of truth
- Variants cannot accidentally mutate canonical data
- Content updates require editing one file
- Variant interpretations are explicit and auditable
- New variants can be created without duplicating content
