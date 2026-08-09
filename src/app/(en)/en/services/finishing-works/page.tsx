import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'finishing' });
}

export default function FinishingPageEN() {
  const heroImages = [
    { src: '/images/projects/y-uzun-homes/01.jpg', position: 'object-center' }
  ];

  const yuzunProject = projects.find(p => p.id === 'y-uzun-homes');

  const relatedProjectsData = [];
  if (yuzunProject) relatedProjectsData.push({ project: yuzunProject, description: 'Y. Uzun Home\'s Renovation' });

  return (
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

      <RelatedProject lang="en" projects={relatedProjectsData} />
      
      <ServicesCTA lang="en" />
      
      <Footer lang="en" />
    </div>
  );
}
