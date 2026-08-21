import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServiceItems from '@/components/services/ServiceItems';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'electrical' });
}

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
        lang="tr"
        pageId="electrical"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="tr"
        paragraphs={[
          "Kardentech Mühendislik, katalogda yer alan Elektrik ve Mekanik Uygulamalar faaliyet çerçevesi kapsamında elektrik uygulamaları alanında faaliyet göstermektedir.",
          "Bu alana ilişkin doğrulanmış proje deneyimlerinden seçkiler aşağıda sunulmaktadır."
        ]}
      />

      <ServiceItems items={[
        { id: '1', title: 'Elektrik Proje Tasarım', image: '/images/services/elektrik/01.jpg' },
        { id: '2', title: 'Kuvvetli Akım İşleri', image: '/images/services/elektrik/02.jpg' },
        { id: '3', title: 'Aydınlatma İşleri', image: '/images/services/elektrik/03.jpg' },
        { id: '4', title: 'Zayıf Akım İşleri', image: '/images/services/elektrik/04.jpg' },
        { id: '5', title: 'Ev Otomasyonu', image: '/images/services/elektrik/05.jpg' },
        { id: '6', title: 'Topraklama İşleri', image: '/images/services/elektrik/06.jpg' },
        { id: '7', title: 'Peyzaj ve Cephe Aydınlatma İşleri', image: '/images/services/elektrik/07.jpg' },
      ]} />

      <RelatedProject lang="tr" projects={relatedProjectsData} />
      
      <ServicesCTA lang="tr" />
      
      <Footer lang="tr" />
    </div>
  );
}
