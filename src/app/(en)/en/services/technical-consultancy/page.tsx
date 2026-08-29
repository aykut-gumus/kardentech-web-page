import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'technicalConsultancy' });
}

export default function TechnicalConsultancyPage() {
  return (
    <ComingSoonService 
      lang="en" 
      pageId="technicalConsultancy" 
      title="TECHNICAL CONSULTING"
      message="Detailed content and project examples regarding this service are being prepared. They will be here with you very soon."
    />
  );
}
