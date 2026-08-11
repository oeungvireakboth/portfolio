/* -------------------
       Typing Animation
    --------------------*/

window.addEventListener("portfolioReady", () => {
  typeeffect();
});

/* -------------------
       Typing Animation
    --------------------*/
const typingText = document.getElementById("typing-text");

const words = [
  "Cloud & Cybersecurity Student",
  "AWS Cloud Enthusiast",
  "Future Security Engineer",
];

let wordindex = 0;
let charindex = 0;
let deleting = false;

function typeeffect() {
  const currentWord = words[wordindex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charindex++);

    if (charindex > currentWord.length) {
      deleting = true;
      setTimeout(typeeffect, 1000);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charindex--);

    if (charindex < 0) {
      deleting = false;
      wordindex = (wordindex + 1) % words.length;
    }
  }
  setTimeout(typeeffect, deleting ? 40 : 90);
}

typeeffect();

/* ==========================
   Name Typing Animation
========================== */

const firstName = "Vireakboth";
const lastName = "Oeung";

const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const cursor = document.querySelector(".hero-title .cursor");

let firstIndex = 0;
let lastIndex = 0;

function typeFirstName() {
  if (firstIndex < firstName.length) {
    firstNameElement.textContent += firstName.charAt(firstIndex);
    firstIndex++;

    // Move cursor after Vireakboth
    firstNameElement.after(cursor);

    setTimeout(typeFirstName, 100);
  } else {
    // Move cursor to the second line
    lastNameElement.after(cursor);

    setTimeout(typeLastName, 250);
  }
}

function typeLastName() {
  if (lastIndex < lastName.length) {
    lastNameElement.textContent += lastName.charAt(lastIndex);
    lastIndex++;

    // Keep cursor after Oeung while typing
    lastNameElement.after(cursor);

    setTimeout(typeLastName, 100);
  }
}
window.addEventListener("portfolioReady", () => {
  if (hero) {
    hero.classList.add("hero-loaded");
  }
});

window.addEventListener("portfolioReady", () => {
  setTimeout(() => {
    typeFirstName();
  }, 500);
});

/* ==========================
   Hero Entrance
========================== */

const hero = document.querySelector(".hero");

window.addEventListener("portfolioReady", () => {
  if (hero) {
    setTimeout(() => {
      hero.classList.add("hero-loaded");
    }, 100);
  }
});
