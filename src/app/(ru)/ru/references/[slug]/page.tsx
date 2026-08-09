import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Проект не найден' };
  
  return {
    title: `${project.title.ru} | Kardentech Рекомендации`,
    description: project.summary?.ru || `Технические детали проекта ${project.title.ru}.`,
  };
}

export default async function ProjectDetailPageRU({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const categoryMap: Record<string, string> = {
    'Konut': 'Жилой',
    'Otel': 'Отель',
    'Ticari / Showroom': 'Коммерческий / Выставочный зал',
    'Endüstriyel': 'Индустриальный'
  };

  const translatedCategory = categoryMap[project.category] || project.category;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-white)]">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] max-h-[65vh] bg-[var(--color-charcoal)] overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src={project.coverImage}
          alt={`Обложка ${project.title.ru}`}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${project.slug === 'mercedes-benz-hasmer' ? 'object-top' : 'object-center'}`}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 2xl:px-32 pb-12 md:pb-20">
          <div className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue-light)] uppercase mb-4">
            {translatedCategory}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading max-w-4xl uppercase">
            {project.title.ru}
          </h1>
          {project.location?.ru && (
            <div className="text-white/80 mt-4 text-sm md:text-base tracking-wide uppercase">
              {project.location.ru}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      {project.summary?.ru && (
        <section className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-6 font-heading uppercase">
              О проекте
            </h2>
            <p className="text-[var(--color-graphite)] leading-relaxed md:text-lg">
              {project.summary.ru}
            </p>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 pb-20 md:pb-24">
        <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-8 font-heading uppercase">
          Галерея
        </h2>
        <ProjectGallery images={project.images} projectTitle={project.title.ru} />
      </section>

      <Footer lang="ru" />
    </div>
  );
}
