// Interactive cleaning-themed sections: a scroll-driven sweeping broom and a wipe-the-glass stage.
import { icon, sparkle, ambient, sectionHead } from './components.mjs';

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/** Dust bunnies along a floor line; a broom sweeps them away as the strip scrolls into view. */
export function sweepStrip(seed = 3) {
  const r = rng(seed * 7919);
  let dust = '';
  for (let i = 0; i < 34; i++) {
    const x = 4 + (i / 34) * 90 + r() * 2;
    const sz = 6 + Math.floor(r() * 9);
    const lift = Math.floor(r() * 10);
    dust += `<i style="left:${x.toFixed(1)}%;width:${sz}px;height:${Math.max(4, sz - 2)}px;bottom:${lift}px;--x:${x.toFixed(1)}"></i>`;
  }
  return `
<div class="sweep" data-sweep aria-hidden="true">
  <div class="sweep__dust">${dust}</div>
  <svg class="sweep__broom" viewBox="0 0 150 130" width="130" height="113">
    <g class="broom-swing">
      <path d="M62 2 64 78" stroke="#B9824A" stroke-width="8" stroke-linecap="round"/>
      <path d="M62 8 64 74" stroke="#D9A86C" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
      <rect x="46" y="76" width="36" height="12" rx="4" fill="#2CA9B7"/>
      <path d="M42 88h44l16 38H26z" fill="#E9C77E"/>
      <path d="M52 92 44 124M64 92v32M76 92l8 32M58 108h14" stroke="#C99A47" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <path d="M26 126h76" stroke="#B88435" stroke-width="3" stroke-linecap="round"/>
    </g>
  </svg>
</div>`;
}

/** Canvas "frosted glass" the visitor wipes clean with the mouse or a finger. */
export const wipeSection = () => `
<section class="section wipe" aria-labelledby="wipe-title">
  ${ambient({ seed: 61, n: 12, zone: 'edges' })}
  <div class="wrap">
    ${sectionHead({ label: 'Try It Yourself', title: 'Wipe the Glass. <span class="hl">See the Difference.</span>', text: 'Drag across the window to clear away the grime. That fresh, clear feeling is exactly what we aim to bring to your space.', center: true }).replace('<h2>', '<h2 id="wipe-title">')}
    <div class="wipe__stage" data-wipe data-reveal="zoom">
      <img class="wipe__img" src="assets/img/yellow-chair.jpg" width="1000" height="882" alt="Bright, tidy living room with a yellow armchair, a floor lamp and wooden floors" loading="lazy" decoding="async">
      <canvas class="wipe__canvas" aria-hidden="true"></canvas>
      <div class="wipe__hint" aria-hidden="true">${icon('sparkle')}<span>Drag to wipe</span></div>
      <div class="wipe__done" aria-hidden="true">${sparkle('twinkle', '#F6C945', 34)}<strong>Spotless!</strong></div>
      <svg class="wipe__sponge" viewBox="0 0 64 64" aria-hidden="true"><g transform="rotate(-18 32 32)"><rect x="8" y="14" width="48" height="36" rx="10" fill="#F6C945"/><rect x="8" y="14" width="48" height="12" rx="6" fill="#2CA9B7"/><g fill="#E0AD1F"><circle cx="20" cy="38" r="2.6"/><circle cx="34" cy="42" r="2.6"/><circle cx="44" cy="35" r="2.6"/></g></g></svg>
    </div>
    <div class="wipe__bar" data-reveal>
      <button class="btn btn--teal btn--sm" type="button" data-wipe-auto><span>Clean it for me</span>${icon('sparkle')}</button>
      <button class="btn btn--outline btn--sm" type="button" data-wipe-reset><span>Make it dusty again</span></button>
      <p class="sr" role="status" aria-live="polite" data-wipe-status></p>
    </div>
  </div>
</section>`;
