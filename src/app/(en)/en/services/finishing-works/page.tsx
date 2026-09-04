import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'finishing' });
}

export default function FinishingPageEN() {
    const heroImages = [
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Services', item: '/en/services' }, { name: 'Finishing Works', item: '/en/services/finishing-works' } ]
        )
      ]} />
<div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="en"
        pageId="finishing"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="en"
        paragraphs={[
          "Kardentech Engineering's activities include Decoration — Renovation and Turnkey Projects.",
          "Finishing Works brings together project experiences related to these activities within the service classification on our website."
        ]}
      />

      <ServicesCTA lang="en" />
      
      <Footer lang="en" />
    </div>
    </>
  );
}
