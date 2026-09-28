import { env } from "cloudflare:workers";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (!env.DB) throw new Error("Missing D1 binding");
    const row = await env.DB.prepare("SELECT courses_json, quizzes_json, version, updated_at FROM content WHERE id = 1").first<{
      courses_json: string;
      quizzes_json: string;
      version: number;
      updated_at: string;
    }>();
    return Response.json(row ? {
      courses: JSON.parse(row.courses_json),
      quizzes: JSON.parse(row.quizzes_json),
      version: row.version,
      updatedAt: row.updated_at,
    } : { courses: null, quizzes: null, version: 0, updatedAt: null });
  } catch (error) {
    console.error("Cannot load site content", error);
    return Response.json({ error: "Không tải được nội dung. Vui lòng thử lại." }, { status: 503 });
  }
}
