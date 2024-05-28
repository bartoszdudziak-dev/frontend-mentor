const primaryNav = document.querySelector('.primary-navigation');
const navToggleBtn = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector('.primary-header');
const main = document.querySelector('main');

// Functions
const adjustMainPadding = function () {
  const headerHeight = header.offsetHeight;
  main.style.paddingBlockStart = headerHeight + 'px';
};

const showNavigation = function () {
  primaryNav.setAttribute('data-visible', true);
  navToggleBtn.setAttribute('aria-expanded', true);
};

const hideNavigation = function () {
  primaryNav.setAttribute('data-visible', false);
  navToggleBtn.setAttribute('aria-expanded', false);
};

const scrollToSection = function (e) {
  e.preventDefault();
  const link = e.target.closest('.nav-link');
  if (!link || !link.hash) return;

  const section = document.querySelector(`${link.hash}`);
  const headerHeight = header.offsetHeight;
  const sectionPosition = section.getBoundingClientRect().top;
  const offsetPosition = sectionPosition + window.scrollY - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  hideNavigation();
};

const navToggle = function () {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') showNavigation();
  else hideNavigation();
};

// Listeners
window.addEventListener('load', adjustMainPadding);
window.addEventListener('resize', adjustMainPadding);
navToggleBtn.addEventListener('click', navToggle);
primaryNav.addEventListener('click', scrollToSection);
