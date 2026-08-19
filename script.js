// Placeholder wiring — replace stubs once accounts/links exist:
//   - lead magnet + masterclass forms -> email capture endpoint (ManyChat/SendPulse or simple form backend)
//   - booking buttons -> IntaSend (M-Pesa + card) or OpenNode (BTC) checkout, then Calendly/Cal.com
//     (providers chosen per Pollen's comparison, 2026-08-19: IntaSend over Pesapal, OpenNode over BTCPay for launch)

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector(`[data-status-for="${form.id}"]`);
    if (status) {
      status.hidden = false;
      status.textContent = "Form capture isn't wired to an email provider yet — TODO before launch.";
    }
  });
});

document.querySelectorAll(".btn--book").forEach((btn) => {
  btn.addEventListener("click", () => {
    const service = btn.dataset.service;
    const terms = btn.dataset.terms; // "full" | "deposit"
    alert(
      `Booking for "${service}" (${terms === "deposit" ? "50% deposit" : "pay in full"}) ` +
      `isn't connected to a payment provider yet. This button will trigger checkout ` +
      `(IntaSend or OpenNode) once accounts are set up, then hand off to Calendly/Cal.com.`
    );
  });
});
