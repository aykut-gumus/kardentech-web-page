import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceItems from '@/components/services/ServiceItems';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'electrical' });
}

export default function ElectricalSystemsPageRU() {
    const heroImages = [
    { src: '/images/services/elektrik.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Услуги', item: '/ru/services' }, { name: 'Электрические системы', item: '/ru/services/electrical-systems' } ]
        )
      ]} />
<div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="electrical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="ru"
        paragraphs={[
          "Kardentech Engineering работает в сфере электромонтажных работ в рамках услуг по электромонтажным и механическим работам, указанных в нашем каталоге.",
          "Ниже представлены примеры нашего подтвержденного опыта реализации проектов в этой области."
        ]}
      />

      <ServiceItems items={[
        { id: '1', title: 'Проектирование электрических систем', image: '/images/services/elektrik/01.jpg' },
        { id: '2', title: 'Системы сильного тока', image: '/images/services/elektrik/02.jpg' },
        { id: '3', title: 'Осветительные системы', image: '/images/services/elektrik/03.jpg' },
        { id: '4', title: 'Системы слабого тока', image: '/images/services/elektrik/04.jpg' },
        { id: '5', title: 'Домашняя автоматизация', image: '/images/services/elektrik/05.jpg' },
        { id: '6', title: 'Системы заземления', image: '/images/services/elektrik/06.jpg' },
        { id: '7', title: 'Ландшафтное и фасадное освещение', image: '/images/services/elektrik/07.jpg' },
      ]} />

      <ServicesCTA lang="ru" />
      
      <Footer lang="ru" />
    </div>
    </>
  );
}
