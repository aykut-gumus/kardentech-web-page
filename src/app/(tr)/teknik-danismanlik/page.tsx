import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'technicalConsultancy' });
}

export default function TechnicalConsultancyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Hizmetlerimiz', item: '/hizmetlerimiz' }, { name: 'Teknik Danışmanlık', item: '/teknik-danismanlik' } ]
        )
      ]} />
<ComingSoonService 
      lang="tr" 
      pageId="technicalConsultancy" 
      title="TEKNİK DANIŞMANLIK"
      message="Bu hizmetimize ilişkin detaylı içerikler ve proje örnekleri hazırlanmaktadır. Çok yakında burada sizlerle olacak."
    />
    </>
  );
}
