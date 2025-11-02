// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      hamburger.setAttribute('aria-expanded', !isExpanded);

      // Toggle active class on all nav-links
      navLinks.forEach(link => {
        if (!isExpanded) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });

    // Close menu when clicking on a link
    navLinks.forEach(linkGroup => {
      const links = linkGroup.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', function () {
          hamburger.setAttribute('aria-expanded', 'false');
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
        });
      });
    });

    // Close menu when clicking outside (only on mobile)
    document.addEventListener('click', function (event) {
      if (window.innerWidth <= 768) {
        const isClickInsideNav = event.target.closest('nav');
        const isHamburger = event.target.closest('.hamburger');

        if (!isClickInsideNav && !isHamburger && hamburger.getAttribute('aria-expanded') === 'true') {
          hamburger.setAttribute('aria-expanded', 'false');
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
        }
      }
    });
  }
});
