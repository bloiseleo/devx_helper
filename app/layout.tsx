import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import "./globals.css";
import { MenuLinks } from "@/data/Links";

const jbmono = Inter({ subsets: ["latin"] });

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
    <html lang="pt-BR" className="w-screen h-screen bg-white dark:bg-[#111111]">
      <body className={jbmono.className}>
        <Menu items={MenuLinks}/>
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
