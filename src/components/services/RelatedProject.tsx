import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap } from '@/i18n/routes';

interface RelatedProjectProps {
  projects: {
    project: Project;
    description: string;
  }[];
  lang: Locale;
}

export default function RelatedProject({ projects, lang }: RelatedProjectProps) {
  if (!projects || projects.length === 0) return null;
  const dict = getDictionary(lang);

  const getProjectUrl = (slug: string) => {
    if (lang === 'en') return `/en/references/${slug}`;
    if (lang === 'ru') return `/ru/references/${slug}`;
    return `/referanslar/${slug}`;
  };

  return (
    <section className="w-full bg-[var(--color-light-gray)] px-6 md:px-12 lg:px-20 2xl:px-32 py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-[12px] md:text-sm font-semibold tracking-[0.2em] text-[var(--color-bodrum-blue)] uppercase mb-12">
          {dict.about.experienceTitle}
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12`}>
          {projects.map((item, index) => (
            <Link 
              key={index}
              href={getProjectUrl(item.project.slug)}
              className={`group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${projects.length === 1 ? 'md:col-span-7' : 'md:col-span-6'}`}
            >
              <div className="relative w-full aspect-video mb-6 overflow-hidden bg-[var(--color-charcoal)]">
                <Image 
                  src={item.project.coverImage}
                  alt={item.project.title[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300">
                {item.project.title[lang]}
              </h3>
              <p className="text-sm md:text-base text-[var(--color-graphite)] font-medium uppercase tracking-wider mb-4 text-[var(--color-bodrum-blue)]/80">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase mt-auto pt-2">
                {dict.common.learnMore}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
