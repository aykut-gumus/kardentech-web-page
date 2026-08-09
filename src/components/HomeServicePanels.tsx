"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap } from '@/i18n/routes';

export default function HomeServicePanels({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col md:flex-row w-full bg-[var(--color-charcoal)] overflow-hidden flex-1 relative">
      
      {/* Panel 1 - Elektrik Sistemleri */}
      <div className="relative flex-1 md:skew-x-[-8deg] md:-ml-8 overflow-hidden group border-b md:border-b-0 md:border-r border-[var(--color-graphite)]/40 min-h-[33svh] md:min-h-0">
        <Link 
          href={routeMap.electrical[lang]} 
          className="block w-full h-full md:skew-x-[8deg] md:ml-8 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] focus-visible:ring-inset"
          aria-label={dict.services.categories.electrical.title}
        >
          <div className="absolute inset-0 md:-left-[20%] md:-right-[20%] bg-[var(--color-bodrum-blue-dark)]">
             <div className="absolute inset-0 bg-[var(--color-bodrum-blue-dark)]/60 z-10 transition-opacity duration-400 group-hover:bg-[var(--color-bodrum-blue-dark)]/40" />
             <div className="absolute inset-0 bg-cover bg-center grayscale contrast-[0.85] brightness-90 transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: 'url("/images/homepage/electrical.jpg")' }} />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-[18vh] md:pb-[23vh]">
            <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-6 transition-all duration-400 group-hover:w-[60px]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-wide font-heading uppercase">
              {dict.services.categories.electrical.title.split(' ')[0]}<br />
              {dict.services.categories.electrical.title.split(' ').slice(1).join(' ')}
            </h2>
            <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-[var(--color-bodrum-blue-light)] transition-colors duration-400 font-medium tracking-wider text-sm mt-4 uppercase">
              {dict.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>
      </div>

      {/* Panel 2 - Mekanik Sistemler */}
      <div className="relative flex-1 md:skew-x-[-8deg] overflow-hidden group border-b md:border-b-0 md:border-r border-[var(--color-graphite)]/40 min-h-[33svh] md:min-h-0">
        <Link 
          href={routeMap.mechanical[lang]} 
          className="block w-full h-full md:skew-x-[8deg] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] focus-visible:ring-inset"
          aria-label={dict.services.categories.mechanical.title}
        >
          <div className="absolute inset-0 md:-left-[20%] md:-right-[20%] bg-[var(--color-charcoal)]">
             <div className="absolute inset-0 bg-[var(--color-charcoal)]/60 z-10 transition-opacity duration-400 group-hover:bg-[var(--color-charcoal)]/40" />
             <div className="absolute inset-0 bg-cover bg-center grayscale contrast-[0.85] brightness-90 transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: 'url("/images/homepage/mechanical.jpg")' }} />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-[18vh] md:pb-[23vh]">
            <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-6 transition-all duration-400 group-hover:w-[60px]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-wide font-heading uppercase">
              {dict.services.categories.mechanical.title.split(' ')[0]}<br />
              {dict.services.categories.mechanical.title.split(' ').slice(1).join(' ')}
            </h2>
            <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-[var(--color-bodrum-blue-light)] transition-colors duration-400 font-medium tracking-wider text-sm mt-4 uppercase">
              {dict.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>
      </div>

      {/* Panel 3 - İnce İşler */}
      <div className="relative flex-1 md:skew-x-[-8deg] md:-mr-8 overflow-hidden group min-h-[33svh] md:min-h-0">
        <Link 
          href={routeMap.finishing[lang]} 
          className="block w-full h-full md:skew-x-[8deg] md:-ml-8 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] focus-visible:ring-inset"
          aria-label={dict.services.categories.finishing.title}
        >
          <div className="absolute inset-0 md:-left-[20%] md:-right-[20%] bg-[#1a1a1a]">
             <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-400 group-hover:bg-black/40" />
             <div className="absolute inset-0 bg-cover bg-center grayscale contrast-[0.85] brightness-90 transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: 'url("/images/homepage/finishing.jpg")' }} />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-[18vh] md:pb-[23vh]">
            <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-6 transition-all duration-400 group-hover:w-[60px]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-wide font-heading uppercase">
              {dict.services.categories.finishing.title.split(' ')[0]}<br />
              {dict.services.categories.finishing.title.split(' ').slice(1).join(' ')}
            </h2>
            <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-[var(--color-bodrum-blue-light)] transition-colors duration-400 font-medium tracking-wider text-sm mt-4 uppercase">
              {dict.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}
