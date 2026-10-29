# NEET 2027 Masterbook — Elite Edition

A static single-product sales page for the 28-page NEET planning, tracking and revision system.

## Run locally

There is no build step. Serve the folder over HTTP so relative assets and dialogs work:

```powershell
python -m http.server 8765
```

Open `http://127.0.0.1:8765/`.

The page is plain HTML, CSS and JavaScript. It also works when opened directly, but a local server is recommended for testing.

## Configure

Open `script.js` and edit the `CONFIG` object at the top.

### Checkout

```js
checkoutUrl: "PASTE_PAYMENT_LINK"
```

- Replace this with a Razorpay, Instamojo, Gumroad or other hosted payment link.
- While the placeholder is present, every buy button scrolls to the price section and shows a setup toast.
- When configured, buy buttons open the payment link in a new tab and fire `InitiateCheckout`.

### Pricing and seats

```js
priceLaunch: 99,
priceRegular: 249,
seatsTotal: 400,
soldCount: 179
```

- Current offer: **₹99 launch for the first 400 students**, then **₹249**.
- `soldCount` drives the claimed/left totals and seat bar. Update it manually; there is no fake timer or random viewer count.
- Keep `soldCount` at or below `seatsTotal`.
- Update the static `Offer` JSON-LD in `index.html` if the launch price changes.

### Support and policy

```js
support: {
  instagram: "https://www.instagram.com/neetmasterbook/",
  whatsapp: "https://wa.me/919085161632",
  email: "jannatspark.help@gmail.com"
},
refundPolicy: "Digital product. Refund policy is confirmed at checkout."
```

- Instagram and WhatsApp values should be full URLs.
- Email is converted to a `mailto:` link automatically.
- Replace the refund text only after the seller confirms the actual policy. Do not invent a guarantee.
- Privacy, terms and refund dialogs are text in `POLICY_CONTENT` and should be reviewed before publishing.

### Creator

```js
creator: {
  name: "Sahil",
  role: "Founder, NEET Masterbook"
}
```

The founder name and role are applied to the signature automatically. Do not add a photo or bio until the seller supplies and approves one.

### Reviews

Add or edit entries in `CONFIG.testimonials` using:

```js
{
  name: "Reviewer name",
  rating: 5,
  meta: "Student feedback · English",
  quote: "Review text"
}
```

- The first six are visible initially; the button reveals all entries.
- The aggregate rating, review count and gauge are calculated from the array.
- The first three reviews use the supplied customer feedback. The remaining entries may be replaced, but publish only reviews the seller can verify and has permission to use.
- Keep the displayed review count consistent with the number actually shown.

### Analytics

```js
analytics: {
  metaPixelId: "PASTE_META_PIXEL_ID",
  ga4Id: "PASTE_GA4_ID"
}
```

When a real ID is added, the Meta Pixel or GA4 script loads automatically. Leave the placeholders in place to disable tracking. Events fired by the page are `ViewContent`, `InitiateCheckout` and 50%/90% `ScrollDepth`.

## Images

- Hero: `assets/product-mockup.webp` with `assets/product-mockup.png` fallback.
- Final CTA: `assets/product-mockup-sm.webp` with `assets/product-mockup.png` fallback.
- Editorial gallery: responsive WebP variants plus JPG fallbacks in `assets/`.
- Social preview: `assets/og-image.jpg`.
- Keep the existing widths and `srcset` entries when replacing images to avoid layout shift.
- The gallery images are illustrative previews of the system, not screenshots of the PDF. Keep the transparency statement beneath the gallery.
- The editorial and lifestyle images have an on-brand 48px maker's mark in the lower-right corner, covering the original AI sparkle artifact. Do not crop these images; regenerate every WebP variant after replacing a JPG.
- Unmarked source backups from the watermark cleanup are retained outside the deployed folder, not in this project directory.

## Deploy

This is a static site.

### Vercel

1. Import the project folder or drag it into Vercel.
2. Framework preset: **Other**.
3. Build command: none.
4. Output directory: `.` (project root).

### Netlify

1. Drag the project folder into Netlify Drop, or connect the repository.
2. Build command: none.
3. Publish directory: `.` (project root).

After deploying, replace the canonical and `og:url` values in `index.html` if the final domain differs from `https://neetmasterbook.com/`. The build-prompt Markdown files do not need to be deployed.

## Pre-launch checklist

- [ ] Replace `checkoutUrl`.
- [x] Instagram, WhatsApp and email links.
- [ ] Confirm refund policy and legal copy.
- [ ] Set the real `soldCount`.
- [ ] Add Meta Pixel and GA4 IDs if tracking is required.
- [ ] Verify review authenticity and permission.
- [ ] Test one real checkout in a private browser window.
- [ ] Confirm the download link is delivered on screen and by email.
- [ ] Check the page on a real phone at 360–390px width.
