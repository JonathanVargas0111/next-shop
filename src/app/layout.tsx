import type { Metadata } from "next";
import "./globals.css";

// Font imports
import { geistMono, geistSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Shop virtual de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
