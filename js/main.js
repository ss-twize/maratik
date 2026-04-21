// js/main.js

// ─── LINKS CONFIG ────────────────────────────────────────────────────────────
// Replace all # values with real URLs before going live.
const LINKS = {
  boots_high: {
    avito:    'https://www.avito.ru/user/d1312dba9f867863284f72542d74139f/profile',
    vk:       '#',
    telegram: 'https://t.me/m/W9zx72orYzky',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать высокие сапоги. Подскажите по наличию и размеру.')
  },
  boots_low: {
    avito:    'https://www.avito.ru/user/d1312dba9f867863284f72542d74139f/profile',
    vk:       '#',
    telegram: 'https://t.me/m/AzLmKnLDNGZi',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать низкие сапоги. Подскажите по наличию и размеру.')
  },
  crocs: {
    avito:    'https://www.avito.ru/user/d1312dba9f867863284f72542d74139f/profile',
    vk:       '#',
    telegram: 'https://t.me/m/l15KB1SHMzMy',
    whatsapp: '#',
    message:  encodeURIComponent('Здравствуйте, хочу заказать кроксы. Подскажите по наличию и размеру.')
  }
};

// ─── ANALYTICS CONFIG ────────────────────────────────────────────────────────
const YM_COUNTER = 108666198;

function trackEvent(name) {
  if (typeof ym === 'function' && YM_COUNTER !== 0) {
    ym(YM_COUNTER, 'reachGoal', name);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Maratik ready');

  // ─── SLIDERS ─────────────────────────────────────────────────────────────────
  document.querySelectorAll('[data-slider]').forEach(slider => {
    const slides = slider.querySelector('.product-card__slides');
    const imgs = slides.querySelectorAll('img');
    const dotsContainer = slider.querySelector('.product-card__dots');
    let current = 0;
    const total = imgs.length;

    // build dots
    imgs.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'product-card__dot' + (i === 0 ? ' product-card__dot--active' : '');
      dot.setAttribute('aria-label', `Фото ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function goTo(idx) {
      current = (idx + total) % total;
      slides.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer.querySelectorAll('.product-card__dot').forEach((d, i) => {
        d.classList.toggle('product-card__dot--active', i === current);
      });
    }

    slider.querySelector('.product-card__slider-btn--prev')
      .addEventListener('click', () => goTo(current - 1));
    slider.querySelector('.product-card__slider-btn--next')
      .addEventListener('click', () => goTo(current + 1));

    // touch swipe
    let startX = 0;
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
  });

  // ─── POPUP ───────────────────────────────────────────────────────────────────
  const popup        = document.getElementById('buyPopup');
  const level1       = document.getElementById('popupLevel1');
  const level2       = document.getElementById('popupLevel2');
  const productLabel = document.getElementById('popupProductName');
  const avitoBtn     = document.getElementById('popupAvitoBtn');
  const vkBtn        = document.getElementById('popupVkBtn');
  const tgBtn        = document.getElementById('popupTgBtn');
  const waBtn        = document.getElementById('popupWaBtn');

  const PRODUCT_NAMES = {
    boots_high: 'Высокие сапоги',
    boots_low:  'Низкие сапоги',
    crocs:      'Кроксы'
  };

  function openPopup(productKey) {
    const cfg = LINKS[productKey];
    if (!cfg) return;

    // populate level 1
    productLabel.textContent = PRODUCT_NAMES[productKey] || '';
    avitoBtn.onclick = () => {
      trackEvent('buy_avito_' + productKey);
      window.open(cfg.avito, '_blank', 'noopener');
    };

    // populate level 2 links
    vkBtn.href = cfg.vk;
    tgBtn.href = cfg.telegram + '?text=' + cfg.message;
    const waPhone = cfg.whatsapp.replace(/\D/g, '');
    waBtn.href = waPhone ? 'https://wa.me/' + waPhone + '?text=' + cfg.message : '#';

    vkBtn.onclick = () => trackEvent('buy_vk_' + productKey);
    tgBtn.onclick = () => trackEvent('buy_tg_' + productKey);
    waBtn.onclick = () => trackEvent('buy_wa_' + productKey);

    // show popup at level 1
    level1.classList.remove('popup__level--hidden');
    level2.classList.add('popup__level--hidden');
    popup.hidden = false;
    document.body.style.overflow = 'hidden';
    trackEvent('popup_open_' + productKey);
  }

  function closePopup() {
    popup.hidden = true;
    document.body.style.overflow = '';
  }

  // open from any [data-buy] button
  document.querySelectorAll('[data-buy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.product || 'boots_high';
      openPopup(key);
    });
  });

  // manager branch
  document.getElementById('popupManagerBtn').addEventListener('click', () => {
    level1.classList.add('popup__level--hidden');
    level2.classList.remove('popup__level--hidden');
  });

  // back
  document.getElementById('popupBack').addEventListener('click', () => {
    level2.classList.add('popup__level--hidden');
    level1.classList.remove('popup__level--hidden');
  });

  // close
  document.getElementById('popupClose').addEventListener('click', closePopup);
  popup.addEventListener('click', e => { if (e.target === popup) closePopup(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
});
