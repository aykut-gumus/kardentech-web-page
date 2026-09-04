import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'technicalConsultancy' });
}

export default function TechnicalConsultancyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Услуги', item: '/ru/services' }, { name: 'Технический консалтинг', item: '/ru/services/technical-consultancy' } ]
        )
      ]} />
<ComingSoonService 
      lang="ru" 
      pageId="technicalConsultancy" 
      title="ТЕХНИЧЕСКИЙ КОНСАЛТИНГ"
      message="Подробный контент и примеры проектов, касающихся этой услуги, находятся в стадии подготовки. Они скоро появятся здесь."
    />
    </>
  );
}
