import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'electrical' });
}

export default function ElectricalSystemsPageEN() {
    const heroImages = [
    { src: '/images/services/elektrik.png', position: 'object-center' }
  ];

  return (
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

      <ServicesCTA lang="en" />
      
      <Footer lang="en" />
    </div>
  );
}
