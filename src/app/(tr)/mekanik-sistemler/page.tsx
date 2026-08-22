import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import RelatedProject from '@/components/services/RelatedProject';
import ServiceItems from '@/components/services/ServiceItems';
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

      <ServiceItems items={[
        { id: '1', title: 'Mekanik Proje Tasarım', image: '/images/services/mekanik/01.jpg' },
        { id: '2', title: 'VRF / Klima Soğutma Sistemi', image: '/images/services/mekanik/02.jpg' },
        { id: '3', title: 'Yerden Isıtma İşleri', image: '/images/services/mekanik/03.jpg' },
        { id: '4', title: 'Isıtma ve Isı Pompaları', image: '/images/services/mekanik/04.jpg' },
        { id: '5', title: 'Havalandırma İşleri', image: '/images/services/mekanik/05.jpg' },
        { id: '6', title: 'Sıhhi Tesisat (Temiz Su, Kanalizasyon, Yağmur)', image: '/images/services/mekanik/06.jpg' },
        { id: '7', title: 'Su Deposu, Hidrofor ve Initial Paket Sistemler', image: '/images/services/mekanik/07.jpg' },
        { id: '8', title: 'Yangın Söndürme Sistemleri (Yangın Pompası, Yangın Dolabı, Sprinkler v.b.)', image: '/images/services/mekanik/08.jpg' },
      ]} />

      <RelatedProject lang="tr" projects={relatedProjectsData} />
      
      <ServicesCTA lang="tr" />
      
      <Footer lang="tr" />
    </div>
  );
}
