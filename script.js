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

// Launch model: all payment methods (M-Pesa/Pochi la Biashara, BTC/Bitnob,
// Sendwave) are manually confirmed for now — see #payment section. The
// payment-confirm form below has no backend yet (needs Formspree or similar).

document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.querySelector(`[data-status-for="${form.id}"]`);
    if (!status) return;
    status.hidden = false;
    if (form.dataset.form === "payment-confirm") {
      status.textContent = "Form isn't wired to a backend yet — TODO before launch. metaangels will approve confirmations by hand until then.";
    } else {
      status.textContent = "Check your inbox — it's on the way. ✦";
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
