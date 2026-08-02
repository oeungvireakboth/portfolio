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

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = "Sending...";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Something went wrong.");
      }
    } catch (error) {
      alert("❌ Failed to send message.");
    }

    button.disabled = false;
    button.innerHTML = originalText;
  });
}
