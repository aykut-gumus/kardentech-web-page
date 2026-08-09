"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ServicesDropdown from './ServicesDropdown';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap, getPageIdFromPath } from '@/i18n/routes';

export default function Navbar({ lang }: { lang: Locale }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(lang);
  const pageId = getPageIdFromPath(pathname);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const isServicesActive = ['services', 'electrical', 'mechanical', 'finishing'].includes(pageId);
  const isReferencesActive = pageId === 'references' || pageId === 'dynamic-reference';

  return (
    <div className="relative z-50 bg-[var(--color-white)] shadow-sm shrink-0">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 2xl:px-32 h-[80px]">
        {/* Logo */}
        <Link href={routeMap.home[lang]} className="flex flex-col relative z-50 hover:opacity-90 transition-opacity">
          {!logoError ? (
            <div className="relative h-[32px] w-[200px]">
              <Image 
                src="/images/brand/kardentech-logo.png" 
                alt="Kardentech Logo" 
                fill
                className="object-contain object-left"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <>
              <span className="font-bold text-xl md:text-2xl tracking-widest text-[var(--color-charcoal)] leading-tight font-heading">
                KARDENTECH
              </span>
              <span className="text-[0.65rem] md:text-xs tracking-[0.25em] text-[var(--color-graphite)]">
                MÜHENDİSLİK
              </span>
            </>
          )}
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal)] relative z-50">
          <Link href={routeMap.home[lang]} className={`transition-colors relative group py-2 ${pageId === 'home' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.home}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href={routeMap.about[lang]} className={`transition-colors relative group py-2 ${pageId === 'about' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.about}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          
          <button 
            onClick={toggleServices}
            aria-expanded={isServicesOpen}
            aria-controls="services-dropdown"
            className={`transition-colors relative group py-2 ${isServicesOpen ? 'text-[var(--color-bodrum-blue)]/80' : ''} ${isServicesActive ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.services}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <Link href={routeMap.references[lang]} className={`transition-colors relative group py-2 ${isReferencesActive ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.references}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isReferencesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href={routeMap.contact[lang]} className={`transition-colors relative group py-2 ${pageId === 'contact' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.contact}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
      </nav>

      {/* Dropdown Overlay */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 top-[116px] bg-black/0 z-30"
          onClick={() => setIsServicesOpen(false)}
        />
      )}

      {/* Dropdown */}
      <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} lang={lang} />
    </div>
  );
}
