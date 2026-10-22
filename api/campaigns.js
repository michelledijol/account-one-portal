// Serverless function: returns live campaign data from the Meta Marketing API
// when META_ACCESS_TOKEN + META_AD_ACCOUNT_ID are configured as Vercel env vars.
// Falls back to a static snapshot (clearly labeled) so the portal works before
// those are wired up, or if the live call fails for any reason.

const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "677439744786765";
const GRAPH_VERSION = "v20.0";

const SNAPSHOT = {
  "modo": "snapshot",
  "actualizado": "2026-10-22T13:30:00+02:00",
  "resumen": {
    "campanas_activas": 8,
    "invertido_total": 1840.56,
    "leads": 46,
    "alcance_combinado": 784346
  },
  "campanas": [
    {
      "id": "120252791735110560",
      "nombre": "Oct 2026 - Webinar 28 Oct. 2026 (comenta la palabra)",
      "estado": "ACTIVE",
      "objetivo": "Registros al webinar del 28 de octubre (anuncio de reel, \"comenta la palabra\")",
      "inicio": "2026-10-19",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 100,
        "cierre": "29 oct 2026"
      },
      "ventana": "Desde su lanzamiento (19 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 28.64,
        "impresiones": 17005,
        "clicks": 747,
        "clics_enlace": 416,
        "vistas_landing": 336,
        "ctr": 4.39,
        "cpc": 0.04,
        "cpm": 1.68,
        "alcance": 13576,
        "resultado_nombre": "Registros al webinar",
        "resultado_valor": 36
      },
      "recomendacion": "Campaña nueva de registros para el webinar del 28 de octubre, con presupuesto cerrado de $100 hasta el 29 de octubre, encendida el 19 de octubre. Lleva $28.64 gastados ($71.36 por gastar) y el píxel atribuye 36 registros a $0.80 cada uno, con 747 clics a $0.04 y 4.39% de CTR. Usa el mismo anuncio que funcionó en el webinar del 13 de octubre (\"Quedan menos de 30 días\"). Ese webinar costó $0.69 por registro, así que este va algo más caro pero en el mismo rango. Conviene reconciliar los registros del píxel con los inscritos reales del formulario.",
      "tendencia_semanal": [
        {
          "semana": "19–21 oct",
          "desde": "2026-10-19",
          "hasta": "2026-10-21",
          "gasto": 25.08,
          "impresiones": 15247,
          "alcance": 12314,
          "resultado_valor": 35
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 19)",
          "desde": "2026-10-19",
          "hasta": "2026-10-22",
          "gasto": 28.64,
          "impresiones": 17005,
          "alcance": 13576,
          "resultado_valor": 36
        }
      ],
      "ads": [
        {
          "nombre": "Quedan menos de 30 días (reel)",
          "gasto": 28.64,
          "impresiones": 17005,
          "clicks": 747,
          "ctr": 4.39,
          "cpc": 0.04,
          "cpm": 1.68,
          "resultado_nombre": "Registros al webinar",
          "resultado_valor": 36
        }
      ]
    },
    {
      "id": "120252828550960560",
      "nombre": "Oct 2026 - FE Instaform Calificación",
      "estado": "ACTIVE",
      "objetivo": "Leads calificados de Facturación Electrónica (formulario instantáneo, Instaform)",
      "inicio": "2026-10-21",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 100,
        "cierre": "4 nov 2026"
      },
      "ventana": "Desde su lanzamiento (21 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 3.71,
        "impresiones": 938,
        "clicks": 48,
        "clics_enlace": 29,
        "vistas_landing": 0,
        "ctr": 5.12,
        "cpc": 0.08,
        "cpm": 3.96,
        "alcance": 820,
        "resultado_nombre": "Leads",
        "resultado_valor": 0
      },
      "recomendacion": "Campaña nueva con formulario instantáneo de Meta para captar leads de Facturación Electrónica con preguntas de calificación. Presupuesto cerrado de $100 hasta el 4 de noviembre, encendida el 21 de octubre. Lleva $3.71 gastados, 48 clics a $0.08 y 5.12% de CTR, aún sin leads (muy pronto). Tiene 2 anuncios: \"Operando a ciegas (control de números)\" ($2.37, 6.06% de CTR) y \"Ya comparaste, ya cotizaste (llave en mano)\" ($1.34, 3.61%). Esperar unos días antes de juzgar el costo por lead.",
      "tendencia_semanal": [
        {
          "semana": "21 oct",
          "desde": "2026-10-21",
          "hasta": "2026-10-21",
          "gasto": 2.76,
          "impresiones": 753,
          "alcance": 661,
          "resultado_valor": 0
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 21)",
          "desde": "2026-10-21",
          "hasta": "2026-10-22",
          "gasto": 3.71,
          "impresiones": 938,
          "alcance": 820,
          "resultado_valor": 0
        }
      ],
      "ads": [
        {
          "nombre": "Instaform - Operando a ciegas (control de números)",
          "gasto": 2.37,
          "impresiones": 578,
          "clicks": 35,
          "ctr": 6.06,
          "cpc": 0.07,
          "cpm": 4.1,
          "resultado_nombre": "Leads",
          "resultado_valor": 0
        },
        {
          "nombre": "Instaform - Ya comparaste Ya cotizaste (llave en mano)",
          "gasto": 1.34,
          "impresiones": 360,
          "clicks": 13,
          "ctr": 3.61,
          "cpc": 0.1,
          "cpm": 3.72,
          "resultado_nombre": "Leads",
          "resultado_valor": 0
        }
      ]
    },
    {
      "id": "120252758005220560",
      "nombre": "Oct 2026 - Citas Contabilidad Félix",
      "estado": "ACTIVE",
      "objetivo": "Citas agendadas (contabilidad, campaña de Félix)",
      "inicio": "2026-10-17",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 250,
        "cierre": "15 nov 2026"
      },
      "ventana": "Desde su lanzamiento (17 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 44.63,
        "impresiones": 6049,
        "clicks": 197,
        "clics_enlace": 89,
        "vistas_landing": 64,
        "ctr": 3.26,
        "cpc": 0.23,
        "cpm": 7.38,
        "alcance": 4167,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 1
      },
      "recomendacion": "Campaña nueva con presupuesto cerrado de $250 hasta el 15 de noviembre, encendida el 17 de octubre. Lleva $44.63 gastados ($205.37 por gastar), 197 clics a $0.23 y su primera cita agendada ($44.63 por cita), que vino del anuncio \"CO-3 - Yo sé que todavía usas Excel\". \"CO-1 - Empresarios de RD respóndanme esto\" concentra la mitad del gasto ($22.09, 3.32% de CTR); \"CO-2\" tiene el mejor CTR (4.78%) con $7.67 y el carrusel CO-4 es el más flojo (1.44%). Con una sola cita todavía es pronto para comparar anuncios: conviene esperar a tener más citas.",
      "tendencia_semanal": [
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 41.58,
          "impresiones": 5681,
          "alcance": 3920,
          "resultado_valor": 1
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 17)",
          "desde": "2026-10-17",
          "hasta": "2026-10-22",
          "gasto": 44.63,
          "impresiones": 6049,
          "alcance": 4167,
          "resultado_valor": 1
        }
      ],
      "ads": [
        {
          "nombre": "CO-1 - Empresarios de RD respóndanme esto - Video",
          "gasto": 22.09,
          "impresiones": 3016,
          "clicks": 100,
          "ctr": 3.32,
          "cpc": 0.22,
          "cpm": 7.32,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "CO-3 - Yo sé que todavía usas Excel - Video",
          "gasto": 8.13,
          "impresiones": 1030,
          "clicks": 29,
          "ctr": 2.82,
          "cpc": 0.28,
          "cpm": 7.89,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "CO-2 - Tu sistema de contabilidad dice que ganaste dinero - Video",
          "gasto": 7.67,
          "impresiones": 1172,
          "clicks": 56,
          "ctr": 4.78,
          "cpc": 0.14,
          "cpm": 6.54,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "CO-4 - Carrusel Empresarios de RD respóndanme esto",
          "gasto": 6.74,
          "impresiones": 831,
          "clicks": 12,
          "ctr": 1.44,
          "cpc": 0.56,
          "cpm": 8.11,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252757568140560",
      "nombre": "Oct 2026 - Citas FE Félix",
      "estado": "ACTIVE",
      "objetivo": "Citas agendadas (Facturación Electrónica, campaña de Félix)",
      "inicio": "2026-10-17",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 500,
        "cierre": "15 nov 2026"
      },
      "ventana": "Desde su lanzamiento (17 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 86.59,
        "impresiones": 12122,
        "clicks": 377,
        "clics_enlace": 165,
        "vistas_landing": 104,
        "ctr": 3.11,
        "cpc": 0.23,
        "cpm": 7.14,
        "alcance": 7659,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 0
      },
      "recomendacion": "Campaña de Facturación Electrónica con presupuesto cerrado de $500 hasta el 15 de noviembre, encendida el 17 de octubre. Lleva $86.59 gastados ($413.41 por gastar), 377 clics a $0.23 y 0 citas agendadas todavía en 6 días. \"FE-1 - Te quedan 30 días o menos\" concentra el 49% del gasto ($42.69, 3.28% de CTR); \"FE-3\" tiene el mejor CTR (3.79%) y el carrusel \"FE-4\" el más flojo (1.28%). Ya pasó la primera semana sin citas: vale revisar con Félix si la landing y el agendamiento reciben bien este tráfico (104 vistas de landing para 165 clics en el enlace).",
      "tendencia_semanal": [
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 80.65,
          "impresiones": 11318,
          "alcance": 7263,
          "resultado_valor": 0
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 17)",
          "desde": "2026-10-17",
          "hasta": "2026-10-22",
          "gasto": 86.59,
          "impresiones": 12122,
          "alcance": 7659,
          "resultado_valor": 0
        }
      ],
      "ads": [
        {
          "nombre": "FE-1 - Te quedan 30 días o menos - Video",
          "gasto": 42.69,
          "impresiones": 6637,
          "clicks": 218,
          "ctr": 3.28,
          "cpc": 0.2,
          "cpm": 6.43,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "FE-3 - No es la firma de DocuSign - Video",
          "gasto": 15.59,
          "impresiones": 1872,
          "clicks": 71,
          "ctr": 3.79,
          "cpc": 0.22,
          "cpm": 8.33,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "FE-2 - Así se ve FE - Video",
          "gasto": 15.17,
          "impresiones": 1890,
          "clicks": 66,
          "ctr": 3.49,
          "cpc": 0.23,
          "cpm": 8.03,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "FE-4 - Carrusel Quedan menos de 30 días",
          "gasto": 13.14,
          "impresiones": 1723,
          "clicks": 22,
          "ctr": 1.28,
          "cpc": 0.6,
          "cpm": 7.63,
          "resultado_nombre": null,
          "resultado_valor": null
        }
      ]
    },
    {
      "id": "120252755221670560",
      "nombre": "Oct 2026 - Citas Retargeting Clases Félix",
      "estado": "ACTIVE",
      "objetivo": "Citas agendadas (retargeting a asistentes e interesados en las clases de FE)",
      "inicio": "2026-10-17",
      "presupuesto_diario": null,
      "presupuesto_cerrado": {
        "monto": 250,
        "cierre": "15 nov 2026"
      },
      "ventana": "Desde su lanzamiento (17 oct 2026) hasta hoy",
      "metricas": {
        "gasto": 58.38,
        "impresiones": 6632,
        "clicks": 112,
        "clics_enlace": 53,
        "vistas_landing": 32,
        "ctr": 1.69,
        "cpc": 0.52,
        "cpm": 8.8,
        "alcance": 2122,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 2
      },
      "recomendacion": "Campaña de retargeting con presupuesto cerrado de $250 hasta el 15 de noviembre, encendida el 17 de octubre. Lleva $58.38 gastados ($191.62 por gastar) y ya suma 2 citas agendadas a $29.19 cada una, las dos del anuncio \"RT-2 - No pagues dos veces por lo mismo\" ($45.49 gastados, 1.86% de CTR). Solo alcanzó a 2,122 personas (CPM $8.80): la audiencia es pequeña y se satura rápido, así que conviene vigilar la frecuencia. RT-1 y RT-3 no han dado citas.",
      "tendencia_semanal": [
        {
          "semana": "15–21 oct",
          "desde": "2026-10-15",
          "hasta": "2026-10-21",
          "gasto": 56.5,
          "impresiones": 6395,
          "alcance": 2065,
          "resultado_valor": 2
        }
      ],
      "por_mes": [
        {
          "mes": "Octubre 2026 (desde el 17)",
          "desde": "2026-10-17",
          "hasta": "2026-10-22",
          "gasto": 58.38,
          "impresiones": 6632,
          "alcance": 2122,
          "resultado_valor": 2
        }
      ],
      "ads": [
        {
          "nombre": "RT-2 - No pagues dos veces por lo mismo",
          "gasto": 45.49,
          "impresiones": 4902,
          "clicks": 91,
          "ctr": 1.86,
          "cpc": 0.5,
          "cpm": 9.28,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 2
        },
        {
          "nombre": "RT-1 - Te quitamos la facturación electrónica de tu plato",
          "gasto": 7.35,
          "impresiones": 923,
          "clicks": 9,
          "ctr": 0.98,
          "cpc": 0.82,
          "cpm": 7.96,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "RT-3 - Quedan 30 días o menos",
          "gasto": 5.54,
          "impresiones": 807,
          "clicks": 12,
          "ctr": 1.49,
          "cpc": 0.46,
          "cpm": 6.86,
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
        "monto": 458.21,
        "cierre": "28 oct 2026"
      },
      "ventana": "Desde su lanzamiento (11 sep 2026) hasta hoy",
      "metricas": {
        "gasto": 380.71,
        "impresiones": 61052,
        "clicks": 1524,
        "clics_enlace": 974,
        "vistas_landing": 622,
        "ctr": 2.5,
        "cpc": 0.25,
        "cpm": 6.24,
        "alcance": 25306,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 16
      },
      "recomendacion": "Meta la muestra activa otra vez, con un presupuesto cerrado ampliado a $458.21 y cierre el 28 de octubre (quedan $77.50 por gastar). Lleva $380.71 gastados y 16 citas agendadas a $23.79 por cita. En octubre suma 6 citas con $120.51 ($20.09 por cita). Desde que volvió a entregar no ha sumado citas nuevas (el gasto de la última semana fue $12.34, y $10.16 solo hoy). \"Faltan 180,000 empresas\" concentra el gasto ($199.89 y 8 citas); \"180,000 empresas-Imagen\" tiene 5 ($18.58 por cita) y \"Doña vs 2\" 2 ($12.43 por cita). \"te lo voy a decir v2\" y \"Desde el 31 de diciembre\" siguen sin citas. Con $77.50 por gastar en 6 días, el ritmo de gasto actual lo agotaría antes del cierre.",
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
          "hasta": "2026-10-22",
          "gasto": 120.51,
          "impresiones": 19850,
          "alcance": 12992,
          "resultado_valor": 6
        }
      ],
      "ads": [
        {
          "nombre": "Faltan 180,000 empresas",
          "gasto": 199.89,
          "impresiones": 30576,
          "clicks": 790,
          "ctr": 2.58,
          "cpc": 0.25,
          "cpm": 6.54,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 8
        },
        {
          "nombre": "180,000 empresas-Imagen",
          "gasto": 92.9,
          "impresiones": 19531,
          "clicks": 445,
          "ctr": 2.28,
          "cpc": 0.21,
          "cpm": 4.76,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 5
        },
        {
          "nombre": "Cupo v2",
          "gasto": 43.81,
          "impresiones": 5800,
          "clicks": 142,
          "ctr": 2.45,
          "cpc": 0.31,
          "cpm": 7.55,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 1
        },
        {
          "nombre": "Doña vs 2",
          "gasto": 24.86,
          "impresiones": 2745,
          "clicks": 73,
          "ctr": 2.66,
          "cpc": 0.34,
          "cpm": 9.06,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 2
        },
        {
          "nombre": "te lo voy a decir v2",
          "gasto": 14.84,
          "impresiones": 1693,
          "clicks": 54,
          "ctr": 3.19,
          "cpc": 0.27,
          "cpm": 8.77,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Desde el 31 de diciembre",
          "gasto": 4.41,
          "impresiones": 707,
          "clicks": 20,
          "ctr": 2.83,
          "cpc": 0.22,
          "cpm": 6.24,
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
        "monto": 357.18,
        "cierre": "28 oct 2026"
      },
      "ventana": "Desde su lanzamiento (4 sep 2026) hasta hoy",
      "metricas": {
        "gasto": 318.2,
        "impresiones": 35369,
        "clicks": 1000,
        "clics_enlace": 625,
        "vistas_landing": 418,
        "ctr": 2.83,
        "cpc": 0.32,
        "cpm": 9,
        "alcance": 14013,
        "resultado_nombre": "Citas agendadas",
        "resultado_valor": 13
      },
      "recomendacion": "Meta la muestra activa otra vez, con presupuesto cerrado de $357.18 y cierre el 28 de octubre (quedan $38.98 por gastar). Lleva $318.20 gastados y 13 citas agendadas a $24.48 por cita. En octubre suma 2 citas con $56.54 ($28.27 por cita); la nueva cita llegó hoy (22 oct). \"Operando a ciegas\" concentra casi todo el gasto ($256.85) y las 13 citas; los demás anuncios siguen sin citas propias. Sigue pendiente decidir con Félix si se separan 2-3 anuncios a un ad set nuevo con presupuesto propio.",
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
          "hasta": "2026-10-22",
          "gasto": 56.54,
          "impresiones": 6083,
          "alcance": 3622,
          "resultado_valor": 2
        }
      ],
      "ads": [
        {
          "nombre": "Operando a ciegas",
          "gasto": 256.85,
          "impresiones": 27927,
          "clicks": 760,
          "ctr": 2.72,
          "cpc": 0.34,
          "cpm": 9.2,
          "resultado_nombre": "Citas agendadas",
          "resultado_valor": 13
        },
        {
          "nombre": "4 formas de resolver FE - Estática",
          "gasto": 14.35,
          "impresiones": 1761,
          "clicks": 41,
          "ctr": 2.33,
          "cpc": 0.35,
          "cpm": 8.15,
          "resultado_nombre": null,
          "resultado_valor": null
        },
        {
          "nombre": "Otros implementadores - Estática",
          "gasto": 12.47,
          "impresiones": 1046,
          "clicks": 24,
          "ctr": 2.29,
          "cpc": 0.52,
          "cpm": 11.92,
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
        },
        {
          "nombre": "Scrolling (17%) - Copy",
          "gasto": 6.94,
          "impresiones": 876,
          "clicks": 42,
          "ctr": 4.79,
          "cpc": 0.17,
          "cpm": 7.92,
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
        "monto": 194.65,
        "cierre": "28 oct 2026"
      },
      "ventana": "Desde su lanzamiento (20 ago 2026) hasta hoy",
      "metricas": {
        "gasto": 194.65,
        "impresiones": 605022,
        "clicks": 4194,
        "clics_enlace": 856,
        "vistas_landing": 198,
        "ctr": 0.69,
        "cpc": 0.05,
        "cpm": 0.32,
        "alcance": 270909,
        "resultado_nombre": null,
        "resultado_valor": null
      },
      "recomendacion": "Meta la muestra activa otra vez, con cierre previsto el 28 de octubre, pero el presupuesto restante figura en $0 (ya se gastó lo asignado: $194.65), por eso entrega muy poco, unos $0.89 hoy. En octubre suma $9.74. Acumula 270,909 personas alcanzadas a un CPM de $0.32 como audiencia para el retargeting. \"La llamada\" concentra el gasto ($123.29, 68,876 reproducciones completas).",
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
          "hasta": "2026-10-22",
          "gasto": 9.74,
          "impresiones": 46316,
          "alcance": 37628,
          "resultado_valor": null
        }
      ],
      "ads": [
        {
          "nombre": "La llamada",
          "gasto": 123.29,
          "impresiones": 247882,
          "clicks": 3347,
          "ctr": 1.35,
          "cpc": 0.04,
          "cpm": 0.5,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 68876
        },
        {
          "nombre": "Carrusel sera una de ellas",
          "gasto": 42.28,
          "impresiones": 208182,
          "clicks": 353,
          "ctr": 0.17,
          "cpc": 0.12,
          "cpm": 0.2,
          "resultado_nombre": "Alcance",
          "resultado_valor": 80064
        },
        {
          "nombre": "Carrusel mexico",
          "gasto": 7.21,
          "impresiones": 41556,
          "clicks": 81,
          "ctr": 0.19,
          "cpc": 0.09,
          "cpm": 0.17,
          "resultado_nombre": "Alcance",
          "resultado_valor": 26656
        },
        {
          "nombre": "Carrusel la llamada",
          "gasto": 5.96,
          "impresiones": 33665,
          "clicks": 62,
          "ctr": 0.18,
          "cpc": 0.1,
          "cpm": 0.18,
          "resultado_nombre": "Alcance",
          "resultado_valor": 24218
        },
        {
          "nombre": "mexico",
          "gasto": 5.08,
          "impresiones": 13715,
          "clicks": 217,
          "ctr": 1.58,
          "cpc": 0.02,
          "cpm": 0.37,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 2043
        },
        {
          "nombre": "Arte mexico",
          "gasto": 4.09,
          "impresiones": 20200,
          "clicks": 30,
          "ctr": 0.15,
          "cpc": 0.14,
          "cpm": 0.2,
          "resultado_nombre": "Alcance",
          "resultado_valor": 11202
        },
        {
          "nombre": "Arte la llamada",
          "gasto": 3.1,
          "impresiones": 20071,
          "clicks": 33,
          "ctr": 0.16,
          "cpc": 0.09,
          "cpm": 0.15,
          "resultado_nombre": "Alcance",
          "resultado_valor": 11211
        },
        {
          "nombre": "Arte tu empresa sera una de ellas",
          "gasto": 2.47,
          "impresiones": 14429,
          "clicks": 22,
          "ctr": 0.15,
          "cpc": 0.11,
          "cpm": 0.17,
          "resultado_nombre": "Alcance",
          "resultado_valor": 9414
        },
        {
          "nombre": "\"Tu empresa será una de ellas?\"",
          "gasto": 1.17,
          "impresiones": 5322,
          "clicks": 49,
          "ctr": 0.92,
          "cpc": 0.02,
          "cpm": 0.22,
          "resultado_nombre": "Reproducciones",
          "resultado_valor": 442
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
      "Se refrescaron datos al 22 de octubre: Ready to Buy, Consideración y Reconocimiento volvieron a estar activas en Meta (cierre el 28 de octubre), entraron 2 campañas nuevas (registros para el webinar del 28 de octubre, con 36 registros a $0.80, y una de leads calificados con formulario Instaform) y las campañas de Citas de Félix sumaron sus primeras 3 citas (1 en Contabilidad, 2 en Retargeting Clases)."
    ],
    "pendientes": [
      "Webinar del 28 de octubre (Meta lo nombra así; el cierre de la campaña es el 29 de octubre a las 17:00): ya hay 36 registros en el píxel de Meta, falta crear la sesión de Zoom y confirmar la fecha exacta. Además de reconciliar los registros del píxel con los inscritos reales del formulario, que históricamente han sido menos.",
      "Citas de Félix (campañas FE, Contabilidad y Retargeting Clases, activas desde el 17 de octubre, presupuestos cerrados de $500, $250 y $250 hasta el 15 de noviembre): ya suman 3 citas en total (1 en Contabilidad a $44.63 y 2 en Retargeting a $29.19); FE lleva $86.59 y ninguna cita. Comparar el costo por cita contra las campañas anteriores (Ready to Buy $23.79, Consideración $24.48) cuando lleven más días. Las campañas del embudo anterior (Ready to Buy, Consideración, Reconocimiento) volvieron a activarse hasta el 28 de octubre; Contabilidad Sept–Dic, Clase Gratuita y Excel siguen pausadas.",
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
  "120251858423240560": { monto: 194.65, cierre: "28 oct 2026" }, // Reconocimiento (20%): reactivada hasta el 28 oct
  "120252085024140560": { monto: 357.18, cierre: "28 oct 2026" }, // Consideración (40%)
  "120252187070040560": { monto: 458.21, cierre: "28 oct 2026" },  // Ready to Buy (40%)
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
