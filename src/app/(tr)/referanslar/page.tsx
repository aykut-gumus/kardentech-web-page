import { getLocalizedMetadata } from '@/i18n/metadata';
import ProjectGrid from '@/components/ProjectGrid';
import AssignedProjects from '@/components/references/AssignedProjects';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'references' });
}

export default function ReferanslarPage() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Referanslar', item: '/referanslar' } ]
        )
      ]} />
<div className="flex-1 flex flex-col bg-[var(--color-white)] min-h-full">
      <ProjectGrid lang="tr" />
      <AssignedProjects lang="tr" />
      <Footer lang="tr" />
    </div>
    </>
  );
}
