import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const SOURCE_URL = "https://on-tap.pages.dev/subjects/cea201.js";
const response = await fetch(SOURCE_URL);
if (!response.ok) throw new Error(`Không tải được nguồn CEA201: HTTP ${response.status}`);
const source = await response.text();
const context = { window: {} };
runInNewContext(source, context, { filename: "cea201.js", timeout: 1000 });
const data = context.window.SUBJECT_DATA?.cea201;
if (!data || !Array.isArray(data.questions) || data.questions.length !== 497 || !data.chapters) {
  throw new Error("Cấu trúc hoặc số lượng câu hỏi đã thay đổi; cần kiểm tra trước khi nhập.");
}

function decodeEntities(value) {
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (entity, code) => {
    const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
    if (code[0] !== "#") return named[code.toLowerCase()] ?? entity;
    const point = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
    return Number.isInteger(point) && point >= 0 && point <= 0x10ffff ? String.fromCodePoint(point) : entity;
  });
}

function htmlToText(value) {
  return decodeEntities(String(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<table(?:\s[^>]*)?>/gi, "\n")
    .replace(/<\/tr\s*>/gi, "\n")
    .replace(/<\/(?:th|td)\s*>/gi, " | ")
    .replace(/<sup>([\s\S]*?)<\/sup>/gi, "^$1")
    .replace(/<sub>([\s\S]*?)<\/sub>/gi, "_$1")
    .replace(/<[^>]*>/g, ""))
    .replace(/[ \t]*\|[ \t]*(?=\n|$)/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const ids = new Set();
const questions = [...data.questions].sort((a, b) => a.ch - b.ch || a.id - b.id).map((entry) => {
  if (!Number.isInteger(entry.id) || ids.has(entry.id)) throw new Error("Mã câu hỏi bị thiếu hoặc trùng.");
  ids.add(entry.id);
  if (!Array.isArray(entry.opts) || entry.opts.length < 2 || entry.opts.length > 6 ||
      !Array.isArray(entry.ans) || entry.ans.length < 1 || !data.chapters[entry.ch]) {
    throw new Error(`Câu ${entry.id} có cấu trúc không hợp lệ.`);
  }
  const correct = [...new Set(entry.ans.map((letter) => String(letter).toUpperCase().charCodeAt(0) - 65))].sort((a, b) => a - b);
  if (correct.some((index) => !Number.isInteger(index) || index < 0 || index >= entry.opts.length)) {
    throw new Error(`Câu ${entry.id} có đáp án ngoài phạm vi lựa chọn.`);
  }
  const chapter = `${data.chapters[entry.ch].short}: ${data.chapters[entry.ch].name}`;
  const item = {
    q: htmlToText(entry.q),
    o: entry.opts.map(htmlToText),
    a: correct.length === 1 ? correct[0] : correct,
    e: htmlToText(entry.exp),
    s: `On Tap CEA201, câu ${entry.id}`,
    chapter,
    topic: htmlToText(entry.topic || ""),
    sourceId: entry.id,
  };
  if (!item.q || item.o.some((option) => !option) || !item.e ||
      item.q.length > 1000 || item.o.some((option) => option.length > 500) ||
      item.e.length > 2000 || item.s.length > 500) {
    throw new Error(`Câu ${entry.id} thiếu nội dung hoặc vượt giới hạn lưu trữ.`);
  }
  return item;
});

const hash = createHash("sha256").update(source).digest("hex");
const output = `// Dữ liệu CEA201 từ ${SOURCE_URL}\n// SHA-256 nguồn: ${hash}\n// Nhập theo xác nhận quyền sử dụng của chủ website FPT Study Atlas.\nwindow.QUIZZES.CEA201.push(...${JSON.stringify(questions, null, 2)});\n`;
writeFileSync(new URL("../public/cea201-on-tap.js", import.meta.url), output);
console.log(`Đã nhập ${questions.length} câu CEA201 từ On Tap (${questions.filter((q) => Array.isArray(q.a)).length} câu nhiều đáp án).`);
