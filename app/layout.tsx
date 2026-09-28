import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bản đồ học tập FPT · Kỳ 1",
  description: "Bản đồ kiến thức và ôn tập học kỳ 1.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
