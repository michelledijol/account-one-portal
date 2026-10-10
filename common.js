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

function renderLiveBadge(modo, actualizado) {
  const wrap = document.getElementById('live-badge-wrap');
  const footer = document.getElementById('footer-mode');
  const upd = document.getElementById('updated-at');
  if (upd && actualizado) {
    const d = new Date(actualizado);
    if (!isNaN(d)) {
      const dia = d.toLocaleDateString('es-ES', { day: 'numeric', timeZone: 'Europe/Madrid' });
      const mes = d.toLocaleDateString('es-ES', { month: 'short', timeZone: 'Europe/Madrid' }).replace('.', '');
      upd.innerHTML = '<span class="st-top">act.</span><b>' + dia + '</b><span class="st-bot">' + mes + '</span>';
      upd.title = 'Actualizado: ' + d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' });
    }
  }
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

// ---------------------------------------------------------------------------
// Iconos: Lucide (https://lucide.dev), licencia ISC — libres de derechos,
// incluso para uso comercial. Se dibujan inline, sin cargar nada externo.
// ---------------------------------------------------------------------------
const ICONS = {
  dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  funnel: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  history: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  alert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  cursor: '<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  eyeplay: '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  sparkle: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.29 1.29L3 12l5.8 1.9a2 2 0 0 1 1.29 1.29L12 21l1.9-5.8a2 2 0 0 1 1.29-1.29L21 12l-5.8-1.9a2 2 0 0 1-1.29-1.29Z"/>',
  plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>'
};

function icon(name, size) {
  const s = size || 18;
  return `<svg class="ico" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

// Mini gráfico de línea (gasto semanal) para las tarjetas del dashboard.
function sparkline(values, w, h) {
  const vals = (values || []).map(v => Number(v) || 0);
  if (vals.length < 2) return '';
  w = w || 96; h = h || 30;
  const max = Math.max(...vals), min = Math.min(...vals);
  const span = max - min || 1;
  const pts = vals.map((v, i) => [
    (i / (vals.length - 1)) * (w - 4) + 2,
    h - 4 - ((v - min) / span) * (h - 8)
  ]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = line + ` L${pts[pts.length - 1][0].toFixed(1)} ${h} L${pts[0][0].toFixed(1)} ${h} Z`;
  const last = pts[pts.length - 1];
  return `<svg class="spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">
    <path d="${area}" class="spark-area"/><path d="${line}" class="spark-line" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="3" class="spark-dot"/></svg>`;
}

// <span data-icon="users"></span> en el HTML estático → icono SVG.
function hydrateIcons(root) {
  (root || document).querySelectorAll('[data-icon]:not([data-done])').forEach(el => {
    el.innerHTML = icon(el.dataset.icon, Number(el.dataset.size) || 18);
    el.dataset.done = '1';
  });
}

// Iconos del menú superior.
(function navIcons() {
  const map = { 'index.html': 'dashboard', 'campanas.html': 'megaphone', 'funnel-roadmap.html': 'route', 'historico.html': 'history' };
  document.querySelectorAll('nav.tabs a').forEach(a => {
    const k = map[a.getAttribute('href')];
    if (k && !a.querySelector('.ico')) a.insertAdjacentHTML('afterbegin', icon(k, 17));
  });
  hydrateIcons();
})();

// ---- Glosario en lenguaje simple (se inserta en #glossary-slot de cada página) ----
(function () {
  const T = [
    ['Cita agendada', 'Una persona que dejó sus datos y reservó una llamada o reunión. Es el resultado que más nos importa en las campañas de Facturación Electrónica.'],
    ['Lead / registro', 'Alguien interesado que dejó su nombre y contacto (por ejemplo, para el webinar o la clase gratuita).'],
    ['Costo por resultado', 'Cuánto dinero costó conseguir una cita o un registro. Menos es mejor.'],
    ['Gasto / invertido', 'El dinero que se ha pagado a Meta (Facebook e Instagram) por mostrar los anuncios.'],
    ['Alcance', 'Cuántas personas distintas vieron el anuncio al menos una vez.'],
    ['Impresiones', 'Cuántas veces se mostró el anuncio. Una misma persona puede verlo varias veces, por eso es mayor que el alcance.'],
    ['CTR', 'De cada 100 veces que se mostró el anuncio, cuántas personas hicieron clic. Más alto = el anuncio llama más la atención.'],
    ['CPC', 'Lo que cuesta cada clic. Menos es mejor.'],
    ['CPM', 'Lo que cuesta mostrar el anuncio 1,000 veces. Sirve para comparar qué tan caro es llegar a la gente.'],
    ['Presupuesto diario', 'El máximo que la campaña puede gastar cada día.'],
    ['Presupuesto cerrado', 'Un total fijo para toda la campaña hasta una fecha. Cuando se acaba, la campaña deja de gastar sola.'],
    ['Activa / Pausada', 'Activa = está gastando y mostrando anuncios hoy. Pausada = está apagada y no gasta nada.'],
    ['Semana', 'En este portal las semanas van de jueves a miércoles.'],
    ['Creativo', 'Cada anuncio individual (la imagen o video con su texto).']
  ];
  function draw() {
    const el = document.getElementById('glossary-slot');
    if (!el) return;
    el.innerHTML = '<details class="glossary"><summary>Palabras que verás en el portal (qué significa cada una)</summary><dl>' +
      T.map(t => '<dt>' + t[0] + '</dt><dd>' + t[1] + '</dd>').join('') + '</dl></details>';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', draw); else draw();
})();
