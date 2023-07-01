document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburger-menu");
    const dropdownMenu = document.querySelector(".drop-down");
  
    hamburgerButton.addEventListener("click", toggleDropdown);
  
    function toggleDropdown() {
      dropdownMenu.classList.toggle("show");
    }
  });