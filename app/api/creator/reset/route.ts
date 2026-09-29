import { clearCreatorCookie, resetCreatorPassword } from "../../../../lib/creator-auth";

const MAX_BODY_LENGTH = 2048;

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) {
    return new Response(null, { status: 415 });
  }
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_LENGTH) {
    return new Response(null, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) return new Response(null, { status: 413 });
  const form = new URLSearchParams(raw);
  const token = form.get("token") || "";
  const next = form.get("next") || "";
  const confirm = form.get("confirm") || "";
  const changed = next === confirm && await resetCreatorPassword(token, next);
  const location = changed ? "/creator/login?changed=1" :
    `/creator/reset?token=${encodeURIComponent(token)}&error=${next === confirm ? "invalid" : "mismatch"}`;
  const response = new Response(null, {
    status: 303,
    headers: { Location: location, "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" },
  });
  if (changed) response.headers.set("Set-Cookie", clearCreatorCookie());
  return response;
}
