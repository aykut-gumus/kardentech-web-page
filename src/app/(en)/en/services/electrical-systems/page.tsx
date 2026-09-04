import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceItems from '@/components/services/ServiceItems';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'electrical' });
}

export default function ElectricalSystemsPageEN() {
    const heroImages = [
    { src: '/images/services/elektrik.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Services', item: '/en/services' }, { name: 'Electrical Systems', item: '/en/services/electrical-systems' } ]
        )
      ]} />
<div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="en"
        pageId="electrical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="en"
        paragraphs={[
          "Kardentech Engineering operates in the field of electrical applications within the scope of Electrical and Mechanical Applications listed in our catalog.",
          "Selections from our verified project experiences in this field are presented below."
        ]}
      />

      <ServiceItems items={[
        { id: '1', title: 'Electrical Project Design', image: '/images/services/elektrik/01.jpg' },
        { id: '2', title: 'High Current Works', image: '/images/services/elektrik/02.jpg' },
        { id: '3', title: 'Lighting Works', image: '/images/services/elektrik/03.jpg' },
        { id: '4', title: 'Low Current Works', image: '/images/services/elektrik/04.jpg' },
        { id: '5', title: 'Home Automation', image: '/images/services/elektrik/05.jpg' },
        { id: '6', title: 'Grounding Works', image: '/images/services/elektrik/06.jpg' },
        { id: '7', title: 'Landscape and Facade Lighting Works', image: '/images/services/elektrik/07.jpg' },
      ]} />

      <ServicesCTA lang="en" />
      
      <Footer lang="en" />
    </div>
    </>
  );
}
