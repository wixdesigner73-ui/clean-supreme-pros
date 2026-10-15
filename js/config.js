/*
 * Site configuration.
 *
 * FORM_ENDPOINT — where quote requests are sent. Works with any service that accepts a
 * JSON/form POST and returns 2xx, e.g. Formspree (https://formspree.io): create a form for
 * the business email, then paste its URL here, like "https://formspree.io/f/xxxxxxxx".
 * While this is empty the form validates but does NOT send anything, and says so.
 */
window.CSP_CONFIG = {
  FORM_ENDPOINT: '',
  PHONE_DISPLAY: '(786) 327-6919',
  PHONE_TEL: '+17863276919',
};
