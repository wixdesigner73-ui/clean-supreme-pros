import { BIZ, icon, btn, confetti, swirl, sparkle, bubble, plx, wave, heroArt, cleanerCharacter, sectionHead, ctaBand } from './components.mjs';

const img = (name, alt, w, h, extra = '') =>
  `<img src="assets/img/${name}.jpg" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async" ${extra}>`;

/* shared: "The Clean Supreme Pros Difference" feature blocks */
const FEATURES = [
  ['search', 'Detail-Oriented Cleaning', 'We pay attention to the little things that help make a space feel truly clean.'],
  ['user', 'Personalized Attention', 'We listen to your priorities and work to address the cleaning needs that matter to you.'],
  ['shield', 'Commitment to Quality', 'We approach every cleaning with care and a focus on delivering satisfying results.'],
  ['smile', 'Service You Can Appreciate', 'Our goal is to make professional cleaning a convenient and positive experience.'],
];

const featureGrid = () => `
<div class="features">
  ${FEATURES.map(([ic, t, p], i) => `
  <article class="feature" data-reveal style="--i:${i}">
    <span class="feature__ic">${icon(ic, 'ic-anim')}</span>
    <h3>${t}</h3>
    <p>${p}</p>
  </article>`).join('')}
</div>`;

/* ================================================================ HOME */
export const home = () => ({
  file: 'index.html',
  active: 'home',
  title: 'Clean Supreme Pros | Home & Office Cleaning in North Miami Beach, FL',
  description: 'Clean Supreme Pros provides professional home and office cleaning in North Miami Beach, Florida. Careful work, personal attention, and fresh results. Request a free quote.',
  body: `
<!-- HERO -->
<section class="hero" aria-labelledby="hero-title">
  ${confetti({ seed: 3, n: 34, zone: 'edges' })}
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <p class="eyebrow" data-reveal>Professional Cleaning Services</p>
      <h1 id="hero-title" data-reveal style="--i:1">A Cleaner Space.<br>A Better Way <span class="hl">to Live.</span></h1>
      <p class="lead" data-reveal style="--i:2">Enjoy a fresh, welcoming home or workspace with professional cleaning services from Clean Supreme Pros. We bring care, attention to detail, and a commitment to quality to every visit.</p>
      <div class="btn-row" data-reveal style="--i:3">
        ${btn('Request a Free Quote', 'contact.html#quote', { variant: 'coral', ic: 'arrow' })}
        ${btn('Explore Our Services', 'services.html', { variant: 'teal', ic: 'sparkle' })}
      </div>
      <ul class="hero__meta" data-reveal style="--i:4">
        <li>${icon('home')} Homes</li><li>${icon('building')} Offices</li><li>${icon('pin')} North Miami Beach</li>
      </ul>
    </div>
    ${heroArt()}
  </div>
  ${wave('#fff')}
</section>

<!-- GOAL & PURPOSE -->
<section class="section goal" aria-labelledby="goal-title">
  <div class="wrap goal__grid">
    <div class="goal__cards">
      ${[
        ['card-detail', 'Gloved hand wiping a clean white surface after spraying', 'search', 'Attention to Detail'],
        ['card-quality', 'Bright, spotless modern bathroom with glass shower', 'sparkle', 'Quality Cleaning'],
        ['card-dependable', 'Cordless vacuum cleaning a carpet', 'shield', 'Dependable Service'],
      ].map(([f, alt, ic, label], i) => `
      <figure class="tall-card" data-reveal style="--i:${i}">
        ${img(f, alt, 800, 1100)}
        <figcaption><span class="tall-card__ic">${icon(ic, 'ic-anim')}</span>${label}</figcaption>
      </figure>`).join('')}
    </div>
    <div class="goal__copy">
      <p class="eyebrow" data-reveal>Our Goal &amp; Purpose</p>
      <h2 id="goal-title" data-reveal style="--i:1">Cleaning with Care. <span class="hl">Results You Can Feel.</span></h2>
      <p class="lead" data-reveal style="--i:2">At Clean Supreme Pros, we believe a clean environment makes everyday life more comfortable. Our goal is to provide attentive, dependable cleaning services that help you enjoy your home or workspace without the added stress.</p>
      <p data-reveal style="--i:3"><a class="link-arrow" href="about.html">Our approach ${icon('arrow')}</a></p>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section class="section about-sec" aria-labelledby="about-title">
  ${confetti({ seed: 11, n: 16, zone: 'edges' })}
  <div class="wrap about-sec__grid">
    <div class="about-sec__copy">
      <p class="eyebrow" data-reveal>A Little About Us</p>
      <h2 id="about-title" data-reveal style="--i:1">We Make Cleaning Simple, <span class="hl">So You Can Enjoy More.</span></h2>
      <p data-reveal style="--i:2">Clean Supreme Pros provides professional cleaning services for homes and offices in North Miami Beach, Florida. We focus on careful work, personal attention, and results that make a noticeable difference.</p>
      <p data-reveal style="--i:3">Whether you need help maintaining your home or keeping your workspace clean and welcoming, we aim to make the experience straightforward and dependable.</p>
      <div data-reveal style="--i:4">${btn('More About Us', 'about.html', { variant: 'teal', ic: 'user' })}</div>
    </div>
    <div class="about-sec__art" data-reveal="zoom" data-parallax-scope>
      ${cleanerCharacter()}
      ${plx(bubble('float', 46), { x: '4%', y: '58%', depth: 0.08 })}
      ${plx(bubble('float-slow', 28, '#F56F63'), { x: '88%', y: '30%', depth: 0.06 })}
      ${plx(swirl('spin-slow'), { x: '86%', y: '76%', depth: 0.05 })}
    </div>
  </div>
</section>

<!-- BANNER -->
<section class="banner" aria-labelledby="banner-title">
  ${confetti({ seed: 21, n: 30 })}
  ${plx(swirl('spin-slow'), { x: '9%', y: '24%', depth: 0.06 })}
  ${plx(swirl('spin-slow rev', '#F56F63'), { x: '86%', y: '54%', depth: -0.06 })}
  ${plx(sparkle('twinkle', '#F6C945', 34), { x: '20%', y: '70%', depth: 0.08 })}
  <svg class="banner__lines" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true"><path class="draw" d="M-20 268C200 226 380 300 600 262S1000 232 1220 276" fill="none" stroke="#2CA9B7" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"/></svg>
  <div class="wrap banner__in">
    <h2 id="banner-title" data-reveal>A Fresh Space Starts Here.</h2>
    <p data-reveal style="--i:1">Let Clean Supreme Pros take care of the cleaning while you focus on what matters most.</p>
    <div data-reveal style="--i:2">${btn('Request Your Quote', 'contact.html#quote', { variant: 'coral', ic: 'arrow' })}</div>
  </div>
</section>

<!-- SERVICES -->
<section class="section services-sec" aria-labelledby="svc-title">
  <div class="wrap">
    ${sectionHead({ label: 'What We Offer', title: 'Professional Cleaning, <span class="hl">Thoughtfully Done.</span>', center: true }).replace('<h2>', '<h2 id="svc-title">')}
    <div class="svc-cards">
      ${[
        ['service-home', 'Bright living room with hardwood floors and a fireplace', 'home', 'Home Cleaning', 'Keep your living spaces fresh, comfortable, and welcoming with attentive residential cleaning services tailored to your needs.', 'services.html#residential'],
        ['service-office', 'Open-plan office with large windows and a long meeting table', 'building', 'Office Cleaning', 'Maintain a clean, organized, and professional workspace with cleaning services designed for your business environment.', 'services.html#office'],
      ].map(([f, alt, ic, t, p, href], i) => `
      <article class="svc-card" data-reveal style="--i:${i}">
        <div class="svc-card__img">${img(f, alt, 1200, 800)}<span class="svc-card__badge">${icon(ic, 'ic-anim')}</span></div>
        <div class="svc-card__body">
          <h3>${t}</h3>
          <p>${p}</p>
          ${btn('Explore Service', href, { variant: 'outline', ic: 'arrow' })}
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="section why" aria-labelledby="why-title">
  ${confetti({ seed: 31, n: 18, zone: 'edges' })}
  <div class="wrap">
    ${sectionHead({ label: 'Why Choose Us', title: 'The Clean Supreme Pros <span class="hl">Difference</span>', center: true }).replace('<h2>', '<h2 id="why-title">')}
    ${featureGrid()}
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="section reviews" id="reviews" aria-labelledby="rev-title">
  <div class="wrap">
    ${sectionHead({ label: 'Testimonials', title: 'What Our Clients Are Saying', center: true }).replace('<h2>', '<h2 id="rev-title">')}
    <div class="rev-slider" data-reveal data-reviews hidden>
      <div class="rev-slider__track" aria-live="polite"></div>
      <div class="rev-slider__ctrl">
        <button type="button" class="rev-btn" data-prev aria-label="Previous review">${icon('arrow')}</button>
        <div class="rev-dots" role="tablist" aria-label="Choose review"></div>
        <button type="button" class="rev-btn" data-next aria-label="Next review">${icon('arrow')}</button>
      </div>
    </div>
    <div class="yelp-card" data-reveal data-yelp-fallback>
      <span class="yelp-card__ic">${icon('quote')}</span>
      <div>
        <h3>Read what clients say on Yelp</h3>
        <p>See reviews and photos from people who have worked with Clean Supreme Pros in North Miami Beach.</p>
      </div>
      ${btn('Read Our Yelp Reviews', BIZ.yelp, { variant: 'teal', ic: 'external', attrs: 'target="_blank" rel="noopener noreferrer"' })}
    </div>
  </div>
</section>

${ctaBand()}
`,
});

/* ================================================================ ABOUT */
export const about = () => ({
  file: 'about.html',
  active: 'about',
  title: 'About Clean Supreme Pros | Cleaning Service in North Miami Beach, FL',
  description: 'Meet Clean Supreme Pros — a professional home and office cleaning service in North Miami Beach, Florida, built on attention to detail, quality work, and a positive client experience.',
  body: `
<section class="hero hero--page" aria-labelledby="page-title">
  ${confetti({ seed: 8, n: 28, zone: 'edges' })}
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <p class="eyebrow" data-reveal>About Us</p>
      <h1 id="page-title" data-reveal style="--i:1">A Cleaner Space Begins with <span class="hl">Genuine Care.</span></h1>
      <p class="lead" data-reveal style="--i:2">Clean Supreme Pros is a professional cleaning service based in North Miami Beach, Florida, serving residential and office cleaning needs.</p>
      <p data-reveal style="--i:3">We understand how much a clean, comfortable environment matters. That's why our approach emphasizes attention to detail, quality work, and a positive experience for every client.</p>
      <div class="btn-row" data-reveal style="--i:4">${btn('Request a Free Quote', 'contact.html#quote', { variant: 'coral', ic: 'arrow' })}${btn('Our Services', 'services.html', { variant: 'teal', ic: 'sparkle' })}</div>
    </div>
    <div class="duo" data-parallax-scope>
      <svg class="duo__blob" viewBox="0 0 520 520" aria-hidden="true"><path class="blob-a" fill="#2CA9B7" d="M270 16c96 4 198 70 214 166 14 84-38 120-40 198-2 80-90 134-182 130C158 506 66 460 38 372 12 290 66 240 64 172 62 90 168 12 270 16z"/></svg>
      <div class="duo__a">${img('about-living', 'Sunlit, tidy living room with a leather sofa and plants', 1200, 800, 'loading="eager"')}</div>
      <div class="duo__b">${img('mint-spray', 'Gloved hand holding a yellow spray bottle against a mint background', 1200, 800, 'loading="eager"')}</div>
      <div class="chip chip--float float duo__chip">${icon('heart')}<b>Genuine care</b><small>in every visit</small></div>
      ${plx(sparkle('twinkle', '#F6C945', 38), { x: '90%', y: '8%', depth: 0.08 })}
      ${plx(bubble('float', 44), { x: '-3%', y: '70%', depth: 0.06 })}
    </div>
  </div>
  ${wave('#fff')}
</section>

<!-- OUR STORY -->
<section class="section split" aria-labelledby="story-title">
  <div class="wrap split__grid">
    <div class="split__media" data-reveal="left">
      <span class="shape shape--teal" aria-hidden="true"></span>
      <div class="frame">${img('sunny-living', 'Warm, sunlit living room with plants and framed art', 1200, 800)}</div>
    </div>
    <div class="split__copy">
      <p class="eyebrow" data-reveal>Our Story</p>
      <h2 id="story-title" data-reveal style="--i:1">A Cleaning Service Built Around <span class="hl">Your Comfort.</span></h2>
      <p data-reveal style="--i:2">Clean Supreme Pros serves homes and offices across North Miami Beach, Florida. We believe the spaces where you live and work should feel fresh, comfortable, and welcoming — and that getting there shouldn't be complicated.</p>
      <p data-reveal style="--i:3">That belief shapes how we work: careful attention to the details that matter, honest communication, and a genuine effort to make each visit a positive one.</p>
    </div>
  </div>
</section>

<!-- OUR APPROACH -->
<section class="section approach" aria-labelledby="approach-title">
  ${confetti({ seed: 14, n: 18, zone: 'edges' })}
  <div class="wrap">
    ${sectionHead({ label: 'Our Approach', title: 'Simple, Careful, <span class="hl">Personal.</span>', center: true }).replace('<h2>', '<h2 id="approach-title">')}
    <div class="steps steps--3">
      ${[
        ['sparkle', 'Careful Cleaning', 'We take our time with the details so surfaces, corners, and everyday touchpoints get the attention they deserve.'],
        ['chat', 'Clear Communication', 'We keep things straightforward — you tell us what you need, and we make sure we understand it.'],
        ['user', 'Attention to Individual Needs', 'No two spaces are alike. We tailor our work to your priorities rather than a one-size-fits-all routine.'],
      ].map(([ic, t, p], i) => `
      <article class="step-card" data-reveal style="--i:${i}">
        <span class="step-card__n">0${i + 1}</span>
        <span class="step-card__ic">${icon(ic, 'ic-anim')}</span>
        <h3>${t}</h3><p>${p}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<!-- WHAT MATTERS -->
<section class="section split split--rev" aria-labelledby="matters-title">
  <div class="wrap split__grid">
    <div class="split__copy">
      <p class="eyebrow" data-reveal>What Matters to Us</p>
      <h2 id="matters-title" data-reveal style="--i:1">Quality, Consistency, and <span class="hl">Your Satisfaction.</span></h2>
      <ul class="check-list">
        ${[
          ['Quality', 'Every space gets careful, thorough work.'],
          ['Consistency', 'A dependable standard you can count on from visit to visit.'],
          ['Customer Satisfaction', 'Your comfort and confidence in the result come first.'],
        ].map(([t, p], i) => `<li data-reveal style="--i:${i + 2}"><span class="check">${icon('check')}</span><div><strong>${t}</strong><span>${p}</span></div></li>`).join('')}
      </ul>
    </div>
    <div class="split__media" data-reveal="right">
      <span class="shape shape--coral" aria-hidden="true"></span>
      <div class="frame frame--alt">${img('about-office', 'Clean, modern open office space with a long corridor', 1200, 800)}</div>
      ${plx(sparkle('twinkle', '#F6C945', 36), { x: '90%', y: '6%', depth: 0.07 })}
    </div>
  </div>
</section>

<!-- WHY CLIENTS CHOOSE US -->
<section class="section why" aria-labelledby="why-title">
  ${confetti({ seed: 32, n: 18, zone: 'edges' })}
  <div class="wrap">
    ${sectionHead({ label: 'Why Clients Choose Us', title: 'The Clean Supreme Pros <span class="hl">Difference</span>', center: true }).replace('<h2>', '<h2 id="why-title">')}
    ${featureGrid()}
  </div>
</section>

${ctaBand({ title: 'Ready for a Fresh, Beautifully Clean Space?', text: "Request a quote and tell us what you need cleaned. We'd love to help." })}
`,
});

/* ============================================================== SERVICES */
const checks = (items) => `<ul class="ticks">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>`;

export const services = () => ({
  file: 'services.html',
  active: 'services',
  title: 'Cleaning Services | Residential & Office Cleaning | Clean Supreme Pros',
  description: 'Residential and office cleaning in North Miami Beach, FL from Clean Supreme Pros. Attentive, detail-focused service for homes and workplaces. Request a quote.',
  body: `
<section class="hero hero--page" aria-labelledby="page-title">
  ${confetti({ seed: 18, n: 28, zone: 'edges' })}
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <p class="eyebrow" data-reveal>Our Services</p>
      <h1 id="page-title" data-reveal style="--i:1">Cleaning Services Designed <span class="hl">Around Your Space.</span></h1>
      <p class="lead" data-reveal style="--i:2">From the comfort of your home to the everyday needs of your office, Clean Supreme Pros provides attentive cleaning services to help maintain spaces that look and feel their best.</p>
      <div class="btn-row" data-reveal style="--i:3">${btn('Request a Free Quote', 'contact.html#quote', { variant: 'coral', ic: 'arrow' })}${btn('Call ' + BIZ.phone, `tel:${BIZ.tel}`, { variant: 'teal', ic: 'phone' })}</div>
    </div>
    <div class="duo duo--svc" data-parallax-scope>
      <svg class="duo__blob" viewBox="0 0 520 520" aria-hidden="true"><path class="blob-a" fill="#2CA9B7" d="M250 14c100-6 210 58 226 160 14 90-40 122-36 200 4 84-84 136-184 132C152 502 60 458 36 366 14 282 70 236 66 170 62 88 152 20 250 14z"/></svg>
      <div class="duo__a">${img('apartment', 'Bright, tidy apartment living area with a sofa and kitchen', 1200, 800, 'loading="eager"')}</div>
      <div class="duo__b">${img('office-team', 'Team working together around a table in a bright office', 1200, 800, 'loading="eager"')}</div>
      <div class="chip chip--float float duo__chip">${icon('home')}<b>Home</b><small>&amp; office</small></div>
      ${plx(sparkle('twinkle', '#F6C945', 38), { x: '90%', y: '8%', depth: 0.08 })}
      ${plx(bubble('float', 44), { x: '-3%', y: '72%', depth: 0.06 })}
    </div>
  </div>
  ${wave('#fff')}
</section>

<!-- RESIDENTIAL -->
<section class="section svc-block" id="residential" aria-labelledby="res-title">
  <div class="wrap split__grid">
    <div class="split__media" data-reveal="left" data-parallax-scope>
      <span class="shape shape--teal" aria-hidden="true"></span>
      <div class="frame">${img('service-home', 'Bright living room with hardwood floors, a fireplace, and a sectional sofa', 1200, 800)}</div>
      <span class="svc-icon">${icon('home', 'ic-anim')}</span>
      ${plx(bubble('float', 48), { x: '90%', y: '60%', depth: 0.07 })}
    </div>
    <div class="split__copy">
      <p class="eyebrow" data-reveal>Service 01</p>
      <h2 id="res-title" data-reveal style="--i:1">Residential <span class="hl">Cleaning</span></h2>
      <p class="lead" data-reveal style="--i:2">A clean home makes everyday living more enjoyable. Our residential cleaning services help you maintain a fresh, tidy, and comfortable living environment.</p>
      <div data-reveal style="--i:3">${checks(['Attention to the details that make a home feel fresh', 'Tailored to the priorities you share with us', 'Clear communication from request to finish'])}</div>
      <div data-reveal style="--i:4">${btn('Request a Quote', 'contact.html?service=home#quote', { variant: 'coral', ic: 'arrow' })}</div>
    </div>
  </div>
</section>

<!-- OFFICE -->
<section class="section svc-block svc-block--alt" id="office" aria-labelledby="off-title">
  ${confetti({ seed: 41, n: 18, zone: 'edges' })}
  <div class="wrap split__grid split__grid--rev">
    <div class="split__copy">
      <p class="eyebrow" data-reveal>Service 02</p>
      <h2 id="off-title" data-reveal style="--i:1">Office <span class="hl">Cleaning</span></h2>
      <p class="lead" data-reveal style="--i:2">A clean workplace helps create a welcoming environment for employees and visitors. We provide professional office cleaning with attention to the details that matter.</p>
      <div data-reveal style="--i:3">${checks(['A tidy, organized, professional-looking workspace', 'Designed around your business environment', 'Dependable service you can plan around'])}</div>
      <div data-reveal style="--i:4">${btn('Request a Quote', 'contact.html?service=office#quote', { variant: 'coral', ic: 'arrow' })}</div>
    </div>
    <div class="split__media" data-reveal="right" data-parallax-scope>
      <span class="shape shape--coral" aria-hidden="true"></span>
      <div class="frame frame--alt">${img('service-office', 'Modern open office with floor-to-ceiling windows and a conference table', 1200, 800)}</div>
      <span class="svc-icon svc-icon--coral">${icon('building', 'ic-anim')}</span>
      ${plx(sparkle('twinkle', '#F6C945', 36), { x: '2%', y: '6%', depth: 0.07 })}
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="section process" id="process" aria-labelledby="proc-title">
  <div class="wrap">
    ${sectionHead({ label: 'How It Works', title: 'An Easy Way to <span class="hl">Get Started</span>', center: true }).replace('<h2>', '<h2 id="proc-title">')}
    <ol class="steps steps--3 steps--flow">
      ${[
        ['clipboard', 'Tell Us What You Need', 'Share a few details about your home or office and what you would like cleaned.'],
        ['chat', 'Discuss Your Cleaning Requirements', "We'll talk through your priorities and make sure we understand what matters most to you."],
        ['sparkle', 'Enjoy a Cleaner Space', 'Relax and come back to a space that looks and feels fresh and welcoming.'],
      ].map(([ic, t, p], i) => `
      <li class="step-card" data-reveal style="--i:${i}">
        <span class="step-card__n">${i + 1}</span>
        <span class="step-card__ic">${icon(ic, 'ic-anim')}</span>
        <h3>${t}</h3><p>${p}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>

${ctaBand({ title: 'Ready for a Fresh, Beautifully Clean Space?', text: "Tell us what you need cleaned, and let's discuss how Clean Supreme Pros can help." })}
`,
});

/* ============================================================== CONTACT */
const field = (id, label, control, { required = false, hint = '' } = {}) => `
<div class="field" data-field>
  <label for="${id}">${label}${required ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>
  ${control}
  <p class="field__err" id="${id}-err" role="alert"></p>${hint ? `<p class="field__hint">${hint}</p>` : ''}
</div>`;

export const contact = () => ({
  file: 'contact.html',
  active: 'contact',
  title: 'Contact & Free Quote | Clean Supreme Pros | North Miami Beach, FL',
  description: "Request a cleaning quote from Clean Supreme Pros in North Miami Beach, FL. Call (786) 327-6919 or send a message about your home or office cleaning needs.",
  body: `
<section class="hero hero--page hero--compact" aria-labelledby="page-title">
  ${confetti({ seed: 28, n: 26, zone: 'edges' })}
  <div class="wrap hero__grid hero__grid--center">
    <div class="hero__copy">
      <p class="eyebrow" data-reveal>Contact</p>
      <h1 id="page-title" data-reveal style="--i:1">Let's Make Your Space <span class="hl">Shine.</span></h1>
      <p class="lead" data-reveal style="--i:2">Have a question or need professional cleaning? Reach out to Clean Supreme Pros and tell us about your cleaning needs.</p>
    </div>
    <div class="contact-hero-art" aria-hidden="true" data-parallax-scope>
      <svg viewBox="0 0 320 250"><path class="blob-a" fill="#2CA9B7" d="M160 10c70-4 142 40 148 106 6 62-48 78-62 108-18 20-92 20-134-2C70 202 14 176 12 116 10 56 90 14 160 10z"/><path d="M78 70h164a22 22 0 0 1 22 22v66a22 22 0 0 1-22 22h-92l-40 34v-34h-32a22 22 0 0 1-22-22V92a22 22 0 0 1 22-22z" fill="#fff"/><path d="M160 96c1.8 13 7.6 18.8 21 21-13.4 2.2-19.2 8-21 21-1.8-13-7.6-18.8-21-21 13.4-2.2 19.2-8 21-21z" fill="#F6C945"/><circle cx="108" cy="134" r="6" fill="#2CA9B7"/><circle cx="212" cy="104" r="6" fill="#F56F63"/></svg>
      ${plx(sparkle('twinkle', '#F6C945', 40), { x: '4%', y: '6%', depth: 0.08 })}
      ${plx(bubble('float', 50), { x: '86%', y: '10%', depth: 0.07 })}
      ${plx(sparkle('twinkle d2', '#F56F63', 26), { x: '82%', y: '74%', depth: 0.05 })}
    </div>
  </div>
  ${wave('#F8F7EE')}
</section>

<section class="section contact" id="quote" aria-labelledby="form-title">
  ${confetti({ seed: 52, n: 20, zone: 'edges' })}
  <div class="wrap contact__grid">
    <aside class="contact__info" data-reveal="left">
      <div class="info-card">
        <h2>Clean Supreme Pros</h2>
        <ul class="info-list">
          <li><span class="info-ic">${icon('pin')}</span><div><small>Location</small><strong>North Miami Beach, FL 33162</strong></div></li>
          <li><span class="info-ic">${icon('phone')}</span><div><small>Phone</small><a href="tel:${BIZ.tel}"><strong>${BIZ.phone}</strong></a></div></li>
          <li><span class="info-ic">${icon('star')}</span><div><small>Reviews</small><a href="${BIZ.yelp}" target="_blank" rel="noopener noreferrer"><strong>Find us on Yelp</strong><span class="sr"> (opens in a new tab)</span></a></div></li>
        </ul>
        ${btn('Click to Call', `tel:${BIZ.tel}`, { variant: 'cream', ic: 'phone' })}
        <svg class="info-card__deco" viewBox="0 0 200 200" aria-hidden="true"><circle cx="150" cy="150" r="90" fill="#fff" opacity=".07"/><circle cx="170" cy="170" r="50" fill="#fff" opacity=".08"/></svg>
      </div>
      <div class="map" data-reveal style="--i:1">
        <iframe title="Map of the North Miami Beach, Florida service area" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=North+Miami+Beach,+FL+33162&amp;z=12&amp;output=embed"></iframe>
        <p class="map__note">${icon('pin')} Serving the North Miami Beach area</p>
      </div>
    </aside>

    <div class="form-card" data-reveal="right">
      <div class="form-card__head">
        <p class="eyebrow">Free Quote</p>
        <h2 id="form-title">Tell us about your cleaning needs</h2>
      </div>
      <form id="quote-form" novalidate>
        <div class="form-grid">
          ${field('name', 'Full Name', '<input id="name" name="name" type="text" autocomplete="name" required placeholder="Your full name">', { required: true })}
          ${field('email', 'Email Address', '<input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com">', { required: true })}
          ${field('phone', 'Phone Number', '<input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required placeholder="(555) 555-5555">', { required: true })}
          ${field('service', 'Service Needed', '<select id="service" name="service" required><option value="" selected disabled>Select a service</option><option value="Home Cleaning">Home Cleaning</option><option value="Office Cleaning">Office Cleaning</option></select>', { required: true })}
          ${field('date', 'Preferred Date', '<input id="date" name="date" type="date">')}
        </div>
        ${field('message', 'Message', '<textarea id="message" name="message" rows="5" placeholder="Tell us a little about your space and what you would like cleaned"></textarea>')}
        <div class="hp" aria-hidden="true"><label>Leave this empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
        <button class="btn btn--coral btn--lg" type="submit"><span>Request a Quote</span>${icon('arrow')}<i class="spinner" aria-hidden="true"></i></button>
        <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
      </form>
      <div class="form-success" id="form-success" hidden tabindex="-1">
        <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="36" fill="#2CA9B7" opacity=".15"/><circle class="draw" cx="40" cy="40" r="30" fill="none" stroke="#2CA9B7" stroke-width="4"/><path class="draw" d="m27 41 9 9 18-20" fill="none" stroke="#2CA9B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h3>Thank you — your request is in!</h3>
        <p>We've received your message and will get back to you about your cleaning needs. If it's urgent, call us at <a href="tel:${BIZ.tel}">${BIZ.phone}</a>.</p>
        <button class="btn btn--outline" type="button" id="form-reset"><span>Send another request</span></button>
      </div>
    </div>
  </div>
</section>
`,
});
