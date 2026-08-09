import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceApproach from '@/components/services/ServiceApproach';
import OfficialActivities from '@/components/services/OfficialActivities';
import ServiceDisciplines from '@/components/services/ServiceDisciplines';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'services' });
}

export default function ServicesPageRU() {
  const heroImages = [
    { src: '/images/projects/quadro-villalari/01.jpg', position: 'object-center' },
    { src: '/images/projects/mercedes-benz-hasmer/01.jpg', position: 'object-top' },
    { src: '/images/projects/sekerpinar-fabrikasi/01.jpg', position: 'object-center' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="services"
        images={heroImages}
      />
      <ServiceApproach lang="ru" />
      <OfficialActivities lang="ru" />
      <ServiceDisciplines lang="ru" />
      <ServicesCTA lang="ru" />
      <Footer lang="ru" />
    </div>
  );
}
