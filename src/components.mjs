// Shared building blocks for the Clean Supreme Pros site.
// Everything here returns plain HTML / SVG strings; build.mjs stitches them into pages.

export const BIZ = {
  name: 'Clean Supreme Pros',
  phone: '(786) 327-6919',
  tel: '+17863276919',
  city: 'North Miami Beach, FL 33162',
  yelp: 'https://www.yelp.com/biz/clean-supreme-pros-north-miami-beach',
};

/* ------------------------------------------------------------------ icons */
const ICONS = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/>',
  building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7.5h2M13 7.5h2M9 11.5h2M13 11.5h2M10 21v-4h4v4"/>',
  spray: '<path d="M8.5 11h6l1 3v6.2a.8.8 0 0 1-.8.8H8.3a.8.8 0 0 1-.8-.8V14z"/><path d="M9.5 11V8h5v3"/><path d="M9.5 8 6 7.2V5l3.5.6"/><path d="M3 4.5 4.6 5M2.6 8 4 7.6M3.4 11l1.4-1.2" class="spark"/>',
  sparkle: '<path d="M11 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z"/><path d="M19 16.5v4M17 18.5h4"/>',
  search: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5.5 5.5"/><path d="M8 10.5a2.5 2.5 0 0 1 2.5-2.5"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6z"/><path d="m8.8 12 2.4 2.4 4.2-4.6"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
  chat: '<path d="M4 5.5h16v11H9.5L5 20v-3.5H4z"/><path d="M8 10h8M8 13h5"/>',
  star: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6.5L20.5 7"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>',
  droplet: '<path d="M12 3.5s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.7 12 3.5 12 3.5z"/><path d="M9.5 14.5a2.7 2.7 0 0 0 2 2.3"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  clipboard: '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 4.5h6v3H9z"/><path d="M8.5 12.5h7M8.5 16h4.5"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14c1 1.5 2 2.2 3.5 2.2s2.5-.7 3.5-2.2M9 9.5h.01M15 9.5h.01"/>',
  bucket: '<path d="M5 8h14l-1.5 11a1 1 0 0 1-1 .9h-9a1 1 0 0 1-1-.9z"/><path d="M5 8c0-2 3-3 7-3s7 1 7 3"/><path d="M8.5 12.5c1 1 2 1 3.5 0s2.5-1 3.5 0"/>',
  brush: '<rect x="4" y="10" width="16" height="9" rx="3"/><path d="M8 10V6.5M12 10V5M16 10V6.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
  quote: '<path d="M9.5 7H6a1.5 1.5 0 0 0-1.5 1.5V12A1.5 1.5 0 0 0 6 13.5h2.5c0 2-.8 3-2.5 3.5M19 7h-3.5A1.5 1.5 0 0 0 14 8.5V12a1.5 1.5 0 0 0 1.5 1.5H18c0 2-.8 3-2.5 3.5"/>',
};

export const icon = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;

export const sprite = () =>
  `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>${Object.entries(ICONS)
    .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${v}</symbol>`)
    .join('')}</defs></svg>`;

/* ---------------------------------------------------------------- buttons */
export const btn = (label, href, { variant = 'coral', ic = '', attrs = '' } = {}) =>
  `<a class="btn btn--${variant}" href="${href}" ${attrs}><span>${label}</span>${ic ? icon(ic) : ''}</a>`;

/* ------------------------------------------------------------ decorations */
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

const bubbleSvg = (size, c) =>
  `<svg class="am am--b" viewBox="0 0 40 40" width="${size}" height="${size}"><circle cx="20" cy="20" r="17" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="1.8"/><path d="M11 17a9 9 0 0 1 7-7" fill="none" stroke="${c}" stroke-opacity=".7" stroke-width="2.6" stroke-linecap="round"/></svg>`;
const sparkSvg = (size, c) =>
  `<svg class="am am--s" viewBox="0 0 24 24" width="${size}" height="${size}"><path d="M12 1c.9 6.6 3.9 9.6 11 11-7.1 1.4-10.1 4.4-11 11-.9-6.6-3.9-9.6-11-11C8.1 10.6 11.1 7.6 12 1z" fill="${c}"/></svg>`;
const dropSvg = (size, c) =>
  `<svg class="am am--d" viewBox="0 0 16 16" width="${size}" height="${size}"><path d="M8 1.5S2.5 8 2.5 11a5.5 5.5 0 0 0 11 0C13.5 8 8 1.5 8 1.5z" fill="${c}" fill-opacity=".75"/><path d="M5.6 11a2.5 2.5 0 0 0 1.8 2.3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg>`;

