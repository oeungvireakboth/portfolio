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
