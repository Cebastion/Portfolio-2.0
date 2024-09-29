import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dmytro Kosenko Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
