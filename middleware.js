// Vercel Edge Middleware — simple HTTP Basic Auth gate in front of the whole
// portal (pages, styles/scripts, and the API endpoints that carry campaign
// data). Runs before any request is served, so nothing behind it is public.
//
// Credentials live here rather than as env vars to keep setup to a single
// file push — change USER/PASS below and push again to rotate them.

export const config = {
  matcher: "/:path*",
};

const USER = "Felix Rosa";
const PASS = "12345678";

export default function middleware(request) {
  const auth = request.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      try {
        const decoded = atob(encoded);
        const sepIndex = decoded.indexOf(":");
        const user = decoded.slice(0, sepIndex);
        const pass = decoded.slice(sepIndex + 1);
        if (user === USER && pass === PASS) {
          return; // credentials OK — let the request through
        }
      } catch (e) {
        // fall through to the 401 below
      }
    }
  }

  return new Response("Autenticación requerida", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Account One Portal"',
    },
  });
}
