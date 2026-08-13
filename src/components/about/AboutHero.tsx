import React from 'react';
import Image from 'next/image';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

export default function AboutHero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  
  return (
    <section className="relative w-full h-[40vh] md:h-[46vh] flex overflow-hidden shrink-0 bg-[var(--color-charcoal)]">
      {/* Background Composition */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row w-full h-full md:-ml-[2%] md:w-[104%]">
        <div className="relative w-full h-1/3 md:w-1/3 md:h-full grayscale-[0.8] opacity-60 md:skew-x-[-3deg] md:overflow-hidden md:-ml-4">
          <div className="absolute inset-0 md:skew-x-[3deg] md:scale-[1.15]">
            <Image 
              src="/images/projects/quadro-villalari/01.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="relative w-full h-1/3 md:w-1/3 md:h-full grayscale-[0.8] opacity-60 border-t md:border-t-0 md:border-l border-white/10 md:skew-x-[-3deg] md:overflow-hidden">
          <div className="absolute inset-0 md:skew-x-[3deg] md:scale-[1.15]">
            <Image 
              src="/images/projects/mercedes-benz-hasmer/01.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="relative w-full h-1/3 md:w-1/3 md:h-full grayscale-[0.8] opacity-60 border-t md:border-t-0 md:border-l border-white/10 md:skew-x-[-3deg] md:overflow-hidden md:-mr-4">
          <div className="absolute inset-0 md:skew-x-[3deg] md:scale-[1.15]">
            <Image 
              src="/images/projects/sekerpinar-fabrikasi/01.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[var(--color-bodrum-blue)]/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 2xl:px-32 pb-12 w-full max-w-[1440px] mx-auto h-full">
        <div className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue-light)] uppercase mb-4">
          {dict.home.hero.title}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading mb-4 uppercase">
          {dict.nav.about}
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light tracking-wide">
          {dict.about.slogan}
        </p>
      </div>
    </section>
  );
}
