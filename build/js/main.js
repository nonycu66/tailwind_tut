'use strict';

const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  };

  // Explicitly set the initial state of the mobile menu
  mobileMenu.classList.add('hidden');

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);



function showYear() {
  const currentYear = document.getElementById("year");
  const thisYear = new Date().getFullYear();
  year.setAttribute('datetime', thisYear)
  currentYear.innerHTML = thisYear;
}

document.addEventListener('DOMContentLoaded', showYear)

