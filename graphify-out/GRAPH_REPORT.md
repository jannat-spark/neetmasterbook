# Graph Report - digi product page  (2026-10-28)

## Corpus Check
- 70 files · ~446,656 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: .css 1)

## Summary
- 161 nodes · 307 edges · 8 communities (6 shown, 2 thin omitted)
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 50 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Gallery Assets
- Application Logic
- Production Assets
- Project Documentation
- Application Logic 2
- Editorial Assets
- Gallery Assets 2
- Application Logic 3

## God Nodes (most connected - your core abstractions)
1. `NEET Masterbook Sales Page (index.html)` - 56 edges
2. `See the System Gallery` - 30 edges
3. `Production Asset Library` - 27 edges
4. `Production Gallery Images` - 22 edges
5. `init()` - 18 edges
6. `Sales Page Section Architecture` - 15 edges
7. `Complete Project Context & Handoff` - 11 edges
8. `Hero — From Zero to 650+` - 10 edges
9. `setupHeroTilt()` - 9 edges
10. `setupActShowcase()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Complete Image and PDF Asset Inventory` --references--> `NEET 2027 Masterbook — 28-page Elite Edition PDF`  [EXTRACTED]
  PROJECT_CONTEXT.md → product pdf/NEET_2027_Masterbook_Elite_Edition (1).pdf
- `Complete Project Context & Handoff` --references--> `NEET 2027 Masterbook — Elite Edition`  [EXTRACTED]
  PROJECT_CONTEXT.md → product pdf/NEET_2027_Masterbook_Elite_Edition (1).pdf
- `Original Sales Page Master Prompt` --references--> `NEET 2027 Masterbook — Elite Edition`  [EXTRACTED]
  NEET_Masterbook_Sales_Page_Master_Prompt_Final.md → product pdf/NEET_2027_Masterbook_Elite_Edition (1).pdf
- `README — Setup, Configuration and Deployment` --references--> `Instagram, WhatsApp and Email Support`  [EXTRACTED]
  README.md → script.js
- `NEET Masterbook Sales Page (index.html)` --references--> `Sales Page Application Logic (script.js)`  [EXTRACTED]
  index.html → script.js

## Import Cycles
- None detected.

## Communities (8 total, 2 thin omitted)

### Community 0 - "Gallery Assets"
Cohesion: 0.13
Nodes (16): Production Gallery Images, Five Acts, Audience Fit, Purchase FAQ, Final CTA and Footer, Founder Note, See the System Gallery, NEET Masterbook Sales Page (index.html) (+8 more)

### Community 1 - "Application Logic"
Cohesion: 0.11
Nodes (30): Accessible Dialogs, FAQ and Mobile CTA, Founder Note — Sahil, Purchase FAQ and Objection Handling, Gallery Lightbox, 17 Reviews — 4.7/5 Aggregate, applyCreator(), closeDialog(), createReviewCard() (+22 more)

### Community 2 - "Production Assets"
Cohesion: 0.07
Nodes (6): Production Asset Library, Hero — From Zero to 650+, Source Product Images, Responsive Breakpoints, Visual System and Responsive Motion (styles.css), Vertical Method Timeline on Mobile

### Community 3 - "Project Documentation"
Cohesion: 0.14
Nodes (18): Act 1 — Know the Game, Act 2 — Plan the Year, Act 3 — Lock It in Memory, Act 4 — Test. Analyse. Fix., Act 5 — The Final Stretch, Graphify Agent Instructions, Complete Image and PDF Asset Inventory, Checkout and Payment Flow (+10 more)

### Community 4 - "Application Logic 2"
Cohesion: 0.25
Nodes (8): Mobile Act and Review Reveal Stagger, Mobile Scroll-Driven Hero Tilt, setupHeroTilt(), requestScrollTilt(), reset(), setTilt(), updateScrollTilt(), setupMobileActMotion()

### Community 7 - "Application Logic 3"
Cohesion: 0.62
Nodes (7): setupActShowcase(), disableShowcase(), enableShowcase(), requestActiveUpdate(), setActive(), syncShowcase(), updateActiveAct()

## Knowledge Gaps
- **16 isolated node(s):** `Graphify Agent Instructions`, `Sales Page Application Logic (script.js)`, `Act 1 — Know the Game`, `Act 2 — Plan the Year`, `Act 3 — Lock It in Memory` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 29 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `NEET Masterbook Sales Page (index.html)` connect `Gallery Assets` to `Production Assets`, `Editorial Assets`?**
  _High betweenness centrality (0.433) - this node is a cross-community bridge._
- **Are the 28 inferred relationships involving `See the System Gallery` (e.g. with `assets/gallery/banner-01-complete-system-1600.webp` and `assets/gallery/banner-01-complete-system-960.webp`) actually correct?**
  _`See the System Gallery` has 28 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Graphify Agent Instructions`, `Sales Page Application Logic (script.js)`, `Act 1 — Know the Game` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gallery Assets` be split into smaller, more focused modules?**
  _Cohesion score 0.13363363363363365 - nodes in this community are weakly interconnected._
- **Why does `Mobile-First Motion System` connect `Application Logic 2` to `Production Assets`, `Project Documentation`?**
  _High betweenness centrality (0.330) - this node is a cross-community bridge._
- **Should `Application Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.10873440285204991 - nodes in this community are weakly interconnected._
- **Why does `Visual System and Responsive Motion (styles.css)` connect `Production Assets` to `Gallery Assets`, `Application Logic 2`?**
  _High betweenness centrality (0.314) - this node is a cross-community bridge._