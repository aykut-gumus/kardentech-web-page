import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'mechanical' });
}

export default function MekanikSistemlerPage() {
  const heroImages = [
    { src: '/images/projects/sekerpinar-fabrikasi/02.jpg', position: 'object-center' }
  ];

  const sekerpinarProject = projects.find(p => p.id === 'sekerpinar-fabrikasi');

  const relatedProjectsData = [];
  if (sekerpinarProject) relatedProjectsData.push({ project: sekerpinarProject, description: 'Elektrik ve Mekanik İşleri' });

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="tr"
        pageId="mechanical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="tr"
        paragraphs={[
          "Kardentech Mühendislik, katalogda yer alan Elektrik ve Mekanik Uygulamalar faaliyet çerçevesi kapsamında mekanik uygulamalar alanında faaliyet göstermektedir.",
          "Bu alana ilişkin doğrulanmış proje deneyimlerinden seçkiler aşağıda sunulmaktadır."
        ]}
      />

      <RelatedProject lang="tr" projects={relatedProjectsData} />
      
      <ServicesCTA lang="tr" />
      
      <Footer lang="tr" />
    </div>
  );
}
