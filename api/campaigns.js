// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-09-11T19:05:00+02:00",
  resumen: {
    campanas_activas: 5,
    invertido_total: 434.77,
    leads: 5,
    alcance_combinado: 484322
  },
  campanas: [
    {
      id: "120252187070040560",
      nombre: "FE 3% Ready to Buy: Retargeting Caliente",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 3 — Ready to Buy del funnel FE)",
      inicio: "2026-09-11",
      presupuesto_diario: null,
      ventana: "Encendida el 11 de septiembre — todavía sin impresiones registradas (normal en las primeras horas)",
      metricas: {
        gasto: 0,
        impresiones: 0,
        clicks: 0,
        ctr: 0,
        cpc: null,
        cpm: 0,
        alcance: 0,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "Ya está ACTIVE de punta a punta (campaña, ad set y los 6 anuncios). Construida siguiendo el plan de Félix: retargeting a quienes vieron 25%+ de los videos de Consideración + visitantes de la landing que no dejaron el formulario, excluyendo clientes y quienes ya agendaron. República Dominicana completa. Presupuesto $358.40 total hasta el 10 de octubre, mismo cierre que Consideración. Anuncios: Doña v2, Cupo v2, Te lo voy a decir v2, video B-01, y las artes de \"180,000 empresas\" y \"Desde el 31 de diciembre\". Todavía en $0 y sin impresiones — normal recién encendida, debería empezar a entregar en las próximas horas. Revisar en 2-3 días para ver qué creativo está tirando del gasto.",
      ads: []
    },
    {
      id: "120252085024140560",
      nombre: "FE 17% Consideración: Leads Septiembre",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 2 — Consideración del funnel FE)",
      inicio: "2026-09-04",
      presupuesto_diario: null,
      ventana: "Desde su lanzamiento (4 sep 2026) hasta hoy",
      metricas: {
        gasto: 80.22,
        impresiones: 8857,
        clicks: 265,
        ctr: 2.99,
        cpc: 0.30,
        cpm: 9.06,
        alcance: 4525,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 3
      },
      recomendacion:
        "Subió a 3 citas agendadas (costo por resultado bajó a $26.74). \"Operando a ciegas\" sigue siendo el creativo dominante en gasto ($61.17, CTR 2.88%) y el que sigue trayendo las citas. \"Scrolling (17%)\" mantiene buen CTR (3.79%) pero todavía sin citas atribuidas directamente.",
      tendencia_semanal: [
        { semana: "4–10 sep", gasto: 80.22, impresiones: 8857, alcance: 4525, resultado_valor: 3 }
      ],
      ads: [
        { nombre: "Operando a ciegas", gasto: 61.17, impresiones: 6115, clicks: 176, ctr: 2.88, cpc: 0.35, cpm: 10.00, resultado_nombre: "Citas agendadas", resultado_valor: 3 },
        { nombre: "Scrolling (17%)", gasto: 12.11, impresiones: 1899, clicks: 72, ctr: 3.79, cpc: 0.17, cpm: 6.38, resultado_nombre: null, resultado_valor: null },
        { nombre: "Hay empresarios", gasto: 5.31, impresiones: 547, clicks: 13, ctr: 2.38, cpc: 0.41, cpm: 9.71, resultado_nombre: null, resultado_valor: null },
        { nombre: "garbage in garbage out - Estática", gasto: 1.08, impresiones: 172, clicks: 3, ctr: 1.74, cpc: 0.36, cpm: 6.28, resultado_nombre: null, resultado_valor: null },
        { nombre: "4 formas de resolver FE - Estática", gasto: 0.43, impresiones: 87, clicks: 0, ctr: 0, cpc: null, cpm: 4.94, resultado_nombre: null, resultado_valor: null },
        { nombre: "Otros implementadores - Estática", gasto: 0.12, impresiones: 37, clicks: 1, ctr: 2.70, cpc: 0.12, cpm: 3.24, resultado_nombre: null, resultado_valor: null }
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
        gasto: 89.01,
        impresiones: 22756,
        clicks: 1147,
        ctr: 5.04,
        cpc: 0.08,
        cpm: 3.91,
        alcance: 11215,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 2
      },
      recomendacion:
        "Se mantiene en 2 citas agendadas (costo por resultado $44.51). \"Dia 1 llevando Account One de 30 a 100\" sigue concentrando el mayor gasto ($58.46) y buen CTR (4.79%) — sigue siendo el creativo a vigilar para las próximas citas.",
      tendencia_semanal: [
        { semana: "21–27 ago", gasto: 3.63, impresiones: 1213, alcance: 964, resultado_valor: null },
        { semana: "28 ago–3 sep", gasto: 45.25, impresiones: 13169, alcance: 7609, resultado_valor: 2 },
        { semana: "4–10 sep", gasto: 40.13, impresiones: 8374, alcance: 5307, resultado_valor: null }
      ],
      ads: [
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 58.46, impresiones: 13667, clicks: 655, ctr: 4.79, cpc: 0.09, cpm: 4.28, resultado_nombre: "Citas agendadas", resultado_valor: 2 },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 11.91, impresiones: 3289, clicks: 139, ctr: 4.23, cpc: 0.09, cpm: 3.62, resultado_nombre: null, resultado_valor: null },
        { nombre: "Comparativo Contadores", gasto: 8.55, impresiones: 3468, clicks: 255, ctr: 7.35, cpc: 0.03, cpm: 2.47, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 7.72, impresiones: 1700, clicks: 73, ctr: 4.29, cpc: 0.11, cpm: 4.54, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavía usas excel (nuevo)", gasto: 0.95, impresiones: 197, clicks: 2, ctr: 1.02, cpc: 0.48, cpm: 4.82, resultado_nombre: null, resultado_valor: null },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 1.42, impresiones: 435, clicks: 23, ctr: 5.29, cpc: 0.06, cpm: 3.26, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120251858423240560",
      nombre: "Campaña: Reconocimiento 80% FE",
      estado: "ACTIVE",
      objetivo: "Reconocimiento de marca (etapa 1 del funnel FE)",
      inicio: "2026-08-20",
      presupuesto_diario: null,
      ventana: "Desde su lanzamiento (20 ago 2026) hasta hoy",
      metricas: {
        gasto: 152.52,
        impresiones: 494735,
        clicks: 3131,
        ctr: 0.63,
        cpc: 0.05,
        cpm: 0.31,
        alcance: 228129,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "\"La llamada\" sigue concentrando el mayor gasto y es por lejos el mejor creativo (CPM $0.50). Las variantes de imagen estática (Carrusel/Arte) siguen con CTR bajo (0.15–0.20%) — solo aportan alcance. Con Consideración y Ready to Buy ya armadas, esta campaña sigue cumpliendo su rol de generar el público para retargeting. Cierra el 30 de septiembre.",
      tendencia_semanal: [
        { semana: "14–20 ago", gasto: 5.39, impresiones: 28184, alcance: 25170, resultado_valor: null },
        { semana: "21–27 ago", gasto: 95.30, impresiones: 281471, alcance: 147906, resultado_valor: null },
        { semana: "28 ago–3 sep", gasto: 39.02, impresiones: 157010, alcance: 87792, resultado_valor: null },
        { semana: "4–10 sep", gasto: 12.82, impresiones: 28071, alcance: 25683, resultado_valor: null }
      ],
      ads: [
        { nombre: "La llamada", gasto: 89.01, impresiones: 179677, clicks: 2458, ctr: 1.37, cpc: 0.04, cpm: 0.50, resultado_nombre: null, resultado_valor: null },
        { nombre: "Carrusel sera una de ellas", gasto: 42.06, impresiones: 206413, clicks: 351, ctr: 0.17, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 79470 },
        { nombre: "Carrusel mexico", gasto: 6.71, impresiones: 38783, clicks: 78, ctr: 0.20, cpc: 0.09, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 25235 },
        { nombre: "Carrusel la llamada", gasto: 4.46, impresiones: 22614, clicks: 43, ctr: 0.19, cpc: 0.10, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 16321 },
        { nombre: "mexico", gasto: 2.91, impresiones: 8960, clicks: 109, ctr: 1.22, cpc: 0.03, cpm: 0.32, resultado_nombre: null, resultado_valor: null },
        { nombre: "Arte mexico", gasto: 2.88, impresiones: 13993, clicks: 21, ctr: 0.15, cpc: 0.14, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 10697 },
        { nombre: "Arte la llamada", gasto: 2.17, impresiones: 11115, clicks: 20, ctr: 0.18, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 8585 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.68, impresiones: 9558, clicks: 17, ctr: 0.18, cpc: 0.10, cpm: 0.18, resultado_nombre: "Alcance", resultado_valor: 8699 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.64, impresiones: 3622, clicks: 34, ctr: 0.94, cpc: 0.02, cpm: 0.18, resultado_nombre: null, resultado_valor: null }
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
        gasto: 113.02,
        impresiones: 303479,
        clicks: 2796,
        ctr: 0.92,
        cpc: 0.04,
        cpm: 0.37,
        alcance: 240453,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 90110
      },
      recomendacion:
        "\"Como es tener un negocio en RD\" sigue liderando el gasto (CPM $0.36), aunque va bajando de peso relativo. \"La vida es un video juego\" mantiene el CTR más alto (1.77%) y sigue ganando presupuesto semana a semana — buen candidato para diversificar más allá del creativo dominante.",
      tendencia_semanal: [
        { semana: "14–20 ago", gasto: 29.16, impresiones: 79352, alcance: 73658, resultado_valor: 22794 },
        { semana: "21–27 ago", gasto: 27.61, impresiones: 73651, alcance: 67857, resultado_valor: 22306 },
        { semana: "28 ago–3 sep", gasto: 28.91, impresiones: 76026, alcance: 70942, resultado_valor: 22777 },
        { semana: "4–10 sep", gasto: 27.34, impresiones: 74453, alcance: 64265, resultado_valor: 22234 }
      ],
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 86.04, impresiones: 236146, clicks: 1600, ctr: 0.68, cpc: 0.05, cpm: 0.36, resultado_nombre: null, resultado_valor: null },
        { nombre: "La vida es un video juego", gasto: 26.58, impresiones: 66273, clicks: 1170, ctr: 1.77, cpc: 0.02, cpm: 0.40, resultado_nombre: null, resultado_valor: null },
        { nombre: "Si el negocio paga todo", gasto: 0.40, impresiones: 1060, clicks: 26, ctr: 2.45, cpc: 0.02, cpm: 0.38, resultado_nombre: null, resultado_valor: null }
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
      "Se restableció el acceso de escritura al portal (token de GitHub) para poder seguir actualizándolo directo."
    ],
    pendientes: [
      "Revisar Ready to Buy en 2–3 días para confirmar que ya está entregando (recién encendida, todavía en $0 y sin impresiones) y ver qué creativo está tirando del gasto.",
      "Pausar el anuncio de la oferta 25%/B-01 el 30 de septiembre — después de esa fecha el precio y el dato de comprobantes B-01 dejan de ser exactos y hay que revisar el copy.",
      "Completar la verificación de negocio (Business Verification) en el Business Manager de Meta para desbloquear el acceso a datos en vivo del portal."
    ],
    proximas_artes: [
      "Posible refresco de creativos de Awareness si la frecuencia sube (fatiga de anuncio)."
    ],
    proximos_pasos: [
      "Monitorear el arranque de Ready to Buy en los próximos días — las 3 etapas del funnel FE ya están corriendo en paralelo.",
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

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

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

      const [insightsResp, adInsightsResp] = await Promise.all([
        metaGet(`${c.id}/insights`, token, {
          fields: "spend,impressions,clicks,ctr,cpc,cpm,reach,actions",
          time_range: timeRange
        }).catch(() => ({ data: [] })),
        metaGet(`${c.id}/insights`, token, {
          level: "ad",
          fields: "ad_id,ad_name,spend,impressions,clicks,ctr,cpc,cpm,actions",
          time_range: timeRange,
          limit: "200"
        }).catch(() => ({ data: [] }))
      ]);

      const row = insightsResp.data?.[0] || {};
      const { resultado_nombre, resultado_valor } = pickResultado(row.actions);

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
        ventana: `Desde su lanzamiento (${fmtFechaEs(since)}) hasta hoy`,
        metricas: {
          gasto: Number(row.spend || 0),
          impresiones: Number(row.impressions || 0),
          clicks: Number(row.clicks || 0),
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
