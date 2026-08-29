import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'finishing' });
}

export default function FinishingPageRU() {
    const heroImages = [
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];

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

      <ServicesCTA lang="ru" />
      
      <Footer lang="ru" />
    </div>
  );
}
