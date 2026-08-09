import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'electrical' });
}

export default function ElectricalSystemsPageEN() {
  const heroImages = [
    { src: '/images/projects/baia-bodrum-hotel/01.jpg', position: 'object-center' }
  ];

  const baiaProject = projects.find(p => p.id === 'baia-bodrum-hotel');
  const sekerpinarProject = projects.find(p => p.id === 'sekerpinar-fabrikasi');

  const relatedProjectsData = [];
  if (baiaProject) relatedProjectsData.push({ project: baiaProject, description: 'Electrical Renovation of Rooms' });
  if (sekerpinarProject) relatedProjectsData.push({ project: sekerpinarProject, description: 'Electrical and Mechanical Works' });

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

      <RelatedProject lang="en" projects={relatedProjectsData} />
      
      <ServicesCTA lang="en" />
      
      <Footer lang="en" />
    </div>
  );
}
