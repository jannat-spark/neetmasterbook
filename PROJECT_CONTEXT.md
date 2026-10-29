# NEET 2027 Masterbook — Complete Project Context

Last updated: 2026-10-28

This is the single-source handoff document for the NEET 2027 Masterbook sales page. It captures the product, implementation, design decisions, tests, image treatment, known bug fixes, and launch checklist. Graphify indexes this file so a future session can recover the project context from `graphify-out/` without re-reading the whole codebase.

## What this project is

A static, single-product sales page for the **NEET 2027 Masterbook — Elite Edition**, a 28-page A4 planning, tracking and revision system delivered as a PDF.

- Primary goal: convert NEET students into ₹99 launch buyers.
- Stack: plain HTML, CSS and JavaScript. No framework, package manager or build step.
- Entry point: `index.html`.
- Local preview: `python -m http.server 8765`, then open `http://127.0.0.1:8765/`.
- Main design direction: premium editorial control-panel aesthetic, cream/ink/gold palette, strong typography, restrained motion, mobile-first behavior.

## Current build status

The page is implemented and polished, including responsive layouts, motion, dialogs, reviews, FAQ, gallery lightbox and pricing logic.

Verified after the final CSS repair:

- Mobile/touch motion QA: **13/13 passed**
- Desktop/tablet regression QA: **31/31 passed**
- All **47 referenced image assets** load
- All **48 reveal targets** fire
- No horizontal overflow at tested viewports
- No runtime or network errors
- Separator glyphs now compute as `"·"` in the hero trust strip, hero tag and price fine print

The local preview server used for the final checks was stopped. The site has no runtime server requirement beyond static hosting.

## File map

- `index.html` — page markup, metadata, Open Graph/Twitter tags, JSON-LD, inline SVG symbol sprite, all section content.
- `styles.css` — complete visual system, responsive rules, scroll/reveal animations, mobile motion, reduced-motion fallbacks.
- `script.js` — all runtime behavior and the `CONFIG` object. This is the main configuration surface.
- `README.md` — setup, configuration, image handling, deployment and pre-launch checklist.
- `NEET_Masterbook_Sales_Page_Master_Prompt_Final.md` — original build brief and content direction.
- `PROJECT_CONTEXT.md` — this handoff document.
- `assets/` — deployed production images, WebP variants, social preview and favicons.
- `gallery images/` — source gallery JPGs.
- `product image/` — source product mockup files.
- `required images/` — source lifestyle/device/OG/grain images.
- `product pdf/` — the actual 28-page NEET 2027 Masterbook PDF.
- `.opencode/skills/graphify/` — project-scoped Graphify skill.
- `.opencode/plugins/graphify.js` — OpenCode reminder plugin for graph-first questions.
- `AGENTS.md` — Graphify usage rules for future agents.
- `graphify-out/` — generated knowledge graph, report, HTML view, wiki and caches.

## Product facts

- Title: **NEET 2027 Masterbook — Elite Edition**
- Subtitle/format: **28-Page NEET Study System (PDF)**
- Format: A4, print-ready, works on phone/tablet/PC, instant PDF download.
- Structure: **5 acts**
  1. Know the Game
  2. Plan the Year
  3. Lock It in Memory
  4. Test. Analyse. Fix.
  5. The Final Stretch
- The actual PDF has **28 pages**.
- Hero headline: **“From zero to 650+. One system.”**
- Hero subhead: “A control panel for your NEET preparation — not another decorative timetable.”
- The page uses the confirmed NEET 2026 structure: **180 questions, 720 marks, 180 minutes, +4/−1**, with 45/45/90 subject distribution. It explicitly says the NTA 2027 bulletin is pending and tells buyers which page to update.
- No guarantee of 650+ is made anywhere. The copy says the system removes guesswork; marks still come from the student's work.

## Pricing, seats and offer

Current values in `script.js`:

```js
priceLaunch: 99,
priceRegular: 249,
seatsTotal: 400,
soldCount: 179
```

