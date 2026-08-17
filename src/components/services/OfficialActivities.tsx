import React from 'react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

export default function OfficialActivities({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const activities = [
    { id: '01', title: dict.about.expertise.decoration },
    { id: '02', title: dict.about.expertise.turnkey },
    { id: '03', title: dict.about.expertise.design },
    { id: '04', title: dict.about.expertise.electroMechanical },
  ];

  return (
    <section className="w-full bg-[var(--color-light-gray)] px-6 md:px-12 lg:px-20 2xl:px-32 pt-12 pb-12 md:pt-16 md:pb-12">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-12">
          {dict.about.expertiseTitle}
        </h2>
        
        <div className="flex flex-col border-t border-[var(--color-medium-gray)]">
          {activities.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col md:flex-row md:items-center py-10 border-b border-[var(--color-medium-gray)]"
            >
              <div className="text-4xl md:text-5xl font-light text-[var(--color-bodrum-blue)]/50  mb-4 md:mb-0 md:w-32">
                {item.id}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)] tracking-wide flex-1 uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
