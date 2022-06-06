const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// for fixed hamburger
const fixedHamburger = document.querySelector(".fixed-hamburger");
const fixedNavMenu = document.querySelector(".fixed-nav-menu");

fixedHamburger.addEventListener("click", () => {
  fixedHamburger.classList.toggle("active");
  fixedNavMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    fixedHamburger.classList.remove("active");
    fixedNavMenu.classList.remove("active");
  })
);