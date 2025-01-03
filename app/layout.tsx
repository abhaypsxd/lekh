import type { Metadata } from "next";
import "./globals.css";
import { DashSidebar } from "@/components/comps_css/sidebar";

export const metadata: Metadata = {
  title: "memX",
  description: "make and keep notes in a smart way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
      <body>
        {children}
      </body>
    </html>
  );
}
