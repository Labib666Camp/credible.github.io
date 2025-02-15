// Initialize AOS and set current year in footer
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    once: true,
  });
  
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Smooth scrolling for nav links using jQuery
$(document).ready(function () {
  $("nav a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top - 70,
      },
      600
    );
  });
});
