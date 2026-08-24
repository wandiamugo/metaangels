# metaangels Website

Single-page booking + payment landing site. Static HTML/CSS/JS by design — no
CMS needed for launch (per the build spec). Source spec: metaangels' handoff
doc in the Welcome channel, 2026-08-19. Copy source: Honey's draft in
`OUTBOX/wandiology_website_copy_draft.md` in the shared workspace.

## Status

Scaffold is in place: all 9 sections from the build spec, full pricing table,
payment terms, FAQ, follower stats (2.7K Instagram, 5K X), About bio, and
footer socials (Instagram, X, YouTube, Spotify, Apple Podcasts, Patreon).
Pricing (all locked), brand (**metaangels by Wandiology**), and payment
method choice (M-Pesa/BTC/Sendwave) are decided.

**Payment model:** manual-confirm on all three methods (pay, then submit a
reference via the form in `#payment` for manual approval) is the launch
model, not a stopgap — metaangels opted out of the IntaSend KYC process for
now. Automated auto-confirm (IntaSend for M-Pesa, or Bitnob's webhook API
for BTC) stays available as a future upgrade if wanted later. All three
forms (guide, masterclass, payment-confirm) submit to Formspree
(`https://formspree.io/f/xeajwykp`), which emails metaangels the
submission — bookings are still approved by hand, just no longer lost on
submit.

**Visual design:** rebuilt to match the high-fidelity design handoff
metaangels supplied (`Astrology Landing Page Design.zip` — ethereal/oceanic
starfield theme, Cormorant Garamond + Inter Tight + JetBrains Mono, full
token set in that handoff's README). Values were moved into `styles.css` as
real CSS custom properties per that doc's own instruction, not copied as
inline styles. Starfield is generated in `script.js` with a seeded PRNG
matching the original prototype's positions; respects
`prefers-reduced-motion`. Verified with a full-page Puppeteer screenshot pass
against the design spec section by section.

## Blocking before launch

1. **Which lead magnet launches first** (Big 3 Starter Guide / 3 Signs You
   Need a Natal Chart / One-Card Tarot Pull) — needs the actual PDF.
2. **Zoom link** for Masterclass + interpretation calls.
3. **Calendly/Cal.com link** — metaangels says it's created, need the actual URL to embed.
4. Logo and an email address for the footer.
5. **Self-host the Google Fonts** (Cormorant Garamond, Inter Tight, JetBrains Mono) for production instead of the CDN link, per the design handoff's asset notes — not blocking, just listed there.

## Local preview

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
```