- Current offer: **₹99 launch for the first 400 students**, then **₹249**.
- Claimed/left values: **179 / 400 claimed**, **221 left**.
- Scarcity is a real manual seat counter. Do **not** add a countdown timer, fake viewers, or auto-resetting urgency.
- `soldCount` is manually maintained and must stay at or below `seatsTotal`.
- JSON-LD `Offer.price`, metadata, FAQ copy and visible price text must stay consistent with `CONFIG` if pricing changes.

## Configuration

`CONFIG` is at the top of `script.js`:

```js
checkoutUrl: "PASTE_PAYMENT_LINK",
priceLaunch: 99,
priceRegular: 249,
seatsTotal: 400,
soldCount: 179,
support: {
  instagram: "https://www.instagram.com/neetmasterbook/",
  whatsapp: "https://wa.me/919085161632",
  email: "jannatspark.help@gmail.com"
},
refundPolicy: "Digital product. Refund policy is confirmed at checkout.",
creator: {
  name: "Sahil",
  role: "Founder, NEET Masterbook"
},
analytics: {
  metaPixelId: "PASTE_META_PIXEL_ID",
  ga4Id: "PASTE_GA4_ID"
}
```

Behavior:

- While `checkoutUrl` contains `PASTE_`, checkout buttons scroll to the price section and show a setup toast.
- With a real checkout URL, buttons open the payment link in a new tab and fire `InitiateCheckout`.
- Support links are applied from config. Email becomes a `mailto:` link.
- Analytics scripts load only when real IDs are supplied. Events: `ViewContent`, `InitiateCheckout`, and 50%/90% `ScrollDepth`.
- Creator name/role is applied through `data-creator-name` and `data-creator-role`.
- Do not add a creator photo or bio until the seller supplies and approves one.

## Page structure

Main sections and IDs:

1. Sticky header — `#site-header`
2. Hero — `#top`
3. Problem framing — `#problem`
4. Product identity — `#what`
5. Five acts — `#inside`
6. Gallery/see inside — `#see`
7. Method timeline — `#method`
8. Audience fit — `#who`
9. Founder note — `#founder`
10. Reviews — `#reviews`
11. Price/offer — `#price`
12. Trust strip — dark section after price
13. FAQ — `#faq`
14. Final CTA and footer

Key interactions:

- Sticky header hides/reveals based on scroll direction.
- Mobile CTA appears after the hero, disappears at the final CTA, and uses `inert` when hidden.
- FAQ answers use `inert` while closed and are keyboard operable.
- Gallery opens a lightbox dialog; Escape/outside click closes dialogs.
- Reviews start with 6 visible and expand to all 17.
- Policy dialogs cover privacy, terms and refund copy in `POLICY_CONTENT`.
- Hero book has a desktop pointer tilt and a separate touch scroll-driven tilt.
- `setupReveals()` handles 48 reveal targets.

## Design system

- Palette: cream backgrounds, deep ink/near-black sections, gold accents.
- Gold family: `#C9962F` and `#F0C878` highlights.
- Typography: editorial serif display face paired with a clean sans-serif body/UI face.
- Layout: centered containers, generous section spacing, editorial grid, rounded glass-free panels with hairline borders.
- Hero: large headline, gold “650+”, product mockup, trajectory SVG from 0 to 650+, stat strip.
- Background detail: subtle grain, fine grid/hairlines, gold glow around the book.
- Keep the existing premium restraint. Avoid generic gradients, loud badges, or extra decorative elements.

## Motion and responsive behavior

Mobile-first requirement: touch devices must feel animated, but desktop behavior must not regress.

Implemented motion:

- **Hero tilt**
  - Desktop/pointer: `setupHeroTilt()` uses pointer movement over `#hero-visual`.
  - Touch/mobile (max-width 860px, coarse pointer): scroll position drives subtle rotateX/rotateY and glow movement.
  - Reduced motion: tilt is skipped.
- **Mobile act reveals**
  - `setupMobileActMotion()` runs below 959px.
  - Adds `is-mobile-in` to `.act-panel`, animating copy (`actCopyIn`), frame (`actFrameIn`) and list items with stagger.
  - Also staggers review cards via `.review-grid.is-mobile-in`.
  - Observer threshold 0.02, large root margin.
