import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'İnce İşler ve Renovasyon | Kardentech Mühendislik Bodrum',
  description: "Kardentech Mühendislik'in dekorasyon, renovasyon ve ilgili proje deneyimlerini inceleyin.",
};

export default function InceIslerPage() {
  const heroImages = [
    { src: '/images/projects/y-uzun-homes/01.jpg', position: 'object-center' }
  ];

  const yuzunProject = projects.find(p => p.id === 'y-uzun-homes');

  const relatedProjectsData = [];
  if (yuzunProject) relatedProjectsData.push({ project: yuzunProject, description: 'Y. Uzun Home\'s Renovasyonu' });

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        title="İNCE İŞLER"
        eyebrow="DEKORASYON — RENOVASYON"
        images={heroImages}
      />
      
      <ServiceIntro 
        paragraphs={[
          "Kardentech Mühendislik'in faaliyet çerçevesinde Dekorasyon — Renovasyon ve Anahtar Teslim Projeler yer almaktadır.",
          "İnce İşler, web sitesindeki hizmet sınıflandırması kapsamında bu faaliyetlerle ilişkili proje deneyimlerini bir araya getirmektedir."
        ]}
      />

      <RelatedProject projects={relatedProjectsData} />
      
      <ServicesCTA />
      
      <Footer />
    </div>
  );
}
