import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'solarEnergy' });
}

export default function SolarEnergyPage() {
  return (
    <ComingSoonService 
      lang="en" 
      pageId="solarEnergy" 
      title="SOLAR ENERGY / İKLİMSA DEALERSHIP"
      message="Detailed content and project examples regarding this service are being prepared. They will be here with you very soon."
    />
  );
}
