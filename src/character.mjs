// The "A Little About Us" visual: a real photo of a cleaner, cut out from its background,
// standing in front of the brand's turquoise blob.

export const cleanerCutout = () => `
<div class="cutout">
  <svg class="cutout__clip" aria-hidden="true" focusable="false"><clipPath id="cutoutClip" clipPathUnits="objectBoundingBox"><path d="M-0.1 -0.2H1.1V0.74C1.1 0.9 0.82 0.985 0.5 0.985S-0.1 0.9 -0.1 0.74Z"/></clipPath></svg>
  <span class="cutout__floor" aria-hidden="true"></span>
  <svg class="cutout__blob" viewBox="0 0 420 460" aria-hidden="true">
    <defs><linearGradient id="cutBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#46BCCB"/><stop offset="1" stop-color="#1B96A6"/></linearGradient></defs>
    <path class="blob-a" fill="url(#cutBg)" d="M214 22c80-4 150 50 160 128 10 76-34 100-32 176 2 66-58 112-132 112S50 400 38 328C28 258 66 232 58 160 52 84 130 26 214 22z"/>
    <path class="blob-b" fill="#fff" fill-opacity=".16" d="M236 52c58 6 108 46 114 100 6 56-24 72-26 126-2 52-44 82-98 82s-100-34-108-86c-8-54 20-72 22-122 2-56 42-104 96-100z"/>
  </svg>
  <img class="cutout__img" src="assets/img/cleaner-cutout.webp" width="1000" height="919" alt="Confident cleaner in coral overalls holding a cleaning cloth and resting a hand on a blue bucket" loading="lazy" decoding="async">
</div>`;
