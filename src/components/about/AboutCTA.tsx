import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="w-full bg-[var(--color-charcoal)] px-6 md:px-12 lg:px-20 2xl:px-32 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-bodrum-blue)]/10 skew-x-12 translate-x-32"></div>

      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 font-heading leading-tight max-w-3xl">
          Size Uygun Yaşanabilir Mekanlar Sunuyoruz.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Link 
            href="/referanslar" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bodrum-blue)] text-white text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            REFERANSLAR
          </Link>
          <Link 
            href="/iletisim" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-charcoal)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            BİZE ULAŞIN
          </Link>
        </div>
      </div>
    </section>
  );
}
