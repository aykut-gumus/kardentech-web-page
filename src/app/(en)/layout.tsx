import BaseLayout from "@/components/BaseLayout";
import { SITE_URL } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function ENRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout lang="en">
      {children}
    </BaseLayout>
  );
}
