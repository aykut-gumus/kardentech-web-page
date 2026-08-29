import React from 'react';

import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

interface ServicesHeroProps {
  lang: Locale;
  pageId: 'services' | 'electrical' | 'mechanical' | 'finishing' | 'technicalConsultancy' | 'solarEnergy';
  images: {
    src: string;
    alt?: string;
    position?: string;
  }[];
  customTitle?: string;
}

export default function ServicesHero({ lang, pageId, images, customTitle }: ServicesHeroProps) {
  const dict = getDictionary(lang);
  let title = customTitle || '';
  let statement = '';

  if (!customTitle) {
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
  }

  return (
    <section 
      className="relative w-full h-[140px] md:h-[200px] flex overflow-hidden shrink-0"
      style={{ background: 'linear-gradient(90deg, #22272B 0%, #26333D 100%)' }}
    >
      <div className="relative z-20 flex flex-col justify-end px-6 md:px-12 lg:px-20 2xl:px-32 pb-6 md:pb-10 w-full max-w-[1440px] mx-auto h-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium tracking-[-0.005em] leading-[1.08] text-white mb-2 md:mb-4 max-w-4xl uppercase">
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
