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
      title: dict.nav.serviceDropdown.mechanical,
      href: routeMap.mechanical[lang]
    },
    {
      title: dict.nav.serviceDropdown.electrical,
      href: routeMap.electrical[lang]
    },
    {
      title: dict.nav.serviceDropdown.finishing,
      href: routeMap.finishing[lang]
    },
    {
      title: dict.nav.serviceDropdown.technicalConsultancy,
      href: routeMap.technicalConsultancy[lang]
    },
    {
      title: dict.nav.serviceDropdown.solarEnergy,
      href: routeMap.solarEnergy[lang]
    }
  ];

  return (
    <div 
      id="services-dropdown"
      ref={dropdownRef}
      data-testid="desktop-services-dropdown"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 shadow-xl overflow-hidden z-[120] rounded-md transition-all duration-300 opacity-100"
    >
      <div className="flex flex-col py-2">
        {services.map((service, index) => (
          <Link 
            key={index}
            href={service.href}
            onClick={onClose}
            className="group px-5 py-3 transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            <span className="block text-[15px] font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
