import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExpertiseList from '@/components/about/ExpertiseList';
import ExperienceList from '@/components/about/ExperienceList';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hakkımızda | Kardentech Mühendislik Bodrum',
  description: 'Kardentech Mühendislik; Bodrum merkezli olarak dekorasyon ve renovasyon, anahtar teslim projeler, tasarım ve danışmanlık ile elektrik ve mekanik uygulamalar alanlarında hizmet sunmaktadır.',
};

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <AboutHero />
      <AboutIntro />
      <ExpertiseList />
      <ExperienceList />
      <AboutCTA />
      <Footer />
    </div>
  );
}
