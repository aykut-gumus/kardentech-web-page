import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ServiceDisciplines() {
  const disciplines = [
    {
      title: 'ELEKTRİK SİSTEMLERİ',
      href: '/elektrik-sistemleri',
      description: 'Elektrik uygulama süreçlerine yönelik nötr mühendislik çözümleri.',
      image: '/images/projects/baia-bodrum-hotel/01.jpg'
    },
    {
      title: 'MEKANİK SİSTEMLER',
      href: '/mekanik-sistemler',
      description: 'Mekanik sistemler alanında projelendirme ve uygulama hizmetleri.',
      image: '/images/projects/sekerpinar-fabrikasi/01.jpg'
    },
    {
      title: 'İNCE İŞLER',
      href: '/ince-isler',
      description: 'Dekorasyon ve renovasyon uygulamaları.',
      image: '/images/projects/y-uzun-homes/01.jpg'
    }
  ];

  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-12">
          ANA HİZMET DİSİPLİNLERİ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {disciplines.map((discipline, index) => (
            <Link 
              key={index}
              href={discipline.href}
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm"
            >
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-[var(--color-light-gray)]">
                <Image 
                  src={discipline.image}
                  alt={discipline.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300">
                {discipline.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--color-graphite)] mb-6 flex-1">
                {discipline.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase">
                Detayları İncele
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
