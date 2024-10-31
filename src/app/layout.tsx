import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Familia | Portfolio",
  description: "Portfolio Page",
  keywords: "Jose Rene Familia, web developer, frontend developer, portfolio",
  author: "Jose Rene Familia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
        <meta name="author" content="Jose Rene Familia" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
