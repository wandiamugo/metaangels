// Launch model: all payment methods (M-Pesa/Pochi la Biashara, BTC/Bitnob,
// Sendwave) are manually confirmed for now — see #payment section. The
// payment-confirm form below has no backend yet (needs Formspree or similar).
// Fast-follow: Bitnob has a webhook API (btc.lightning.received.success) that
// could auto-confirm BTC once an API key exists — Pochi la Biashara has no
// API, so M-Pesa stays manual either way. Booking/Calendly link still TODO.

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector(`[data-status-for="${form.id}"]`);
    if (status) {
      status.hidden = false;
      status.textContent = form.dataset.form === "payment-confirm"
        ? "Form isn't wired to a backend yet — TODO before launch. metaangels will approve confirmations by hand until then."
        : "Form capture isn't wired to an email provider yet — TODO before launch.";
    }
  });
});

document.querySelectorAll(".btn--book").forEach((btn) => {
  btn.addEventListener("click", () => {
    const service = btn.dataset.service;
    const select = document.querySelector('#payment-confirm-form select[name="service"]');
    if (select) select.value = service;
    document.querySelector("#payment").scrollIntoView({ behavior: "smooth" });
  });
});
