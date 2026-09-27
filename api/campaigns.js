// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-09-27T10:00:00+02:00",
  resumen: {
    campanas_activas: 6,
    invertido_total: 1020.09,
    leads: 25,
    alcance_combinado: 613809
  },
  campanas: [
    {
      id: "120252328774890560",
      nombre: "Campaña Septiembre-Webinar",
      estado: "ACTIVE",
      objetivo: "Leads (registro al webinar del 29 de septiembre)",
      inicio: "2026-09-19",
      presupuesto_diario: 5,
      presupuesto_mensual: null,
      ventana: "Desde su lanzamiento (19 sep 2026) hasta hoy",
      metricas: {
        gasto: 42.58,
        impresiones: 24174,
        clicks: 1039,
        clics_enlace: 535,
        vistas_landing: 404,
        ctr: 4.30,
        cpc: 0.04,
        cpm: 1.76,
        alcance: 14668,
        resultado_nombre: "Registros al webinar",
        resultado_valor: 40
      },
      tendencia_semanal: [
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 20.75, impresiones: 9459, alcance: 7386, resultado_valor: 14 },
        { semana: "24–27 sep", desde: "2026-09-24", hasta: "2026-09-27", gasto: 21.83, impresiones: 14715, alcance: 10215, resultado_valor: 26 }
      ],
      recomendacion:
        "47 registros al webinar confirmados en el formulario (40 según el píxel de Meta — la diferencia normal entre lo que Meta atribuye y lo que llega al formulario) a $1.06 por registro vía Meta, bajando semana a semana. \"Imagen 2\" se consolidó como el anuncio más eficiente: 24 registros a $0.74 c/u, casi el doble de barato que \"Video 2\" (10 registros, $1.83 c/u) con menos gasto detrás. \"Video 1\" sigue siendo competitivo ($1.03, 5 registros). El webinar es mañana (29 de septiembre) — si queda presupuesto para este último empujón, debería ir a Imagen 2, el más probado de los tres.",
      ads: [
        { nombre: "Video 2", gasto: 18.31, impresiones: 8333, clicks: 735, ctr: 8.82, cpc: 0.02, cpm: 2.20, resultado_nombre: "Registros al webinar", resultado_valor: 10 },
        { nombre: "Imagen 2", gasto: 17.70, impresiones: 12810, clicks: 191, ctr: 1.49, cpc: 0.09, cpm: 1.38, resultado_nombre: "Registros al webinar", resultado_valor: 24 },
        { nombre: "Video 1", gasto: 5.15, impresiones: 2327, clicks: 96, ctr: 4.13, cpc: 0.05, cpm: 2.21, resultado_nombre: "Registros al webinar", resultado_valor: 5 },
        { nombre: "Imagen 3", gasto: 0.80, impresiones: 380, clicks: 10, ctr: 2.63, cpc: 0.08, cpm: 2.11, resultado_nombre: null, resultado_valor: null },
        { nombre: "Imagen 1", gasto: 0.62, impresiones: 324, clicks: 7, ctr: 2.16, cpc: 0.09, cpm: 1.91, resultado_nombre: "Registros al webinar", resultado_valor: 1 }
      ]
    },
    {
      id: "120252187070040560",
      nombre: "FE 3% Ready to Buy: Retargeting Caliente",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 3 — Ready to Buy del funnel FE)",
      inicio: "2026-09-11",
      presupuesto_diario: null,
      presupuesto_mensual: { sep: 358.40, oct: 537.60 },
      ventana: "Desde su lanzamiento (11 sep 2026) hasta hoy",
      metricas: {
        gasto: 215.18,
        impresiones: 33615,
        clicks: 798,
        clics_enlace: 509,
        vistas_landing: 315,
        ctr: 2.37,
        cpc: 0.27,
        cpm: 6.40,
        alcance: 14716,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 9
      },
      tendencia_semanal: [
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 81.11, impresiones: 11924, alcance: 6481, resultado_valor: 2 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 90.56, impresiones: 15210, alcance: 7877, resultado_valor: 5 },
        { semana: "24–27 sep", desde: "2026-09-24", hasta: "2026-09-27", gasto: 43.51, impresiones: 6481, alcance: 4661, resultado_valor: 2 }
      ],
      recomendacion:
        "Subió de 8 a 9 citas agendadas, costo por resultado $23.91 — se mantiene estable, casi igual al refresco anterior ($25.17). \"Faltan 180,000 empresas\" sigue como el anuncio con más gasto ($82.78) pero \"180,000 empresas-Imagen\" sigue siendo el más eficiente por cita ($18.10 vs $20.70), aunque la brecha se achicó. \"Doña vs 2\", \"te lo voy a decir v2\" y \"Desde el 31 de diciembre\" ya llevan más de 2 semanas sin ninguna cita propia pese a seguir con gasto activo — son los primeros candidatos a pausar para redirigir ese presupuesto a los 2 anuncios que sí convierten.",
      ads: [
        { nombre: "Faltan 180,000 empresas", gasto: 82.78, impresiones: 11839, clicks: 314, ctr: 2.65, cpc: 0.26, cpm: 6.99, resultado_nombre: "Citas agendadas", resultado_valor: 4 },
        { nombre: "180,000 empresas-Imagen", gasto: 72.41, impresiones: 14451, clicks: 300, ctr: 2.08, cpc: 0.24, cpm: 5.01, resultado_nombre: "Citas agendadas", resultado_valor: 4 },
        { nombre: "Cupo v2", gasto: 32.72, impresiones: 4225, clicks: 105, ctr: 2.49, cpc: 0.31, cpm: 7.74, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Doña vs 2", gasto: 17.19, impresiones: 1995, clicks: 48, ctr: 2.41, cpc: 0.36, cpm: 8.62, resultado_nombre: null, resultado_valor: null },
        { nombre: "te lo voy a decir v2", gasto: 6.69, impresiones: 810, clicks: 25, ctr: 3.09, cpc: 0.27, cpm: 8.26, resultado_nombre: null, resultado_valor: null },
        { nombre: "Desde el 31 de diciembre", gasto: 3.39, impresiones: 295, clicks: 6, ctr: 2.03, cpc: 0.57, cpm: 11.49, resultado_nombre: null, resultado_valor: null }
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
        gasto: 240.97,
        impresiones: 27399,
        clicks: 772,
        clics_enlace: 476,
        vistas_landing: 319,
        ctr: 2.82,
        cpc: 0.31,
        cpm: 8.79,
        alcance: 11927,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 10
      },
      recomendacion:
        "Se mantiene en 10 citas agendadas, costo por resultado $24.10 (estable respecto a $23.54). Sigue pendiente de confirmar con Félix el plan de sacar 2-3 anuncios a un ad set nuevo con presupuesto propio, para que no dependa solo de \"Operando a ciegas\" — que sigue concentrando la enorme mayoría del gasto visible a nivel de anuncio ($209.44 de $220.45, 10 de las 10 citas). \"Scrolling (17%) - Copy\" empezó a recibir algo de gasto ($0.13) por primera vez, señal de que el algoritmo está empezando a probarlo — vale la pena ver si eso continúa antes de forzar la separación manual, o si conviene acelerar el plan con Félix esta semana.",
      tendencia_semanal: [
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 66.44, impresiones: 7808, alcance: 4034, resultado_valor: 2 },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 79.31, impresiones: 8122, alcance: 5230, resultado_valor: 6 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 67.54, impresiones: 8378, alcance: 5564, resultado_valor: 1 },
        { semana: "24–27 sep", desde: "2026-09-24", hasta: "2026-09-27", gasto: 27.68, impresiones: 3091, alcance: 2476, resultado_valor: 1 }
      ],
      ads: [
        { nombre: "Operando a ciegas", gasto: 209.44, impresiones: 23150, clicks: 626, ctr: 2.70, cpc: 0.33, cpm: 9.05, resultado_nombre: "Citas agendadas", resultado_valor: 10 },
        { nombre: "Hay empresarios", gasto: 6.65, impresiones: 692, clicks: 15, ctr: 2.17, cpc: 0.44, cpm: 9.61, resultado_nombre: null, resultado_valor: null },
        { nombre: "4 formas de resolver FE - Estática", gasto: 2.57, impresiones: 269, clicks: 5, ctr: 1.86, cpc: 0.51, cpm: 9.55, resultado_nombre: null, resultado_valor: null },
        { nombre: "Otros implementadores - Estática", gasto: 1.66, impresiones: 212, clicks: 9, ctr: 4.25, cpc: 0.18, cpm: 7.83, resultado_nombre: null, resultado_valor: null },
        { nombre: "Scrolling (17%) - Copy", gasto: 0.13, impresiones: 31, clicks: 1, ctr: 3.23, cpc: 0.13, cpm: 4.19, resultado_nombre: null, resultado_valor: null }
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
        gasto: 186.78,
        impresiones: 42879,
        clicks: 1888,
        clics_enlace: 1117,
        vistas_landing: 868,
        ctr: 4.40,
        cpc: 0.10,
        cpm: 4.36,
        alcance: 17097,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 6
      },
      recomendacion:
        "Sigue en 6 citas agendadas acumuladas desde hace 2 refrescos — el gasto sigue subiendo semana a semana sin sumar citas nuevas, la señal de estancamiento más clara que ha mostrado esta campaña. \"Dia 1 llevando Account One de 30 a 100\" sigue liderando (5 de las 6 citas, $23.68/cita) y \"Comparativo Contadores\" se mantiene en su única cita ($27.11/cita, subiendo de costo). Los otros 5 creativos siguen sin ninguna cita propia. Con casi 5 semanas de los mismos 6 videos y el costo por cita subiendo, meterle 1-2 artes estáticas nuevas deja de ser \"pendiente sin urgencia\" — es la explicación más probable de por qué dejó de sumar citas.",
      tendencia_semanal: [
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 43.31, impresiones: 13033, alcance: 7449, resultado_valor: 2 },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 39.52, impresiones: 8288, alcance: 5348, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 41.26, impresiones: 9220, alcance: 6111, resultado_valor: 2 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 42.87, impresiones: 8975, alcance: 5420, resultado_valor: 2 },
        { semana: "24–27 sep", desde: "2026-09-24", hasta: "2026-09-27", gasto: 19.82, impresiones: 3363, alcance: 2314, resultado_valor: null }
      ],
      ads: [
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 118.39, impresiones: 26641, clicks: 1156, ctr: 4.34, cpc: 0.10, cpm: 4.44, resultado_nombre: "Citas agendadas", resultado_valor: 5 },
        { nombre: "Comparativo Contadores", gasto: 27.11, impresiones: 7123, clicks: 404, ctr: 5.67, cpc: 0.07, cpm: 3.81, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 21.87, impresiones: 5017, clicks: 195, ctr: 3.89, cpc: 0.11, cpm: 4.36, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 11.09, impresiones: 2412, clicks: 91, ctr: 3.77, cpc: 0.12, cpm: 4.60, resultado_nombre: null, resultado_valor: null },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 4.91, impresiones: 1168, clicks: 34, ctr: 2.91, cpc: 0.14, cpm: 4.20, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavia usas excel (nuevo)", gasto: 3.41, impresiones: 518, clicks: 8, ctr: 1.54, cpc: 0.43, cpm: 6.58, resultado_nombre: null, resultado_valor: null }
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
        gasto: 181.05,
        impresiones: 550988,
        clicks: 3863,
        clics_enlace: 758,
        vistas_landing: 165,
        ctr: 0.70,
        cpc: 0.05,
        cpm: 0.33,
        alcance: 247748,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "Sigue cumpliendo su rol de generar audiencia para retargeting: 247,748 personas alcanzadas a un CPM de $0.33. El gasto semanal se mantiene en un piso bajo (~$6-12/semana en las últimas 4 semanas) porque el ad set ya cubrió a la mayor parte de la audiencia fría disponible — normal en una campaña de reconocimiento con más de 5 semanas activa. Como Consideración y Ready to Buy ya están entregando citas de forma consistente, no hace falta reactivar el gasto aquí; puede quedarse así hasta que cierre el 30 de septiembre sin que afecte al resto del funnel.",
      tendencia_semanal: [
        { semana: "20–26 ago", desde: "2026-08-20", hasta: "2026-08-26", gasto: 92.95, impresiones: 282236, alcance: 154531, resultado_valor: null },
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 44.89, impresiones: 180088, alcance: 94738, resultado_valor: null },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 12.92, impresiones: 28881, alcance: 26597, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 12.50, impresiones: 24980, alcance: 22210, resultado_valor: null },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 11.65, impresiones: 22541, alcance: 21120, resultado_valor: null },
        { semana: "24–27 sep", desde: "2026-09-24", hasta: "2026-09-27", gasto: 6.15, impresiones: 12267, alcance: 11656, resultado_valor: null }
      ],
      ads: [
        { nombre: "La llamada", gasto: 116.86, impresiones: 234469, clicks: 3153, ctr: 1.34, cpc: 0.04, cpm: 0.50, resultado_nombre: "Reproducciones", resultado_valor: 65425 },
        { nombre: "Carrusel sera una de ellas", gasto: 42.06, impresiones: 206413, clicks: 351, ctr: 0.17, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 79470 },
        { nombre: "Carrusel mexico", gasto: 6.71, impresiones: 38783, clicks: 78, ctr: 0.20, cpc: 0.09, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 25235 },
        { nombre: "Carrusel la llamada", gasto: 4.46, impresiones: 22614, clicks: 43, ctr: 0.19, cpc: 0.10, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 16321 },
        { nombre: "mexico", gasto: 3.58, impresiones: 10360, clicks: 144, ctr: 1.39, cpc: 0.02, cpm: 0.35, resultado_nombre: "Reproducciones", resultado_valor: 1772 },
        { nombre: "Arte mexico", gasto: 2.88, impresiones: 13993, clicks: 21, ctr: 0.15, cpc: 0.14, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 10697 },
        { nombre: "Arte la llamada", gasto: 2.17, impresiones: 11115, clicks: 20, ctr: 0.18, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 8585 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.68, impresiones: 9558, clicks: 17, ctr: 0.18, cpc: 0.10, cpm: 0.18, resultado_nombre: "Alcance", resultado_valor: 8699 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.66, impresiones: 3688, clicks: 36, ctr: 0.98, cpc: 0.02, cpm: 0.18, resultado_nombre: "Reproducciones", resultado_valor: 340 }
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
        gasto: 153.53,
        impresiones: 405166,
        clicks: 3580,
        ctr: 0.88,
        cpc: 0.04,
        cpm: 0.38,
        alcance: 307653,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 120438
      },
      recomendacion:
        "120,438 reproducciones completas acumuladas a un costo marginal (~$0.0013 por reproducción). El gasto se recuperó a su nivel habitual esta última semana ($13.77, ya sobre 4 días) después de la caída del refresco anterior (que resultó ser solo el corte de fecha de una semana parcial, no fatiga) — confirma que no hace falta tocar nada. Sigue siendo una campaña de largo plazo con solo 3 creativos activos y entrega estable.",
      // resultado_valor intentionally left null here (unlike other campaigns):
      // reproducciones cuestan fracciones de centavo, así que su "costo por
      // resultado" redondea a $0.00 y rompe la comparación semanal automática,
      // que está pensada para comparar costo por lead/cita entre campañas.
      tendencia_semanal: [
        { semana: "20–26 ago", desde: "2026-08-20", hasta: "2026-08-26", gasto: 27.04, impresiones: 72589, alcance: 67404, resultado_valor: null },
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 29.75, impresiones: 76453, alcance: 72431, resultado_valor: null },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 27.33, impresiones: 76504, alcance: 67373, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 28.13, impresiones: 70800, alcance: 65708, resultado_valor: null },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 27.51, impresiones: 73120, alcance: 66343, resultado_valor: null },
        { semana: "24–27 sep", desde: "2026-09-24", hasta: "2026-09-27", gasto: 13.77, impresiones: 35700, alcance: 33606, resultado_valor: null }
      ],
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 116.40, impresiones: 315367, clicks: 2051, ctr: 0.65, cpc: 0.06, cpm: 0.37, resultado_nombre: "Reproducciones completas", resultado_valor: 91550 },
        { nombre: "La vida es un video juego", gasto: 36.42, impresiones: 87941, clicks: 1491, ctr: 1.70, cpc: 0.02, cpm: 0.41, resultado_nombre: "Reproducciones completas", resultado_valor: 28328 },
        { nombre: "Si el negocio paga todo", gasto: 0.71, impresiones: 1858, clicks: 38, ctr: 2.05, cpc: 0.02, cpm: 0.38, resultado_nombre: "Reproducciones completas", resultado_valor: 560 }
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
      "Se agregó al portal el embudo detallado de Facturación Electrónica (Reconocimiento → Consideración → Ready to Buy): impresiones, alcance, clics, vistas de landing y resultado por etapa, con el presupuesto mensual acordado con Félix en cada campaña. Se actualiza solo con cada refresco de datos.",
      "Se agregó la comparación semanal de costo por resultado entre campañas (tabla arriba de \"Campañas activas ahora\"), con recomendaciones automáticas debajo calculadas directo del dato de cada semana — no dependen de texto escrito a mano, así que no se desactualizan.",
      "Se refrescaron métricas, tendencia semanal y las recomendaciones de cada campaña con datos reales al 22 de septiembre — se corrigió que la recomendación de Ready to Buy seguía diciendo \"sus primeros 4 días activa\" con la campaña ya en 11 días. De ahora en adelante, cada refresco de datos debe reescribir el texto de recomendación de cada campaña, no solo las cifras.",
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 23 de septiembre. Hallazgos clave: el Webinar llegó a 12 registros vía Meta (subió de 8 en 2 días) y \"Video 1\" resultó ser más barato que \"Video 2\" ($0.82 vs $1.85 por registro) — la recomendación ahora sugiere repartir presupuesto entre ambos, no solo Video 2. Consideración empeoró por segunda semana seguida ($50.88 → $63.29 por resultado), así que subir una variante de \"Operando a ciegas\" pasó a ser urgente. Contabilidad, en cambio, tuvo su mejor semana hasta ahora ($20.18 por resultado) y se está estabilizando.",
      "Félix pidió no depender solo de \"Operando a ciegas\" en Consideración — quiere forzar más exposición a los demás anuncios. Se confirmó en Meta que la campaña corre con CBO a nivel de campaña y los 6 anuncios comparten un solo ad set, así que no existe un % manual por anuncio ahí adentro; la única forma real de garantizarles gasto es sacarlos a un ad set nuevo con presupuesto propio. Queda pendiente de confirmar con Félix cuáles anuncios y con qué presupuesto.",
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 26 de septiembre. Hallazgos clave: el Webinar llegó a 27 registros confirmados (29 según el píxel de Meta) y \"Imagen 2\" dio un giro fuerte — pasó a liderar con 13 registros a $0.85 c/u, más barato que \"Video 2\" ($1.83, antes el líder). Ready to Buy sumó su 8va cita. Consideración sumó su 10ma cita pero sigue con \"Operando a ciegas\" concentrando casi todo el gasto visible.",
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 27 de septiembre. Hallazgos clave: el Webinar (es mañana) ya suma 47 registros confirmados con \"Imagen 2\" consolidada como el anuncio más eficiente (24 registros a $0.74 c/u). Ready to Buy y Consideración sumaron una cita más cada una (9 y 10 respectivamente). Contabilidad sigue estancada en 6 citas por segundo refresco seguido pese a más gasto — la señal más clara hasta ahora de que necesita creativos nuevos, no solo más presupuesto.",
    ],
    pendientes: [
      "Contabilidad lleva 2 refrescos seguidos sin sumar ninguna cita nueva pese a más gasto semana a semana — meterle 1-2 artes estáticas ya no es un \"nice to have\", es la explicación más probable del estancamiento. Sigue siendo 100% video con los mismos 6 creativos desde que se armó.",
      "Sacar 2-3 anuncios de Consideración (los con algo de CTR, como \"Hay empresarios\") a un ad set nuevo con presupuesto propio, para que Félix vea más variedad de creativos sin depender del algoritmo — pendiente de confirmar con Félix cuáles anuncios y cuánto presupuesto asignarles. \"Scrolling (17%) - Copy\" empezó a recibir algo de gasto por primera vez ($0.13), vale la pena ver si el algoritmo lo sigue probando antes de forzar la separación manual.",
      "Webinar es mañana (29 de septiembre) — con 47 registros confirmados, si queda presupuesto para el empujón final debería ir a \"Imagen 2\", el anuncio más barato y con más volumen ($0.74/registro).",
      "Todavía no hay visibilidad de ventas/contratos cerrados — los leads/citas agendadas del funnel FE + Contabilidad son lo máximo que mide Meta Ads (llega hasta la cita agendada). Falta que Félix comparta desde su CRM/GHL cuántas de esas citas se convirtieron en cliente, para poder medir el resultado real del negocio y no solo el volumen de leads.",
      "Hallazgo de Naomi (monitoreo de leads): está llegando un volumen notable de negocios de retail y restaurantes preguntando específicamente si el servicio se conecta con su punto de venta (POS) — para ese perfil de negocio, la Facturación Electrónica tiene que salir integrada directo de la caja/POS, no como trámite aparte. Decidir con Félix: (1) si Account One ofrece o puede conectar con integración de POS, vale crear un ángulo de anuncio específico para retail/restaurantes mencionándolo, porque hay demanda represada ahí; (2) si no la ofrece, aclarar esto en la landing o en el primer mensaje de contacto para evitar leads mal calificados que entran esperando algo que no se les puede dar. Corto plazo: pedirle a Naomi que cuantifique cuántos leads mencionan POS para dimensionar el segmento.",
      "Seguir de cerca Ready to Buy: \"Faltan 180,000 empresas\" pasó a gastar más pero \"180,000 empresas-Imagen\" sigue siendo el más barato por cita ($17.81 vs $24.61) — evaluar pausar \"Doña vs 2\", \"te lo voy a decir v2\" y \"Desde el 31 de diciembre\", que llevan más de 2 semanas sin ninguna cita propia.",
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
          desde: w.date_start,
          hasta: w.date_stop,
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
