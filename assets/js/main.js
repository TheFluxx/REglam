const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const form = document.getElementById("reviewForm");
const statusNode = document.getElementById("formStatus");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open");
  });
}

if (form && statusNode) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const severity = String(data.get("severity") || "").trim();
    const comment = String(data.get("comment") || "").trim();

    if (!name || !email || !severity || !comment) {
      statusNode.textContent = "Заполните все поля перед отправкой.";
      return;
    }

    if (!email.includes("@")) {
      statusNode.textContent = "Укажите корректный email.";
      return;
    }

    statusNode.textContent =
      "Форма прошла базовую валидацию. Зафиксируйте замечание в docs/03_review_log.md.";
    form.reset();
  });
}
