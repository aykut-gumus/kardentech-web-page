import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceDisciplines from '@/components/services/ServiceDisciplines';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'services' });
}

export default function ServicesPageRU() {
    const heroImages = [
    { src: '/images/services/mekanik.png', position: 'object-center' },
    { src: '/images/services/elektrik.png', position: 'object-center' },
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="services"
        images={heroImages}
      />
      <ServiceDisciplines lang="ru" />
      <ServicesCTA lang="ru" />
      <Footer lang="ru" />
    </div>
  );
}
