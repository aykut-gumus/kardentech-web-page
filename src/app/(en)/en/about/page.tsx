import { getLocalizedMetadata } from '@/i18n/metadata';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExpertiseList from '@/components/about/ExpertiseList';
import ExperienceList from '@/components/about/ExperienceList';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'about' });
}

export default function AboutPageEN() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <AboutHero lang="en" />
      <AboutIntro lang="en" />
      <ExpertiseList lang="en" />
      <ExperienceList lang="en" />
      <AboutCTA lang="en" />
      <Footer lang="en" />
    </div>
  );
}
