import { getLocalizedMetadata } from '@/i18n/metadata';
import ProjectGrid from '@/components/ProjectGrid';
import AssignedProjects from '@/components/references/AssignedProjects';
import Footer from '@/components/Footer';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'ru', pageId: 'references' });
}

export default function ReferencesPageRU() {
  return (
    <div className="flex-1 flex flex-col bg-[var(--color-white)] min-h-full">
      <ProjectGrid lang="ru" />
      <AssignedProjects lang="ru" />
      <Footer lang="ru" />
    </div>
  );
}
