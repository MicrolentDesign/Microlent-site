/* ── Page Loader ── */
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('page-loader').classList.add('hidden-loader');
  }, 1400);
});

/* ── Navbar scroll effect ── */
(function () {
  var nav = document.getElementById('main-nav');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('bg-[#F8F8F6B3]', 'backdrop-blur-sm', 'shadow-sm');
      nav.style.top = '0';
    } else {
      nav.classList.remove('bg-[#F8F8F6B3]', 'backdrop-blur-sm', 'shadow-sm');
      nav.style.top = '';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Back to top ── */
(function () {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
})();

/* ── Mobile Menu ── */
function toggleMobileMenu() {
  var menu = document.getElementById('mobile-menu');
  var overlay = document.getElementById('mobile-menu-overlay');
  var icon = document.getElementById('hamburger-icon');
  var isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  if (icon) icon.className = isOpen ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

/* ── Mobile Services Accordion ── */
function toggleMobServices() {
  var btn = document.getElementById('mob-services-btn');
  var sub = document.getElementById('mob-services-sub');
  if (!btn || !sub) return;
  var isOpen = sub.classList.contains('open');
  sub.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
}

/* ── Scroll reveal ── */
(function () {
  var delays = ['sr-d1', 'sr-d2', 'sr-d3', 'sr-d4', 'sr-d5', 'sr-d6', 'sr-d7', 'sr-d8'];
  document.querySelectorAll('section').forEach(function (sec) {
    sec.querySelectorAll('.inline-flex.rounded-full, .rounded-full.text-\\[\\#0E78E9\\]').forEach(function (el) {
      if (el.tagName !== 'BUTTON' && el.tagName !== 'A') el.classList.add('sr');
    });
    sec.querySelectorAll('h2, h3').forEach(function (el) { el.classList.add('sr'); });
    sec.querySelectorAll('p').forEach(function (el) { el.classList.add('sr'); });
    sec.querySelectorAll('.grid').forEach(function (grid) {
      Array.from(grid.children).forEach(function (card, i) {
        card.classList.add('sr');
        if (delays[i]) card.classList.add(delays[i]);
      });
    });
    sec.querySelectorAll('.flex.flex-col.lg\\:flex-row > *').forEach(function (col, i) {
      col.classList.add('sr');
      if (delays[i]) col.classList.add(delays[i]);
    });
  });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.sr').forEach(function (el) { obs.observe(el); });
  window._observeSR = function (container) {
    (container || document).querySelectorAll('.sr').forEach(function (el) { obs.observe(el); });
  };
})();

/* ── Number Counter ── */
(function () {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  var done = false;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && !done) {
        done = true;
        counters.forEach(function (el) {
          var target = +el.getAttribute('data-target');
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 1600; var start = null;
          function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }
    });
  }, { threshold: 0.5 });
  var anchor = counters[0].closest('.grid') || counters[0];
  obs.observe(anchor);
})();

/* ── Mega Menu hover with delay ── */
(function () {
  var wrap = document.querySelector('.nav-dropdown-wrap');
  var dropdown = wrap && wrap.querySelector('.nav-dropdown');
  if (!wrap || !dropdown) return;
  var timer;
  function show() { clearTimeout(timer); dropdown.classList.add('open'); }
  function hide() { timer = setTimeout(function () { dropdown.classList.remove('open'); }, 120); }
  wrap.addEventListener('mouseenter', show);
  wrap.addEventListener('mouseleave', hide);
  dropdown.addEventListener('mouseenter', show);
  dropdown.addEventListener('mouseleave', hide);
})();
