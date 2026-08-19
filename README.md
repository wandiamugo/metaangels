# metaangels Website

Single-page booking + payment landing site. Static HTML/CSS/JS by design — no
CMS needed for launch (per the build spec). Source spec: metaangels' handoff
doc in the Welcome channel, 2026-08-19. Copy source: Honey's draft in
`OUTBOX/wandiology_website_copy_draft.md` in the shared workspace.

## Status

Scaffold is in place: all 9 sections from the build spec, full pricing table,
payment terms, FAQ. Forms and booking buttons are stubbed (see comments in
`script.js`) until real accounts exist.

## Blocking before launch

1. **About section copy** — paste verbatim from the rate card.
2. **Follower count** for the social proof strip.
3. **Which lead magnet launches first** (Big 3 Starter Guide / 3 Signs You
   Need a Natal Chart / One-Card Tarot Pull) — needs the actual PDF.
4. **Zoom link** for Masterclass + interpretation calls.
5. **Calendly/Cal.com** availability set up and embedded (sections `#masterclass`
   and each service's booking flow).
6. **IntaSend** account (M-Pesa + card) — chosen over Pesapal per Pollen's
   comparison (cheaper, faster KYC). Approval can take ~1 business day —
   start early.
7. **OpenNode** account (BTC) — chosen over BTCPay Server for launch
   (managed, no infra to run, ~1% fee vs 0% self-hosted). Revisit BTCPay as a
   post-launch cost optimization once there's less time pressure.
8. **Sendwave** receiving details (M-Pesa number or bank) for the manual
   confirmation flow.
9. Photos/logo, Instagram handle, and other socials for the footer.

## Local preview

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
```
