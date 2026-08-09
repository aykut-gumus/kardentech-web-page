import BaseLayout from "@/components/BaseLayout";

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
