import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QA Studio — Бесплатный курс по тестированию",
  description:
    "Узнай о профессии тестировщик за 4 часа. Бесплатный вводный курс от QA Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
