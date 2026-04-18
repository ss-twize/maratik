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

// ─── ANALYTICS CONFIG ────────────────────────────────────────────────────────
// Replace with your Yandex.Metrika counter ID before going live.
const YM_COUNTER = 0; // TODO: replace 0 with real counter ID

function trackEvent(name) {
  if (typeof ym === 'function' && YM_COUNTER !== 0) {
    ym(YM_COUNTER, 'reachGoal', name);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Maratik ready');
});
