// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-08-31T09:40:00+02:00",
  resumen: {
    campanas_activas: 3,
    invertido_total: 267.57,
    leads: 1,
    alcance_combinado: 301427
  },
  campanas: [
    {
      id: "120251975182080560",
      nombre: "Campaña contabilidad: Septiembre–Diciembre",
      estado: "ACTIVE",
      objetivo: "Leads (citas agendadas)",
      inicio: "2026-08-27",
      presupuesto_diario: 6.0,
      ventana: "Desde su lanzamiento (27 ago 2026) hasta hoy",
      metricas: {
        gasto: 23.43,
        impresiones: 7865,
        clicks: 466,
        ctr: 5.92,
        cpc: 0.05,
        cpm: 2.98,
        alcance: 4981,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 1
      },
      recomendacion:
        "CTR muy alto y CPC muy bajo, pero solo 1 cita agendada en 4 días. Confirmar que el evento de agendamiento está registrando bien en la landing antes de escalar presupuesto — esta cuenta ha tenido bugs de tracking antes.",
      ads: [
        { nombre: "Comparativo Contadores", gasto: 5.88, impresiones: 2629, clicks: 185, ctr: 7.04, cpc: 0.03, cpm: 2.24, resultado_nombre: null, resultado_valor: null },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 6.79, impresiones: 2202, clicks: 101, ctr: 4.59, cpc: 0.07, cpm: 3.08, resultado_nombre: null, resultado_valor: null },
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 8.25, impresiones: 2326, clicks: 150, ctr: 6.45, cpc: 0.06, cpm: 3.55, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 0.23, impresiones: 164, clicks: 13, ctr: 7.93, cpc: 0.02, cpm: 1.40, resultado_nombre: null, resultado_valor: null },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 0.25, impresiones: 124, clicks: 3, ctr: 2.42, cpc: 0.08, cpm: 2.02, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavía usas excel (nuevo)", gasto: 0.15, impresiones: 42, clicks: 0, ctr: 0, cpc: null, cpm: 3.57, resultado_nombre: null, resultado_valor: null }
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
        gasto: 122.85,
        impresiones: 395344,
        clicks: 2488,
        ctr: 0.63,
        cpc: 0.05,
        cpm: 0.31,
        alcance: 191385,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "\"La llamada\" concentra el 56% del gasto de esta campaña y es el mejor creativo por lejos (38,175 reproducciones a CPM $0.51). Vale la pena darle más presupuesto relativo y pausar variantes de imagen estática con CTR bajo (0.16–0.21%) que solo están aportando alcance, no interacción.",
      ads: [
        { nombre: "La llamada", gasto: 69.02, impresiones: 135131, clicks: 1925, ctr: 1.42, cpc: 0.04, cpm: 0.51, resultado_nombre: "Reproducciones", resultado_valor: 38175 },
        { nombre: "Carrusel sera una de ellas", gasto: 39.22, impresiones: 191086, clicks: 328, ctr: 0.17, cpc: 0.12, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 75195 },
        { nombre: "Arte mexico", gasto: 2.51, impresiones: 11801, clicks: 20, ctr: 0.17, cpc: 0.13, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 9257 },
        { nombre: "mexico", gasto: 2.42, impresiones: 7608, clicks: 88, ctr: 1.16, cpc: 0.03, cpm: 0.32, resultado_nombre: "Reproducciones", resultado_valor: 1192 },
        { nombre: "Carrusel la llamada", gasto: 3.09, impresiones: 15392, clicks: 25, ctr: 0.16, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 11325 },
        { nombre: "Arte la llamada", gasto: 1.94, impresiones: 9709, clicks: 18, ctr: 0.19, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 7705 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.66, impresiones: 9490, clicks: 16, ctr: 0.17, cpc: 0.10, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 8651 },
        { nombre: "Carrusel mexico", gasto: 0.86, impresiones: 5623, clicks: 12, ctr: 0.21, cpc: 0.07, cpm: 0.15, resultado_nombre: "Alcance", resultado_valor: 4805 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.59, impresiones: 3165, clicks: 30, ctr: 0.95, cpc: 0.02, cpm: 0.19, resultado_nombre: "Reproducciones", resultado_valor: 297 }
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
        gasto: 121.29,
        impresiones: 365493,
        clicks: 2745,
        ctr: 0.75,
        cpc: 0.04,
        cpm: 0.33,
        alcance: 301427,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 107018
      },
      recomendacion:
        "\"Como es tener un negocio en RD\" concentra el 92% del gasto y sigue rindiendo bien (CPM $0.33, casi 100K reproducciones). \"La vida es un video juego\" tiene el CTR más alto de la campaña (1.93%) con muy poco presupuesto — buen candidato para subirle gasto y diversificar más allá de un solo creativo dominante.",
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 111.28, impresiones: 339495, clicks: 2246, ctr: 0.66, cpc: 0.05, cpm: 0.33, resultado_nombre: "Reproducciones", resultado_valor: 98398 },
        { nombre: "La vida es un video juego", gasto: 9.86, impresiones: 25613, clicks: 494, ctr: 1.93, cpc: 0.02, cpm: 0.38, resultado_nombre: "Reproducciones", resultado_valor: 8509 },
        { nombre: "Si el negocio paga todo", gasto: 0.15, impresiones: 391, clicks: 5, ctr: 1.28, cpc: 0.03, cpm: 0.38, resultado_nombre: "Reproducciones", resultado_valor: 111 }
      ]
    }
  ],
  historico: {
    campanas_pausadas: 36,
    rango: "jul 2025 – ago 2026"
  }
};

async function fetchLive(token, adAccountId) {
  const fields = [
    "campaign_name",
    "objective",
    "status",
    "start_time",
    "daily_budget",
    "spend",
    "impressions",
    "clicks",
    "ctr",
    "cpc",
    "cpm",
    "reach"
  ].join(",");

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/act_${adAccountId}/insights?level=campaign&fields=${fields}&filtering=[{"field":"campaign.effective_status","operator":"IN","value":["ACTIVE"]}]&access_token=${token}`;

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Meta Graph API error ${res.status}: ${body}`);
  }
  return res.json();
}

export default async function handler(req, res) {
  const token = process.env.META_ACCESS_TOKEN;

  if (!token) {
    res.status(200).json(SNAPSHOT);
    return;
  }

  try {
    const live = await fetchLive(token, AD_ACCOUNT_ID);
    res.status(200).json({
      modo: "live",
      actualizado: new Date().toISOString(),
      datos: live
    });
  } catch (err) {
    res.status(200).json({
      ...SNAPSHOT,
      modo: "snapshot_fallback",
      error: String(err.message || err)
    });
  }
}
