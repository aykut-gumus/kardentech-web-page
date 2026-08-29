import BaseLayout from "@/components/BaseLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kardentech.com"),
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
