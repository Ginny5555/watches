document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navBar = document.querySelector('.navbar');
  let menuOpen = false;

  // Function to toggle the menu state
  function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
      navbarMenu.style.display = "block";
      burgerIcon.style.display = "none";
      closeIcon.style.display = "block";
      navBar.style.background = "#1E2827";
    } else {
      navbarMenu.style.display = "none";
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      navBar.style.background = "transparent";
    }
  }

  // Add click event listeners to both burgerIcon and closeIcon
  burgerIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
});


