import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceDisciplines from '@/components/services/ServiceDisciplines';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'services' });
}

export default function HizmetlerimizPage() {
    const heroImages = [
    { src: '/images/services/mekanik.png', position: 'object-center' },
    { src: '/images/services/elektrik.png', position: 'object-center' },
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <JsonLd data={[getBreadcrumbSchema([{ name: 'Hizmetlerimiz', item: '/hizmetlerimiz' }])]} />
      <ServicesHero 
        lang="tr"
        pageId="services"
        images={heroImages}
      />
      <ServiceDisciplines lang="tr" />
      <ServicesCTA lang="tr" />
      <Footer lang="tr" />
    </div>
  );
}
