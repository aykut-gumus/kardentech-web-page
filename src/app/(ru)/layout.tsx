import BaseLayout from "@/components/BaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kardentech.com"),
};

export default function RURootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout lang="ru">
      {children}
    </BaseLayout>
  );
}
