import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Favicon from "/public/avatar.png";
import OGImage from "/public/og-image.jpg";
const fredoka = Fredoka({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Hannah Thorley's Portfolio",
  description: "Come and see what I've been up to!",
  openGraph: {
    images: [
      {
        url: OGImage.src,
        width: 512,
        height: 512,
        alt: "Hannah Thorley's Portfolio",
      },
    ],
  },
  icons: [{ url: Favicon.src, rel: "icon" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
