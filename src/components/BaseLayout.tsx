import { Montserrat, Inter } from "next/font/google";
import "@/app/globals.css";
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

export default function BaseLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased bg-[var(--color-white)] text-[var(--color-charcoal)]`}>
        <div className="flex flex-col min-h-screen">
          <TopBar lang={lang as any} />
          <Navbar lang={lang as any} />
          <main className="flex-1 flex flex-col relative w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
