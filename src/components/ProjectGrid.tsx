"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project, ProjectCategory, projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

const categories: ('Tümü' | ProjectCategory)[] = ['Tümü', 'Konut', 'Otel', 'Ticari / Showroom', 'Endüstriyel'];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<'Tümü' | ProjectCategory>('Tümü');

  const filteredProjects = activeCategory === 'Tümü' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-20 flex-1 flex flex-col">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-charcoal)] mb-4 font-heading tracking-tight">
          REFERANSLAR
        </h1>
        <p className="text-[var(--color-graphite)] text-lg">
          Tamamlanan projelerimizden seçkiler.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-2 text-sm md:text-base font-medium transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${
              activeCategory === category 
                ? 'text-[var(--color-bodrum-blue)]' 
                : 'text-[var(--color-graphite)] hover:text-[var(--color-bodrum-blue)]'
            }`}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-bodrum-blue)]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-20">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/referanslar/${project.slug}`}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm"
            aria-label={`${project.title} projesini görüntüle`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-medium-gray)] rounded-sm">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10 duration-400"></div>
              <Image
                src={project.coverImage}
                alt={`${project.title} kapak görseli`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03]"
              />
            </div>
            
            <div className="pt-6">
              <div className="text-[11px] font-semibold tracking-widest text-[var(--color-graphite)] uppercase mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 font-heading">
                {project.title}
              </h3>
              
              <div className="flex items-center text-[var(--color-graphite)] group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 font-medium tracking-wider text-xs mt-4">
                İncele
                <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
