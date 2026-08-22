import { Instrument_Serif } from "next/font/google";
import "@/app/globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
  subsets: ["latin"], // Note: Instrument Serif might not have a cyrillic subset on Google Fonts, but Next.js will fetch what's available
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
      <body className={`${instrumentSerif.variable} ${instrumentSerif.className} antialiased bg-[var(--color-white)] text-[var(--color-charcoal)]`}>
        <div className="flex flex-col min-h-screen">
          <Navbar lang={lang as any} />
          <main className="flex-1 flex flex-col relative w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
