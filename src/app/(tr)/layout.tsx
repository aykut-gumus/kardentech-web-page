import BaseLayout from "@/components/BaseLayout";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
