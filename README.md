# metaangels Website

Single-page booking + payment landing site. Static HTML/CSS/JS by design — no
CMS needed for launch (per the build spec). Source spec: metaangels' handoff
doc in the Welcome channel, 2026-08-19. Copy source: Honey's draft in
`OUTBOX/wandiology_website_copy_draft.md` in the shared workspace.

## Status

Scaffold is in place: all 9 sections from the build spec, full pricing table,
payment terms, FAQ, follower stats (2.7K Instagram, 5K X), About bio, and
footer socials (Instagram, X, YouTube, Spotify, Apple Podcasts, Patreon).
Pricing (all locked), brand (metaangels), and payment method choice
(M-Pesa/BTC/Sendwave) are decided.

**Payment model:** launching manual-confirm on all three methods (pay, then
submit a reference via the form in `#payment` for manual approval) because
IntaSend KYC takes ~1 business day and hasn't started yet. Plan is to upgrade
M-Pesa to IntaSend auto-confirm once that account clears, and possibly BTC to
Bitnob's webhook API (`btc.lightning.received.success`) instead of standing up
a separate OpenNode account, since a Bitnob address already exists. The
payment-confirm form itself has no backend yet (needs Formspree or similar).

## Open question — not a blocker, but needs a decision

Every social handle, the podcast, and Patreon are under **Wandiology** — none
say "metaangels." Confirm whether the site rename to metaangels replaces that
public identity going forward, or whether Wandiology should stay the visible
brand (with metaangels used elsewhere, e.g. just the repo name). Easy to flip
either way pre-launch.

## Blocking before launch

1. **Which lead magnet launches first** (Big 3 Starter Guide / 3 Signs You
   Need a Natal Chart / One-Card Tarot Pull) — needs the actual PDF.
2. **Zoom link** for Masterclass + interpretation calls.
3. **Calendly/Cal.com link** — metaangels says it's created, need the actual URL to embed.
4. **Start IntaSend signup** (business reg + KRA Tax Certificate) — the slowest
   item, needed to move M-Pesa off manual confirmation.
5. **Form backend** for the payment-confirm form (e.g. Formspree) — currently submits nowhere.
6. Photos/logo and an email address for the footer.

## Local preview

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
```
