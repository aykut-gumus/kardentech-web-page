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
        <Link href={routeMap.home[lang]} className="flex flex-col relative z-50 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm p-1 -m-1">
          <Image 
            src="/images/brand/kardentech-logo.png" 
            alt="Kardentech Logo" 
            width={240}
            height={60}
            priority
            className="w-[145px] md:w-[180px] lg:w-[210px] 2xl:w-[230px] h-auto object-contain"
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal)] relative z-50">
          <Link href={routeMap.home[lang]} className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'home' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.home}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href={routeMap.about[lang]} className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'about' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.about}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          
          <button 
            onClick={toggleServices}
            aria-expanded={isServicesOpen}
            aria-controls="services-dropdown"
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${isServicesOpen ? 'text-[var(--color-bodrum-blue)]/80' : ''} ${isServicesActive ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.services}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <Link href={routeMap.references[lang]} className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${isReferencesActive ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            {dict.nav.references}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isReferencesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href={routeMap.contact[lang]} className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'contact' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
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
