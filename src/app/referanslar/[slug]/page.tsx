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
  if (!project) return { title: 'Proje Bulunamadı' };
  
  return {
    title: `${project.title} | Kardentech Referanslar`,
    description: project.summary || `${project.title} projesi teknik detayları.`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-white)]">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] max-h-[65vh] bg-[var(--color-charcoal)] overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src={project.coverImage}
          alt={`${project.title} kapak görseli`}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${project.slug === 'mercedes-benz-hasmer' ? 'object-top' : 'object-center'}`}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 2xl:px-32 pb-12 md:pb-20">
          <div className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue-light)] uppercase mb-4">
            {project.category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading max-w-4xl">
            {project.title}
          </h1>
          {project.location && (
            <div className="text-white/80 mt-4 text-sm md:text-base tracking-wide">
              {project.location}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      {project.summary && (
        <section className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-6 font-heading">
              Proje Hakkında
            </h2>
            <p className="text-[var(--color-graphite)] leading-relaxed md:text-lg">
              {project.summary}
            </p>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 pb-20 md:pb-24">
        <h2 className="text-2xl font-bold text-[var(--color-charcoal)] mb-8 font-heading">
          Galeri
        </h2>
        <ProjectGallery images={project.images} projectTitle={project.title} />
      </section>

      <Footer />
    </div>
  );
}
