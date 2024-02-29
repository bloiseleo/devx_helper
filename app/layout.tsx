import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const jbmono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevX Helper",
  description: "Help yourself to be introduced to DevX Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="w-screen h-screen bg-white">
      <body className={jbmono.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
