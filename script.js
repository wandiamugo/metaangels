// Starfield — deterministic seeded positions so the sky doesn't reshuffle on re-render.
function seededRand(i, seed) {
  const x = Math.sin((i + seed) * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function renderStars(containerId, count, { seed, topSpan = 100 }) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const r = seededRand(i * 3, seed);
    const r2 = seededRand(i * 3 + 1, seed);
    const r3 = seededRand(i * 3 + 2, seed);
    const size = r3 < 0.7 ? 1.5 : r3 < 0.92 ? 2.5 : 3.5;
    const star = document.createElement("span");
    star.className = "star" + (size > 2 ? " star--big" : "");
    star.style.left = (r * 100).toFixed(2) + "%";
    star.style.top = (r2 * topSpan).toFixed(2) + "%";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.setProperty("--star-color", r3 > 0.88 ? "#34C8C5" : "#FEE09D");
    star.style.setProperty("--dur", (3 + r3 * 5).toFixed(2) + "s");
    star.style.setProperty("--delay", (r * 4).toFixed(2) + "s");
    frag.appendChild(star);
  }
  container.appendChild(frag);
}

renderStars("stars-hero", 90, { seed: 1, topSpan: 72 });
renderStars("stars-services", 40, { seed: 7, topSpan: 100 });
renderStars("stars-footer", 31, { seed: 21, topSpan: 100 });

// Most services book through Paystack. BTC/Lightning is a manual alternative
// (see #payment section) — that form submits to Formspree
// (https://formspree.io/f/xeajwykp), which emails metaangels directly for
// manual approval.

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.querySelector(`[data-status-for="${form.id}"]`);
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      if (status) {
        status.hidden = false;
        status.textContent = form.dataset.form === "payment-confirm"
          ? "Got it — metaangels will confirm your booking shortly."
          : "Check your inbox — it's on the way. ✦";
      }
      form.reset();
    } catch (err) {
      if (status) {
        status.hidden = false;
        status.textContent = "Something went wrong submitting that — please try again or DM metaangels directly.";
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
});
