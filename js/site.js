(function () {
  'use strict';
  var toggle = document.querySelector('.mobile-menu-toggle');
  var nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close Menu ✕' : 'Menu ☰';
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu ☰';
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a') && window.matchMedia('(max-width: 960px)').matches) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu ☰';
      }
    });
  }
})();
