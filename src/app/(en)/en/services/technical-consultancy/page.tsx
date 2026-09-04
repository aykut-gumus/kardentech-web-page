import { getLocalizedMetadata } from '@/i18n/metadata';
import ComingSoonService from '@/components/services/ComingSoonService';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'technicalConsultancy' });
}

export default function TechnicalConsultancyPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Services', item: '/en/services' }, { name: 'Technical Consultancy', item: '/en/services/technical-consultancy' } ]
        )
      ]} />
<ComingSoonService 
      lang="en" 
      pageId="technicalConsultancy" 
      title="TECHNICAL CONSULTING"
      message="Detailed content and project examples regarding this service are being prepared. They will be here with you very soon."
    />
    </>
  );
}
