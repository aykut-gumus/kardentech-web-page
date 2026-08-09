import React from 'react';

export default function ExpertiseList() {
  const expertises = [
    { id: '01', title: 'DEKORASYON — RENOVASYON' },
    { id: '02', title: 'ANAHTAR TESLİM PROJELER' },
    { id: '03', title: 'TASARIM, PROJE VE DANIŞMANLIK' },
    { id: '04', title: 'ELEKTRİK VE MEKANİK UYGULAMALAR' },
  ];

  return (
    <section className="w-full bg-[var(--color-light-gray)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-12">
          FAALİYET ALANLARIMIZ
        </h2>
        
        <div className="flex flex-col border-t border-[var(--color-medium-gray)]">
          {expertises.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--color-medium-gray)] group hover:bg-[var(--color-white)] transition-colors duration-300"
            >
              <div className="text-4xl md:text-6xl font-light text-[var(--color-graphite)]/30 font-heading mb-4 md:mb-0 md:w-32 group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300">
                {item.id}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)] tracking-wide group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 flex-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
