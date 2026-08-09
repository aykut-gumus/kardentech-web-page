import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'finishing' });
}

export default function FinishingPageRU() {
  const heroImages = [
    { src: '/images/projects/y-uzun-homes/01.jpg', position: 'object-center' }
  ];

  const yuzunProject = projects.find(p => p.id === 'y-uzun-homes');

  const relatedProjectsData = [];
  if (yuzunProject) relatedProjectsData.push({ project: yuzunProject, description: 'Реконструкция Y. Uzun Home\'s' });

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="finishing"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="ru"
        paragraphs={[
          "Деятельность Kardentech Engineering включает отделку — реконструкцию и проекты под ключ.",
          "Отделочные работы объединяют проектный опыт, связанный с этими видами деятельности в рамках классификации услуг на нашем сайте."
        ]}
      />

      <RelatedProject lang="ru" projects={relatedProjectsData} />
      
      <ServicesCTA lang="ru" />
      
      <Footer lang="ru" />
    </div>
  );
}
