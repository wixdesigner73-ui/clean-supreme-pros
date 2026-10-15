# Clean Supreme Pros — website

Static four-page site (Home, About Us, Services, Contact). No runtime framework.

- Open `index.html` directly, or serve the folder with any static host.
- Pages are generated from shared components: edit `src/components.mjs` (header, footer, icons, illustrations) or `src/pages.mjs` (page content), then run `node build.mjs`.
- Styles: `css/styles.css`. Behaviour: `js/main.js` (nav, reveals, form) and `js/clean.js` (popping bubbles, sweeping broom, wipe-the-glass).

## Before launch

1. **Contact form**: paste a form endpoint (e.g. a Formspree form URL) into `FORM_ENDPOINT` in `js/config.js`. Until then the form validates but tells visitors nothing was sent.
2. **Reviews**: Yelp blocks automated access and restricts copying reviews, so none are included. Add reviews you have permission to use to `js/reviews.js` and the carousel appears; otherwise the section links to the Yelp listing.
3. **Photos**: photography is from Unsplash and Pexels (free licences, saved in `assets/img`, one photo per slot, none repeated). Swap in the business's own photos by replacing files of the same name.
