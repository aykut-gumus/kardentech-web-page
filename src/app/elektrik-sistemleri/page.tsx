import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Elektrik Sistemleri | Kardentech Mühendislik Bodrum',
  description: "Kardentech Mühendislik'in elektrik uygulamaları ve ilgili proje deneyimlerini inceleyin.",
};

export default function ElektrikSistemleriPage() {
  const heroImages = [
    { src: '/images/projects/baia-bodrum-hotel/01.jpg', position: 'object-center' }
  ];

  const baiaProject = projects.find(p => p.id === 'baia-bodrum-hotel');
  const sekerpinarProject = projects.find(p => p.id === 'sekerpinar-fabrikasi');

  const relatedProjectsData = [];
  if (baiaProject) relatedProjectsData.push({ project: baiaProject, description: 'Odaların Elektrik Renovasyonu' });
  if (sekerpinarProject) relatedProjectsData.push({ project: sekerpinarProject, description: 'Elektrik ve Mekanik İşleri' });

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        title="ELEKTRİK SİSTEMLERİ"
        eyebrow="HİZMETLERİMİZ"
        images={heroImages}
      />
      
      <ServiceIntro 
        paragraphs={[
          "Kardentech Mühendislik, katalogda yer alan Elektrik ve Mekanik Uygulamalar faaliyet çerçevesi kapsamında elektrik uygulamaları alanında faaliyet göstermektedir.",
          "Bu alana ilişkin doğrulanmış proje deneyimlerinden seçkiler aşağıda sunulmaktadır."
        ]}
      />

      <RelatedProject projects={relatedProjectsData} />
      
      <ServicesCTA />
      
      <Footer />
    </div>
  );
}
