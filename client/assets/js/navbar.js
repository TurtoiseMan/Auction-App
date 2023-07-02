function buildNavbar() {
  const header = document.getElementsByTagName("header")[0];
  header.classList.add("navbar");
  const navbarContainer = document.createElement("div");
  navbarContainer.classList.add("navbar-container");
  header.appendChild(navbarContainer);

  const navbarLogo = document.createElement("div");
  navbarLogo.classList.add("navbar-logo");
  navbarContainer.appendChild(navbarLogo);

  const a = document.createElement("a");
  a.href = "index.html";
  a.textContent = "Auction App";
  navbarLogo.appendChild(a);

  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  navbarContainer.appendChild(hamburger);

  const hamburgerMenu = document.createElement("button");
  hamburgerMenu.classList.add("hamburger-menu");
  hamburger.appendChild(hamburgerMenu);

  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.classList.add("hamburger-icon");
    hamburgerMenu.appendChild(span);
  }

  const dropDown = document.createElement("div");
  dropDown.classList.add("drop-down");
  header.appendChild(dropDown);

  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.textContent = "Home";
  dropDown.appendChild(homeLink);

  const addItemLink = document.createElement("a");
  addItemLink.href = "add-item.html";
  addItemLink.textContent = "Add Item";
  dropDown.appendChild(addItemLink);
}

buildNavbar();

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const dropdownMenu = document.querySelector(".drop-down");

  hamburgerButton.addEventListener("click", toggleDropdown);

  function toggleDropdown() {
    dropdownMenu.classList.toggle("show");
  }
});
