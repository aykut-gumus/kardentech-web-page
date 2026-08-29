import BaseLayout from "@/components/BaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kardentech.com"),
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
