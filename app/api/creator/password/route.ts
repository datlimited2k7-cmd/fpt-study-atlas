import { changeCreatorPassword, clearCreatorCookie, isCreatorAuthenticated } from "../../../../lib/creator-auth";

const MAX_BODY_LENGTH = 2048;

export async function POST(request: Request) {
  if (!(await isCreatorAuthenticated())) {
    return new Response(null, {
      status: 303,
      headers: { Location: "/creator/login?session=1", "Set-Cookie": clearCreatorCookie(), "Cache-Control": "no-store" },
    });
  }
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return new Response(null, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) {
    return new Response(null, { status: 415 });
  }
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_LENGTH) {
    return new Response(null, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) return new Response(null, { status: 413 });
  const form = new URLSearchParams(raw);
  const current = form.get("current") || "";
  const next = form.get("next") || "";
  const confirm = form.get("confirm") || "";
  const changed = next === confirm && await changeCreatorPassword(current, next);
  const response = new Response(null, {
    status: 303,
    headers: { Location: changed ? "/creator/login?changed=1" : "/creator/password?error=1", "Cache-Control": "no-store" },
  });
  if (changed) response.headers.set("Set-Cookie", clearCreatorCookie());
  return response;
}
