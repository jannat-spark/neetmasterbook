# NEET 2027 MASTERBOOK — PREMIUM SALES PAGE: MASTER BUILD PACK

---

# PART 1 — MASTER PROMPT (paste this)

## 1.1 Role & goal
You are a senior brand designer + front-end engineer. Build a **single-product sales page** for a digital product. One goal: a NEET aspirant (or their parent) lands from Instagram on a phone, trusts it within 5 seconds, understands exactly what they get, and buys. Not a startup landing page. Not a SaaS template. It must feel like a **premium, editorial product launch** — think Apple product page restraint + a luxury stationery brand, with a dark "mission-control" soul.

## 1.2 Product facts (use exactly; invent nothing else)
- Name: **NEET 2027 Masterbook — Elite Edition**
- Tagline: *From zero to 0 → 650+*
- Positioning line: **"A control panel for your NEET preparation — not another decorative timetable."**
- What it is: 28-page A4 PDF planner/system. Print it or fill it digitally. **It is a planning + tracking + revision system. It is NOT lecture notes, NOT a question bank, NOT a course.** Say this clearly — honesty is the trust strategy.
- 5 Acts:
  1. **Know the Game** — exam blueprint, full syllabus (Physics 20 / Chemistry 20 / Biology 10 units, with high-yield tags + L-P-Y-R tracking), profile & subject-wise target
  2. **Plan the Year** — 4-phase roadmap, 12-month battle map, 30-day sprint planner, weekly command centre, daily execution tracker
  3. **Lock It in Memory** — 0-1-3-7-21 spaced revision engine, active recall page, 6-point chapter completion gate
  4. **Test. Analyse. Fix.** — backlog killer (A/B/C), score-target breakdown, mock-test command centre, test analysis (where marks went), error log, PYQ analyzer, 7-day weak-topic rescue
  5. **The Final Stretch** — full syllabus completion board, final 30-day compression plan, exam-day checklist
- Exam baseline shown inside: 180 questions · 720 marks · 180 minutes · +4 / −1 · Physics 45, Chemistry 45, Biology 90. Based on the confirmed NEET 2026 structure; 2027 bulletin not yet released — the book says so and tells students to update.
- Format: instant-download PDF · works on phone, tablet, PC · print-ready A4.
- **Price: ₹69 launch offer for the first 400 customers, then ₹99.** Show ₹99 struck through.
- Domain shown on cover: neetmasterbook.com
- Checkout: external payment link (Razorpay / Instamojo / Gumroad) — put in `CONFIG.checkoutUrl`.

## 1.3 Brand system (use exactly — it matches the product)
```
--ink:        #0B1712   /* base dark, forest-ink, NOT pure black */
--ink-2:      #132821
--ink-line:   #26382F
--gold:       #C9962F
--gold-lt:    #F0C878   /* glow */
--cream:      #FBF6EC   /* light sections */
--cream-2:    #F3ECDB
--text:       #1B2420
--muted:      #6E7568
--bio:  #1E8A5C   --chem: #C96A13   --phy: #2E4FB0   --crimson: #A83A46
```
- Fonts: **Poppins** (700 display / 400-500 body) + **Lora italic** for taglines/quotes only. Load from Google Fonts with `display=swap`; fallback `system-ui`. No other fonts.
- Subject colour-coding (Bio green / Chem amber / Phy blue) is a recurring motif: use it on chips, icons, section markers.
- Signature motifs from the book (reuse, they make the page feel *the same brand*): **circular progress gauge**, **dashed gold trajectory line (0 → 650+)**, faint **blueprint grid** on dark sections, small-caps tracked labels like `ACT 02 · PLAN THE YEAR`, hairline gold rules.
- Rhythm: alternate **dark (ink)** and **cream** sections. Dark = emotion/hero/price. Cream = proof/detail/FAQ.
- Voice: short, confident, honest, a bit blunt. Exactly like the book ("Your job is not to study hard. Your job is to reduce uncertainty every week.").

