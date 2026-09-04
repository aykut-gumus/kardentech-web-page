import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceItems from '@/components/services/ServiceItems';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'mechanical' });
}

export default function MechanicalSystemsPageEN() {
    const heroImages = [
    { src: '/images/services/mekanik.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Services', item: '/en/services' }, { name: 'Mechanical Systems', item: '/en/services/mechanical-systems' } ]
        )
      ]} />
<div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="en"
        pageId="mechanical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="en"
        paragraphs={[
          "Kardentech Engineering operates in the field of mechanical applications within the scope of Electrical and Mechanical Applications listed in our catalog.",
          "Selections from our verified project experiences in this field are presented below."
        ]}
      />

      <ServiceItems items={[
        { id: '1', title: 'Mechanical Project Design', image: '/images/services/mekanik/01.jpg' },
        { id: '2', title: 'VRF / Air Conditioning Cooling System', image: '/images/services/mekanik/02.jpg' },
        { id: '3', title: 'Underfloor Heating Works', image: '/images/services/mekanik/03.jpg' },
        { id: '4', title: 'Heating and Heat Pumps', image: '/images/services/mekanik/04.jpg' },
        { id: '5', title: 'Ventilation Works', image: '/images/services/mekanik/05.jpg' },
        { id: '6', title: 'Plumbing (Clean Water, Sewage, Rainwater)', image: '/images/services/mekanik/06.jpg' },
        { id: '7', title: 'Water Tank, Hydrophore and Initial Package Systems', image: '/images/services/mekanik/07.jpg' },
        { id: '8', title: 'Fire Extinguishing Systems (Fire Pump, Fire Cabinet, Sprinklers, etc.)', image: '/images/services/mekanik/08.jpg' },
      ]} />

      <ServicesCTA lang="en" />
      
      <Footer lang="en" />
    </div>
    </>
  );
}
