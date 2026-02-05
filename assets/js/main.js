(() => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Mobile menu (supports both data-attrs and class-based markup)
  const btn = document.querySelector('[data-nav-toggle]') || document.querySelector('.nav-toggle');
  const nav = document.querySelector('[data-nav]') || document.querySelector('.nav-menu') || document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Research filter
  const filterBar = document.querySelector('[data-filters]');
  const cards = Array.from(document.querySelectorAll('[data-card]'));
  if (filterBar && cards.length) {
    const setActive = (button) => {
      filterBar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
    };

    const apply = (tag) => {
      cards.forEach(c => {
        const tags = (c.getAttribute('data-tags') || '').split(',').map(s => s.trim()).filter(Boolean);
        const show = tag === 'all' || tags.includes(tag);
        c.classList.toggle('hidden', !show);
      });
    };

    filterBar.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-filter]');
      if (!b) return;
      const tag = b.getAttribute('data-filter');
      setActive(b);
      apply(tag);
    });
  }
})();
