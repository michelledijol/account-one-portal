// Serverless function: reports GHL connection status. Returns "no_configurado"
// until GHL_API_KEY + GHL_LOCATION_ID are set as Vercel env vars — at that
// point it verifies the key against the GHL API and reports live status.

export default async function handler(req, res) {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    res.status(200).json({
      estado: "no_configurado",
      mensaje:
        "Agrega GHL_API_KEY y GHL_LOCATION_ID en Vercel para activar esta sección."
    });
    return;
  }

  try {
    const r = await fetch(
      `https://services.leadconnectorhq.com/locations/${locationId}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28"
        }
      }
    );

    if (!r.ok) {
      res.status(200).json({
        estado: "error",
        mensaje: `GHL respondió ${r.status}. Revisa el API key / location ID.`
      });
      return;
    }

    const data = await r.json();
    res.status(200).json({
      estado: "conectado",
      location: data?.location?.name || data?.name || locationId,
      mensaje: "Conexión con GHL activa."
    });
  } catch (err) {
    res.status(200).json({
      estado: "error",
      mensaje: String(err.message || err)
    });
  }
}
