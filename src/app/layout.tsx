import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry's Website",
  description: "A website featuring Harry Styles and Harry Potter",
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
