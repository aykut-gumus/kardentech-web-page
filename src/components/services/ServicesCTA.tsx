import React from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="w-full bg-[var(--color-bodrum-blue)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading leading-tight">
            Projelerimizi İnceleyin
          </h2>
          <p className="text-white/90 text-base md:text-lg">
            Deneyimimizi ve referans projelerimizi detaylı olarak görüntüleyebilirsiniz.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
          <Link 
            href="/referanslar" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-bodrum-blue)] text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            REFERANSLARIMIZ
          </Link>
          <Link 
            href="/iletisim" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            BİZE ULAŞIN
          </Link>
        </div>
      </div>
    </section>
  );
}
