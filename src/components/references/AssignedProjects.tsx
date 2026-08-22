"use client";

import React from 'react';
import { Locale } from '@/i18n/types';

const abroadProjects = [
  { id: 'yd1', name: { tr: 'Jumeirah Village 856 Villas', en: 'Jumeirah Village 856 Villas', ru: 'Jumeirah Village 856 Villas' }, location: { tr: 'Dubai / BAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } },
  { id: 'yd2', name: { tr: 'SLS Dubai Hotel & Residences', en: 'SLS Dubai Hotel & Residences', ru: 'SLS Dubai Hotel & Residences' }, location: { tr: 'Dubai / UAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } },
  { id: 'yd3', name: { tr: 'Aquapark Moscow', en: 'Aquapark Moscow', ru: 'Aquapark Moscow' }, location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } },
  { id: 'yd4', name: { tr: 'Picking Plant Sac Fabrikası', en: 'Picking Plant Sheet Metal Factory', ru: 'Завод листового металла Picking Plant' }, location: { tr: 'Lipetks / RUSYA', en: 'Lipetsk / RUSSIA', ru: 'Липецк / РОССИЯ' } },
  { id: 'yd5', name: { tr: 'Internation City Package 12 Spain Cluster', en: 'Internation City Package 12 Spain Cluster', ru: 'Internation City Package 12 Spain Cluster' }, location: { tr: 'Dubai / UAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } },
  { id: 'yd6', name: { tr: 'Baykonur Çok Fonksiyonlu Kültür ve Tiyatro Merkezi', en: 'Baykonur Multifunctional Culture and Theatre Center', ru: 'Байконур — Многофункциональный центр' }, location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } },
  { id: 'yd7', name: { tr: 'Internation City Package 14 England Cluster', en: 'Internation City Package 14 England Cluster', ru: 'Internation City Package 14 England Cluster' }, location: { tr: 'Dubai / UAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } },
  { id: 'yd8', name: { tr: 'Rassvet Çok Fonksiyonlu Kültür ve Tiyatro Merkezi', en: 'Rassvet Multifunctional Culture and Theatre Center', ru: 'Рассвет — Многофункциональный центр' }, location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } },
  { id: 'yd9', name: { tr: 'Neva Çok Fonksiyonlu Kültür ve Tiyatro Merkezi', en: 'Neva Multifunctional Culture and Theatre Center', ru: 'Нева — Многофункциональный центр' }, location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } },
  { id: 'yd10', name: { tr: 'Polis Lojmanları', en: 'Police Residences', ru: 'Жилой комплекс для сотрудников полиции' }, location: { tr: 'Abudhabi / BAE', en: 'Abu Dhabi / UAE', ru: 'Абу-Даби / ОАЭ' } }
];

const domesticProjects = [
  { id: 'yi1', name: { tr: 'Sheraton Ankara Convention Center', en: 'Sheraton Ankara Convention Center', ru: 'Sheraton Ankara Convention Center' }, location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } },
  { id: 'yi2', name: { tr: 'Nurol Residence', en: 'Nurol Residence', ru: 'Nurol Residence' }, location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } },
  { id: 'yi3', name: { tr: 'Mercedes Benz Hasmer Bursa Showroom', en: 'Mercedes Benz Hasmer Bursa Showroom', ru: 'Mercedes Benz Hasmer Bursa Showroom' }, location: { tr: 'Bursa / TÜRKİYE', en: 'Bursa / TÜRKİYE', ru: 'Бурса / TÜRKİYE' } },
  { id: 'yi4', name: { tr: 'Esenboğa Havalimanı CIP Lounge Renovasyonu', en: 'Esenboğa Airport CIP Lounge Renovation', ru: 'Реновация CIP-зала аэропорта Эсенбога' }, location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } },
  { id: 'yi5', name: { tr: 'Zekeriyaköy Kardelen Villaları', en: 'Zekeriyaköy Kardelen Villas', ru: 'Виллы Kardelen, Zekeriyaköy' }, location: { tr: 'Zekeriyaköy / İSTANBUL', en: 'Zekeriyaköy / ISTANBUL', ru: 'Зекериякёй / СТАМБУЛ' } },
  { id: 'yi6', name: { tr: 'Officium Beytepe İş Merkezi', en: 'Officium Beytepe Business Center', ru: 'Бизнес-центр Officium Beytepe' }, location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } }
];

