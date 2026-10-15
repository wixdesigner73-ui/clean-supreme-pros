/* Clean Supreme Pros — interactions. Vanilla JS, no dependencies. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CFG = window.CSP_CONFIG || {};

  /* ---------- footer year ---------- */
  const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- sticky header state ---------- */
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  const burger = $('.burger'), nav = $('#nav');
  if (burger && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    burger.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); burger.focus(); } });
    document.addEventListener('click', (e) => { if (nav.classList.contains('is-open') && !nav.contains(e.target) && !burger.contains(e.target)) setOpen(false); });
    $$('a', nav).forEach((a) => a.addEventListener('click', () => setOpen(false)));
    window.matchMedia('(min-width: 901px)').addEventListener('change', (m) => m.matches && setOpen(false));
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = $$('[data-reveal]');
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in', 'done'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add('is-in');
        const i = parseInt(getComputedStyle(el).getPropertyValue('--i')) || 0;
        setTimeout(() => el.classList.add('done'), 800 + i * 90);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- gentle parallax (pointer + scroll) on decorative layers ---------- */
  const plx = $$('.plx[data-depth]');
  if (!reduced && plx.length) {
    const live = new Set();
    let mx = 0, my = 0, queued = false;
    const vio = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? live.add(e.target) : live.delete(e.target))), { rootMargin: '120px' });
    plx.forEach((el) => vio.observe(el));
    const paint = () => {
      queued = false;
      const vh = window.innerHeight;
      live.forEach((el) => {
        const d = parseFloat(el.dataset.depth) || 0.04;
        const r = el.parentElement.getBoundingClientRect();
        const sy = (r.top + r.height / 2 - vh / 2) * -d;
        el.style.setProperty('--px', (mx * d * 260).toFixed(1) + 'px');
        el.style.setProperty('--py', (my * d * 260 + sy).toFixed(1) + 'px');
      });
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', (e) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
        queue();
      }, { passive: true });
    }
    queue();
  }

  /* ---------- testimonial slider (renders only reviews supplied in js/reviews.js) ---------- */
  const slider = $('[data-reviews]');
  const reviews = Array.isArray(window.CSP_REVIEWS) ? window.CSP_REVIEWS.filter((r) => r && r.text) : [];
  if (slider && reviews.length) {
    const track = $('.rev-slider__track', slider), dots = $('.rev-dots', slider);
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    track.innerHTML = reviews.map((r, i) => `<figure class="rev-slide${i === 0 ? ' is-active' : ''}" aria-hidden="${i !== 0}"><blockquote>“${esc(r.text)}”</blockquote><figcaption>${esc(r.name || 'Client')}${r.source ? `<small>via ${esc(r.source)}</small>` : ''}</figcaption></figure>`).join('');
    dots.innerHTML = reviews.map((_, i) => `<button type="button" role="tab" aria-label="Review ${i + 1}" aria-selected="${i === 0}"></button>`).join('');
    const slides = $$('.rev-slide', track), dotEls = $$('button', dots);
    let cur = 0, timer;
    const go = (n) => {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => { s.classList.toggle('is-active', i === cur); s.setAttribute('aria-hidden', String(i !== cur)); });
      dotEls.forEach((d, i) => d.setAttribute('aria-selected', String(i === cur)));
    };
    const auto = () => { clearInterval(timer); if (!reduced && slides.length > 1) timer = setInterval(() => go(cur + 1), 7000); };
    $('[data-prev]', slider).addEventListener('click', () => { go(cur - 1); auto(); });
    $('[data-next]', slider).addEventListener('click', () => { go(cur + 1); auto(); });
    dotEls.forEach((d, i) => d.addEventListener('click', () => { go(i); auto(); }));
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', auto);
    slider.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { go(cur + 1); auto(); } if (e.key === 'ArrowLeft') { go(cur - 1); auto(); } });
    if (slides.length < 2) $('.rev-slider__ctrl', slider).hidden = true;
    slider.hidden = false;
    $('[data-yelp-fallback]').hidden = true;
    auto();
  }

  /* ---------- quote form ---------- */
  const form = $('#quote-form');
  if (form) {
    const status = $('#form-status'), success = $('#form-success');
    const dateEl = $('#date');
    if (dateEl) { const t = new Date(); t.setMinutes(t.getMinutes() - t.getTimezoneOffset()); dateEl.min = t.toISOString().slice(0, 10); }

    // /contact.html?service=home|office preselects the service
    const pre = new URLSearchParams(location.search).get('service');
    const sel = $('#service');
    if (pre && sel) { const v = pre === 'office' ? 'Office Cleaning' : pre === 'home' ? 'Home Cleaning' : ''; if (v) sel.value = v; }

    const rules = {
      name: (v) => (v.trim().length < 2 ? 'Please enter your full name.' : ''),
      email: (v) => (!v.trim() ? 'Please enter your email address.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Please enter a valid email address.' : ''),
      phone: (v) => (!v.trim() ? 'Please enter your phone number.' : v.replace(/\D/g, '').length < 10 ? 'Please enter a 10-digit phone number.' : ''),
      service: (v) => (!v ? 'Please choose the service you need.' : ''),
    };
    const check = (input) => {
      const rule = rules[input.name]; if (!rule) return true;
      const msg = rule(input.value), wrap = input.closest('[data-field]');
      wrap.classList.toggle('is-invalid', !!msg);
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      input.setAttribute('aria-describedby', input.id + '-err');
      $('.field__err', wrap).textContent = msg;
      return !msg;
    };
    $$('input, select, textarea', form).forEach((el) => {
      el.addEventListener('blur', () => el.value !== '' && check(el));
      el.addEventListener('input', () => el.closest('[data-field]')?.classList.contains('is-invalid') && check(el));
      el.addEventListener('change', () => el.closest('[data-field]')?.classList.contains('is-invalid') && check(el));
    });

    const say = (cls, html) => { status.className = 'form-status ' + cls; status.innerHTML = html; };
    const call = `<a href="tel:${CFG.PHONE_TEL || '+17863276919'}">${CFG.PHONE_DISPLAY || '(786) 327-6919'}</a>`;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      say('', '');
      const bad = $$('input, select, textarea', form).filter((el) => !check(el));
      if (bad.length) { bad[0].focus(); say('is-error', 'Please fix the highlighted fields and try again.'); return; }
      const data = Object.fromEntries(new FormData(form));
      if (data._gotcha) return; // honeypot: silently drop bots

      if (!CFG.FORM_ENDPOINT) {
        // Be honest: nothing is wired up yet, so never claim the request was sent.
        say('is-info', `Your details look good, but online sending isn't connected yet, so nothing was sent. Please call ${call} to request your quote.`);
        return;
      }
      form.classList.add('is-sending');
      try {
        const res = await fetch(CFG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...data, _subject: 'New quote request — Clean Supreme Pros' }) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.hidden = true; success.hidden = false; success.focus();
        form.reset();
      } catch (err) {
        say('is-error', `Sorry, we couldn't send your request. Please try again, or call ${call}.`);
      } finally {
        form.classList.remove('is-sending');
      }
    });
    $('#form-reset')?.addEventListener('click', () => { success.hidden = true; form.hidden = false; say('', ''); $('#name').focus(); });
  }
})();
