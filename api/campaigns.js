// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-09-15T12:20:00+02:00",
  resumen: {
    campanas_activas: 5,
    invertido_total: 586.79,
    leads: 18,
    alcance_combinado: 508106
  },
  campanas: [
    {
      id: "120252187070040560",
      nombre: "FE 3% Ready to Buy: Retargeting Caliente",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 3 — Ready to Buy del funnel FE)",
      inicio: "2026-09-11",
      presupuesto_diario: null,
      presupuesto_mensual: { sep: 358.40, oct: 537.60 },
      ventana: "Encendida el 11 de septiembre — 4 días activa",
      metricas: {
        gasto: 60.78,
        impresiones: 8670,
        clicks: 246,
        clics_enlace: 153,
        vistas_landing: 87,
        ctr: 2.84,
        cpc: 0.25,
        cpm: 7.01,
        alcance: 4789,
        resultado_nombre: "Leads",
        resultado_valor: 4
      },
      tendencia_semanal: [
        { semana: "9–15 sep", gasto: 60.78, impresiones: 8670, alcance: 4789, resultado_valor: 4 }
      ],
      recomendacion:
        "Ya está entregando: 4 leads en sus primeros 4 días activa (costo por lead $15.20, el más caro de las 3 etapas del funnel, esperable siendo el público más caliente y pequeño). \"180,000 empresas-Imagen\" trae 2 de los 4 leads con el mejor CPM ($5.82). \"Cupo v2\" y \"Faltan 180,000 empresas\" aportan 1 cada uno. \"Doña v2\", \"Te lo voy a decir v2\" y \"Desde el 31 de diciembre\" todavía sin leads propios pero con gasto bajo — están apenas arrancando dentro del ad set.",
      ads: [
        { nombre: "180,000 empresas-Imagen", gasto: 14.53, impresiones: 2497, clicks: 77, ctr: 3.08, cpc: 0.19, cpm: 5.82, resultado_nombre: "Leads", resultado_valor: 2 },
        { nombre: "Faltan 180,000 empresas", gasto: 25.78, impresiones: 3562, clicks: 92, ctr: 2.58, cpc: 0.28, cpm: 7.24, resultado_nombre: "Leads", resultado_valor: 1 },
        { nombre: "Cupo v2", gasto: 13.15, impresiones: 1754, clicks: 49, ctr: 2.79, cpc: 0.27, cpm: 7.50, resultado_nombre: "Leads", resultado_valor: 1 },
        { nombre: "Te lo voy a decir v2", gasto: 4.47, impresiones: 515, clicks: 18, ctr: 3.50, cpc: 0.25, cpm: 8.68, resultado_nombre: null, resultado_valor: null },
        { nombre: "Doña vs 2", gasto: 2.34, impresiones: 243, clicks: 7, ctr: 2.88, cpc: 0.33, cpm: 9.63, resultado_nombre: null, resultado_valor: null },
        { nombre: "Desde el 31 de diciembre", gasto: 0.51, impresiones: 99, clicks: 3, ctr: 3.03, cpc: 0.17, cpm: 5.15, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120252085024140560",
      nombre: "FE 17% Consideración: Leads Septiembre",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 2 — Consideración del funnel FE)",
      inicio: "2026-09-04",
      presupuesto_diario: null,
      presupuesto_mensual: { sep: 358.40, oct: 537.60 },
      ventana: "Desde su lanzamiento (4 sep 2026) hasta hoy",
      metricas: {
        gasto: 129.06,
        impresiones: 13646,
        clicks: 405,
        clics_enlace: 259,
        vistas_landing: 159,
        ctr: 2.97,
        cpc: 0.32,
        cpm: 9.46,
        alcance: 6559,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 8
      },
      recomendacion:
        "Salto fuerte esta última semana: de 3 a 8 citas agendadas (costo por resultado bajó de $26.74 a $16.13). \"Operando a ciegas\" sigue siendo el creativo dominante en gasto ($107.71) y ahora acumula las 8 citas. \"Scrolling (17%)\" mantiene el mejor CTR (3.72%) pero sigue sin citas atribuidas directamente — buen candidato para escalar si el volumen de Operando a ciegas se estanca.",
      tendencia_semanal: [
        { semana: "2–8 sep", gasto: 56.58, impresiones: 6723, alcance: 3558, resultado_valor: 0 },
        { semana: "9–15 sep", gasto: 72.48, impresiones: 6923, alcance: 4458, resultado_valor: 8 }
      ],
      ads: [
        { nombre: "Operando a ciegas", gasto: 107.71, impresiones: 10647, clicks: 309, ctr: 2.90, cpc: 0.35, cpm: 10.12, resultado_nombre: "Citas agendadas", resultado_valor: 8 },
        { nombre: "Scrolling (17%)", gasto: 13.03, impresiones: 1988, clicks: 74, ctr: 3.72, cpc: 0.18, cpm: 6.55, resultado_nombre: null, resultado_valor: null },
        { nombre: "Hay empresarios", gasto: 5.88, impresiones: 603, clicks: 14, ctr: 2.32, cpc: 0.42, cpm: 9.75, resultado_nombre: null, resultado_valor: null },
        { nombre: "garbage in garbage out - Estática", gasto: 1.26, impresiones: 203, clicks: 4, ctr: 1.97, cpc: 0.32, cpm: 6.21, resultado_nombre: null, resultado_valor: null },
        { nombre: "4 formas de resolver FE - Estática", gasto: 0.80, impresiones: 111, clicks: 1, ctr: 0.90, cpc: 0.80, cpm: 7.21, resultado_nombre: null, resultado_valor: null },
        { nombre: "Otros implementadores - Estática", gasto: 0.38, impresiones: 94, clicks: 3, ctr: 3.19, cpc: 0.13, cpm: 4.04, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120251975182080560",
      nombre: "Campaña contabilidad: Septiembre–Diciembre",
      estado: "ACTIVE",
      objetivo: "Leads (citas agendadas)",
      inicio: "2026-08-27",
      presupuesto_diario: 6.0,
      ventana: "Desde su lanzamiento (27 ago 2026) hasta hoy",
      metricas: {
        gasto: 115.31,
        impresiones: 28524,
        clicks: 1339,
        ctr: 4.69,
        cpc: 0.09,
        cpm: 4.04,
        alcance: 13305,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 6
      },
      recomendacion:
        "Subió a 6 citas agendadas (costo por resultado bajó a $19.22, desde ~$44). \"Dia 1 llevando Account One de 30 a 100\" sigue concentrando el mayor gasto ($77.96) y ahora tiene 5 de las 6 citas — el creativo más consistente de la campaña.",
      tendencia_semanal: [
        { semana: "26 ago–1 sep", gasto: 36.42, impresiones: 11561, alcance: 6810, resultado_valor: 3 },
        { semana: "2–8 sep", gasto: 39.98, impresiones: 8569, alcance: 5493, resultado_valor: 1 },
        { semana: "9–15 sep", gasto: 38.91, impresiones: 8394, alcance: 5801, resultado_valor: 2 }
      ],
      ads: [
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 77.96, impresiones: 18064, clicks: 814, ctr: 4.51, cpc: 0.10, cpm: 4.32, resultado_nombre: "Citas agendadas", resultado_valor: 5 },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 14.80, impresiones: 3722, clicks: 154, ctr: 4.14, cpc: 0.10, cpm: 3.98, resultado_nombre: null, resultado_valor: null },
        { nombre: "Comparativo Contadores", gasto: 8.85, impresiones: 3528, clicks: 256, ctr: 7.26, cpc: 0.03, cpm: 2.51, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 9.09, impresiones: 2075, clicks: 82, ctr: 3.95, cpc: 0.11, cpm: 4.38, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavía usas excel (nuevo)", gasto: 1.02, impresiones: 209, clicks: 3, ctr: 1.44, cpc: 0.34, cpm: 4.88, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 3.59, impresiones: 926, clicks: 30, ctr: 3.24, cpc: 0.12, cpm: 3.88, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120251858423240560",
      nombre: "Campaña: Reconocimiento 80% FE",
      estado: "ACTIVE",
      objetivo: "Reconocimiento de marca (etapa 1 del funnel FE)",
      inicio: "2026-08-20",
      presupuesto_diario: null,
      presupuesto_mensual: { sep: 179.20, oct: 268.80 },
      ventana: "Desde su lanzamiento (20 ago 2026) hasta hoy",
      metricas: {
        gasto: 160.08,
        impresiones: 509640,
        clicks: 3315,
        clics_enlace: 693,
        vistas_landing: 155,
        ctr: 0.65,
        cpc: 0.05,
        cpm: 0.31,
        alcance: 233031,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "\"La llamada\" sigue concentrando el mayor gasto y es por lejos el mejor creativo (CPM $0.50). Las variantes de imagen estática (Carrusel/Arte) siguen con CTR bajo (0.15–0.20%) — solo aportan alcance. Con Consideración y Ready to Buy ya armadas y entregando leads, esta campaña sigue cumpliendo su rol de generar el público para retargeting. Cierra el 30 de septiembre.",
      tendencia_semanal: [
        { semana: "19–25 ago", gasto: 78.73, impresiones: 245728, alcance: 141151, resultado_valor: null },
        { semana: "26 ago–1 sep", gasto: 55.68, impresiones: 201372, alcance: 105926, resultado_valor: null },
        { semana: "2–8 sep", gasto: 14.55, impresiones: 40252, alcance: 34153, resultado_valor: null },
        { semana: "9–15 sep", gasto: 11.12, impresiones: 22288, alcance: 20132, resultado_valor: null }
      ],
      ads: [
        { nombre: "La llamada", gasto: 96.39, impresiones: 194093, clicks: 2628, ctr: 1.35, cpc: 0.04, cpm: 0.50, resultado_nombre: null, resultado_valor: null },
        { nombre: "Carrusel sera una de ellas", gasto: 42.06, impresiones: 206413, clicks: 351, ctr: 0.17, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 86449 },
        { nombre: "Carrusel mexico", gasto: 6.71, impresiones: 38783, clicks: 78, ctr: 0.20, cpc: 0.09, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 26156 },
        { nombre: "Carrusel la llamada", gasto: 4.46, impresiones: 22614, clicks: 43, ctr: 0.19, cpc: 0.10, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 16500 },
        { nombre: "mexico", gasto: 3.09, impresiones: 9425, clicks: 122, ctr: 1.29, cpc: 0.03, cpm: 0.33, resultado_nombre: null, resultado_valor: null },
        { nombre: "Arte mexico", gasto: 2.88, impresiones: 13993, clicks: 21, ctr: 0.15, cpc: 0.14, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 11094 },
        { nombre: "Arte la llamada", gasto: 2.17, impresiones: 11115, clicks: 20, ctr: 0.18, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 8612 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.68, impresiones: 9558, clicks: 17, ctr: 0.18, cpc: 0.10, cpm: 0.18, resultado_nombre: "Alcance", resultado_valor: 8716 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.64, impresiones: 3646, clicks: 35, ctr: 0.96, cpc: 0.02, cpm: 0.18, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120237775235040560",
      nombre: "Awareness",
      estado: "ACTIVE",
      objetivo: "Reproducciones de video",
      inicio: "2025-11-12",
      presupuesto_diario: 4.0,
      ventana: "Últimos 30 días (campaña de largo plazo)",
      metricas: {
        gasto: 121.56,
        impresiones: 322064,
        clicks: 3137,
        ctr: 0.97,
        cpc: 0.04,
        cpm: 0.38,
        alcance: 250422,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 96415
      },
      recomendacion:
        "\"Como es tener un negocio en RD\" sigue liderando el gasto (CPM $0.36) aunque va bajando de peso relativo. \"La vida es un video juego\" mantiene el CTR más alto (1.71%) y sigue ganando presupuesto semana a semana — buen candidato para diversificar más allá del creativo dominante.",
      tendencia_semanal: [
        { semana: "19–25 ago", gasto: 27.63, impresiones: 75236, alcance: 68730, resultado_valor: null },
        { semana: "26 ago–1 sep", gasto: 29.78, impresiones: 74801, alcance: 71757, resultado_valor: null },
        { semana: "2–8 sep", gasto: 26.78, impresiones: 76267, alcance: 67641, resultado_valor: null },
        { semana: "9–15 sep", gasto: 25.91, impresiones: 64114, alcance: 59805, resultado_valor: null }
      ],
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 83.43, impresiones: 229546, clicks: 1550, ctr: 0.68, cpc: 0.05, cpm: 0.36, resultado_nombre: null, resultado_valor: null },
        { nombre: "La vida es un video juego", gasto: 37.40, impresiones: 90649, clicks: 1547, ctr: 1.71, cpc: 0.02, cpm: 0.41, resultado_nombre: null, resultado_valor: null },
        { nombre: "Si el negocio paga todo", gasto: 0.73, impresiones: 1869, clicks: 40, ctr: 2.14, cpc: 0.02, cpm: 0.39, resultado_nombre: null, resultado_valor: null }
      ]
    }
  ],
  historico: {
    campanas_pausadas: 36,
    rango: "jul 2025 – ago 2026"
  },
  roadmap: {
    completado: [
      "Se lanzó la campaña de Consideración (retargeting) del funnel FE: \"FE 17% Consideración: Leads Septiembre\", el 4 de septiembre. Ya va en 3 citas agendadas.",
      "Se leyó el plan oficial de Félix (\"Plan Funnel FE Septiembre 2026\") y se armó la etapa 3 — Ready to Buy — siguiendo esa estructura exacta: retargeting a quienes vieron 25%+ de los videos de Consideración + visitantes de la landing sin lead, excluyendo clientes/agendados, RD completa, $358.40 hasta el 10 de octubre (mismo cierre que Consideración).",
      "Se armó, aprobó y encendió la campaña completa de Ready to Buy en Meta Ads Manager: campaña, ad set y sus 6 anuncios (Doña v2, Cupo v2, Te lo voy a decir v2, video B-01, y las artes de \"180,000 empresas\" y \"Desde el 31 de diciembre\") ya están en ACTIVE de punta a punta — etapa 3 del funnel FE queda completa y corriendo (11 de septiembre).",
      "Se verificó en vivo la oferta real de la landing (accountone.io/citas2-8041) antes de escribir el copy: 25% de descuento, $375 en vez de $500, válido hasta el 30 de septiembre.",
      "Se recibió el sistema de diseño de marca oficial de Account One (logos, paleta, tipografía Poppins) y se usó para diseñar 4 artes estáticas de Ready to Buy — cierre, oferta/riesgo B-01, simplicidad, y urgencia (180k empresas) — cada una con su copy de anuncio.",
      "Se decidió no producir el set completo de 3 artes + 3 carruseles por campaña que pedía el plan original para Reconocimiento y Consideración — ya había mucho contenido compitiendo entre sí en esas etapas, así que se priorizó calidad sobre cantidad.",
      "Se corrigió la landing de Facturación Electrónica para que muestre la fecha y el descuento correctos según la etapa vigente (25%, hasta el 30 de septiembre).",
      "Se eliminó la campaña huérfana \"FE 3% Ready to Buy\" vieja (con presupuesto diario, nunca usada) que había quedado abandonada en la cuenta.",
      "Monitoreo de campañas de la mano de Naomi.",
      "Se construyó y publicó este portal de reportes (account-one-portal.vercel.app), con vista por campaña, por creativo, y este roadmap.",
      "Se restableció el acceso de escritura al portal (token de GitHub) para poder seguir actualizándolo directo.",
      "Se agregó tendencia semanal (gasto, impresiones, alcance, resultado) a cada campaña dentro del portal, visible al expandir la tarjeta.",
      "Se entregó a Félix un reporte formal por campaña en Word, con resumen ejecutivo, roadmap y detalle semanal por creativo.",
      "Ready to Buy ya confirmó resultados: 4 leads en sus primeros 4 días activa ($15.20 costo por lead). Consideración pegó un salto fuerte (3 → 8 citas, costo por resultado de $26.74 a $16.13) y Contabilidad subió de 2 a 6 citas (costo por resultado de ~$44 a $19.22).",
      "Se agregó al portal el embudo detallado de Facturación Electrónica (Reconocimiento → Consideración → Ready to Buy): impresiones, alcance, clics, vistas de landing y resultado por etapa, con el presupuesto mensual acordado con Félix en cada campaña. Se actualiza solo con cada refresco de datos."
    ],
    pendientes: [
      "Todavía no hay visibilidad de ventas/contratos cerrados — los 18 leads/citas agendadas del funnel FE + Contabilidad son lo máximo que mide Meta Ads (llega hasta la cita agendada). Falta que Félix comparta desde su CRM/GHL cuántas de esas citas se convirtieron en cliente, para poder medir el resultado real del negocio y no solo el volumen de leads.",
      "Hallazgo de Naomi (monitoreo de leads): está llegando un volumen notable de negocios de retail y restaurantes preguntando específicamente si el servicio se conecta con su punto de venta (POS) — para ese perfil de negocio, la Facturación Electrónica tiene que salir integrada directo de la caja/POS, no como trámite aparte. Decidir con Félix: (1) si Account One ofrece o puede conectar con integración de POS, vale crear un ángulo de anuncio específico para retail/restaurantes mencionándolo, porque hay demanda represada ahí; (2) si no la ofrece, aclarar esto en la landing o en el primer mensaje de contacto para evitar leads mal calificados que entran esperando algo que no se les puede dar. Corto plazo: pedirle a Naomi que cuantifique cuántos leads mencionan POS para dimensionar el segmento.",
      "Seguir de cerca Ready to Buy los próximos días para confirmar cuál de los 6 anuncios termina liderando en costo por lead (por ahora \"180,000 empresas-Imagen\" va mejor, $7.27/lead).",
      "Pausar el anuncio de la oferta 25%/B-01 el 30 de septiembre — después de esa fecha el precio y el dato de comprobantes B-01 dejan de ser exactos y hay que revisar el copy.",
      "Completar la verificación de negocio (Business Verification) en el Business Manager de Meta para desbloquear el acceso a datos en vivo del portal.",
      "Poner a correr el reel viral (instagram.com/reel/DdRpN3zuQu7, cuenta @themoneycoachrd) como anuncio nuevo e independiente — decidido, pendiente de ejecutar.",
      "Construir una landing propia con formulario propio (no la de GHL/Félix existente), enfocada en el miedo, usando los dos reels de \"no hay prórroga\" y un timer de cuenta regresiva (quedan 3 semanas / 2 semanas / 1 semana). Pendiente que Félix pase el copy y los videos que se hicieron virales."
    ],
    proximas_artes: [
      "Posible refresco de creativos de Awareness si la frecuencia sube (fatiga de anuncio)."
    ],
    proximos_pasos: [
      "Webinars agendados: 29 de septiembre (4:30-6pm), 13 de octubre (7pm), 29 de octubre (4:30pm) y jueves 12 de noviembre (7pm) — falta definir landing de registro y campaña de promoción en Meta Ads.",
      "Agregar una pregunta filtro al registro del webinar sobre el tamaño de la empresa, para calificar mejor a quien entra (referencia: preguntas de calificación de este formulario de Calendly: rol, cantidad de empleados, ingreso mensual, retos, inversión dispuesta, urgencia de inicio, si toma la decisión final).",
      "Evaluar si el salto de Consideración y Contabilidad esta semana fue puntual o es una tendencia — revisar en 3-4 días con más datos.",
      "Pausar el anuncio de oferta B-01/25% el 30 de septiembre.",
      "Evaluar la campaña de Contabilidad en 7–10 días antes de subir presupuesto."
    ]
  }
};

const MESES_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function fmtFechaEs(isoDate) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${d} ${MESES_ES[m - 1]} ${y}`;
}

// Short "9–15 sep" / "28 ago–3 sep" label for a weekly trend row.
function fmtSemana(since, until) {
  const [, m1, d1] = since.split("-").map(Number);
  const [, m2, d2] = until.split("-").map(Number);
  if (m1 === m2) return `${d1}–${d2} ${MESES_ES[m1 - 1]}`;
  return `${d1} ${MESES_ES[m1 - 1]}–${d2} ${MESES_ES[m2 - 1]}`;
}

// Cost per result for a single week's row — null when there's no result yet
// (avoids dividing by zero / showing a misleading $0.00).
function cprOf(gasto, resultado) {
  return resultado ? Number((gasto / resultado).toFixed(2)) : null;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

// Annotate the snapshot's weekly trend rows with cost-per-result so the
// portal can render week-over-week CPR comparisons straight from this data,
// without re-deriving it client-side.
for (const c of SNAPSHOT.campanas) {
  for (const w of c.tendencia_semanal || []) {
    w.costo_resultado = cprOf(w.gasto, w.resultado_valor);
  }
}

// Fixed monthly budgets agreed with Félix for the 3-stage FE funnel
// ("Plan Funnel FE Septiembre 2026") — not derivable from the API since
// budget is set at ad-set level and this is the plan figure, not the
// account's live daily_budget. Same map used in snapshot and live mode.
const FE_PRESUPUESTOS = {
  "120251858423240560": { sep: 179.20, oct: 268.80 }, // Reconocimiento (20%)
  "120252085024140560": { sep: 358.40, oct: 537.60 }, // Consideración (40%)
  "120252187070040560": { sep: 358.40, oct: 537.60 }  // Ready to Buy (40%)
};

// Best-effort mapping from Meta's "actions" array to a human result label.
// Ordered by priority: the first matching action type found wins.
const ACTION_PRIORITY = [
  { type: "onsite_conversion.lead_grouped", label: "Leads" },
  { type: "lead", label: "Leads" },
  { type: "offsite_conversion.fb_pixel_lead", label: "Leads" },
  { type: "onsite_conversion.messaging_conversation_started_7d", label: "Conversaciones iniciadas" },
  { type: "onsite_conversion.total_messaging_connection", label: "Conversaciones" },
  { type: "landing_page_view", label: "Vistas de landing page" },
  { type: "video_view", label: "Reproducciones" },
  { type: "link_click", label: "Clicks al enlace" },
  { type: "post_engagement", label: "Interacciones" }
];

function pickResultado(actions) {
  if (!Array.isArray(actions)) return { resultado_nombre: null, resultado_valor: null };
  for (const { type, label } of ACTION_PRIORITY) {
    const found = actions.find((a) => a.action_type === type);
    if (found) return { resultado_nombre: label, resultado_valor: Math.round(Number(found.value)) };
  }
  return { resultado_nombre: null, resultado_valor: null };
}

async function metaGet(path, token, params = {}) {
  const qs = new URLSearchParams({ ...params, access_token: token }).toString();
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${path}?${qs}`;
  const res = await fetch(url);
  const body = await res.json();
  if (!res.ok) {
    const msg = body?.error?.message || JSON.stringify(body);
    throw new Error(`Meta Graph API error (${path}): ${msg}`);
  }
  return body;
}

async function fetchLive(token, adAccountId) {
  const until = todayISO();

  const campaignsResp = await metaGet(`act_${adAccountId}/campaigns`, token, {
    fields: "id,name,objective,status,effective_status,start_time,daily_budget",
    filtering: JSON.stringify([{ field: "effective_status", operator: "IN", value: ["ACTIVE"] }]),
    limit: "100"
  });

  const activeCampaigns = (campaignsResp.data || []).filter((c) => c.effective_status === "ACTIVE");

  const campanas = await Promise.all(
    activeCampaigns.map(async (c) => {
      const since = (c.start_time || until).slice(0, 10);
      const timeRange = JSON.stringify({ since, until: since > until ? since : until });

      const [insightsResp, adInsightsResp, weeklyResp] = await Promise.all([
        metaGet(`${c.id}/insights`, token, {
          fields: "spend,impressions,clicks,ctr,cpc,cpm,reach,actions,link_click,landing_page_view",
          time_range: timeRange
        }).catch(() => ({ data: [] })),
        metaGet(`${c.id}/insights`, token, {
          level: "ad",
          fields: "ad_id,ad_name,spend,impressions,clicks,ctr,cpc,cpm,actions",
          time_range: timeRange,
          limit: "200"
        }).catch(() => ({ data: [] })),
        // Weekly buckets (Meta anchors these to the account's reporting week,
        // not necessarily Mon–Sun) so the portal can show a CPR trend per
        // campaign the same way the snapshot data does.
        metaGet(`${c.id}/insights`, token, {
          fields: "spend,impressions,reach,actions",
          time_range: timeRange,
          time_increment: "7"
        }).catch(() => ({ data: [] }))
      ]);

      const row = insightsResp.data?.[0] || {};
      const { resultado_nombre, resultado_valor } = pickResultado(row.actions);

      const tendencia_semanal = (weeklyResp.data || []).map((w) => {
        const gasto = Number(w.spend || 0);
        const { resultado_valor: weekResultado } = pickResultado(w.actions);
        return {
          semana: fmtSemana(w.date_start, w.date_stop),
          gasto,
          impresiones: Number(w.impressions || 0),
          alcance: Number(w.reach || 0),
          resultado_valor: weekResultado,
          costo_resultado: cprOf(gasto, weekResultado)
        };
      });

      const ads = (adInsightsResp.data || [])
        .map((a) => {
          const adResult = pickResultado(a.actions);
          return {
            nombre: a.ad_name || "(sin nombre)",
            gasto: Number(a.spend || 0),
            impresiones: Number(a.impressions || 0),
            clicks: Number(a.clicks || 0),
            ctr: Number(a.ctr || 0),
            cpc: a.cpc ? Number(a.cpc) : null,
            cpm: Number(a.cpm || 0),
            resultado_nombre: adResult.resultado_nombre,
            resultado_valor: adResult.resultado_valor
          };
        })
        .sort((a, b) => b.gasto - a.gasto);

      return {
        id: c.id,
        nombre: c.name,
        estado: c.effective_status,
        objetivo: c.objective || null,
        inicio: since,
        presupuesto_diario: c.daily_budget ? Number(c.daily_budget) / 100 : null,
        presupuesto_mensual: FE_PRESUPUESTOS[c.id] || null,
        ventana: `Desde su lanzamiento (${fmtFechaEs(since)}) hasta hoy`,
        metricas: {
          gasto: Number(row.spend || 0),
          impresiones: Number(row.impressions || 0),
          clicks: Number(row.clicks || 0),
          clics_enlace: Number(row.link_click || 0),
          vistas_landing: Number(row.landing_page_view || 0),
          ctr: Number(row.ctr || 0),
          cpc: row.cpc ? Number(row.cpc) : null,
          cpm: Number(row.cpm || 0),
          alcance: Number(row.reach || 0),
          resultado_nombre,
          resultado_valor
        },
        // Auto-generated from live data — not a manual analyst note like in snapshot mode.
        recomendacion:
          ads.length > 0
            ? `Anuncio con mayor gasto: "${ads[0].nombre}" ($${ads[0].gasto.toFixed(2)}, CTR ${ads[0].ctr.toFixed(2)}%).`
            : "Aún no hay suficientes datos de anuncios individuales para esta campaña.",
        tendencia_semanal,
        ads
      };
    })
  );

  const resumen = {
    campanas_activas: campanas.length,
    invertido_total: Number(campanas.reduce((sum, c) => sum + c.metricas.gasto, 0).toFixed(2)),
    leads: campanas.reduce(
      (sum, c) => sum + (c.metricas.resultado_nombre === "Leads" ? c.metricas.resultado_valor : 0),
      0
    ),
    alcance_combinado: campanas.reduce((sum, c) => sum + c.metricas.alcance, 0)
  };

  return {
    modo: "live",
    actualizado: new Date().toISOString(),
    resumen,
    campanas,
    // Roadmap and historical counts reflect Michelle's real plans/records, not
    // something derivable from the API — always sourced from the snapshot.
    historico: SNAPSHOT.historico,
    roadmap: SNAPSHOT.roadmap
  };
}

export default async function handler(req, res) {
  const token = process.env.META_ACCESS_TOKEN;

  if (!token) {
    res.status(200).json(SNAPSHOT);
    return;
  }

  try {
    const live = await fetchLive(token, AD_ACCOUNT_ID);
    res.status(200).json(live);
  } catch (err) {
    res.status(200).json({
      ...SNAPSHOT,
      modo: "snapshot_fallback",
      error: String(err.message || err)
    });
  }
}
