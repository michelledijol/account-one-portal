// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  "modo": "snapshot",
  "actualizado": "2026-11-11T13:30:00+01:00",
  "resumen": {
    "campanas_activas": 4,
    "invertido_total": 2575.29,
    "leads": 65,
    "alcance_combinado": 1032650
  },
  "campanas": [
    {
      "id": "120253112610380560",
      "nombre": "Nov 2026 - Interacción - Vídeo colab The Money Coach",
      "estado": "ACTIVE",
      "objetivo": "Interacción con una publicación existente (vídeo en colaboración con The Money Coach)",
      "inicio": "2026-11-05",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 150,
        "cierre": "16 nov 2026"
      },
      "ventana": "Entre el 5 y el 11 de noviembre de 2026",
      "metricas": {
        "gasto": 66.69,
        "impresiones": 122625,
        "clicks": 1583,
        "clics_enlace": 86,
        "vistas_landing": 0,
        "ctr": 1.29,
        "cpc": 0.04,
        "cpm": 0.54,
        "alcance": 93142,
        "resultado_nombre": "Interacciones",
        "resultado_valor": 73289
      },
      "recomendacion": "Campaña de interacción con una publicación existente (vídeo en colaboración con The Money Coach), con presupuesto cerrado de $150 hasta el 16 de noviembre. Lleva $66.69 gastados ($83.31 por gastar), 122,625 impresiones, 93,142 personas alcanzadas y 73,289 interacciones con la publicación a un CPM de $0.54. Solo 86 clics llegaron al enlace, así que su valor es de alcance e interacción, no de citas ni registros.",
      "tendencia_semanal": [
        {
          "semana": "5–11 nov",
          "desde": "2026-11-05",
          "hasta": "2026-11-11",
          "gasto": 66.69,
          "impresiones": 122625,
          "alcance": 93142,
          "resultado_valor": 73289
        }
      ],
      "por_mes": [
        {
          "mes": "Noviembre 2026",
          "desde": "2026-11-01",
          "hasta": "2026-11-11",
          "gasto": 66.69,
          "impresiones": 122625,
          "alcance": 93142,
          "resultado_valor": 73289
        }
      ],
      "ads": [
        {
          "nombre": "Vídeo colab The Money Coach - post existente",
          "gasto": 66.69,
          "impresiones": 122625,
          "clicks": 1583,
          "ctr": 1.29,
          "cpc": 0.04,
          "cpm": 0.54,
          "resultado_nombre": "Interacciones",
          "resultado_valor": 73289
        }
      ]
    },
    {
      "id": "120252905084310560",
      "nombre": "Oct 2026 - WhatsApp Félix - Reel (hasta 15 nov)",
      "estado": "PAUSED",
      "objetivo": "Conversaciones de WhatsApp a partir de un reel",
      "inicio": "2026-10-22",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 100,
        "cierre": "15 nov 2026"
      },
      "ventana": "Semana del 22 al 28 de octubre de 2026",
      "metricas": {
        "gasto": 4.73,
        "impresiones": 1581,
        "clicks": 64,
        "clics_enlace": 18,
        "vistas_landing": 2,
        "ctr": 4.05,
        "cpc": 0.07,
        "cpm": 2.99,
        "alcance": 1318,
        "resultado_nombre": "Conversaciones iniciadas",
        "resultado_valor": 10
      },
      "recomendacion": "Campaña de WhatsApp con un reel y presupuesto cerrado de $100 hasta el 15 de noviembre, hoy pausada con $4.73 gastados ($95.27 sin gastar). Consiguió 10 conversaciones iniciadas a $0.47 cada una con 1,581 impresiones, todas en la semana del 22 al 28 de octubre. Es una muestra muy pequeña y no se sabe cuántas de esas conversaciones llegan a cita.",
      "tendencia_semanal": [
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 4.73,
          "impresiones": 1581,
          "alcance": 1318,
          "resultado_valor": 10
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 22)",
          "desde": "2026-10-22",
          "hasta": "2026-10-31",
          "gasto": 4.73,
          "impresiones": 1581,
          "alcance": 1318,
          "resultado_valor": 10
        }
      ],
      "ads": [
        {
          "nombre": "Reel - WhatsApp",
          "gasto": 4.73,
          "impresiones": 1581,
          "clicks": 64,
          "ctr": 4.05,
          "cpc": 0.07,
          "cpm": 2.99,
          "resultado_nombre": "Conversaciones iniciadas",
          "resultado_valor": 10
        }
      ]
    },
    {
      "id": "120252791735110560",
      "nombre": "Oct 2026 - Webinar 28 Oct. 2026 (comenta la palabra)",
      "estado": "PAUSED",
      "objetivo": "Registros al webinar del 28 de octubre (anuncio de reel, \"comenta la palabra\")",
      "inicio": "2026-10-19",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 100,
        "cierre": "29 oct 2026"
      },
      "ventana": "Desde su lanzamiento (19 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 99.8,
        "impresiones": 49505,
        "clicks": 2004,
        "clics_enlace": 1251,
        "vistas_landing": 1055,
        "ctr": 4.05,
        "cpc": 0.05,
        "cpm": 2.02,
        "alcance": 31948,
        "resultado_nombre": "Registros al webinar",
        "resultado_valor": 100
      },
      "recomendacion": "Campaña de registros para el webinar del 28 de octubre, pausada tras gastar $99.80 de su presupuesto de $100. Terminó con 100 registros atribuidos por el píxel a $1.00 cada uno, 2,004 clics a $0.05 y 4.05% de CTR, con un solo anuncio (\"Quedan menos de 30 días\"). El costo por registro quedó por encima del de la campaña del 13 de octubre ($0.69, 145 registros). Los 100 registros del píxel hay que reconciliarlos con los inscritos reales del formulario.",
      "tendencia_semanal": [
        {
          "semana": "19–21 oct",
          "desde": "2026-10-19",
          "hasta": "2026-10-21",
          "gasto": 25.08,
          "impresiones": 15247,
          "alcance": 12314,
          "resultado_valor": 35
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 68.55,
          "impresiones": 31707,
          "alcance": 22845,
          "resultado_valor": 61
        },
        {
          "semana": "29 oct–4 nov",
          "desde": "2026-10-29",
          "hasta": "2026-11-04",
          "gasto": 6.16,
          "impresiones": 2543,
          "alcance": 2360,
          "resultado_valor": 4
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 19)",
          "desde": "2026-10-19",
          "hasta": "2026-10-31",
          "gasto": 99.8,
          "impresiones": 49505,
          "alcance": 31948,
          "resultado_valor": 100
        }
      ],
      "ads": [
        {
          "nombre": "Quedan menos de 30 días (reel)",
          "gasto": 99.8,
          "impresiones": 49505,
          "clicks": 2004,
          "ctr": 4.05,
          "cpc": 0.05,
          "cpm": 2.02,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 100
        }
      ]
    },
    {
      "id": "120252828550960560",
      "nombre": "Oct 2026 - FE Instaform Calificación",
      "estado": "PAUSED",
      "objetivo": "Leads calificados de Facturación Electrónica (formulario instantáneo, Instaform)",
      "inicio": "2026-10-21",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 100,
        "cierre": "4 nov 2026"
      },
      "ventana": "Desde su lanzamiento (21 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 85.48,
        "impresiones": 13879,
        "clicks": 511,
        "clics_enlace": 277,
        "vistas_landing": 7,
        "ctr": 3.68,
        "cpc": 0.17,
        "cpm": 6.16,
        "alcance": 8531,
        "resultado_nombre": "Leads",
        "resultado_valor": 7
      },
      "recomendacion": "Campaña con formulario instantáneo de Meta para leads calificados de Facturación Electrónica, pausada con $85.48 gastados de su presupuesto de $100 ($14.52 sin gastar). Consiguió 7 leads a $12.21 por lead y 511 clics a $0.17. Los 7 leads vinieron del anuncio \"Operando a ciegas (control de números)\" ($70.34); \"Ya comparaste, ya cotizaste (llave en mano)\" gastó $15.14 y no consiguió ninguno. La calidad de esos leads no se puede medir con Meta: falta que Félix diga cuántos terminaron en cita.",
      "tendencia_semanal": [
        {
          "semana": "21 oct",
          "desde": "2026-10-21",
          "hasta": "2026-10-21",
          "gasto": 2.76,
          "impresiones": 753,
          "alcance": 661,
          "resultado_valor": 0
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 49.89,
          "impresiones": 8637,
          "alcance": 5876,
          "resultado_valor": 4
        },
        {
          "semana": "29 oct–4 nov",
          "desde": "2026-10-29",
          "hasta": "2026-11-04",
          "gasto": 32.82,
          "impresiones": 4485,
          "alcance": 3555,
          "resultado_valor": 3
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 21)",
          "desde": "2026-10-21",
          "hasta": "2026-10-31",
          "gasto": 75.45,
          "impresiones": 12922,
          "alcance": 8076,
          "resultado_valor": 6
        },
        {
          "mes": "Noviembre 2026",
          "desde": "2026-11-01",
          "hasta": "2026-11-11",
          "gasto": 10.03,
          "impresiones": 957,
          "alcance": 838,
          "resultado_valor": 1
        }
      ],
      "ads": [
        {
          "nombre": "Instaform - Operando a ciegas (control de números)",
          "gasto": 70.34,
          "impresiones": 11207,
          "clicks": 414,
          "ctr": 3.69,
          "cpc": 0.17,
          "cpm": 6.28,
          "resultado_nombre": "Leads",
          "resultado_valor": 7
        },
        {
          "nombre": "Instaform - Ya comparaste Ya cotizaste (llave en mano)",
          "gasto": 15.14,
          "impresiones": 2672,
          "clicks": 97,
          "ctr": 3.63,
          "cpc": 0.16,
          "cpm": 5.67,
          "resultado_nombre": "Leads",
          "resultado_valor": 0
        }
      ]
    },
    {
      "id": "120252758005220560",
      "nombre": "Oct 2026 - Citas Contabilidad Félix",
      "estado": "PAUSED",
      "objetivo": "Citas agendadas (contabilidad, campaña de Félix)",
      "inicio": "2026-10-17",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 250,
        "cierre": "15 nov 2026"
      },
      "ventana": "Desde su lanzamiento (17 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 78.39,
        "impresiones": 10152,
        "clicks": 283,
        "clics_enlace": 139,
        "vistas_landing": 103,
        "ctr": 2.79,
        "cpc": 0.28,
        "cpm": 7.72,
        "alcance": 6471,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 1
      },
      "recomendacion": "Meta la muestra pausada, con $78.39 gastados de su presupuesto de $250 ($171.61 sin gastar; cierre previsto el 15 de noviembre) y 1 cita agendada ($78.39 por cita). No gastó nada entre el 29 de octubre y el 11 de noviembre. La única cita vino de \"CO-3 - Yo sé que todavía usas Excel\" ($14.12). \"CO-1 - Empresarios de RD respóndanme esto\" concentró casi la mitad del gasto ($37.93) sin citas propias. Con una sola cita en $78 no hay base para decidir cuál anuncio es mejor.",
      "tendencia_semanal": [
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 41.58,
          "impresiones": 5681,
          "alcance": 3920,
          "resultado_valor": 1
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 36.81,
          "impresiones": 4471,
          "alcance": 3339,
          "resultado_valor": 0
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 17)",
          "desde": "2026-10-17",
          "hasta": "2026-10-31",
          "gasto": 78.39,
          "impresiones": 10152,
          "alcance": 6471,
          "resultado_valor": 1
        }
      ],
      "ads": [
        {
          "nombre": "CO-1 - Empresarios de RD respóndanme esto - Video",
          "gasto": 37.93,
          "impresiones": 5213,
          "clicks": 153,
          "ctr": 2.93,
          "cpc": 0.25,
          "cpm": 7.28,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "CO-3 - Yo sé que todavía usas Excel - Video",
          "gasto": 14.12,
          "impresiones": 1725,
          "clicks": 38,
          "ctr": 2.2,
          "cpc": 0.37,
          "cpm": 8.19,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "CO-2 - Tu sistema de contabilidad dice que ganaste dinero - Video",
          "gasto": 13.81,
          "impresiones": 1872,
          "clicks": 76,
          "ctr": 4.06,
          "cpc": 0.18,
          "cpm": 7.38,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "CO-4 - Carrusel Empresarios de RD respóndanme esto",
          "gasto": 12.53,
          "impresiones": 1342,
          "clicks": 16,
          "ctr": 1.19,
          "cpc": 0.78,
          "cpm": 9.34,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252757568140560",
      "nombre": "Oct 2026 - Citas FE Félix",
      "estado": "PAUSED",
      "objetivo": "Citas agendadas (Facturación Electrónica, campaña de Félix)",
      "inicio": "2026-10-17",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 500,
        "cierre": "15 nov 2026"
      },
      "ventana": "Desde su lanzamiento (17 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 154.43,
        "impresiones": 19190,
        "clicks": 517,
        "clics_enlace": 256,
        "vistas_landing": 184,
        "ctr": 2.69,
        "cpc": 0.3,
        "cpm": 8.05,
        "alcance": 11353,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 1
      },
      "recomendacion": "Meta la muestra pausada, con $154.43 gastados de su presupuesto de $500 ($345.57 sin gastar; cierre previsto el 15 de noviembre) y 1 cita agendada ($154.43 por cita), la del 22 de octubre. No gastó nada entre el 29 de octubre y el 11 de noviembre. Fue la campaña más cara por cita de las nuevas: \"FE-1 - Te quedan 30 días o menos\" concentró la mitad del gasto ($76.13) y dio la única cita; los otros tres anuncios sumaron $78.30 sin ninguna. Para compararla con las demás: Ready to Buy cuesta $25.55 por cita y Consideración $22.91.",
      "tendencia_semanal": [
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 80.65,
          "impresiones": 11318,
          "alcance": 7263,
          "resultado_valor": 0
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 73.77,
          "impresiones": 7871,
          "alcance": 5847,
          "resultado_valor": 1
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 17)",
          "desde": "2026-10-17",
          "hasta": "2026-10-31",
          "gasto": 154.43,
          "impresiones": 19190,
          "alcance": 11353,
          "resultado_valor": 1
        }
      ],
      "ads": [
        {
          "nombre": "FE-1 - Te quedan 30 días o menos - Video",
          "gasto": 76.13,
          "impresiones": 10659,
          "clicks": 292,
          "ctr": 2.74,
          "cpc": 0.26,
          "cpm": 7.14,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "FE-2 - Así se ve FE - Video",
          "gasto": 27.09,
          "impresiones": 3193,
          "clicks": 96,
          "ctr": 3.01,
          "cpc": 0.28,
          "cpm": 8.48,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "FE-3 - No es la firma de DocuSign - Video",
          "gasto": 26.9,
          "impresiones": 2849,
          "clicks": 100,
          "ctr": 3.51,
          "cpc": 0.27,
          "cpm": 9.44,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "FE-4 - Carrusel Quedan menos de 30 días",
          "gasto": 24.31,
          "impresiones": 2489,
          "clicks": 29,
          "ctr": 1.17,
          "cpc": 0.84,
          "cpm": 9.77,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252755221670560",
      "nombre": "Oct 2026 - Citas Retargeting Clases Félix",
      "estado": "PAUSED",
      "objetivo": "Citas agendadas (retargeting a asistentes e interesados en las clases de FE)",
      "inicio": "2026-10-17",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 250,
        "cierre": "15 nov 2026"
      },
      "ventana": "Desde su lanzamiento (17 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 156.61,
        "impresiones": 20699,
        "clicks": 328,
        "clics_enlace": 158,
        "vistas_landing": 101,
        "ctr": 1.58,
        "cpc": 0.48,
        "cpm": 7.57,
        "alcance": 4609,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 4
      },
      "recomendacion": "Meta la muestra pausada, con $156.61 gastados de su presupuesto de $250 ($93.39 sin gastar; cierre previsto el 15 de noviembre) y 4 citas agendadas a $39.15 por cita. Las 4 citas llegaron antes del 29 de octubre: en esa semana y la siguiente gastó $39.28 sin sumar ninguna. El costo por cita subió de $18.05 (24 de octubre) a $39.15 a medida que la audiencia pequeña (4,609 personas) se saturó. Todas las citas vinieron de \"RT-2 - No pagues dos veces por lo mismo\" ($124.23).",
      "tendencia_semanal": [
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 56.5,
          "impresiones": 6395,
          "alcance": 2065,
          "resultado_valor": 2
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 60.79,
          "impresiones": 8622,
          "alcance": 2919,
          "resultado_valor": 2
        },
        {
          "semana": "29 oct–4 nov",
          "desde": "2026-10-29",
          "hasta": "2026-11-04",
          "gasto": 39.28,
          "impresiones": 5679,
          "alcance": 2291,
          "resultado_valor": 0
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 17)",
          "desde": "2026-10-17",
          "hasta": "2026-10-31",
          "gasto": 142.38,
          "impresiones": 18816,
          "alcance": 4353,
          "resultado_valor": 4
        },
        {
          "mes": "Noviembre 2026",
          "desde": "2026-11-01",
          "hasta": "2026-11-11",
          "gasto": 14.23,
          "impresiones": 1883,
          "alcance": 1200,
          "resultado_valor": 0
        }
      ],
      "ads": [
        {
          "nombre": "RT-2 - No pagues dos veces por lo mismo",
          "gasto": 124.23,
          "impresiones": 16223,
          "clicks": 281,
          "ctr": 1.73,
          "cpc": 0.44,
          "cpm": 7.66,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 4
        },
        {
          "nombre": "RT-3 - Quedan 30 días o menos",
          "gasto": 16.66,
          "impresiones": 2380,
          "clicks": 30,
          "ctr": 1.26,
          "cpc": 0.56,
          "cpm": 7,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "RT-1 - Te quitamos la facturación electrónica de tu plato",
          "gasto": 15.72,
          "impresiones": 2096,
          "clicks": 17,
          "ctr": 0.81,
          "cpc": 0.92,
          "cpm": 7.5,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252646153720560",
      "nombre": "Oct 2026 - 2 Webinar Oct. 2026 (comenta la palabra)",
      "estado": "CLOSED",
      "objetivo": "Registros al webinar del 13 de octubre (anuncio de reel, \"comenta la palabra\")",
      "inicio": "2026-10-10",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 100,
        "cierre": "13 oct 2026"
      },
      "ventana": "Del 10 al 13 de octubre de 2026",
      "metricas": {
        "gasto": 99.81,
        "impresiones": 47068,
        "clicks": 1759,
        "clics_enlace": 1107,
        "vistas_landing": 907,
        "ctr": 3.74,
        "cpc": 0.06,
        "cpm": 2.12,
        "alcance": 35579,
        "resultado_nombre": "Registros al webinar",
        "resultado_valor": 145
      },
      "recomendacion": "Campaña corta con presupuesto cerrado de $100 que corrió del 10 al 13 de octubre (día del webinar). Gastó $99.81 con un solo anuncio (\"Quedan menos de 30 días\", un reel existente) y el píxel de Meta atribuyó 145 registros a $0.69 cada uno, el costo más bajo de todas las campañas de registros del portal. Alcanzó a 35,579 personas. Meta todavía la marca como activa pero el presupuesto está agotado y su fecha de cierre pasó, por eso aparece como cerrada. Vale la pena repetir este formato para los webinars del 29 de octubre y el 12 de noviembre.",
      "tendencia_semanal": [
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 99.81,
          "impresiones": 47068,
          "alcance": 35579,
          "resultado_valor": 145
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 10)",
          "desde": "2026-10-10",
          "hasta": "2026-10-13",
          "gasto": 99.81,
          "impresiones": 47068,
          "alcance": 35579,
          "resultado_valor": 145
        }
      ],
      "ads": [
        {
          "nombre": "Quedan menos de 30 días (reel)",
          "gasto": 99.81,
          "impresiones": 47068,
          "clicks": 1759,
          "ctr": 3.74,
          "cpc": 0.06,
          "cpm": 2.12,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 145
        }
      ]
    },
    {
      "id": "120252328774890560",
      "nombre": "Campaña Clase Gratuita",
      "estado": "PAUSED",
      "objetivo": "Leads (registro a la clase gratuita de Facturación Electrónica)",
      "inicio": "2026-09-19",
      "presupuesto_diario": 8,
      "ventana": "Desde su lanzamiento (19 sep 2026) hasta hoy",
      "metricas": {
        "gasto": 161.46,
        "impresiones": 84504,
        "clicks": 3210,
        "clics_enlace": 1907,
        "vistas_landing": 1403,
        "ctr": 3.8,
        "cpc": 0.05,
        "cpm": 1.91,
        "alcance": 39168,
        "resultado_nombre": "Registros al webinar",
        "resultado_valor": 109
      },
      "recomendacion": "Meta la muestra pausada (llegó a correr con $8 diarios). Acumula 109 registros según el píxel de Meta a $1.48 c/u ($161.46 en total). En octubre gastó $105.63 y sumó 40 registros ($2.64 c/u), 36 de ellos entre el 8 y el 14 de octubre, la semana del webinar del 13. El webinar tuvo 47 inscritos confirmados en el formulario. \"Si tu negocio todavía no está en facturación electrónica\" es el anuncio con más gasto ($42.20, 19 registros a $2.22); \"No habrá prórroga\" sigue siendo el más eficiente ($0.87 por registro, 45 registros), seguido de \"Video 1\" ($1.08, 28 registros) y \"Video 2\" ($1.70, 12). Los anuncios de retargeting casi no dieron registros.",
      "tendencia_semanal": [
        {
          "semana": "17–23 sep",
          "desde": "2026-09-17",
          "hasta": "2026-09-23",
          "gasto": 20.75,
          "impresiones": 9459,
          "alcance": 7386,
          "resultado_valor": 14
        },
        {
          "semana": "24–30 sep",
          "desde": "2026-09-24",
          "hasta": "2026-09-30",
          "gasto": 35.08,
          "impresiones": 25948,
          "alcance": 16336,
          "resultado_valor": 55
        },
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 33.5,
          "impresiones": 22240,
          "alcance": 14721,
          "resultado_valor": null
        },
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 61.98,
          "impresiones": 22685,
          "alcance": 15429,
          "resultado_valor": 36
        },
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 10.14,
          "impresiones": 4166,
          "alcance": 3396,
          "resultado_valor": 4
        }
      ],
      "por_mes": [
        {
          "mes": "Septiembre 2026",
          "desde": "2026-09-19",
          "hasta": "2026-09-30",
          "gasto": 55.83,
          "impresiones": 35407,
          "alcance": 20335,
          "resultado_valor": 69
        },
        {
          "mes": "Octubre 2026",
          "desde": "2026-10-01",
          "hasta": "2026-10-19",
          "gasto": 105.63,
          "impresiones": 49097,
          "alcance": 27478,
          "resultado_valor": 40
        }
      ],
      "ads": [
        {
          "nombre": "Si tu negocio todavía no está en facturación electrónica",
          "gasto": 42.2,
          "impresiones": 20906,
          "clicks": 959,
          "ctr": 4.59,
          "cpc": 0.04,
          "cpm": 2.02,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 19
        },
        {
          "nombre": "No habrá prórroga",
          "gasto": 39.28,
          "impresiones": 32651,
          "clicks": 454,
          "ctr": 1.39,
          "cpc": 0.09,
          "cpm": 1.2,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 45
        },
        {
          "nombre": "Video 1",
          "gasto": 30.28,
          "impresiones": 11573,
          "clicks": 471,
          "ctr": 4.07,
          "cpc": 0.06,
          "cpm": 2.62,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 28
        },
        {
          "nombre": "Video 2",
          "gasto": 20.42,
          "impresiones": 9112,
          "clicks": 786,
          "ctr": 8.63,
          "cpc": 0.03,
          "cpm": 2.24,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 12
        },
        {
          "nombre": "RT - Video 1",
          "gasto": 13.83,
          "impresiones": 2973,
          "clicks": 87,
          "ctr": 2.93,
          "cpc": 0.16,
          "cpm": 4.65,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 1
        },
        {
          "nombre": "La DGII tiene las pilas puestas",
          "gasto": 9.64,
          "impresiones": 4649,
          "clicks": 375,
          "ctr": 8.07,
          "cpc": 0.03,
          "cpm": 2.07,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 2
        },
        {
          "nombre": "La fecha esta cerca y muchos todavía en el aire",
          "gasto": 2.16,
          "impresiones": 934,
          "clicks": 36,
          "ctr": 3.85,
          "cpc": 0.06,
          "cpm": 2.31,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 1
        },
        {
          "nombre": "Quedan 45 días",
          "gasto": 1.42,
          "impresiones": 784,
          "clicks": 23,
          "ctr": 2.93,
          "cpc": 0.06,
          "cpm": 1.81,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "RT - No habrá prórroga",
          "gasto": 1.37,
          "impresiones": 318,
          "clicks": 6,
          "ctr": 1.89,
          "cpc": 0.23,
          "cpm": 4.31,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "180,000 empresas",
          "gasto": 0.86,
          "impresiones": 604,
          "clicks": 13,
          "ctr": 2.15,
          "cpc": 0.07,
          "cpm": 1.42,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 1
        }
      ]
    },
    {
      "id": "120252187070040560",
      "nombre": "FE 3% Ready to Buy: Retargeting Caliente",
      "estado": "ACTIVE",
      "objetivo": "Leads (etapa 3 — Ready to Buy del funnel FE)",
      "inicio": "2026-09-11",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 634,
        "cierre": "31 dic 2026"
      },
      "ventana": "Desde su lanzamiento (11 sep 2026) hasta hoy",
      "metricas": {
        "gasto": 510.95,
        "impresiones": 77771,
        "clicks": 2074,
        "clics_enlace": 1317,
        "vistas_landing": 894,
        "ctr": 2.67,
        "cpc": 0.25,
        "cpm": 6.57,
        "alcance": 29856,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 20
      },
      "recomendacion": "Meta la muestra activa, ahora con presupuesto cerrado ampliado a $634 y cierre el 31 de diciembre (quedan $123.05 por gastar). Lleva $510.95 gastados y 20 citas agendadas a $25.55 por cita. En octubre sumó 9 citas con $208.23 y en noviembre lleva 1 con $42.52. En la última semana (5-11 de nov) gastó $21.74 sin citas nuevas. \"Faltan 180,000 empresas\" concentra el gasto ($259.10 y 10 citas); \"Doña vs 2\" tiene 4 ($12.68 por cita, la más barata) y \"180,000 empresas-Imagen\" 5 ($20.47). \"te lo voy a decir v2\" ($30.71) y \"Desde el 31 de diciembre\" ($5.20) siguen sin ninguna cita. Conviene revisar si el copy con fechas límite sigue siendo exacto.",
      "tendencia_semanal": [
        {
          "semana": "10–16 sep",
          "desde": "2026-09-10",
          "hasta": "2026-09-16",
          "gasto": 81.11,
          "impresiones": 11924,
          "alcance": 6481,
          "resultado_valor": 2
        },
        {
          "semana": "17–23 sep",
          "desde": "2026-09-17",
          "hasta": "2026-09-23",
          "gasto": 90.56,
          "impresiones": 15210,
          "alcance": 7877,
          "resultado_valor": 5
        },
        {
          "semana": "24–30 sep",
          "desde": "2026-09-24",
          "hasta": "2026-09-30",
          "gasto": 88.53,
          "impresiones": 14068,
          "alcance": 9405,
          "resultado_valor": 3
        },
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 76.88,
          "impresiones": 12082,
          "alcance": 8373,
          "resultado_valor": 3
        },
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 21.13,
          "impresiones": 2987,
          "alcance": 2505,
          "resultado_valor": 3
        },
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 12.34,
          "impresiones": 3324,
          "alcance": 2542,
          "resultado_valor": 0
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 76.64,
          "impresiones": 9285,
          "alcance": 5361,
          "resultado_valor": 2
        },
        {
          "semana": "29 oct–4 nov",
          "desde": "2026-10-29",
          "hasta": "2026-11-04",
          "gasto": 41.95,
          "impresiones": 5736,
          "alcance": 3408,
          "resultado_valor": 2
        },
        {
          "semana": "5–11 nov",
          "desde": "2026-11-05",
          "hasta": "2026-11-11",
          "gasto": 21.74,
          "impresiones": 3138,
          "alcance": 2136,
          "resultado_valor": 0
        }
      ],
      "por_mes": [
        {
          "mes": "Septiembre 2026",
          "desde": "2026-09-11",
          "hasta": "2026-09-30",
          "gasto": 260.2,
          "impresiones": 41202,
          "alcance": 18125,
          "resultado_valor": 10
        },
        {
          "mes": "Octubre 2026",
          "desde": "2026-10-01",
          "hasta": "2026-10-31",
          "gasto": 208.23,
          "impresiones": 30392,
          "alcance": 16525,
          "resultado_valor": 9
        },
        {
          "mes": "Noviembre 2026",
          "desde": "2026-11-01",
          "hasta": "2026-11-11",
          "gasto": 42.52,
          "impresiones": 6177,
          "alcance": 3758,
          "resultado_valor": 1
        }
      ],
      "ads": [
        {
          "nombre": "Faltan 180,000 empresas",
          "gasto": 259.1,
          "impresiones": 39403,
          "clicks": 1067,
          "ctr": 2.71,
          "cpc": 0.24,
          "cpm": 6.58,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 10
        },
        {
          "nombre": "180,000 empresas-Imagen",
          "gasto": 102.37,
          "impresiones": 21091,
          "clicks": 491,
          "ctr": 2.33,
          "cpc": 0.21,
          "cpm": 4.85,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 5
        },
        {
          "nombre": "Cupo v2",
          "gasto": 62.84,
          "impresiones": 8108,
          "clicks": 217,
          "ctr": 2.68,
          "cpc": 0.29,
          "cpm": 7.75,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "Doña vs 2",
          "gasto": 50.73,
          "impresiones": 5258,
          "clicks": 172,
          "ctr": 3.27,
          "cpc": 0.29,
          "cpm": 9.65,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 4
        },
        {
          "nombre": "te lo voy a decir v2",
          "gasto": 30.71,
          "impresiones": 3043,
          "clicks": 104,
          "ctr": 3.42,
          "cpc": 0.3,
          "cpm": 10.09,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Desde el 31 de diciembre",
          "gasto": 5.2,
          "impresiones": 868,
          "clicks": 23,
          "ctr": 2.65,
          "cpc": 0.23,
          "cpm": 5.99,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252085024140560",
      "nombre": "FE 17% Consideración: Leads Septiembre",
      "estado": "ACTIVE",
      "objetivo": "Leads (etapa 2 — Consideración del funnel FE)",
      "inicio": "2026-09-04",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 534,
        "cierre": "31 dic 2026"
      },
      "ventana": "Desde su lanzamiento (4 sep 2026) hasta hoy",
      "metricas": {
        "gasto": 412.45,
        "impresiones": 47121,
        "clicks": 1308,
        "clics_enlace": 835,
        "vistas_landing": 593,
        "ctr": 2.78,
        "cpc": 0.32,
        "cpm": 8.75,
        "alcance": 17560,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 18
      },
      "recomendacion": "Meta la muestra activa, ahora con presupuesto cerrado ampliado a $534 y cierre el 31 de diciembre (quedan $121.55 por gastar). Lleva $412.45 gastados y 18 citas agendadas a $22.91 por cita, el mejor costo por cita de las campañas activas. En octubre sumó 7 citas con $109.57, pero en noviembre lleva $41.22 sin ninguna cita nueva. \"Operando a ciegas\" concentra casi todo ($344.93 y las 18 citas); los otros cuatro anuncios suman $47.00 sin ninguna. Sigue pendiente decidir con Félix si se separan 2-3 anuncios a un ad set nuevo con presupuesto propio.",
      "tendencia_semanal": [
        {
          "semana": "3–9 sep",
          "desde": "2026-09-03",
          "hasta": "2026-09-09",
          "gasto": 66.44,
          "impresiones": 7808,
          "alcance": 4034,
          "resultado_valor": 2
        },
        {
          "semana": "10–16 sep",
          "desde": "2026-09-10",
          "hasta": "2026-09-16",
          "gasto": 79.31,
          "impresiones": 8122,
          "alcance": 5230,
          "resultado_valor": 6
        },
        {
          "semana": "17–23 sep",
          "desde": "2026-09-17",
          "hasta": "2026-09-23",
          "gasto": 67.54,
          "impresiones": 8378,
          "alcance": 5564,
          "resultado_valor": 1
        },
        {
          "semana": "24–30 sep",
          "desde": "2026-09-24",
          "hasta": "2026-09-30",
          "gasto": 48.37,
          "impresiones": 4978,
          "alcance": 3305,
          "resultado_valor": 2
        },
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 38.54,
          "impresiones": 4179,
          "alcance": 2505,
          "resultado_valor": 1
        },
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 6.98,
          "impresiones": 745,
          "alcance": 669,
          "resultado_valor": 0
        },
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 5.62,
          "impresiones": 756,
          "alcance": 589,
          "resultado_valor": 0
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 45.22,
          "impresiones": 4594,
          "alcance": 3128,
          "resultado_valor": 5
        },
        {
          "semana": "29 oct–4 nov",
          "desde": "2026-10-29",
          "hasta": "2026-11-04",
          "gasto": 30.78,
          "impresiones": 4391,
          "alcance": 3048,
          "resultado_valor": 1
        },
        {
          "semana": "5–11 nov",
          "desde": "2026-11-05",
          "hasta": "2026-11-11",
          "gasto": 23.64,
          "impresiones": 3169,
          "alcance": 2246,
          "resultado_valor": 0
        }
      ],
      "por_mes": [
        {
          "mes": "Septiembre 2026",
          "desde": "2026-09-04",
          "hasta": "2026-09-30",
          "gasto": 261.66,
          "impresiones": 29286,
          "alcance": 12476,
          "resultado_valor": 11
        },
        {
          "mes": "Octubre 2026",
          "desde": "2026-10-01",
          "hasta": "2026-10-31",
          "gasto": 109.57,
          "impresiones": 12197,
          "alcance": 6686,
          "resultado_valor": 7
        },
        {
          "mes": "Noviembre 2026",
          "desde": "2026-11-01",
          "hasta": "2026-11-11",
          "gasto": 41.22,
          "impresiones": 5638,
          "alcance": 3631,
          "resultado_valor": 0
        }
      ],
      "ads": [
        {
          "nombre": "Operando a ciegas",
          "gasto": 344.93,
          "impresiones": 38489,
          "clicks": 1045,
          "ctr": 2.72,
          "cpc": 0.33,
          "cpm": 8.96,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 18
        },
        {
          "nombre": "4 formas de resolver FE - Estática",
          "gasto": 18.21,
          "impresiones": 2365,
          "clicks": 53,
          "ctr": 2.24,
          "cpc": 0.34,
          "cpm": 7.7,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Otros implementadores - Estática",
          "gasto": 12.72,
          "impresiones": 1085,
          "clicks": 24,
          "ctr": 2.21,
          "cpc": 0.53,
          "cpm": 11.72,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Scrolling (17%) - Copy",
          "gasto": 9,
          "impresiones": 1423,
          "clicks": 53,
          "ctr": 3.72,
          "cpc": 0.17,
          "cpm": 6.32,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Hay empresarios",
          "gasto": 7.07,
          "impresiones": 714,
          "clicks": 17,
          "ctr": 2.38,
          "cpc": 0.42,
          "cpm": 9.9,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120251975182080560",
      "nombre": "Campaña contabilidad: Septiembre–Diciembre",
      "estado": "PAUSED",
      "objetivo": "Leads (citas agendadas)",
      "inicio": "2026-08-27",
      "presupuesto_diario": 6,
      "ventana": "Desde su lanzamiento (27 ago 2026) hasta hoy",
      "metricas": {
        "gasto": 251.51,
        "impresiones": 53402,
        "clicks": 2233,
        "clics_enlace": 1333,
        "vistas_landing": 1030,
        "ctr": 4.18,
        "cpc": 0.11,
        "cpm": 4.71,
        "alcance": 19419,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 9
      },
      "recomendacion": "Meta la muestra pausada. Sumó su cita #8 entre el 8 y el 9 de octubre, de \"Yo se que todavia usas excel (nuevo)\" (la primera de ese anuncio, tras $27.40 de gasto), y cierra con 8 citas a $31.44 por cita. En octubre lleva 1 cita con $43.68. \"Dia 1 llevando Account One de 30 a 100\" concentra 6 de las 8 citas ($140.28, ~$23.38 por cita) y \"Comparativo Contadores\" tiene 1 ($41.75). Ese anuncio de Excel ahora corre también en una campaña nueva e independiente, que ya suma 5 leads. Si se reactiva, lo más urgente sigue siendo meterle 1-2 artes estáticas nuevas: casi toda la campaña es video con los mismos creativos desde que se armó.",
      "tendencia_semanal": [
        {
          "semana": "27 ago–2 sep",
          "desde": "2026-08-27",
          "hasta": "2026-09-02",
          "gasto": 43.31,
          "impresiones": 13033,
          "alcance": 7449,
          "resultado_valor": 2
        },
        {
          "semana": "3–9 sep",
          "desde": "2026-09-03",
          "hasta": "2026-09-09",
          "gasto": 39.52,
          "impresiones": 8288,
          "alcance": 5348,
          "resultado_valor": null
        },
        {
          "semana": "10–16 sep",
          "desde": "2026-09-10",
          "hasta": "2026-09-16",
          "gasto": 41.26,
          "impresiones": 9220,
          "alcance": 6111,
          "resultado_valor": 2
        },
        {
          "semana": "17–23 sep",
          "desde": "2026-09-17",
          "hasta": "2026-09-23",
          "gasto": 42.87,
          "impresiones": 8975,
          "alcance": 5420,
          "resultado_valor": 2
        },
        {
          "semana": "24–30 sep",
          "desde": "2026-09-24",
          "hasta": "2026-09-30",
          "gasto": 40.87,
          "impresiones": 6889,
          "alcance": 4186,
          "resultado_valor": 1
        },
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 37.11,
          "impresiones": 5824,
          "alcance": 3357,
          "resultado_valor": null
        },
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 6.57,
          "impresiones": 1173,
          "alcance": 904,
          "resultado_valor": 2
        }
      ],
      "por_mes": [
        {
          "mes": "Agosto 2026",
          "desde": "2026-08-27",
          "hasta": "2026-08-31",
          "gasto": 28.66,
          "impresiones": 9676,
          "alcance": 5928,
          "resultado_valor": 1
        },
        {
          "mes": "Septiembre 2026",
          "desde": "2026-09-01",
          "hasta": "2026-09-30",
          "gasto": 179.17,
          "impresiones": 36729,
          "alcance": 15285,
          "resultado_valor": 6
        },
        {
          "mes": "Octubre 2026",
          "desde": "2026-10-01",
          "hasta": "2026-10-19",
          "gasto": 43.68,
          "impresiones": 6997,
          "alcance": 3921,
          "resultado_valor": 2
        }
      ],
      "ads": [
        {
          "nombre": "Dia 1 llevando Account One de 30 a 100",
          "gasto": 140.28,
          "impresiones": 30533,
          "clicks": 1301,
          "ctr": 4.26,
          "cpc": 0.11,
          "cpm": 4.59,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 6
        },
        {
          "nombre": "Comparativo Contadores",
          "gasto": 41.75,
          "impresiones": 9743,
          "clicks": 500,
          "ctr": 5.13,
          "cpc": 0.08,
          "cpm": 4.29,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "Yo se que todavia usas excel (nuevo)",
          "gasto": 27.4,
          "impresiones": 3538,
          "clicks": 87,
          "ctr": 2.46,
          "cpc": 0.31,
          "cpm": 7.74,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "Que hacemos en Account One mejor que en otras firmas",
          "gasto": 22.79,
          "impresiones": 5219,
          "clicks": 199,
          "ctr": 3.81,
          "cpc": 0.11,
          "cpm": 4.37,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Meet the Team",
          "gasto": 12.51,
          "impresiones": 2682,
          "clicks": 96,
          "ctr": 3.58,
          "cpc": 0.13,
          "cpm": 4.66,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Tu ni sabes que tienes un tema de contabilidad",
          "gasto": 6.78,
          "impresiones": 1687,
          "clicks": 50,
          "ctr": 2.96,
          "cpc": 0.14,
          "cpm": 4.02,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252595546730560",
      "nombre": "Campaña contabilidad: Yo sé que todavía usas excel",
      "estado": "PAUSED",
      "objetivo": "Leads (contabilidad, formulario de contacto)",
      "inicio": "2026-10-07",
      "presupuesto_diario": 4,
      "ventana": "Desde su lanzamiento (7 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 38.78,
        "impresiones": 6803,
        "clicks": 317,
        "clics_enlace": 231,
        "vistas_landing": 131,
        "ctr": 4.66,
        "cpc": 0.12,
        "cpm": 5.7,
        "alcance": 4722,
        "resultado_nombre": "Leads",
        "resultado_valor": 5
      },
      "recomendacion": "Meta la muestra pausada. Alcanzó 5 leads por el píxel de Meta con $38.78 gastados ($7.76 cada uno, subió desde $2.02 cuando llevaba $10) y un CTR de 4.66%. Los 5 leads llegaron en los primeros días: las dos semanas siguientes ($34.69 gastados) no sumaron ninguno nuevo, y ese gasto se fue casi todo entre el 8 y el 19 de octubre. El mismo anuncio (\"Yo se que todavia usas excel (nuevo)\") ahora también corre dentro de la campaña nueva de Contabilidad de Félix como \"CO-3\". Pendiente revisar el aviso de diagnóstico de señal de su conjunto \"Videos 3% etapa 3\".",
      "tendencia_semanal": [
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 4.09,
          "impresiones": 376,
          "alcance": 286,
          "resultado_valor": 3
        },
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 26.17,
          "impresiones": 4674,
          "alcance": 3405,
          "resultado_valor": 2
        },
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 8.52,
          "impresiones": 1753,
          "alcance": 1460,
          "resultado_valor": null
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 7)",
          "desde": "2026-10-07",
          "hasta": "2026-10-19",
          "gasto": 38.78,
          "impresiones": 6803,
          "alcance": 4722,
          "resultado_valor": 5
        }
      ],
      "ads": [
        {
          "nombre": "Yo se que todavia usas excel (nuevo)",
          "gasto": 38.78,
          "impresiones": 6803,
          "clicks": 317,
          "ctr": 4.66,
          "cpc": 0.12,
          "cpm": 5.7,
          "resultado_nombre": "Leads",
          "resultado_valor": 5
        }
      ]
    },
    {
      "id": "120251858423240560",
      "nombre": "Campaña: Reconocimiento 80% FE",
      "estado": "ACTIVE",
      "objetivo": "Reconocimiento de marca (etapa 1 del funnel FE)",
      "inicio": "2026-08-20",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 280.71,
        "cierre": "31 dic 2026"
      },
      "ventana": "Desde su lanzamiento (20 ago 2026) hasta hoy",
      "metricas": {
        "gasto": 280.71,
        "impresiones": 940958,
        "clicks": 10312,
        "clics_enlace": 1377,
        "vistas_landing": 451,
        "ctr": 1.1,
        "cpc": 0.03,
        "cpm": 0.3,
        "alcance": 382088,
        "resultado_nombre": null,
        "resultado_valor": null
      },
      "recomendacion": "Meta la muestra activa, con cierre previsto el 31 de diciembre, pero el presupuesto restante figura en $0 y aun así sigue entregando (unos $20-23 por semana desde el 29 de octubre). Lleva $280.71 gastados y 382,088 personas alcanzadas a un CPM de $0.30. Hay anuncios nuevos: \"Reel Felix - Registro pequenos negocios\" ($19.78, 4,927 clics a $0.004 y 21,916 reproducciones), \"Arte Quedan 2 semanas\" y \"Reel Felix - Solo te quedan 10 dias\". \"La llamada\" sigue concentrando el gasto ($138.21).",
      "tendencia_semanal": [
        {
          "semana": "20–26 ago",
          "desde": "2026-08-20",
          "hasta": "2026-08-26",
          "gasto": 92.95,
          "impresiones": 282236,
          "alcance": 154531,
          "resultado_valor": null
        },
        {
          "semana": "27 ago–2 sep",
          "desde": "2026-08-27",
          "hasta": "2026-09-02",
          "gasto": 44.89,
          "impresiones": 180088,
          "alcance": 94738,
          "resultado_valor": null
        },
        {
          "semana": "3–9 sep",
          "desde": "2026-09-03",
          "hasta": "2026-09-09",
          "gasto": 12.92,
          "impresiones": 28881,
          "alcance": 26597,
          "resultado_valor": null
        },
        {
          "semana": "10–16 sep",
          "desde": "2026-09-10",
          "hasta": "2026-09-16",
          "gasto": 12.5,
          "impresiones": 24980,
          "alcance": 22210,
          "resultado_valor": null
        },
        {
          "semana": "17–23 sep",
          "desde": "2026-09-17",
          "hasta": "2026-09-23",
          "gasto": 11.65,
          "impresiones": 22541,
          "alcance": 21120,
          "resultado_valor": null
        },
        {
          "semana": "24–30 sep",
          "desde": "2026-09-24",
          "hasta": "2026-09-30",
          "gasto": 10,
          "impresiones": 19980,
          "alcance": 18848,
          "resultado_valor": null
        },
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 1.17,
          "impresiones": 7362,
          "alcance": 6324,
          "resultado_valor": null
        },
        {
          "semana": "8–14 oct",
          "desde": "2026-10-08",
          "hasta": "2026-10-14",
          "gasto": 2.95,
          "impresiones": 16381,
          "alcance": 13347,
          "resultado_valor": null
        },
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 4.72,
          "impresiones": 20134,
          "alcance": 18565,
          "resultado_valor": null
        },
        {
          "semana": "22–28 oct",
          "desde": "2026-10-22",
          "hasta": "2026-10-28",
          "gasto": 42.89,
          "impresiones": 150487,
          "alcance": 92783,
          "resultado_valor": null
        },
        {
          "semana": "29 oct–4 nov",
          "desde": "2026-10-29",
          "hasta": "2026-11-04",
          "gasto": 20.77,
          "impresiones": 86927,
          "alcance": 53261,
          "resultado_valor": null
        },
        {
          "semana": "5–11 nov",
          "desde": "2026-11-05",
          "hasta": "2026-11-11",
          "gasto": 23.29,
          "impresiones": 100876,
          "alcance": 61871,
          "resultado_valor": null
        }
      ],
      "por_mes": [
        {
          "mes": "Agosto 2026",
          "desde": "2026-08-20",
          "hasta": "2026-08-31",
          "gasto": 127.93,
          "impresiones": 416250,
          "alcance": 196897,
          "resultado_valor": null
        },
        {
          "mes": "Septiembre 2026",
          "desde": "2026-09-01",
          "hasta": "2026-09-30",
          "gasto": 56.98,
          "impresiones": 142456,
          "alcance": 102145,
          "resultado_valor": null
        },
        {
          "mes": "Octubre 2026",
          "desde": "2026-10-01",
          "hasta": "2026-10-31",
          "gasto": 59.82,
          "impresiones": 223737,
          "alcance": 130068,
          "resultado_valor": null
        },
        {
          "mes": "Noviembre 2026",
          "desde": "2026-11-01",
          "hasta": "2026-11-11",
          "gasto": 35.98,
          "impresiones": 158515,
          "alcance": 86605,
          "resultado_valor": null
        }
      ],
      "ads": [
        {
          "nombre": "La llamada",
          "gasto": 138.21,
          "impresiones": 275553,
          "clicks": 3732,
          "ctr": 1.35,
          "cpc": 0.04,
          "cpm": 0.5,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 76284
        },
        {
          "nombre": "Carrusel sera una de ellas",
          "gasto": 49.99,
          "impresiones": 251021,
          "clicks": 400,
          "ctr": 0.16,
          "cpc": 0.12,
          "cpm": 0.2,
          "resultado_nombre": "Alcance",
          "resultado_valor": 98796
        },
        {
          "nombre": "Carrusel mexico",
          "gasto": 19.81,
          "impresiones": 106498,
          "clicks": 187,
          "ctr": 0.18,
          "cpc": 0.11,
          "cpm": 0.19,
          "resultado_nombre": "Alcance",
          "resultado_valor": 56657
        },
        {
          "nombre": "Reel Felix - Registro pequenos negocios",
          "gasto": 19.78,
          "impresiones": 64449,
          "clicks": 4927,
          "ctr": 7.64,
          "cpc": 0,
          "cpm": 0.31,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 21916
        },
        {
          "nombre": "Carrusel la llamada",
          "gasto": 11.73,
          "impresiones": 65384,
          "clicks": 117,
          "ctr": 0.18,
          "cpc": 0.1,
          "cpm": 0.18,
          "resultado_nombre": "Alcance",
          "resultado_valor": 44119
        },
        {
          "nombre": "mexico",
          "gasto": 9.24,
          "impresiones": 23049,
          "clicks": 448,
          "ctr": 1.94,
          "cpc": 0.02,
          "cpm": 0.4,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 4407
        },
        {
          "nombre": "Arte mexico",
          "gasto": 8.69,
          "impresiones": 41638,
          "clicks": 48,
          "ctr": 0.12,
          "cpc": 0.18,
          "cpm": 0.21,
          "resultado_nombre": "Alcance",
          "resultado_valor": 27756
        },
        {
          "nombre": "Arte tu empresa sera una de ellas",
          "gasto": 7.61,
          "impresiones": 39902,
          "clicks": 61,
          "ctr": 0.15,
          "cpc": 0.12,
          "cpm": 0.19,
          "resultado_nombre": "Alcance",
          "resultado_valor": 30054
        },
        {
          "nombre": "Arte la llamada",
          "gasto": 5.87,
          "impresiones": 33283,
          "clicks": 55,
          "ctr": 0.17,
          "cpc": 0.11,
          "cpm": 0.18,
          "resultado_nombre": "Alcance",
          "resultado_valor": 26618
        },
        {
          "nombre": "Reel Felix - Solo te quedan 10 dias",
          "gasto": 4.4,
          "impresiones": 12519,
          "clicks": 256,
          "ctr": 2.04,
          "cpc": 0.02,
          "cpm": 0.35,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 6181
        },
        {
          "nombre": "Arte Quedan 2 semanas",
          "gasto": 3.66,
          "impresiones": 21217,
          "clicks": 19,
          "ctr": 0.09,
          "cpc": 0.19,
          "cpm": 0.17,
          "resultado_nombre": "Alcance",
          "resultado_valor": 12836
        },
        {
          "nombre": "\"Tu empresa será una de ellas?\"",
          "gasto": 1.72,
          "impresiones": 6445,
          "clicks": 62,
          "ctr": 0.96,
          "cpc": 0.03,
          "cpm": 0.27,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 921
        }
      ]
    },
    {
      "id": "120237775235040560",
      "nombre": "Awareness",
      "estado": "PAUSED",
      "objetivo": "Reproducciones de video",
      "inicio": "2025-11-12",
      "presupuesto_diario": 4,
      "ventana": "Desde el 20 ago 2026 hasta hoy (campaña de largo plazo, pausada el 2 oct)",
      "metricas": {
        "gasto": 173.49,
        "impresiones": 459522,
        "clicks": 4020,
        "clics_enlace": 494,
        "vistas_landing": 1,
        "ctr": 0.87,
        "cpc": 0.04,
        "cpm": 0.38,
        "alcance": 346886,
        "resultado_nombre": "Reproducciones completas",
        "resultado_valor": 135602
      },
      "recomendacion": "Se pausó el 2 de octubre a pedido del equipo: se apagaron \"Como es tener un negocio en RD\" y \"La vida es un video juego\" (los dos que concentraban el gasto) y \"Si el negocio paga todo\" ya estaba pausado, así que la campaña ya no entrega (0 gasto desde el 3 de octubre). Cerró la ventana desde el 20 de agosto con 135,602 reproducciones completas a $173.49, un costo marginal de ~$0.0013 por reproducción. Si se quiere retomar el alcance de marca, habría que subir creativos nuevos en lugar de reactivar estos.",
      "tendencia_semanal": [
        {
          "semana": "20–26 ago",
          "desde": "2026-08-20",
          "hasta": "2026-08-26",
          "gasto": 27.04,
          "impresiones": 72589,
          "alcance": 67404,
          "resultado_valor": null
        },
        {
          "semana": "27 ago–2 sep",
          "desde": "2026-08-27",
          "hasta": "2026-09-02",
          "gasto": 29.75,
          "impresiones": 76453,
          "alcance": 72431,
          "resultado_valor": null
        },
        {
          "semana": "3–9 sep",
          "desde": "2026-09-03",
          "hasta": "2026-09-09",
          "gasto": 27.33,
          "impresiones": 76504,
          "alcance": 67373,
          "resultado_valor": null
        },
        {
          "semana": "10–16 sep",
          "desde": "2026-09-10",
          "hasta": "2026-09-16",
          "gasto": 28.13,
          "impresiones": 70800,
          "alcance": 65708,
          "resultado_valor": null
        },
        {
          "semana": "17–23 sep",
          "desde": "2026-09-17",
          "hasta": "2026-09-23",
          "gasto": 27.51,
          "impresiones": 73120,
          "alcance": 66343,
          "resultado_valor": null
        },
        {
          "semana": "24–30 sep",
          "desde": "2026-09-24",
          "hasta": "2026-09-30",
          "gasto": 27.75,
          "impresiones": 72232,
          "alcance": 67261,
          "resultado_valor": null
        },
        {
          "semana": "1–7 oct",
          "desde": "2026-10-01",
          "hasta": "2026-10-07",
          "gasto": 5.98,
          "impresiones": 17824,
          "alcance": 17305,
          "resultado_valor": null
        }
      ],
      "por_mes": [
        {
          "mes": "Agosto 2026 (desde el 20)",
          "desde": "2026-08-20",
          "hasta": "2026-08-31",
          "gasto": 48.96,
          "impresiones": 125610,
          "alcance": 113189,
          "resultado_valor": null
        },
        {
          "mes": "Septiembre 2026",
          "desde": "2026-09-01",
          "hasta": "2026-09-30",
          "gasto": 118.55,
          "impresiones": 316088,
          "alcance": 255966,
          "resultado_valor": null
        },
        {
          "mes": "Octubre 2026",
          "desde": "2026-10-01",
          "hasta": "2026-10-08",
          "gasto": 5.98,
          "impresiones": 17824,
          "alcance": 17305,
          "resultado_valor": null
        }
      ],
      "ads": [
        {
          "nombre": "Como es tener un negocio en RD",
          "gasto": 136.19,
          "impresiones": 369338,
          "clicks": 2473,
          "ctr": 0.67,
          "cpc": 0.06,
          "cpm": 0.37,
          "resultado_nombre": "Reproducciones completas",
          "resultado_valor": 106579
        },
        {
          "nombre": "La vida es un video juego",
          "gasto": 36.59,
          "impresiones": 88326,
          "clicks": 1509,
          "ctr": 1.71,
          "cpc": 0.02,
          "cpm": 0.41,
          "resultado_nombre": "Reproducciones completas",
          "resultado_valor": 28463
        },
        {
          "nombre": "Si el negocio paga todo",
          "gasto": 0.71,
          "impresiones": 1858,
          "clicks": 38,
          "ctr": 2.05,
          "cpc": 0.02,
          "cpm": 0.38,
          "resultado_nombre": "Reproducciones completas",
          "resultado_valor": 560
        }
      ]
    }
  ],
  "historico": {
    "campanas_pausadas": 36,
    "rango": "jul 2025 – ago 2026"
  },
  "roadmap": {
    "completado": [
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
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 7 de octubre. Hallazgos clave: Ready to Buy subió a 13 citas (3 nuevas en octubre, $25.49 por cita) y cierra el 10 de octubre; Consideración sumó su cita #12; Contabilidad aparece pausada en Meta con 7 citas; la Campaña Clase Gratuita suma $85.04 y el webinar del 13 de octubre ya tiene 47 inscritos, aunque el píxel de Meta no atribuye registros nuevos desde el 1 de octubre.",
      "Se refrescaron métricas, tendencia semanal y recomendaciones con datos reales al 8 de octubre. Hallazgos clave: Ready to Buy y Consideración se mantienen en 13 y 12 citas (sin citas nuevas hoy); Ready to Buy cierra en 2 días con $19.98 por gastar; Contabilidad sigue pausada con 7 citas; la Campaña Clase Gratuita suma $89.88 y el píxel sigue sin atribuir registros nuevos, con el webinar del 13 de octubre en 30 inscritos. Reconocimiento reporta un gasto residual mínimo aunque su presupuesto ya estaba agotado.",
      "Se sumaron al portal dos cambios hechos en Meta Ads: la nueva campaña \"Campaña contabilidad: Yo sé que todavía usas excel\" (creada el 7 de octubre, $4 diarios, ya con 3 leads a $1.97) y la reactivación de Reconocimiento con presupuesto cerrado hasta el 28 de octubre. Con ellas son 5 las campañas activas; Awareness sigue sin ningún anuncio encendido.",
      "Se refrescaron métricas y recomendaciones con datos reales al 9 de octubre. Hallazgos clave: Ready to Buy sumó 3 citas (16 en total, $22.37 por cita) y Contabilidad sumó la cita #8 con el anuncio de Excel; Consideración sigue en 12. Meta ya no muestra activas Ready to Buy, Consideración, Reconocimiento ni Contabilidad (Sept–Dic): solo Clase Gratuita y la campaña nueva de Contabilidad (Excel, 5 leads a $2.02).",
      "Se refrescaron datos al 10 de octubre: Clase Gratuita subió a $8 diarios (73 registros, $108.44), el webinar del 13 de octubre ya tiene 47 inscritos, y las campañas pausadas pasaron al Histórico para que el dashboard muestre solo lo activo.",
      "Se refrescaron datos al 19 de octubre: entraron 3 campañas nuevas de Citas de Félix (FE $500, Contabilidad $250 y Retargeting Clases $250, todas hasta el 15 de noviembre, activas desde el 17 de octubre) y la campaña \"comenta la palabra\" del webinar del 13 de octubre ($99.81, 145 registros a $0.69) quedó cerrada. Clase Gratuita y Excel quedaron pausadas. Se sumaron semanas del 8 al 14 y del 15 al 19 de octubre.",
      "Se refrescaron datos al 22 de octubre: Ready to Buy, Consideración y Reconocimiento volvieron a estar activas en Meta (cierre el 28 de octubre), entraron 2 campañas nuevas (registros para el webinar del 28 de octubre, con 36 registros a $0.80, y una de leads calificados con formulario Instaform) y las campañas de Citas de Félix sumaron sus primeras 3 citas (1 en Contabilidad, 2 en Retargeting Clases).",
      "Se refrescaron datos al 24 de octubre: Citas Retargeting Clases ya suma 4 citas a $18.05 (la más barata de las activas), Consideración sube a 15 y Ready to Buy a 17; Citas FE y Contabilidad tienen 1 cita cada una; el webinar del 28 de octubre llega a 55 registros a $0.81 y el formulario Instaform consiguió su primer lead.",
      "Se refrescaron datos al 11 de noviembre: Ready to Buy y Consideración siguen activas con presupuesto ampliado ($634 y $534) y cierre el 31 de diciembre, y suman 20 y 18 citas; Reconocimiento sigue activa con anuncios nuevos. Las tres campañas de Citas de Félix, el webinar del 28 de octubre (100 registros a $1.00), Instaform (7 leads a $12.21) y una campaña de WhatsApp están pausadas y pasaron al Histórico. Entró una campaña nueva de interacción con un vídeo en colaboración con The Money Coach."
    ],
    "pendientes": [
      "Webinar del 12 de noviembre (jueves, 7 pm): no hay ninguna campaña de registros activa en esta cuenta (la del webinar del 28 de octubre quedó pausada con 100 registros en el píxel a $1.00). Falta confirmar el Zoom y pasar a Félix la lista de inscritos. Sigue pendiente reconciliar los registros del píxel con los inscritos reales del formulario.",
      "Las tres campañas de Citas de Félix (FE $500, Contabilidad $250 y Retargeting Clases $250, hasta el 15 de noviembre) están pausadas con 1, 1 y 4 citas. Queda por decidir con Félix si se reactivan antes del 15 de noviembre o se deja el presupuesto sin gastar. Ready to Buy, Consideración y Reconocimiento siguen activas hasta el 31 de diciembre.",
      "Contabilidad aparece pausada en Meta, con 8 citas (la #8 llegó entre el 8 y el 9 de octubre) y $43.68 gastados en octubre. Si se reactiva, lo más urgente es meterle 1-2 artes estáticas: la campaña es 100% video con los mismos creativos desde que se armó, y \"Yo se que todavia usas excel (nuevo)\" llegó a $22.84 con un CPC 3 veces más alto que el resto y sin citas.",
      "Sacar 2-3 anuncios de Consideración (los con algo de CTR, como \"Hay empresarios\") a un ad set nuevo con presupuesto propio, para que Félix vea más variedad de creativos sin depender del algoritmo — pendiente de confirmar con Félix cuáles anuncios y cuánto presupuesto asignarles. \"Scrolling (17%) - Copy\" ya lleva cuatro semanas seguidas recibiendo más gasto cada vez (subió de $0.35 a $1.45), señal cada vez más clara de que el algoritmo lo está probando en serio.",
      "Webinar del 13 de octubre: ya se realizó, con 47 inscritos en el formulario. La campaña de registros atribuyó 109 + 145 registros en Meta (campaña principal + la de \"comenta la palabra\"), más de los 47 del formulario, así que conviene reconciliar cuántos de esos registros de píxel son inscripciones reales. Siguen pendientes las sesiones de Zoom del 29 de octubre y el 12 de noviembre.",
      "Regla creativa nueva: no hacer más artes basados solo en una cifra grande (tipo \"180,000 empresas\" o \"Quedan 45 días\"). A los que ya están corriendo con números, pegarles recortes de noticias reales para que se vean más serios y creíbles. Pendiente además pausar los videos con t-shirt que corren en la otra cuenta publicitaria de Account One (408193953213566, dominio accountone.com.do), que todavía no se puede gestionar desde el portal, y confirmar si \"Operando a ciegas\" (el de mejor desempeño de Consideración) entra en esa pausa.",
      "El webinar del 29 de septiembre ya cerró con 97 registros confirmados — capturar qué hizo que \"Imagen 2\" dominara esta ronda (41 de 62 registros vía píxel) para replicarlo en los próximos 3 webinars (13 oct, 29 oct, 12 nov).",
      "Todavía no hay visibilidad de ventas/contratos cerrados — los leads/citas agendadas del funnel FE + Contabilidad son lo máximo que mide Meta Ads (llega hasta la cita agendada). Falta que Félix comparta desde su CRM/GHL cuántas de esas citas se convirtieron en cliente, para poder medir el resultado real del negocio y no solo el volumen de leads.",
      "Hallazgo de Naomi (monitoreo de leads): está llegando un volumen notable de negocios de retail y restaurantes preguntando específicamente si el servicio se conecta con su punto de venta (POS) — para ese perfil de negocio, la Facturación Electrónica tiene que salir integrada directo de la caja/POS, no como trámite aparte. Decidir con Félix: (1) si Account One ofrece o puede conectar con integración de POS, vale crear un ángulo de anuncio específico para retail/restaurantes mencionándolo, porque hay demanda represada ahí; (2) si no la ofrece, aclarar esto en la landing o en el primer mensaje de contacto para evitar leads mal calificados que entran esperando algo que no se les puede dar. Corto plazo: pedirle a Naomi que cuantifique cuántos leads mencionan POS para dimensionar el segmento.",
      "Pausar el anuncio de la oferta 25%/B-01 el 30 de septiembre — después de esa fecha el precio y el dato de comprobantes B-01 dejan de ser exactos y hay que revisar el copy.",
      "Completar la verificación de negocio (Business Verification) en el Business Manager de Meta para desbloquear el acceso a datos en vivo del portal.",
      "Poner a correr el reel viral (instagram.com/reel/DdRpN3zuQu7, cuenta @themoneycoachrd) como anuncio nuevo e independiente — decidido, pendiente de ejecutar.",
      "Construir una landing propia con formulario propio (no la de GHL/Félix existente), enfocada en el miedo, usando los dos reels de \"no hay prórroga\" y un timer de cuenta regresiva (quedan 3 semanas / 2 semanas / 1 semana). Pendiente que Félix pase el copy y los videos que se hicieron virales."
    ],
    "proximas_artes": [
      "Awareness quedó pausada el 2 de octubre: definir con Félix si se reemplaza por creativos nuevos."
    ],
    "proximos_pasos": [
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
  // Same for the monthly breakdown (which month each cita/lead came in).
  for (const m of c.por_mes || []) {
    m.costo_resultado = cprOf(m.gasto, m.resultado_valor);
  }
}

// Real closed (lifetime) budgets as configured on each campaign in Meta Ads
// Manager, confirmed directly against the account on Oct 1 2026 — these are
// NOT monthly figures (the original "Plan Funnel FE Septiembre 2026" draft
// used a sep→oct monthly split that was never actually set up in Meta this
// way; campaigns were configured with a single closed lifetime budget and a
// stop_time instead). Same map used in snapshot and live mode.
const FE_PRESUPUESTOS = {
  "120251858423240560": { monto: 280.71, cierre: "31 dic 2026" }, // Reconocimiento
  "120252085024140560": { monto: 534.00, cierre: "31 dic 2026" }, // Consideración (40%)
  "120252187070040560": { monto: 634.00, cierre: "31 dic 2026" },  // Ready to Buy (40%)
  "120252758005220560": { monto: 250.00, cierre: "15 nov 2026" }, // Oct 2026 - Citas Contabilidad Félix
  "120252757568140560": { monto: 500.00, cierre: "15 nov 2026" }, // Oct 2026 - Citas FE Félix
  "120252755221670560": { monto: 250.00, cierre: "15 nov 2026" }, // Oct 2026 - Citas Retargeting Clases Félix
  "120252791735110560": { monto: 100.00, cierre: "29 oct 2026" }, // Webinar 28 oct (comenta la palabra)
  "120252828550960560": { monto: 100.00, cierre: "4 nov 2026" }   // FE Instaform Calificación
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
