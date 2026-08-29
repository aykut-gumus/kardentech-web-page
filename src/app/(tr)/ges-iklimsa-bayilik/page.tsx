import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'solarEnergy' });
}

export default function SolarEnergyPage() {
  return (
    <ComingSoonService 
      lang="tr" 
      pageId="solarEnergy" 
      title="GES / İKLİMSA BAYİLİK"
      message="Bu hizmetimize ilişkin detaylı içerikler ve proje örnekleri hazırlanmaktadır. Çok yakında burada sizlerle olacak."
    />
  );
}
