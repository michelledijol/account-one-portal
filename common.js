// Shared across every page: number formatting, the "live vs snapshot" badge,
// and marking the current page active in the top nav.
const fmtMoney = n => n == null ? '—' : '$' + Number(n).toFixed(2);
const fmtInt = n => n == null ? '—' : Number(n).toLocaleString('es-DO');
const fmtPct = n => n == null ? '—' : Number(n).toFixed(2) + '%';

// Status pill for a campaign card, driven by the real estado from the data
// (ACTIVE / PAUSED / CLOSED) instead of a hardcoded "Activa".
function estadoPill(estado) {
  if (estado === 'ACTIVE') return '<span class="pill active">Activa</span>';
  if (estado === 'CLOSED') return '<span class="pill paused">Cerrada</span>';
  if (estado === 'PAUSED') return '<span class="pill paused">Pausada</span>';
  return '<span class="pill paused">' + (estado ? String(estado).toLowerCase() : 'Sin estado') + '</span>';
}

function daysSince(dateStr) {
  const start = new Date(dateStr + 'T00:00:00');
  const now = new Date();
  return Math.max(1, Math.floor((now - start) / 86400000));
}

function renderLiveBadge(modo) {
  const wrap = document.getElementById('live-badge-wrap');
  const footer = document.getElementById('footer-mode');
  if (modo === 'live') {
    if (wrap) wrap.innerHTML = `<span class="live-badge"><span class="dot"></span>Datos en vivo</span>`;
    if (footer) footer.textContent = 'Datos en vivo desde Meta Ads';
  } else {
    if (wrap) wrap.innerHTML = `<span class="live-badge snapshot"><span class="dot"></span>Modo snapshot</span>`;
    if (footer) footer.textContent = 'Snapshot manual — conecta META_ACCESS_TOKEN para datos en vivo';
  }
}

function markActiveNav() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.tabs a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
}
markActiveNav();
