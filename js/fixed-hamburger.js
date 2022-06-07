const fixedHamburger = document.querySelector(".fixed-hamburger");
const fixedNavMenu = document.querySelector(".fixed-nav-menu");

fixedHamburger.addEventListener("click", () => {
  fixedHamburger.classList.toggle("active");
  fixedNavMenu.classList.toggle("active");
});

document.querySelectorAll(".fixed-nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    fixedHamburger.classList.remove("active");
    fixedNavMenu.classList.remove("active");
  })
);