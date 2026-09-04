import { getLocalizedMetadata } from '@/i18n/metadata';
import ProjectGrid from '@/components/ProjectGrid';
import AssignedProjects from '@/components/references/AssignedProjects';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'references' });
}

export default function ReferencesPageRU() {
  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Проекты', item: '/ru/references' } ]
        )
      ]} />
<div className="flex-1 flex flex-col bg-[var(--color-white)] min-h-full">
      <ProjectGrid lang="ru" />
      <AssignedProjects lang="ru" />
      <Footer lang="ru" />
    </div>
    </>
  );
}
