import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'technicalConsultancy' });
}

export default function TechnicalConsultancyPage() {
  return (
    <ComingSoonService 
      lang="tr" 
      pageId="technicalConsultancy" 
      title="TEKNİK DANIŞMANLIK"
      message="Bu hizmetimize ilişkin detaylı içerikler ve proje örnekleri hazırlanmaktadır. Çok yakında burada sizlerle olacak."
    />
  );
}
