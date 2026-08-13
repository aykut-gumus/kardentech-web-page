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

export default function Navbar({ lang }: { lang: Locale }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const pathname = usePathname();
  const dict = getDictionary(lang);
  const pageId = getPageIdFromPath(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
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

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const isServicesActive = ['services', 'electrical', 'mechanical', 'finishing'].includes(pageId);
  const isReferencesActive = pageId === 'references' || pageId === 'dynamic-reference';

  return (
    <div className="relative z-50 bg-[var(--color-white)] shadow-sm shrink-0" ref={dropdownRef}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 2xl:px-32 h-[80px]">
        {/* Logo */}
        <Link 
          href={routeMap.home[lang]} 
          onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
          className="flex flex-col relative z-50 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm p-1 -m-1"
        >
          <Image 
            src="/images/brand/kardentech-logo.png" 
            alt="Kardentech Logo" 
            width={240}
            height={60}
            priority
            className="w-[145px] md:w-[180px] lg:w-[210px] 2xl:w-[230px] h-auto object-contain"
          />
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden p-2 text-[var(--color-charcoal)] focus:outline-none z-50 rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)]"
          aria-label="Toggle menu" 
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal)] relative z-50">
          <Link 
            href={routeMap.home[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'home' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.home}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link 
            href={routeMap.about[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'about' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.about}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          
          <button 
            onClick={toggleServices}
            aria-expanded={isServicesOpen}
            aria-controls="services-dropdown"
            className={`cursor-pointer transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${isServicesOpen ? 'text-[var(--color-bodrum-blue)]/80' : ''} ${isServicesActive ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.services}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isServicesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <Link 
            href={routeMap.references[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${isReferencesActive ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.references}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isReferencesActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link 
            href={routeMap.contact[lang]} 
            onClick={() => setIsServicesOpen(false)}
            className={`transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm ${pageId === 'contact' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            {dict.nav.contact}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pageId === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[80px] bg-black/[0.03] z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full right-0 w-[62vw] max-w-[260px] bg-[#22272B]/70 backdrop-blur-lg z-40 rounded-bl-xl shadow-xl border-l border-white/10 overflow-hidden">
          <div className="flex flex-col py-2 text-[17px] font-medium text-white/90">
            <Link 
              href={routeMap.home[lang]} 
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${pageId === 'home' ? 'text-[#126DA6] border-[#126DA6]' : 'border-transparent'}`}
            >
              {dict.nav.home}
            </Link>
            <Link 
              href={routeMap.about[lang]} 
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${pageId === 'about' ? 'text-[#126DA6] border-[#126DA6]' : 'border-transparent'}`}
            >
              {dict.nav.about}
            </Link>
            
            <div className="flex flex-col">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`flex items-center justify-end gap-2 w-full px-5 py-3.5 transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${isServicesActive ? 'text-[#126DA6] border-[#126DA6]' : 'border-transparent'}`}
              >
                {isMobileServicesOpen ? <ChevronUp className="w-5 h-5 opacity-70" /> : <ChevronDown className="w-5 h-5 opacity-70" />}
                <span>{dict.nav.services}</span>
              </button>
              
              {isMobileServicesOpen && (
                <div className="flex flex-col bg-black/10 text-[15px] border-r border-[#126DA6]/40">
                  <Link 
                    href={routeMap.electrical[lang]} 
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'electrical' ? 'text-[#126DA6]' : 'text-white/80'}`}
                  >
                    {dict.services.categories.electrical.title}
                  </Link>
                  <Link 
                    href={routeMap.mechanical[lang]} 
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'mechanical' ? 'text-[#126DA6]' : 'text-white/80'}`}
                  >
                    {dict.services.categories.mechanical.title}
                  </Link>
                  <Link 
                    href={routeMap.finishing[lang]} 
                    className={`block px-5 py-3 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 ${pageId === 'finishing' ? 'text-[#126DA6]' : 'text-white/80'}`}
                  >
                    {dict.services.categories.finishing.title}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href={routeMap.references[lang]} 
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${isReferencesActive ? 'text-[#126DA6] border-[#126DA6]' : 'border-transparent'}`}
            >
              {dict.nav.references}
            </Link>
            <Link 
              href={routeMap.contact[lang]} 
              className={`block px-5 py-3.5 text-right transition-colors duration-200 focus:outline-none hover:bg-white/5 border-r-2 ${pageId === 'contact' ? 'text-[#126DA6] border-[#126DA6]' : 'border-transparent'}`}
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Dropdown Overlay */}
      {isServicesOpen && (
        <div 
          className="hidden md:block fixed inset-0 top-[116px] bg-black/0 z-30"
          onClick={() => setIsServicesOpen(false)}
        />
      )}

      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} lang={lang} />
      </div>
    </div>
  );
}