- **Method timeline**
  - At max-width 640px, `.method__steps` becomes a vertical timeline with a gold line that draws via `scaleY`.
- **Touch feedback**
  - `:active` states for buttons/cards under coarse-pointer/no-hover conditions.
- **General reveals**
  - IntersectionObserver-based; 48 targets; content remains visible if IntersectionObserver is unavailable.
- **Reduced motion**
  - `prefers-reduced-motion: reduce` keeps all content visible, skips tilt and scroll-driven transforms.

Important selectors/classes:

- `.act-panel.is-mobile-in`
- `#review-grid.is-mobile-in`
- `.method__steps::before`
- `.hero__visual` / `#book-stage` tilt variables
- `.review-card` stagger delay via CSS custom properties

## Reviews

- Total: **17**
- Initially visible: **6**
- Aggregate: **4.7/5**
- Expansion button updates the count, `aria-expanded`, label, and reveals all cards.
- The first three quotes are supplied customer feedback and must be preserved verbatim:
  1. “I used to jump between study plans every week. This eBook gave me structure, clarity, and motivation I never had before.”
  2. “Backlog Killer ne meri pending chapters wali problem ko manageable banaya. Maine 3 months ka backlog sirf 2 weeks mein clear kiya.”
  3. “The daily to-do and study tracker combo made me consistent.”
- Remaining reviews may be replaced, but publish only reviews the seller can verify and has permission to use.
- Reviewer names include Rakib Haque, Sneha Das, Priya, Aditya, Fatima, Rohan, Ananya, Arif, Shreya, Vishal, Nandini, Kabir, Ishita, Arjun, Simran, Devansh and Tanvi.

## Assets and image treatment

Production image rules:

- Hero: `assets/product-mockup.webp` with `assets/product-mockup.png` fallback.
- Final CTA: `assets/product-mockup-sm.webp` with `assets/product-mockup.png` fallback.
- Gallery: responsive WebP variants plus JPG fallbacks in `assets/`.
- Social preview: `assets/og-image.jpg`.
- Keep existing widths and `srcset` entries to avoid layout shift.
- Gallery images are illustrative previews, not screenshots of the PDF. Keep the transparency statement under the gallery.

Watermark/maker's-mark cleanup:

- 12 source JPGs were branded with a **48px maker's mark** covering the original AI sparkle artifact.
- All WebP variants were regenerated after branding.
- 23 JPG/WebP badge variants were verified.
- Favicons were cleaned with a mirrored corner patch; no visible sparkle.
- Do not crop these images. Regenerate every WebP variant after replacing a JPG.
- Badge centers:
  - Gallery JPGs and `og-image.jpg`: `(1535, 828)`
  - `study-night.jpg`: `(1028, 1401)`
  - `lifestyle-desk.jpg`, `hand-holding.jpg`: `(935, 1274)`
  - `devices.jpg`: `(1531, 1122)`
- Original unmarked backups: `C:\Users\admin\AppData\Local\Temp\opencode\image-backup-before-watermark-cleanup`
- Unmarked source backups are intentionally outside the deployed folder.
- There are 63 image files in the project folder; the QA suite verifies the 47 referenced production assets.

## CSS separator glyph fix

