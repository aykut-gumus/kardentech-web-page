import React from 'react';
import Image from 'next/image';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

interface ServicesHeroProps {
  lang: Locale;
  pageId: 'services' | 'electrical' | 'mechanical' | 'finishing';
  images: {
    src: string;
    alt?: string;
    position?: string;
  }[];
}

export default function ServicesHero({ lang, pageId, images }: ServicesHeroProps) {
  const dict = getDictionary(lang);
  let title = '';
  let statement = '';

  if (pageId === 'services') {
    title = dict.nav.services;
    statement = 'Mühendislik, proje ve uygulama süreçlerine bütüncül yaklaşım.'; // fallback TR for now, but I should translate this
    if (lang === 'en') statement = 'A holistic approach to engineering, project, and implementation processes.';
    if (lang === 'ru') statement = 'Комплексный подход к инженерным, проектным и прикладным процессам.';
  } else if (pageId === 'electrical') {
    title = dict.services.categories.electrical.title;
  } else if (pageId === 'mechanical') {
    title = dict.services.categories.mechanical.title;
  } else if (pageId === 'finishing') {
    title = dict.services.categories.finishing.title;
  }

  return (
    <section className="relative w-full h-[40vh] md:h-[46vh] flex overflow-hidden shrink-0 bg-[var(--color-charcoal)]">
      {/* Background Composition */}
      <div className={`absolute inset-0 z-0 flex flex-col md:flex-row w-full h-full ${images.length > 1 ? 'md:-ml-[2%] md:w-[104%]' : ''}`}>
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`relative w-full grayscale-[0.8] opacity-60 overflow-hidden ${
              images.length === 1 ? 'h-full md:w-full' : 
              images.length === 2 ? 'h-1/2 md:h-full md:w-1/2 md:skew-x-[-3deg] md:-mx-4' + (index === 1 ? ' border-t md:border-t-0 md:border-l border-white/10' : '') : 
              'h-1/3 md:h-full md:w-1/3 md:skew-x-[-3deg] md:-mx-4' + (index > 0 ? ' border-t md:border-t-0 md:border-l border-white/10' : '')
            }`}
          >
            <div className={`absolute inset-0 ${images.length > 1 ? 'md:skew-x-[3deg] md:scale-[1.15]' : ''}`}>
              <Image 
                src={img.src}
                alt={img.alt || ""}
                fill
                sizes={images.length === 1 ? "100vw" : images.length === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                className={`object-cover ${img.position || 'object-center'}`}
                priority
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[var(--color-bodrum-blue)]/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 2xl:px-32 pb-12 w-full max-w-[1440px] mx-auto h-full">
        <div className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue-light)] uppercase mb-4">
          {dict.home.hero.title}
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium  tracking-[-0.005em] leading-[1.08] text-white mb-4 max-w-4xl uppercase">
          {title}
        </h1>
        {statement && (
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light tracking-wide">
            {statement}
          </p>
        )}
      </div>
    </section>
  );
}
