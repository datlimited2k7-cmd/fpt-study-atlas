import { readFileSync, writeFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const context = { window: {} };
for (const name of ["data.js", "lesson-guides.js", "quiz.js", "quiz-expansions.js", "quiz-slot08-09.js", "on-tap-sync.js", "open-study.js"]) {
  runInNewContext(readFileSync(new URL(`../public/${name}`, import.meta.url), "utf8"), context, {
    filename: name,
    timeout: 1000,
  });
}

writeFileSync(
  new URL("../public/base-content.json", import.meta.url),
  JSON.stringify({ courses: context.window.COURSES, quizzes: context.window.QUIZZES }),
);
