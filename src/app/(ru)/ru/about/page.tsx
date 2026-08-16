import { getLocalizedMetadata } from '@/i18n/metadata';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExpertiseList from '@/components/about/ExpertiseList';

import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'about' });
}

export default function AboutPageRU() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <AboutHero lang="ru" />
      <AboutIntro lang="ru" />
      <ExpertiseList lang="ru" />

      <AboutCTA lang="ru" />
      <Footer lang="ru" />
    </div>
  );
}
