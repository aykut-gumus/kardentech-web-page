import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceItems from '@/components/services/ServiceItems';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'mechanical' });
}

export default function MechanicalSystemsPageRU() {
    const heroImages = [
    { src: '/images/services/mekanik.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Услуги', item: '/ru/services' }, { name: 'Механические системы', item: '/ru/services/mechanical-systems' } ]
        )
      ]} />
<div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="ru"
        pageId="mechanical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="ru"
        paragraphs={[
          "Kardentech Engineering работает в сфере механических систем в рамках услуг по электромонтажным и механическим работам, указанных в нашем каталоге.",
          "Ниже представлены примеры нашего подтвержденного опыта реализации проектов в этой области."
        ]}
      />

      <ServiceItems items={[
        { id: '1', title: 'Проектирование механических систем', image: '/images/services/mekanik/01.jpg' },
        { id: '2', title: 'VRF / Системы кондиционирования и охлаждения', image: '/images/services/mekanik/02.jpg' },
        { id: '3', title: 'Системы теплого пола', image: '/images/services/mekanik/03.jpg' },
        { id: '4', title: 'Отопление и тепловые насосы', image: '/images/services/mekanik/04.jpg' },
        { id: '5', title: 'Вентиляционные системы', image: '/images/services/mekanik/05.jpg' },
        { id: '6', title: 'Сантехника (Чистая вода, канализация, дождевая вода)', image: '/images/services/mekanik/06.jpg' },
        { id: '7', title: 'Резервуары для воды, гидрофоры и комплексные системы', image: '/images/services/mekanik/07.jpg' },
        { id: '8', title: 'Системы пожаротушения (пожарный насос, пожарный шкаф, спринклеры и т.д.)', image: '/images/services/mekanik/08.jpg' },
      ]} />

      <ServicesCTA lang="ru" />
      
      <Footer lang="ru" />
    </div>
    </>
  );
}
