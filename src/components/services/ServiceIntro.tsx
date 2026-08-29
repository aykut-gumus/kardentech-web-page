import React from 'react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

interface ServiceIntroProps {
  title?: string;
  paragraphs: string[];
  lang: Locale;
}

export default function ServiceIntro({ title, paragraphs, lang }: ServiceIntroProps) {
  const dict = getDictionary(lang);
  const displayTitle = title || dict.services.approachTitle;

  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 pt-20 pb-12 lg:pt-24 lg:pb-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)] tracking-tight leading-tight uppercase md:whitespace-nowrap">
            {displayTitle}
          </h2>
        </div>
        <div className="flex flex-col text-base md:text-lg text-[var(--color-graphite)] leading-relaxed space-y-4 md:space-y-6 text-left">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
