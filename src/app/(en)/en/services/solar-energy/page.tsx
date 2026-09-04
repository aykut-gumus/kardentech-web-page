import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'solarEnergy' });
}

export default function SolarEnergyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Services', item: '/en/services' }, { name: 'Solar Energy', item: '/en/services/solar-energy' } ]
        )
      ]} />
<ComingSoonService 
      lang="en" 
      pageId="solarEnergy" 
      title="SOLAR ENERGY / İKLİMSA DEALERSHIP"
      message="Detailed content and project examples regarding this service are being prepared. They will be here with you very soon."
    />
    </>
  );
}
