import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'solarEnergy' });
}

export default function SolarEnergyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Услуги', item: '/ru/services' }, { name: 'Солнечная энергия', item: '/ru/services/solar-energy' } ]
        )
      ]} />
<ComingSoonService 
      lang="ru" 
      pageId="solarEnergy" 
      title="СОЛНЕЧНАЯ ЭНЕРГЕТИКА / ДИЛЕР İKLİMSA"
      message="Подробный контент и примеры проектов, касающихся этой услуги, находятся в стадии подготовки. Они скоро появятся здесь."
    />
    </>
  );
}
