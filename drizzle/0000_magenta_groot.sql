CREATE TABLE `content` (
	`id` integer PRIMARY KEY NOT NULL,
	`courses_json` text NOT NULL,
	`quizzes_json` text NOT NULL,
	`version` integer NOT NULL,
	`updated_at` text NOT NULL
);
