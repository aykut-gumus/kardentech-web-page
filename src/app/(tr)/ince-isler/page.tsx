import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'finishing' });
}

export default function InceIslerPage() {
    const heroImages = [
    { src: '/images/services/ince-isler.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Hizmetlerimiz', item: '/hizmetlerimiz' }, { name: 'İnce İşler', item: '/ince-isler' } ]
        )
      ]} />
<div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang="tr"
        pageId="finishing"
        images={heroImages}
      />
      
      <ServiceIntro 
        lang="tr"
        paragraphs={[
          "Kardentech Mühendislik'in faaliyet çerçevesinde Dekorasyon — Renovasyon ve Anahtar Teslim Projeler yer almaktadır.",
          "İnce İşler, web sitesindeki hizmet sınıflandırması kapsamında bu faaliyetlerle ilişkili proje deneyimlerini bir araya getirmektedir."
        ]}
      />

      <ServicesCTA lang="tr" />
      
      <Footer lang="tr" />
    </div>
    </>
  );
}
