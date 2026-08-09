import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';
import ContactBottom from '@/components/contact/ContactBottom';

export const metadata: Metadata = {
  title: 'İletişim | Kardentech Mühendislik Bodrum',
  description: 'Kardentech Mühendislik Yalıkavak Bodrum iletişim bilgilerine ulaşın; telefon, WhatsApp, iletişim formu ve Instagram üzerinden bizimle iletişime geçin.',
};

export default function IletisimPage() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ContactHero />
      <ContactMain />
      <ContactBottom />
    </div>
  );
}
