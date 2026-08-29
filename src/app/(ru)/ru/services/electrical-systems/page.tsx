import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'electrical' });
}

export default function ElectricalSystemsPageRU() {
    const heroImages = [
    { src: '/images/services/elektrik.png', position: 'object-center' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="electrical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="ru"
        paragraphs={[
          "Kardentech Engineering работает в сфере электротехники в рамках направления Электрические и Механические Работы.",
          "Ниже представлены примеры нашего проверенного опыта работы в этой области."
        ]}
      />

      <ServicesCTA lang="ru" />
      
      <Footer lang="ru" />
    </div>
  );
}
