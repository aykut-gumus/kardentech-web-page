import React from 'react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

export default function AboutIntro({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  
  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 pt-16 pb-12 md:pt-24 md:pb-12">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)] mb-8  tracking-tight">
          {dict.home.hero.title}
        </h2>
        <div className="max-w-[70ch] text-base md:text-lg text-[var(--color-graphite)] leading-relaxed space-y-6">
          <p>
            {dict.about.intro.p1}
          </p>
          <p>
            {dict.about.intro.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
