import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../../chatgpt-auth";

const OWNER_EMAIL = "luwy21643@gmail.com";
const COURSE_CODES = ["MAE101", "CEA201", "PRF193", "SDI101m"] as const;
const MAX_BODY_LENGTH = 600_000;

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isText(value: unknown, max = 4000, required = false): value is string {
  return typeof value === "string" && value.length <= max && (!required || !!value.trim());
}

function validDocument(value: unknown): value is { courses: RecordValue; quizzes: RecordValue; version: number } {
  if (!isRecord(value) || !isRecord(value.courses) || !isRecord(value.quizzes)) return false;
  if (!Number.isSafeInteger(value.version) || (value.version as number) < 0) return false;
  if (Object.keys(value.courses).sort().join() !== [...COURSE_CODES].sort().join()) return false;
  if (Object.keys(value.quizzes).sort().join() !== [...COURSE_CODES].sort().join()) return false;

  let lessonCount = 0;
  let questionCount = 0;
  for (const code of COURSE_CODES) {
    const groups = value.courses[code];
    const questions = value.quizzes[code];
    if (!Array.isArray(groups) || groups.length < 1 || groups.length > 30) return false;
    if (!Array.isArray(questions) || questions.length < 1 || questions.length > 300) return false;
    for (const group of groups) {
      if (!isRecord(group) || !isText(group.name, 120, true) || !Array.isArray(group.items) || group.items.length > 300) return false;
      for (const item of group.items) {
        if (!isRecord(item) || !isText(item.title, 180, true) || !isText(item.idea, 1000, true) ||
            !isText(item.details) || !isText(item.key, 1000) || !isText(item.example, 2000) || !isText(item.source, 500, true)) return false;
        lessonCount++;
      }
    }
    for (const question of questions) {
      if (!isRecord(question) || !isText(question.q, 1000, true) || !Array.isArray(question.o) ||
          question.o.length < 2 || question.o.length > 6 || !question.o.every(option => isText(option, 500, true)) ||
          !Number.isSafeInteger(question.a) || (question.a as number) < 0 || (question.a as number) >= question.o.length ||
          !isText(question.e, 2000, true) || !isText(question.s, 500, true)) return false;
      questionCount++;
    }
  }
  return lessonCount <= 1000 && questionCount <= 1000;
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user || user.email.trim().toLowerCase() !== OWNER_EMAIL) {
    return Response.json({ error: "Chỉ người sáng tạo mới được sửa nội dung." }, { status: 403 });
  }
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Yêu cầu không hợp lệ." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Dữ liệu phải ở dạng JSON." }, { status: 415 });
  }
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_LENGTH) {
    return Response.json({ error: "Nội dung quá dài." }, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) {
    return Response.json({ error: "Nội dung quá dài." }, { status: 413 });
  }
  let document: unknown;
  try { document = JSON.parse(raw); } catch {
    return Response.json({ error: "JSON không hợp lệ." }, { status: 400 });
  }
  if (!validDocument(document)) {
    return Response.json({ error: "Bài học hoặc câu hỏi còn thiếu thông tin hợp lệ." }, { status: 400 });
  }

  try {
    const next = {
      coursesJson: JSON.stringify(document.courses),
      quizzesJson: JSON.stringify(document.quizzes),
      version: document.version + 1,
      updatedAt: new Date().toISOString(),
    };
    if (!env.DB) throw new Error("Missing D1 binding");
    const result = document.version === 0
      ? await env.DB.prepare("INSERT OR IGNORE INTO content (id, courses_json, quizzes_json, version, updated_at) VALUES (1, ?, ?, ?, ?)")
        .bind(next.coursesJson, next.quizzesJson, next.version, next.updatedAt).run()
      : await env.DB.prepare("UPDATE content SET courses_json = ?, quizzes_json = ?, version = ?, updated_at = ? WHERE id = 1 AND version = ?")
        .bind(next.coursesJson, next.quizzesJson, next.version, next.updatedAt, document.version).run();
    if (!result.meta.changes) {
      return Response.json({ error: "Nội dung đã được sửa ở nơi khác. Tải lại trang trước khi lưu." }, { status: 409 });
    }
    return Response.json({ version: next.version, updatedAt: next.updatedAt });
  } catch (error) {
    console.error("Cannot save site content", error);
    return Response.json({ error: "Không lưu được nội dung. Vui lòng thử lại." }, { status: 503 });
  }
}