## 1.4 ANTI-SLOP RULES (hard constraints)
- NO purple/blue neon gradients, NO glassmorphism card piles, NO "AI mesh blob" backgrounds, NO floating 3D emoji/abstract shapes.
- NO emoji as icons. Use custom inline SVG line icons (1.6px stroke, gold/cream).
- NO Inter/Roboto/system-look typography. NO centred-everything symmetrical 3-card grids repeated down the page. Vary layout: asymmetric splits, a horizontal-scroll showcase, a sticky-scroll section, big typographic moments.
- NO stock-photo people, NO fake avatars, NO "Trusted by 10,000+ students" or any number I did not give you.
- NO generic copy: ban "unlock your potential", "revolutionary", "game-changer", "supercharge", "seamless".
- NO fake urgency: no countdown timers that reset, no random "X people are viewing". Scarcity = a real seat counter driven by `CONFIG.soldCount` (I update it manually).
- Every animation must have a purpose and respect `prefers-reduced-motion`.

## 1.5 Page structure (build in this order)

**0. Sticky announcement bar (ink):** `Launch offer — ₹69 for the first 400 students. Then ₹99.` + small seats-left text from CONFIG. Dismissible no; slim (36px).

**1. Header:** wordmark "NEET MASTERBOOK" (Poppins 700, tracked, gold dot), right: "Inside", "FAQ", and gold pill **Get it — ₹69**.

**2. HERO (dark, full viewport, blueprint grid + soft gold radial glow bottom):**
- Left (desktop) / top (mobile): small-caps `ELITE EDITION · NEET 2027`; H1 **"From zero to 650+. One system."** (with "0 → 650+" in gold-gradient text); sub = positioning line; two CTAs: primary gold **"Get the Masterbook — ₹69"** (with ~~₹99~~), secondary ghost "See inside ↓"; micro-trust row under CTAs: `Instant PDF download · Phone, tablet, PC · Print-ready A4 · Secure payment`.
- Right: the **product mockup** (`product-mockup.webp`) large, with: pointer-driven 3D tilt (±8°, perspective 1200px, smooth lerp), a soft gold under-glow that follows tilt, subtle idle float (6s ease, 8px). On mobile use gentle gyro/scroll-driven tilt instead of pointer.
- Behind the book: the dashed gold trajectory line draws itself on load (SVG stroke-dashoffset, 2.4s) from bottom-left to a glowing ring at top-right, with markers 0 · 180 · 360 · 540 · 650+.
- Bottom of hero: 4-stat strip with count-up on view: `180 Questions · 720 Marks · 180 Minutes · +4/−1`.

**3. THE PROBLEM (cream):** big typographic section, left-aligned, no cards. Headline: **"You don't have a motivation problem. You have a system problem."** Three short lines with strike-through animation as user scrolls: "5 different trackers." / "A syllabus PDF you've 'started' four times." / "Mock tests you never analysed." Then: "The Masterbook replaces all of it with one page you open every day." Optional right image: `study-night.webp`.

**4. WHAT IT IS / ISN'T (dark):** honest two-column. Left "It is" (planner, tracker, revision engine, test analyser). Right "It is not" (not lecture notes, not a question bank, not a magic trick). Closing line (Lora italic): *"Marks come from your work. This makes sure the work counts."*

