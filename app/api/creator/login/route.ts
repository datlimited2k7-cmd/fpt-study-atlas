import { createCreatorCookie, verifyCreatorPassword } from "../../../../lib/creator-auth";

const MAX_BODY_LENGTH = 1024;

export async function POST(request: Request) {
  const url = new URL(request.url);
  if (request.headers.get("origin") !== url.origin) return new Response(null, { status: 403 });
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) {
    return new Response(null, { status: 415 });
  }
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_LENGTH) {
    return new Response(null, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) return new Response(null, { status: 413 });
  const password = new URLSearchParams(raw).get("password") || "";
  const cookie = await verifyCreatorPassword(password) ? await createCreatorCookie() : null;
  const response = new Response(null, {
    status: 303,
    headers: { Location: cookie ? "/creator" : "/creator/login?error=1", "Cache-Control": "no-store" },
  });
  if (cookie) response.headers.set("Set-Cookie", cookie);
  return response;
}
