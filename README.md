# metaangels Website

Single-page booking + payment landing site. Static HTML/CSS/JS by design — no
CMS needed for launch (per the build spec). Source spec: metaangels' handoff
doc in the Welcome channel, 2026-08-19. Copy source: Honey's draft in
`OUTBOX/wandiology_website_copy_draft.md` in the shared workspace.

## Status

Scaffold is in place: all 9 sections from the build spec, full pricing table,
payment terms, FAQ, follower stats. Pricing (all locked), brand (metaangels),
and payment method choice (M-Pesa/BTC/Sendwave) are decided.

**Payment model:** launching manual-confirm on all three methods (pay, then
submit a reference via the form in `#payment` for manual approval) because
IntaSend KYC takes ~1 business day and hasn't started yet. Plan is to upgrade
M-Pesa to IntaSend auto-confirm once that account clears, and possibly BTC to
Bitnob's webhook API (`btc.lightning.received.success`) instead of standing up
a separate OpenNode account, since a Bitnob address already exists. The
payment-confirm form itself has no backend yet (needs Formspree or similar).

## Blocking before launch

1. **About section copy** — the Substack link given doesn't have it (just a
   committee-listing mention). Need 2-3 sentences of real bio/credentials text.
2. **Which lead magnet launches first** (Big 3 Starter Guide / 3 Signs You
   Need a Natal Chart / One-Card Tarot Pull) — needs the actual PDF.
3. **Zoom link** for Masterclass + interpretation calls.
4. **Calendly/Cal.com link** — metaangels says it's created, need the actual URL to embed.
5. **Start IntaSend signup** (business reg + KRA Tax Certificate) — the slowest
   item, needed to move M-Pesa off manual confirmation.
6. **Form backend** for the payment-confirm form (e.g. Formspree) — currently submits nowhere.
7. Photos/logo, Instagram handle, and other socials for the footer.

## Local preview

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
```
