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
// Page Loading Animation
// ==========================

const pageLoader = document.getElementById("page-loader");
const loaderProgress = document.getElementById("loader-progress");
const loaderPercentage = document.getElementById("loader-percentage");
const loaderStatus = document.getElementById("loader-status");

if (pageLoader) {
  const loadingSteps = [
    {
      progress: 20,
      text: "INITIALIZING...",
    },
    {
      progress: 40,
      text: "LOADING SECURITY MODULE...",
    },
    {
      progress: 60,
      text: "CONNECTING CLOUD SERVICES...",
    },
    {
      progress: 80,
      text: "CHECKING SYSTEM STATUS...",
    },
    {
      progress: 100,
      text: "SYSTEM READY",
    },
  ];

  let stepIndex = 0;

  function runLoader() {
    const step = loadingSteps[stepIndex];

    loaderProgress.style.width = `${step.progress}%`;
    loaderPercentage.textContent = `${step.progress}%`;
    loaderStatus.textContent = step.text;

    stepIndex++;

    if (stepIndex < loadingSteps.length) {
      setTimeout(runLoader, 300);
    } else {
      setTimeout(() => {
        pageLoader.classList.add("loader-hidden");

        // Tell the hero animations that loading is finished
        window.dispatchEvent(new Event("portfolioReady"));

        setTimeout(() => {
          pageLoader.remove();
        }, 800);
      }, 500);
    }
  }

  // Small delay so the loader is actually visible
  setTimeout(runLoader, 300);
}
