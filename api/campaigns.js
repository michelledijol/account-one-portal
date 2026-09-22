// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-09-22T12:20:00+02:00",
  resumen: {
    campanas_activas: 6,
    invertido_total: 819.45,
    leads: 22,
    alcance_combinado: 557141
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
        gasto: 13.43,
        impresiones: 6151,
        clicks: 489,
        clics_enlace: 224,
        vistas_landing: 158,
        ctr: 7.95,
        cpc: 0.03,
        cpm: 2.18,
        alcance: 5110,
        resultado_nombre: "Registros al webinar",
        resultado_valor: 8
      },
      tendencia_semanal: [],
      recomendacion:
        "8 registros al webinar vía Meta Ads en sus primeros 3 días ($1.68 por registro), de los 12 registros totales confirmados — los otros 4 llegaron por fuera de esta campaña (orgánico/otros canales). El CTR general es alto (7.95%) gracias a \"Video 2\", que solo con $11.15 de gasto trae 6 de los 8 registros y un CTR de 8.98% — es, por lejos, el creativo ganador hasta ahora. \"Video 1\" tiene el costo por registro más bajo de todos ($0.48) pero con apenas $0.96 gastado — muestra insuficiente para sacar conclusiones todavía, aunque vale la pena vigilarlo. Las 3 artes estáticas (Imagen 1, 2 y 3) casi no han recibido presupuesto y ninguna tiene registros aún, normal con solo $5/día repartido entre 5 anuncios. Con el webinar el 29 de septiembre acercándose, lo más eficiente es subir el presupuesto diario ahora concentrándolo en \"Video 2\" (y darle más chance a \"Video 1\" antes de descartar las artes) en vez de esperar a que el ad set salga solo de su fase de aprendizaje con $5/día.",
      ads: [
        { nombre: "Video 2", gasto: 11.15, impresiones: 5135, clicks: 461, ctr: 8.98, cpc: 0.02, cpm: 2.17, resultado_nombre: "Registros al webinar", resultado_valor: 6 },
        { nombre: "Video 1", gasto: 0.96, impresiones: 384, clicks: 14, ctr: 3.65, cpc: 0.07, cpm: 2.50, resultado_nombre: "Registros al webinar", resultado_valor: 2 },
        { nombre: "Imagen 2", gasto: 1.10, impresiones: 507, clicks: 11, ctr: 2.17, cpc: 0.10, cpm: 2.17, resultado_nombre: null, resultado_valor: null },
        { nombre: "Imagen 3", gasto: 0.21, impresiones: 92, clicks: 2, ctr: 2.17, cpc: 0.11, cpm: 2.28, resultado_nombre: null, resultado_valor: null },
        { nombre: "Imagen 1", gasto: 0.01, impresiones: 33, clicks: 1, ctr: 3.03, cpc: 0.01, cpm: 0.30, resultado_nombre: null, resultado_valor: null }
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
        gasto: 148.54,
        impresiones: 22474,
        clicks: 579,
        clics_enlace: 358,
        vistas_landing: 212,
        ctr: 2.58,
        cpc: 0.26,
        cpm: 6.61,
        alcance: 10395,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 7
      },
      tendencia_semanal: [
        { semana: "10–16 sep", gasto: 81.11, impresiones: 11924, alcance: 6481, resultado_valor: 2 },
        { semana: "17–22 sep", gasto: 67.43, impresiones: 10550, alcance: 5743, resultado_valor: 5 }
      ],
      recomendacion:
        "7 citas agendadas acumuladas, costo por resultado de $21.22 — sigue siendo la etapa más cara del funnel, esperable siendo el público más caliente y pequeño (retargeting de gente que ya vio Consideración). La semana más reciente mejoró fuerte: bajó de $40.56 a $13.49 por resultado. Es normal que un ad set nuevo tarde 1–2 semanas en salir de fase de aprendizaje de Meta y estabilizarse — esta caída de costo probablemente sea justo eso, no un cambio de creativo o audiencia. Solo tiene 6 anuncios y ninguno se ha refrescado desde que se armó la campaña; si el costo vuelve a subir en la próxima semana (en vez de seguir bajando), ahí sí valdría meterle una variante nueva en vez de esperar más.",
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
        gasto: 196.63,
        impresiones: 21867,
        clicks: 605,
        clics_enlace: 384,
        vistas_landing: 252,
        ctr: 2.77,
        cpc: 0.33,
        cpm: 8.99,
        alcance: 9933,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 9
      },
      recomendacion:
        "9 citas agendadas acumuladas, costo por resultado de $21.85. La última semana subió fuerte, de $13.22 a $50.88 (solo 1 cita). \"Operando a ciegas\" sigue siendo el creativo que carga casi todo el gasto de esta campaña desde que se lanzó el 4 de septiembre, sin ningún refresco — con casi 3 semanas corriendo el mismo anuncio a la misma audiencia, fatiga de creativo es la explicación más probable, más que un problema de audiencia. Recomendación concreta: subir una variante nueva de \"Operando a ciegas\" (mismo ángulo, otro gancho o formato) antes de tocar presupuesto — si el costo no baja con un creativo fresco, ahí sí revisar audiencia.",
      tendencia_semanal: [
        { semana: "3–9 sep", gasto: 66.44, impresiones: 7808, alcance: 4034, resultado_valor: 2 },
        { semana: "10–16 sep", gasto: 79.31, impresiones: 8122, alcance: 5230, resultado_valor: 6 },
        { semana: "17–22 sep", gasto: 50.88, impresiones: 5937, alcance: 4147, resultado_valor: 1 }
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
        gasto: 156.14,
        impresiones: 36973,
        clicks: 1581,
        clics_enlace: 955,
        vistas_landing: 734,
        ctr: 4.28,
        cpc: 0.10,
        cpm: 4.22,
        alcance: 15420,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 6
      },
      recomendacion:
        "6 citas agendadas acumuladas, costo por resultado de $26.02, con una semana sin ninguna cita a principios de septiembre y ahora estabilizándose entre $16 y $21. Esta campaña sigue siendo 100% video — no tiene ni una sola arte estática o carrusel corriendo, algo que quedó pendiente desde que se armó (sí se hizo para Ready to Buy). Con casi un mes corriendo los mismos 6 videos a la misma audiencia, meterle 1–2 artes estáticas ahora mismo es probablemente la palanca más barata para bajar el costo por resultado antes de subir presupuesto — un formato distinto compitiendo en el mismo ad set casi siempre saca al ganador actual de su meseta.",
      tendencia_semanal: [
        { semana: "27 ago–2 sep", gasto: 43.31, impresiones: 13033, alcance: 7449, resultado_valor: 2 },
        { semana: "3–9 sep", gasto: 39.52, impresiones: 8288, alcance: 5348, resultado_valor: 0 },
        { semana: "10–16 sep", gasto: 41.26, impresiones: 9220, alcance: 6111, resultado_valor: 2 },
        { semana: "17–22 sep", gasto: 32.05, impresiones: 6432, alcance: 4107, resultado_valor: 2 }
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
        gasto: 171.93,
        impresiones: 532831,
        clicks: 3632,
        clics_enlace: 724,
        vistas_landing: 158,
        ctr: 0.68,
        cpc: 0.05,
        cpm: 0.32,
        alcance: 239538,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "Sigue cumpliendo su rol de generar audiencia para retargeting: 239,538 personas alcanzadas a un CPM de $0.32. El gasto semanal viene bajando (de $92.95 la primera semana a $8.67 ahora) porque el ad set ya cubrió a la mayor parte de la audiencia fría disponible — normal en una campaña de reconocimiento con casi 5 semanas activa. Como Consideración y Ready to Buy ya están entregando citas de forma consistente, no hace falta reactivar el gasto aquí; puede quedarse bajando así hasta que cierre el 30 de septiembre sin que afecte al resto del funnel.",
      tendencia_semanal: [
        { semana: "20–26 ago", gasto: 92.95, impresiones: 282236, alcance: 154531, resultado_valor: null },
        { semana: "27 ago–2 sep", gasto: 44.89, impresiones: 180088, alcance: 94738, resultado_valor: null },
        { semana: "3–9 sep", gasto: 12.92, impresiones: 28881, alcance: 26597, resultado_valor: null },
        { semana: "10–16 sep", gasto: 12.50, impresiones: 24980, alcance: 22210, resultado_valor: null },
        { semana: "17–22 sep", gasto: 8.67, impresiones: 16646, alcance: 15380, resultado_valor: null }
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
        gasto: 132.78,
        impresiones: 350960,
        clicks: 3231,
        ctr: 0.92,
        cpc: 0.04,
        cpm: 0.38,
        alcance: 276745,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 105141
      },
      recomendacion:
        "105,141 reproducciones completas acumuladas a un costo marginal (menos de $0.002 por reproducción). Es una campaña de largo plazo (corriendo desde noviembre pasado) con solo 3 creativos, y el gasto semanal se mantiene parejo entre $20 y $28 sin caídas — no hay señal de fatiga que pida un refresco todavía. Si en algún momento el CPM empieza a subir de forma sostenida (no solo una semana), ese sería el momento de meter un video nuevo; por ahora no toca tocar nada aquí.",
      tendencia_semanal: [
        { semana: "20–26 ago", gasto: 27.04, impresiones: 72589, alcance: 67404, resultado_valor: null },
        { semana: "27 ago–2 sep", gasto: 29.75, impresiones: 76453, alcance: 72431, resultado_valor: null },
        { semana: "3–9 sep", gasto: 27.33, impresiones: 76504, alcance: 67373, resultado_valor: null },
        { semana: "10–16 sep", gasto: 28.13, impresiones: 70800, alcance: 65708, resultado_valor: null },
        { semana: "17–22 sep", gasto: 20.53, impresiones: 54614, alcance: 50279, resultado_valor: null }
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
      "Se agregó al portal el embudo detallado de Facturación Electrónica (Reconocimiento → Consideración → Ready to Buy): impresiones, alcance, clics, vistas de landing y resultado por etapa, con el presupuesto mensual acordado con Félix en cada campaña. Se actualiza solo con cada refresco de datos.",
      "Se agregó la comparación semanal de costo por resultado entre campañas (tabla arriba de \"Campañas activas ahora\"), con recomendaciones automáticas debajo calculadas directo del dato de cada semana — no dependen de texto escrito a mano, así que no se desactualizan.",
      "Se refrescaron métricas, tendencia semanal y las recomendaciones de cada campaña con datos reales al 22 de septiembre — se corrigió que la recomendación de Ready to Buy seguía diciendo \"sus primeros 4 días activa\" con la campaña ya en 11 días. De ahora en adelante, cada refresco de datos debe reescribir el texto de recomendación de cada campaña, no solo las cifras."
    ],
    pendientes: [
      "Subir el presupuesto diario de \"Campaña Septiembre-Webinar\" (hoy $5/día) concentrándolo en \"Video 2\", que trae 6 de los 8 registros a $1.86 c/u con el mejor CTR (8.98%) — el webinar es el 29 de septiembre y con presupuesto tan bajo el ad set tarda más en salir de la fase de aprendizaje de Meta.",
      "Meterle 1–2 artes estáticas a la campaña de Contabilidad: sigue siendo 100% video (6 creativos, ninguno refrescado en casi un mes) y el costo por resultado subió a $26.02 acumulado — un formato distinto compitiendo en el mismo ad set es la forma más barata de probar si es fatiga de creativo antes de subir presupuesto.",
      "Consideración subió de $13.22 a $50.88 por resultado esta última semana. \"Operando a ciegas\" lleva casi 3 semanas siendo el único creativo con gasto real en esa campaña — subir una variante nueva del mismo ángulo antes de tocar presupuesto o audiencia.",
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
