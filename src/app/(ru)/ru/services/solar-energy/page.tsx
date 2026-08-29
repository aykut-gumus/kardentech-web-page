import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'solarEnergy' });
}

export default function SolarEnergyPage() {
  return (
    <ComingSoonService 
      lang="ru" 
      pageId="solarEnergy" 
      title="СОЛНЕЧНАЯ ЭНЕРГЕТИКА / ДИЛЕР İKLİMSA"
      message="Подробный контент и примеры проектов, касающихся этой услуги, находятся в стадии подготовки. Они скоро появятся здесь."
    />
  );
}
