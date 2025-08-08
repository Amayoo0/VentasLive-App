import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antonio Mayo's portfolio",
  description: "Where projects requests are simpler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
