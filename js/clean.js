/* Clean Supreme Pros — cleaning-themed interactions:
   poppable hero bubbles, a scroll-driven sweeping broom, and a wipe-the-glass stage. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- poppable soap bubbles (hero) ---------- */
  $$('[data-pop]').forEach((b) => {
    const pop = () => {
      if (b.classList.contains('is-popped')) return;
      const field = b.parentElement, fr = field.getBoundingClientRect(), br = b.getBoundingClientRect();
      const cx = br.left - fr.left + br.width / 2, cy = br.top - fr.top + br.height / 2;
      if (!reduced) {
        const ring = document.createElement('i');
        ring.className = 'pop-ring';
        ring.style.cssText = `left:${cx}px;top:${cy}px;width:${br.width}px;height:${br.height}px`;
        field.appendChild(ring);
        setTimeout(() => ring.remove(), 650);
        for (let k = 0; k < 7; k++) {
          const d = document.createElement('i'), a = (k / 7) * Math.PI * 2, r = br.width * 0.9;
          d.className = 'pop-drop';
          d.style.cssText = `left:${cx}px;top:${cy}px;--dx:${Math.cos(a) * r}px;--dy:${Math.sin(a) * r}px`;
          field.appendChild(d);
          setTimeout(() => d.remove(), 650);
        }
      }
      b.classList.add('is-popped');
      setTimeout(() => {
        b.style.left = (Math.random() * 88 + 2).toFixed(1) + '%';
        b.style.top = (Math.random() * 88 + 2).toFixed(1) + '%';
        b.classList.remove('is-popped');
      }, 1400);
    };
    b.addEventListener('pointerenter', pop);
    b.addEventListener('pointerdown', pop);
  });

  /* ---------- scroll-driven sweeping broom ---------- */
  const sweeps = $$('[data-sweep]');
  if (sweeps.length) {
    const run = () => {
      const vh = window.innerHeight;
      sweeps.forEach((sw) => {
        const r = sw.getBoundingClientRect();
        if (r.bottom < -50 || r.top > vh + 50) return;
        const p = reduced ? 1 : Math.min(1, Math.max(0, (vh * 0.92 - r.top) / (vh * 0.5)));
        sw.style.setProperty('--bx', (p * r.width).toFixed(0) + 'px');
        sw.classList.toggle('is-done', p >= 1);
        $$('.sweep__dust i', sw).forEach((d) => d.classList.toggle('is-swept', parseFloat(d.style.getPropertyValue('--x')) <= p * 100 + 1));
      });
    };
    let queued = false;
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; run(); }); } };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    run();
  }

  /* ---------- wipe-the-glass ---------- */
  const stage = $('[data-wipe]');
  if (!stage) return;
  const canvas = $('canvas', stage), ctx = canvas.getContext('2d'), sponge = $('.wipe__sponge', stage);
  const mini = document.createElement('canvas'); // low-res twin used only to measure how much is wiped
  mini.width = 64; mini.height = 36;
  const mctx = mini.getContext('2d');
  const status = $('[data-wipe-status]');
  let W = 0, H = 0, dpr = 1, drawing = false, last = null, clean = false, auto = 0;

  const frost = () => {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, 'rgba(206,219,223,.95)'); g.addColorStop(0.5, 'rgba(193,207,212,.95)'); g.addColorStop(1, 'rgba(182,198,204,.96)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 22; i++) { // soft smudges
      ctx.fillStyle = `rgba(255,255,255,${0.04 + Math.random() * 0.06})`;
      ctx.beginPath();
      ctx.ellipse(Math.random() * W, Math.random() * H, (40 + Math.random() * 120) * dpr, (10 + Math.random() * 30) * dpr, Math.random() * 3, 0, 7);
      ctx.fill();
    }
    for (let i = 0; i < 320; i++) { // dust specks
      ctx.fillStyle = `rgba(110,100,85,${0.1 + Math.random() * 0.22})`;
      ctx.beginPath();
      ctx.arc(Math.random() * W, Math.random() * H, (0.6 + Math.random() * 2.2) * dpr, 0, 7);
      ctx.fill();
    }
    for (let i = 0; i < 9; i++) { // old drips
      const x = Math.random() * W, y = Math.random() * H * 0.6;
      ctx.strokeStyle = 'rgba(120,130,135,.18)'; ctx.lineWidth = (2 + Math.random() * 3) * dpr; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (Math.random() - 0.5) * 10, y + (60 + Math.random() * 160) * dpr); ctx.stroke();
    }
    mctx.globalCompositeOperation = 'source-over';
    mctx.fillStyle = '#000'; mctx.fillRect(0, 0, mini.width, mini.height);
  };

  const size = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h || (W && w === Math.round(W / dpr) && h === Math.round(H / dpr))) return;
    let snap = null;
    if (W && H) { // keep what's already been wiped when the stage is resized
      snap = document.createElement('canvas'); snap.width = W; snap.height = H;
      snap.getContext('2d').drawImage(canvas, 0, 0);
    }
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = Math.round(w * dpr);
    H = canvas.height = Math.round(h * dpr);
    if (snap) { ctx.drawImage(snap, 0, 0, W, H); return; }
    if (!clean) frost();
  };

  const radius = () => Math.max(34, canvas.clientWidth * 0.055);
  const erase = (x1, y1, x2, y2) => {
    const r = radius(), steps = Math.max(1, Math.ceil(Math.hypot(x2 - x1, y2 - y1) / (r * 0.3)));
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i <= steps; i++) {
      const x = (x1 + ((x2 - x1) * i) / steps) * dpr, y = (y1 + ((y2 - y1) * i) / steps) * dpr, rr = r * dpr;
      const g = ctx.createRadialGradient(x, y, rr * 0.4, x, y, rr);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    const k = mini.width / canvas.clientWidth;
    mctx.globalCompositeOperation = 'destination-out'; mctx.lineCap = 'round'; mctx.lineWidth = r * 1.5 * k;
    mctx.beginPath(); mctx.moveTo(x1 * k, y1 * k); mctx.lineTo(x2 * k + 0.01, y2 * k); mctx.stroke();
  };

  const clearedShare = () => {
    const d = mctx.getImageData(0, 0, mini.width, mini.height).data;
    let n = 0;
    for (let i = 3; i < d.length; i += 4) if (d[i] < 40) n++;
    return n / (d.length / 4);
  };
  const finish = () => {
    if (clean) return;
    clean = true;
    stage.classList.add('is-clean');
    stage.classList.remove('is-wiping');
    if (status) status.textContent = 'The glass is clean. Spotless!';
  };
  const pos = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const moveSponge = (x, y) => { sponge.style.transform = `translate(${x}px,${y}px) rotate(${Math.sin(performance.now() / 90) * 10}deg)`; };

  canvas.addEventListener('pointerdown', (e) => {
    if (clean) return;
    drawing = true; last = pos(e);
    stage.classList.add('is-touched', 'is-wiping');
    canvas.setPointerCapture(e.pointerId);
    erase(last[0], last[1], last[0], last[1]); moveSponge(last[0], last[1]);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (clean) return;
    const p = pos(e);
    if (e.pointerType === 'mouse') { stage.classList.add('is-wiping'); moveSponge(p[0], p[1]); }
    if (!drawing) return;
    erase(last[0], last[1], p[0], p[1]); last = p;
  });
  const up = () => { if (!drawing) return; drawing = false; if (clearedShare() > 0.55) finish(); };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('pointerleave', () => stage.classList.remove('is-wiping'));

  $('[data-wipe-auto]').addEventListener('click', () => {
    if (clean) return;
    stage.classList.add('is-touched');
    if (reduced) { ctx.clearRect(0, 0, W, H); finish(); return; }
    const w = canvas.clientWidth, h = canvas.clientHeight, rows = 5, total = 2400, t0 = performance.now();
    let prev = [radius() * 0.4, h * 0.1];
    cancelAnimationFrame(auto);
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / total), f = t * rows, row = Math.min(rows - 1, Math.floor(f)), u = f - row;
      const x = (row % 2 === 0 ? u : 1 - u) * w, y = h * (0.1 + (row + u * 0.15) * (0.8 / rows));
      erase(prev[0], prev[1], x, y); prev = [x, y];
      stage.classList.add('is-wiping'); moveSponge(x, y);
      if (t < 1) auto = requestAnimationFrame(tick);
      else { ctx.clearRect(0, 0, W, H); finish(); }
    };
    auto = requestAnimationFrame(tick);
  });
  $('[data-wipe-reset]').addEventListener('click', () => {
    cancelAnimationFrame(auto);
    clean = false;
    stage.classList.remove('is-clean', 'is-touched', 'is-wiping');
    frost();
    if (status) status.textContent = 'The glass is dusty again.';
  });

  size();
  if ('ResizeObserver' in window) new ResizeObserver(size).observe(stage);
})();