export default function AssignedProjects({ lang }: { lang: Locale }) {
  const getTitle = () => {
    if (lang === 'en') return 'PROJECTS WE CONTRIBUTED TO';
    if (lang === 'ru') return 'ПРОЕКТЫ, В КОТОРЫХ МЫ ПРИНИМАЛИ УЧАСТИЕ';
    return 'GÖREV ALINAN PROJELER';
  };

  const abroadCol1 = abroadProjects.slice(0, 5);
  const abroadCol2 = abroadProjects.slice(5, 10);
  const domesticCol = domesticProjects;

  return (
    <section className="w-full pt-8 md:pt-12 pb-24 md:pb-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-10">
          {getTitle()}
        </h2>

        {/* Desktop Headings */}
        <div className="hidden md:grid grid-cols-3 gap-x-6 lg:gap-x-8 mb-6">
          <div className="col-span-2">
            <h3 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase">
              {lang === 'en' ? 'ABROAD' : lang === 'ru' ? 'ЗА РУБЕЖОМ' : 'YURT DIŞI'}
            </h3>
          </div>
          <div className="col-span-1">
            <h3 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase">
              {lang === 'en' ? 'DOMESTIC' : lang === 'ru' ? 'ВНУТРИ СТРАНЫ' : 'YURT İÇİ'}
            </h3>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-x-6 lg:gap-x-8">
          <div className="flex flex-col justify-between h-full gap-y-4">
            {abroadCol1.map((proj) => <ProjectCard key={proj.id} project={proj} lang={lang} />)}
          </div>
          <div className="flex flex-col justify-between h-full gap-y-4">
            {abroadCol2.map((proj) => <ProjectCard key={proj.id} project={proj} lang={lang} />)}
          </div>
          <div className="flex flex-col justify-between h-full gap-y-4">
            {domesticCol.map((proj) => <ProjectCard key={proj.id} project={proj} lang={lang} />)}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-y-12 w-full">
          <div>
            <h3 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-6">
              {lang === 'en' ? 'ABROAD' : lang === 'ru' ? 'ЗА РУБЕЖОМ' : 'YURT DIŞI'}
            </h3>
            <div className="flex flex-col gap-y-4">
              {abroadProjects.map((proj) => <ProjectCard key={proj.id} project={proj} lang={lang} />)}
            </div>
          </div>
          
          <div>
            <h3 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-6">
              {lang === 'en' ? 'DOMESTIC' : lang === 'ru' ? 'ВНУТРИ СТРАНЫ' : 'YURT İÇİ'}
            </h3>
            <div className="flex flex-col gap-y-4">
              {domesticProjects.map((proj) => <ProjectCard key={proj.id} project={proj} lang={lang} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, lang }: { project: { id: string, name: Record<Locale, string>, location: Record<Locale, string> }, lang: Locale }) {
  const imageUrl = `/images/references/${project.id}.jpg`;
  // Extract number from id (e.g., 'yd1' -> '01')
  const numMatch = project.id.match(/\d+/);
  const displayNumber = numMatch ? numMatch[0].padStart(2, '0') : '';

  return (
    <article className="relative bg-white border border-[var(--color-medium-gray)] rounded-xl px-5 py-5 group transition-transform duration-300 ease-out hover:-translate-y-[2px] overflow-hidden shadow-sm w-full aspect-[4/3]">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"></div>
        <img src={imageUrl} alt={project.name[lang]} className="w-full h-full object-cover opacity-25 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* Decorative Triangle */}
      <div 
        className="absolute top-0 right-0 w-6 h-6 bg-[var(--color-bodrum-blue)] transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] z-20" 
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>
      
      <div className="flex flex-col h-full justify-center relative z-20">
        <span className="text-[10px] md:text-xs font-bold text-[var(--color-bodrum-blue)] mb-2 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)] group-hover:[text-shadow:none]">{displayNumber}</span>
        <h3 className="text-sm md:text-base font-extrabold text-black group-hover:text-white leading-snug mb-1 pr-4 break-words transition-colors duration-300 [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] group-hover:[text-shadow:none]">{project.name[lang]}</h3>
        <p className="text-xs text-[var(--color-charcoal)] group-hover:text-white/90 font-bold uppercase tracking-wider mt-1 transition-colors duration-300 [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] group-hover:[text-shadow:none]">{project.location[lang]}</p>
      </div>
    </article>
  );
}
