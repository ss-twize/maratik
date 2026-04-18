// js/main.js

// ─── LINKS CONFIG ────────────────────────────────────────────────────────────
// Replace all # values with real URLs before going live.
const LINKS = {
  boots_high: {
    avito:    '#',
    vk:       '#',
    telegram: '#',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать высокие сапоги. Подскажите по наличию и размеру.')
  },
  boots_low: {
    avito:    '#',
    vk:       '#',
    telegram: '#',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать низкие сапоги. Подскажите по наличию и размеру.')
  },
  crocs: {
    avito:    '#',
    vk:       '#',
    telegram: '#',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать кроксы. Подскажите по наличию и размеру.')
  }
};

// ─── ANALYTICS STUB ──────────────────────────────────────────────────────────
// Connect Yandex.Metrika counter in <head>, then ym() calls below will work.
function trackEvent(name) {
  if (typeof ym === 'function') {
    ym(0, 'reachGoal', name); // replace 0 with your counter ID
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Maratik ready');
});
