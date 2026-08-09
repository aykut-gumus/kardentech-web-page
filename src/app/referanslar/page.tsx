import { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Referanslar | Kardentech Mühendislik',
  description: 'Kardentech Mühendislik tarafından tamamlanan güncel konut, ticari ve endüstriyel proje referanslarımız.',
};

export default function ReferanslarPage() {
  return (
    <div className="flex-1 flex flex-col bg-[var(--color-white)] min-h-full">
      <ProjectGrid />
      <Footer />
    </div>
  );
}
