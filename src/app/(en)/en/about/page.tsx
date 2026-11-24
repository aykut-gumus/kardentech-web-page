import { getLocalizedMetadata } from '@/i18n/metadata';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExpertiseList from '@/components/about/ExpertiseList';

import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'about' });
}

export default function AboutPageEN() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <JsonLd data={[getBreadcrumbSchema([{ name: 'About Us', item: '/en/about' }])]} />
      <AboutHero lang="en" />
      <AboutIntro lang="en" />
      <ExpertiseList lang="en" />

      <AboutCTA lang="en" />
      <Footer lang="en" />
    </div>
  );
}
