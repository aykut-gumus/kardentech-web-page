import BaseLayout from "@/components/BaseLayout";

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
