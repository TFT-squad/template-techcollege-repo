document.addEventListener("DOMContentLoaded", () => {
  const mainHeader = document.getElementById("main-header");
  const headerNav = document.getElementById("header-nav");
  const burgerMenu = document.getElementById("burger-menu");

  burgerMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    mainHeader.style.flexDirection = "column";
  });
});
