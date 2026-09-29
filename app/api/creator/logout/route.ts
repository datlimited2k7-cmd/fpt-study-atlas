import { clearCreatorCookie } from "../../../../lib/creator-auth";

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return new Response(null, { status: 403 });
  }
  return new Response(null, {
    status: 303,
    headers: { Location: "/atlas.html", "Set-Cookie": clearCreatorCookie(), "Cache-Control": "no-store" },
  });
}
