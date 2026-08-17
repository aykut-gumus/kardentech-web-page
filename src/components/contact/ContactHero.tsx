import React from 'react';
import Image from 'next/image';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

export default function ContactHero({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  
  return (
    <section className="relative w-full h-[40vh] md:h-[46vh] flex overflow-hidden shrink-0 bg-[var(--color-charcoal)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/projects/suyali-yalikavak/01.jpg"
          alt="Kardentech Mühendislik İletişim"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-60 grayscale-[0.8]"
          priority
        />
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
          {dict.nav.contact}
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light tracking-wide">
          {lang === 'tr' ? 'Projeleriniz ve iş birliği talepleriniz için bizimle iletişime geçin.' : lang === 'en' ? 'Contact us for your projects and cooperation requests.' : 'Свяжитесь с нами для ваших проектов и запросов на сотрудничество.'}
        </p>
      </div>
    </section>
  );
}
