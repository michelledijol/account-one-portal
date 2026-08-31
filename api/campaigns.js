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
        "CTR muy alto y CPC muy bajo, pero solo 1 cita agendada en 4 días. Confirmar que el evento de agendamiento está registrando bien en la landing antes de escalar presupuesto — esta cuenta ha tenido bugs de tracking antes."
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
        "CPM muy eficiente para construir audiencia. Mantener el ritmo actual y preparar el paso a la etapa de Consideración cuando el alcance objetivo se cumpla."
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
        "Campaña estable de largo plazo con buen costo por reproducción. Revisar cada 60–90 días si conviene refrescar los creativos por fatiga (frecuencia todavía saludable en 1.21)."
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
