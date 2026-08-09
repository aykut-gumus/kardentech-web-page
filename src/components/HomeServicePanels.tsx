"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap } from '@/i18n/routes';

export default function HomeServicePanels({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <div className="w-full flex flex-col flex-1 relative bg-[var(--color-charcoal)]">
      
      {/* 
        ========================================
        MOBILE STACK (Visible only on mobile)
        ========================================
      */}
      <div className="md:hidden flex flex-col w-full h-full min-h-[calc(100svh-116px)]">
        
        {/* Panel 1 - Elektrik Sistemleri */}
        <div className="relative w-full flex-1 min-h-[300px] group border-b border-white/10 bg-[#126DA6] overflow-hidden">
          <Link href={routeMap.electrical[lang]} className="block w-full h-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-bodrum-blue)]">
            <Image 
              src="/images/projects/baia-bodrum-hotel/01.jpg" 
              alt={dict.services.categories.electrical.title} 
              fill 
              className="object-cover scale-[1.06] -translate-x-[1.5%] transition-transform duration-700 ease-out group-hover:scale-[1.075] group-hover:-translate-x-[1.5%]" 
              style={{ objectPosition: 'center 60%', filter: 'brightness(0.78) saturate(0.68)' }}
            />
            <div className="absolute inset-0 bg-[#1c2024]/70 group-hover:bg-[#1c2024]/60 transition-colors duration-500" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pb-12">
              <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-4 transition-all duration-500 group-hover:w-[60px]" />
              <h2 className="text-2xl font-bold text-white mb-2 uppercase leading-tight font-heading">
                {dict.services.categories.electrical.title}
              </h2>
              <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-white transition-colors duration-400 font-medium tracking-wider text-xs uppercase mt-2">
                {dict.common.learnMore}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>
        </div>

        {/* Panel 2 - Mekanik Sistemler */}
        <div className="relative w-full flex-1 min-h-[300px] group border-b border-white/10 bg-[#343A40] overflow-hidden">
          <Link href={routeMap.mechanical[lang]} className="block w-full h-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-bodrum-blue)]">
            <Image 
              src="/images/projects/sekerpinar-fabrikasi/02.jpg" 
              alt={dict.services.categories.mechanical.title} 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              style={{ objectPosition: 'center center', filter: 'brightness(0.78) saturate(0.65)' }} 
            />
            <div className="absolute inset-0 bg-[var(--color-charcoal)]/60 group-hover:bg-[var(--color-charcoal)]/50 transition-colors duration-500" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pb-12">
              <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-4 transition-all duration-500 group-hover:w-[60px]" />
              <h2 className="text-2xl font-bold text-white mb-2 uppercase leading-tight font-heading">
                {dict.services.categories.mechanical.title}
              </h2>
              <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-white transition-colors duration-400 font-medium tracking-wider text-xs uppercase mt-2">
                {dict.common.learnMore}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>
        </div>

        {/* Panel 3 - İnce İşler */}
        <div className="relative w-full flex-1 min-h-[300px] group bg-[#111111] overflow-hidden">
          <Link href={routeMap.finishing[lang]} className="block w-full h-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-bodrum-blue)]">
            <Image 
              src="/images/projects/y-uzun-homes/01.jpg" 
              alt={dict.services.categories.finishing.title} 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              style={{ objectPosition: 'center center', filter: 'brightness(0.65) saturate(0.60)' }} 
            />
            <div className="absolute inset-0 bg-[#111]/80 group-hover:bg-[#111]/70 transition-colors duration-500" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pb-12">
              <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-4 transition-all duration-500 group-hover:w-[60px]" />
              <h2 className="text-2xl font-bold text-white mb-2 uppercase leading-tight font-heading">
                {dict.services.categories.finishing.title}
              </h2>
              <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-white transition-colors duration-400 font-medium tracking-wider text-xs uppercase mt-2">
                {dict.common.learnMore}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>
        </div>

      </div>

      {/* 
        ========================================
        DESKTOP DIAGONAL LAYOUT (md and up)
        ========================================
      */}
      <div className="hidden md:block w-full h-full flex-1 relative overflow-hidden isolate bg-transparent">
        
        {/* PANEL 1: ELEKTRİK SİSTEMLERİ */}
        <Link 
          href={routeMap.electrical[lang]} 
          className="absolute inset-0 z-[1] bg-[#126DA6] group block focus:outline-none transition-all overflow-hidden"
          style={{ 
            clipPath: 'polygon(0% 0%, 86% 0%, 66% 50%, 0% 50%)',
            WebkitClipPath: 'polygon(0% 0%, 86% 0%, 66% 50%, 0% 50%)'
          }}
        >
          {/* Full-bleed Photo */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
            <Image 
              src="/images/projects/baia-bodrum-hotel/01.jpg" 
              alt={dict.services.categories.electrical.title} 
              fill 
              className="object-cover scale-[1.06] -translate-x-[1.5%]"
              style={{ 
                objectPosition: 'center 68%',
                filter: 'brightness(0.78) saturate(0.68)' 
              }} 
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-95"
              style={{ 
                background: 'linear-gradient(to right, rgba(42,48,54,0.78) 0%, rgba(42,48,54,0.66) 35%, rgba(42,48,54,0.50) 70%, rgba(42,48,54,0.40) 100%)' 
              }}
            />
          </div>
          
          {/* LAYER 5: Text */}
          <div className="absolute z-10 flex flex-col pointer-events-none" style={{ left: '6%', top: '18%' }}>
            <div className="w-[40px] h-[3px] bg-white/70 mb-4 transition-all duration-500 group-hover:w-[60px] group-hover:bg-white" />
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-2 uppercase leading-tight font-heading drop-shadow-md">
              {dict.services.categories.electrical.title}
            </h2>
            <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-400 font-medium tracking-wider text-xs lg:text-sm uppercase mt-4 drop-shadow-sm">
              {dict.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-400 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>

        {/* PANEL 2: MEKANİK SİSTEMLER */}
        <Link 
          href={routeMap.mechanical[lang]} 
          className="absolute inset-0 z-[2] bg-[#343A40] group block focus:outline-none transition-all overflow-hidden"
          style={{ 
            clipPath: 'polygon(0% 50%, 66% 50%, 46% 100%, 0% 100%)',
            WebkitClipPath: 'polygon(0% 50%, 66% 50%, 46% 100%, 0% 100%)'
          }}
        >
          {/* Full-bleed Photo */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
            <Image 
              src="/images/projects/sekerpinar-fabrikasi/02.jpg" 
              alt={dict.services.categories.mechanical.title} 
              fill 
              className="object-cover"
              style={{ 
                objectPosition: 'center center',
                filter: 'brightness(0.78) saturate(0.65)' 
              }} 
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-95"
              style={{ 
                background: 'linear-gradient(to right, rgba(24,28,32,0.82) 0%, rgba(24,28,32,0.68) 35%, rgba(24,28,32,0.52) 70%, rgba(24,28,32,0.40) 100%)' 
              }}
            />
          </div>
          
          {/* LAYER 5: Text */}
          <div className="absolute z-10 flex flex-col pointer-events-none" style={{ left: '6%', top: '68%' }}>
            <div className="w-[40px] h-[3px] bg-white/70 mb-4 transition-all duration-500 group-hover:w-[60px] group-hover:bg-white" />
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-2 uppercase leading-tight font-heading drop-shadow-md">
              {dict.services.categories.mechanical.title}
            </h2>
            <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-400 font-medium tracking-wider text-xs lg:text-sm uppercase mt-4 drop-shadow-sm">
              {dict.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-400 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>

        {/* PANEL 3: İNCE İŞLER */}
        <Link 
          href={routeMap.finishing[lang]} 
          className="absolute inset-0 z-[3] bg-[#111111] group block focus:outline-none transition-all overflow-hidden"
          style={{ 
            clipPath: 'polygon(86% 0, 100% 0, 100% 100%, 46% 100%)',
            WebkitClipPath: 'polygon(86% 0, 100% 0, 100% 100%, 46% 100%)'
          }}
        >
          {/* Full-bleed Photo */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
            <Image 
              src="/images/projects/y-uzun-homes/01.jpg" 
              alt={dict.services.categories.finishing.title} 
              fill 
              className="object-cover"
              style={{ 
                objectPosition: 'center center',
                filter: 'brightness(0.65) saturate(0.60)' 
              }} 
            />
            {/* Solid Overlay */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-95"
              style={{ backgroundColor: 'rgba(10,10,10,0.62)' }} 
            />
          </div>
          
          <div className="absolute z-10 flex flex-col pointer-events-none" style={{ left: '71%', top: '53%', transform: 'translateY(-50%)' }}>
            <div className="w-[40px] h-[3px] bg-white/70 mb-4 transition-all duration-500 group-hover:w-[60px] group-hover:bg-white" />
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-2 uppercase leading-tight font-heading drop-shadow-md whitespace-nowrap">
              {dict.services.categories.finishing.title}
            </h2>
            <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-400 font-medium tracking-wider text-xs lg:text-sm uppercase mt-4 drop-shadow-sm">
              {dict.common.learnMore}
              <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-400 group-hover:translate-x-1.5" />
            </div>
          </div>
        </Link>

        {/* 
          ========================================
          ARCHITECTURAL SEPARATOR (Desktop only)
          ========================================
        */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-colors duration-500 text-[rgba(255,255,255,0.23)] group-hover:text-[rgba(255,255,255,0.33)]" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Horizontal Line between Electric and Mechanical */}
          <path 
            d="M 0 50 L 66 50" 
            stroke="currentColor" 
            strokeWidth="1" 
            vectorEffect="non-scaling-stroke" 
            fill="none" 
          />
          {/* Diagonal Line separating Finishing Works */}
          <path 
            d="M 86 0 L 46 100" 
            stroke="currentColor" 
            strokeWidth="1" 
            vectorEffect="non-scaling-stroke" 
            fill="none" 
          />
        </svg>

      </div>

    </div>
  );
}
