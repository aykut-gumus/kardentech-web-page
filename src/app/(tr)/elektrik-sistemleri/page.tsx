import { getLocalizedMetadata } from '@/i18n/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceItems from '@/components/services/ServiceItems';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/json-ld';

export function generateMetadata() {
  return getLocalizedMetadata({ locale: 'tr', pageId: 'electrical' });
}

export default function ElektrikSistemleriPage() {
    const heroImages = [
    { src: '/images/services/elektrik.png', position: 'object-center' }
  ];

  return (
    <>
      <JsonLd data={[
        getBreadcrumbSchema(
          [ { name: 'Hizmetlerimiz', item: '/hizmetlerimiz' }, { name: 'Elektrik Sistemleri', item: '/elektrik-sistemleri' } ]
        )
      ]} />
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

      <ServicesCTA lang="tr" />
      
      <Footer lang="tr" />
    </div>
    </>
  );
}
