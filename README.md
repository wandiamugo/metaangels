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
for BTC) stays available as a future upgrade if wanted later. The
payment-confirm form itself has no backend yet (needs Formspree or similar
just to receive submissions, independent of any payment automation).

## Blocking before launch

1. **Which lead magnet launches first** (Big 3 Starter Guide / 3 Signs You
   Need a Natal Chart / One-Card Tarot Pull) — needs the actual PDF.
2. **Zoom link** for Masterclass + interpretation calls.
3. **Calendly/Cal.com link** — metaangels says it's created, need the actual URL to embed.
4. **Form backend** for the payment-confirm form (e.g. Formspree) — currently submits nowhere.
5. Photos/logo and an email address for the footer.

## Local preview

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
```
