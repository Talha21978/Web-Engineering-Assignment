// JavaScript for toggling the navbar on mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});







function activateButton(a) {
    // Remove the 'active' class from all buttons
    var buttons = document.querySelectorAll(".navbar-links");
    buttons.forEach(function(button) {
      button.classList.remove("active");
    });

    // Add the 'active' class to the clicked button
    button.classList.add("active");
  }