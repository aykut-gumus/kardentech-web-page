"use client";

import React from 'react';
import { Locale } from '@/i18n/types';

const assignedProjects = [
  { 
    id: '01', 
    name: { tr: 'Jumeirah Village 856 Villas', en: 'Jumeirah Village 856 Villas', ru: 'Jumeirah Village 856 Villas' }, 
    location: { tr: 'Dubai / BAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } 
  },
  { 
    id: '02', 
    name: { tr: 'SLS Dubai Hotel & Residences', en: 'SLS Dubai Hotel & Residences', ru: 'SLS Dubai Hotel & Residences' }, 
    location: { tr: 'Dubai / UAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } 
  },
  { 
    id: '03', 
    name: { tr: 'Sheraton Ankara Convention Center', en: 'Sheraton Ankara Convention Center', ru: 'Sheraton Ankara Convention Center' }, 
    location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } 
  },
  { 
    id: '04', 
    name: { tr: 'Aquapark Moscow', en: 'Aquapark Moscow', ru: 'Aquapark Moscow' }, 
    location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } 
  },
  { 
    id: '05', 
    name: { tr: 'Nurol Residence', en: 'Nurol Residence', ru: 'Nurol Residence' }, 
    location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } 
  },
  { 
    id: '06', 
    name: { tr: 'Mercedes Benz Hasmer Bursa Showroom', en: 'Mercedes Benz Hasmer Bursa Showroom', ru: 'Mercedes Benz Hasmer Bursa Showroom' }, 
    location: { tr: 'Bursa / TÜRKİYE', en: 'Bursa / TÜRKİYE', ru: 'Бурса / TÜRKİYE' } 
  },
  { 
    id: '07', 
    name: { tr: 'Picking Plant Sac Fabrikası', en: 'Picking Plant Sheet Metal Factory', ru: 'Завод листового металла Picking Plant' }, 
    location: { tr: 'Lipetks / RUSYA', en: 'Lipetsk / RUSSIA', ru: 'Липецк / РОССИЯ' } 
  },
  { 
    id: '08', 
    name: { tr: 'Internation City Package 12 Spain Cluster', en: 'Internation City Package 12 Spain Cluster', ru: 'Internation City Package 12 Spain Cluster' }, 
    location: { tr: 'Dubai / UAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } 
  },
  { 
    id: '09', 
    name: { tr: 'Baykonur Çok Fonksiyonlu Kültür ve Tiyatro Merkezi', en: 'Baykonur Multifunctional Culture and Theatre Center', ru: 'Байконур — Многофункциональный центр культуры и театра' }, 
    location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } 
  },
  { 
    id: '10', 
    name: { tr: 'Internation City Package 14 England Cluster', en: 'Internation City Package 14 England Cluster', ru: 'Internation City Package 14 England Cluster' }, 
    location: { tr: 'Dubai / UAE', en: 'Dubai / UAE', ru: 'Дубай / ОАЭ' } 
  },
  { 
    id: '11', 
    name: { tr: 'Rassvet Çok Fonksiyonlu Kültür ve Tiyatro Merkezi', en: 'Rassvet Multifunctional Culture and Theatre Center', ru: 'Рассвет — Многофункциональный центр культуры и театра' }, 
    location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } 
  },
  { 
    id: '12', 
    name: { tr: 'Esenboğa Havalimanı CIP Lounge Renovasyonu', en: 'Esenboğa Airport CIP Lounge Renovation', ru: 'Реновация CIP-зала аэропорта Эсенбога' }, 
    location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } 
  },
  { 
    id: '13', 
    name: { tr: 'Neva Çok Fonksiyonlu Kültür ve Tiyatro Merkezi', en: 'Neva Multifunctional Culture and Theatre Center', ru: 'Нева — Многофункциональный центр культуры и театра' }, 
    location: { tr: 'Moskova / RUSYA', en: 'Moscow / RUSSIA', ru: 'Москва / РОССИЯ' } 
  },
  { 
    id: '14', 
    name: { tr: 'Zekeriyaköy Kardelen Villaları', en: 'Zekeriyaköy Kardelen Villas', ru: 'Виллы Kardelen, Zekeriyaköy' }, 
    location: { tr: 'Zekeriyaköy / İSTANBUL', en: 'Zekeriyaköy / ISTANBUL', ru: 'Зекериякёй / СТАМБУЛ' } 
  },
  { 
    id: '15', 
    name: { tr: 'Officium Beytepe İş Merkezi', en: 'Officium Beytepe Business Center', ru: 'Бизнес-центр Officium Beytepe' }, 
    location: { tr: 'Ankara / TÜRKİYE', en: 'Ankara / TÜRKİYE', ru: 'Анкара / TÜRKİYE' } 
  },
  { 
    id: '16', 
    name: { tr: 'Polis Lojmanları', en: 'Police Residences', ru: 'Жилой комплекс для сотрудников полиции' }, 
    location: { tr: 'Abudhabi / BAE', en: 'Abu Dhabi / UAE', ru: 'Абу-Даби / ОАЭ' } 
  }
];