**5. THE 5 ACTS — sticky-scroll showcase (the centrepiece):** Left column sticky with large act number + title + 3-4 bullet outcomes; right column uses the illustrative visual assets (`gallery-01-roadmap.webp`, `gallery-02-weekly-control.webp`, `gallery-03-memory-loop.webp`, `gallery-04-test-analysis.webp`, `gallery-07-final-stretch.webp`) crossfading/translating as each act scrolls into view. These are conceptual illustrations, not screenshots of actual PDF pages. Active act highlights with its colour (gold/blue/green/amber/crimson). A vertical progress gauge on the side fills as you scroll (reuses book's gauge). On mobile: stacked acts with horizontal swipe galleries.

## 6. SEE HOW THE SYSTEM HELPS — PREMIUM FEATURE GALLERY

Create a premium, full-width editorial gallery using the seven supplied banner images. The images are visual illustrations of the product's actual features, not screenshots of the PDF.

**CRITICAL REQUIREMENT:** Every image MUST have a visible headline and a clear supporting description directly beneath it or alongside it. Never display an image without explanatory text. Visitors must understand the feature and its practical value without having to guess what the illustration means.

Do not generate text inside the images. Render all headings and descriptions using HTML/CSS with the website's existing Poppins typography, forest-green and gold palette, and responsive spacing.

Use these exact image filenames, headlines and descriptions:

### Image 1 — `banner-01-complete-system.webp`

**Headline:** Five Parts. One Preparation System.

**Description:** Bring syllabus tracking, yearly planning, revision, mock-test analysis and final preparation into one organised workflow.

### Image 2 — `banner-02-syllabus-map.webp`

**Headline:** Know What's Left. Know What's Next.

**Description:** Organise Physics, Chemistry and Biology with subject-wise syllabus tracking and chapter-completion markers.

### Image 3 — `banner-03-planning-workflow.webp`

**Headline:** Turn the Year Into Today's Work.

**Description:** Break your preparation roadmap into 30-day sprints, weekly plans and daily tasks so you know what to work on next.

### Image 4 — `banner-04-revision-engine.webp`

**Headline:** Revision Needs a Schedule.

**Description:** Use the 0–1–3–7–21 revision loop to organise repeat reviews and active recall instead of relying on last-minute revision.

### Image 5 — `banner-05-test-analysis.webp`

**Headline:** Test. Analyse. Fix.

**Description:** Track mock-test performance, record recurring mistakes and turn weak topics into corrective revision tasks.

### Image 6 — `banner-06-backlog-rescue.webp`

**Headline:** Make Your Backlog Manageable.

**Description:** Prioritise unfinished chapters and convert pending work into a clearer, more actionable study plan.

### Image 7 — `banner-07-product-format.webp`

**Headline:** One Practical System. Ready to Use.

**Description:** Get a 28-page, print-ready A4 PDF that you can fill digitally or print. It is a planning, tracking and revision system—not lecture notes, a question bank or a course.

### Gallery design and behaviour

- Display a section heading: **SEE THE SYSTEM. UNDERSTAND THE METHOD.**
- Supporting introduction: *A practical framework for planning, tracking, revising and correcting your NEET preparation.*
- On desktop, use an editorial grid with varied layouts rather than seven identical cards. Every image must remain paired with its corresponding headline and description.
- On mobile, stack the image, headline and description in a readable vertical layout. Do not hide descriptions behind hover effects.
- Use subtle gold dividers, restrained shadows, cream backgrounds and generous spacing, consistent with the existing website.
- Use the image's original aspect ratio where possible. Avoid excessive cropping that removes important visual elements.
- Add accessible alt text describing the actual visual and feature. Ensure adequate text contrast and readable font sizes.
- Do not rely on the image alone to explain a feature. The headline and supporting description are mandatory.
- Do not invent product functions, student outcomes, performance statistics, testimonials or guarantees.

**Transparency statement beneath the gallery:**

"These are illustrative previews of the system and its workflows—not screenshots of the PDF. Your download contains the actual 28-page planner templates."

Keep this statement clearly visible but visually understated. The gallery must communicate real product features without misleading visitors about the contents of the purchased PDF.

Before finalising the page, verify that every filename matches the corresponding file in the assets folder. Use the seven filenames exactly as specified above.

**7. THE SYSTEM IN 4 STEPS (dark):** Plan → Execute → Measure → Correct as a connected horizontal timeline with the dashed trajectory line linking nodes; each node animates in. One-line each (copy in Part 5).

**8. WHO IT'S FOR (cream):** Class 11 / Class 12 / Dropper as three *different-shaped* blocks (not identical cards) each with a one-line "how to use it". Plus "Not for you if…" (people wanting notes/video lectures) — builds trust.

**9. FOUNDER / CREATOR NOTE (cream-2):** small, human, left photo slot (`creator.webp`, optional) + 5-6 sentence note + signature. Use `CONFIG.creator` fields. If no photo, typographic version only. Never fake a bio — placeholders only.

**10. STUDENT REVIEWS / PROOF (cream section, dark forest-ink review cards):**
- Populate the section from the three customer-review entries supplied in the user's testimonial reference image. Format them as native HTML cards—not screenshot images—using this schema: `{name, detail, rating, quote, quoteHinglish?, language, date?}`. Keep names exactly as supplied. Do not use the creator/founder as a customer reviewer.
- Display the aggregate **4.7 / 5** with gold stars and **17 reviews**, calculated from these visible ratings: 5, 4, 5 etc. (mean 4.666…, rounded to one decimal = 4.7). Do not claim a larger review count or add unprovided ratings.
- Use the following review content. Do not invent extra reviewers or add unsupported outcomes:
  1. **Rakib Haque — 5/5 — English:** “I used to jump between study plans every week. This eBook gave me structure, clarity, and motivation I never had before.”
  2. **Sneha Das — 4/5 — Hinglish adaptation:** “Backlog Killer ne meri pending chapters wali problem ko manageable banaya. Maine 3 months ka backlog sirf 2 weeks mein clear kiya.” This is a Hinglish adaptation of the English feedback visible in the supplied image, not a claim that the customer originally typed these exact Hinglish words.
  3. **Priya — 5/5 — English:** “The daily to-do and study tracker combo made me consistent.”
- The screenshot also shows 14 more reviews but you are allowed to set them from your side with some logical name ,rating and positive rating.
- Visual treatment: compact star row, clear quote typography, first name in a consistent footer, subtle quote-mark icon, 1px low-contrast border, 14px radius, dark forest-ink surface, no fake avatars, no fake WhatsApp/Instagram screenshots. On mobile use one column; on desktop use a balanced two-column layout.
- 

**11. PRICE / OFFER (dark, spotlight):** one centred glass-free panel with gold hairline border. ~~₹199~~ **₹99**, "Launch offer — first 400 students". Seat bar: `{soldCount} / 400 claimed` initially starts from 179/ 400 claimed!! (animated fill, from CONFIG). List of what's included (5 acts, checklist style with gold ticks). Primary CTA. Under it: payment icons row (UPI, cards, net banking — simple monochrome SVG), "Instant download link on screen + email".

**12. TRUST STRIP:** 4 small items: Instant delivery · Print-ready A4 · Works on any device · Support on Instagram/WhatsApp (`CONFIG.support`). Plus refund/policy line from `CONFIG.refundPolicy` (**seller to confirm — do not invent a guarantee**).

**13. FAQ (cream):** accordion, smooth height animation, keyboard-accessible, schema.org FAQPage JSON-LD. Use copy from Part 5.

**14. FINAL CTA (dark):** huge type **"Make this the year you stop guessing."** CTA + seat counter again. Dashed trajectory line draws across.

**15. FOOTER (ink):** wordmark, nav, policy links (Privacy, Terms, Refund), disclaimer: *"NEET Masterbook is an independent study-planning product. Not affiliated with or endorsed by NTA, NMC or any coaching institute. Results depend on individual effort; no marks are guaranteed."* + © + `Design by Jannat Spark` small.

**Mobile sticky bottom CTA bar** (appears after hero): `₹69 ~~₹99~~ · [Get it now]`.

## 1.6 Motion & 3D spec
- Stack: plain HTML + CSS + vanilla JS (or Vite). **GSAP + ScrollTrigger** from cdnjs (pinned version). No heavy 3D library; the 3D feel comes from CSS `perspective` tilt on the mockup, layered shadows, parallax glow, and light-sweep (a diagonal gold highlight that sweeps across the book on hover/load).
- Smooth scroll: Lenis optional, but disable on `prefers-reduced-motion`.
- Reveal: text lines slide up 24px + fade (0.7s, `cubic-bezier(.2,.7,.2,1)`), stagger 80ms. No bouncy easing.
- Number count-ups, gauge fill, trajectory-line draw, FAQ height anim, lightbox zoom.
- Cursor: normal. No custom cursor gimmicks.
- Performance: Lighthouse ≥ 90 mobile, LCP < 2.5s on 4G (most users are Indian mobile). Images WebP/AVIF with width/height set, hero mockup preloaded, below-fold lazy-loaded. Total JS < 120KB excluding GSAP. No layout shift.

## 1.7 Config object (top of script — everything editable here)
```js
const CONFIG = {
  checkoutUrl: "PASTE_PAYMENT_LINK",
  priceLaunch: 69, priceRegular: 99, seatsTotal: 400, soldCount: 0,
  support: { instagram: "@YOUR_HANDLE", whatsapp: "PASTE_LINK", email: "PASTE_EMAIL" },
  refundPolicy: "SELLER TO CONFIRM",
  creator: { name: "Sahil", role: "Founder, NEET Masterbook", photo: "" },
  testimonials: [
    {
      name: "Rakib Haque", detail: "Student feedback", rating: 5,
      language: "English",
      quote: "I used to jump between study plans every week. This eBook gave me structure, clarity, and motivation I never had before."
    },
    {
      name: "Sneha Das", detail: "Student feedback", rating: 4,
      language: "Hinglish adaptation",
      quote: "Backlog Killer ne meri pending chapters wali problem ko manageable banaya. Maine 3 months ka backlog sirf 2 weeks mein clear kiya."
    },
    {
      name: "Priya", detail: "Student feedback", rating: 5,
      language: "English",
      quote: "The daily to-do and study tracker combo made me consistent."
    }
  ], // publish only after seller confirms authenticity and permission
  rating: {
    value: 4.7, reviewCount: 3,
    source: "Mean of displayed customer ratings: (5 + 4 + 5) / 3 = 4.67, rounded to 4.7; verify before publication"
  }
};
```

## 1.8 SEO / tracking / a11y
- Title: `NEET 2027 Masterbook — Elite Edition | 28-Page NEET Study System (PDF)`; meta description ≤155 chars; OG/Twitter using `og-image.jpg`; `Product` + `Offer` (INR, price from CONFIG) + `FAQPage` JSON-LD.
- Meta Pixel + GA4 placeholders; fire events: `ViewContent`, `InitiateCheckout` (CTA click), scroll depth 50/90%.
- WCAG AA contrast (gold on ink OK; gold text on cream only ≥18px bold). Focus rings, alt text, semantic landmarks, reduced-motion.

## 1.9 Deliverable
Single-folder project: `index.html`, `styles.css`, `script.js`, `/assets` (use the exact filenames in Part 3/4). Responsive 360px → 1920px, **designed mobile-first**. Provide a short README: how to edit CONFIG, add testimonials, deploy to Vercel/Netlify.

---

# PART 2 — DESIGN DETAILS TO GET RIGHT
- Hero H1: Poppins 700, `clamp(2.4rem, 6vw, 5.2rem)`, line-height 0.95, letter-spacing −0.02em. "650+" gets gold gradient `#FBE7B4 → #F0C878 → #C9962F` + faint text-shadow glow.
- Small-caps labels: 11-12px, `letter-spacing: .18em`, uppercase, muted/gold.
- Cards (where used): 1px `--ink-line` or `rgba(201,150,47,.25)` border, 14px radius, **no** heavy blur. Shadows are layered and warm.
- Cream sections get a faint 6px dot-grid texture (matches the book's paper) at 10% gold.
- Dark sections get the blueprint grid (1px lines every 22px at 5% gold) + grain overlay (`grain.png` at 6% opacity).
- Gallery frames: cream paper sheet, 3px radius, soft shadow, slight random rotation (−1.2°…1.2°) on desktop.
- Buttons: gold fill `#C9962F → #F0C878` subtle gradient, ink text 600, 14px radius, hover = light-sweep + 2px lift. Ghost = 1px gold border.

---


---

# PART 4 — OPTIONAL REAL PDF PAGE PREVIEWS (NOT REQUIRED FOR THIS BUILD)
The current gallery uses generated conceptual illustrations, not screenshots of the PDF. Do not export PDF pages for the current gallery and do not composite invented page layouts into the illustrations. If you later choose to add real PDF pages, export them directly from the final PDF and label them explicitly as "Actual PDF page preview"; never mix an AI-generated concept image into a gallery presented as real page screenshots.

---

# PART 5 — COPY BANK

**Hero H1:** From zero to 650+. One system.
**Sub:** A control panel for your NEET preparation — not another decorative timetable.
**CTA:** Get the Masterbook — ₹69
**Micro-trust:** Instant PDF download · Phone, tablet, PC · Print-ready A4

**Problem lines:** 5 different trackers. / A syllabus PDF you've "started" four times. / Mock tests you never analysed. / Revision that is really just re-reading.

**4 steps:**
- **Plan** — Know exactly what comes next. Year → sprint → week → today.
- **Execute** — Finish today's work. Three tasks, measurable, closed every night.
- **Measure** — Mocks and PYQs tell the truth. Log every score, every mistake.
- **Correct** — Fix the mistake that repeats. Errors become revision tasks.

**Act blurbs:**
1. *Know the Game* — The exam blueprint and all 50 syllabus units in one checklist, with a subject-wise target so "I want a good score" becomes a number.
2. *Plan the Year* — Four phases, a 12-month map, 30-day sprints, a weekly command centre and a daily tracker.
3. *Lock It in Memory* — The 0-1-3-7-21 revision loop, active-recall pages and a six-point gate before any chapter counts as "done".
4. *Test. Analyse. Fix.* — Backlog killer, mock tracker, test analysis, error log, PYQ analyzer and a 7-day weak-topic rescue.
5. *The Final Stretch* — Full completion board, a 30-day compression plan and an exam-day checklist.

**Who it's for:** *Class 11* — build the habit before the pressure. *Class 12* — balance boards and NEET without losing track. *Droppers* — one honest system for your second (or third) attempt.
**Not for you if:** you want lecture videos, notes or a question bank. This tells you *how to run* your prep, not what to read.

**Creator note (edit):** "I built this because most NEET students don't fail from lack of effort — they fail from lack of a system. I wanted one place for goals, chapters, PYQs, mistakes and mocks. It's not magic. It's a structure you fill in every week. If you use it honestly, you'll always know what to do next."

**FAQ**
1. **What exactly do I get?** A 28-page A4 PDF with five acts: exam blueprint + syllabus, year/week/day planning, revision engine, test & error analysis, and a final-30-day plan. Instant download after payment.
2. **Is it notes or a course?** No. It's a planning, tracking and revision system. Use it alongside your NCERT, coaching or YouTube material.
3. **Will it guarantee 650+?** No — nothing can. It removes guesswork and makes your effort measurable. The marks come from your work.
4. **Can I print it?** Yes. It's print-ready A4. You can also fill it digitally in any PDF app (GoodNotes, Xodo, Adobe).
5. **Which class is it for?** Class 11, Class 12 and droppers. The 4-phase roadmap adapts to where you start.
6. **Is the syllabus up to date for 2027?** It follows the confirmed NEET 2026 structure (180 Q, 720 marks, +4/−1, 45/45/90). The NTA 2027 bulletin isn't out yet; the book tells you which page to update when it is. *(Seller: add your free-update promise here only if you will honour it.)*
7. **How do I get it after paying?** Download link appears on screen immediately and is emailed. *(Seller to confirm.)*
8. **Is the ₹69 price permanent?** No. ₹69 is for the first 400 students; then ₹99.
9. **Refunds?** `CONFIG.refundPolicy` *(seller to confirm — digital products are commonly non-refundable; state yours clearly).*
10. **I'm having trouble / need help.** Message us on Instagram/WhatsApp — we reply personally.

**Final CTA:** Make this the year you stop guessing.

---



---

# PART 6 — LAUNCH CHECKLIST
- [ ] Payment link live + tested on phone (UPI)
- [ ] Delivery works (download link + email)
- [ ] `soldCount` updated daily (or wired to your payment dashboard)
- [ ] Privacy / Terms / Refund pages exist
- [ ] Meta Pixel + GA4 IDs added
- [ ] OG image tested (WhatsApp / Instagram link preview)
- [ ] Lighthouse mobile ≥ 90
- [ ] Link in Instagram bio + auto-DM reply points to this page
