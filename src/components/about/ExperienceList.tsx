import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ExperienceList() {
  const experiences = [
    { name: 'Jumeirah Village 856 Villas', location: 'Dubai / BAE' },
    { name: 'SLS Dubai Hotel & Residences', location: 'Dubai / BAE' },
    { name: 'Sheraton Ankara Convention Center', location: 'Ankara / TÜRKİYE' },
    { name: 'Aquapark Moscow', location: 'Moskova / RUSYA' },
    { name: 'Mercedes Benz Hasmer Bursa Showroom', location: 'Bursa / TÜRKİYE' },
    { name: 'Esenboğa Havalimanı CIP Lounge Renovasyonu', location: 'Ankara / TÜRKİYE' },
  ];

  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-12">
          GÖREV ALINAN PROJELER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <h3 className="text-lg md:text-xl font-bold text-[var(--color-charcoal)]">
                {exp.name}
              </h3>
              <span className="text-sm md:text-base text-[var(--color-graphite)] tracking-wide uppercase">
                {exp.location}
              </span>
            </div>
          ))}
        </div>

        <div className="flex">
          <Link 
            href="/referanslar" 
            className="group flex items-center gap-4 text-sm md:text-base font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase hover:text-[var(--color-charcoal)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm p-2 -ml-2"
          >
            PROJELERİMİZİ İNCELEYİN
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
