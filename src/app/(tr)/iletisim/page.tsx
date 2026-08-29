import { getLocalizedMetadata } from '@/i18n/metadata';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';
import ContactBottom from '@/components/contact/ContactBottom';
import JsonLd from '@/components/JsonLd';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'contact' });
}

export default function IletisimPage() {
  return (
    <>
      <JsonLd data={[
        getLocalBusinessSchema(),
        getBreadcrumbSchema([{ name: 'İletişim', item: '/iletisim' }])
      ]} />
      <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
        <ContactHero lang="tr" />
        <ContactMain lang="tr" />
        <ContactBottom lang="tr" />
      </div>
    </>
  );
}
