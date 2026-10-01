// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-09-29T10:00:00+02:00",
  resumen: {
    campanas_activas: 6,
    invertido_total: 1087.83,
    leads: 27,
    alcance_combinado: 641194
  },
  campanas: [
    {
      id: "120252328774890560",
      nombre: "Campaña Septiembre-Webinar",
      estado: "PAUSED",
      objetivo: "Leads (registro al webinar del 29 de septiembre)",
      inicio: "2026-09-19",
      presupuesto_diario: 5,
      presupuesto_mensual: null,
      ventana: "Desde su lanzamiento (19 sep 2026) hasta hoy",
      metricas: {
        gasto: 51.96,
        impresiones: 31326,
        clicks: 1154,
        clics_enlace: 594,
        vistas_landing: 472,
        ctr: 3.68,
        cpc: 0.05,
        cpm: 1.66,
        alcance: 18388,
        resultado_nombre: "Registros al webinar",
        resultado_valor: 62
      },
      tendencia_semanal: [
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 20.75, impresiones: 9459, alcance: 7386, resultado_valor: 14 },
        { semana: "24–29 sep", desde: "2026-09-24", hasta: "2026-09-29", gasto: 31.21, impresiones: 21867, alcance: 14252, resultado_valor: 48 }
      ],
      recomendacion:
        "Hoy es el webinar: 97 registros confirmados en el formulario (62 según el píxel de Meta — la brecha entre lo que Meta atribuye y lo que llega al formulario sigue creciendo con el volumen) a $0.84 por registro vía Meta, el más bajo de toda la campaña. \"Imagen 2\" volvió a acelerar fuerte: 41 registros a $0.63 c/u. \"Video 1\" y \"Video 2\" empataron en volumen (10 registros cada uno) pero Video 1 es más barato ($0.64 vs $1.84). Con 48 registros solo entre el 24 y el 29, la última semana fue con diferencia la de mejor ritmo — vale la pena capturar el aprendizaje de qué cambió (Imagen 2 dominando) para los próximos 3 webinars.",
      ads: [
        { nombre: "Imagen 2", gasto: 25.73, impresiones: 19330, clicks: 279, ctr: 1.44, cpc: 0.09, cpm: 1.33, resultado_nombre: "Registros al webinar", resultado_valor: 41 },
        { nombre: "Video 2", gasto: 18.41, impresiones: 8372, clicks: 739, ctr: 8.83, cpc: 0.02, cpm: 2.20, resultado_nombre: "Registros al webinar", resultado_valor: 10 },
        { nombre: "Video 1", gasto: 6.37, impresiones: 2886, clicks: 117, ctr: 4.05, cpc: 0.05, cpm: 2.21, resultado_nombre: "Registros al webinar", resultado_valor: 10 },
        { nombre: "Imagen 3", gasto: 0.81, impresiones: 400, clicks: 10, ctr: 2.50, cpc: 0.08, cpm: 2.03, resultado_nombre: null, resultado_valor: null },
        { nombre: "Imagen 1", gasto: 0.64, impresiones: 338, clicks: 9, ctr: 2.66, cpc: 0.07, cpm: 1.89, resultado_nombre: "Registros al webinar", resultado_valor: 1 }
      ]
    },
    {
      id: "120252187070040560",
      nombre: "FE 3% Ready to Buy: Retargeting Caliente",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 3 — Ready to Buy del funnel FE)",
      inicio: "2026-09-11",
      presupuesto_diario: null,
      presupuesto_cerrado: { monto: 358.40, cierre: "10 oct 2026" },
      ventana: "Desde su lanzamiento (11 sep 2026) hasta hoy",
      metricas: {
        gasto: 239.61,
        impresiones: 37558,
        clicks: 894,
        clics_enlace: 570,
        vistas_landing: 354,
        ctr: 2.38,
        cpc: 0.27,
        cpm: 6.38,
        alcance: 16466,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 10
      },
      tendencia_semanal: [
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 81.11, impresiones: 11924, alcance: 6481, resultado_valor: 2 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 90.56, impresiones: 15210, alcance: 7877, resultado_valor: 5 },
        { semana: "24–29 sep", desde: "2026-09-24", hasta: "2026-09-29", gasto: 67.94, impresiones: 10424, alcance: 7164, resultado_valor: 3 }
      ],
      recomendacion:
        "Se mantiene en 10 citas agendadas, costo por resultado $23.96 (prácticamente igual a $22.55 del refresco anterior). \"Faltan 180,000 empresas\" sigue siendo el de mayor gasto ($102.26) y el más eficiente por cita ($20.45), aunque \"180,000 empresas-Imagen\" se acercó ($18.66). \"Doña vs 2\", \"te lo voy a decir v2\" y \"Desde el 31 de diciembre\" siguen sin ninguna cita propia pese a seguir con gasto activo — ya casi 4 semanas así, siguen siendo los primeros candidatos a pausar para redirigir ese presupuesto a los 2 anuncios que sí convierten.",
      ads: [
        { nombre: "Faltan 180,000 empresas", gasto: 102.26, impresiones: 14793, clicks: 388, ctr: 2.62, cpc: 0.26, cpm: 6.91, resultado_nombre: "Citas agendadas", resultado_valor: 5 },
        { nombre: "180,000 empresas-Imagen", gasto: 74.63, impresiones: 15025, clicks: 316, ctr: 2.10, cpc: 0.24, cpm: 4.97, resultado_nombre: "Citas agendadas", resultado_valor: 4 },
        { nombre: "Cupo v2", gasto: 34.36, impresiones: 4466, clicks: 108, ctr: 2.42, cpc: 0.32, cpm: 7.69, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Doña vs 2", gasto: 18.11, impresiones: 2124, clicks: 51, ctr: 2.40, cpc: 0.36, cpm: 8.53, resultado_nombre: null, resultado_valor: null },
        { nombre: "te lo voy a decir v2", gasto: 6.70, impresiones: 811, clicks: 25, ctr: 3.08, cpc: 0.27, cpm: 8.26, resultado_nombre: null, resultado_valor: null },
        { nombre: "Desde el 31 de diciembre", gasto: 3.55, impresiones: 339, clicks: 6, ctr: 1.77, cpc: 0.59, cpm: 10.47, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120252085024140560",
      nombre: "FE 17% Consideración: Leads Septiembre",
      estado: "ACTIVE",
      objetivo: "Leads (etapa 2 — Consideración del funnel FE)",
      inicio: "2026-09-04",
      presupuesto_diario: null,
      presupuesto_cerrado: { monto: 350.00, cierre: "26 oct 2026" },
      ventana: "Desde su lanzamiento (4 sep 2026) hasta hoy",
      metricas: {
        gasto: 253.03,
        impresiones: 28528,
        clicks: 802,
        clics_enlace: 495,
        vistas_landing: 330,
        ctr: 2.81,
        cpc: 0.32,
        cpm: 8.87,
        alcance: 12276,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 11
      },
      recomendacion:
        "Se mantiene en 11 citas agendadas, costo por resultado $23.00 (estable frente a $22.30). Sigue pendiente confirmar con Félix el plan de sacar 2-3 anuncios a un ad set nuevo con presupuesto propio — \"Operando a ciegas\" sigue concentrando la gran mayoría del gasto visible a nivel de anuncio ($215.80 de $253.03, las 11 citas). \"Scrolling (17%) - Copy\" volvió a recibir más gasto ($1.45, subiendo de $0.35), ya cuatro semanas seguidas con actividad creciente — señal cada vez más clara de que el algoritmo lo está probando en serio. Vale la pena decidir con Félix esta semana si se acelera la separación manual o se deja que el algoritmo siga repartiendo solo.",
      tendencia_semanal: [
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 66.44, impresiones: 7808, alcance: 4034, resultado_valor: 2 },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 79.31, impresiones: 8122, alcance: 5230, resultado_valor: 6 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 67.54, impresiones: 8378, alcance: 5564, resultado_valor: 1 },
        { semana: "24–29 sep", desde: "2026-09-24", hasta: "2026-09-29", gasto: 39.74, impresiones: 4220, alcance: 3011, resultado_valor: 2 }
      ],
      ads: [
        { nombre: "Operando a ciegas", gasto: 215.80, impresiones: 23758, clicks: 644, ctr: 2.71, cpc: 0.34, cpm: 9.08, resultado_nombre: "Citas agendadas", resultado_valor: 11 },
        { nombre: "Hay empresarios", gasto: 6.71, impresiones: 701, clicks: 15, ctr: 2.14, cpc: 0.45, cpm: 9.57, resultado_nombre: null, resultado_valor: null },
        { nombre: "4 formas de resolver FE - Estática", gasto: 5.08, impresiones: 433, clicks: 7, ctr: 1.62, cpc: 0.73, cpm: 11.73, resultado_nombre: null, resultado_valor: null },
        { nombre: "Otros implementadores - Estática", gasto: 3.47, impresiones: 415, clicks: 10, ctr: 2.41, cpc: 0.35, cpm: 8.36, resultado_nombre: null, resultado_valor: null },
        { nombre: "Scrolling (17%) - Copy", gasto: 1.45, impresiones: 176, clicks: 10, ctr: 5.68, cpc: 0.15, cpm: 8.24, resultado_nombre: null, resultado_valor: null }
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
        gasto: 198.52,
        impresiones: 44895,
        clicks: 1949,
        clics_enlace: 1154,
        vistas_landing: 893,
        ctr: 4.34,
        cpc: 0.10,
        cpm: 4.42,
        alcance: 17544,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 6
      },
      recomendacion:
        "Cuarto refresco seguido en 6 citas agendadas — el gasto sigue subiendo (de $191.19 a $198.52) sin sumar ni una cita nueva desde hace ya más de un mes. Es el estancamiento más largo que ha mostrado el portal en ninguna campaña. \"Dia 1 llevando Account One de 30 a 100\" sigue liderando (5 de las 6 citas, $24.69/cita) y \"Comparativo Contadores\" se mantiene en su única cita, ahora a $31.45/cita (subiendo de costo cada semana sin parar). Los otros 5 creativos siguen sin ninguna cita propia. Meter 1-2 artes estáticas nuevas dejó de ser un pendiente — es la acción más urgente de todo el portal en este momento.",
      tendencia_semanal: [
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 43.31, impresiones: 13033, alcance: 7449, resultado_valor: 2 },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 39.52, impresiones: 8288, alcance: 5348, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 41.26, impresiones: 9220, alcance: 6111, resultado_valor: 2 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 42.87, impresiones: 8975, alcance: 5420, resultado_valor: 2 },
        { semana: "24–29 sep", desde: "2026-09-24", hasta: "2026-09-29", gasto: 31.56, impresiones: 5379, alcance: 3434, resultado_valor: null }
      ],
      ads: [
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 123.45, impresiones: 27498, clicks: 1192, ctr: 4.33, cpc: 0.10, cpm: 4.49, resultado_nombre: "Citas agendadas", resultado_valor: 5 },
        { nombre: "Comparativo Contadores", gasto: 31.45, impresiones: 7984, clicks: 423, ctr: 5.30, cpc: 0.07, cpm: 3.94, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 21.90, impresiones: 5022, clicks: 195, ctr: 3.88, cpc: 0.11, cpm: 4.36, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 11.22, impresiones: 2441, clicks: 93, ctr: 3.81, cpc: 0.12, cpm: 4.60, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavia usas excel (nuevo)", gasto: 5.35, impresiones: 710, clicks: 11, ctr: 1.55, cpc: 0.49, cpm: 7.54, resultado_nombre: null, resultado_valor: null },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 5.15, impresiones: 1240, clicks: 35, ctr: 2.82, cpc: 0.15, cpm: 4.15, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120251858423240560",
      nombre: "Campaña: Reconocimiento 80% FE",
      estado: "ACTIVE",
      objetivo: "Reconocimiento de marca (etapa 1 del funnel FE)",
      inicio: "2026-08-20",
      presupuesto_diario: null,
      presupuesto_cerrado: { monto: 179.20, cierre: "30 sep 2026 (ya cerrada, presupuesto agotado)" },
      ventana: "Desde su lanzamiento (20 ago 2026) hasta hoy",
      metricas: {
        gasto: 183.77,
        impresiones: 556583,
        clicks: 3945,
        clics_enlace: 773,
        vistas_landing: 168,
        ctr: 0.71,
        cpc: 0.05,
        cpm: 0.33,
        alcance: 249968,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "Sigue cumpliendo su rol de generar audiencia para retargeting: 249,968 personas alcanzadas a un CPM de $0.33, prácticamente igual al refresco anterior. El gasto semanal se mantiene en su piso bajo (~$9-12/semana en las últimas 5 semanas) porque el ad set ya cubrió a la mayor parte de la audiencia fría disponible. Como Consideración y Ready to Buy siguen entregando citas de forma consistente, no hace falta reactivar el gasto aquí — cierra mañana (30 de septiembre) sin que afecte al resto del funnel.",
      tendencia_semanal: [
        { semana: "20–26 ago", desde: "2026-08-20", hasta: "2026-08-26", gasto: 92.95, impresiones: 282236, alcance: 154531, resultado_valor: null },
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 44.89, impresiones: 180088, alcance: 94738, resultado_valor: null },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 12.92, impresiones: 28881, alcance: 26597, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 12.50, impresiones: 24980, alcance: 22210, resultado_valor: null },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 11.65, impresiones: 22541, alcance: 21120, resultado_valor: null },
        { semana: "24–29 sep", desde: "2026-09-24", hasta: "2026-09-29", gasto: 8.86, impresiones: 17857, alcance: 16674, resultado_valor: null }
      ],
      ads: [
        { nombre: "La llamada", gasto: 119.39, impresiones: 239610, clicks: 3227, ctr: 1.35, cpc: 0.04, cpm: 0.50, resultado_nombre: "Reproducciones", resultado_valor: 66758 },
        { nombre: "Carrusel sera una de ellas", gasto: 42.06, impresiones: 206413, clicks: 351, ctr: 0.17, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 79470 },
        { nombre: "Carrusel mexico", gasto: 6.71, impresiones: 38783, clicks: 78, ctr: 0.20, cpc: 0.09, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 25235 },
        { nombre: "Carrusel la llamada", gasto: 4.46, impresiones: 22614, clicks: 43, ctr: 0.19, cpc: 0.10, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 16321 },
        { nombre: "mexico", gasto: 3.64, impresiones: 10500, clicks: 147, ctr: 1.40, cpc: 0.02, cpm: 0.35, resultado_nombre: "Reproducciones", resultado_valor: 1807 },
        { nombre: "Arte mexico", gasto: 2.88, impresiones: 13993, clicks: 21, ctr: 0.15, cpc: 0.14, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 10697 },
        { nombre: "Arte la llamada", gasto: 2.17, impresiones: 11115, clicks: 20, ctr: 0.18, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 8585 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.68, impresiones: 9558, clicks: 17, ctr: 0.18, cpc: 0.10, cpm: 0.18, resultado_nombre: "Alcance", resultado_valor: 8699 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.78, impresiones: 3997, clicks: 41, ctr: 1.03, cpc: 0.02, cpm: 0.20, resultado_nombre: "Reproducciones", resultado_valor: 398 }
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
        gasto: 160.94,
        impresiones: 424778,
        clicks: 3706,
        ctr: 0.87,
        cpc: 0.04,
        cpm: 0.38,
        alcance: 326552,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 126031
      },
      recomendacion:
        "126,031 reproducciones completas acumuladas (ventana desde el 20 de agosto) a un costo marginal (~$0.0013 por reproducción). \"Como es tener un negocio en RD\" sigue siendo el creativo más fuerte dentro de la ventana ($123.76, 97,105 reproducciones) seguido de \"La vida es un video juego\" ($36.47, 28,366 reproducciones). Sigue siendo una campaña de largo plazo con entrega estable — no hace falta tocar nada.",
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
        { semana: "24–29 sep", desde: "2026-09-24", hasta: "2026-09-29", gasto: 21.18, impresiones: 55312, alcance: 52348, resultado_valor: null }
      ],
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 123.76, impresiones: 334876, clicks: 2175, ctr: 0.65, cpc: 0.06, cpm: 0.37, resultado_nombre: "Reproducciones completas", resultado_valor: 97105 },
        { nombre: "La vida es un video juego", gasto: 36.47, impresiones: 88044, clicks: 1493, ctr: 1.70, cpc: 0.02, cpm: 0.41, resultado_nombre: "Reproducciones completas", resultado_valor: 28366 },
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
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 28 de septiembre. Hallazgos clave: el Webinar (mañana) llegó a 57 registros confirmados (49 según el píxel de Meta), con \"Imagen 2\" ampliando su liderazgo a 33 registros a $0.62 c/u. Ready to Buy y Consideración volvieron a sumar una cita más cada una (10 y 11 respectivamente). Contabilidad quedó fija en 6 citas por tercer refresco seguido pese a más gasto — el estancamiento más claro que ha mostrado el portal hasta ahora.",
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 29 de septiembre — día del webinar. Hallazgos clave: el Webinar cerró con 97 registros confirmados (62 según el píxel de Meta) a $0.84 por registro, el más eficiente de toda la campaña; \"Imagen 2\" terminó liderando con 41 registros a $0.63 c/u. Ready to Buy y Consideración se mantuvieron estables en 10 y 11 citas respectivamente. Contabilidad llegó a un cuarto refresco seguido sin sumar ninguna cita nueva — el estancamiento más largo que ha mostrado el portal en ninguna campaña, ahora la prioridad número uno.",
      "Se corrigieron los presupuestos de Reconocimiento, Consideración y Ready to Buy en el portal (1 oct 2026): el \"sep→oct\" que se venía mostrando era del plan original de Félix, pero nunca se configuró así en Meta. Verificado directo en Meta Ads Manager: son presupuestos cerrados (lifetime) fijos, sin aumento en octubre — Reconocimiento $179.20 (ya cerrada, agotada el 30 sep), Consideración $350.00 (cierra 26 oct, no $358.40/$537.60 como decía antes), Ready to Buy $358.40 (cierra 10 oct). También se actualizó el estado de la campaña del Webinar a PAUSADA, ya que se pausó sola al terminar el webinar del 29 de septiembre.",
    ],
    pendientes: [
      "Contabilidad lleva 4 refrescos seguidos sin sumar ninguna cita nueva pese a más gasto semana a semana — meterle 1-2 artes estáticas ya no es un \"nice to have\", es la acción más urgente de todo el portal en este momento. Sigue siendo 100% video con los mismos 6 creativos desde que se armó.",
      "Sacar 2-3 anuncios de Consideración (los con algo de CTR, como \"Hay empresarios\") a un ad set nuevo con presupuesto propio, para que Félix vea más variedad de creativos sin depender del algoritmo — pendiente de confirmar con Félix cuáles anuncios y cuánto presupuesto asignarles. \"Scrolling (17%) - Copy\" ya lleva cuatro semanas seguidas recibiendo más gasto cada vez (subió de $0.35 a $1.45), señal cada vez más clara de que el algoritmo lo está probando en serio.",
      "El webinar del 29 de septiembre ya cerró con 97 registros confirmados — capturar qué hizo que \"Imagen 2\" dominara esta ronda (41 de 62 registros vía píxel) para replicarlo en los próximos 3 webinars (13 oct, 29 oct, 12 nov).",
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

// Real closed (lifetime) budgets as configured on each campaign in Meta Ads
// Manager, confirmed directly against the account on Oct 1 2026 — these are
// NOT monthly figures (the original "Plan Funnel FE Septiembre 2026" draft
// used a sep→oct monthly split that was never actually set up in Meta this
// way; campaigns were configured with a single closed lifetime budget and a
// stop_time instead). Same map used in snapshot and live mode.
const FE_PRESUPUESTOS = {
  "120251858423240560": { monto: 179.20, cierre: "30 sep 2026 (ya cerrada, presupuesto agotado)" }, // Reconocimiento (20%)
  "120252085024140560": { monto: 350.00, cierre: "26 oct 2026" }, // Consideración (40%)
  "120252187070040560": { monto: 358.40, cierre: "10 oct 2026" }  // Ready to Buy (40%)
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
        presupuesto_cerrado: FE_PRESUPUESTOS[c.id] || null,
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
