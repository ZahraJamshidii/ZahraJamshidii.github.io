/* ---------- Theme toggle ---------- */
const themeBtn = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme){
  root.setAttribute("data-theme", theme);
  themeBtn.innerHTML = theme === "dark"
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("zj-theme", theme);
}

const savedTheme = localStorage.getItem("zj-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

/* ---------- Scroll reveal ---------- */
const revealTargets = document.querySelectorAll(".section, .hero, .footer");
revealTargets.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));
