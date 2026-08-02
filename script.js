// ==========================
// Mobile Navigation
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
}

// ==========================
// Contact Form
// ==========================

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      successMessage.textContent = "Please fill in all fields.";
      return;
    }

    successMessage.textContent = "Message sent successfully!";
    form.reset();
  });
}
// ----------------------------------------------------------
// FOOTER YEAR
// Small touch so the copyright year never needs manual updating.
// ---------------------------------------------------------- */
function initFooterYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}
