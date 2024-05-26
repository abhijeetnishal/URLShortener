import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "ShortURL",
  description: "Short URLs, Custom Links and Analytics",
  icons: {
    icon: "/chain.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/chain.png" />
      <body className={poppins.className}>
        <ThemeProvider attribute="class" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
