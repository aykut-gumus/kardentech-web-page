"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';
import { routeMap } from '@/i18n/routes';

interface ServicesDropdownProps {
  onClose: () => void;
  lang: Locale;
}

export default function ServicesDropdown({ onClose, lang }: ServicesDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(lang);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const services = [
    {
      title: dict.nav.serviceDropdown.electrical,
      href: routeMap.electrical[lang]
    },
    {
      title: dict.nav.serviceDropdown.mechanical,
      href: routeMap.mechanical[lang]
    },
    {
      title: dict.nav.serviceDropdown.finishing,
      href: routeMap.finishing[lang]
    }
  ];

  return (
    <div 
      id="services-dropdown"
      ref={dropdownRef}
      data-testid="desktop-services-dropdown"
      className="absolute top-full right-0 w-[760px] max-w-[calc(100vw-32px)] bg-[var(--color-white)] border-t border-[var(--color-medium-gray)] shadow-lg overflow-hidden z-[120] pointer-events-auto rounded-bl-xl rounded-br-xl"
    >
      <div className="py-6 px-8">
        <div className="grid grid-cols-4 gap-6 items-center">
          
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              onClick={onClose}
              className="min-w-0 group flex flex-col items-start p-3 -m-3 hover:bg-[var(--color-light-gray)] rounded transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)]"
            >
              <h3 className="text-sm font-bold leading-tight break-normal text-[var(--color-charcoal)] group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 uppercase">
                {service.title}
              </h3>
            </Link>
          ))}

          <div className="min-w-0 flex flex-col items-start justify-center h-full border-l border-[var(--color-medium-gray)] pl-6 ml-2">
            <Link
              href={routeMap.services[lang]}
              onClick={onClose}
              className="group inline-flex items-center text-sm font-semibold tracking-widest text-[var(--color-charcoal)] hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] p-2 -ml-2"
            >
              {dict.common.all}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