/** Ambient cleaning decor: floating soap bubbles, sparkles and water droplets. Purely decorative. */
export function ambient({ seed = 1, n = 14, zone = null } = {}) {
  const r = rng(seed * 9301 + 49297);
  let out = '<div class="ambient" aria-hidden="true">';
  const count = Math.ceil(n * 0.55);
  for (let i = 0; i < count; i++) {
    let x = r() * 100;
    const y = r() * 100;
    if (zone === 'edges') x = r() < 0.5 ? r() * 9 : 91 + r() * 9; // keep the text column clear
    const t = r();
    const dur = (6 + r() * 6).toFixed(1);
    const delay = (-r() * 8).toFixed(1);
    let svg;
    if (t < 0.55) svg = bubbleSvg(16 + Math.floor(r() * 34), r() < 0.8 ? '#2CA9B7' : '#7CC9D3');
    else if (t < 0.82) svg = sparkSvg(12 + Math.floor(r() * 14), r() < 0.6 ? '#F6C945' : '#2CA9B7');
    else svg = dropSvg(12 + Math.floor(r() * 8), '#2CA9B7');
    out += svg.replace('<svg ', `<svg style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;--dur:${dur}s;--delay:${delay}s" `);
  }
  return out + '</div>';
}

/** A little cluster of soap suds */
export const foam = (cls = '', color = '#2CA9B7') =>
  `<svg class="foam ${cls}" viewBox="0 0 80 64" aria-hidden="true"><g fill="${color}" fill-opacity=".1" stroke="${color}" stroke-width="2"><circle cx="26" cy="38" r="20"/><circle cx="56" cy="24" r="14"/><circle cx="58" cy="50" r="9"/></g><path d="M14 32a14 14 0 0 1 10-10M50 18a8 8 0 0 1 6-4" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>`;

export const sparkle = (cls = '', color = '#F6C945', size = 28) =>
  `<svg class="sparkle ${cls}" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="M12 1c.9 6.6 3.9 9.6 11 11-7.1 1.4-10.1 4.4-11 11-.9-6.6-3.9-9.6-11-11C8.1 10.6 11.1 7.6 12 1z" fill="${color}"/></svg>`;

export const bubble = (cls = '', size = 40, color = '#2CA9B7') =>
  `<svg class="bubble ${cls}" viewBox="0 0 40 40" width="${size}" height="${size}" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="${color}" fill-opacity=".12" stroke="${color}" stroke-width="2"/><path d="M11 17a9 9 0 0 1 7-7" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`;

/** wrapper that gives a decoration pointer/scroll parallax AND its own float animation */
export const plx = (inner, { x, y, depth = 0.04, cls = '' }) =>
  `<span class="plx ${cls}" data-depth="${depth}" style="${x ? `left:${x};` : ''}${y ? `top:${y};` : ''}">${inner}</span>`;

/** wavy divider */
export const wave = (fill = '#fff', flip = false) =>
  `<svg class="wave ${flip ? 'wave--flip' : ''}" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40c120 30 240 38 360 24S600 8 760 14s300 40 440 36c90-2 180-14 240-26V80H0z" fill="${fill}"/></svg>`;

