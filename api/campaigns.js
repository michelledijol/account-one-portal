// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-09-04T17:20:00+02:00",
  resumen: {
    campanas_activas: 4,
    invertido_total: 314.58,
    leads: 2,
    alcance_combinado: 510964
  },
  campanas: [
    {
      id: "120252085024140560",
      nombre: "FE 17% Consideración: Leads Septiembre",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 2 — Consideración del funnel FE)",
      inicio: "2026-09-04",
      presupuesto_diario: null,
      ventana: "Desde su lanzamiento (4 sep 2026) hasta hoy",
      metricas: {
        gasto: 4.00,
        impresiones: 500,
        clicks: 16,
        ctr: 3.20,
        cpc: 0.25,
        cpm: 8.00,
        alcance: 385,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "Ya arrancó a gastar ($4.00, CTR 3.20% — bastante alto para ser el primer día). \"Hay empresarios\" y \"Operando a ciegas\" concentran el gasto inicial. Aún sin citas agendadas atribuidas; normal a menos de 24h de encendida.",
      ads: [
        { nombre: "Hay empresarios", gasto: 1.66, impresiones: 165, clicks: 3, ctr: 1.82, cpc: 0.55, cpm: 10.06, resultado_nombre: null, resultado_valor: null },
        { nombre: "Operando a ciegas", gasto: 1.46, impresiones: 144, clicks: 7, ctr: 4.86, cpc: 0.21, cpm: 10.14, resultado_nombre: null, resultado_valor: null },
        { nombre: "Scrolling (17%)", gasto: 0.49, impresiones: 98, clicks: 6, ctr: 6.12, cpc: 0.08, cpm: 5.00, resultado_nombre: null, resultado_valor: null },
        { nombre: "Garbage in garbage out - Estática", gasto: 0.21, impresiones: 47, clicks: 0, ctr: 0, cpc: null, cpm: 4.47, resultado_nombre: null, resultado_valor: null },
        { nombre: "4 formas de resolver FE - Estática", gasto: 0.13, impresiones: 28, clicks: 0, ctr: 0, cpc: null, cpm: 4.64, resultado_nombre: null, resultado_valor: null },
        { nombre: "Otros implementadores - Estática", gasto: 0.05, impresiones: 18, clicks: 0, ctr: 0, cpc: null, cpm: 2.78, resultado_nombre: null, resultado_valor: null }
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
        gasto: 50.36,
        impresiones: 14728,
        clicks: 795,
        ctr: 5.40,
        cpc: 0.06,
        cpm: 3.42,
        alcance: 8130,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 2
      },
      recomendacion:
        "Se mantienen las 2 citas agendadas (costo por resultado $25.18, ambas atribuidas a \"Dia 1 llevando Account One de 30 a 100\"). El evento sigue registrando bien en la landing. Ese mismo anuncio concentra el mayor gasto y mejor CTR (5.08%); vale la pena seguir dándole prioridad.",
      ads: [
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 29.30, impresiones: 7558, clicks: 384, ctr: 5.08, cpc: 0.08, cpm: 3.88, resultado_nombre: "Citas agendadas", resultado_valor: 2 },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 9.71, impresiones: 2927, clicks: 131, ctr: 4.48, cpc: 0.07, cpm: 3.32, resultado_nombre: null, resultado_valor: null },
        { nombre: "Comparativo Contadores", gasto: 8.39, impresiones: 3429, clicks: 247, ctr: 7.20, cpc: 0.03, cpm: 2.45, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 2.02, impresiones: 557, clicks: 27, ctr: 4.85, cpc: 0.07, cpm: 3.63, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavía usas excel (nuevo)", gasto: 0.60, impresiones: 114, clicks: 2, ctr: 1.75, cpc: 0.30, cpm: 5.26, resultado_nombre: null, resultado_valor: null },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 0.34, impresiones: 143, clicks: 4, ctr: 2.80, cpc: 0.09, cpm: 2.38, resultado_nombre: null, resultado_valor: null }
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
        gasto: 140.15,
        impresiones: 467663,
        clicks: 2814,
        ctr: 0.60,
        cpc: 0.05,
        cpm: 0.30,
        alcance: 216170,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "\"La llamada\" sigue concentrando el 55% del gasto y es por lejos el mejor creativo (43,487 reproducciones a CPM $0.50). Las variantes de imagen estática (Carrusel/Arte) siguen con CTR bajo (0.15–0.20%) — solo aportan alcance. Con la etapa de Consideración ya activa, esta campaña cumplió su objetivo de generar el público para retargeting.",
      ads: [
        { nombre: "La llamada", gasto: 77.01, impresiones: 153370, clicks: 2156, ctr: 1.41, cpc: 0.04, cpm: 0.50, resultado_nombre: "Reproducciones", resultado_valor: 43487 },
        { nombre: "Carrusel sera una de ellas", gasto: 42.06, impresiones: 206413, clicks: 351, ctr: 0.17, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 79470 },
        { nombre: "Carrusel mexico", gasto: 6.71, impresiones: 38783, clicks: 78, ctr: 0.20, cpc: 0.09, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 25235 },
        { nombre: "Carrusel la llamada", gasto: 4.46, impresiones: 22614, clicks: 43, ctr: 0.19, cpc: 0.10, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 16321 },
        { nombre: "Arte mexico", gasto: 2.88, impresiones: 13993, clicks: 21, ctr: 0.15, cpc: 0.14, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 10697 },
        { nombre: "mexico", gasto: 2.58, impresiones: 8226, clicks: 94, ctr: 1.14, cpc: 0.03, cpm: 0.31, resultado_nombre: "Reproducciones", resultado_valor: 1287 },
        { nombre: "Arte la llamada", gasto: 2.17, impresiones: 11115, clicks: 20, ctr: 0.18, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 8585 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.68, impresiones: 9558, clicks: 17, ctr: 0.18, cpc: 0.10, cpm: 0.18, resultado_nombre: "Alcance", resultado_valor: 8699 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.60, impresiones: 3591, clicks: 34, ctr: 0.95, cpc: 0.02, cpm: 0.17, resultado_nombre: "Reproducciones", resultado_valor: 317 }
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
        gasto: 120.07,
        impresiones: 348030,
        clicks: 2761,
        ctr: 0.79,
        cpc: 0.04,
        cpm: 0.34,
        alcance: 286279,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 102565
      },
      recomendacion:
        "\"Como es tener un negocio en RD\" sigue concentrando el 89% del gasto (CPM $0.34, más de 90K reproducciones en 30 días). \"La vida es un video juego\" mantiene el CTR más alto (1.88%) con poco presupuesto — sigue siendo buen candidato para diversificar más allá del creativo dominante.",
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 106.36, impresiones: 313354, clicks: 2107, ctr: 0.67, cpc: 0.05, cpm: 0.34, resultado_nombre: "Reproducciones", resultado_valor: 90904 },
        { nombre: "La vida es un video juego", gasto: 13.49, impresiones: 34078, clicks: 641, ctr: 1.88, cpc: 0.02, cpm: 0.40, resultado_nombre: "Reproducciones", resultado_valor: 11489 },
        { nombre: "Si el negocio paga todo", gasto: 0.22, impresiones: 598, clicks: 13, ctr: 2.17, cpc: 0.02, cpm: 0.37, resultado_nombre: "Reproducciones", resultado_valor: 172 }
      ]
    }
  ],
  historico: {
    campanas_pausadas: 36,
    rango: "jul 2025 – ago 2026"
  },
  roadmap: {
    completado: [
      "Se lanzó la campaña de Consideración (retargeting) del funnel FE: \"FE 17% Consideración: Leads Septiembre\", el 4 de septiembre.",
      "Ya van 2 citas agendadas en la campaña de Contabilidad Sept–Dic — se confirmó que el evento de tracking sí está registrando bien en la landing.",
      "Se construyó y publicó este portal de reportes (account-one-portal.vercel.app), con vista por campaña, por creativo, y este roadmap.",
      "Se dejó lista la conexión para que las actualizaciones del portal se puedan hacer directo, sin copiar y pegar código a mano.",
      "Se intentó conectar el portal a datos en vivo de Meta: se generó el token y se confirmó que la cuenta publicitaria está bien asignada, pero se detectó que el Business Manager tiene bloqueada la verificación de negocio — pendiente resolver el lunes con Félix."
    ],
    pendientes: [
      "Corregir la landing de Facturación Electrónica para que refleje la etapa actual del descuento (verificar que el mensaje/monto mostrado corresponda al tramo vigente, no a una etapa anterior).",
      "Seguir confirmando que el evento de \"citas agendadas\" registra bien en la landing de Contabilidad Sept–Dic — ya van 2 registradas, buena señal, pero vale la pena vigilarlo por el historial de bugs de tracking.",
      "Decidir el futuro de RST_CLAUDE (test de Audience Network/Stories) según la calidad de los leads.",
      "Completar la verificación de negocio (Business Verification) en el Business Manager de Meta para desbloquear el acceso a datos en vivo del portal — pendiente, Félix la haría el lunes."
    ],
    proximas_artes: [
      "Agregar artes estáticas y carruseles a la campaña de Contabilidad Sept–Dic (hasta ahora solo tiene video).",
      "Posible refresco de creativos de Awareness si la frecuencia sube (fatiga de anuncio)."
    ],
    proximos_pasos: [
      "Etapa 2 (Consideración) del funnel FE ya está encendida: campaña \"FE 17% Consideración: Leads Septiembre\", lanzada el 4 de septiembre (un día después de lo previsto).",
      "Evaluar la campaña de Contabilidad en 7–10 días antes de subir presupuesto.",
      "Monitorear el arranque de la nueva campaña de Consideración en los próximos días."
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
