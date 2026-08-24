document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }

  // Set Active Nav Link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // Basic matching for demo purposes
    if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
  
  // Also check if index is active (Home)
  if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === 'index.html') {
        link.classList.add('active');
      }
    });
  }
});