/* ------------------------------------------------------- hero: blob shape */
export const heroArt = () => `
<div class="hero-art" data-parallax-scope>
  <svg class="hero-blob" viewBox="0 0 520 560" aria-hidden="true">
    <defs><linearGradient id="gb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#46BCCB"/><stop offset="1" stop-color="#1B96A6"/></linearGradient></defs>
    <path class="blob-a" fill="url(#gb)" d="M262 18c92-6 205 52 232 150 26 94-24 142-30 226-6 86-96 150-196 146C174 536 64 490 32 394 2 306 40 246 52 176 68 88 160 24 262 18z"/>
    <path class="blob-b" fill="#fff" fill-opacity=".16" d="M300 60c60 6 138 52 150 118 12 64-28 90-34 150-6 60-62 110-128 110s-130-52-142-112c-12-62 24-90 30-148 8-70 70-124 124-118z"/>
  </svg>
  <div class="hero-photo"><img src="assets/img/hero-cleaner.jpg" width="1200" height="800" alt="Smiling cleaner in blue gloves holding a spray bottle and cleaning cloth in a bright home" fetchpriority="high"></div>
  ${plx(`<div class="chip chip--float float">${icon('sparkle')}<b>Spotless</b><small>every visit</small></div>`, { x: '-4%', y: '62%', depth: 0.07, cls: 'plx--chip' })}
  ${plx(`<div class="chip chip--float float-slow chip--coral">${icon('shield')}<b>Careful</b><small>detail focus</small></div>`, { x: '76%', y: '82%', depth: -0.05, cls: 'plx--chip' })}
  ${plx(sparkle('twinkle', '#F6C945', 40), { x: '2%', y: '8%', depth: 0.09 })}
  ${plx(sparkle('twinkle d2', '#fff', 26), { x: '86%', y: '12%', depth: 0.06 })}
  ${plx(bubble('float', 54), { x: '90%', y: '44%', depth: 0.1 })}
  ${plx(bubble('float-slow', 30, '#F56F63'), { x: '-2%', y: '40%', depth: 0.05 })}
  ${plx(foam('float-slow'), { x: '78%', y: '-4%', depth: 0.05 })}
  <div class="pop-field">${[[8,18,46],[88,30,38],[4,74,30],[92,68,52],[46,-2,28],[70,92,34],[20,92,26]].map(([x,y,sz],k)=>`<span class="pop" style="left:${x}%;top:${y}%;--sz:${sz}px;--d:${k*0.7}s" data-pop></span>`).join('')}</div>
</div>`;

