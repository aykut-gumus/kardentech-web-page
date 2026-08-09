import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceApproach from '@/components/services/ServiceApproach';
import OfficialActivities from '@/components/services/OfficialActivities';
import ServiceDisciplines from '@/components/services/ServiceDisciplines';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Kardentech Mühendislik Bodrum',
  description: "Kardentech Mühendislik'in dekorasyon ve renovasyon, anahtar teslim projeler, tasarım, proje ve danışmanlık ile elektrik ve mekanik uygulama alanlarını inceleyin.",
};

export default function HizmetlerimizPage() {
  const heroImages = [
    { src: '/images/projects/quadro-villalari/01.jpg', position: 'object-center' },
    { src: '/images/projects/mercedes-benz-hasmer/01.jpg', position: 'object-top' },
    { src: '/images/projects/sekerpinar-fabrikasi/01.jpg', position: 'object-center' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        title="HİZMETLERİMİZ"
        eyebrow="KARDENTECH MÜHENDİSLİK"
        statement="Mühendislik, proje ve uygulama süreçlerine bütüncül yaklaşım."
        images={heroImages}
      />
      <ServiceApproach />
      <OfficialActivities />
      <ServiceDisciplines />
      <ServicesCTA />
      <Footer />
    </div>
  );
}
