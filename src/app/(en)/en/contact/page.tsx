import { getLocalizedMetadata } from '@/i18n/metadata';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';
import ContactBottom from '@/components/contact/ContactBottom';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'contact' });
}

export default function ContactPageEN() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ContactHero lang="en" />
      <ContactMain lang="en" />
      <ContactBottom lang="en" />
    </div>
  );
}
