import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
          <div className="relative max-w-6xl mx-auto">
            <Navbar />
            <Toaster position="bottom-left"/>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
