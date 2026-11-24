import { getLocalizedMetadata } from '@/i18n/metadata';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExpertiseList from '@/components/about/ExpertiseList';

import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'about' });
}

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <JsonLd data={[getBreadcrumbSchema([{ name: 'Hakkımızda', item: '/hakkimizda' }])]} />
      <AboutHero lang="tr" />
      <AboutIntro lang="tr" />
      <ExpertiseList lang="tr" />

      <AboutCTA lang="tr" />
      <Footer lang="tr" />
    </div>
  );
}
