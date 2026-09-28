import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const content = sqliteTable("content", {
  id: integer("id").primaryKey(),
  coursesJson: text("courses_json").notNull(),
  quizzesJson: text("quizzes_json").notNull(),
  version: integer("version").notNull(),
  updatedAt: text("updated_at").notNull(),
});