/* ------------------------------------- cleaner character w/ spray bottle */
export const cleanerCharacter = () => `
<svg class="character" viewBox="0 0 420 520" role="img" aria-label="Illustration of a smiling cleaner in a coral apron holding a spray bottle, with a bucket of soapy water">
  <defs>
    <linearGradient id="apron" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F9A15F"/><stop offset="1" stop-color="#F2604F"/></linearGradient>
    <linearGradient id="bgc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D4EFF3"/><stop offset="1" stop-color="#B7E3EA"/></linearGradient>
  </defs>
  <path class="blob-a" fill="url(#bgc)" d="M215 28c86-4 160 56 170 138 10 80-36 106-34 186 2 70-58 122-136 122S52 428 40 350C28 270 70 244 62 170 56 92 130 32 215 28z"/>
  <ellipse cx="212" cy="494" rx="112" ry="12" fill="#2CA9B7" opacity=".22"/>
  <!-- legs + shoes -->
  <path d="M190 404 192 478" stroke="#F0A57F" stroke-width="16" stroke-linecap="round"/>
  <path d="M232 404 232 478" stroke="#F0A57F" stroke-width="16" stroke-linecap="round"/>
  <path d="M170 486c0-9 10-14 22-14s18 6 18 14z" fill="#168A9A"/>
  <path d="M214 486c0-9 10-14 22-14s18 6 18 14z" fill="#168A9A"/>
  <!-- back hair -->
  <path d="M170 112c-3-50 22-56 42-56s46 8 42 56c-2 30 2 52 10 70h-104c8-18 12-40 10-70z" fill="#2B1E22"/>
  <!-- neck -->
  <rect x="198" y="140" width="24" height="30" rx="8" fill="#EFA982"/>
  <!-- shirt -->
  <path d="M166 176c14-14 70-14 88 0l6 40H160z" fill="#2CA9B7"/>
  <path d="M190 160c10 14 30 14 40 0" fill="none" stroke="#168A9A" stroke-width="3" stroke-linecap="round"/>
  <!-- apron / overalls -->
  <path d="M180 200h60l14 62 34 148c-34 20-110 20-144 0l34-148z" fill="url(#apron)"/>
  <path d="M184 202 176 170M236 202l8-32" stroke="#F58A55" stroke-width="10" stroke-linecap="round"/>
  <rect x="194" y="226" width="32" height="24" rx="6" fill="#fff" fill-opacity=".28"/>
  <path d="M188 330c20 8 40 8 62 0" stroke="#fff" stroke-opacity=".35" stroke-width="3" stroke-linecap="round" fill="none"/>
  <!-- right arm (holding bucket) -->
  <path d="M250 176q16 14 18 38" stroke="#2CA9B7" stroke-width="26" stroke-linecap="round" fill="none"/>
  <path d="M268 214q8 34 4 82" stroke="#F0A57F" stroke-width="15" stroke-linecap="round" fill="none"/>
  <circle cx="272" cy="302" r="10" fill="#F0A57F"/>
  <!-- bucket -->
  <path d="M254 330q18-42 36 0" stroke="#142D35" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M246 326h52l-6 52c-10 8-30 8-40 0z" fill="#F6C945"/>
  <path d="M246 326h52" stroke="#E0AD1F" stroke-width="6" stroke-linecap="round"/>
  <path d="M258 340l2 28" stroke="#fff" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/>
  <g class="suds"><circle cx="258" cy="318" r="9" fill="#fff" stroke="#2CA9B7" stroke-width="2"/><circle cx="276" cy="312" r="12" fill="#fff" stroke="#2CA9B7" stroke-width="2"/><circle cx="291" cy="319" r="7" fill="#fff" stroke="#2CA9B7" stroke-width="2"/></g>
  <!-- head -->
  <circle cx="210" cy="112" r="36" fill="#F5BE98"/>
  <path d="M174 108c0-30 22-40 40-38 22 2 34 18 32 38-14-22-34-26-48-20-12 4-20 12-24 20z" fill="#2B1E22"/>
  <circle cx="196" cy="118" r="3.4" fill="#142D35"/><circle cx="224" cy="118" r="3.4" fill="#142D35"/>
  <path d="M190 108q6-4 12-1M218 107q6-3 12 1" stroke="#2B1E22" stroke-width="2.4" stroke-linecap="round" fill="none"/>
  <circle cx="187" cy="129" r="6" fill="#F56F63" opacity=".32"/><circle cx="233" cy="129" r="6" fill="#F56F63" opacity=".32"/>
  <path d="M198 130q12 12 24 0" stroke="#C2463B" stroke-width="3.2" stroke-linecap="round" fill="none"/>
  <!-- raised arm + spray bottle -->
  <path d="M172 178q-24-4-36-34" stroke="#2CA9B7" stroke-width="26" stroke-linecap="round" fill="none"/>
  <path d="M136 144q-12-24-18-48" stroke="#F0A57F" stroke-width="15" stroke-linecap="round" fill="none"/>
  <g transform="translate(112 66) rotate(-14)">
    <rect x="-14" y="2" width="28" height="48" rx="10" fill="#F6C945"/>
    <rect x="-7" y="-9" width="14" height="13" rx="3" fill="#168A9A"/>
    <rect x="-26" y="-22" width="40" height="15" rx="6" fill="#F2604F"/>
    <rect x="-36" y="-19" width="12" height="8" rx="3" fill="#142D35"/>
    <path d="M14 -14q9 3 9 16" stroke="#F2604F" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    <path d="M-6 14v26" stroke="#fff" stroke-opacity=".55" stroke-width="4" stroke-linecap="round"/>
    <circle cx="0" cy="30" r="10.5" fill="#F0A57F"/>
  </g>
  <g class="spray">
    <circle cx="62" cy="62" r="4" fill="#2CA9B7"/><circle cx="46" cy="74" r="3" fill="#2CA9B7" opacity=".8"/><circle cx="70" cy="46" r="3" fill="#F56F63"/>
    <circle cx="48" cy="52" r="5" fill="none" stroke="#2CA9B7" stroke-width="2"/><circle cx="34" cy="64" r="3" fill="#F6C945"/><circle cx="58" cy="86" r="2.5" fill="#2CA9B7"/>
    <path d="M78 58 56 50M80 66 52 66M76 74 54 82" stroke="#2CA9B7" stroke-width="3" stroke-linecap="round" opacity=".7"/>
  </g>
  <path class="twinkle" d="M330 120c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" fill="#F6C945"/>
  <path class="twinkle d2" d="M70 200c.8 6 3 8 9 9-6 .8-8 3-9 9-.8-6-3-8-9-9 6-1 8-3 9-9z" fill="#F56F63"/>
</svg>`;

