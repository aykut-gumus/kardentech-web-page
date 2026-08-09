import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'mechanical' });
}

export default function MechanicalSystemsPageRU() {
  const heroImages = [
    { src: '/images/projects/sekerpinar-fabrikasi/02.jpg', position: 'object-center' }
  ];

  const sekerpinarProject = projects.find(p => p.id === 'sekerpinar-fabrikasi');

  const relatedProjectsData = [];
  if (sekerpinarProject) relatedProjectsData.push({ project: sekerpinarProject, description: 'Электрические и механические работы' });

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="mechanical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="ru"
        paragraphs={[
          "Kardentech Engineering работает в сфере механических систем в рамках направления Электрические и Механические Работы.",
          "Ниже представлены примеры нашего проверенного опыта работы в этой области."
        ]}
      />

      <RelatedProject lang="ru" projects={relatedProjectsData} />
      
      <ServicesCTA lang="ru" />
      
      <Footer lang="ru" />
    </div>
  );
}
