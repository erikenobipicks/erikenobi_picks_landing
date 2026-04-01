const revealItems = document.querySelectorAll(".reveal");
const counterItems = document.querySelectorAll(".metric-number");
const copyButtons = document.querySelectorAll(".copy-btn");
const yearNode = document.getElementById("current-year");
const leadForm = document.getElementById("lead-form");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateCounter = (node) => {
  const target = Number(node.dataset.target || 0);
  const duration = 900;
  const start = performance.now();

  const frame = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    node.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  }
);

counterItems.forEach((item) => counterObserver.observe(item));

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.copyTarget;
    const targetNode = targetId ? document.getElementById(targetId) : null;
    const text = targetNode?.textContent?.trim();

    if (!text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      const previous = button.textContent;
      button.textContent = "Copiado";
      window.setTimeout(() => {
        button.textContent = previous;
      }, 1600);
    } catch (error) {
      button.textContent = "No se pudo copiar";
      window.setTimeout(() => {
        button.textContent = "Copiar número";
      }, 1600);
    }
  });
});

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = String(formData.get("name") || "").trim();
    const plan = String(formData.get("plan") || "").trim();
    const level = String(formData.get("level") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const lines = [
      "Hola, vengo de la landing de Erikenobi Picks Premium.",
      `Nombre: ${name}`,
      `Interes principal: ${plan}`,
      `Momento de decision: ${level}`,
    ];

    if (message) {
      lines.push(`Mensaje: ${message}`);
    }

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://t.me/erikenobi?text=${text}`, "_blank", "noopener,noreferrer");
  });
}