/* --------------------------------------------------------- section header */
export const sectionHead = ({ label, title, text = '', center = false, light = false }) => `
<header class="sec-head ${center ? 'is-center' : ''} ${light ? 'is-light' : ''}" data-reveal>
  ${label ? `<p class="eyebrow">${label}</p>` : ''}
  <h2>${title}</h2>
  ${text ? `<p class="lead">${text}</p>` : ''}
</header>`;

/* ------------------------------------------------------- header / footer */
const NAV = [
  ['index.html', 'Home', 'home'],
  ['about.html', 'About Us', 'about'],
  ['services.html', 'Services', 'services'],
  ['contact.html', 'Contact', 'contact'],
];

export const header = (active) => `
<a class="skip" href="#main">Skip to content</a>
<div class="topbar"><div class="wrap topbar__in">
  <p>Call for a free quote: <a href="tel:${BIZ.tel}">${BIZ.phone}</a></p>
  <p class="topbar__loc">${icon('pin')} North Miami Beach, Florida</p>
</div></div>
<header class="site-header" id="top">
  <div class="wrap site-header__in">
    <a class="logo" href="index.html" aria-label="Clean Supreme Pros — home">
      <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#2CA9B7"/><path d="M20 8c.9 6 3.8 9 10 10-6.2 1-9.1 4-10 10-.9-6-3.8-9-10-10 6.2-1 9.1-4 10-10z" fill="#fff"/><circle cx="29" cy="29" r="3.4" fill="#F56F63"/></svg>
      <span class="logo__t">Clean Supreme<em>Pros</em></span>
    </a>
    <nav class="nav" id="nav" aria-label="Main">
      <ul>${NAV.map(([href, label, key]) => `<li><a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul>
      <a class="btn btn--coral btn--sm nav__cta" href="contact.html#quote"><span>Request a Quote</span></a>
    </nav>
    <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><i></i><i></i><i></i></button>
  </div>
