// Typewriter effect
const roles = [
  "DevOps Engineer 🚀",
  "Cloud Architect ☁️",
  "Automation Enthusiast ⚙️",
  "Docker & Kubernetes Pro 🐳"
];
let i = 0, j = 0, currentRole = "", isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  const fullRole = roles[i];
  if (isDeleting) {
    currentRole = fullRole.substring(0, j--);
  } else {
    currentRole = fullRole.substring(0, j++);
  }
  typewriter.textContent = currentRole;

  if (!isDeleting && j === fullRole.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 400);
  } else {
    setTimeout(type, isDeleting ? 80 : 120);
  }
}
type();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add("visible");
  });
});

