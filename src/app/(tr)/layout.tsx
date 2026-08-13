import BaseLayout from "@/components/BaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KardenTech Mühendislik",
  description: "Bodrum merkezli Kardentech Mühendislik; elektrik sistemleri, mekanik sistemler, ince işler, renovasyon ve mühendislik çözümleri sunmaktadır.",
  alternates: {
    canonical: "https://www.kardentech.com/",
    languages: {
      "tr": "https://www.kardentech.com/",
      "en": "https://www.kardentech.com/en",
      "ru": "https://www.kardentech.com/ru",
      "x-default": "https://www.kardentech.com/",
    }
  }
};

export default function TRRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout lang="tr">
      {children}
    </BaseLayout>
  );
}
