// Semi-realistic vector cleaner: proportioned figure, shaded skin/hair/fabric, rubber gloves,
// a clear spray bottle with liquid, and a bucket of suds. Animated spray + suds via CSS classes.

export const cleanerCharacter = () => `
<svg class="character" viewBox="0 0 420 560" role="img" aria-label="Illustration of a smiling cleaner in a teal top, coral apron and yellow rubber gloves, holding a spray bottle and a bucket of soapy water">
  <defs>
    <linearGradient id="chBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#DDF2F5"/><stop offset="1" stop-color="#B4E1E8"/></linearGradient>
    <linearGradient id="chSkin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F8CBA8"/><stop offset="1" stop-color="#E5A47C"/></linearGradient>
    <linearGradient id="chSkinD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9AE86"/><stop offset="1" stop-color="#D68F66"/></linearGradient>
    <linearGradient id="chHair" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4A3430"/><stop offset=".55" stop-color="#2A1C1C"/><stop offset="1" stop-color="#171011"/></linearGradient>
    <linearGradient id="chTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3BBCCB"/><stop offset="1" stop-color="#168A9A"/></linearGradient>
    <linearGradient id="chApron" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBA864"/><stop offset=".6" stop-color="#F57F5A"/><stop offset="1" stop-color="#E9584B"/></linearGradient>
    <linearGradient id="chPants" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#34495A"/><stop offset=".5" stop-color="#22343F"/><stop offset="1" stop-color="#2D4250"/></linearGradient>
    <linearGradient id="chGlove" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE066"/><stop offset="1" stop-color="#F0B91C"/></linearGradient>
    <linearGradient id="chBottle" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#EAF6FA" stop-opacity=".95"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity=".75"/><stop offset="1" stop-color="#CFE6EC" stop-opacity=".95"/></linearGradient>
    <linearGradient id="chLiquid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD6E4"/><stop offset="1" stop-color="#2CA9B7"/></linearGradient>
    <linearGradient id="chBucket" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F9D45C"/><stop offset=".45" stop-color="#FBE08A"/><stop offset="1" stop-color="#E0A818"/></linearGradient>
    <linearGradient id="chShoe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D5E0E4"/></linearGradient>
    <radialGradient id="chBlush"><stop offset="0" stop-color="#F0766A" stop-opacity=".45"/><stop offset="1" stop-color="#F0766A" stop-opacity="0"/></radialGradient>
    <radialGradient id="chFloor"><stop offset="0" stop-color="#2CA9B7" stop-opacity=".32"/><stop offset="1" stop-color="#2CA9B7" stop-opacity="0"/></radialGradient>
  </defs>

  <!-- backdrop + floor shadow -->
  <path class="blob-a" fill="url(#chBg)" d="M215 34c88-4 166 58 176 142 10 82-38 108-36 190 2 72-60 126-142 126S48 434 34 354C22 272 66 244 58 170 52 90 128 38 215 34z"/>
  <ellipse cx="216" cy="514" rx="118" ry="14" fill="url(#chFloor)"/>

  <!-- back hair -->
  <path d="M184 76c-6-34 12-50 33-50s40 14 36 52c-2 26 6 52 16 78l-12 8c-6-12-14-12-20-4l-34 0c-6-8-14-8-20 4l-12-8c10-28 18-54 13-80z" fill="url(#chHair)"/>

  <!-- legs -->
  <path d="M174 250h84l4 48c-2 50-12 122-14 190h-26l-6-176-8 0-6 176h-28c-2-68-12-140-14-190z" fill="url(#chPants)"/>
  <path d="M192 330c4 30 2 70-2 110M240 330c-4 30-2 70 2 110" stroke="#fff" stroke-opacity=".07" stroke-width="6" fill="none" stroke-linecap="round"/>
  <!-- sneakers -->
  <path d="M174 490c2-8 12-10 22-8l18 2v20h-40c-4-2-3-10 0-14z" fill="url(#chShoe)"/>
  <path d="M170 502h46v6c-14 4-34 4-46 0z" fill="#168A9A"/>
  <path d="M190 484l6 6M198 485l5 6M206 486l4 5" stroke="#9CB0B8" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M256 490c-2-8-12-10-22-8l-18 2v20h40c4-2 3-10 0-14z" fill="url(#chShoe)"/>
  <path d="M260 502h-46v6c14 4 34 4 46 0z" fill="#168A9A"/>
  <path d="M240 484l-6 6M232 485l-5 6M224 486l-4 5" stroke="#9CB0B8" stroke-width="1.6" stroke-linecap="round"/>

  <!-- torso (teal top) -->
  <path d="M172 140c18-14 68-14 86 0l-4 52c-2 22-4 42-2 62h-74c2-20 0-40-2-62z" fill="url(#chTop)"/>
  <!-- neck + chest skin -->
  <path d="M202 106h26l3 22c-6 8-14 24-16 26-2-2-10-18-16-26z" fill="url(#chSkin)"/>
  <path d="M202 106h26l1 12c-8 6-20 6-28 0z" fill="url(#chSkinD)" opacity=".7"/>
  <path d="M199 126l16 28 16-28" fill="none" stroke="#0F6F7D" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

  <!-- apron -->
  <path d="M192 168h46l6 40 14 44 14 128c-26 14-90 14-116 0l14-128 14-44z" fill="url(#chApron)"/>
  <path d="M192 168l6-42M238 168l-6-42" stroke="#EE7650" stroke-width="7" stroke-linecap="round"/>
  <path d="M172 252h86" stroke="#D9503F" stroke-width="5" stroke-linecap="round" opacity=".7"/>
  <rect x="196" y="282" width="38" height="30" rx="6" fill="#fff" fill-opacity=".22" stroke="#fff" stroke-opacity=".45" stroke-width="1.6"/>
  <path d="M190 318c6 30 6 54 2 80M240 318c-6 30-6 54-2 80" stroke="#000" stroke-opacity=".06" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M176 380c24 10 54 10 78 0" stroke="#fff" stroke-opacity=".28" stroke-width="2.4" stroke-linecap="round" fill="none"/>

  <!-- viewer-right arm: relaxed, holding the bucket -->
  <path d="M253 144c14 4 24 16 26 32l-2 18-26 2z" fill="url(#chTop)"/>
  <path d="M269 192c2 22 4 46 4 72l-17 1c0-24-2-48-3-70z" fill="url(#chSkin)"/>
  <path d="M272 194c3 22 5 44 5 70l-5 0c0-24-2-48-3-70z" fill="#C98660" opacity=".3"/>
  <!-- bucket -->
  <path d="M236 312h74l-8 64c-1 8-10 12-29 12s-28-4-29-12z" fill="url(#chBucket)"/>
  <path d="M236 312h74" stroke="#D19A12" stroke-width="7" stroke-linecap="round"/>
  <path d="M243 324l6 54" stroke="#fff" stroke-opacity=".55" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="273" cy="313" rx="37" ry="7" fill="#9ED9E4"/>
  <ellipse cx="273" cy="311" rx="37" ry="6" fill="#CFF0F5"/>
  <path d="M241 310c4-36 28-36 32-36s28 0 32 36" fill="none" stroke="#5A6B73" stroke-width="3.4" stroke-linecap="round"/>
  <g class="suds"><circle cx="256" cy="306" r="8" fill="#fff" fill-opacity=".92" stroke="#2CA9B7" stroke-width="1.5"/><circle cx="276" cy="302" r="11" fill="#fff" fill-opacity=".92" stroke="#2CA9B7" stroke-width="1.5"/><circle cx="293" cy="308" r="6.5" fill="#fff" fill-opacity=".92" stroke="#2CA9B7" stroke-width="1.5"/></g>
  <!-- glove gripping the handle -->
  <path d="M258 258h30l-1 14h-28z" fill="#F0B91C"/>
  <path d="M258 262h30" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>
  <path d="M258 270c-2-4 0-8 6-8h18c8 0 10 6 8 12-2 8-8 14-16 14s-14-4-16-18z" fill="url(#chGlove)"/>
  <path d="M263 280h20M264 285h19" stroke="#C99112" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M262 266c0 8 2 14 5 18" stroke="#fff" stroke-opacity=".55" stroke-width="2.6" stroke-linecap="round" fill="none"/>

  <!-- viewer-left arm: raised, spraying -->
  <path d="M178 148c-18 6-30 20-32 38l-2 12 28 2z" fill="url(#chTop)"/>
  <path d="M152 206 138 182" stroke="url(#chSkinD)" stroke-width="20" stroke-linecap="round"/>
  <path d="M150 204 138 184" stroke="#F8CBA8" stroke-width="7" stroke-linecap="round" opacity=".55"/>
  <circle cx="153" cy="206" r="10" fill="#E5A47C"/>
  <!-- spray bottle (held by the head) -->
  <g transform="translate(110 158) scale(.52)">
    <path d="M-2 4h38c8 0 14 6 14 14v62c0 8-6 14-14 14H-2c-8 0-14-6-14-14V18c0-8 6-14 14-14z" fill="url(#chBottle)" stroke="#9CC9D3" stroke-width="2.4"/>
    <path d="M-14 40h62v52c0 6-6 12-14 12H0c-8 0-14-6-14-12z" fill="url(#chLiquid)" opacity=".92"/>
    <path d="M-14 40c14-5 28 5 42 0s20-4 20 0" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2.6"/>
    <rect x="-8" y="52" width="50" height="30" rx="5" fill="#fff"/>
    <path d="M-2 60h38M-2 68h26" stroke="#2CA9B7" stroke-width="3.6" stroke-linecap="round"/>
    <path d="M-6 14v62" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>
    <rect x="2" y="-4" width="26" height="12" rx="3" fill="#168A9A"/>
    <path d="M-30 -22c0-4 4-8 8-8h42c10 0 16 6 16 14v10c0 2-2 4-4 4H-4l-6 6c-2 2-6 2-8 0l-8-8c-2-2-4-6-4-10z" fill="#F2604F"/>
    <path d="M-26 -26h44" stroke="#fff" stroke-opacity=".45" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M-38 -22h10v9h-10z" fill="#142D35"/>
    <path d="M30 -10c12 2 16 10 16 20l-4 8" fill="none" stroke="#D9503F" stroke-width="6" stroke-linecap="round"/>
  </g>
  <!-- gloved fist -->
  <g transform="translate(16 6)">
  <path d="M104 172h30l-2 14h-26z" fill="#F0B91C"/>
  <path d="M104 176h30" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>
  <path d="M100 154c0-8 8-12 18-12 10 0 18 4 18 12v8c0 8-8 12-18 12-10 0-18-4-18-12z" fill="url(#chGlove)"/>
  <path d="M108 148c-4 0-8 3-8 8M104 158h-3" stroke="#C99112" stroke-width="1.6" stroke-linecap="round" fill="none"/>
  <path d="M112 164h24M112 169h22" stroke="#C99112" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M106 150c4-4 12-5 18-3" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round" fill="none"/>
  </g>
  <!-- spray mist -->
  <g class="spray">
    <circle cx="70" cy="140" r="3.4" fill="#2CA9B7"/><circle cx="58" cy="150" r="2.6" fill="#2CA9B7" opacity=".8"/><circle cx="76" cy="128" r="2.4" fill="#7FD6E4"/>
    <circle cx="60" cy="132" r="4.4" fill="none" stroke="#2CA9B7" stroke-width="1.6"/><circle cx="48" cy="142" r="2.6" fill="#F6C945"/><circle cx="64" cy="158" r="2.2" fill="#2CA9B7"/>
    <path d="M84 144 66 138M85 150 62 150M82 156 66 162" stroke="#2CA9B7" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
  </g>

  <!-- head -->
  <ellipse cx="187" cy="82" rx="5" ry="9" fill="#E5A47C"/><ellipse cx="243" cy="82" rx="5" ry="9" fill="#E5A47C"/>
  <path d="M187 74c0-24 14-32 28-32s28 8 28 32c0 24-10 44-28 46-18-2-28-22-28-46z" fill="url(#chSkin)"/>
  <path d="M200 112c10 8 20 8 30 0" fill="none" stroke="#D68F66" stroke-width="3" opacity=".45" stroke-linecap="round"/>
  <ellipse cx="197" cy="96" rx="11" ry="8" fill="url(#chBlush)"/><ellipse cx="233" cy="96" rx="11" ry="8" fill="url(#chBlush)"/>
  <!-- eyes -->
  <path d="M196 80c4-4 11-4 15 0-4 4-11 4-15 0z" fill="#fff"/><path d="M219 80c4-4 11-4 15 0-4 4-11 4-15 0z" fill="#fff"/>
  <circle cx="204" cy="80" r="3.8" fill="#4B2E22"/><circle cx="227" cy="80" r="3.8" fill="#4B2E22"/>
  <circle cx="204" cy="80" r="1.8" fill="#120A08"/><circle cx="227" cy="80" r="1.8" fill="#120A08"/>
  <circle cx="205.4" cy="78.6" r="1" fill="#fff"/><circle cx="228.4" cy="78.6" r="1" fill="#fff"/>
  <path d="M194 79c4-5 12-5 17 0M218 79c4-5 12-5 17 0" fill="none" stroke="#1E1416" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M195 70c5-4 12-4 17-1M218 69c5-3 12-3 17 1" fill="none" stroke="#2A1C1C" stroke-width="2" stroke-linecap="round"/>
  <!-- nose + mouth -->
  <path d="M215 82c-1 6-3 10-5 12 3 2 7 2 10 0-2-2-4-6-5-12z" fill="#D68F66" opacity=".3"/>
  <path d="M204 104c7 6 15 6 22 0-3 6-7 8-11 8s-8-2-11-8z" fill="#fff"/>
  <path d="M203 103c4-2 8-2 12-1 4-1 8-1 12 1-8 5-16 5-24 0z" fill="#D9574D"/>
  <path d="M204 104c7 6 15 6 22 0" fill="none" stroke="#B8443B" stroke-width="1.6" stroke-linecap="round"/>
  <!-- fringe + highlights -->
  <path d="M184 80c-4-34 14-50 34-48 22 2 32 20 28 48-4-20-14-30-30-32-12 2-24 12-32 32z" fill="url(#chHair)"/>
  <path d="M200 40c10-6 22-6 30 2M190 56c4-8 10-14 18-16" fill="none" stroke="#6B4A42" stroke-width="2" stroke-linecap="round" opacity=".7"/>

  <!-- sparkles -->
  <path class="twinkle" d="M348 150c1.4 10 5 14 15 16-10 1.6-13.6 5.4-15 15-1.4-9.6-5-13.4-15-15 10-2 13.6-6 15-16z" fill="#F6C945"/>
  <path class="twinkle d2" d="M70 250c1 7 3.6 9.6 10 11-6.4 1-9 3.6-10 10-1-6.4-3.6-9-10-10 6.4-1.4 9-4 10-11z" fill="#F56F63"/>
</svg>`;
