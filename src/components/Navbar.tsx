"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap, getPageIdFromPath } from '@/i18n/routes';

import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap' 
});

export default function Navbar({ lang }: { lang: Locale }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const pathname = usePathname();
  const dict = getDictionary(lang);
  const pageId = getPageIdFromPath(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isServicesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);



  const isServicesActive = ['services', 'electrical', 'mechanical', 'finishing'].includes(pageId);
  const isReferencesActive = pageId === 'references' || pageId === 'dynamic-reference';

  return (
    <div className="relative z-[100] bg-[var(--color-white)] shadow-sm shrink-0" ref={dropdownRef}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 2xl:px-32 h-[80px]">
        {/* Logo */}
        <Link 
          href={routeMap.home[lang]} 
          onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
          className="flex items-center gap-2 md:gap-[10px] relative z-50 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm p-1 -m-1"
        >
          <Image 
            src="/images/brand/kardentech-logo-company.jpeg" 
            alt="Kardentech Logo" 
            width={1330}
            height={446}
            priority
            className="h-[45px] md:h-[55px] w-auto object-contain"
          />
          {pageId === 'home' && (
            <span className={`${tangerine.className} text-[var(--color-bodrum-blue)] text-[32px] md:text-[42px] lg:text-[44px] 2xl:text-[48px] translate-y-[2px] md:translate-y-[3px]`}>
              Bodrum
            </span>
          )}
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="min-[860px]:hidden p-2 text-[var(--color-charcoal)] focus:outline-none z-50 rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)]"
          aria-label="Toggle menu" 
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden min-[860px]:flex items-center gap-8 text-[15px] font-medium text-[var(--color-charcoal)] relative z-[100] whitespace-nowrap">
          <Link 
            href={routeMap.home[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'home' ? 'text-[var(--color-bodrum-blue-dark)]' : 'hover:text-[var(--color-bodrum-blue-dark)]'}`}
          >
            {dict.nav.home}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link 
            href={routeMap.about[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'about' ? 'text-[var(--color-bodrum-blue-dark)]' : 'hover:text-[var(--color-bodrum-blue-dark)]'}`}
          >
            {dict.nav.about}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          
          <div 
            ref={servicesMenuRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="relative"
          >
            <Link 
              href={routeMap.services[lang]}
              onClick={() => setIsServicesOpen(false)}
              aria-expanded={isServicesOpen}
              aria-haspopup="menu"
              className={`relative z-[110] pointer-events-auto cursor-pointer flex items-center gap-1 transition-colors group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${isServicesOpen ? 'text-[var(--color-bodrum-blue-dark)]/80' : ''} ${isServicesActive ? 'text-[var(--color-bodrum-blue-dark)]' : 'hover:text-[var(--color-bodrum-blue-dark)]'}`}
              data-testid="desktop-services-trigger"
            >
              {dict.nav.services}
              <ChevronDown className={`pointer-events-none w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              <span className={`pointer-events-none absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Desktop Dropdown */}
            {isServicesOpen && (
              <ServicesDropdown onClose={() => setIsServicesOpen(false)} lang={lang} />
            )}
          </div>
          
          <Link 
            href={routeMap.references[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${isReferencesActive ? 'text-[var(--color-bodrum-blue-dark)]' : 'hover:text-[var(--color-bodrum-blue-dark)]'}`}
          >
            {dict.nav.references}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isReferencesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link 
            href={routeMap.contact[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'contact' ? 'text-[var(--color-bodrum-blue-dark)]' : 'hover:text-[var(--color-bodrum-blue-dark)]'}`}
          >
            {dict.nav.contact}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="min-[860px]:hidden fixed inset-0 top-[80px] bg-black/[0.03] z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="min-[860px]:hidden absolute top-full right-0 w-[62vw] max-w-[260px] bg-[#22272B]/70 backdrop-blur-lg z-40 rounded-bl-xl shadow-xl border-l border-white/10 overflow-hidden">
          <div className="flex flex-col py-2 text-[18px] font-medium text-white/95">
            <Link 
              href={routeMap.home[lang]} 
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${pageId === 'home' ? 'text-[var(--color-bodrum-blue)] border-[var(--color-bodrum-blue)]' : 'border-transparent'}`}
            >
              {dict.nav.home}
            </Link>
            <Link 
              href={routeMap.about[lang]} 
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${pageId === 'about' ? 'text-[var(--color-bodrum-blue)] border-[var(--color-bodrum-blue)]' : 'border-transparent'}`}
            >
              {dict.nav.about}
            </Link>
            
            {/* SERVICES DROPDOWN MOBILE */}
            <div className="flex flex-col">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`flex items-center justify-end gap-2 w-full px-5 py-3.5 transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${isServicesActive ? 'text-[var(--color-bodrum-blue)] border-[var(--color-bodrum-blue)]' : 'border-transparent'}`}
              >
                {isMobileServicesOpen ? <ChevronUp className="w-5 h-5 opacity-70" /> : <ChevronDown className="w-5 h-5 opacity-70" />}
                <span>{dict.nav.services}</span>
              </button>
              
              {isMobileServicesOpen && (
                <div className="flex flex-col bg-black/10 text-[15px] border-r border-[var(--color-bodrum-blue)]/40">
                  <Link 
                    href={routeMap.electrical[lang]} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'electrical' ? 'text-[var(--color-bodrum-blue)]' : 'text-white/80'}`}
                  >
                    {dict.nav.serviceDropdown.electrical}
                  </Link>
                  <Link 
                    href={routeMap.mechanical[lang]} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'mechanical' ? 'text-[var(--color-bodrum-blue)]' : 'text-white/80'}`}
                  >
                    {dict.nav.serviceDropdown.mechanical}
                  </Link>
                  <Link 
                    href={routeMap.finishing[lang]} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'finishing' ? 'text-[var(--color-bodrum-blue)]' : 'text-white/80'}`}
                  >
                    {dict.nav.serviceDropdown.finishing}
                  </Link>
                  <Link 
                    href={routeMap.technicalConsultancy[lang]} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'technicalConsultancy' ? 'text-[var(--color-bodrum-blue)]' : 'text-white/80'}`}
                  >
                    {dict.nav.serviceDropdown.technicalConsultancy}
                  </Link>
                  <Link 
                    href={routeMap.solarEnergy[lang]} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'solarEnergy' ? 'text-[var(--color-bodrum-blue)]' : 'text-white/80'}`}
                  >
                    {dict.nav.serviceDropdown.solarEnergy}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href={routeMap.references[lang]} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${isReferencesActive ? 'text-[var(--color-bodrum-blue)] border-[var(--color-bodrum-blue)]' : 'border-transparent'}`}
            >
              {dict.nav.references}
            </Link>
            <Link 
              href={routeMap.contact[lang]} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${pageId === 'contact' ? 'text-[var(--color-bodrum-blue)] border-[var(--color-bodrum-blue)]' : 'border-transparent'}`}
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      )}


    </div>
  );
}