</header>`;

export const footer = () => `
<footer class="site-footer">
  ${wave('#F8F7EE')}
  <div class="site-footer__body">
    ${ambient({ seed: 77, n: 16, zone: 'edges' })}
    <div class="wrap footer-grid">
      <div class="footer-brand" data-reveal>
        <a class="logo" href="index.html" aria-label="Clean Supreme Pros — home">
          <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#2CA9B7"/><path d="M20 8c.9 6 3.8 9 10 10-6.2 1-9.1 4-10 10-.9-6-3.8-9-10-10 6.2-1 9.1-4 10-10z" fill="#fff"/><circle cx="29" cy="29" r="3.4" fill="#F56F63"/></svg>
          <span class="logo__t">Clean Supreme<em>Pros</em></span>
        </a>
        <p>Professional cleaning for homes and offices in North Miami Beach, Florida — careful work, personal attention, and results you can feel.</p>
        <a class="btn btn--coral btn--sm" href="contact.html#quote"><span>Request a Free Quote</span></a>
      </div>
      <nav aria-label="Quick links" data-reveal style="--i:1">
        <h3>Quick Links</h3>
        <ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="services.html">Services</a></li><li><a href="contact.html">Contact</a></li></ul>
      </nav>
      <nav aria-label="Services" data-reveal style="--i:2">
        <h3>Services</h3>
        <ul><li><a href="services.html#residential">Home Cleaning</a></li><li><a href="services.html#office">Office Cleaning</a></li><li><a href="services.html#process">How It Works</a></li></ul>
      </nav>
      <div data-reveal style="--i:3">
        <h3>Get in Touch</h3>
        <ul class="contact-list">
          <li>${icon('pin')}<span>North Miami Beach, FL 33162</span></li>
          <li>${icon('phone')}<a href="tel:${BIZ.tel}">${BIZ.phone}</a></li>
          <li>${icon('star')}<a href="${BIZ.yelp}" target="_blank" rel="noopener noreferrer">Find us on Yelp<span class="sr"> (opens in a new tab)</span></a></li>
        </ul>
      </div>
    </div>
    <div class="wrap footer-base"><p>© <span id="yr">2026</span> Clean Supreme Pros. All rights reserved.</p><p>North Miami Beach, Florida</p></div>
  </div>
</footer>`;

/* ----------------------------------------------------------- shared CTA */
export const ctaBand = ({ title = 'Ready for a Fresh, Beautifully Clean Space?', text = "Tell us what you need cleaned, and let's discuss how Clean Supreme Pros can help." } = {}) => `
<section class="cta" aria-labelledby="cta-title">
  ${ambient({ seed: 5, n: 22 })}
  ${plx(sparkle('twinkle', '#F6C945', 46), { x: '8%', y: '18%', depth: 0.06 })}
  ${plx(bubble('float', 70, '#fff'), { x: '88%', y: '22%', depth: 0.08 })}
  ${plx(foam('float-slow', '#fff'), { x: '80%', y: '70%', depth: 0.05 })}
  <div class="wrap cta__in">
    <div data-reveal>
      <h2 id="cta-title">${title}</h2>
      <p>${text}</p>
    </div>
    <div class="cta__btns" data-reveal style="--i:2">
      ${btn('Get a Quote', 'contact.html#quote', { variant: 'cream', ic: 'arrow' })}
      ${btn('Call Now', `tel:${BIZ.tel}`, { variant: 'ghost', ic: 'phone' })}
    </div>
  </div>
</section>`;

/* -------------------------------------------------------------- layout */
export function layout({ file, title, description, active, body, extraHead = '', ogImage = 'assets/img/hero-cleaner.jpg' }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'HouseCleaning',
    name: BIZ.name,
    telephone: BIZ.tel,
    sameAs: [BIZ.yelp],
    address: { '@type': 'PostalAddress', addressLocality: 'North Miami Beach', addressRegion: 'FL', postalCode: '33162', addressCountry: 'US' },
    areaServed: 'North Miami Beach, FL',
    description: 'Professional home and office cleaning in North Miami Beach, Florida.',
  };
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#2CA9B7">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${BIZ.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
<script>document.documentElement.className='js'</script>
${extraHead}
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body data-page="${file}">
${sprite()}
${header(active)}
<main id="main">
${body}
</main>
${footer()}
<script src="js/config.js"></script>
<script src="js/reviews.js"></script>
<script src="js/main.js"></script>
<script src="js/clean.js"></script>
</body>
</html>
`;
}
