// js/presale.js — pre-sale branch only
// Replaces the two-level buy popup with a lead collection form.

const WEBHOOK_URL = 'https://n8n.srv1090249.hstgr.cloud/webhook-test/prelaunch-lead';

const PRODUCT_MAP = {
  boots_high: 'Высокие сапоги',
  boots_low:  'Низкие сапоги',
  crocs:      'Кроксы'
};

// ─── DOM refs ────────────────────────────────────────────────────────────────
const overlay   = document.getElementById('buyPopup');
const closeBtn  = document.getElementById('popupClose');
const form      = document.getElementById('leadForm');
const selectEl  = document.getElementById('lf-product');
const submitBtn = document.getElementById('lfSubmit');
const errorEl   = document.getElementById('lfError');
const successEl = document.getElementById('lfSuccess');

// ─── Open / close ────────────────────────────────────────────────────────────
function openPopup(productKey) {
  // Pre-select product if button carries a product key
  if (productKey && PRODUCT_MAP[productKey]) {
    selectEl.value = PRODUCT_MAP[productKey];
  }
  form.removeAttribute('hidden');
  successEl.setAttribute('hidden', '');
  errorEl.setAttribute('hidden', '');
  form.reset();
  if (productKey && PRODUCT_MAP[productKey]) {
    selectEl.value = PRODUCT_MAP[productKey];
  }
  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  // Focus first empty required field
  const first = form.querySelector('input:not([type=hidden])');
  if (first) first.focus();
}

function closePopup() {
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

// ─── Trigger: all [data-buy] buttons ─────────────────────────────────────────
document.querySelectorAll('[data-buy]').forEach(btn => {
  btn.addEventListener('click', () => {
    openPopup(btn.dataset.product || '');
  });
});

// ─── Close mechanisms ────────────────────────────────────────────────────────
closeBtn.addEventListener('click', closePopup);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closePopup();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !overlay.hidden) closePopup();
});

// ─── Validation ──────────────────────────────────────────────────────────────
function validateForm() {
  let valid = true;
  form.querySelectorAll('[required]').forEach(el => {
    if (!el.value.trim()) {
      el.classList.add('invalid');
      valid = false;
    } else {
      el.classList.remove('invalid');
    }
  });
  return valid;
}

// ─── Submit ──────────────────────────────────────────────────────────────────
form.addEventListener('submit', async e => {
  e.preventDefault();

  if (!validateForm()) {
    showError('Пожалуйста, заполните все обязательные поля.');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Отправляем…';
  hideError();

  const payload = {
    firstname: document.getElementById('lf-firstname').value.trim(),
    lastname:  document.getElementById('lf-lastname').value.trim(),
    phone:     document.getElementById('lf-phone').value.trim(),
    product:   document.getElementById('lf-product').value,
    size:      document.getElementById('lf-size').value,
    quantity:  document.getElementById('lf-qty').value
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });

    if (!res.ok) throw new Error('HTTP ' + res.status);

    // Show success state
    form.setAttribute('hidden', '');
    successEl.removeAttribute('hidden');

  } catch (err) {
    showError('Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Отправить заявку';
  }
});

// ─── Helpers ─────────────────────────────────────────────────────────────────
function showError(msg) {
  errorEl.textContent = msg;
  errorEl.removeAttribute('hidden');
}

function hideError() {
  errorEl.setAttribute('hidden', '');
}

// Clear invalid state on input
form.querySelectorAll('[required]').forEach(el => {
  el.addEventListener('input', () => el.classList.remove('invalid'));
});
