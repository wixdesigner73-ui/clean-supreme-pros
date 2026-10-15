// Interactive cleaning-themed sections: a scroll-driven sweeping broom and a wipe-the-glass stage.
import { icon, sparkle, ambient, sectionHead } from './components.mjs';

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}


/** A realistic straw broom: grained wooden handle, metal ferrule, wire-bound head, hundreds of loose strands. */
function broomSvg(seed) {
  const r = rng(seed * 104729);
  const tones = ['#E9CB82', '#DDB963', '#CFA54F', '#BF9440', '#E3C376', '#D6AE58'];
  let strands = '';
  for (let i = 0; i < 46; i++) {
    const t = i / 45;
    const x0 = 53 + t * 40 + (r() - .5) * 2;          // where the strand leaves the binding
    const x1 = 36 + t * 74 + (r() - .5) * 7;          // fanned-out tip
    const y1 = 146 + Math.floor(r() * 8);              // uneven, frayed ends
    const bend = (r() - .5) * 5;
    strands += `<path d="M${x0.toFixed(1)} 122 Q${(x0 + (x1 - x0) * .35 + bend).toFixed(1)} 134 ${x1.toFixed(1)} ${y1}" stroke="${tones[Math.floor(r() * tones.length)]}" stroke-width="${(1.3 + r() * 1.5).toFixed(1)}" stroke-linecap="round" fill="none"/>`;
  }
  let grain = '';
  for (let i = 0; i < 7; i++) grain += `<path d="M${67 + (i % 2) * 1.5} ${8 + i * 12}q1.5 5 .5 10" stroke="#7A4A22" stroke-opacity=".38" stroke-width="1.1" fill="none" stroke-linecap="round"/>`;
  return `
  <svg class="sweep__broom" viewBox="0 0 160 160" width="176" height="176">
    <defs>
      <linearGradient id="bwood${seed}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E2B57A"/><stop offset=".45" stop-color="#C98F52"/><stop offset="1" stop-color="#8F5F30"/></linearGradient>
      <linearGradient id="bmetal${seed}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#B9C4C9"/><stop offset=".3" stop-color="#F4F8F9"/><stop offset=".6" stop-color="#A9B6BC"/><stop offset="1" stop-color="#7E8C93"/></linearGradient>
      <linearGradient id="bhead${seed}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C79A45"/><stop offset="1" stop-color="#E7C77C"/></linearGradient>
    </defs>
    <ellipse cx="70" cy="153" rx="46" ry="5" fill="#142D35" opacity=".13"/>
    <g class="broom-swing">
      <path d="M64 2h9l5 92h-11z" fill="url(#bwood${seed})"/>
      ${grain}
      <path d="M65 2h3l4 92h-3z" fill="#fff" opacity=".25"/>
      <circle cx="68.6" cy="11" r="2.6" fill="#5C3A1A" opacity=".8"/>
      <path d="M62 86h19l2 22H60z" fill="url(#bmetal${seed})"/>
      <path d="M61 92h21M60.5 98h22M60 104h23" stroke="#5E6C73" stroke-opacity=".45" stroke-width="1.2"/>
      <g class="broom-bristles">
        <path d="M54 108h38l8 16H46z" fill="url(#bhead${seed})"/>
        ${strands}
        <path d="M49 117h45M47 123h49" stroke="#6E5320" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>
        <path d="M49 117h45" stroke="#F3DFA6" stroke-width=".8" stroke-opacity=".6" transform="translate(0 -1)"/>
      </g>
    </g>
  </svg>`;
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
${broomSvg(seed)}
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
