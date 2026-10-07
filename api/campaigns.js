// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  modo: "snapshot",
  actualizado: "2026-10-05T15:30:00+02:00",
  resumen: {
    campanas_activas: 4,
    invertido_total: 1260.11,
    leads: 28,
    alcance_combinado: 675874
  },
  campanas: [
    {
      id: "120252328774890560",
      nombre: "Campaña Clase Gratuita",
      estado: "ACTIVE",
      objetivo: "Leads (registro a la clase gratuita de Facturación Electrónica)",
      inicio: "2026-09-19",
      presupuesto_diario: 5,
      ventana: "Desde su lanzamiento (19 sep 2026) hasta hoy",
      metricas: {
        gasto: 74.35,
        impresiones: 50679,
        clicks: 1577,
        clics_enlace: 891,
        vistas_landing: 662,
        ctr: 3.11,
        cpc: 0.05,
        cpm: 1.47,
        alcance: 25763,
        resultado_nombre: "Registros al webinar",
        resultado_valor: 69
      },
      recomendacion:
        "La campaña se reactivó el 1 de octubre para promover los próximos webinars (13 oct, 29 oct y 12 nov) y ahora se llama \"Campaña Clase Gratuita\". Acumula 69 registros según el píxel de Meta a $1.08 c/u ($74.35 en total; el 29 de septiembre se confirmaron 97 en el formulario). El webinar del 13 de octubre (7pm) ya tiene 30 inscritos confirmados. Ojo: desde el 1 de octubre lleva $18.54 gastados en 5 días y el píxel de Meta no atribuye ningún registro, así que esos 30 vienen del formulario y no se ven en los resultados de Meta; conviene revisar que el píxel esté disparando en la página de confirmación del registro. Los anuncios nuevos apenas arrancan: \"Si tu negocio todavía no está en facturación electrónica\" ya tiene CTR de 4.25% ($8.96) y \"Quedan 45 días\" y \"180,000 empresas\" llevan menos de $1 cada uno, todavía sin registros.",
      tendencia_semanal: [
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 20.75, impresiones: 9459, alcance: 7386, resultado_valor: 14 },
        { semana: "24–30 sep", desde: "2026-09-24", hasta: "2026-09-30", gasto: 35.08, impresiones: 25948, alcance: 16336, resultado_valor: 55 },
        { semana: "1–5 oct", desde: "2026-10-01", hasta: "2026-10-05", gasto: 18.54, impresiones: 15277, alcance: 10898, resultado_valor: null }
      ],
      ads: [
        { nombre: "FE sin dolores de cabeza", gasto: 38.12, impresiones: 32146, clicks: 426, ctr: 1.33, cpc: 0.09, cpm: 1.19, resultado_nombre: "Registros al webinar", resultado_valor: 45 },
        { nombre: "Video 2", gasto: 18.44, impresiones: 8425, clicks: 744, ctr: 8.83, cpc: 0.02, cpm: 2.19, resultado_nombre: "Registros al webinar", resultado_valor: 12 },
        { nombre: "Si tu negocio todavía no está en facturación electrónica", gasto: 8.96, impresiones: 5903, clicks: 251, ctr: 4.25, cpc: 0.04, cpm: 1.52, resultado_nombre: null, resultado_valor: null },
        { nombre: "Video 1", gasto: 7.21, impresiones: 3257, clicks: 133, ctr: 4.08, cpc: 0.05, cpm: 2.21, resultado_nombre: "Registros al webinar", resultado_valor: 11 },
        { nombre: "Quedan 45 días", gasto: 0.95, impresiones: 542, clicks: 14, ctr: 2.58, cpc: 0.07, cpm: 1.75, resultado_nombre: null, resultado_valor: null },
        { nombre: "180,000 empresas", gasto: 0.64, impresiones: 378, clicks: 9, ctr: 2.38, cpc: 0.07, cpm: 1.69, resultado_nombre: "Registros al webinar", resultado_valor: 1 },
        { nombre: "La fecha esta cerca y muchos todavía en el aire", gasto: 0.05, impresiones: 33, clicks: 0, ctr: 0.00, cpc: null, cpm: 1.52, resultado_nombre: null, resultado_valor: null }
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
        gasto: 309.90,
        impresiones: 49014,
        clicks: 1190,
        clics_enlace: 735,
        vistas_landing: 485,
        ctr: 2.43,
        cpc: 0.26,
        cpm: 6.32,
        alcance: 21084,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 10
      },
      recomendacion:
        "Se mantiene en 10 citas agendadas, sin ninguna nueva desde el 28 de septiembre (7 días); el costo por resultado sube a $30.99 (antes $23.96). La semana del 24 al 30 de septiembre costó $29.51 por cita y en lo que va de octubre ya van $49.75 gastados sin ninguna. Cierra el 10 de octubre y le quedan $48.50 por gastar (de $358.40). \"180,000 empresas-Imagen\" ($78.68, 4 citas, $19.67 por cita) sigue siendo el más eficiente y \"Faltan 180,000 empresas\" el de mayor gasto ($161.87, 5 citas, $32.37 por cita). \"Doña vs 2\", \"te lo voy a decir v2\" y \"Desde el 31 de diciembre\" llevan casi 4 semanas sin ninguna cita propia ($32.24 entre los tres) — con solo 5 días de campaña por delante, son los candidatos obvios a pausar para concentrar lo que queda en los anuncios que sí convierten.",
      tendencia_semanal: [
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 81.11, impresiones: 11924, alcance: 6481, resultado_valor: 2 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 90.56, impresiones: 15210, alcance: 7877, resultado_valor: 5 },
        { semana: "24–30 sep", desde: "2026-09-24", hasta: "2026-09-30", gasto: 88.53, impresiones: 14068, alcance: 9405, resultado_valor: 3 },
        { semana: "1–5 oct", desde: "2026-10-01", hasta: "2026-10-05", gasto: 49.75, impresiones: 7823, alcance: 5879, resultado_valor: null }
      ],
      ads: [
        { nombre: "Faltan 180,000 empresas", gasto: 161.87, impresiones: 24541, clicks: 649, ctr: 2.64, cpc: 0.25, cpm: 6.60, resultado_nombre: "Citas agendadas", resultado_valor: 5 },
        { nombre: "180,000 empresas-Imagen", gasto: 78.68, impresiones: 15927, clicks: 333, ctr: 2.09, cpc: 0.24, cpm: 4.94, resultado_nombre: "Citas agendadas", resultado_valor: 4 },
        { nombre: "Cupo v2", gasto: 37.15, impresiones: 4816, clicks: 115, ctr: 2.39, cpc: 0.32, cpm: 7.71, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Doña vs 2", gasto: 19.22, impresiones: 2254, clicks: 54, ctr: 2.40, cpc: 0.36, cpm: 8.53, resultado_nombre: null, resultado_valor: null },
        { nombre: "te lo voy a decir v2", gasto: 9.29, impresiones: 1100, clicks: 32, ctr: 2.91, cpc: 0.29, cpm: 8.45, resultado_nombre: null, resultado_valor: null },
        { nombre: "Desde el 31 de diciembre", gasto: 3.73, impresiones: 386, clicks: 7, ctr: 1.81, cpc: 0.53, cpm: 9.66, resultado_nombre: null, resultado_valor: null }
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
        gasto: 286.67,
        impresiones: 31951,
        clicks: 883,
        clics_enlace: 538,
        vistas_landing: 362,
        ctr: 2.76,
        cpc: 0.32,
        cpm: 8.97,
        alcance: 12926,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 11
      },
      recomendacion:
        "Se mantiene en 11 citas agendadas (la última fue el 27 de septiembre); el costo por resultado sube a $26.06 (antes $23.00). La semana del 24 al 30 de septiembre dejó 2 citas a $24.19 c/u, pero en octubre ya van $25.01 gastados sin ninguna. \"Operando a ciegas\" sigue concentrando el gasto visible ($232.07 de $286.67, las 11 citas). \"Scrolling (17%) - Copy\" subió a $4.18 (antes $1.45) y las dos estáticas, \"4 formas de resolver FE\" y \"Otros implementadores\", subieron a ~$11 cada una, pero ninguno de los tres tiene una cita todavía. Cierra el 26 de octubre y le quedan $63.33 por gastar. Sigue pendiente decidir con Félix si se separan 2-3 anuncios a un ad set nuevo con presupuesto propio.",
      tendencia_semanal: [
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 66.44, impresiones: 7808, alcance: 4034, resultado_valor: 2 },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 79.31, impresiones: 8122, alcance: 5230, resultado_valor: 6 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 67.54, impresiones: 8378, alcance: 5564, resultado_valor: 1 },
        { semana: "24–30 sep", desde: "2026-09-24", hasta: "2026-09-30", gasto: 48.37, impresiones: 4978, alcance: 3305, resultado_valor: 2 },
        { semana: "1–5 oct", desde: "2026-10-01", hasta: "2026-10-05", gasto: 25.01, impresiones: 2665, alcance: 1586, resultado_valor: null }
      ],
      ads: [
        { nombre: "Operando a ciegas", gasto: 232.07, impresiones: 25396, clicks: 685, ctr: 2.70, cpc: 0.34, cpm: 9.14, resultado_nombre: "Citas agendadas", resultado_valor: 11 },
        { nombre: "Otros implementadores - Estática", gasto: 11.91, impresiones: 950, clicks: 23, ctr: 2.42, cpc: 0.52, cpm: 12.54, resultado_nombre: null, resultado_valor: null },
        { nombre: "4 formas de resolver FE - Estática", gasto: 11.02, impresiones: 1360, clicks: 28, ctr: 2.06, cpc: 0.39, cpm: 8.10, resultado_nombre: null, resultado_valor: null },
        { nombre: "Hay empresarios", gasto: 6.95, impresiones: 710, clicks: 15, ctr: 2.11, cpc: 0.46, cpm: 9.79, resultado_nombre: null, resultado_valor: null },
        { nombre: "Scrolling (17%) - Copy", gasto: 4.18, impresiones: 489, clicks: 16, ctr: 3.27, cpc: 0.26, cpm: 8.55, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120251975182080560",
      nombre: "Campaña contabilidad: Septiembre–Diciembre",
      estado: "ACTIVE",
      objetivo: "Leads (citas agendadas)",
      inicio: "2026-08-27",
      presupuesto_diario: 6.00,
      ventana: "Desde su lanzamiento (27 ago 2026) hasta hoy",
      metricas: {
        gasto: 230.79,
        impresiones: 49957,
        clicks: 2119,
        clics_enlace: 1252,
        vistas_landing: 971,
        ctr: 4.24,
        cpc: 0.11,
        cpm: 4.62,
        alcance: 18721,
        resultado_nombre: "Citas agendadas",
        resultado_valor: 7
      },
      recomendacion:
        "Por fin se rompió el estancamiento: llegó la cita #7 el 30 de septiembre (de \"Dia 1 llevando Account One de 30 a 100\", que ya acumula 6 de las 7 citas, ~$22.5 por cita), después de más de un mes en 6. Aun así el costo por resultado general sube a $32.97 y desde el 1 de octubre vuelve a llevar $22.98 gastados sin ninguna cita nueva. \"Yo se que todavia usas excel (nuevo)\" pasó de $5.35 a $16.70 de gasto (el algoritmo lo está empujando) pero con un CPC de $0.35, más del triple que el resto de la campaña, y sin citas todavía. \"Comparativo Contadores\" sigue en su única cita, ahora a $38.72 por cita. Meter 1-2 artes estáticas nuevas sigue siendo la acción más urgente de todo el portal.",
      tendencia_semanal: [
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 43.31, impresiones: 13033, alcance: 7449, resultado_valor: 2 },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 39.52, impresiones: 8288, alcance: 5348, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 41.26, impresiones: 9220, alcance: 6111, resultado_valor: 2 },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 42.87, impresiones: 8975, alcance: 5420, resultado_valor: 2 },
        { semana: "24–30 sep", desde: "2026-09-24", hasta: "2026-09-30", gasto: 40.87, impresiones: 6889, alcance: 4186, resultado_valor: 1 },
        { semana: "1–5 oct", desde: "2026-10-01", hasta: "2026-10-05", gasto: 22.98, impresiones: 3554, alcance: 2192, resultado_valor: null }
      ],
      ads: [
        { nombre: "Dia 1 llevando Account One de 30 a 100", gasto: 135.15, impresiones: 29503, clicks: 1264, ctr: 4.28, cpc: 0.11, cpm: 4.58, resultado_nombre: "Citas agendadas", resultado_valor: 6 },
        { nombre: "Comparativo Contadores", gasto: 38.72, impresiones: 9250, clicks: 478, ctr: 5.17, cpc: 0.08, cpm: 4.19, resultado_nombre: "Citas agendadas", resultado_valor: 1 },
        { nombre: "Que hacemos en Account One mejor que en otras firmas", gasto: 22.47, impresiones: 5130, clicks: 197, ctr: 3.84, cpc: 0.11, cpm: 4.38, resultado_nombre: null, resultado_valor: null },
        { nombre: "Yo se que todavia usas excel (nuevo)", gasto: 16.70, impresiones: 2071, clicks: 48, ctr: 2.32, cpc: 0.35, cpm: 8.06, resultado_nombre: null, resultado_valor: null },
        { nombre: "Meet the Team", gasto: 12.11, impresiones: 2614, clicks: 95, ctr: 3.63, cpc: 0.13, cpm: 4.63, resultado_nombre: null, resultado_valor: null },
        { nombre: "Tu ni sabes que tienes un tema de contabilidad", gasto: 5.65, impresiones: 1390, clicks: 37, ctr: 2.66, cpc: 0.15, cpm: 4.06, resultado_nombre: null, resultado_valor: null }
      ]
    },
    {
      id: "120251858423240560",
      nombre: "Campaña: Reconocimiento 80% FE",
      estado: "CLOSED",
      objetivo: "Reconocimiento de marca (etapa 1 del funnel FE)",
      inicio: "2026-08-20",
      presupuesto_diario: null,
      presupuesto_cerrado: { monto: 179.20, cierre: "30 sep 2026 (ya cerrada, presupuesto agotado)" },
      // Meta la sigue marcando ACTIVE pero su presupuesto cerrado ya se agotó (0 gasto desde el 30 sep): el portal la muestra como CLOSED.
      ventana: "Desde su lanzamiento (20 ago 2026) hasta hoy",
      metricas: {
        gasto: 184.91,
        impresiones: 558706,
        clicks: 3979,
        clics_enlace: 786,
        vistas_landing: 170,
        ctr: 0.71,
        cpc: 0.05,
        cpm: 0.33,
        alcance: 250494,
        resultado_nombre: null,
        resultado_valor: null
      },
      recomendacion:
        "Cumplió su rol y ya cerró: el presupuesto se agotó el 30 de septiembre y del 1 al 5 de octubre no tuvo ninguna impresión. Dejó 250,494 personas alcanzadas a un CPM de $0.33 ($184.91 en total) como audiencia para el retargeting de Consideración y Ready to Buy. No hace falta reactivarla ahora; si se quiere seguir alimentando audiencia fría, habría que cargarle un presupuesto nuevo.",
      tendencia_semanal: [
        { semana: "20–26 ago", desde: "2026-08-20", hasta: "2026-08-26", gasto: 92.95, impresiones: 282236, alcance: 154531, resultado_valor: null },
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 44.89, impresiones: 180088, alcance: 94738, resultado_valor: null },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 12.92, impresiones: 28881, alcance: 26597, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 12.50, impresiones: 24980, alcance: 22210, resultado_valor: null },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 11.65, impresiones: 22541, alcance: 21120, resultado_valor: null },
        { semana: "24–30 sep", desde: "2026-09-24", hasta: "2026-09-30", gasto: 10.00, impresiones: 19980, alcance: 18848, resultado_valor: null }
      ],
      ads: [
        { nombre: "La llamada", gasto: 120.49, impresiones: 241703, clicks: 3258, ctr: 1.35, cpc: 0.04, cpm: 0.50, resultado_nombre: "Reproducciones", resultado_valor: 67331 },
        { nombre: "Carrusel sera una de ellas", gasto: 42.06, impresiones: 206413, clicks: 351, ctr: 0.17, cpc: 0.12, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 79470 },
        { nombre: "Carrusel mexico", gasto: 6.71, impresiones: 38783, clicks: 78, ctr: 0.20, cpc: 0.09, cpm: 0.17, resultado_nombre: "Alcance", resultado_valor: 25235 },
        { nombre: "Carrusel la llamada", gasto: 4.46, impresiones: 22614, clicks: 43, ctr: 0.19, cpc: 0.10, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 16321 },
        { nombre: "mexico", gasto: 3.66, impresiones: 10520, clicks: 150, ctr: 1.43, cpc: 0.02, cpm: 0.35, resultado_nombre: "Reproducciones", resultado_valor: 1813 },
        { nombre: "Arte mexico", gasto: 2.88, impresiones: 13993, clicks: 21, ctr: 0.15, cpc: 0.14, cpm: 0.21, resultado_nombre: "Alcance", resultado_valor: 10697 },
        { nombre: "Arte la llamada", gasto: 2.17, impresiones: 11115, clicks: 20, ctr: 0.18, cpc: 0.11, cpm: 0.20, resultado_nombre: "Alcance", resultado_valor: 8585 },
        { nombre: "Arte tu empresa sera una de ellas", gasto: 1.68, impresiones: 9558, clicks: 17, ctr: 0.18, cpc: 0.10, cpm: 0.18, resultado_nombre: "Alcance", resultado_valor: 8699 },
        { nombre: "\"Tu empresa será una de ellas?\"", gasto: 0.80, impresiones: 4007, clicks: 41, ctr: 1.02, cpc: 0.02, cpm: 0.20, resultado_nombre: "Reproducciones", resultado_valor: 403 }
      ]
    },
    {
      id: "120237775235040560",
      nombre: "Awareness",
      estado: "PAUSED",
      objetivo: "Reproducciones de video",
      inicio: "2025-11-12",
      presupuesto_diario: 4.00,
      // La campaña sigue marcada ACTIVE dentro de Meta, pero los 3 anuncios con entrega están pausados (2 oct 2026), así que no está gastando: el portal la muestra como PAUSED.
      ventana: "Desde el 20 ago 2026 hasta hoy (campaña de largo plazo, pausada el 2 oct)",
      metricas: {
        gasto: 173.49,
        impresiones: 459522,
        clicks: 4020,
        ctr: 0.87,
        cpc: 0.04,
        cpm: 0.38,
        alcance: 346886,
        resultado_nombre: "Reproducciones completas",
        resultado_valor: 135602
      },
      recomendacion:
        "Se pausó el 2 de octubre a pedido del equipo: se apagaron \"Como es tener un negocio en RD\" y \"La vida es un video juego\" (los dos que concentraban el gasto) y \"Si el negocio paga todo\" ya estaba pausado, así que la campaña ya no entrega (0 gasto desde el 3 de octubre). Cerró la ventana desde el 20 de agosto con 135,602 reproducciones completas a $173.49, un costo marginal de ~$0.0013 por reproducción. Si se quiere retomar el alcance de marca, habría que subir creativos nuevos en lugar de reactivar estos.",
      // resultado_valor intentionally left null in the weekly rows below (unlike other campaigns):
      // reproducciones cuestan fracciones de centavo, así que su "costo por
      // resultado" redondea a $0.00 y rompe la comparación semanal automática,
      // que está pensada para comparar costo por lead/cita entre campañas.
      tendencia_semanal: [
        { semana: "20–26 ago", desde: "2026-08-20", hasta: "2026-08-26", gasto: 27.04, impresiones: 72589, alcance: 67404, resultado_valor: null },
        { semana: "27 ago–2 sep", desde: "2026-08-27", hasta: "2026-09-02", gasto: 29.75, impresiones: 76453, alcance: 72431, resultado_valor: null },
        { semana: "3–9 sep", desde: "2026-09-03", hasta: "2026-09-09", gasto: 27.33, impresiones: 76504, alcance: 67373, resultado_valor: null },
        { semana: "10–16 sep", desde: "2026-09-10", hasta: "2026-09-16", gasto: 28.13, impresiones: 70800, alcance: 65708, resultado_valor: null },
        { semana: "17–23 sep", desde: "2026-09-17", hasta: "2026-09-23", gasto: 27.51, impresiones: 73120, alcance: 66343, resultado_valor: null },
        { semana: "24–30 sep", desde: "2026-09-24", hasta: "2026-09-30", gasto: 27.75, impresiones: 72232, alcance: 67261, resultado_valor: null },
        { semana: "1–5 oct", desde: "2026-10-01", hasta: "2026-10-05", gasto: 5.98, impresiones: 17824, alcance: 17305, resultado_valor: null }
      ],
      ads: [
        { nombre: "Como es tener un negocio en RD", gasto: 136.19, impresiones: 369338, clicks: 2473, ctr: 0.67, cpc: 0.06, cpm: 0.37, resultado_nombre: "Reproducciones completas", resultado_valor: 106579 },
        { nombre: "La vida es un video juego", gasto: 36.59, impresiones: 88326, clicks: 1509, ctr: 1.71, cpc: 0.02, cpm: 0.41, resultado_nombre: "Reproducciones completas", resultado_valor: 28463 },
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
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 5 de octubre. Hallazgos clave: la campaña del Webinar se reactivó el 1 de octubre (ahora \"Campaña Clase Gratuita\") con anuncios nuevos para el próximo webinar del 13 de octubre y ya suma 30 inscritos para el 13 de octubre en el formulario, aunque el píxel de Meta no atribuye ninguno a los $18.54 gastados en 5 días — conviene revisar el píxel. Contabilidad por fin rompió su estancamiento con la cita #7 (30 de septiembre), aunque en octubre vuelve a ir sin citas. Ready to Buy (10 citas) y Consideración (11) no suman citas desde finales de septiembre. Se pausó la campaña Awareness completa (\"Como es tener un negocio en RD\" y \"La vida es un video juego\") el 2 de octubre. Ready to Buy cierra el 10 de octubre con $48.50 por gastar. Además se corrigió el portal para que la etiqueta de estado de cada campaña (Activa / Pausada / Cerrada) salga del dato real — antes decía \"Activa\" en todas, incluso en las pausadas.",
    ],
    pendientes: [
      "Contabilidad sumó su cita #7 el 30 de septiembre tras más de un mes estancada en 6, pero desde el 1 de octubre vuelve a ir sin citas ($22.98 gastados). Meterle 1-2 artes estáticas sigue siendo la acción más urgente de todo el portal: la campaña es 100% video con los mismos creativos desde que se armó, y \"Yo se que todavia usas excel (nuevo)\" ya está absorbiendo gasto ($16.70) con un CPC 3 veces más alto que el resto y sin citas.",
      "Sacar 2-3 anuncios de Consideración (los con algo de CTR, como \"Hay empresarios\") a un ad set nuevo con presupuesto propio, para que Félix vea más variedad de creativos sin depender del algoritmo — pendiente de confirmar con Félix cuáles anuncios y cuánto presupuesto asignarles. \"Scrolling (17%) - Copy\" ya lleva cuatro semanas seguidas recibiendo más gasto cada vez (subió de $0.35 a $1.45), señal cada vez más clara de que el algoritmo lo está probando en serio.",
      "Webinar del 13 de octubre: ya hay 30 inscritos en el formulario, pero la campaña ($18.54 en 5 días) no muestra ningún registro atribuido en Meta. Verificar que el píxel dispare en la página de confirmación del registro, y crear la sesión de Zoom de ese día (también quedan por crear las del 29 de octubre y el 12 de noviembre).",
      "Regla creativa nueva: no hacer más artes basados solo en una cifra grande (tipo \"180,000 empresas\" o \"Quedan 45 días\"). A los que ya están corriendo con números, pegarles recortes de noticias reales para que se vean más serios y creíbles. Pendiente además pausar los videos con t-shirt que corren en la otra cuenta publicitaria de Account One (408193953213566, dominio accountone.com.do), que todavía no se puede gestionar desde el portal, y confirmar si \"Operando a ciegas\" (el de mejor desempeño de Consideración) entra en esa pausa.",
      "El webinar del 29 de septiembre ya cerró con 97 registros confirmados — capturar qué hizo que \"Imagen 2\" dominara esta ronda (41 de 62 registros vía píxel) para replicarlo en los próximos 3 webinars (13 oct, 29 oct, 12 nov).",
      "Todavía no hay visibilidad de ventas/contratos cerrados — los leads/citas agendadas del funnel FE + Contabilidad son lo máximo que mide Meta Ads (llega hasta la cita agendada). Falta que Félix comparta desde su CRM/GHL cuántas de esas citas se convirtieron en cliente, para poder medir el resultado real del negocio y no solo el volumen de leads.",
      "Hallazgo de Naomi (monitoreo de leads): está llegando un volumen notable de negocios de retail y restaurantes preguntando específicamente si el servicio se conecta con su punto de venta (POS) — para ese perfil de negocio, la Facturación Electrónica tiene que salir integrada directo de la caja/POS, no como trámite aparte. Decidir con Félix: (1) si Account One ofrece o puede conectar con integración de POS, vale crear un ángulo de anuncio específico para retail/restaurantes mencionándolo, porque hay demanda represada ahí; (2) si no la ofrece, aclarar esto en la landing o en el primer mensaje de contacto para evitar leads mal calificados que entran esperando algo que no se les puede dar. Corto plazo: pedirle a Naomi que cuantifique cuántos leads mencionan POS para dimensionar el segmento.",
      "Ready to Buy cierra el 10 de octubre con $48.50 por gastar: evaluar pausar ya \"Doña vs 2\", \"te lo voy a decir v2\" y \"Desde el 31 de diciembre\" ($32.24 entre los tres, ninguna cita propia) para concentrar lo que queda en \"180,000 empresas-Imagen\" y \"Faltan 180,000 empresas\", que son los que sí convierten.",
      "Pausar el anuncio de la oferta 25%/B-01 el 30 de septiembre — después de esa fecha el precio y el dato de comprobantes B-01 dejan de ser exactos y hay que revisar el copy.",
      "Completar la verificación de negocio (Business Verification) en el Business Manager de Meta para desbloquear el acceso a datos en vivo del portal.",
      "Poner a correr el reel viral (instagram.com/reel/DdRpN3zuQu7, cuenta @themoneycoachrd) como anuncio nuevo e independiente — decidido, pendiente de ejecutar.",
      "Construir una landing propia con formulario propio (no la de GHL/Félix existente), enfocada en el miedo, usando los dos reels de \"no hay prórroga\" y un timer de cuenta regresiva (quedan 3 semanas / 2 semanas / 1 semana). Pendiente que Félix pase el copy y los videos que se hicieron virales."
    ],
    proximas_artes: [
      "Awareness quedó pausada el 2 de octubre: definir con Félix si se reemplaza por creativos nuevos."
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
