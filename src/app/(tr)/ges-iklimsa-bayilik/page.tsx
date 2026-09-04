import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'solarEnergy' });
}

export default function SolarEnergyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Hizmetlerimiz', item: '/hizmetlerimiz' }, { name: 'GES / İklimsa Bayilik', item: '/ges-iklimsa-bayilik' } ]
        )
      ]} />
<ComingSoonService 
      lang="tr" 
      pageId="solarEnergy" 
      title="GES / İKLİMSA BAYİLİK"
      message="Bu hizmetimize ilişkin detaylı içerikler ve proje örnekleri hazırlanmaktadır. Çok yakında burada sizlerle olacak."
    />
    </>
  );
}
