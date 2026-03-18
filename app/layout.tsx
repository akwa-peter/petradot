import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petradot - Mobile App Development Company",
  description:
    "Build powerful, scalable, and user-friendly mobile apps with Petradot. We help startups, SMEs, and enterprises turn ideas into polished digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
