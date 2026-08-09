import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap } from '@/i18n/routes';
import { LocalizedText } from '@/data/projects';

export default function ExperienceList({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const experiences: { name: LocalizedText, location: LocalizedText }[] = [
    { 
      name: { tr: 'Jumeirah Village 856 Villas', en: 'Jumeirah Village 856 Villas', ru: 'Jumeirah Village 856 Villas' }, 
      location: { tr: 'Dubai / BAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } 
    },
    { 
      name: { tr: 'SLS Dubai Hotel & Residences', en: 'SLS Dubai Hotel & Residences', ru: 'SLS Dubai Hotel & Residences' }, 
      location: { tr: 'Dubai / BAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } 
    },
    { 
      name: { tr: 'Sheraton Ankara Convention Center', en: 'Sheraton Ankara Convention Center', ru: 'Sheraton Ankara Convention Center' }, 
      location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } 
    },
    { 
      name: { tr: 'Aquapark Moscow', en: 'Aquapark Moscow', ru: 'Аквапарк Москва' }, 
      location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } 
    },
    { 
      name: { tr: 'Mercedes Benz Hasmer Bursa Showroom', en: 'Mercedes Benz Hasmer Bursa Showroom', ru: 'Шоурум Mercedes Benz Hasmer Bursa' }, 
      location: { tr: 'Bursa / TÜRKİYE', en: 'Bursa / TÜRKİYE', ru: 'Бурса / TÜRKİYE' } 
    },
    { 
      name: { tr: 'Esenboğa Havalimanı CIP Lounge Renovasyonu', en: 'Esenboğa Airport CIP Lounge Renovation', ru: 'Реновация CIP-зала аэропорта Эсенбога' }, 
      location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } 
    },
  ];

  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-12">
          {dict.about.experienceTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <h3 className="text-lg md:text-xl font-bold text-[var(--color-charcoal)]">
                {exp.name[lang]}
              </h3>
              <span className="text-sm md:text-base text-[var(--color-graphite)] tracking-wide uppercase">
                {exp.location[lang]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex">
          <Link 
            href={routeMap.references[lang]} 
            className="group flex items-center gap-4 text-sm md:text-base font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase hover:text-[var(--color-charcoal)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm p-2 -ml-2"
          >
            {dict.nav.references}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
