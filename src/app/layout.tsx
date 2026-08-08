import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kardentech Mühendislik | Bodrum",
  description: "Bodrum merkezli Kardentech Mühendislik; elektrik sistemleri, mekanik sistemler, ince işler, renovasyon ve mühendislik çözümleri sunmaktadır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased bg-[var(--color-white)] text-[var(--color-charcoal)]`}>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <Navbar />
          <main className="flex-1 flex flex-col relative w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