A visible `Â·` / `a`` artifact appeared in the hero trust strip, hero tag and price fine print.

Root cause:

- A PowerShell `Get-Content -Raw` → `Set-Content -Encoding UTF8` round-trip re-encoded UTF-8 text.
- The middle-dot character `·` became the mojibake sequence `Â·`.
- Two CSS `content: "·"` declarations were affected.

Fix:

- Replaced the corrupt bytes `C3 82 C2 B7` with the correct UTF-8 bytes `C2 B7`.
- Removed the temporary BOM from `styles.css`.
- Scanned all `.html`, `.css`, `.js`, `.md` files for remaining mojibake; none remain.
- Live computed `::before` content now returns `"·"`.
- Post-fix screenshots: `hero-trust-zoom.png`, `hero-tag-zoom.png`, `price-fine-zoom.png` in `C:\Users\admin\AppData\Local\Temp\opencode`.

Guardrail:

- **Do not use PowerShell `Get-Content`/`Set-Content` round-trips on this UTF-8 CSS.**
- Use the edit tool or a binary/Python read-write so existing `·`, `₹`, `−`, em dashes and other Unicode stay intact.
- If separators look wrong, check the actual computed `::before` content and the file bytes before editing copy.

## Testing

Temporary QA scripts:

- `C:\Users\admin\AppData\Local\Temp\opencode\digi-mobile-motion-qa.js`
- `C:\Users\admin\AppData\Local\Temp\opencode\digi-final-qa.js`
- `C:\Users\admin\AppData\Local\Temp\opencode\inspect-trust.js`

Playwright install: `C:\Users\admin\AppData\Local\Temp\opencode\pw`
Chrome executable: `C:\Program Files\Google\Chrome\Application\chrome.exe`

Commands:

```powershell
python -m http.server 8765 --bind 127.0.0.1
node C:\Users\admin\AppData\Local\Temp\opencode\digi-mobile-motion-qa.js
node C:\Users\admin\AppData\Local\Temp\opencode\digi-final-qa.js
node C:\Users\admin\AppData\Local\Temp\opencode\inspect-trust.js
```

Latest results:

- Mobile: 13/13.
- Desktop/tablet: 31/31.
- All 47 referenced assets load.
- No runtime/network errors.
- Computed separators: `"·"`.

## Deployment and pre-launch checklist

Static hosting only.

Vercel:

1. Import the folder.
2. Framework preset: Other.
3. Build command: none.
4. Output directory: `.`.

Netlify:

1. Drag the folder into Netlify Drop or connect the repository.
2. Build command: none.
3. Publish directory: `.`.

Pre-launch:

- [ ] Replace `checkoutUrl` with a real Razorpay/Instamojo/Gumroad link.
- [x] Instagram, WhatsApp and email links.
- [ ] Confirm refund policy and legal copy.
- [ ] Set the real `soldCount`.
- [ ] Add Meta Pixel and GA4 IDs if tracking is required.
- [ ] Verify review authenticity and permission.
- [ ] Test one real checkout in a private browser window.
- [ ] Confirm the download link is delivered on screen and by email.
- [ ] Check the page on a real phone at 360–390px width.
- [ ] Replace canonical/`og:url` if the final domain differs from `https://neetmasterbook.com/`.

## Constraints and decisions to preserve

- Plain HTML/CSS/JS with no framework, bundler or npm dependency.
- Mobile-first, but desktop/tablet behavior must remain intact.
- No fake scarcity, resetting countdowns or invented guarantees.
- Do not invent a refund policy or creator bio.
- Keep the first three supplied review quotes exact.
- Keep the price consistent across visible copy, metadata, JSON-LD and FAQ.
- Preserve `inert` handling for closed FAQ answers and hidden mobile CTA.
- Preserve the 48px maker's mark and regenerated WebP variants.
- Preserve reduced-motion behavior.
- Preserve the `·` separator characters and the UTF-8 guardrail above.
- Do not deploy the build-prompt Markdown files or source image folders unless the host setup requires them.

## Graphify usage

Graphify Local is installed and registered for OpenCode at project scope.

- Graph: `graphify-out/graph.json`
- Human report: `graphify-out/GRAPH_REPORT.md`
- Interactive view: `graphify-out/graph.html`
- Wiki (if generated): `graphify-out/wiki/index.md`
- Detection/scan root: this project folder.

Future sessions should use the graph before raw grep:

```powershell
graphify query "how does checkout behave when the payment URL is a placeholder"
graphify path "CONFIG" "setupCheckout"
graphify explain "setupMobileActMotion"
graphify god-nodes --top 10
```

After code changes:

```powershell
graphify update .
```

After changing docs or images, re-run semantic extraction if needed. The OpenCode plugin injects a graph-first reminder before the first shell command of a session.