export default function AssignedProjects({ lang }: { lang: Locale }) {
  const getTitle = () => {
    if (lang === 'en') return 'PROJECTS WE CONTRIBUTED TO';
    if (lang === 'ru') return 'ПРОЕКТЫ, В КОТОРЫХ МЫ ПРИНИМАЛИ УЧАСТИЕ';
    return 'GÖREV ALINAN PROJELER';
  };

  const col1 = assignedProjects.slice(0, 6);
  const col2 = assignedProjects.slice(6, 11);
  const col3 = assignedProjects.slice(11, 16);

  return (
    <section className="w-full pt-8 md:pt-12 pb-24 md:pb-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-10">
          {getTitle()}
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-0">
          {/* Columns */}
          <div className="flex flex-col gap-y-4 md:gap-y-5">
            {col1.map((proj, idx) => <ProjectCard key={proj.id} project={proj} lang={lang} displayNumber={String(idx + 1).padStart(2, '0')} />)}
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-5">
            {col2.map((proj, idx) => <ProjectCard key={proj.id} project={proj} lang={lang} displayNumber={String(idx + 7).padStart(2, '0')} />)}
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-5">
            {col3.map((proj, idx) => <ProjectCard key={proj.id} project={proj} lang={lang} displayNumber={String(idx + 12).padStart(2, '0')} />)}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden flex flex-col gap-y-4 w-full">
          {assignedProjects.map((proj, idx) => <ProjectCard key={proj.id} project={proj} lang={lang} displayNumber={String(idx + 1).padStart(2, '0')} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, lang, displayNumber }: { project: { id: string, name: Record<Locale, string>, location: Record<Locale, string> }, lang: Locale, displayNumber: string }) {
  const imageUrl = `/images/references/${displayNumber}.jpg`;

  return (
    <article className="relative bg-white border border-[var(--color-medium-gray)] rounded-xl px-5 py-5 group transition-transform duration-300 ease-out hover:-translate-y-[2px] overflow-hidden shadow-sm w-full aspect-[4/3]">
      
      {/* Background Image Overlay on Hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src={imageUrl} alt={project.name[lang]} className="w-full h-full object-cover" />
      </div>

      {/* Decorative Triangle */}
      <div 
        className="absolute top-0 right-0 w-6 h-6 bg-[var(--color-bodrum-blue)] transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px] z-20" 
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>
      
      <div className="flex flex-col h-full justify-center relative z-20">
        <span className="text-[10px] md:text-xs font-bold text-[var(--color-bodrum-blue)] mb-2">{displayNumber}</span>
        <h3 className="text-sm md:text-base font-bold text-[var(--color-charcoal)] group-hover:text-white leading-snug mb-1 pr-4 break-words transition-colors duration-300">{project.name[lang]}</h3>
        <p className="text-xs text-[var(--color-graphite)]/80 group-hover:text-white/80 font-medium uppercase tracking-wider mt-1 transition-colors duration-300">{project.location[lang]}</p>
      </div>
    </article>
  );
}
