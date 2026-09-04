import { getLocalizedMetadata } from '@/i18n/metadata';
import ProjectGrid from '@/components/ProjectGrid';
import AssignedProjects from '@/components/references/AssignedProjects';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'en', pageId: 'references' });
}

export default function ReferencesPageEN() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'References', item: '/en/references' } ]
        )
      ]} />
<div className="flex-1 flex flex-col bg-[var(--color-white)] min-h-full">
      <ProjectGrid lang="en" />
      <AssignedProjects lang="en" />
      <Footer lang="en" />
    </div>
    </>
  );
}
