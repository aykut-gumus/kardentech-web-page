import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'technicalConsultancy' });
}

export default function TechnicalConsultancyPage() {
  return (
    <ComingSoonService 
      lang="ru" 
      pageId="technicalConsultancy" 
      title="ТЕХНИЧЕСКИЙ КОНСАЛТИНГ"
      message="Подробный контент и примеры проектов, касающихся этой услуги, находятся в стадии подготовки. Они скоро появятся здесь."
    />
  );
}
