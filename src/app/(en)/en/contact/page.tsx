import { getLocalizedMetadata } from '@/i18n/metadata';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';
import ContactBottom from '@/components/contact/ContactBottom';
import JsonLd from '@/components/JsonLd';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'contact' });
}

export default function ContactPageEN() {
  return (
    <>
      <JsonLd data={[
        getLocalBusinessSchema(),
        getBreadcrumbSchema([{ name: 'Contact', item: '/en/contact' }])
      ]} />
      <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
        <ContactHero lang="en" />
        <ContactMain lang="en" />
        <ContactBottom lang="en" />
      </div>
    </>
  );
}
