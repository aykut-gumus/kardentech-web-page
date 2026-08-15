import React from 'react';
import Link from 'next/link';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap } from '@/i18n/routes';

export default function ServicesCTA({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="w-full bg-[var(--color-charcoal)] px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-0 md:h-[220px] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#24313A] skew-x-12 translate-x-32"></div>

      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-script font-light text-white mb-8 tracking-wide max-w-[90%] md:max-w-none md:whitespace-nowrap">
          {dict.about.slogan}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto shrink-0">
          <Link 
            href={routeMap.references[lang]} 
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-bodrum-blue)] text-[var(--color-charcoal)] text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-[var(--color-bodrum-blue-dark)] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue-dark)] rounded-sm"
          >
            {dict.nav.references}
          </Link>
          <Link 
            href={routeMap.contact[lang]} 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-charcoal)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            {dict.common.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
}
