import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Films",
  description:
    "My Films is a library where you can search for movies, series and TV shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
